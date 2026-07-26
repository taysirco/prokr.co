#!/usr/bin/env npx tsx
/**
 * Generates src/lib/overrides/neighborhood-registry.generated.ts by scanning the
 * filesystem for neighbourhood override files.
 *
 * WHY
 * ───
 * City overrides live at   pages/{city}/{service}.ts          (depth 2)
 * Neighbourhood ones at    pages/{city}/{subregion}/{service}.ts  (depth 3)
 *
 * The depth-3 set is now large (100+) and grows in bulk, so wiring each one into
 * registry.ts by hand is pure transcription — and a single typo there silently
 * 404s a page (the 3-segment route sets dynamicParams=false). This script derives
 * the whole map from the directory layout instead: drop a file in the right place
 * and it is registered.
 *
 * Regenerate after adding/removing any neighbourhood page:
 *   npx tsx scripts/gen-neighborhood-registry.ts
 *
 * Then regenerate the flat key index too (it reads the registry):
 *   npx tsx scripts/gen-override-index.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const PAGES_DIR = path.resolve(__dirname, '../src/lib/overrides/pages');
const OUT = path.resolve(__dirname, '../src/lib/overrides/neighborhood-registry.generated.ts');

interface Entry {
    city: string;
    subRegion: string;
    service: string;
    /** unique JS identifier for the import */
    ident: string;
    /** import path relative to the generated file */
    importPath: string;
}

const toIdent = (s: string) => s.replace(/[^a-zA-Z0-9]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

const entries: Entry[] = [];

for (const city of fs.readdirSync(PAGES_DIR)) {
    const cityDir = path.join(PAGES_DIR, city);
    if (!fs.statSync(cityDir).isDirectory()) continue;

    for (const sub of fs.readdirSync(cityDir)) {
        const subDir = path.join(cityDir, sub);
        // Only directories are sub-regions; *.ts at this level are city overrides.
        if (!fs.existsSync(subDir) || !fs.statSync(subDir).isDirectory()) continue;

        for (const file of fs.readdirSync(subDir)) {
            if (!file.endsWith('.ts') || file === 'index.ts') continue;
            const service = file.replace(/\.ts$/, '');
            entries.push({
                city,
                subRegion: sub,
                service,
                ident: `ov${toIdent(city)}_${toIdent(sub)}_${toIdent(service)}`,
                importPath: `./pages/${city}/${sub}/${service}`,
            });
        }
    }
}

entries.sort((a, b) =>
    a.city.localeCompare(b.city) || a.subRegion.localeCompare(b.subRegion) || a.service.localeCompare(b.service)
);

const imports = entries.map(e => `import { override as ${e.ident} } from '${e.importPath}';`).join('\n');
const map = entries
    .map(e => `    '${e.city}/${e.subRegion}::${e.service}': ${e.ident},`)
    .join('\n');

const cities = [...new Set(entries.map(e => e.city))];

const body = `// ⚠️ GENERATED FILE — DO NOT EDIT BY HAND.
// Regenerate with: npx tsx scripts/gen-neighborhood-registry.ts
//
// Every neighbourhood page override, keyed '{city}/{subregion}::{service}' —
// the composite key shape the 3-segment route /{city}/{subregion}/{service}
// looks up. Derived from the directory layout under pages/{city}/{subregion}/,
// so adding a file in the right place is all that is needed to register it.
//
// ${entries.length} page(s) across ${cities.length} cities.

import type { PageOverride } from './types';

${imports}

export const NEIGHBORHOOD_OVERRIDES: Record<string, PageOverride> = {
${map}
};
`;

fs.writeFileSync(OUT, body, 'utf-8');
console.log(`✅ wrote ${path.relative(process.cwd(), OUT)} — ${entries.length} pages across ${cities.length} cities`);
for (const c of cities) {
    console.log(`   ${c.padEnd(18)} ${entries.filter(e => e.city === c).length}`);
}
