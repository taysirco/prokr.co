#!/usr/bin/env npx tsx
/**
 * Generates src/lib/overrides/override-index.generated.ts — a flat list of the
 * "{city}::{service}" keys that have a curated page override.
 *
 * WHY THIS EXISTS
 * ───────────────
 * middleware.ts needs to know whether /{city}/{service} is a real page, so it
 * can send /{city}/{absorbed-slug} straight to its final destination in ONE
 * hop instead of bouncing through a canonical page that doesn't exist:
 *
 *   before:  /al-kharj/oven-cleaning
 *              → 301 /al-kharj/kitchen-cleaning   (no override)
 *              → 301 /kitchen-cleaning
 *   after:   /al-kharj/oven-cleaning → 301 /kitchen-cleaning
 *
 * It cannot import the override registry to find this out: the registry
 * statically imports ~1,200 content modules, and middleware runs on every
 * request at the edge. A plain string array is a few KB and costs nothing.
 *
 * Regenerate after adding/removing any page override:
 *   npx tsx scripts/gen-override-index.ts
 *
 * scripts/audit-structure.ts fails if this file drifts out of sync.
 */

import * as fs from 'fs';
import * as path from 'path';
import { getOverriddenPages } from '../src/lib/overrides/registry';

const OUT = path.resolve(__dirname, '../src/lib/overrides/override-index.generated.ts');

// Every key, including composite neighborhood keys
// ("{city}/{subregion}::{service}") — sub-regions.ts needs those and is itself
// reachable from client-rendered pages via Footer.
const keys = getOverriddenPages().sort();

const body = `// ⚠️ GENERATED FILE — DO NOT EDIT BY HAND.
// Regenerate with: npx tsx scripts/gen-override-index.ts
// Verified in CI by: npx tsx scripts/audit-structure.ts
//
// Flat list of page-override keys, for consumers that must stay lightweight and
// therefore cannot import the full override registry:
//   • middleware.ts        — runs at the edge on every request
//   • search-engine.ts     — reached from SearchModal ('use client'), sitewide
//   • Footer.tsx           — renders inside 'use client' pages
//   • sub-regions.ts       — imported by Footer
//
// Importing the registry from any of those ships ~1,200 content modules
// (≈8.2 MB of JS) to the browser. Keys only — no content — so this stays ~30 KB
// and tree-shakes to a single Set.
//
// Simple keys are "{city}::{service}"; neighborhood keys are
// "{city}/{subregion}::{service}".

export const OVERRIDE_KEYS: readonly string[] = ${JSON.stringify(keys, null, 4)};

const OVERRIDE_KEY_SET = new Set(OVERRIDE_KEYS);

/**
 * Does a curated page exist for this combination?
 * Mirrors hasPageOverride() from the registry exactly — \`citySlug\` may be a
 * plain city ("jeddah") or a neighborhood path ("makkah/sharaia").
 */
export function pageOverrideExists(citySlug: string, serviceSlug: string): boolean {
    return OVERRIDE_KEY_SET.has(\`\${citySlug}::\${serviceSlug}\`);
}
`;

fs.writeFileSync(OUT, body, 'utf-8');
console.log(`✅ wrote ${path.relative(process.cwd(), OUT)} — ${keys.length} keys`);
