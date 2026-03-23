'use client';

/**
 * BlogContent — renders blog section content with proper formatting.
 * Handles: markdown tables, bullet/numbered lists, paragraphs, bold text,
 * emoji callouts, and nested formatting.
 */

interface BlogContentProps {
    content: string;
}

/** Detect if a line is a table-separator row like |---|---|---| */
function isTableSeparator(line: string): boolean {
    return /^\|[\s\-:|]+\|$/.test(line.trim());
}

/** Parse a table row into cells */
function parseTableRow(line: string): string[] {
    return line
        .trim()
        .replace(/^\|/, '')
        .replace(/\|$/, '')
        .split('|')
        .map(cell => cell.trim());
}

/** Render inline formatting: bold **text**, links, etc. */
function renderInlineText(text: string): React.ReactNode {
    // Handle **bold** patterns
    const parts: React.ReactNode[] = [];
    const boldRegex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        parts.push(<strong key={match.index}>{match[1]}</strong>);
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
}

export default function BlogContent({ content }: BlogContentProps) {
    // Normalize escaped newlines: \\n → actual newline
    const normalized = content
        .replace(/\\\\n/g, '\n')  // \\\\n from double-escaped TS strings
        .replace(/\\n/g, '\n');    // \\n from single-escaped

    const lines = normalized.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i].trim();

        // Skip empty lines
        if (!line) {
            i++;
            continue;
        }

        // --- Table detection ---
        if (line.startsWith('|') && line.endsWith('|')) {
            const tableRows: string[][] = [];
            let hasHeader = false;
            const headerRow = parseTableRow(line);
            const tableStart = i;

            // Check if next line is a separator
            if (i + 1 < lines.length && isTableSeparator(lines[i + 1].trim())) {
                hasHeader = true;
                tableRows.push(headerRow);
                i += 2; // skip header + separator
            } else {
                tableRows.push(headerRow);
                i++;
            }

            // Collect remaining rows
            while (i < lines.length) {
                const rowLine = lines[i].trim();
                if (!rowLine.startsWith('|') || !rowLine.endsWith('|')) break;
                if (isTableSeparator(rowLine)) { i++; continue; }
                tableRows.push(parseTableRow(rowLine));
                i++;
            }

            elements.push(
                <div key={`table-${tableStart}`} className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
                        {hasHeader && tableRows.length > 0 && (
                            <thead>
                                <tr className="bg-gray-50">
                                    {tableRows[0].map((cell, ci) => (
                                        <th key={ci} className="border border-gray-200 px-3 py-2 text-right font-bold text-gray-800">
                                            {renderInlineText(cell)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                        )}
                        <tbody>
                            {tableRows.slice(hasHeader ? 1 : 0).map((row, ri) => (
                                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                    {row.map((cell, ci) => (
                                        <td key={ci} className="border border-gray-200 px-3 py-2 text-right text-gray-700">
                                            {renderInlineText(cell)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            continue;
        }

        // --- Numbered list item: 1. ... or 1) ... ---
        if (/^\d+[\.\)]\s/.test(line)) {
            const listItems: { num: string; text: string }[] = [];
            while (i < lines.length) {
                const li = lines[i].trim();
                const m = li.match(/^(\d+)[\.\)]\s+(.*)/);
                if (!m) break;
                listItems.push({ num: m[1], text: m[2] });
                i++;
            }

            elements.push(
                <ol key={`ol-${i}`} className="my-3 space-y-2 list-none pr-0">
                    {listItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 leading-relaxed">
                            <span className="flex-shrink-0 w-6 h-6 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                {item.num}
                            </span>
                            <span>{renderInlineText(item.text)}</span>
                        </li>
                    ))}
                </ol>
            );
            continue;
        }

        // --- Bullet list: • or - (at start of line) ---
        if (/^[•\-\*]\s/.test(line)) {
            const listItems: string[] = [];
            while (i < lines.length) {
                const li = lines[i].trim();
                const m = li.match(/^[•\-\*]\s+(.*)/);
                if (!m) break;
                listItems.push(m[1]);
                i++;
            }

            elements.push(
                <ul key={`ul-${i}`} className="my-3 space-y-1.5 list-none pr-0">
                    {listItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 leading-relaxed">
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-sky-500 rounded-full mt-2.5"></span>
                            <span>{renderInlineText(item)}</span>
                        </li>
                    ))}
                </ul>
            );
            continue;
        }

        // --- Callout blocks: ⚠️, 💡, 📝, ✅, ❌, 🔴, 🚨 ---
        if (/^[⚠️💡📝✅❌🔴🚨]/.test(line)) {
            let bgColor = 'bg-blue-50';
            let borderColor = 'border-blue-300';
            let textColor = 'text-blue-900';

            if (line.startsWith('⚠️')) {
                bgColor = 'bg-amber-50'; borderColor = 'border-amber-300'; textColor = 'text-amber-900';
            } else if (line.startsWith('💡')) {
                bgColor = 'bg-emerald-50'; borderColor = 'border-emerald-300'; textColor = 'text-emerald-900';
            } else if (line.startsWith('📝')) {
                bgColor = 'bg-sky-50'; borderColor = 'border-sky-300'; textColor = 'text-sky-900';
            } else if (line.startsWith('❌') || line.startsWith('🔴') || line.startsWith('🚨')) {
                bgColor = 'bg-red-50'; borderColor = 'border-red-300'; textColor = 'text-red-900';
            } else if (line.startsWith('✅')) {
                bgColor = 'bg-green-50'; borderColor = 'border-green-300'; textColor = 'text-green-900';
            }

            elements.push(
                <div key={`callout-${i}`} className={`${bgColor} border-r-4 ${borderColor} rounded-lg p-4 my-4 ${textColor}`}>
                    <p className="leading-relaxed text-sm">{renderInlineText(line)}</p>
                </div>
            );
            i++;
            continue;
        }

        // --- Regular paragraph (including parenthetical asides) ---
        const isAside = line.startsWith('(') && line.endsWith(')');
        if (isAside) {
            elements.push(
                <p key={`aside-${i}`} className="text-gray-500 text-sm italic leading-relaxed my-3 border-r-2 border-gray-200 pr-3">
                    {renderInlineText(line)}
                </p>
            );
        } else {
            elements.push(
                <p key={`p-${i}`} className="text-gray-700 leading-relaxed my-3">
                    {renderInlineText(line)}
                </p>
            );
        }
        i++;
    }

    return <div className="blog-content">{elements}</div>;
}
