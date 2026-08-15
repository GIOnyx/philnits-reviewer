import React, { useState } from 'react';
import { Database, ArrowRight } from 'lucide-react';

export const ErdVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('1NF');

  const steps = [
    { id: '1NF', label: '1st Normal Form', desc: 'Atomic values, no repeating columns or multivalued fields.' },
    { id: '2NF', label: '2nd Normal Form', desc: '1NF + remove partial dependencies (non-key fields depending on part of a composite PK).' },
    { id: '3NF', label: '3rd Normal Form', desc: '2NF + remove transitive dependencies (non-key fields depending on other non-key fields).' }
  ];

  return (
    <div className="glass-panel p-5 space-y-4 my-4">
      <div className="flex items-center gap-2 border-b border-[var(--border-color)] pb-3">
        <Database className="w-5 h-5 text-[var(--accent-emerald)]" />
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)]">Interactive Database Normalization Guide</h4>
          <p className="text-xs text-[var(--text-muted)]">Track how table schema changes step-by-step to eliminate anomalies.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {steps.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveStep(s.id)}
            className={`flex-1 py-1.5 px-2.5 rounded text-xs font-semibold border transition-colors ${
              activeStep === s.id
                ? 'bg-[var(--accent-emerald)] text-white border-transparent'
                : 'bg-[var(--bg-card-hover)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="p-3 bg-[var(--bg-sidebar)] rounded-lg text-xs space-y-1.5">
        <p className="font-semibold text-[var(--text-primary)]">{steps.find(s => s.id === activeStep)?.label}</p>
        <p className="text-[var(--text-secondary)]">{steps.find(s => s.id === activeStep)?.desc}</p>
      </div>

      {/* Dynamic Database Table Cards */}
      {activeStep === '1NF' && (
        <div className="space-y-3">
          <div className="border border-[var(--border-color)] rounded-lg overflow-hidden text-[11px] font-mono">
            <div className="p-2 bg-[var(--bg-card-hover)] font-bold text-amber-500 border-b border-[var(--border-color)] flex justify-between">
              <span>Orders (Composite PK: OrderID, ProductID)</span>
              <span>Partial Dependency Present</span>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[var(--bg-sidebar)] border-b border-[var(--border-color)] text-[var(--text-muted)]">
                  <th className="p-1.5 underline">OrderID</th>
                  <th className="p-1.5 underline">ProductID</th>
                  <th className="p-1.5">Quantity</th>
                  <th className="p-1.5 text-rose-400">ProductPrice (Depends only on ProductID!)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1.5">1001</td>
                  <td className="p-1.5">P99</td>
                  <td className="p-1.5">2</td>
                  <td className="p-1.5 text-rose-400">$15.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeStep === '2NF' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="border border-[var(--border-color)] rounded-lg overflow-hidden text-[11px] font-mono">
            <div className="p-2 bg-[var(--bg-card-hover)] font-bold text-emerald-500 border-b border-[var(--border-color)]">
              <span>OrderItems (PK: OrderID, ProductID)</span>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[var(--bg-sidebar)] border-b border-[var(--border-color)]">
                  <th className="p-1.5 underline">OrderID</th>
                  <th className="p-1.5 underline">ProductID</th>
                  <th className="p-1.5">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1.5">1001</td>
                  <td className="p-1.5">P99</td>
                  <td className="p-1.5">2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-[var(--border-color)] rounded-lg overflow-hidden text-[11px] font-mono">
            <div className="p-2 bg-[var(--bg-card-hover)] font-bold text-emerald-500 border-b border-[var(--border-color)]">
              <span>Products (PK: ProductID)</span>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[var(--bg-sidebar)] border-b border-[var(--border-color)]">
                  <th className="p-1.5 underline">ProductID</th>
                  <th className="p-1.5">ProductPrice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1.5">P99</td>
                  <td className="p-1.5">$15.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeStep === '3NF' && (
        <div className="space-y-3">
          <p className="text-[11px] text-[var(--text-muted)] italic">
            3NF eliminates transitive dependencies (e.g. EmployeeID $\rightarrow$ DeptID $\rightarrow$ DeptName). Splitting Employee and Department schemas resolves redundancy.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
            <span>Schema fully normalized to 3NF. Insert/Update Anomalies Eliminated!</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default ErdVisualizer;
