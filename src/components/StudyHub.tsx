import React, { useState } from 'react';
import { SEED_STUDY_TOPICS, StudyTopic } from '../data/seed/study_topics';
import { CpuPipelineVisualizer } from './visuals/CpuPipelineVisualizer';
import { ErdVisualizer } from './visuals/ErdVisualizer';
import { RadixSandbox } from './visuals/RadixSandbox';
import { SubnetCalculator } from './visuals/SubnetCalculator';
import { PagingSimulator } from './visuals/PagingSimulator';
import { LogicGatePanel } from './visuals/LogicGatePanel';
import { PertCpmVisualizer } from './visuals/PertCpmVisualizer';
import { SqlJoinVisualizer } from './visuals/SqlJoinVisualizer';
import { CryptoSignatureSimulator } from './visuals/CryptoSignatureSimulator';
import { BookOpen, Award, ArrowRight, BookMarked, Code } from 'lucide-react';

interface StudyHubProps {
  onStartTest: (category: string) => void;
}

// Converts standard LaTeX macros and subscripts/superscripts to readable Unicode / HTML elements
function formatMathToUnicode(math: string): string {
  let output = math;
  
  // Replace standard LaTeX macros
  output = output.replace(/\\dots/g, '…');
  output = output.replace(/\\sum/g, '∑');
  output = output.replace(/\\cdot/g, '·');
  output = output.replace(/\\rightarrow/g, ' ➔ ');
  output = output.replace(/\\sim/g, '~');
  output = output.replace(/\\geq/g, '≥');
  output = output.replace(/\\leq/g, '≤');
  output = output.replace(/\\max/g, 'max');
  output = output.replace(/\\min/g, 'min');
  output = output.replace(/\\text\{(.*?)\}/g, '$1');
  
  // Subscripts: _{...} or _x
  output = output.replace(/_\{(.*?)\}/g, '<sub>$1</sub>');
  output = output.replace(/_([a-zA-Z0-9\-+])/g, '<sub>$1</sub>');
  
  // Superscripts: ^{...} or ^x
  output = output.replace(/\^\{(.*?)\}/g, '<sup>$1</sup>');
  output = output.replace(/\^([a-zA-Z0-9\-+])/g, '<sup>$1</sup>');
  
  return output;
}

// Custom Markdown parser helper to return beautifully styled HTML structures (including LaTeX math blocks)
function parseMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';
  
  const lines = markdown.split('\n');
  let inList = false;
  let inOrderedList = false;
  
  const processedLines = lines.map((line) => {
    const cleanLine = line.trim();

    // Check list closures
    if (!cleanLine.startsWith('-') && !cleanLine.startsWith('*') && inList) {
      inList = false;
      return '</ul>' + parseLineDecorations(cleanLine);
    }
    if (!/^\d+\./.test(cleanLine) && inOrderedList) {
      inOrderedList = false;
      return '</ol>' + parseLineDecorations(cleanLine);
    }

    // Display Math Block ($$ ... $$)
    if (cleanLine.startsWith('$$') && cleanLine.endsWith('$$')) {
      const math = cleanLine.substring(2, cleanLine.length - 2);
      return `<div class="font-mono text-sm text-center text-[var(--accent-cyan)] my-4 bg-[var(--bg-sidebar)] p-3 border border-[var(--border-color)] rounded-lg">${formatMathToUnicode(math)}</div>`;
    }

    // Heading 3
    if (cleanLine.startsWith('### ')) {
      return `<h3 class="text-sm font-bold text-[var(--text-primary)] mt-6 mb-3 border-b border-[var(--border-color)] pb-2 uppercase tracking-wider">${parseLineDecorations(cleanLine.substring(4))}</h3>`;
    }
    // Heading 4
    if (cleanLine.startsWith('#### ')) {
      return `<h4 class="text-xs font-semibold text-[var(--accent-cyan)] mt-5 mb-2 font-mono tracking-wide">${parseLineDecorations(cleanLine.substring(5))}</h4>`;
    }

    // Unordered list item
    if (cleanLine.startsWith('- ') || cleanLine.startsWith('* ')) {
      let output = '';
      if (!inList) {
        inList = true;
        output += '<ul class="space-y-2 my-4">';
      }
      output += `<li class="ml-5 list-disc text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">${parseLineDecorations(cleanLine.substring(2))}</li>`;
      return output;
    }

    // Ordered list item
    if (/^\d+\.\s+/.test(cleanLine)) {
      let output = '';
      if (!inOrderedList) {
        inOrderedList = true;
        output += '<ol class="space-y-2 my-4">';
      }
      const match = cleanLine.match(/^(\d+)\.\s+(.*)/);
      const content = match ? match[2] : cleanLine;
      output += `<li class="ml-5 list-decimal text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">${parseLineDecorations(content)}</li>`;
      return output;
    }

    // Empty lines
    if (cleanLine === '') {
      return '';
    }

    // Standard paragraph
    return `<p class="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed my-3 font-sans">${parseLineDecorations(cleanLine)}</p>`;
  });

  let result = processedLines.filter(line => line !== '').join('\n');
  if (inList) result += '</ul>';
  if (inOrderedList) result += '</ol>';
  
  return result;
}

