/**
 * Hybrid API Client for PhilNITS Reviewer Application
 * Connects to deployed Windmill endpoints (Heroku instance) or falls back to Seed Data.
 */

import { SEED_SUBJECT_A_QUESTIONS } from '../data/seed/subjectA_questions';
import { SEED_SUBJECT_B_SCENARIOS } from '../data/seed/subjectB_scenarios';
import { initialAnkiFlashcards } from '../data/seed/anki_flashcards';
import { SubjectAQuestion, SubjectBScenario, AnkiFlashcard, LeitnerState, MasteryState } from '../types/exam';
import { updateLeitnerState } from '../utils/leitnerEngine';
import { updateMasteryState, saveMasteryStates, getStoredMasteryStates } from '../utils/masteryEngine';

const WINDMILL_BASE_URL = import.meta.env.VITE_WINDMILL_BASE_URL || 'https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com';
const WINDMILL_WORKSPACE = import.meta.env.VITE_WINDMILL_WORKSPACE || 'main';
const WINDMILL_TOKEN = import.meta.env.VITE_WINDMILL_TOKEN || '';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_WINDMILL_TOKEN || '';

export class PhilnitsApiService {
  // Check if live Windmill token is configured
  // Windmill is disabled — the Heroku instance has CORS/auth issues.
  // All data is served from local seed + Gemini AI generation.
  private static isWindmillConfigured(): boolean {
    return false;
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

  // Fetch Subject A Questions
  public static async getSubjectAQuestions(): Promise<SubjectAQuestion[]> {
    if (this.isWindmillConfigured()) {
      try {
        const res = await fetch(`${WINDMILL_BASE_URL}/api/w/${WINDMILL_WORKSPACE}/jobs/run_wait_result/f/exam/get_morning_questions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${WINDMILL_TOKEN}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) return this.shuffleArray(data);
        }
      } catch (err) {
        console.warn('Windmill API fallback to local seed data:', err);
      }
    }
    return this.shuffleArray(SEED_SUBJECT_A_QUESTIONS);
  }

  // Fetch Subject B Scenarios
  public static async getSubjectBScenarios(): Promise<SubjectBScenario[]> {
    if (this.isWindmillConfigured()) {
      try {
        const res = await fetch(`${WINDMILL_BASE_URL}/api/w/${WINDMILL_WORKSPACE}/jobs/run_wait_result/f/exam/get_pm_scenarios`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${WINDMILL_TOKEN}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) return this.shuffleArray(data);
        }
      } catch (err) {
        console.warn('Windmill API fallback to local seed scenarios:', err);
      }
    }
    return this.shuffleArray(SEED_SUBJECT_B_SCENARIOS);
  }

  // Fetch Anki Flashcards
  public static async getFlashcards(): Promise<AnkiFlashcard[]> {
    return this.shuffleArray(initialAnkiFlashcards);
  }

  // Log user answer telemetry & update both Leitner and Mastery state
  public static async logTelemetry(
    questionId: string,
    isCorrect: boolean,
    timeTakenSeconds: number,
    existingLeitnerStates: Record<string, LeitnerState>,
    existingMasteryStates: Record<string, MasteryState>
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
    isSubjectB: boolean
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
