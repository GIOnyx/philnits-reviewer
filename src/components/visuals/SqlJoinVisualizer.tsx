import React, { useState } from 'react';
import { Database, Filter } from 'lucide-react';

interface Row {
  id: number;
  name: string;
  deptId: number | null;
  deptName: string | null;
}

export const SqlJoinVisualizer: React.FC = () => {
  const [joinType, setJoinType] = useState<'INNER' | 'LEFT' | 'RIGHT' | 'FULL'>('INNER');

  // Left Table: Employees
  const employees = [
    { id: 1, name: 'Alice', deptId: 101 },
    { id: 2, name: 'Bob', deptId: 102 },
    { id: 3, name: 'Charlie', deptId: null },
    { id: 4, name: 'David', deptId: 104 }
  ];

  // Right Table: Departments
  const departments = [
    { id: 101, name: 'Engineering' },
    { id: 102, name: 'Security' },
    { id: 103, name: 'Marketing' }
  ];

  // Compute Joined Rows
  const getJoinedRows = (): Row[] => {
    const rows: Row[] = [];

    if (joinType === 'INNER') {
      employees.forEach(emp => {
        const dept = departments.find(d => d.id === emp.deptId);
        if (dept) {
          rows.push({ id: emp.id, name: emp.name, deptId: emp.deptId, deptName: dept.name });
        }
      });
    } else if (joinType === 'LEFT') {
      employees.forEach(emp => {
        const dept = departments.find(d => d.id === emp.deptId);
        rows.push({
          id: emp.id,
          name: emp.name,
          deptId: emp.deptId,
          deptName: dept ? dept.name : null
        });
      });
    } else if (joinType === 'RIGHT') {
      departments.forEach(dept => {
        const matchedEmps = employees.filter(emp => emp.deptId === dept.id);
        if (matchedEmps.length > 0) {
          matchedEmps.forEach(emp => {
            rows.push({ id: emp.id, name: emp.name, deptId: dept.id, deptName: dept.name });
          });
        } else {
          rows.push({ id: -1, name: 'NULL', deptId: dept.id, deptName: dept.name });
        }
      });
    } else if (joinType === 'FULL') {
      // Employees + unmatched departments
      const addedDepts = new Set<number>();

      employees.forEach(emp => {
        const dept = departments.find(d => d.id === emp.deptId);
        rows.push({
          id: emp.id,
          name: emp.name,
          deptId: emp.deptId,
          deptName: dept ? dept.name : null
        });
        if (dept) addedDepts.add(dept.id);
      });

      departments.forEach(dept => {
        if (!addedDepts.has(dept.id)) {
          rows.push({ id: -1, name: 'NULL', deptId: dept.id, deptName: dept.name });
        }
      });
    }

    return rows;
  };

  const joinedRows = getJoinedRows();

  return (
    <div className="glass-panel p-5 space-y-4 my-4 font-sans text-xs">
      
      <div className="border-b border-[var(--border-color)] pb-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-[var(--accent-emerald)]" />
          <div>
            <h4 className="text-sm font-bold text-[var(--text-primary)]">Interactive SQL Join Sandbox</h4>
            <p className="text-xs text-[var(--text-muted)]">Click on different JOIN buttons to see how table sets intersect and map in relational databases.</p>
          </div>
        </div>
        <span className="badge badge-emerald text-[10px] font-mono">SQL SELECT</span>
      </div>

      {/* Selector controls */}
      <div className="flex gap-2">
        {(['INNER', 'LEFT', 'RIGHT', 'FULL'] as const).map(type => (
          <button
            key={type}
            onClick={() => setJoinType(type)}
            className={`flex-1 py-1.5 px-3 rounded-lg border font-bold text-[11px] transition-colors ${
              joinType === type
                ? 'bg-[var(--accent-emerald)] text-white border-transparent'
                : 'bg-[var(--bg-card-hover)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            {type} JOIN
          </button>
        ))}
      </div>

      {/* Input Tables Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Employees Table */}
        <div className="border border-[var(--border-color)] rounded-lg overflow-hidden font-mono text-[10px]">
          <div className="p-2 bg-[var(--bg-card-hover)] font-bold text-[var(--accent-cyan)] border-b border-[var(--border-color)]">
            Employees (Left Table)
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[var(--bg-sidebar)] border-b border-[var(--border-color)] text-[var(--text-muted)]">
                <th className="p-1.5">EmpID</th>
                <th className="p-1.5">Name</th>
                <th className="p-1.5">DeptID</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(e => (
                <tr key={e.id} className="border-b border-[var(--border-color)]/30">
                  <td className="p-1.5">{e.id}</td>
                  <td className="p-1.5 font-bold">{e.name}</td>
                  <td className="p-1.5">{e.deptId ?? 'NULL'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Departments Table */}
        <div className="border border-[var(--border-color)] rounded-lg overflow-hidden font-mono text-[10px]">
          <div className="p-2 bg-[var(--bg-card-hover)] font-bold text-amber-500 border-b border-[var(--border-color)]">
            Departments (Right Table)
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[var(--bg-sidebar)] border-b border-[var(--border-color)] text-[var(--text-muted)]">
                <th className="p-1.5">DeptID</th>
                <th className="p-1.5">DeptName</th>
              </tr>
            </thead>
            <tbody>
              {departments.map(d => (
                <tr key={d.id} className="border-b border-[var(--border-color)]/30">
                  <td className="p-1.5">{d.id}</td>
                  <td className="p-1.5 font-bold">{d.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Joined Result Table */}
      <div className="border border-[var(--border-color)] rounded-lg overflow-hidden font-mono text-[10px]">
        <div className="p-2 bg-[var(--bg-card-hover)] font-bold text-[var(--accent-emerald)] border-b border-[var(--border-color)] flex justify-between items-center">
          <span>QUERY OUTPUT: Employees {joinType} JOIN Departments</span>
          <span className="badge badge-emerald text-[9px]">{joinedRows.length} Rows Returned</span>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[var(--bg-sidebar)] border-b border-[var(--border-color)] text-[var(--text-muted)]">
              <th className="p-1.5">EmpID</th>
              <th className="p-1.5">EmpName</th>
              <th className="p-1.5">DeptID</th>
              <th className="p-1.5">DeptName</th>
            </tr>
          </thead>
          <tbody>
            {joinedRows.map((row, idx) => {
              const hasNull = row.name === 'NULL' || row.deptName === null;
              return (
                <tr key={idx} className={`border-b border-[var(--border-color)]/30 ${hasNull ? 'bg-rose-500/5' : 'bg-emerald-500/5'}`}>
                  <td className="p-1.5">{row.id === -1 ? 'NULL' : row.id}</td>
                  <td className={`p-1.5 font-bold ${row.name === 'NULL' ? 'text-rose-500' : 'text-[var(--text-primary)]'}`}>{row.name}</td>
                  <td className="p-1.5">{row.deptId ?? 'NULL'}</td>
                  <td className={`p-1.5 font-bold ${row.deptName === null ? 'text-rose-500' : 'text-[var(--text-primary)]'}`}>{row.deptName ?? 'NULL'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
};
export default SqlJoinVisualizer;
