export interface StudySection {
  title: string;
  id: string;
  content: string;
}

// Converts standard LaTeX macros and subscripts/superscripts to readable Unicode / HTML elements
export function formatMathToUnicode(math: string): string {
  // Normalize double backslashes in actual string value to single backslash
  let output = math.split('\\\\').join('\\');
  
  // Replace fractions: \frac{numerator}{denominator}
  while (output.includes('\\frac{')) {
    output = output.replace(/\\frac\{((?:[^{}]+|\{[^{}]*\})*)\}\{((?:[^{}]+|\{[^{}]*\})*)\}/g, (_: string, num: string, den: string): string => {
      return `<span class="inline-flex flex-col align-middle text-center mx-1 font-sans text-[10px] leading-none text-slate-200">
        <span class="block border-b border-slate-600 pb-0.5 px-0.5">${num}</span>
        <span class="block pt-0.5 px-0.5">${den}</span>
      </span>`;
    });
  }

  // Modulo operators
  output = output.replace(/\\bmod/g, ' mod ');
  output = output.replace(/\\pmod\{(.*?)\}/g, ' ($1)');

  // LaTeX symbol mapping (literal string matches)
  const symbolMap: Record<string, string> = {
    '\\dots': '…',
    '\\sum': '∑',
    '\\times': ' × ',
    '\\cdot': ' · ',
    '\\rightarrow': ' ➔ ',
    '\\to': ' ➔ ',
    '\\implies': ' ➔ ',
    '\\leftrightarrow': ' ↔ ',
    '\\sim': '~',
    '\\geq': '≥',
    '\\leq': '≤',
    '\\max': 'max',
    '\\min': 'min',
    '\\land': ' ∧ ',
    '\\lor': ' ∨ ',
    '\\oplus': ' ⊕ ',
    '\\neg': ' ¬ ',
    '\\neq': '≠',
    '\\approx': '≈',
    '\\equiv': '≡',
    '\\phi': 'φ',
    '\\mu': 'μ',
    '\\sigma': 'σ',
    '\\Delta': 'Δ',
    '\\Vert': '||',
    '\\mathbin{\\Vert}': '||',
    '\\mathbin{\\text{LEFT OUTER JOIN}}': ' LEFT OUTER JOIN ',
    '\\mathbin{\\text{RIGHT OUTER JOIN}}': ' RIGHT OUTER JOIN ',
    '\\bowtie': ' ⋈ ',
    '\\sigma^2': 'σ²',
    '\\pi': 'π'
  };

  Object.entries(symbolMap).forEach(([latex, unicode]) => {
    output = output.split(latex).join(unicode);
  });

  output = output.replace(/\\text\{(.*?)\}/g, '$1');
  output = output.replace(/\\overline\{(.*?)\}/g, '<span class="overline">$1</span>');
  
  // Subscripts: _{...} or _x
  output = output.replace(/_\{(.*?)\}/g, '<sub>$1</sub>');
  output = output.replace(/_([a-zA-Z0-9\-+])/g, '<sub>$1</sub>');
  
  // Superscripts: ^{...} or ^x
  output = output.replace(/\^\{(.*?)\}/g, '<sup>$1</sup>');
  output = output.replace(/\^([a-zA-Z0-9\-+])/g, '<sup>$1</sup>');
  
  return output;
}

