import React, { useState, useEffect } from 'react';
import { SEED_STUDY_TOPICS } from '../data/seed/study_topics';
import { CpuPipelineVisualizer } from './visuals/CpuPipelineVisualizer';
import { ErdVisualizer } from './visuals/ErdVisualizer';
import { RadixSandbox } from './visuals/RadixSandbox';
import { SubnetCalculator } from './visuals/SubnetCalculator';
import { PagingSimulator } from './visuals/PagingSimulator';
import { LogicGatePanel } from './visuals/LogicGatePanel';
import { PertCpmVisualizer } from './visuals/PertCpmVisualizer';
import { SqlJoinVisualizer } from './visuals/SqlJoinVisualizer';
import { CryptoSignatureSimulator } from './visuals/CryptoSignatureSimulator';
import { AlgorithmWalkthrough } from './AlgorithmWalkthrough';
import { BookOpen, Award, Code, List } from 'lucide-react';
import { parseTopicSections, parseMarkdownToHtml } from '../utils/markdown';
import { AiChatAssistant } from './AiChatAssistant';

interface StudyHubProps {}

export const StudyHub: React.FC<StudyHubProps> = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(SEED_STUDY_TOPICS[0].id);
  const [activeSectionIdx, setActiveSectionIdx] = useState<number>(0);

  const activeTopic = SEED_STUDY_TOPICS.find((t) => t.id === selectedTopicId) || SEED_STUDY_TOPICS[0];
  const sections = parseTopicSections(activeTopic.markdownContent);
  const activeSection = sections[activeSectionIdx] || sections[0];

  // Reset section index when topic changes
  useEffect(() => {
    setActiveSectionIdx(0);
  }, [selectedTopicId]);

  // Helper to split markdown and inject visualizers / walkthroughs inline
  const renderContentWithComponents = (content: string) => {
    const parts = content.split(/(\[\[VISUALIZER: \w+\]\]|\[\[WALKTHROUGH: \w+\]\])/g);
    
    return parts.map((part, index) => {
      const visMatch = part.match(/^\[\[VISUALIZER: (\w+)\]\]$/);
      if (visMatch) {
        const name = visMatch[1];
        switch (name) {
          case 'RadixSandbox': return <RadixSandbox key={index} />;
          case 'LogicGatePanel': return <LogicGatePanel key={index} />;
          case 'CpuPipelineVisualizer': return <CpuPipelineVisualizer key={index} />;
          case 'PagingSimulator': return <PagingSimulator key={index} />;
          case 'SubnetCalculator': return <SubnetCalculator key={index} />;
          case 'ErdVisualizer': return <ErdVisualizer key={index} />;
          case 'SqlJoinVisualizer': return <SqlJoinVisualizer key={index} />;
          case 'CryptoSignatureSimulator': return <CryptoSignatureSimulator key={index} />;
          case 'PertCpmVisualizer': return <PertCpmVisualizer key={index} />;
          default: return null;
        }
      }
      
      const walkMatch = part.match(/^\[\[WALKTHROUGH: (\w+)\]\]$/);
      if (walkMatch) {
        const name = walkMatch[1];
        return <AlgorithmWalkthrough key={index} algorithmId={name} />;
      }
      
      return (
        <div 
          key={index}
          className="font-sans"
          dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(part) }}
        />
      );
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      {/* Left Sidebar: Syllabus Taxonomy AND Section Selector Modules (Col 3) */}
      <div className="lg:col-span-3 space-y-4 lg:sticky lg:top-6">
        
        {/* Syllabus Taxonomy List */}
        <div className="glass-panel p-4 space-y-3 bg-[var(--bg-sidebar)]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-1.5 border-b border-[var(--border-color)] pb-2">
            <BookOpen className="w-4 h-4 text-[var(--accent-cyan)]" />
            <span>Syllabus Taxonomy</span>
          </h3>

          <div className="space-y-1">
            {SEED_STUDY_TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`w-full text-left p-3 rounded-lg text-xs font-semibold border transition-all ${
                  selectedTopicId === topic.id
                    ? 'bg-[var(--bg-card)] border-[var(--accent-emerald)] text-[var(--text-primary)] shadow-sm font-bold'
                    : 'bg-transparent border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="text-[9px] text-[var(--text-muted)] uppercase mb-0.5 font-mono">
                  {topic.domainName}
                </div>
                <div className="truncate">{topic.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Section Modules selector menu */}
        <div className="glass-panel p-4 space-y-2.5 bg-[var(--bg-sidebar)]">
          <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1.5 flex items-center gap-1">
            <List className="w-3.5 h-3.5 text-[var(--accent-cyan)]" /> Topic Modules
          </h4>
          {sections.length > 0 ? (
            <nav className="space-y-1 font-sans text-xs">
              {sections.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSectionIdx(idx);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left py-2 px-2.5 rounded-md border text-xs transition-all ${
                    activeSectionIdx === idx
                      ? 'bg-[var(--accent-emerald)]/10 border-[var(--accent-emerald)] text-[var(--accent-emerald)] font-bold shadow-sm'
                      : 'bg-transparent border-transparent text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)] font-medium'
                  }`}
                >
                  {idx + 1}. {item.title}
                </button>
              ))}
            </nav>
          ) : (
            <div className="text-[10px] text-[var(--text-muted)] italic">No sections found.</div>
          )}
        </div>
      </div>

      {/* Right Content Panel: Full Width for Reading Material & Simulators (Col 9) */}
      <div className="lg:col-span-9 space-y-6">
        <div className="glass-panel p-6 space-y-6">
          
          {/* Header */}
          <div className="space-y-2 border-b border-[var(--border-color)] pb-4">
            <span className="badge badge-emerald">{activeTopic.domainName}</span>
            <h2 className="text-xl font-extrabold text-[var(--text-primary)] leading-tight">
              {activeTopic.title}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {activeTopic.summary}
            </p>
          </div>

          {/* Key takeaways cards */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-1">
              <Award className="w-4 h-4 text-amber-500" /> Syllabus Core Takeaways
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {activeTopic.takeaways.map((takeaway, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] leading-relaxed">
                  {takeaway}
                </div>
              ))}
            </div>
          </div>

          {/* Active module content */}
          {activeSection ? (
            <div className="space-y-4 border-t border-[var(--border-color)] pt-6">
              <h3 className="text-base font-extrabold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2 uppercase tracking-wider font-mono">
                {activeSectionIdx + 1}. {activeSection.title}
              </h3>
              
              {/* Parsed long-form body content of the active section with inline components */}
              <div className="space-y-4 pt-2">
                {renderContentWithComponents(activeSection.content)}
              </div>
            </div>
          ) : (
            <div className="text-sm text-[var(--text-secondary)] italic border-t border-[var(--border-color)] pt-6">Select a module to begin reading.</div>
          )}

          {/* Formula Display if configured */}
          {activeTopic.formula && (
            <div className="p-4 rounded-lg bg-[var(--code-bg)] border border-[var(--border-color)] font-mono text-xs text-center text-[var(--code-text)] my-4">
              <div className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Standard Equation</div>
              {activeTopic.formula}
            </div>
          )}

          {/* Code Worked Example if configured */}
          {activeTopic.codeExample && (
            <div className="space-y-2 border-t border-[var(--border-color)] pt-4">
              <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-1">
                <Code className="w-4 h-4 text-[var(--accent-cyan)]" /> Worked Code Example
              </h4>
              <div className="pseudocode-container">
                {activeTopic.codeExample.code}
              </div>
              {activeTopic.codeExample.annotation && (
                <p className="text-xs text-[var(--text-muted)] italic">
                  * {activeTopic.codeExample.annotation}
                </p>
              )}
            </div>
          )}



        </div>
      </div>

      <AiChatAssistant activeContext={`${activeTopic.title} - ${activeSection ? activeSection.title : ''}`} hide={false} />
    </div>
  );
};
export default StudyHub;
