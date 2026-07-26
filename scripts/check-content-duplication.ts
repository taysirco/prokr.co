#!/usr/bin/env npx tsx
/**
 * Near-duplicate detector for neighbourhood override pages.
 *
 * WHY
 * ───
 * Neighbourhood pages only earn their existence if each one says something the
 * others don't. A page that is another page with the place name swapped is a
 * doorway page — it dilutes the site instead of adding to it, and at 150+ pages
 * you cannot eyeball that by hand.
 *
 * This compares the human-readable prose of every neighbourhood page against
 * every other one (Jaccard similarity over word 4-grams, place names stripped so
 * "نقل عفش شمال جدة" and "نقل عفش شمال الرياض" don't look different just because
 * the city differs) and reports the most similar pairs.
 *
 * Usage:  npx tsx scripts/check-content-duplication.ts [--threshold 0.35] [--top 25]
 * Exit:   1 if any pair is at or above the FAIL threshold, else 0.
 */

import * as fs from 'fs';
import * as path from 'path';

const PAGES_DIR = path.resolve(__dirname, '../src/lib/overrides/pages');
const argThreshold = process.argv.indexOf('--threshold');
const argTop = process.argv.indexOf('--top');
/** Pairs at or above this are treated as duplicates and fail the run. */
const FAIL_AT = argThreshold > -1 ? Number(process.argv[argThreshold + 1]) : 0.35;
const TOP = argTop > -1 ? Number(process.argv[argTop + 1]) : 25;
const N = 4; // n-gram size

interface Page { key: string; file: string; service: string; text: string; grams: Set<string> }

// ── collect ──────────────────────────────────────────────────────────────
const pages: Page[] = [];
for (const city of fs.readdirSync(PAGES_DIR)) {
    const cityDir = path.join(PAGES_DIR, city);
    if (!fs.statSync(cityDir).isDirectory()) continue;
    for (const sub of fs.readdirSync(cityDir)) {
        const subDir = path.join(cityDir, sub);
        if (!fs.statSync(subDir).isDirectory()) continue;
        for (const f of fs.readdirSync(subDir)) {
            if (!f.endsWith('.ts') || f === 'index.ts') continue;
            const file = path.join(subDir, f);
            const raw = fs.readFileSync(file, 'utf-8');

            // Prose only: the Arabic string literals. Skip the comment header,
            // import lines and slug/identifier noise.
            const body = raw
                .replace(/^[\s\S]*?export const override/, '')
                .replace(/\/\/[^\n]*/g, '');
            const arabic = (body.match(/'[^']*[؀-ۿ][^']*'/g) || [])
                .map(s => s.slice(1, -1))
                .join(' ');

            const normalised = arabic
                // strip place names so geography alone never counts as "different"
                .replace(/\b(شمال|جنوب|شرق|غرب|وسط)\b/g, ' ')
                .replace(/[ـً-ٟ]/g, '')       // tatweel + diacritics
                .replace(/[^؀-ۿ\s]/g, ' ')          // digits, latin, punctuation
                .replace(/\s+/g, ' ')
                .trim();

            const words = normalised.split(' ').filter(w => w.length > 1);
            const grams = new Set<string>();
            for (let i = 0; i + N <= words.length; i++) grams.add(words.slice(i, i + N).join(' '));

            pages.push({
                key: `${city}/${sub}::${f.replace(/\.ts$/, '')}`,
                file: path.relative(process.cwd(), file),
                service: f.replace(/\.ts$/, ''),
                text: normalised,
                grams,
            });
        }
    }
}

if (pages.length < 2) {
    console.log('Not enough neighbourhood pages to compare.');
    process.exit(0);
}

// ── compare ──────────────────────────────────────────────────────────────
function jaccard(a: Set<string>, b: Set<string>): number {
    if (!a.size || !b.size) return 0;
    let inter = 0;
    const [small, large] = a.size < b.size ? [a, b] : [b, a];
    for (const g of small) if (large.has(g)) inter++;
    return inter / (a.size + b.size - inter);
}

const pairs: { a: Page; b: Page; score: number }[] = [];
for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
        const score = jaccard(pages[i].grams, pages[j].grams);
        if (score > 0.12) pairs.push({ a: pages[i], b: pages[j], score });
    }
}
pairs.sort((x, y) => y.score - x.score);

// ── report ───────────────────────────────────────────────────────────────
console.log(`\n\x1b[1mContent duplication check\x1b[0m — ${pages.length} neighbourhood pages, ${(pages.length * (pages.length - 1)) / 2} pairs compared`);
console.log(`  n-gram size ${N}, fail threshold ${FAIL_AT}\n`);

const failing = pairs.filter(p => p.score >= FAIL_AT);
const shown = pairs.slice(0, TOP);

if (!shown.length) {
    console.log('  \x1b[32m✓\x1b[0m no pair exceeded 0.12 similarity — pages are well differentiated\n');
} else {
    console.log('  most similar pairs:');
    for (const p of shown) {
        const flag = p.score >= FAIL_AT ? '\x1b[31mDUPLICATE\x1b[0m' : p.score >= FAIL_AT * 0.75 ? '\x1b[33mclose   \x1b[0m' : '\x1b[2mok      \x1b[0m';
        const same = p.a.service === p.b.service ? ' (same service)' : '';
        console.log(`   ${flag} ${p.score.toFixed(3)}  ${p.a.key}  ↔  ${p.b.key}${same}`);
    }
    console.log();
}

// Thin pages are their own problem — a page too short to say anything specific.
const thin = pages.filter(p => p.text.split(' ').length < 320);
if (thin.length) {
    console.log(`  \x1b[33m!\x1b[0m ${thin.length} page(s) look thin (<320 Arabic words of prose):`);
    thin.slice(0, 15).forEach(p => console.log(`      ${p.key} — ${p.text.split(' ').length} words`));
    if (thin.length > 15) console.log(`      … and ${thin.length - 15} more`);
    console.log();
}

if (failing.length) {
    console.log(`  \x1b[31m✗ ${failing.length} pair(s) at or above ${FAIL_AT} — rewrite the weaker page of each pair.\x1b[0m\n`);
    process.exit(1);
}
console.log(`  \x1b[32m✓ no pair reached the ${FAIL_AT} duplicate threshold.\x1b[0m\n`);
