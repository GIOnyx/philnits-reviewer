/**
 * MarkdownContent — Unified Markdown Renderer component.
 *
 * Automatically parses Markdown text (including LaTeX equations, lists, tables,
 * and figures) using react-markdown and remark-gfm. Any multi-line code block
 * is rendered inside the custom PseudoCodeViewer syntax highlighter.
 */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PseudoCodeViewer from './PseudoCodeViewer';
import { formatMathToUnicode } from '../utils/markdown';

interface MarkdownContentProps {
  content: string;
  className?: string;
  cleanObsidian?: boolean;
}

const decodeCommonMojibake = (text: string): string => {
  const replacements: Record<string, string> = {
    'â€œ': '"',
    'â€': '"',
    'â€˜': "'",
    'â€™': "'",
    'â€“': '-',
    'â€”': '-',
    'â€¦': '...',
    'â†’': '->',
    'â‰¥': '>=',
    'â‰¤': '<=',
    'â‰ ': '!=',
    'Â·': '*',
    'Â¯': 'overline',
    'Î»': 'lambda',
    'Î¼': 'micro',
    'Ïƒ': 'sigma',
    'Ï€': 'pi',
    'âœ“': '✓',
  };

  return Object.entries(replacements).reduce(
    (current, [bad, good]) => current.split(bad).join(good),
    text
  );
};

const cleanObsidianMarkdown = (text: string): string => {
  if (!text) return '';

  let cleaned = decodeCommonMojibake(text)
    .replace(/%%[\s\S]*?%%/g, '')
    .replace(/^[ \t]*---+[ \t]*$/gm, '')
    .replace(/!\[\[([^\]]+)\]\]/g, (_, filename: string) => {
      const name = String(filename).replace(/\|.*$/, '').trim();
      return `\n\n> Missing vault image: ${name}\n\n`;
    })
    .replace(/^\s*#+\s+([A-Za-z0-9_-]+)\s*$/gm, '**$1**');

  cleaned = cleaned
    .split('\n')
    .map((line) => {
      const choiceMarkers = line.match(/\b[a-j]\)\s/gi);
      if (!choiceMarkers || choiceMarkers.length < 2) return line;
      return line.replace(/\s+([a-j]\)\s)/gi, '\n\n$1');
    })
    .join('\n');

  cleaned = cleaned.replace(/\n{3,}/g, '\n\n').trim();

  if (!cleaned) {
    return '_No readable flashcard text is available for this side._';
  }

  return cleaned;
};

/** Pre-processes LaTeX inline ($math$) and display ($$math$$) blocks to standard Markdown bold/italic. */
const preprocessMath = (text: string): string => {
  if (!text) return '';
  // Replace $$math$$ with inline-friendly unicode/math text
  let processed = text.replace(/\$\$(.*?)\$\$/gs, (_, math) => {
    return `\n\n**${formatMathToUnicode(math)}**\n\n`;
  });
  // Replace $math$ with formatted unicode/math
  processed = processed.replace(/\$([^$]+?)\$/g, (_, math) => {
    return ` *${formatMathToUnicode(math)}* `;
  });
  return processed;
};

export const MarkdownContent: React.FC<MarkdownContentProps> = ({ content, className = '', cleanObsidian = false }) => {
  const normalized = cleanObsidian ? cleanObsidianMarkdown(content) : content;
  const processed = preprocessMath(normalized);

  return (
    <div className={`prose dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4 text-[var(--text-primary)] font-sans ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className="mb-4">{children}</p>,
          h1: ({ children }) => <h1 className="text-xl font-bold text-[var(--text-primary)] mt-6 mb-3 border-b border-[var(--border-color)] pb-2">{children}</h1>,
          h2: ({ children }) => <h2 className="text-lg font-bold text-[var(--text-primary)] mt-5 mb-2">{children}</h2>,
          h3: ({ children }) => <h3 className="text-base font-bold text-[var(--text-primary)] mt-4 mb-2">{children}</h3>,
          ul: ({ children }) => <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-[var(--text-secondary)]">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-5 space-y-1 mb-4 text-sm text-[var(--text-secondary)]">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          table: ({ children }) => (
            <div className="overflow-x-auto my-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
              <table className="w-full text-xs text-[var(--text-primary)] border-collapse font-sans">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-[var(--bg-card-hover)] border-b border-[var(--border-color)] text-[var(--text-muted)] font-bold uppercase tracking-wider">{children}</thead>,
          th: ({ children }) => <th className="px-3 py-2 text-left font-semibold text-xs border-r border-[var(--border-color)] last:border-r-0">{children}</th>,
          td: ({ children }) => <td className="px-3 py-2 text-xs border-r border-t border-[var(--border-color)] last:border-r-0">{children}</td>,
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="max-w-full h-auto rounded-lg shadow-sm border border-[var(--border-color)] my-4 mx-auto block"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900 not-italic">
              {children}
            </blockquote>
          ),
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const codeString = String(children).replace(/\n$/, '');
            const isBlock = codeString.includes('\n');

            if (isBlock) {
              return (
                <div className="my-4">
                  <PseudoCodeViewer code={codeString} label={match ? `ITPEC ${match[1]}` : undefined} />
                </div>
              );
            }

            return (
              <code className="bg-[var(--code-bg, #1e293b)] text-[var(--code-text, #f8fafc)] px-1.5 py-0.5 rounded font-mono text-xs border border-[var(--border-color)]" {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