// Parses line-level styling (bold, inline code, inline math, display math inside paragraphs)
export function parseLineDecorations(text: string): string {
  let output = text;

  // Radix base index shorthand (e.g. (101110)2 or (2E)16)
  output = output.replace(/\(([0-9a-fA-F.]+)\)([0-9]{1,2})/g, '($1)<sub>$2</sub>');

  // LaTeX shorthand symbols directly replaced in standard text to prevent raw code rendering
  const rawSymbolMap: Record<string, string> = {
    '\\leftrightarrow': ' ↔ ',
    '\\to': ' ➔ ',
    '\\rightarrow': ' ➔ ',
    '\\implies': ' ➔ ',
    '\\times': ' × ',
    '\\cdot': ' · ',
    '\\geq': '≥',
    '\\leq': '≤',
    '\\neq': '≠',
  };
  Object.entries(rawSymbolMap).forEach(([latex, unicode]) => {
    output = output.split(latex).join(unicode);
  });

  // Obsidian Comments: %% comment %%
  output = output.replace(/%%.*?%%/g, '');
  
  // Obsidian Image Embeds: ![[image.png]]
  output = output.replace(/!\[\[(.*?)\]\]/g, '<img src="/Files/$1" alt="$1" class="max-w-full h-auto rounded-lg shadow-sm border border-[var(--border-color)] my-4 mx-auto" onerror="this.style.display=\'none\'" />');

  // Standard Markdown Images: ![alt](url)
  output = output.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="/$2" alt="$1" class="max-w-full h-auto rounded-lg shadow-sm border border-[var(--border-color)] my-4 mx-auto" />');

  // Bold: **text**
  output = output.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[var(--text-primary)]">$1</strong>');
  // Inline code: `code`
  output = output.replace(/`(.*?)`/g, '<code class="bg-[var(--code-bg)] text-[var(--code-text)] px-1.5 py-0.5 rounded font-mono text-[11px] border border-[var(--border-color)]">$1</code>');
  // Display Math (if inline inside a paragraph): $$math$$
  output = output.replace(/\$\$(.*?)\$\$/g, (_, mathExpr) => {
    return `<span class="block font-mono text-center italic text-[var(--accent-cyan)] font-semibold my-2">${formatMathToUnicode(mathExpr)}</span>`;
  });
  // Inline Math: $math$
  output = output.replace(/\$([^$]+?)\$/g, (_, mathExpr) => {
    return `<span class="font-mono italic text-[var(--accent-cyan)] font-semibold mx-1">${formatMathToUnicode(mathExpr)}</span>`;
  });
  return output;
}

