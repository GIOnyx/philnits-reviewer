import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { StudyHub } from './components/StudyHub';
import { SubjectAExam } from './components/SubjectAExam';
import { SubjectBWorkbench } from './components/SubjectBWorkbench';
import { LeitnerDeck } from './components/LeitnerDeck';
import { FlashcardDeck } from './components/FlashcardDeck';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { PhilnitsApiService } from './services/api';
import { ExamTab, ThemeMode, SubjectAQuestion, SubjectBScenario, AnkiFlashcard, LeitnerState, UserAnswerLog } from './types/exam';
import { isQuestionDueToday } from './utils/leitnerEngine';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ExamTab>('study');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem('philnits_theme') as ThemeMode) || 'dark';
  });

  const [subjectAQuestions, setSubjectAQuestions] = useState<SubjectAQuestion[]>([]);
  const [subjectBScenarios, setSubjectBScenarios] = useState<SubjectBScenario[]>([]);
  const [flashcards, setFlashcards] = useState<AnkiFlashcard[]>([]);
  const [leitnerStates, setLeitnerStates] = useState<Record<string, LeitnerState>>({});
  const [answerLogs, setAnswerLogs] = useState<UserAnswerLog[]>([]);
  
  // Active topic/subdomain filter when navigating from Study Hub
  const [selectedSubdomainFilter, setSelectedSubdomainFilter] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Apply data-theme attribute for CSS variable styling
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('philnits_theme', theme);
  }, [theme]);

  useEffect(() => {
    // Initial data load
    async function loadData() {
      const qA = await PhilnitsApiService.getSubjectAQuestions();
      const sB = await PhilnitsApiService.getSubjectBScenarios();
      const fc = await PhilnitsApiService.getFlashcards();
      const lState = PhilnitsApiService.getStoredLeitnerStates();

      setSubjectAQuestions(qA);
      setSubjectBScenarios(sB);
      setFlashcards(fc);
      setLeitnerStates(lState);
    }
    loadData();
  }, []);

  const handleAnswerLogged = async (questionId: string, isCorrect: boolean, timeSeconds: number) => {
    const updatedLeitner = await PhilnitsApiService.logTelemetry(
      questionId,
      isCorrect,
      timeSeconds,
      leitnerStates
    );
    setLeitnerStates(updatedLeitner);

    setAnswerLogs((prev) => [
      ...prev,
      {
        questionId,
        isCorrect,
        timeTakenSeconds: timeSeconds,
        timestamp: new Date().toISOString()
      }
    ]);
  };

  const handleStartTest = (domainName: string) => {
    // Set active topic filter and navigate to Subject A
    setSelectedSubdomainFilter(domainName);
    setActiveTab('subject_a');
  };

  const handleClearFilter = () => {
    setSelectedSubdomainFilter(undefined);
  };

  const dueCount = subjectAQuestions.filter((q) => isQuestionDueToday(leitnerStates[q.id])).length;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // Auto-clear filters when manually clicking other tabs
          if (tab !== 'subject_a') {
            setSelectedSubdomainFilter(undefined);
          }
        }}
        theme={theme}
        setTheme={setTheme}
        dueCount={dueCount}
      />

      {/* Main Content Workspace Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'study' && (
          <StudyHub onStartTest={handleStartTest} />
        )}

        {activeTab === 'subject_a' && (
          <SubjectAExam
            questions={subjectAQuestions}
            onAnswerLogged={handleAnswerLogged}
            filterSubdomain={selectedSubdomainFilter}
            onClearFilter={handleClearFilter}
          />
        )}

        {activeTab === 'subject_b' && (
          <SubjectBWorkbench
            scenarios={subjectBScenarios}
            onAnswerLogged={handleAnswerLogged}
          />
        )}

        {activeTab === 'leitner' && (
          <LeitnerDeck
            questions={subjectAQuestions}
            leitnerStates={leitnerStates}
            onAnswerLogged={handleAnswerLogged}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardDeck flashcards={flashcards} />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsDashboard
            logs={answerLogs}
            leitnerStates={leitnerStates}
            questions={subjectAQuestions}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-nav)] py-4 text-center text-xs text-[var(--text-muted)]">
        PhilNITS / ITPEC FE Exam Mastery Engine &bull; Automated via Windmill Workflow Engine &bull; Oct 25, 2026 Target
      </footer>
    </div>
  );
};

export default App;
