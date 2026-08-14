import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  HelpCircle,
  Code2, 
  Repeat, 
  Layers, 
  BarChart3, 
  Sun, 
  Moon, 
  Calendar, 
  Server
} from 'lucide-react';
import { ExamTab, ThemeMode } from '../types/exam';
import { getDaysToExam } from '../utils/leitnerEngine';

interface NavbarProps {
  activeTab: ExamTab;
  setActiveTab: (tab: ExamTab) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  dueCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  theme,
  setTheme,
  dueCount
}) => {
  const [daysRemaining, setDaysRemaining] = useState<number>(getDaysToExam());

  useEffect(() => {
    setDaysRemaining(getDaysToExam());
  }, []);

  const navItems: { id: ExamTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'study', label: 'Study & Review', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'subject_a', label: 'Subject A (MCQs)', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'subject_b', label: 'Subject B (Workbench)', icon: <Code2 className="w-4 h-4" /> },
    { id: 'leitner', label: 'Leitner Review', icon: <Repeat className="w-4 h-4" />, badge: dueCount },
    { id: 'flashcards', label: 'Anki Flashcards', icon: <Layers className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-nav)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[var(--accent-emerald)] to-[var(--accent-cyan)] flex items-center justify-center text-white font-bold text-lg shadow-sm">
            FE
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-[var(--text-primary)]">
              PhilNITS Reviewer
            </h1>
            <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
              <Server className="w-3 h-3 text-[var(--accent-emerald)]" /> Windmill Automated Engine
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-hover)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="badge badge-amber text-[10px] px-1.5 py-0.5">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Countdown + Theme Switcher */}
        <div className="flex items-center gap-3">
          {/* Days Remaining Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Oct 25 Exam: {daysRemaining} days</span>
          </div>

          {/* Theme Switcher Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] transition-colors"
            title={`Switch to ${theme === 'dark' ? 'Academic Paper Light' : 'Modern Slate Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer Bar */}
      <div className="flex md:hidden overflow-x-auto px-4 py-2 border-t border-[var(--border-color)] gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap ${
              activeTab === item.id
                ? 'bg-[var(--accent-emerald)] text-white'
                : 'bg-[var(--bg-card-hover)] text-[var(--text-secondary)]'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
