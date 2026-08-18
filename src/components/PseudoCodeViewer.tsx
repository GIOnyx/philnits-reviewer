/**
 * PseudoCodeViewer — ITPEC Pseudo-language Syntax Highlighter
 *
 * Renders raw ITPEC pseudo-code strings with:
 * - Line numbers in a fixed-width gutter
 * - Token-level syntax highlighting (keywords, operators, comments, procedures)
 * - Monospace font with exact whitespace/indentation preservation
 * - Copy-to-clipboard button
 * - Hover line highlight for readability
 */

import React, { useCallback, useState } from 'react';
import { Copy, Check, Code2 } from 'lucide-react';

interface PseudoCodeViewerProps {
  code: string;
  /** Optional label displayed in the header bar. Defaults to "ITPEC Pseudo-code" */
  label?: string;
  /** Max height in pixels before vertical scroll kicks in. Defaults to 480. */
  maxHeightPx?: number;
}

// ──────────────────────────────────────────────────────────────────────────────
// Token types and their CSS variable / class names
// ──────────────────────────────────────────────────────────────────────────────

type TokenType =
  | 'keyword'
  | 'procedure'
  | 'arrow'
  | 'comment_block'
  | 'comment_line'
  | 'comparison'
  | 'literal'
  | 'plain';

interface Token {
  type: TokenType;
  value: string;
}

const TOKEN_STYLES: Record<TokenType, string> = {
  keyword:       'color: var(--itpec-keyword, #60a5fa);  font-weight: 600;',
  procedure:     'color: var(--itpec-procedure, #f59e0b); font-weight: 700;',
  arrow:         'color: var(--itpec-arrow, #34d399);    font-weight: 700;',
  comment_block: 'color: var(--itpec-comment, #6b7280);  font-style: italic;',
  comment_line:  'color: var(--itpec-comment, #6b7280);  font-style: italic;',
  comparison:    'color: var(--itpec-operator, #e879f9);',
  literal:       'color: var(--itpec-literal, #fb923c);  font-weight: 600;',
  plain:         '',
};

// ──────────────────────────────────────────────────────────────────────────────
// Tokenizer
// Processes one line of pseudo-code into an array of {type, value} tokens.
// Order matters: block-comment delimiters and line-comments are checked first
// so keyword matching doesn't corrupt comment text.
// ──────────────────────────────────────────────────────────────────────────────

const KEYWORD_PATTERN = /\b(if|elseif|else|endif|for|endfor|while|endwhile|do|enddo|return|and|or|not|true|false|integer|real|string|boolean|character|undefined|div|mod)\b/g;
const ARROW_PATTERN   = /←/g;
const COMPARISON_PATTERN = /[≠≥≤]/g;
const LITERAL_BOOL   = /\b(true|false)\b/g;

/**
 * Tokenize a single line of ITPEC pseudo-code.
 * Handles: line comments (double-slash), block comments (slash-star to star-slash), procedure marker ○,
 * assignment arrow ←, comparison operators ≠ ≥ ≤, and reserved keywords.
 */
function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let remaining = line;

  // Helper: push a "plain" chunk and advance
  const pushPlain = (text: string) => {
    if (text) tokens.push({ type: 'plain', value: text });
  };

  while (remaining.length > 0) {
    // 1. Line comment: // ... (rest of line)
    const lineCommentIdx = remaining.indexOf('//');
    if (lineCommentIdx !== -1 && !remaining.startsWith('/*')) {
      // Check nothing before it needs processing
      processInline(remaining.slice(0, lineCommentIdx), tokens);
      tokens.push({ type: 'comment_line', value: remaining.slice(lineCommentIdx) });
      return tokens;
    }

    // 2. Block comment: /* ... */
    if (remaining.startsWith('/*')) {
      const closeIdx = remaining.indexOf('*/');
      if (closeIdx !== -1) {
        tokens.push({ type: 'comment_block', value: remaining.slice(0, closeIdx + 2) });
        remaining = remaining.slice(closeIdx + 2);
        continue;
      } else {
        // Unclosed block comment — treat rest of line as comment
        tokens.push({ type: 'comment_block', value: remaining });
        return tokens;
      }
    }

    // 3. Procedure marker: ○
    if (remaining.startsWith('○')) {
      tokens.push({ type: 'procedure', value: '○' });
      remaining = remaining.slice(1);
      continue;
    }

    // 4. Arrow
    if (remaining.startsWith('←')) {
      tokens.push({ type: 'arrow', value: '←' });
      remaining = remaining.slice(1);
      continue;
    }

    // 5. Comparison operators
    if (/^[≠≥≤]/.test(remaining)) {
      tokens.push({ type: 'comparison', value: remaining[0] });
      remaining = remaining.slice(1);
      continue;
    }

    // 6. Scan forward to next special character
    const specialIdx = findNextSpecial(remaining);
    if (specialIdx === 0) {
      // Shouldn't happen, but avoid infinite loop
      pushPlain(remaining[0]);
      remaining = remaining.slice(1);
    } else {
      processInline(remaining.slice(0, specialIdx), tokens);
      remaining = remaining.slice(specialIdx);
    }
  }

  return tokens;
}

