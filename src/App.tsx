import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Navbar, SyncStatus } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { StudyHub } from './components/StudyHub';
import { SubjectAExam } from './components/SubjectAExam';
import { SubjectBWorkbench } from './components/SubjectBWorkbench';
import { LeitnerDeck } from './components/LeitnerDeck';
import { FlashcardDeck } from './components/FlashcardDeck';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { PhilnitsApiService } from './services/api';
import {
  LocalUser,
  getLocalSession,
  clearLocalSession,
  pullLeitnerState,
  pushLeitnerState,
  isSupabaseConfigured,
} from './services/supabase';
import {
  ExamTab, ThemeMode, SubjectAQuestion, SubjectBScenario,
  AnkiFlashcard, LeitnerState, MasteryState, UserAnswerLog
} from './types/exam';
import { isQuestionDueToday } from './utils/leitnerEngine';
import { getStoredMasteryStates } from './utils/masteryEngine';

const SYNC_DEBOUNCE_MS = 2000;

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ExamTab>('study');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem('philnits_theme') as ThemeMode) || 'dark';
  });

  const [subjectAQuestions, setSubjectAQuestions] = useState<SubjectAQuestion[]>([]);
  const [subjectBScenarios, setSubjectBScenarios] = useState<SubjectBScenario[]>([]);
  const [flashcards, setFlashcards] = useState<AnkiFlashcard[]>([]);
  const [leitnerStates, setLeitnerStates] = useState<Record<string, LeitnerState>>({});
  const [masteryStates, setMasteryStates] = useState<Record<string, MasteryState>>({});
  const [answerLogs, setAnswerLogs] = useState<UserAnswerLog[]>([]);
  const [selectedSubdomainFilter, setSelectedSubdomainFilter] = useState<string | undefined>(undefined);

  // Auth
  const [currentUser, setCurrentUser] = useState<LocalUser | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('offline');

  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('philnits_theme', theme);
  }, [theme]);

  // Cloud sync helpers
  const syncFromCloud = useCallback(async (username: string) => {
    if (!isSupabaseConfigured()) return;
    setSyncStatus('syncing');
    const cloudStates = await pullLeitnerState(username);
    
    // Cloud is source of truth — replace localStorage entirely
    const statesToUse = cloudStates || {};
    setLeitnerStates(statesToUse);
    localStorage.setItem('philnits_leitner_states', JSON.stringify(statesToUse));
    
    setSyncStatus('synced');
  }, []);

  const schedulePush = useCallback((username: string, states: Record<string, LeitnerState>) => {
    if (!isSupabaseConfigured()) return;
    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    setSyncStatus('syncing');
    syncTimerRef.current = setTimeout(async () => {
      const ok = await pushLeitnerState(username, states);
      setSyncStatus(ok ? 'synced' : 'error');
    }, SYNC_DEBOUNCE_MS);
  }, []);

  // Initial data load
  useEffect(() => {
    async function loadData() {
      const [qA, sB, fc] = await Promise.all([
        PhilnitsApiService.getSubjectAQuestions(),
        PhilnitsApiService.getSubjectBScenarios(),
        PhilnitsApiService.getFlashcards()
      ]);
      setSubjectAQuestions(qA);
      setSubjectBScenarios(sB);
      setFlashcards(fc);
      setLeitnerStates(PhilnitsApiService.getStoredLeitnerStates());
      setMasteryStates(getStoredMasteryStates());
    }
    loadData();
  }, []);

  // Restore session on mount
  useEffect(() => {
    const session = getLocalSession();
    if (session) {
      setCurrentUser(session);
      if (isSupabaseConfigured()) {
        syncFromCloud(session.username);
      }
    }
  }, [syncFromCloud]);

  // Answer handler
  const handleAnswerLogged = async (questionId: string, isCorrect: boolean, timeSeconds: number) => {
    const updated = await PhilnitsApiService.logTelemetry(
      questionId, isCorrect, timeSeconds, leitnerStates, masteryStates
    );
    setLeitnerStates(updated.leitner);
    setMasteryStates(updated.mastery);
    setAnswerLogs((prev) => [...prev, {
      questionId, isCorrect,
      timeTakenSeconds: timeSeconds,
      timestamp: new Date().toISOString()
    }]);
    if (currentUser) schedulePush(currentUser.username, updated.leitner);
  };

  // Auth callbacks
  const handleAuthSuccess = (username: string) => {
    const user: LocalUser = { username };
    setCurrentUser(user);
    setSyncStatus(isSupabaseConfigured() ? 'synced' : 'offline');
    syncFromCloud(username);
  };

  const handleLogout = () => {
    clearLocalSession();
    setCurrentUser(null);
    setLeitnerStates({}); // Clear Leitner state from React
    setSyncStatus('offline');
  };

  // Navigation
  const handleStartTest = (domainName: string) => {
    setSelectedSubdomainFilter(domainName);
    setActiveTab('subject_a');
  };

  const dueCount = subjectAQuestions.filter((q) => isQuestionDueToday(leitnerStates[q.id])).length;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300">

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}

      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'subject_a') setSelectedSubdomainFilter(undefined);
        }}
        theme={theme}
        setTheme={setTheme}
        dueCount={dueCount}
        currentUser={currentUser}
        syncStatus={syncStatus}
        onLoginClick={() => setShowAuthModal(true)}
        onLogoutClick={handleLogout}
      />

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-8">
        {activeTab === 'study' && (
          <StudyHub onStartTest={handleStartTest} />
        )}
        {activeTab === 'subject_a' && (
          <SubjectAExam
            questions={subjectAQuestions}
            masteryStates={masteryStates}
            onAnswerLogged={handleAnswerLogged}
            filterSubdomain={selectedSubdomainFilter}
            onClearFilter={() => setSelectedSubdomainFilter(undefined)}
            onAddDynamicQuestion={(q) => setSubjectAQuestions((p) => [q, ...p])}
          />
        )}
        {activeTab === 'subject_b' && (
          <SubjectBWorkbench
            scenarios={subjectBScenarios}
            masteryStates={masteryStates}
            onAnswerLogged={handleAnswerLogged}
            onAddDynamicScenario={(s) => setSubjectBScenarios((p) => [s, ...p])}
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
          <FlashcardDeck 
            flashcards={flashcards}
            masteryStates={masteryStates}
            onAnswerLogged={handleAnswerLogged}
          />
        )}
        {activeTab === 'analytics' && (
          <AnalyticsDashboard
            logs={answerLogs}
            leitnerStates={leitnerStates}
            questions={subjectAQuestions}
          />
        )}
      </main>

      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-nav)] py-4 text-center text-xs text-[var(--text-muted)]">
        PhilNITS / ITPEC FE Exam Mastery Engine &bull; Oct 25, 2026 Target
      </footer>
    </div>
  );
};

export default App;
