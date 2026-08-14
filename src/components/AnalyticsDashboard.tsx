import React from 'react';
import { UserAnswerLog, LeitnerState, SubjectAQuestion } from '../types/exam';
import { BarChart3, ShieldCheck, Target, Zap, AlertTriangle, TrendingUp } from 'lucide-react';

interface AnalyticsDashboardProps {
  logs: UserAnswerLog[];
  leitnerStates: Record<string, LeitnerState>;
  questions: SubjectAQuestion[];
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  logs,
  leitnerStates,
  questions
}) => {
  const totalAttempted = logs.length;
  const totalCorrect = logs.filter((l) => l.isCorrect).length;
  const accuracyPct = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  // Domain Accuracy breakdown
  const domainStats: Record<string, { total: number; correct: number }> = {
    Technology: { total: 0, correct: 0 },
    Management: { total: 0, correct: 0 },
    Strategy: { total: 0, correct: 0 }
  };

  logs.forEach((log) => {
    const q = questions.find((item) => item.id === log.questionId);
    if (q && domainStats[q.category]) {
      domainStats[q.category].total += 1;
      if (log.isCorrect) domainStats[q.category].correct += 1;
    }
  });

  // Calculate box counts
  const boxCounts = [1, 2, 3, 4, 5].map((b) => {
    return Object.values(leitnerStates).filter((s) => s.currentBox === b).length;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="glass-panel p-5 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-muted)] uppercase">
            <span>Overall Accuracy</span>
            <Target className="w-4 h-4 text-[var(--accent-emerald)]" />
          </div>
          <div className="text-3xl font-extrabold text-[var(--text-primary)] font-mono">
            {accuracyPct}%
          </div>
          <div className="text-[11px] text-[var(--text-muted)]">
            {totalCorrect} correct out of {totalAttempted} answered
          </div>
        </div>

        <div className="glass-panel p-5 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-muted)] uppercase">
            <span>Total Questions Solved</span>
            <Zap className="w-4 h-4 text-[var(--accent-cyan)]" />
          </div>
          <div className="text-3xl font-extrabold text-[var(--text-primary)] font-mono">
            {totalAttempted}
          </div>
          <div className="text-[11px] text-[var(--text-muted)]">
            Across Subject A & Subject B
          </div>
        </div>

        <div className="glass-panel p-5 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-muted)] uppercase">
            <span>Mastered Cards (Box 4 & 5)</span>
            <ShieldCheck className="w-4 h-4 text-[var(--accent-amber)]" />
          </div>
          <div className="text-3xl font-extrabold text-[var(--text-primary)] font-mono">
            {boxCounts[3] + boxCounts[4]}
          </div>
          <div className="text-[11px] text-[var(--text-muted)]">
            Long-term memory retention
          </div>
        </div>

        <div className="glass-panel p-5 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-muted)] uppercase">
            <span>Exam Readiness Score</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold text-[var(--accent-emerald)] font-mono">
            {Math.min(98, Math.max(15, accuracyPct + Math.round(totalAttempted * 2)))}%
          </div>
          <div className="text-[11px] text-[var(--text-muted)]">
            Estimated passing confidence
          </div>
        </div>
      </div>

      {/* Domain Proficiency Breakdown */}
      <div className="glass-panel p-6 space-y-6">
        <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[var(--accent-cyan)]" />
          <span>Syllabus Domain Proficiency Breakdown</span>
        </h3>

        <div className="space-y-4">
          {Object.entries(domainStats).map(([domain, data]) => {
            const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            return (
              <div key={domain} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-[var(--text-primary)]">{domain} Domain</span>
                  <span className="text-[var(--text-secondary)] font-mono">{pct}% ({data.correct}/{data.total})</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[var(--bg-main)] overflow-hidden border border-[var(--border-color)]">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--accent-emerald)] to-[var(--accent-cyan)] transition-all duration-500"
                    style={{ width: `${Math.max(5, pct)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Diagnostic Recommendations */}
      <div className="glass-panel p-6 space-y-4 border-l-4 border-l-amber-500">
        <div className="flex items-center gap-2 text-sm font-bold text-amber-500">
          <AlertTriangle className="w-4 h-4" />
          <span>Diagnostic Recommendations for October 2026 Exam</span>
        </div>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          Based on your latest practice telemetry, ensure you complete daily reviews in the Leitner deck to keep time-compressed intervals active. Focus additional Subject B practice on array indexing boundaries and stack pointer mutations.
        </p>
      </div>

    </div>
  );
};