/** Find index of the next special token start character in `s`. */
function findNextSpecial(s: string): number {
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '/' && s[i + 1] === '/') return i;
    if (ch === '/' && s[i + 1] === '*') return i;
    if (ch === '○' || ch === '←' || ch === '≠' || ch === '≥' || ch === '≤') return i;
  }
  return s.length;
}

/**
 * Process a plain segment that contains no special delimiters,
 * splitting it by keywords.
 */
function processInline(segment: string, tokens: Token[]): void {
  if (!segment) return;

  // Split by keyword boundaries
  const parts = segment.split(KEYWORD_PATTERN);
  for (const part of parts) {
    if (!part) continue;
    if (KEYWORD_PATTERN.test(part)) {
      // Re-test because split() consumes the regex state
      if (/^(true|false)$/.test(part)) {
        tokens.push({ type: 'literal', value: part });
      } else {
        tokens.push({ type: 'keyword', value: part });
      }
    } else {
      tokens.push({ type: 'plain', value: part });
    }
  }

  // Reset regex lastIndex (stateful global regex)
  KEYWORD_PATTERN.lastIndex = 0;
}

// ──────────────────────────────────────────────────────────────────────────────
// Render helpers
// ──────────────────────────────────────────────────────────────────────────────

function renderTokens(tokens: Token[]): React.ReactNode[] {
  return tokens.map((tok, i) => {
    const style = TOKEN_STYLES[tok.type];
    if (!style) return tok.value;
    return (
      <span key={i} style={{ ...parseStyle(style) }}>
        {tok.value}
      </span>
    );
  });
}

/** Convert a CSS string like "color: red; font-weight: bold;" to a React style object. */
function parseStyle(css: string): React.CSSProperties {
  const styleObj: Record<string, string> = {};
  for (const decl of css.split(';')) {
    const [prop, val] = decl.split(':');
    if (prop && val) {
      // Convert kebab-case → camelCase
      const camel = prop.trim().replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
      styleObj[camel] = val.trim();
    }
  }
  return styleObj as React.CSSProperties;
}

// ──────────────────────────────────────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────────────────────────────────────

export const PseudoCodeViewer: React.FC<PseudoCodeViewerProps> = ({
  code,
  label = 'ITPEC Pseudo-code',
  maxHeightPx = 480,
}) => {
  const [copied, setCopied] = useState(false);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {/* silent on insecure contexts */});
  }, [code]);

  const lines = code.split('\n');

  return (
    <div
      style={{
        border: '1px solid var(--border-color)',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'var(--code-bg, #0f1117)',
        fontFamily: 'monospace',
        fontSize: '12.5px',
        lineHeight: '1.65',
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 12px',
          borderBottom: '1px solid var(--border-color)',
          background: 'var(--bg-card-hover)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Code2 style={{ width: 13, height: 13, color: 'var(--accent-cyan)' }} />
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontFamily: 'monospace',
            }}
          >
            {label}
          </span>
        </div>
        <button
          onClick={handleCopy}
          title="Copy pseudo-code"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            padding: '3px 8px',
            borderRadius: 5,
            border: '1px solid var(--border-color)',
            background: 'transparent',
            color: copied ? 'var(--accent-emerald)' : 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: 10,
            transition: 'color 0.2s, border-color 0.2s',
          }}
        >
          {copied
            ? <><Check style={{ width: 11, height: 11 }} /> Copied</>
            : <><Copy style={{ width: 11, height: 11 }} /> Copy</>
          }
        </button>
      </div>

      {/* Code body */}
      <div
        style={{
          overflowY: 'auto',
          maxHeight: maxHeightPx,
          overflowX: 'auto',
        }}
      >
        <table
          style={{
            borderCollapse: 'collapse',
            width: '100%',
            tableLayout: 'fixed',
          }}
          aria-label={`Pseudo-code: ${label}`}
        >
          <colgroup>
            <col style={{ width: 40 }} />
            <col />
          </colgroup>
          <tbody>
            {lines.map((line, idx) => {
              const lineNum = idx + 1;
              const isHovered = hoveredLine === lineNum;
              const tokens = tokenizeLine(line);

              return (
                <tr
                  key={lineNum}
                  onMouseEnter={() => setHoveredLine(lineNum)}
                  onMouseLeave={() => setHoveredLine(null)}
                  style={{
                    background: isHovered
                      ? 'rgba(255,255,255,0.04)'
                      : 'transparent',
                    transition: 'background 0.1s',
                  }}
                >
                  {/* Line number gutter */}
                  <td
                    style={{
                      textAlign: 'right',
                      paddingRight: 12,
                      paddingLeft: 8,
                      userSelect: 'none',
                      color: isHovered ? 'var(--text-secondary)' : 'var(--text-muted)',
                      fontSize: 10,
                      borderRight: '1px solid var(--border-color)',
                      verticalAlign: 'top',
                      paddingTop: 1,
                      paddingBottom: 1,
                      transition: 'color 0.1s',
                      whiteSpace: 'nowrap',
                    }}
                    aria-hidden="true"
                  >
                    {lineNum}
                  </td>

                  {/* Code line */}
                  <td
                    style={{
                      paddingLeft: 14,
                      paddingRight: 16,
                      paddingTop: 1,
                      paddingBottom: 1,
                      whiteSpace: 'pre',
                      color: 'var(--code-text, #e2e8f0)',
                    }}
                  >
                    {renderTokens(tokens)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PseudoCodeViewer;
