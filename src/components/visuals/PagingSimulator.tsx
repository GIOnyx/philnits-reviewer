import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

export const PagingSimulator: React.FC = () => {
  const [algo, setAlgo] = useState<'FIFO' | 'LRU'>('LRU');
  const [pageRequests] = useState<number[]>([7, 0, 1, 2, 0, 3, 0, 4]);
  const [step, setStep] = useState<number>(0);
  const [frames, setFrames] = useState<(number | null)[]>([null, null, null]);
  const [history, setHistory] = useState<{
    page: number;
    frames: (number | null)[];
    status: 'HIT' | 'FAULT';
  }[]>([]);

  // Stack/queue metadata to calculate LRU / FIFO tracking
  const [accessHistory, setAccessHistory] = useState<number[]>([]); // index of page access
  const [loadOrder, setLoadOrder] = useState<number[]>([]); // FIFO load index

  const handleStep = () => {
    if (step >= pageRequests.length) return;
    
    const nextPage = pageRequests[step];
    let newFrames = [...frames];
    let status: 'HIT' | 'FAULT' = 'HIT';
    
    const existingIndex = newFrames.indexOf(nextPage);

    if (existingIndex !== -1) {
      // PAGE HIT
      status = 'HIT';
      
      // Update LRU access history
      if (algo === 'LRU') {
        const index = accessHistory.indexOf(nextPage);
        const nextAccess = [...accessHistory];
        if (index !== -1) nextAccess.splice(index, 1);
        nextAccess.push(nextPage);
        setAccessHistory(nextAccess);
      }
    } else {
      // PAGE FAULT
      status = 'FAULT';
      
      // Check if empty frame available
      const emptyIdx = newFrames.indexOf(null);
      if (emptyIdx !== -1) {
        newFrames[emptyIdx] = nextPage;
        setLoadOrder((prev) => [...prev, nextPage]);
        setAccessHistory((prev) => [...prev, nextPage]);
      } else {
        // Eviction needed
        let pageToEvict = -1;
        
        if (algo === 'FIFO') {
          // Evict the oldest page loaded
          const nextLoad = [...loadOrder];
          pageToEvict = nextLoad.shift()!;
          setLoadOrder(nextLoad);
        } else {
          // LRU: Evict least recently used page
          const unusedList = newFrames.filter((f) => f !== null && !accessHistory.includes(f));
          if (unusedList.length > 0) {
            pageToEvict = unusedList[0]!;
          } else {
            pageToEvict = accessHistory[0];
          }
          const nextAccess = accessHistory.filter((p) => p !== pageToEvict);
          setAccessHistory(nextAccess);
        }

        // Replace
        const evictIdx = newFrames.indexOf(pageToEvict);
        newFrames[evictIdx] = nextPage;
        setLoadOrder((prev) => [...prev, nextPage]);
        setAccessHistory((prev) => [...prev, nextPage]);
      }
    }

    setFrames(newFrames);
    setHistory((prev) => [...prev, { page: nextPage, frames: newFrames, status }]);
    setStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setStep(0);
    setFrames([null, null, null]);
    setHistory([]);
    setAccessHistory([]);
    setLoadOrder([]);
  };

  return (
    <div className="glass-panel p-5 space-y-4 my-4">
      <div className="border-b border-[var(--border-color)] pb-2 flex justify-between items-center flex-wrap gap-2">
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)]">OS Virtual Paging Frame Simulator</h4>
          <p className="text-xs text-[var(--text-muted)]">Analyze page faults and memory eviction policies (FIFO vs LRU).</p>
        </div>

        <div className="flex items-center gap-2">
          {/* Policy Switcher */}
          <select
            value={algo}
            onChange={(e) => {
              setAlgo(e.target.value as 'FIFO' | 'LRU');
              handleReset();
            }}
            disabled={step > 0}
            className="trace-input py-1 text-xs w-[80px]"
          >
            <option value="LRU">LRU</option>
            <option value="FIFO">FIFO</option>
          </select>

          <button onClick={handleReset} className="btn-secondary text-xs py-1 px-2">
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
          
          <button
            onClick={handleStep}
            disabled={step >= pageRequests.length}
            className="btn-primary text-xs py-1 px-3"
          >
            <Play className="w-3.5 h-3.5" /> Step ({step}/{pageRequests.length})
          </button>
        </div>
      </div>

      {/* Pages Stream Panel */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block">Incoming Page Request Stream</span>
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {pageRequests.map((p, idx) => {
            const isCurrent = idx === step;
            const isProcessed = idx < step;
            return (
              <div
                key={idx}
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs border transition-all ${
                  isCurrent
                    ? 'bg-[var(--accent-cyan)]/20 border-[var(--accent-cyan)] text-[var(--accent-cyan)] scale-110'
                    : isProcessed
                    ? 'bg-[var(--bg-card-hover)] border-[var(--border-color)] text-[var(--text-secondary)]'
                    : 'bg-transparent border-[var(--border-color)] opacity-40'
                }`}
              >
                {p}
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Frames Display */}
      <div className="grid grid-cols-3 gap-3 pt-2">
        {frames.map((val, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[var(--bg-sidebar)] border border-[var(--border-color)] text-center font-mono space-y-1 shadow-sm"
          >
            <span className="text-[9px] text-[var(--text-muted)] uppercase block">Frame {idx + 1}</span>
            <span className="text-xl font-extrabold text-[var(--text-primary)]">
              {val === null ? '-' : val}
            </span>
          </div>
        ))}
      </div>

      {/* Real-time steps log */}
      {history.length > 0 && (
        <div className="space-y-1.5 border-t border-[var(--border-color)] pt-3 text-xs">
          <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block">Simulated Execution Log</span>
          <div className="space-y-1">
            {history.map((h, i) => (
              <div key={i} className="flex justify-between items-center py-1 border-b border-[var(--border-color)]/30 font-mono text-[11px]">
                <span className="text-[var(--text-secondary)]">Step {i+1}: Requested page {h.page}</span>
                <span className={`badge ${h.status === 'HIT' ? 'badge-emerald' : 'badge-rose'} text-[9px] px-1 py-0.5`}>
                  {h.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default PagingSimulator;
