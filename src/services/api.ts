/**
 * Hybrid API Client for PhilNITS Reviewer Application
 * Connects to deployed Windmill endpoints or loads from Supabase, falling back to seed data.
 */

import { SEED_SUBJECT_A_QUESTIONS } from '../data/seed/subjectA_questions';
import { SEED_SUBJECT_B_SCENARIOS } from '../data/seed/subjectB_scenarios';
import { SubjectAQuestion, SubjectBScenario, LeitnerState, MasteryState } from '../types/exam';
import { updateLeitnerState } from '../utils/leitnerEngine';
import { updateMasteryState, saveMasteryStates, getStoredMasteryStates } from '../utils/masteryEngine';
import { getSupabaseClient, isSupabaseConfigured } from './supabase';

const WINDMILL_BASE_URL = import.meta.env.VITE_WINDMILL_BASE_URL || 'https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com';
const WINDMILL_WORKSPACE = import.meta.env.VITE_WINDMILL_WORKSPACE || 'main';
const WINDMILL_TOKEN = import.meta.env.VITE_WINDMILL_TOKEN || '';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_WINDMILL_TOKEN || '';

export class PhilnitsApiService {
  // Windmill is enabled when a token is present in env
  private static isWindmillConfigured(): boolean {
    return Boolean(WINDMILL_TOKEN && WINDMILL_TOKEN.length > 5);
  }

  // Check if Gemini API key is configured
  private static isGeminiConfigured(): boolean {
    return Boolean(GEMINI_API_KEY && GEMINI_API_KEY.length > 5);
  }

  // Fisher-Yates shuffle algorithm
  private static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Load Subject A questions from the normalized Supabase schema (exams / questions / question_choices).
   * Returns null if Supabase is not configured or the tables are empty.
   */
  public static async fetchSubjectAFromSupabase(): Promise<SubjectAQuestion[] | null> {
    const sb = getSupabaseClient();
    if (!sb) return null;

    try {
      // First get all FE-A exam IDs
      const { data: exams, error: examError } = await sb
        .from('exams')
        .select('id, year, session, subject')
        .eq('subject', 'FE-A');

      if (examError || !exams || exams.length === 0) return null;

      const examIds = exams.map((e: any) => e.id);
      const examMap = Object.fromEntries(exams.map((e: any) => [e.id, e]));

      // Fetch questions for those exams
      const { data: questions, error } = await sb
        .from('questions')
        .select(`
          id,
          exam_id,
          question_number,
          question_text,
          pseudo_code,
          diagram_description,
          correct_answer,
          explanation,
          question_choices ( letter, text, blank_a, blank_b, blank_c )
        `)
        .in('exam_id', examIds)
        .order('question_number', { ascending: true });

      if (error) {
        console.warn('[Supabase] fetchSubjectAFromSupabase error:', error.message);
        return null;
      }
      if (!questions || questions.length === 0) return null;

      const mapped: SubjectAQuestion[] = questions.map((q: any) => {
        const exam = examMap[q.exam_id] ?? {};
        const sortedChoices = (q.question_choices ?? [])
          .sort((a: any, b: any) => a.letter.localeCompare(b.letter));

        const options: string[] = sortedChoices.map((c: any) =>
          c.text ?? [c.blank_a, c.blank_b, c.blank_c].filter(Boolean).join(' / ')
        );

        const correctIndex = Math.max(
          0,
          sortedChoices.findIndex((c: any) => c.letter === q.correct_answer)
        );

        return {
          id: q.id,
          category: 'Technology' as const,
          subdomain: `FE-A ${exam.year ?? ''} ${exam.session ?? ''}`.trim(),
          examYear: exam.year ?? 2024,
          questionText: q.question_text,
          options,
          correctIndex,
          explanation: q.explanation ?? '',
          difficultyWeight: 1.0,
        } as SubjectAQuestion;
      });

      console.log(`[Supabase] Loaded ${mapped.length} Subject A questions from DB.`);
      return mapped;
    } catch (err) {
      console.warn('[Supabase] fetchSubjectAFromSupabase exception:', err);
      return null;
    }
  }

  // Fetch Subject A Questions from the curated local set.
  public static async getSubjectAQuestions(): Promise<SubjectAQuestion[]> {
    return this.shuffleArray(SEED_SUBJECT_A_QUESTIONS);
  }

  // Fetch Subject B scenarios from the curated PDF-backed local set.
  public static async getSubjectBScenarios(): Promise<SubjectBScenario[]> {
    return this.shuffleArray(SEED_SUBJECT_B_SCENARIOS);
  }

