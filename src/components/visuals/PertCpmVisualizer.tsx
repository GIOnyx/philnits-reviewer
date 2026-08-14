import React, { useState } from 'react';
import { Network, Plus, Trash2, Play } from 'lucide-react';

interface Task {
  id: string;
  duration: number;
  dependencies: string[]; // task IDs
}

export const PertCpmVisualizer: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 'A', duration: 3, dependencies: [] },
    { id: 'B', duration: 4, dependencies: ['A'] },
    { id: 'C', duration: 6, dependencies: ['A'] },
    { id: 'D', duration: 2, dependencies: ['B'] },
    { id: 'E', duration: 3, dependencies: ['C'] },
    { id: 'F', duration: 2, dependencies: ['D', 'E'] }
  ]);

  const [newTaskId, setNewTaskId] = useState<string>('');
  const [newTaskDuration, setNewTaskDuration] = useState<number>(1);
  const [newTaskDeps, setNewTaskDeps] = useState<string>('');

  const calculateCPM = () => {
    // 1. Forward Pass (Calculate Early Start (ES) and Early Finish (EF))
    const es: Record<string, number> = {};
    const ef: Record<string, number> = {};
    
    // Sort tasks topologically to handle dependencies correctly
    const visited = new Set<string>();
    const sortedTasks: Task[] = [];
    
    const visit = (task: Task) => {
      if (visited.has(task.id)) return;
      task.dependencies.forEach(depId => {
        const depTask = tasks.find(t => t.id === depId);
        if (depTask) visit(depTask);
      });
      visited.add(task.id);
      sortedTasks.push(task);
    };

    tasks.forEach(t => visit(t));

    sortedTasks.forEach(task => {
      if (task.dependencies.length === 0) {
        es[task.id] = 0;
      } else {
        es[task.id] = Math.max(...task.dependencies.map(depId => ef[depId] || 0));
      }
      ef[task.id] = es[task.id] + task.duration;
    });

    // Max early finish determines project duration
    const projectDuration = Math.max(...Object.values(ef), 0);

    // 2. Backward Pass (Calculate Late Finish (LF) and Late Start (LS))
    const lf: Record<string, number> = {};
    const ls: Record<string, number> = {};

    // Run reverse topological order
    const reverseSorted = [...sortedTasks].reverse();

    reverseSorted.forEach(task => {
      // Find successors
      const successors = tasks.filter(t => t.dependencies.includes(task.id));
      if (successors.length === 0) {
        lf[task.id] = projectDuration;
      } else {
        lf[task.id] = Math.min(...successors.map(succ => ls[succ.id] || projectDuration));
      }
      ls[task.id] = lf[task.id] - task.duration;
    });

    // 3. Slack Time (Slack = LS - ES)
    const slack: Record<string, number> = {};
    const criticalPath: string[] = [];

    tasks.forEach(task => {
      slack[task.id] = (ls[task.id] ?? 0) - (es[task.id] ?? 0);
      if (slack[task.id] === 0) {
        criticalPath.push(task.id);
      }
    });

    return { es, ef, ls, lf, slack, criticalPath, projectDuration };
  };

  const handleAddTask = () => {
    if (!newTaskId || tasks.some(t => t.id === newTaskId)) return;
    const deps = newTaskDeps.split(',').map(d => d.trim()).filter(Boolean);
    
    setTasks(prev => [
      ...prev,
      { id: newTaskId.toUpperCase(), duration: newTaskDuration, dependencies: deps }
    ]);
    setNewTaskId('');
    setNewTaskDuration(1);
    setNewTaskDeps('');
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id).map(t => ({
      ...t,
      dependencies: t.dependencies.filter(dep => dep !== id)
    })));
  };

  const { es, ef, ls, lf, slack, criticalPath, projectDuration } = calculateCPM();

  return (
    <div className="glass-panel p-5 space-y-4 my-4 font-sans">
      
      <div className="border-b border-[var(--border-color)] pb-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Network className="w-5 h-5 text-[var(--accent-cyan)]" />
          <div>
            <h4 className="text-sm font-bold text-[var(--text-primary)]">PERT / CPM Critical Path Method Solver</h4>
            <p className="text-xs text-[var(--text-muted)]">Input project tasks and dependencies to isolate early/late schedules and the critical path.</p>
          </div>
        </div>
        <span className="badge badge-rose text-[10px] font-mono">Project duration: {projectDuration} Days</span>
      </div>

      {/* Task List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Task Form & Table */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block border-b border-[var(--border-color)] pb-1">Task List</span>
          
          <div className="max-h-[220px] overflow-y-auto border border-[var(--border-color)] rounded-lg">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-[var(--bg-card-hover)] border-b border-[var(--border-color)] text-[var(--text-secondary)]">
                  <th className="p-2">ID</th>
                  <th className="p-2">Duration</th>
                  <th className="p-2">Predecessors</th>
                  <th className="p-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(t => (
                  <tr key={t.id} className="border-b border-[var(--border-color)]/30 hover:bg-[var(--bg-card-hover)]/30">
                    <td className="p-2 font-bold font-mono text-[var(--accent-cyan)]">{t.id}</td>
                    <td className="p-2">{t.duration} days</td>
                    <td className="p-2 font-mono">{t.dependencies.join(', ') || '-'}</td>
                    <td className="p-2 text-right">
                      <button onClick={() => handleDeleteTask(t.id)} className="text-rose-500 hover:text-rose-400 p-1">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Task Control */}
          <div className="grid grid-cols-3 gap-2 items-end bg-[var(--bg-sidebar)] p-2.5 rounded-lg border border-[var(--border-color)]">
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-[var(--text-muted)] uppercase">Task ID</label>
              <input
                type="text"
                maxLength={2}
                value={newTaskId}
                onChange={e => setNewTaskId(e.target.value)}
                placeholder="G"
                className="trace-input py-1 text-center font-bold"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-[var(--text-muted)] uppercase">Days</label>
              <input
                type="number"
                min="1"
                value={newTaskDuration}
                onChange={e => setNewTaskDuration(parseInt(e.target.value, 10) || 1)}
                className="trace-input py-1 text-center"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-[var(--text-muted)] uppercase">Deps (e.g. A,B)</label>
              <input
                type="text"
                value={newTaskDeps}
                onChange={e => setNewTaskDeps(e.target.value)}
                placeholder="None"
                className="trace-input py-1 text-center font-mono"
              />
            </div>
            <button onClick={handleAddTask} className="col-span-3 btn-primary text-xs py-1.5 flex justify-center mt-1">
              <Plus className="w-4 h-4" /> Add Task Node
            </button>
          </div>
        </div>

        {/* Calculated Node Schedules Visual Card */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block border-b border-[var(--border-color)] pb-1">Calculated CPM Schedules</span>
          
          <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto">
            {tasks.map(t => {
              const isCritical = criticalPath.includes(t.id);
              return (
                <div
                  key={t.id}
                  className={`p-3 rounded-lg border text-xs space-y-1.5 transition-all ${
                    isCritical
                      ? 'bg-rose-500/10 border-rose-500/40 text-[var(--text-primary)] shadow-sm shadow-rose-950/20'
                      : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-secondary)]'
                  }`}
                >
                  <div className="flex justify-between items-center font-bold">
                    <span className="font-mono text-sm">{t.id} (Slack: {slack[t.id]})</span>
                    <span className={`badge text-[9px] px-1 py-0.5 ${isCritical ? 'badge-rose' : 'badge-cyan'}`}>
                      {isCritical ? 'CRITICAL' : 'FLOAT'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[10px]">
                    <div>ES: {es[t.id] ?? 0}</div>
                    <div>EF: {ef[t.id] ?? 0}</div>
                    <div>LS: {ls[t.id] ?? 0}</div>
                    <div>LF: {lf[t.id] ?? 0}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Critical Path Sequence Banner */}
      <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg text-xs flex items-center justify-between">
        <div className="space-y-0.5">
          <span className="font-bold text-rose-500 block">Critical Path Node Sequence:</span>
          <span className="font-mono text-[13px] tracking-widest text-[var(--text-primary)]">
            {criticalPath.sort((x, y) => (es[x] || 0) - (es[y] || 0)).join(' ➔ ')}
          </span>
        </div>
        <span className="text-[10px] text-[var(--text-muted)] italic">
          * Reducing durations of these tasks is the only way to accelerate project completion.
        </span>
      </div>

    </div>
  );
};
export default PertCpmVisualizer;
