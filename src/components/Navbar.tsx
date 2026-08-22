import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  HelpCircle,
  Code2,
  Repeat, 
  BarChart3, 
  Sun, 
  Moon, 
  Calendar, 
  Server,
  LogIn,
  LogOut,
  Cloud,
  CloudOff,
  Loader2,
  Globe
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
    { id: 'leitner', label: 'Leitner', icon: <Repeat className="w-4 h-4" />, badge: dueCount }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-main)] pt-4 pb-4">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="border border-[var(--border-color)] bg-[var(--bg-card)] shadow-[var(--shadow-subtle)] rounded-2xl h-14 flex items-center justify-between px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-6">
        
        {/* Brand / Title */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[var(--accent-emerald)] to-[var(--accent-cyan)] flex items-center justify-center text-white font-bold text-lg shadow-sm shrink-0">
            FE
          </div>
          <div className="shrink-0">
            <h1 className="text-base font-bold tracking-tight text-[var(--text-primary)] whitespace-nowrap">
              PhilNITS Reviewer
            </h1>
            <p className="text-[11px] text-[var(--text-secondary)] flex items-center gap-1 font-mono whitespace-nowrap">
              <Server className="w-3 h-3 text-[var(--accent-emerald)] shrink-0" /> Windmill Telemetry
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-[var(--bg-main)]/50 rounded-xl border border-[var(--border-color)] shrink-0">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 whitespace-nowrap ${
                  isActive
                    ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-color)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="bg-[var(--accent-amber)] text-black text-[9px] px-1.5 py-0.5 rounded-full shrink-0 font-bold ml-1">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Countdown + Sync Status + Auth + Theme Switcher */}
        <div className="flex items-center gap-4 shrink-0 pr-1">
          {/* Days Remaining Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-amber)] text-[var(--bg-main)] text-sm font-bold shrink-0 whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
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
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-bold transition-colors shrink-0 whitespace-nowrap ${
                syncStatus === 'syncing' ? 'bg-[var(--accent-cyan)] text-[var(--bg-main)]' :
                syncStatus === 'synced'  ? 'bg-[var(--accent-emerald)] text-[var(--bg-main)]' :
                syncStatus === 'error'   ? 'bg-[var(--accent-rose)] text-[var(--bg-main)]' :
                syncStatus === 'offline' ? 'bg-[var(--text-muted)] text-[var(--bg-main)]' :
                'bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-color)]'
              }`}
            >
              {syncStatus === 'syncing'
                ? <Loader2 className="w-3 h-3 animate-spin shrink-0" />
                : syncStatus === 'offline'
                ? <CloudOff className="w-3 h-3 shrink-0" />
                : <Cloud className="w-3 h-3 shrink-0" />
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:bg-[var(--accent-rose)] hover:text-[var(--bg-main)] border border-[var(--border-color)] text-sm font-bold transition-colors shrink-0 whitespace-nowrap"
            >
              <LogOut className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Log Out</span>
            </button>
          ) : (
            <button
              onClick={onLoginClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent-emerald)] text-[var(--bg-main)] text-sm font-bold transition-colors hover:opacity-90 shrink-0 whitespace-nowrap"
            >
              <LogIn className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Log In</span>
            </button>
          )}

          {/* Theme Switcher Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-[var(--accent-amber)] text-[var(--bg-main)] hover:opacity-90 transition-opacity shrink-0"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 shrink-0" /> : <Moon className="w-4 h-4 shrink-0" />}
          </button>
        </div>
      </div>
      </div>
    </header>
  );
};
export default Navbar;
