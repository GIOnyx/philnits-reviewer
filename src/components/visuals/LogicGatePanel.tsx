import React, { useState } from 'react';

export const LogicGatePanel: React.FC = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  // Computations
  const andVal = a && b ? 1 : 0;
  const orVal = a || b ? 1 : 0;
  const notA = a === 0 ? 1 : 0;
  const xorVal = a !== b ? 1 : 0;

  return (
    <div className="glass-panel p-5 space-y-4 my-4">
      <div className="border-b border-[var(--border-color)] pb-2 flex justify-between items-center">
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)]">Interactive Logic Gate Panel</h4>
          <p className="text-xs text-[var(--text-muted)]">Toggle inputs A and B to watch standard gate operations evaluate.</p>
        </div>
        <span className="badge badge-amber text-[10px]">Logic Gates</span>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-2 gap-4">
        
        <button
          onClick={() => setA((prev) => (prev === 0 ? 1 : 0))}
          className={`p-4 rounded-xl border text-center font-mono font-bold text-base transition-all select-none ${
            a === 1
              ? 'bg-[var(--accent-emerald)]/10 border-[var(--accent-emerald)] text-[var(--accent-emerald)] shadow-sm'
              : 'bg-[var(--bg-card-hover)] border-[var(--border-color)] text-[var(--text-muted)]'
          }`}
        >
          <span className="text-[10px] text-[var(--text-muted)] uppercase block mb-1">Input A</span>
          <span className="text-xl">{a}</span>
        </button>

        <button
          onClick={() => setB((prev) => (prev === 0 ? 1 : 0))}
          className={`p-4 rounded-xl border text-center font-mono font-bold text-base transition-all select-none ${
            b === 1
              ? 'bg-[var(--accent-emerald)]/10 border-[var(--accent-emerald)] text-[var(--accent-emerald)] shadow-sm'
              : 'bg-[var(--bg-card-hover)] border-[var(--border-color)] text-[var(--text-muted)]'
          }`}
        >
          <span className="text-[10px] text-[var(--text-muted)] uppercase block mb-1">Input B</span>
          <span className="text-xl">{b}</span>
        </button>

      </div>

      {/* Output list */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
        
        {/* AND GATE */}
        <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg border border-[var(--border-color)] space-y-1">
          <span className="text-[10px] text-[var(--text-muted)] uppercase block font-sans font-bold">AND Gate</span>
          <div className="text-lg font-bold text-[var(--text-primary)]">
            A · B = <span className={andVal ? 'text-[var(--accent-emerald)]' : 'text-rose-500'}>{andVal}</span>
          </div>
        </div>

        {/* OR GATE */}
        <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg border border-[var(--border-color)] space-y-1">
          <span className="text-[10px] text-[var(--text-muted)] uppercase block font-sans font-bold">OR Gate</span>
          <div className="text-lg font-bold text-[var(--text-primary)]">
            A + B = <span className={orVal ? 'text-[var(--accent-emerald)]' : 'text-rose-500'}>{orVal}</span>
          </div>
        </div>

        {/* NOT GATE */}
        <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg border border-[var(--border-color)] space-y-1">
          <span className="text-[10px] text-[var(--text-muted)] uppercase block font-sans font-bold">NOT Gate</span>
          <div className="text-lg font-bold text-[var(--text-primary)]">
            A' = <span className={notA ? 'text-[var(--accent-emerald)]' : 'text-rose-500'}>{notA}</span>
          </div>
        </div>

        {/* XOR GATE */}
        <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg border border-[var(--border-color)] space-y-1">
          <span className="text-[10px] text-[var(--text-muted)] uppercase block font-sans font-bold">XOR Gate</span>
          <div className="text-lg font-bold text-[var(--text-primary)]">
            A ⊕ B = <span className={xorVal ? 'text-[var(--accent-emerald)]' : 'text-rose-500'}>{xorVal}</span>
          </div>
        </div>

      </div>

    </div>
  );
};
export default LogicGatePanel;