  /**
   * Load Subject B scenarios from the normalized Supabase schema (exams / questions / question_choices).
   * Groups flat question rows into SubjectBScenario objects: every 3 consecutive questions
   * from the same exam form one scenario (matching FE-B structure: 4 scenarios × 3 sub-questions).
   * Returns null if Supabase is not configured or the tables are empty.
   */
  public static async fetchSubjectBFromSupabase(): Promise<SubjectBScenario[] | null> {
    const sb = getSupabaseClient();
    if (!sb) return null;

    const DOMAINS = [
      'Algorithms & Programming',
      'Data Structures & Memory',
      'Software Engineering',
      'Computer Architecture & OS',
      'Databases & SQL',
      'Networking & Security',
    ];

    try {
      // Step 1: get all FE-B exam IDs
      const { data: exams, error: examError } = await sb
        .from('exams')
        .select('id, year, session, subject')
        .eq('subject', 'FE-B');

      if (examError || !exams || exams.length === 0) return null;

      const examIds = exams.map((e: any) => e.id);
      const examMap = Object.fromEntries(exams.map((e: any) => [e.id, e]));

      // Step 2: fetch all FE-B questions with choices
      const { data: questions, error } = await sb
        .from('questions')
        .select(`
          id,
          exam_id,
          question_number,
          question_text,
          pseudo_code,
          diagram_description,
          correct_answer,
          explanation,
          question_choices ( letter, text, blank_a, blank_b, blank_c )
        `)
        .in('exam_id', examIds)
        .order('question_number', { ascending: true });

      if (error) {
        console.warn('[Supabase] fetchSubjectBFromSupabase error:', error.message);
        return null;
      }
      if (!questions || questions.length === 0) return null;

      // Group by exam id
      const byExam = new Map<string, { exam: any; questions: any[] }>();
      for (const q of questions) {
        const examId = q.exam_id;
        if (!examId) continue;
        if (!byExam.has(examId)) byExam.set(examId, { exam: examMap[examId], questions: [] });
        byExam.get(examId)!.questions.push(q);
      }

      const scenarios: SubjectBScenario[] = [];
      const SUBQS_PER_SCENARIO = 3;

      for (const { exam, questions: examQs } of byExam.values()) {
        examQs.sort((a, b) => a.question_number - b.question_number);

        for (let i = 0; i < examQs.length; i += SUBQS_PER_SCENARIO) {
          const group = examQs.slice(i, i + SUBQS_PER_SCENARIO);
          const scenarioNum = Math.floor(i / SUBQS_PER_SCENARIO) + 1;
          const yearCode = `${exam.year}${exam.session === 'Spring' ? 's' : 'a'}`;
          const scenarioId = `fe-${yearCode}-scenario${scenarioNum}`;
          const domain = DOMAINS[(scenarioNum - 1) % DOMAINS.length];

          // contextMarkdown: first question text + pseudo_code if present
          const firstQ = group[0];
          let contextMarkdown = `### Background Context & Specifications\n\n${firstQ.question_text}`;
          if (firstQ.pseudo_code) {
            contextMarkdown += `\n\n---\n\n### ITPEC Pseudocode Specification\n\`\`\`text\n${firstQ.pseudo_code}\n\`\`\``;
          }

          const subQuestions = group.map((q, idx) => {
            const sortedChoices = (q.question_choices ?? [])
              .sort((a: any, b: any) => a.letter.localeCompare(b.letter));

            const options: string[] = sortedChoices.map((c: any) => {
              if (c.text) return c.text;
              return [c.blank_a, c.blank_b, c.blank_c].filter(Boolean).join(' / ');
            });

            const correctIndex = Math.max(
              0,
              sortedChoices.findIndex((c: any) => c.letter === q.correct_answer)
            );

            return {
              questionId: q.id,
              questionNumber: idx + 1,
              prompt: q.question_text,
              options,
              correctIndex,
              explanation: q.explanation ?? '',
              requiresPseudocode: Boolean(q.pseudo_code),
              pseudocodeBlock: q.pseudo_code ?? undefined,
            };
          });

          scenarios.push({
            scenarioId,
            title: `Subject B Scenario ${scenarioNum} (${exam.year} ${exam.session}): ${domain}`,
            examYear: exam.year,
            domain,
            contextMarkdown,
            subQuestions,
          });
        }
      }

      console.log(`[Supabase] Loaded ${scenarios.length} Subject B scenarios from DB.`);
      return scenarios.length > 0 ? scenarios : null;
    } catch (err) {
      console.warn('[Supabase] fetchSubjectBFromSupabase exception:', err);
      return null;
    }
  }