function parseLineDecorations(text: string): string {
  let output = text;
  // Bold: **text**
  output = output.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[var(--text-primary)]">$1</strong>');
  // Inline code: `code`
  output = output.replace(/`(.*?)`/g, '<code class="bg-[var(--code-bg)] text-[var(--code-text)] px-1.5 py-0.5 rounded font-mono text-[11px] border border-[var(--border-color)]">$1</code>');
  // Inline Math: $math$
  output = output.replace(/\$(.*?)\$/g, (match, mathExpr) => {
    return `<span class="font-mono italic text-[var(--accent-cyan)] font-semibold">${formatMathToUnicode(mathExpr)}</span>`;
  });
  return output;
}

export const StudyHub: React.FC<StudyHubProps> = ({ onStartTest }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(SEED_STUDY_TOPICS[0].id);

  const activeTopic = SEED_STUDY_TOPICS.find((t) => t.id === selectedTopicId) || SEED_STUDY_TOPICS[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      {/* Left Sidebar: Syllabus Domains List (Col 4) */}
      <div className="lg:col-span-4 space-y-3">
        <div className="glass-panel p-4 space-y-3 bg-[var(--bg-sidebar)]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5 border-b border-[var(--border-color)] pb-2">
            <BookOpen className="w-4 h-4 text-[var(--accent-cyan)]" />
            <span>FE Syllabus Outline</span>
          </h3>

          <div className="space-y-1">
            {SEED_STUDY_TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`w-full text-left p-3 rounded-lg text-xs font-semibold border transition-all ${
                  selectedTopicId === topic.id
                    ? 'bg-[var(--bg-card)] border-[var(--accent-emerald)] text-[var(--text-primary)] shadow-sm'
                    : 'bg-transparent border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="text-[10px] text-[var(--text-muted)] uppercase mb-0.5">
                  {topic.domainName}
                </div>
                <div>{topic.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content Panel: Topic Study Material (Col 8) */}
      <div className="lg:col-span-8 space-y-6">
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
              <Award className="w-4 h-4 text-amber-500" /> Key Exam Takeaways
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {activeTopic.takeaways.map((takeaway, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] leading-relaxed">
                  {takeaway}
                </div>
              ))}
            </div>
          </div>

          {/* Styled Parsed Markdown Content */}
          <div 
            className="border-t border-[var(--border-color)] pt-4 font-sans"
            dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(activeTopic.markdownContent) }}
          />

          {/* Dynamic Visual Simulator Injection */}
          {activeTopic.id === 'discrete-math' && (
            <div className="border-t border-[var(--border-color)] pt-4 space-y-4">
              <RadixSandbox />
              <SubnetCalculator />
            </div>
          )}

          {activeTopic.id === 'cpu-pipeline' && (
            <div className="border-t border-[var(--border-color)] pt-4">
              <CpuPipelineVisualizer />
            </div>
          )}

          {activeTopic.id === 'db-normalization' && (
            <div className="border-t border-[var(--border-color)] pt-4 space-y-4">
              <ErdVisualizer />
              <SqlJoinVisualizer />
              <PagingSimulator />
            </div>
          )}

          {activeTopic.id === 'network-security' && (
            <div className="border-t border-[var(--border-color)] pt-4 space-y-4">
              <LogicGatePanel />
              <CryptoSignatureSimulator />
            </div>
          )}

          {activeTopic.id === 'project-management' && (
            <div className="border-t border-[var(--border-color)] pt-4">
              <PertCpmVisualizer />
            </div>
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

          {/* CTA: Test Myself on This Topic */}
          <div className="border-t border-[var(--border-color)] pt-6 flex justify-end">
            <button
              onClick={() => onStartTest(activeTopic.domainName)}
              className="btn-primary flex items-center gap-2 text-sm shadow-md"
            >
              <BookMarked className="w-4 h-4" /> Test Myself on This Topic <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
export default StudyHub;
