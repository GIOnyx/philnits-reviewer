import React, { useState } from 'react';
import { Play, RotateCcw, AlertTriangle } from 'lucide-react';

interface PipelineCycle {
  instrIdx: number;
  stages: (string | null)[]; // IF, ID, EX, MEM, WB, Stall
}

export const CpuPipelineVisualizer: React.FC = () => {
  const [cycle, setCycle] = useState<number>(1);
  const [hazardInjected, setHazardInjected] = useState<boolean>(false);
  const [instructions] = useState<string[]>([
    'LD R1, 0(R2)  ; Load instruction',
    'ADD R3, R1, R4 ; Data Hazard on R1!',
    'SUB R5, R6, R7 ; Independent subtract',
    'ST R5, 8(R8)  ; Store output'
  ]);

  const handleNextCycle = () => {
    setCycle((prev) => Math.min(prev + 1, 10));
  };

  const handleReset = () => {
    setCycle(1);
    setHazardInjected(false);
  };

  // Generate pipeline map based on active cycle and hazard
  const getPipelineMatrix = (): PipelineCycle[] => {
    const matrix: PipelineCycle[] = [];
    
    instructions.forEach((instr, i) => {
      const stages: (string | null)[] = Array(10).fill(null);
      let startCycle = i + 1;

      // Adjust start cycle if data hazard stalls second instruction
      if (hazardInjected && i >= 1) {
        startCycle += 2; // Insert 2 cycles of stalls for data hazard resolver
      }

      const activeStages = ['IF', 'ID', 'EX', 'MEM', 'WB'];
      
      let stagePtr = 0;
      for (let c = 1; c <= 10; c++) {
        if (hazardInjected && i === 1 && c >= 2 && c <= 3) {
          stages[c - 1] = 'STALL';
        } else if (c >= startCycle && stagePtr < 5) {
          stages[c - 1] = activeStages[stagePtr];
          stagePtr++;
        }
      }
      matrix.push({ instrIdx: i, stages });
    });

    return matrix;
  };

  const matrix = getPipelineMatrix();

  return (
    <div className="glass-panel p-5 space-y-4 my-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] pb-3">
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)]">CPU Pipeline Hazard Simulator</h4>
          <p className="text-xs text-[var(--text-muted)]">Step through execution clock cycles to see pipeline stages and hazards.</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setHazardInjected(!hazardInjected)}
            className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1 transition-colors ${
              hazardInjected 
                ? 'bg-rose-500/10 border border-rose-500/30 text-rose-500' 
                : 'bg-slate-700/50 border border-slate-600 text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            {hazardInjected ? 'Data Hazard Injected' : 'Inject Data Hazard'}
          </button>
          <button onClick={handleReset} className="btn-secondary text-xs py-1 px-2">
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
          <button onClick={handleNextCycle} disabled={cycle >= 10} className="btn-primary text-xs py-1 px-3">
            <Play className="w-3.5 h-3.5" /> Step Cycle ({cycle}/10)
          </button>
        </div>
      </div>

      {/* Cycle Indicator Header */}
      <div className="grid grid-cols-11 gap-1 text-center font-mono text-[10px] font-bold text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-1">
        <div className="col-span-3 text-left">Instruction</div>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((c) => (
          <div key={c} className={`p-1 rounded ${cycle === c ? 'bg-[var(--accent-cyan)] text-white' : ''}`}>
            C{c}
          </div>
        ))}
      </div>

      {/* Pipeline Grid */}
      <div className="space-y-2.5">
        {matrix.map((row, rIdx) => (
          <div key={rIdx} className="grid grid-cols-11 gap-1 items-center">
            {/* Instruction Name */}
            <div className="col-span-3 text-[11px] font-mono text-[var(--text-primary)] truncate" title={instructions[row.instrIdx]}>
              {instructions[row.instrIdx]}
            </div>

            {/* Stages */}
            {row.stages.slice(0, 8).map((stage, colIdx) => {
              const isActiveCycle = colIdx + 1 === cycle;
              const isPastCycle = colIdx + 1 < cycle;

              let cellStyle = 'bg-transparent text-transparent';
              if (stage) {
                if (stage === 'STALL') {
                  cellStyle = 'bg-rose-500/10 border border-rose-500/30 text-rose-500 font-bold';
                } else {
                  const colors: Record<string, string> = {
                    IF: 'bg-blue-500/15 border-blue-500/35 text-blue-500',
                    ID: 'bg-purple-500/15 border-purple-500/35 text-purple-500',
                    EX: 'bg-amber-500/15 border-amber-500/35 text-white',
                    MEM: 'bg-emerald-500/15 border-emerald-500/35 text-emerald-500',
                    WB: 'bg-cyan-500/15 border-cyan-500/35 text-cyan-500'
                  };
                  cellStyle = `${colors[stage]} border font-bold`;
                }
              }

              const outlineStyle = isActiveCycle ? 'ring-2 ring-[var(--accent-cyan)] ring-offset-2 ring-offset-[var(--bg-card)]' : '';

              return (
                <div
                  key={colIdx}
                  className={`p-1.5 text-center font-mono rounded text-[10px] transition-all duration-300 ${cellStyle} ${outlineStyle} ${
                    !isPastCycle && !isActiveCycle ? 'opacity-40' : 'opacity-100'
                  }`}
                >
                  {stage || '-'}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Explanatory Message */}
      {hazardInjected && (
        <div className="p-3 bg-rose-500 border border-rose-600 rounded-lg text-xs text-white space-y-1">
          <p className="font-bold flex items-center gap-1">
            <AlertTriangle className="w-4 h-4" /> Pipeline Stall / Bubble Detected!
          </p>
          <p>
            Instruction 2 (\`ADD R3, R1, R4\`) depends on register \`R1\` loaded by Instruction 1. A **data hazard** occurs. The pipeline inserts **stalls** (bubbles) until the data is fetched and written back in cycle 4.
          </p>
        </div>
      )}
    </div>
  );
};
export default CpuPipelineVisualizer;