  /**
   * Trigger a Windmill pdf_vision_extractor job from the frontend.
   */
  public static async triggerWindmillExtraction(
    file: File,
    examYear: number,
    session: string,
    subject: string,
  ): Promise<string> {
    if (!WINDMILL_TOKEN) {
      throw new Error('VITE_WINDMILL_TOKEN is not configured in .env');
    }

    // Read file as base64
    const fileBuffer = await file.arrayBuffer();
    const base64Data = btoa(
      new Uint8Array(fileBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    const res = await fetch(
      `${WINDMILL_BASE_URL}/api/w/${WINDMILL_WORKSPACE}/jobs/run/f/exam/pdf_vision_extractor`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${WINDMILL_TOKEN}`,
        },
        body: JSON.stringify({
          pdf_base64: base64Data,
          pdf_filename: file.name,
          exam_year: examYear,
          session,
          subject,
        }),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Windmill API error (${res.status}): ${errorText}`);
    }

    // Windmill returns the job UUID as plain text
    const jobId = (await res.text()).replace(/"/g, '').trim();
    return jobId;
  }

  /**
   * Poll a Windmill job until it completes or fails.
   * Returns { success: true, result } or { success: false, error }.
   */
  public static async pollWindmillJob(
    jobId: string,
    onProgress?: (message: string) => void,
    maxAttempts = 72, // 6 minutes at 5s intervals
  ): Promise<{ success: boolean; result?: any; error?: string }> {
    if (!WINDMILL_TOKEN) return { success: false, error: 'No Windmill token configured' };

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      await new Promise((r) => setTimeout(r, 5000));

      try {
        const res = await fetch(
          `${WINDMILL_BASE_URL}/api/w/${WINDMILL_WORKSPACE}/jobs/get/${jobId}`,
          { headers: { 'Authorization': `Bearer ${WINDMILL_TOKEN}` } }
        );
        if (!res.ok) continue;

        const job = await res.json();

        if (job.type === 'CompletedJob') {
          if (job.success === false) {
            return { success: false, error: job.result?.error ?? 'Job failed with no message' };
          }
          return { success: true, result: job.result };
        }

        if (job.type === 'RunningJob') {
          const lastLog = (job.logs ?? '').trim().split('\n').pop() ?? 'Processing…';
          onProgress?.(lastLog);
        } else if (job.type === 'QueuedJob') {
          onProgress?.('Queued — waiting for a free worker…');
        }
      } catch {
        // network blip — keep polling
      }
    }

    return { success: false, error: 'Job timed out after 6 minutes' };
  }

  // Log user answer telemetry & update both Leitner and Mastery state
  public static async logTelemetry(
    questionId: string,
    isCorrect: boolean,
    timeTakenSeconds: number,
    existingLeitnerStates: Record<string, LeitnerState>,
    existingMasteryStates: Record<string, MasteryState>,
    username?: string,
    examType: 'subject_a' | 'subject_b' | 'leitner' = 'subject_a'
  ): Promise<{ leitner: Record<string, LeitnerState>; mastery: Record<string, MasteryState> }> {
    // Update Leitner (time-based spacing for Leitner tab)
    const updatedLeitnerState = updateLeitnerState(existingLeitnerStates[questionId], questionId, isCorrect);
    const newLeitnerMap = {
      ...existingLeitnerStates,
      [questionId]: updatedLeitnerState
    };
    localStorage.setItem('philnits_leitner_states', JSON.stringify(newLeitnerMap));

    // Update Mastery (streak-based for Subject A/B/Flashcards)
    const updatedMasteryState = updateMasteryState(existingMasteryStates[questionId], questionId, isCorrect);
    const newMasteryMap = {
      ...existingMasteryStates,
      [questionId]: updatedMasteryState
    };
    saveMasteryStates(newMasteryMap);

    // Optional telemetry ping to Windmill if configured
    if (this.isWindmillConfigured()) {
      try {
        fetch(`${WINDMILL_BASE_URL}/api/w/${WINDMILL_WORKSPACE}/jobs/run/f/exam/log_telemetry`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${WINDMILL_TOKEN}`
          },
          body: JSON.stringify({ questionId, isCorrect, timeTakenSeconds })
        }).catch(() => {});
      } catch (e) {
        // silent
      }
    }

    return { leitner: newLeitnerMap, mastery: newMasteryMap };
  }

  public static getStoredLeitnerStates(): Record<string, LeitnerState> {
    const raw = localStorage.getItem('philnits_leitner_states');
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  // Call Google Gemini API directly
  public static async askAiChat(
    contextText: string,
    message: string,
    history: { role: 'user' | 'model'; parts: string[] }[]
  ): Promise<string> {
    if (!this.isGeminiConfigured()) {
      return `⚠️ **System Notice**: Gemini API key is not configured in \`.env\`.
Please write the \`VITE_GEMINI_API_KEY\` into your local \`.env\` file and restart your Vite development server to activate live Gemini tutor chat.`;
    }

    try {
      const systemPrompt = `You are a rigorous, academic-focused tutor for the PhilNITS / ITPEC FE Exam.
The user is currently studying: "${contextText}".
Your primary goal is to guide the user in mastering this topic. You should explain concepts using first-principles pedagogical breakdowns, detailed worked examples, and practical exam shortcuts.

GUARDRAIL: You should stay focused on computer science, software engineering, mathematics, and the PhilNITS/ITPEC FE Exam syllabus (including Basic Theory, Computer Systems, Memory, Networks, Databases, Algorithms, and Software Engineering).
If the user asks questions that are completely unrelated to computer science, mathematics, or the exam syllabus (e.g., general advice, cooking, sports, pop culture), politely refuse and state: "I am sorry, but I can only answer questions related to the exam syllabus and the current topic: ${contextText}."
However, do not be overly defensive—if the user asks about shortcuts, formulas, coding principles, or related CS concepts that tie back to their study, answer them fully and tie the explanation back to the active context of "${contextText}".`;

      // Format history for Google Gemini contents structure
      const formattedContents = [
        ...history.map(h => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: h.parts.join('\n') }]
        })),
        {
          role: 'user',
          parts: [{ text: message }]
        }
      ];

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: formattedContents,
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          }
        })
      });

      if (res.ok) {
        const data = await res.json();
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (responseText) return responseText;
        return `⚠️ **API Parsing Error**: Response structure from Gemini did not contain text.
Raw: ${JSON.stringify(data)}`;
      } else {
        const errorText = await res.text();
        return `⚠️ **API Error**: Gemini returned status **${res.status}** (${res.statusText || 'Error'}).
Details: ${errorText}`;
      }
    } catch (err: any) {
      console.error('Error invoking Gemini Direct API:', err);
      return `⚠️ **Network Exception**: Failed to connect to Google Gemini API. 
Message: *${err?.message || 'Connection refused'}*.
Please verify your internet connection and verify that CORS is allowed by your network setup.`;
    }
  }

  // Generate a dynamic practice question using Google Gemini API directly
  public static async generateDynamicQuestion(
    contextText: string,
    isSubjectB: boolean,
    username?: string
  ): Promise<any> {
    if (!this.isGeminiConfigured()) {
      throw new Error('Gemini API key is not configured in .env');
    }

    const systemPrompt = isSubjectB
      ? `You are an official PhilNITS Exam Writer. Generate a single Afternoon Exam (Subject B) scenario block locked to the topic/visualizer: "${contextText}".
The response MUST be a single raw JSON object matching the following structure:
{
  "scenarioId": "ai-gen-b-${Date.now()}",
  "title": "Subject B: ${contextText} Analysis",
  "examYear": 2026,
  "domain": "Algorithms & Data Structures",
  "contextMarkdown": "### Scenario Description\\n[Provide a detailed paragraph detailing the data structures or variables used, rules, and a pseudocode block styled as: \\x60\\x60\\x60text\\n...\\x60\\x60\\x60]",
  "subQuestions": [
    {
      "questionId": "ai-gen-b-q1",
      "questionNumber": 1,
      "prompt": "What is the expected output when...",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 0,
      "explanation": "Provide a detailed step-by-step mathematical or logical explanation.",
      "requiresPseudocode": true,
      "pseudocodeBlock": "[A smaller focused snippet of the pseudocode relevant to this subquestion, or the whole block]",
      "traceTableSpec": {
        "variables": ["Iteration", "Var A", "Var B"],
        "rows": [
          { "step": 1, "lineNo": 1, "expectedValues": { "Iteration": "Initial", "Var A": "value", "Var B": "value" } }
        ]
      }
    }
  ]
}
Ensure the pseudocode block uses standard ITPEC pseudo-language notation (arrows ← for assignments, 1-based indexing, ≠ and ≤ operators).
Return ONLY raw, valid JSON. Do not wrap it in markdown code blocks like \`\`\`json. Do not include any introductory or concluding text.`
      : `You are an official PhilNITS Exam Writer. Generate a single Multiple Choice Question (Subject A) locked to the topic/visualizer: "${contextText}".
The response MUST be a single raw JSON object matching the following structure:
{
  "id": "ai-gen-a-${Date.now()}",
  "category": "Technology",
  "subdomain": "${contextText}",
  "examYear": 2026,
  "questionText": "What is the result of...",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctIndex": 0,
  "explanation": "Provide a detailed step-by-step mathematical explanation.",
  "difficultyWeight": 1.0
}
Return ONLY raw, valid JSON. Do not wrap it in markdown code blocks like \`\`\`json. Do not include any introductory or concluding text.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: isSubjectB ? 'Generate a Subject B scenario.' : 'Generate a Subject A question.' }]
          }
        ],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) {
      throw new Error(`Gemini returned status ${res.status} (${res.statusText})`);
    }

    const data = await res.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!responseText) {
      throw new Error('API response did not contain text content.');
    }

    const sanitized = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(sanitized);
  }
}
