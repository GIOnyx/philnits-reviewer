// PhilNITS / ITPEC FE Examination Domain Types

export type ThemeMode = 'dark' | 'light';

export type ExamTab = 'study' | 'subject_a' | 'subject_b' | 'leitner' | 'flashcards' | 'analytics';

export type DomainCategory = 'Technology' | 'Management' | 'Strategy';

export interface SubjectAQuestion {
  id: string;
  category: DomainCategory;
  subdomain: string;
  examYear: number;
  questionText: string;
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

export interface SubjectBScenario {
  scenarioId: string;
  title: string;
  examYear: number;
  domain: string;
  contextMarkdown: string;
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

export interface DiagnosticMetrics {
  totalAttempted: number;
  totalCorrect: number;
  accuracyPercentage: number;
  domainAccuracy: Record<DomainCategory, number>;
  subdomainAccuracy: Record<string, { attempted: number; correct: number }>;
  currentStreak: number;
}
