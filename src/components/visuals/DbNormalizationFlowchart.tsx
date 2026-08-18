import React, { useState } from 'react';
import { Database, ShieldCheck } from 'lucide-react';

export const DbNormalizationFlowchart: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'1nf' | '2nf' | '3nf' | 'bcnf'>('1nf');

  const stages = [
    {
      id: '1nf',
      name: '1NF (Atomic Values)',
      rule: 'Eliminate repeating groups and ensure all column values are atomic (indivisible).',
      violationExample: 'Table: Orders (OrderID, CustomerName, Items [Array of Products])',
      resolution: 'Decompose into flat rows where each cell contains a single scalar value.',
      tableHeaders: ['OrderID', 'CustomerName', 'ProductCode', 'Quantity'],
      tableRows: [
        ['101', 'Alice Corp', 'SKU-001', '2'],
        ['101', 'Alice Corp', 'SKU-005', '1'],
        ['102', 'Beta LLC', 'SKU-002', '4']
      ]
    },
    {
      id: '2nf',
      name: '2NF (No Partial Dependency)',
      rule: 'Must be in 1NF AND all non-key attributes must be fully functional dependent on the entire primary key.',
      violationExample: 'Table has composite primary key (OrderID, ProductCode), but CustomerName depends only on OrderID.',
      resolution: 'Extract partial dependencies into a separate table (e.g., Orders table with OrderID -> CustomerName).',
      tableHeaders: ['OrderID', 'CustomerName'],
      tableRows: [
        ['101', 'Alice Corp'],
        ['102', 'Beta LLC']
      ]
    },
    {
      id: '3nf',
      name: '3NF (No Transitive Dependency)',
      rule: 'Must be in 2NF AND no non-key attribute is transitively dependent on another non-key attribute (<i>X &rarr; Y &rarr; Z</i>).',
      violationExample: 'EmployeeID -> DepartmentID -> DepartmentBuilding (Building depends on Dept, not directly on Emp).',
      resolution: 'Split Department info into its own Department relation.',
      tableHeaders: ['DeptID', 'DepartmentName', 'BuildingLocation'],
      tableRows: [
        ['D01', 'Engineering', 'Building A'],
        ['D02', 'Finance', 'Building B']
      ]
    },
    {
      id: 'bcnf',
      name: 'BCNF (Boyce-Codd NF)',
      rule: 'Must be in 3NF AND for every functional dependency <i>X &rarr; Y</i>, <i>X</i> must be a superkey.',
      violationExample: 'Course, Instructor -> Student (where Instructor -> Course, meaning Instructor determines Course without being superkey).',
      resolution: 'Decompose relations so every determinant is a candidate key.',
      tableHeaders: ['InstructorID', 'AssignedCourse'],
      tableRows: [
        ['Prof. Smith', 'CS-101'],
        ['Prof. Turing', 'MATH-301']
      ]
    }
  ];

  const currentData = stages.find(s => s.id === activeStage)!;

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-lg">
              <Database className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">Database Normalization Flowchart</h3>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Walkthrough relational normalization stages from unnormalized data through 1NF, 2NF, 3NF, up to Boyce-Codd Normal Form (BCNF).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {stages.map((stage) => {
          const isActive = activeStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id as any)}
              className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                isActive
                  ? 'bg-purple-500/20 border-purple-500 text-[var(--text-primary)] shadow-lg font-bold'
                  : 'bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-purple-500/50'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider">{stage.id}</div>
              <div className="text-sm font-medium mt-1 line-clamp-1">{stage.name.split(' ')[1]}</div>
            </button>
          );
        })}
      </div>

      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-purple-500 dark:text-purple-400" /> {currentData.name}
          </h4>
          <span className="text-xs font-semibold px-2.5 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-300 rounded-full">
            Active Normal Form Rule
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-3 space-y-1">
            <span className="font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider text-[10px]">Theoretical Rule</span>
            <p className="text-[var(--text-secondary)]">{currentData.rule}</p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-3 space-y-1">
            <span className="font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider text-[10px]">Resolution & Decomposition</span>
            <p className="text-[var(--text-secondary)]">{currentData.resolution}</p>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <div className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Decomposed Table Schema Preview ({currentData.id.toUpperCase()})</div>
          <div className="border border-[var(--border-color)] rounded-xl overflow-hidden bg-[var(--bg-card)]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-[var(--text-secondary)] font-semibold">
                  {currentData.tableHeaders.map((header, idx) => (
                    <th key={idx} className="px-4 py-2.5 font-mono">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)] font-mono text-[var(--text-primary)]">
                {currentData.tableRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[var(--bg-secondary)]/50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-2.5">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