// Custom Markdown parser helper to return beautifully styled HTML structures (including LaTeX math blocks and code blocks)
export function parseMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';
  
  const lines = markdown.split('\n');
  let inList = false;
  let inOrderedList = false;
  let inDeepDive = false;
  let inCodeBlock = false;
  let inMathBlock = false;
  let mathBlockContent = '';
  
  const processedLines = lines.map((line) => {
    const cleanLine = line.trim();

    // Handle multiline math blocks ($$...$$)
    if (inMathBlock) {
      if (cleanLine.endsWith('$$')) {
        inMathBlock = false;
        mathBlockContent += '\n' + line;
        // Remove leading $$ and trailing $$ from the full block
        const mathContent = mathBlockContent
          .replace(/^\$\$/, '')
          .replace(/\$\$$/, '')
          .trim();
        return `<div class="font-mono text-sm text-left text-[var(--accent-cyan)] my-4 bg-[var(--bg-sidebar)] p-4 border border-[var(--border-color)] rounded-lg overflow-x-auto whitespace-pre-wrap">${formatMathToUnicode(mathContent)}</div>`;
      } else {
        mathBlockContent += '\n' + line;
        return '';
      }
    }

    // Start of multiline math block
    if (cleanLine.startsWith('$$') && !cleanLine.endsWith('$$')) {
      inMathBlock = true;
      mathBlockContent = line;
      return '';
    }

    // Handle code blocks (```text or ```)
    if (cleanLine.startsWith('```')) {
      if (inCodeBlock) {
        inCodeBlock = false;
        return '</code></pre>';
      } else {
        let prefix = '';
        if (inList) { inList = false; prefix += '</ul>'; }
        if (inOrderedList) { inOrderedList = false; prefix += '</ol>'; }
        inCodeBlock = true;
        return `${prefix}<pre class="pseudocode-container my-3"><code class="font-mono text-[11px] sm:text-xs text-[var(--code-text)]">`;
      }
    }

    if (inCodeBlock) {
      // Escape HTML entities to prevent rendering issues in raw code blocks
      const escapedLine = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return escapedLine;
    }

    // Close collapsible deep dive
    if (cleanLine === ':::' && inDeepDive) {
      inDeepDive = false;
      return '</div></details>';
    }

    // Open collapsible deep dive
    if (cleanLine.startsWith(':::deep-dive ')) {
      let prefix = '';
      if (inList) { inList = false; prefix += '</ul>'; }
      if (inOrderedList) { inOrderedList = false; prefix += '</ol>'; }
      inDeepDive = true;
      const title = cleanLine.substring(13).trim();
      return `${prefix}<details class="my-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-sidebar)] overflow-hidden transition-all duration-300">
        <summary class="flex items-center justify-between p-4 font-bold text-xs uppercase tracking-wider text-[var(--accent-cyan)] cursor-pointer hover:bg-[var(--bg-card-hover)] select-none">
          <span>📖 Deep Dive: ${title}</span>
          <span class="text-[10px] text-[var(--text-muted)] font-mono border border-[var(--border-color)] px-1.5 py-0.5 rounded">Click to expand</span>
        </summary>
        <div class="p-4 border-t border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-secondary)] space-y-3 bg-[var(--bg-card)]">`;
    }

    // Display Math Block ($$ ... $$)
    if (cleanLine.startsWith('$$') && cleanLine.endsWith('$$')) {
      let prefix = '';
      if (inList) { inList = false; prefix += '</ul>'; }
      if (inOrderedList) { inOrderedList = false; prefix += '</ol>'; }
      const math = cleanLine.substring(2, cleanLine.length - 2);
      return `${prefix}<div class="font-mono text-sm text-center text-[var(--accent-cyan)] my-4 bg-[var(--bg-sidebar)] p-3 border border-[var(--border-color)] rounded-lg">${formatMathToUnicode(math)}</div>`;
    }

    // Heading 1
    if (cleanLine.startsWith('# ')) {
      let prefix = '';
      if (inList) { inList = false; prefix += '</ul>'; }
      if (inOrderedList) { inOrderedList = false; prefix += '</ol>'; }
      const title = cleanLine.substring(2).trim();
      return `${prefix}<h1 class="text-lg font-extrabold text-[var(--accent-cyan)] mt-6 mb-4 border-b-2 border-[var(--border-color)] pb-2">${parseLineDecorations(title)}</h1>`;
    }

    // Heading 2
    if (cleanLine.startsWith('## ')) {
      let prefix = '';
      if (inList) { inList = false; prefix += '</ul>'; }
      if (inOrderedList) { inOrderedList = false; prefix += '</ol>'; }
      const title = cleanLine.substring(3).trim();
      return `${prefix}<h2 class="text-base font-bold text-[var(--text-primary)] mt-5 mb-3 border-b border-[var(--border-color)] pb-1">${parseLineDecorations(title)}</h2>`;
    }

    // Heading 3
    if (cleanLine.startsWith('### ')) {
      let prefix = '';
      if (inList) { inList = false; prefix += '</ul>'; }
      if (inOrderedList) { inOrderedList = false; prefix += '</ol>'; }
      const title = cleanLine.substring(4).trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return `${prefix}<h3 id="${id}" class="text-sm font-bold text-[var(--text-primary)] mt-6 mb-3 border-b border-[var(--border-color)] pb-2 uppercase tracking-wider scroll-mt-6">${parseLineDecorations(title)}</h3>`;
    }
    
    // Heading 4
    if (cleanLine.startsWith('#### ')) {
      let prefix = '';
      if (inList) { inList = false; prefix += '</ul>'; }
      if (inOrderedList) { inOrderedList = false; prefix += '</ol>'; }
      const title = cleanLine.substring(5).trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return `${prefix}<h4 id="${id}" class="text-xs font-semibold text-[var(--accent-cyan)] mt-5 mb-2 font-mono tracking-wide scroll-mt-6">${parseLineDecorations(title)}</h4>`;
    }

    // Unordered list item
    if (cleanLine.startsWith('- ') || cleanLine.startsWith('* ')) {
      let output = '';
      if (inOrderedList) {
        inOrderedList = false;
        output += '</ol>';
      }
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
      if (inList) {
        inList = false;
        output += '</ul>';
      }
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

    // Standard paragraph - closes any active list
    let prefix = '';
    if (inList) {
      inList = false;
      prefix = '</ul>';
    }
    if (inOrderedList) {
      inOrderedList = false;
      prefix = '</ol>';
    }
    return `${prefix}<p class="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed my-3 font-sans">${parseLineDecorations(cleanLine)}</p>`;
  });

  let result = processedLines.filter(line => line !== '').join('\n');
  if (inList) result += '</ul>';
  if (inOrderedList) result += '</ol>';
  if (inDeepDive) result += '</div></details>';
  if (inCodeBlock) result += '</code></pre>';
  if (inMathBlock) result += '</div>';  // Close unclosed math block
  
  return result;
}

// Parses markdown content into distinct selectable sections based on ### headers
export function parseTopicSections(markdown: string): StudySection[] {
  if (!markdown) return [];
  const lines = markdown.split('\n');
  const sections: StudySection[] = [];
  let currentSection: StudySection | null = null;
  let currentContent: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('### ')) {
      // Save previous section if exists
      if (currentSection) {
        currentSection.content = currentContent.join('\n');
        sections.push(currentSection);
      }
      
      // Start new section
      const title = trimmed.substring(4).trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      currentSection = { title, id, content: '' };
      currentContent = [];
    } else {
      if (currentSection) {
        currentContent.push(line);
      }
    }
  }

  if (currentSection) {
    currentSection.content = currentContent.join('\n');
    sections.push(currentSection);
  }

  return sections;
}
