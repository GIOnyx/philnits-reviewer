import React, { useState } from 'react';
import { Cpu, RotateCcw, AlertTriangle, CheckCircle2, Sparkles } from 'lucide-react';

export const HammingCodeVisualizer: React.FC = () => {
  const [dataInput, setDataInput] = useState<string>('1011');
  const [corruptedBitIndex, setCorruptedBitIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^01]/g, '').slice(0, 4);
    setDataInput(val);
    setCorruptedBitIndex(null);
  };

  const paddedData = dataInput.padEnd(4, '0');
  const d3 = parseInt(paddedData[0]) || 0;
  const d2 = parseInt(paddedData[1]) || 0;
  const d1 = parseInt(paddedData[2]) || 0;
  const d0 = parseInt(paddedData[3]) || 0;

  const p1 = d3 ^ d2 ^ d0;
  const p2 = d3 ^ d1 ^ d0;
  const p4 = d2 ^ d1 ^ d0;

  const codeBits = [p1, p2, d3, p4, d2, d1, d0];

  const transmittedBits = [...codeBits];
  if (corruptedBitIndex !== null) {
    transmittedBits[corruptedBitIndex] = transmittedBits[corruptedBitIndex] === 1 ? 0 : 1;
  }

  const r_p1 = transmittedBits[0];
  const r_p2 = transmittedBits[1];
  const r_d3 = transmittedBits[2];
  const r_p4 = transmittedBits[3];
  const r_d2 = transmittedBits[4];
  const r_d1 = transmittedBits[5];
  const r_d0 = transmittedBits[6];

  const s1 = r_p1 ^ r_d3 ^ r_d2 ^ r_d0;
  const s2 = r_p2 ^ r_d3 ^ r_d1 ^ r_d0;
  const s4 = r_p4 ^ r_d2 ^ r_d1 ^ r_d0;

  const syndromeValue = s1 * 1 + s2 * 2 + s4 * 4;

  const toggleBitNoise = (index: number) => {
    if (corruptedBitIndex === index) {
      setCorruptedBitIndex(null);
    } else {
      setCorruptedBitIndex(index);
    }
  };

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] rounded-lg">
              <Cpu className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">Bitwise & Hamming (7,4) Code Visualizer</h3>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Simulate error-correcting codes, Galois Field modulo-2 arithmetic, and syndrome detection (<i>S = rH<sup>T</sup></i>).
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-[var(--text-primary)]">4-Bit Input:</label>
          <input
            type="text"
            value={dataInput}
            onChange={handleInputChange}
            placeholder="1011"
            className="w-24 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-3 py-1.5 text-[var(--text-primary)] font-mono text-center tracking-widest focus:outline-none focus:border-[var(--accent-cyan)]"
            maxLength={4}
          />
        </div>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-cyan)] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> 1. Encoding (Hamming 7,4)
          </h4>
          <p className="text-xs text-[var(--text-secondary)]">
            Parity bits calculated via XOR sums: <i>P<sub>1</sub> = D<sub>3</sub> ⊕ D<sub>2</sub> ⊕ D<sub>0</sub></i>, <i>P<sub>2</sub> = D<sub>3</sub> ⊕ D<sub>1</sub> ⊕ D<sub>0</sub></i>, <i>P<sub>4</sub> = D<sub>2</sub> ⊕ D<sub>1</sub> ⊕ D<sub>0</sub></i>.
          </p>
          <div className="grid grid-cols-7 gap-1.5 pt-2 text-center font-mono">
            {['P1', 'P2', 'D3', 'P4', 'D2', 'D1', 'D0'].map((label, idx) => (
              <div key={label} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-2">
                <div className="text-[10px] text-[var(--text-muted)]">{label}</div>
                <div className="text-base font-bold text-[var(--accent-cyan)] mt-1">{codeBits[idx]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> 2. Transmission & Noise (Click bit to flip)
            </h4>
            {corruptedBitIndex !== null && (
              <button
                onClick={() => setCorruptedBitIndex(null)}
                className="text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1 bg-[var(--bg-card)] border border-[var(--border-color)] px-2 py-0.5 rounded"
              >
                <RotateCcw className="w-3 h-3" /> Reset Noise
              </button>
            )}
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            Click any bit position below to simulate physical noise flipping a bit during channel transmission.
          </p>
          <div className="grid grid-cols-7 gap-1.5 pt-2 text-center font-mono">
            {transmittedBits.map((bit, idx) => {
              const isCorrupted = corruptedBitIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => toggleBitNoise(idx)}
                  className={`border rounded-lg p-2 transition cursor-pointer ${
                    isCorrupted
                      ? 'bg-rose-500/20 border-rose-500 text-rose-500 dark:text-rose-300 animate-pulse'
                      : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-[var(--accent-cyan)] text-[var(--text-primary)]'
                  }`}
                >
                  <div className="text-[10px] text-[var(--text-muted)]">Bit {idx + 1}</div>
                  <div className="text-base font-bold mt-1">{bit}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-emerald)] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> 3. Syndrome Detection & Correction (<i>S = rH<sup>T</sup></i>)
          </h4>
          <p className="text-xs text-[var(--text-secondary)]">
            Syndrome calculated: <i>S<sub>1</sub> = {s1}</i>, <i>S<sub>2</sub> = {s2}</i>, <i>S<sub>4</sub> = {s4}</i>. Decimal position: <span className="font-mono font-bold text-[var(--text-primary)]">{syndromeValue}</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          {syndromeValue === 0 ? (
            <div className="px-4 py-2 bg-[var(--accent-emerald)]/10 border border-[var(--accent-emerald)]/30 text-[var(--accent-emerald)] rounded-xl text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> No Error Detected (Transmission Clean)
            </div>
          ) : (
            <div className="px-4 py-2 bg-rose-500/10 border border-rose-500/30 text-rose-500 dark:text-rose-400 rounded-xl text-xs font-semibold flex items-center gap-2 animate-bounce">
              <AlertTriangle className="w-4 h-4" /> Single Error at Bit #{syndromeValue} (Corrected to {codeBits[syndromeValue - 1]})
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
