import React, { useState } from 'react';
import { TraceTableSpec } from '../types/exam';
import { CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

interface TraceTableGridProps {
  spec: TraceTableSpec;
  onVerified?: (isAllCorrect: boolean) => void;
}

export const TraceTableGrid: React.FC<TraceTableGridProps> = ({ spec, onVerified }) => {
  // Store user entered values: key format step_varName -> string
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [evaluated, setEvaluated] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [totalFields, setTotalFields] = useState<number>(0);

  const handleInputChange = (step: number, varName: string, value: string) => {
    setUserInputs((prev) => ({
      ...prev,
      [`${step}_${varName}`]: value
    }));
    setEvaluated(false);
  };

  const handleVerify = () => {
    let correct = 0;
    let total = 0;

    spec.rows.forEach((row) => {
      spec.variables.forEach((varName) => {
        // Skip step column or non-evaluable headers
        if (varName === 'Step / Iteration' || varName === 'Operation') return;

        const expected = String(row.expectedValues[varName] ?? '-').trim();
        const entered = String(userInputs[`${row.step}_${varName}`] ?? '').trim();

        total += 1;
        if (entered.toLowerCase() === expected.toLowerCase()) {
          correct += 1;
        }
      });
    });

    setCorrectCount(correct);
    setTotalFields(total);
    setEvaluated(true);
    if (onVerified) {
      onVerified(correct === total);
    }
  };

  const handleReset = () => {
    setUserInputs({});
    setEvaluated(false);
  };

  return (
    <div className="glass-panel p-4 my-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span>Algorithmic Trace Table</span>
            <span className="badge badge-cyan text-[10px]">Interactive Grid</span>
          </h4>
          <p className="text-xs text-[var(--text-muted)]">
            Track variable mutations line-by-line through each iteration.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="btn-secondary text-xs py-1 px-2"
            title="Clear Inputs"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset
          </button>
          <button
            onClick={handleVerify}
            className="btn-primary text-xs py-1 px-3"
          >
            Verify Trace
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto border border-[var(--border-color)] rounded-lg">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-[var(--bg-card-hover)] border-b border-[var(--border-color)]">
              {spec.variables.map((v, i) => (
                <th key={i} className="p-2.5 font-semibold text-[var(--text-secondary)] whitespace-nowrap">
                  {v}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {spec.rows.map((row) => (
              <tr key={row.step} className="border-b border-[var(--border-color)] hover:bg-[var(--bg-card-hover)]/50">
                {spec.variables.map((varName, colIdx) => {
                  const isLabelCol = colIdx === 0;
                  const key = `${row.step}_${varName}`;
                  const expected = String(row.expectedValues[varName] ?? '-').trim();
                  const entered = userInputs[key] ?? '';

                  if (isLabelCol) {
                    return (
                      <td key={colIdx} className="p-2.5 font-mono font-medium text-[var(--accent-cyan)] whitespace-nowrap bg-[var(--bg-sidebar)]">
                        {String(row.expectedValues[varName] ?? `Step ${row.step}`)}
                      </td>
                    );
                  }

                  const isMatch = entered.trim().toLowerCase() === expected.toLowerCase();
                  let inputStateClass = '';
                  if (evaluated) {
                    inputStateClass = isMatch ? 'correct' : 'incorrect';
                  }

                  return (
                    <td key={colIdx} className="p-1.5 min-w-[90px]">
                      <input
                        type="text"
                        value={entered}
                        onChange={(e) => handleInputChange(row.step, varName, e.target.value)}
                        placeholder="?"
                        className={`trace-input ${inputStateClass}`}
                      />
                      {evaluated && !isMatch && (
                        <span className="block text-[10px] text-rose-500 font-mono mt-0.5">
                          Exp: {expected}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Evaluation Results Banner */}
      {evaluated && (
        <div className={`mt-3 p-3 rounded-md flex items-center justify-between text-xs font-medium ${
          correctCount === totalFields
            ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
            : 'bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400'
        }`}>
          <div className="flex items-center gap-2">
            {correctCount === totalFields ? (
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-500" />
            )}
            <span>
              {correctCount === totalFields
                ? 'Perfect! All trace values match the algorithmic logic.'
                : `Verified: ${correctCount} / ${totalFields} fields correct. Check highlighted cells above.`}
            </span>
          </div>
          <span className="font-bold">
            {Math.round((correctCount / totalFields) * 100)}%
          </span>
        </div>
      )}
    </div>
  );
};
