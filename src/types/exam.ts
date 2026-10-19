// PhilNITS / ITPEC FE Examination Domain Types

export type ThemeMode = 'dark' | 'light';

export type ExamTab = 'study' | 'subject_a' | 'subject_b' | 'leitner';

export type DomainCategory = 'Technology' | 'Management' | 'Strategy';

export interface SubjectAQuestion {
  id: string;
  category: DomainCategory;
  subdomain: string;
  examYear: number;
  questionText: string;
  pdfUrl?: string;
  pdfPage?: number;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficultyWeight?: number;
}

export interface TraceTableCell {
  step: number;
  lineNo: number;
  variableValues: Record<string, string | number>;
}

export interface TraceTableSpec {
  variables: string[];
  rows: {
    step: number;
    lineNo: number;
    expectedValues: Record<string, string | number>;
    description?: string;
  }[];
}

export interface SubjectBSubQuestion {
  questionId: string;
  questionNumber: number;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  requiresPseudocode?: boolean;
  pseudocodeBlock?: string;
  traceTableSpec?: TraceTableSpec;
}

/**
 * A single answer choice from the normalized question_choices table.
 * Standard mode (Subject A / Subject B non-matrix): `text` is populated.
 * Matrix mode (Subject B fill-in-the-blank): `blank_a/b/c` are populated.
 */
export interface QuestionChoice {
  /** Lowercase letter 'a' through 'j' */
  letter: string;
  /** Standard mode: full choice text string. Null for matrix choices. */
  text?: string | null;
  /** Matrix mode: value for blank column A. Null for standard choices. */
  blank_a?: string | null;
  /** Matrix mode: value for blank column B. Null for standard choices. */
  blank_b?: string | null;
  /** Matrix mode: value for blank column C. Null for standard choices. */
  blank_c?: string | null;
}


export interface SubjectBScenario {
  scenarioId: string;
  title: string;
  examYear: number;
  domain: string;
  contextMarkdown: string;
  pdfUrl?: string;
  pdfPage?: number;
  diagramSvg?: string;
  subQuestions: SubjectBSubQuestion[];
}

export interface AnkiFlashcard {
  id: string;
  topic: string;
  front: string;
  back: string;
  codeSnippet?: string;
}

export interface UserAnswerLog {
  questionId: string;
  isCorrect: boolean;
  timeTakenSeconds: number;
  timestamp: string;
}

export interface LeitnerState {
  questionId: string;
  currentBox: number; // 1 to 5
  nextReviewDate: string; // YYYY-MM-DD
  lastReviewedAt: string;
}

export interface MasteryState {
  questionId: string;
  consecutiveCorrect: number; // 0-3, resets to 0 on wrong answer
  isMastered: boolean; // true when consecutiveCorrect reaches 3
  totalAttempts: number;
  lastAttemptedAt: string;
}

export interface DiagnosticMetrics {
  totalAttempted: number;
  totalCorrect: number;
  accuracyPercentage: number;
  domainAccuracy: Record<DomainCategory, number>;
  subdomainAccuracy: Record<string, { attempted: number; correct: number }>;
  currentStreak: number;
}

export interface CuratedResource {
  id: string;
  resource_title: string;
  category: string;
  subtopic: string;
  resource_type: 'PDF' | 'SlideDeck' | 'GitHub Repo' | 'Web Article' | 'VideoEmbed';
  embed_url: string;
  summary_of_content: string;
  badge?: string;
  fileSize?: string;
}

export interface StudyDomainSection {
  id: string;
  title: string;
  description: string;
  iconName: string;
  widgetType?: 'hamming' | 'subnet' | 'normalization' | 'evm';
  subtopics: string[];
}

export interface UserAnswerHistoryRecord {
  id?: string;
  username: string;
  question_id: string;
  is_correct: boolean;
  time_taken_seconds: number;
  exam_type: string;
  created_at?: string;
}

export interface UserAnswerStats {
  totalAnswers: number;
  correctAnswers: number;
  accuracy: string;
  avgTimeSeconds: string;
  data: UserAnswerHistoryRecord[];
}

export interface UserPreferences {
  theme?: string;
  leitner_mode?: string;
  leitner_browse_box?: number;
  weak_area_spotlight?: boolean;
}

export interface AiGeneratedQuestionRecord {
  id?: string;
  username: string;
  question_type: 'subject_a' | 'subject_b';
  topic: string;
  question_data: Record<string, unknown>;
  created_at?: string;
}

