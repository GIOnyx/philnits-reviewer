import React, { useState } from 'react';
import { X, User, Lock, LogIn, UserPlus, Loader2, AlertCircle } from 'lucide-react';
import { signIn, signUp } from '../services/supabase';

interface AuthModalProps {
  onClose: () => void;
  onAuthSuccess: (username: string) => void;
}

type AuthTab = 'login' | 'register';

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onAuthSuccess }) => {
  const [activeTab, setActiveTab] = useState<AuthTab>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError('Please fill in both fields.');
      return;
    }

    setLoading(true);

    const fn = activeTab === 'login' ? signIn : signUp;
    const { user, error: authErr } = await fn(username.trim(), password);

    setLoading(false);

    if (authErr) {
      setError(authErr);
    } else if (user) {
      onAuthSuccess(user.username);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="glass-panel w-full max-w-sm p-6 space-y-5 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div>
          <h2 className="text-lg font-bold text-[var(--text-primary)]">Cloud Sync</h2>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Save your Leitner progress across all devices.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl overflow-hidden border border-[var(--border-color)] text-xs font-semibold">
          {(['login', 'register'] as AuthTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setError(null); }}
              className={`flex-1 py-2 transition-colors ${
                activeTab === tab
                  ? 'bg-[var(--accent-emerald)] text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-card-hover)]'
              }`}
            >
              {tab === 'login' ? 'Log In' : 'Register'}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Username */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={activeTab === 'login' ? 'current-password' : 'new-password'}
              minLength={6}
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
            />
          </div>

          {error && (
            <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs">
              <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary flex items-center justify-center gap-2 py-2.5"
          >
            {loading
              ? <Loader2 className="w-4 h-4 animate-spin" />
              : activeTab === 'login'
                ? <><LogIn className="w-4 h-4" /> Log In</>
                : <><UserPlus className="w-4 h-4" /> Create Account</>
            }
          </button>
        </form>

        <p className="text-[10px] text-center text-[var(--text-muted)]">
          Progress is synced securely. No email required.
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
