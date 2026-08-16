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
  Server,
  LogIn,
  LogOut,
  Cloud,
  CloudOff,
  Loader2
} from 'lucide-react';
import { ExamTab, ThemeMode } from '../types/exam';
import { getDaysToExam } from '../utils/leitnerEngine';
import { LocalUser } from '../services/supabase';

export type SyncStatus = 'idle' | 'syncing' | 'synced' | 'error' | 'offline';

interface NavbarProps {
  activeTab: ExamTab;
  setActiveTab: (tab: ExamTab) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  dueCount: number;
  currentUser: LocalUser | null;
  syncStatus: SyncStatus;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  theme,
  setTheme,
  dueCount,
  currentUser,
  syncStatus,
  onLoginClick,
  onLogoutClick
}) => {
  const [daysRemaining, setDaysRemaining] = useState<number>(getDaysToExam());

  useEffect(() => {
    setDaysRemaining(getDaysToExam());
  }, []);

  const navItems: { id: ExamTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'study', label: 'Study Hub', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'subject_a', label: 'Subject A', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'subject_b', label: 'Subject B', icon: <Code2 className="w-4 h-4" /> },
    { id: 'leitner', label: 'Leitner', icon: <Repeat className="w-4 h-4" />, badge: dueCount },
    { id: 'flashcards', label: 'Flashcards', icon: <Layers className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-nav)] backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        
        {/* Brand / Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[var(--accent-emerald)] to-[var(--accent-cyan)] flex items-center justify-center text-white font-bold text-lg shadow-sm">
            FE
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-[var(--text-primary)]">
              PhilNITS Reviewer
            </h1>
            <p className="text-[11px] text-[var(--text-secondary)] flex items-center gap-1 font-mono">
              <Server className="w-3 h-3 text-[var(--accent-emerald)]" /> Windmill Telemetry
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 h-full">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-1.5 px-3.5 h-full text-sm font-semibold transition-all border-b-2 -mb-[1px] ${
                  isActive
                    ? 'border-[var(--accent-cyan)] text-[var(--text-primary)] bg-[var(--bg-card-hover)]/30'
                    : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]/10'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="badge badge-amber text-[11px] px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Countdown + Sync Status + Auth + Theme Switcher */}
        <div className="flex items-center gap-3">
          {/* Days Remaining Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 border border-amber-600 text-white text-sm font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Oct 25 Exam: {daysRemaining} days</span>
          </div>

          {/* Cloud Sync Status (only when logged in) */}
          {currentUser && (
            <div
              title={
                syncStatus === 'syncing' ? 'Syncing to cloud…' :
                syncStatus === 'synced'  ? 'Progress saved to cloud' :
                syncStatus === 'error'   ? 'Sync failed' :
                syncStatus === 'offline' ? 'Offline – changes saved locally' :
                'Cloud sync ready'
              }
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-sm font-semibold transition-colors ${
                syncStatus === 'syncing' ? 'bg-cyan-500 border-cyan-600 text-white' :
                syncStatus === 'synced'  ? 'bg-emerald-500 border-emerald-600 text-white' :
                syncStatus === 'error'   ? 'bg-rose-500 border-rose-600 text-white' :
                syncStatus === 'offline' ? 'bg-slate-500 border-slate-600 text-white' :
                'bg-[var(--bg-card-hover)] border-[var(--border-color)] text-[var(--text-primary)]'
              }`}
            >
              {syncStatus === 'syncing'
                ? <Loader2 className="w-3 h-3 animate-spin" />
                : syncStatus === 'offline'
                ? <CloudOff className="w-3 h-3" />
                : <Cloud className="w-3 h-3" />
              }
              <span className="hidden md:inline">
                {syncStatus === 'syncing' ? 'Syncing' :
                 syncStatus === 'synced'  ? 'Synced' :
                 syncStatus === 'error'   ? 'Sync Error' :
                 syncStatus === 'offline' ? 'Offline' :
                 'Cloud'}
              </span>
            </div>
          )}

          {/* Auth Button */}
          {currentUser ? (
            <button
              onClick={onLogoutClick}
              title={`Logged in as ${currentUser.username}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:bg-rose-500 hover:text-white border border-[var(--border-color)] text-sm font-semibold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Log Out</span>
            </button>
          ) : (
            <button
              onClick={onLoginClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent-emerald)] text-white border border-[var(--accent-emerald)] text-sm font-semibold transition-colors hover:opacity-90"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Log In</span>
            </button>
          )}

          {/* Theme Switcher Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:bg-slate-600 hover:text-white border border-[var(--border-color)] transition-colors"
            title={`Switch to ${theme === 'dark' ? 'Academic Light' : 'Modern Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer Bar */}
      <div className="flex md:hidden overflow-x-auto px-4 py-2 border-t border-[var(--border-color)] gap-2 bg-[var(--bg-sidebar)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap ${
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
export default Navbar;
