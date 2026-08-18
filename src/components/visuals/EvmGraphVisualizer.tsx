import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';

export const EvmGraphVisualizer: React.FC = () => {
  const [pv, setPv] = useState<number>(10000); // Planned Value
  const [ev, setEv] = useState<number>(9000);  // Earned Value
  const [ac, setAc] = useState<number>(11000); // Actual Cost

  const sv = ev - pv; // Schedule Variance
  const cv = ev - ac; // Cost Variance
  const spi = pv > 0 ? (ev / pv).toFixed(2) : '0.00';
  const cpi = ac > 0 ? (ev / ac).toFixed(2) : '0.00';

  const isScheduleAhead = sv >= 0;
  const isCostUnder = cv >= 0;

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] rounded-lg">
              <Briefcase className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">Earned Value Management (EVM) Graph & Analyzer</h3>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Simulate project schedule and cost variances using Planned Value (PV), Earned Value (EV), and Actual Cost (AC).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4">
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-[var(--text-primary)]">Planned Value (PV)</span>
            <span className="text-[var(--accent-cyan)] font-mono">${pv.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={1000}
            max={30000}
            step={500}
            value={pv}
            onChange={(e) => setPv(parseInt(e.target.value))}
            className="w-full accent-[var(--accent-cyan)] cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-[var(--text-primary)]">Earned Value (EV)</span>
            <span className="text-[var(--accent-emerald)] font-mono">${ev.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={1000}
            max={30000}
            step={500}
            value={ev}
            onChange={(e) => setEv(parseInt(e.target.value))}
            className="w-full accent-[var(--accent-emerald)] cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-[var(--text-primary)]">Actual Cost (AC)</span>
            <span className="text-rose-500 dark:text-rose-400 font-mono">${ac.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={1000}
            max={30000}
            step={500}
            value={ac}
            onChange={(e) => setAc(parseInt(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`border rounded-xl p-4 space-y-1 ${isScheduleAhead ? 'bg-[var(--accent-emerald)]/10 border-[var(--accent-emerald)]/30' : 'bg-rose-500/10 border-rose-500/30'}`}>
          <div className="text-[10px] uppercase font-semibold text-[var(--text-secondary)]">Schedule Variance (SV)</div>
          <div className={`text-lg font-mono font-bold ${isScheduleAhead ? 'text-[var(--accent-emerald)]' : 'text-rose-500 dark:text-rose-400'}`}>
            {sv >= 0 ? `+$${sv.toLocaleString()}` : `-$${Math.abs(sv).toLocaleString()}`}
          </div>
          <div className="text-[11px] text-[var(--text-secondary)]">{isScheduleAhead ? 'Ahead of Schedule' : 'Behind Schedule'}</div>
        </div>

        <div className={`border rounded-xl p-4 space-y-1 ${isCostUnder ? 'bg-[var(--accent-emerald)]/10 border-[var(--accent-emerald)]/30' : 'bg-rose-500/10 border-rose-500/30'}`}>
          <div className="text-[10px] uppercase font-semibold text-[var(--text-secondary)]">Cost Variance (CV)</div>
          <div className={`text-lg font-mono font-bold ${isCostUnder ? 'text-[var(--accent-emerald)]' : 'text-rose-500 dark:text-rose-400'}`}>
            {cv >= 0 ? `+$${cv.toLocaleString()}` : `-$${Math.abs(cv).toLocaleString()}`}
          </div>
          <div className="text-[11px] text-[var(--text-secondary)]">{isCostUnder ? 'Under Budget' : 'Over Budget'}</div>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4 space-y-1">
          <div className="text-[10px] uppercase font-semibold text-[var(--text-secondary)]">Schedule Perf. Index (SPI)</div>
          <div className="text-lg font-mono font-bold text-[var(--accent-cyan)]">{spi}</div>
          <div className="text-[11px] text-[var(--text-secondary)]">{parseFloat(spi) >= 1 ? 'Efficient Schedule' : 'Delayed Progress'}</div>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4 space-y-1">
          <div className="text-[10px] uppercase font-semibold text-[var(--text-secondary)]">Cost Perf. Index (CPI)</div>
          <div className="text-lg font-mono font-bold text-indigo-500 dark:text-indigo-400">{cpi}</div>
          <div className="text-[11px] text-[var(--text-secondary)]">{parseFloat(cpi) >= 1 ? 'Cost Efficient' : 'Cost Overrun'}</div>
        </div>
      </div>
    </div>
  );
};
