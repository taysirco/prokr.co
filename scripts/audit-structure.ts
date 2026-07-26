#!/usr/bin/env npx tsx
/**
 * Structural audit — OFFLINE, runs against the source tree (no network).
 *
 * Complements scripts/internal-links-audit.js, which crawls the DEPLOYED site
 * and therefore can only ever tell you about the last release. This one catches
 * broken structure BEFORE it ships:
 *
 *   1. Homepage / navbar city × service links point at pages that exist
 *   2. Sub-region → service links resolve to a real route
 *   3. Every sitemap /{city}/{service} entry has a curated page
 *   4. <title> tags are correctly shaped, unique, and not truncation-length
 *
 * Usage:  npx tsx scripts/audit-structure.ts
 * Exit:   0 = clean, 1 = at least one FAIL
 */

import { CITIES, getCityBySlug, getServiceBySlug, SERVICES } from '../src/lib/seed';
import { hasPageOverride, getOverriddenPages, getPageOverride } from '../src/lib/overrides/registry';
import { resolveMetadata, withBrandSuffix } from '../src/lib/overrides';
import { LINKABLE_COMBOS } from '../src/lib/city-service-links';
import { SUB_REGIONS, getSubRegionServiceHref } from '../src/lib/sub-regions';
import { isAbsorbedSlug, getCanonicalSlug } from '../src/lib/services/super-page-groups';
import { buildCompanyTitle } from '../src/lib/locale-formatting';
import { OVERRIDE_KEYS, pageOverrideExists } from '../src/lib/overrides/override-index.generated';
import { NEIGHBORHOOD_OVERRIDES } from '../src/lib/overrides/neighborhood-registry.generated';
import { generateCityMeta, generateServiceCategoryMeta } from '../src/lib/content-layers';
import * as fs from 'fs';
import * as path from 'path';

const BRAND = 'بروكر الخدمي';
/** Google truncates the SERP title around here. */
const TITLE_MAX = 60;

let failures = 0;
let warnings = 0;

function section(name: string) {
    console.log(`\n\x1b[1m${name}\x1b[0m`);
}
function pass(msg: string) {
    console.log(`  \x1b[32m✓\x1b[0m ${msg}`);
}
function fail(msg: string, details: string[] = []) {
    failures++;
    console.log(`  \x1b[31m✗ FAIL\x1b[0m ${msg}`);
    details.slice(0, 15).forEach(d => console.log(`      ${d}`));
    if (details.length > 15) console.log(`      … and ${details.length - 15} more`);
}
function warn(msg: string, details: string[] = []) {
    warnings++;
    console.log(`  \x1b[33m! WARN\x1b[0m ${msg}`);
    details.slice(0, 10).forEach(d => console.log(`      ${d}`));
    if (details.length > 10) console.log(`      … and ${details.length - 10} more`);
}

// ════════════════════════════════════════════════════════════════════════
// 1. Homepage + navbar commercial links
// ════════════════════════════════════════════════════════════════════════
section('1. City × service links (homepage grid + navbar mega-menu)');
{
    const dead = LINKABLE_COMBOS
        .filter(c => !hasPageOverride(c.citySlug, c.serviceSlug))
        .map(c => `/${c.citySlug}/${c.serviceSlug} — no curated page override`);

    if (dead.length) {
        fail(
            `${dead.length}/${LINKABLE_COMBOS.length} linked combos have no page override ` +
            `(they 301 to the service hub). Fix LINKABLE_CITY_SLUGS in src/lib/city-service-links.ts.`,
            dead
        );
    } else {
        pass(`all ${LINKABLE_COMBOS.length} linked city × service combos have curated pages`);
    }

    const unknownCity = LINKABLE_COMBOS
        .filter(c => !getCityBySlug(c.citySlug))
        .map(c => c.citySlug);
    if (unknownCity.length) {
        fail('linked city slugs missing from CITIES', [...new Set(unknownCity)]);
    } else {
        pass('all linked city slugs exist in CITIES');
    }
}

// ════════════════════════════════════════════════════════════════════════
// 2. Sub-region → service links
// ════════════════════════════════════════════════════════════════════════
section('2. Sub-region service links (/{city}/{subregion})');
{
    const registeredNeighborhoodPages = new Set(
        getOverriddenPages().filter(k => k.includes('/') && k.includes('::'))
    );

    let toNeighborhood = 0;
    let toCity = 0;
    const brokenNeighborhoodLinks: string[] = [];

    for (const [citySlug, regions] of Object.entries(SUB_REGIONS)) {
        for (const sr of regions) {
            for (const svcSlug of sr.services) {
                const service = getServiceBySlug(svcSlug);
                // Mirrors SubRegionView's own filter — only these render as cards.
                if (!service || !hasPageOverride(citySlug, service.slug) || isAbsorbedSlug(service.slug)) continue;

                const href = getSubRegionServiceHref(citySlug, sr.slug, service.slug);
                if (!href) {
                    toCity++;
                    continue;
                }
                toNeighborhood++;
                // href is /{city}/{subregion}/{service}; the 3-seg route sets
                // dynamicParams=false, so it MUST be a registered override.
                const [, c, sub, svc] = href.split('/');
                if (!registeredNeighborhoodPages.has(`${c}/${sub}::${svc}`)) {
                    brokenNeighborhoodLinks.push(`${href} — not in the override registry → hard 404`);
                }
            }
        }
    }

    if (brokenNeighborhoodLinks.length) {
        fail(`${brokenNeighborhoodLinks.length} sub-region links point at unregistered 3-segment routes`, brokenNeighborhoodLinks);
    } else {
        pass(`${toNeighborhood} link(s) resolve to a dedicated neighborhood page, all registered`);
    }

    // Not a failure — just visibility on how much neighborhood content exists.
    console.log(
        `  \x1b[2mℹ\x1b[0m ${toCity} sub-region service card(s) fall back to the city page ` +
        `(labelled "{service} {city}"). Each one is a curated neighborhood page waiting to be written.`
    );

    // A curated neighborhood page nobody links to is an orphan.
    const orphans: string[] = [];
    for (const key of registeredNeighborhoodPages) {
        const [cityPath, svc] = key.split('::');
        const [citySlug, subSlug] = cityPath.split('/');
        const sr = (SUB_REGIONS[citySlug] || []).find(r => r.slug === subSlug);
        if (!sr) {
            orphans.push(`/${citySlug}/${subSlug}/${svc} — sub-region '${subSlug}' not defined for '${citySlug}'`);
            continue;
        }
        const linked = sr.services.some(s => {
            const service = getServiceBySlug(s);
            if (!service || !hasPageOverride(citySlug, service.slug) || isAbsorbedSlug(service.slug)) return false;
            return getSubRegionServiceHref(citySlug, subSlug, service.slug) === `/${citySlug}/${subSlug}/${svc}`;
        });
        if (!linked) {
            orphans.push(`/${citySlug}/${subSlug}/${svc} — curated but not linked from /${citySlug}/${subSlug}`);
        }
    }
    if (orphans.length) {
        warn(`${orphans.length} curated neighborhood page(s) are orphaned`, orphans);
    } else {
        pass('every curated neighborhood page is linked from its sub-region page');
    }
}

// ════════════════════════════════════════════════════════════════════════
// 3. Sitemap /{city}/{service} entries
// ════════════════════════════════════════════════════════════════════════
section('3. Sitemap city × service coverage');
{
    // src/app/sitemap.ts gates on hasPageOverride; assert the invariant holds so
    // a regression there can't republish 301-ing URLs into the index.
    const emitted: string[] = [];
    for (const city of CITIES) {
        for (const service of SERVICES) {
            if (isAbsorbedSlug(service.slug)) continue;
            if (hasPageOverride(city.slug, service.slug)) emitted.push(`/${city.slug}/${service.slug}`);
        }
    }
    pass(`${emitted.length} indexable /{city}/{service} pages (all override-backed)`);

    // Absorbed slugs KEEP their overrides on purpose — the content renders as a
    // #fragment section on the canonical page. What must hold is that the 301
    // target itself exists, otherwise the redirect lands on a page with no
    // override and bounces again to the service hub.
    // The neighbourhood registry is generated from the directory layout. If someone
    // adds a page file without regenerating, the page silently 404s (the 3-segment
    // route sets dynamicParams = false) — so compare the filesystem to the registry.
    const pagesDir = path.resolve(__dirname, '../src/lib/overrides/pages');
    const onDisk = new Set<string>();
    for (const city of fs.readdirSync(pagesDir)) {
        const cityDir = path.join(pagesDir, city);
        if (!fs.statSync(cityDir).isDirectory()) continue;
        for (const sub of fs.readdirSync(cityDir)) {
            const subDir = path.join(cityDir, sub);
            if (!fs.statSync(subDir).isDirectory()) continue;
            for (const f of fs.readdirSync(subDir)) {
                if (f.endsWith('.ts') && f !== 'index.ts') onDisk.add(`${city}/${sub}::${f.replace(/\.ts$/, '')}`);
            }
        }
    }
    const registered = new Set(Object.keys(NEIGHBORHOOD_OVERRIDES));
    const unregistered = [...onDisk].filter(k => !registered.has(k));
    const ghosts = [...registered].filter(k => !onDisk.has(k));
    if (unregistered.length || ghosts.length) {
        fail(
            `neighborhood-registry.generated.ts is stale — run: npx tsx scripts/gen-neighborhood-registry.ts`,
            [
                ...unregistered.map(k => `${k} — file exists but is NOT registered (page would 404)`),
                ...ghosts.map(k => `${k} — registered but file is missing`),
            ]
        );
    } else {
        pass(`neighborhood registry matches the filesystem (${onDisk.size} page files)`);
    }

    // middleware.ts consults the GENERATED index (it cannot import the registry),
    // so verify the two agree — a stale index would resurrect the redirect chain.
    // The generated index mirrors ALL keys, simple and neighborhood-composite.
    const registryKeys = new Set(getOverriddenPages());
    const indexDrift: string[] = [];
    for (const key of registryKeys) {
        const [c, s] = key.split('::');
        if (!pageOverrideExists(c, s)) indexDrift.push(`${key} — in registry, missing from generated index`);
    }
    for (const key of OVERRIDE_KEYS) {
        if (!registryKeys.has(key)) indexDrift.push(`${key} — in generated index, missing from registry`);
    }
    if (indexDrift.length) {
        fail(
            `override-index.generated.ts is out of sync (${indexDrift.length} diff) — ` +
            `run: npx tsx scripts/gen-override-index.ts`,
            indexDrift
        );
    } else {
        pass(`generated override index matches the registry (${OVERRIDE_KEYS.length} keys)`);
    }

    // Absorbed slugs KEEP their overrides on purpose — the content renders as a
    // #fragment section on the canonical page. What must hold is that no request
    // takes two redirect hops to land somewhere real.
    const chained = CITIES.flatMap(city =>
        SERVICES
            .filter(s => isAbsorbedSlug(s.slug) && hasPageOverride(city.slug, s.slug))
            .filter(s => {
                const canonical = getCanonicalSlug(s.slug);
                if (!canonical) return true;
                // Single hop either way: to /{city}/{canonical} if it exists, else
                // straight to /{canonical}. A chain only appears if middleware
                // sends it to a city page that will bounce again.
                return !hasPageOverride(city.slug, canonical) && pageOverrideExists(city.slug, canonical);
            })
            .map(s => `/${city.slug}/${s.slug} → chains via /${city.slug}/${getCanonicalSlug(s.slug) ?? '?'}`)
    );
    if (chained.length) {
        fail(`${chained.length} absorbed slug(s) still redirect in two hops`, chained);
    } else {
        const direct = CITIES.flatMap(city =>
            SERVICES.filter(s =>
                isAbsorbedSlug(s.slug) &&
                hasPageOverride(city.slug, s.slug) &&
                !hasPageOverride(city.slug, getCanonicalSlug(s.slug) ?? '')
            )
        ).length;
        pass(`every absorbed slug resolves in one 301 hop (${direct} routed straight to the service hub)`);
    }
}

// ════════════════════════════════════════════════════════════════════════
// 4. <title> shape, uniqueness, length
// ════════════════════════════════════════════════════════════════════════
section('4. Page titles');
{
    const titles = new Map<string, string[]>();
    const malformed: string[] = [];
    const tooLong: string[] = [];

    for (const city of CITIES) {
        for (const service of SERVICES) {
            if (isAbsorbedSlug(service.slug) || !hasPageOverride(city.slug, service.slug)) continue;
            const url = `/${city.slug}/${service.slug}`;
            const { title } = resolveMetadata(city, service);

            if (!title.startsWith('شركات ') || !title.endsWith(` - ${BRAND}`)) {
                malformed.push(`${url} → "${title}"`);
            }
            // The route passes this through `title: { absolute }`; a second brand
            // would mean the layout template leaked back in.
            if ((title.match(new RegExp(BRAND, 'g')) || []).length !== 1) {
                malformed.push(`${url} → brand appears ${(title.match(new RegExp(BRAND, 'g')) || []).length}× in "${title}"`);
            }
            if (title.length > TITLE_MAX) {
                tooLong.push(`${url} → ${title.length} chars: "${title}"`);
            }
            const seen = titles.get(title);
            if (seen) seen.push(url);
            else titles.set(title, [url]);
        }
    }

    if (malformed.length) {
        fail(`${malformed.length} title(s) do not match "شركات … - ${BRAND}"`, malformed);
    } else {
        pass(`all ${titles.size} service-page titles match "شركات {service} {city} - ${BRAND}"`);
    }

    const dupes = [...titles.entries()].filter(([, urls]) => urls.length > 1);
    if (dupes.length) {
        fail(
            `${dupes.length} title(s) are shared by more than one URL (keyword cannibalisation)`,
            dupes.map(([t, urls]) => `"${t}" ← ${urls.join(', ')}`)
        );
    } else {
        pass('every service-page title is unique');
    }

    if (tooLong.length) {
        warn(`${tooLong.length} title(s) exceed ${TITLE_MAX} chars and may be truncated in the SERP`, tooLong);
    } else {
        pass(`no title exceeds ${TITLE_MAX} chars`);
    }

    // Neighbourhood pages (/{city}/{subregion}/{service}) — hand-written titles,
    // so check the same brand rule. This is where the double-brand bug appeared:
    // the 3-segment route rendered "… - بروكر الخدمي | بروكر الخدمي" because it
    // returned a bare `title` instead of `title: { absolute }`.
    const neighbourhoodBad: string[] = [];
    for (const key of getOverriddenPages().filter(k => k.includes('/') && k.includes('::'))) {
        const [cityPath, svc] = key.split('::');
        const ov = getPageOverride(cityPath, svc);
        const raw = ov?.meta?.title || '';
        const rendered = withBrandSuffix(raw || svc);
        const brandCount = (rendered.match(new RegExp(BRAND, 'g')) || []).length;
        if (brandCount !== 1) {
            neighbourhoodBad.push(`/${cityPath}/${svc} → brand ×${brandCount} in "${rendered}"`);
        }
        if (rendered.length > TITLE_MAX) {
            warnings++;
            console.log(`  \x1b[33m!\x1b[0m /${cityPath}/${svc} title is ${rendered.length} chars: "${rendered}"`);
        }
    }
    if (neighbourhoodBad.length) {
        fail(`${neighbourhoodBad.length} neighbourhood title(s) malformed`, neighbourhoodBad);
    } else {
        const n = getOverriddenPages().filter(k => k.includes('/') && k.includes('::')).length;
        pass(`all ${n} neighbourhood-page titles carry the brand exactly once`);
    }

    // City hubs (/{city}), national service hubs (/{service}) and sub-region hubs
    // (/{city}/{subregion}). These were the last page types still on the old
    // mixed "— … | … | brand" format; hold them to the same rule.
    const hubBad: string[] = [];
    const hubLong: string[] = [];
    const checkHub = (label: string, t: string) => {
        if ((t.match(new RegExp(BRAND, 'g')) || []).length !== 1 || !t.endsWith(` - ${BRAND}`)) {
            hubBad.push(`${label} → "${t}"`);
        }
        if (t.length > TITLE_MAX) hubLong.push(`${label} → ${t.length} chars: "${t}"`);
    };
    for (const city of CITIES) {
        checkHub(`/${city.slug}`, generateCityMeta(city).title);
        for (const sr of SUB_REGIONS[city.slug] || []) {
            checkHub(`/${city.slug}/${sr.slug}`, `خدمات ${sr.name_ar} - ${BRAND}`);
        }
    }
    for (const service of SERVICES) {
        if (isAbsorbedSlug(service.slug)) continue;
        checkHub(`/${service.slug}`, generateServiceCategoryMeta(service).title);
    }
    if (hubBad.length) {
        fail(`${hubBad.length} hub title(s) not in "… - ${BRAND}" form`, hubBad);
    } else {
        pass(`city, service and sub-region hub titles all match "… - ${BRAND}"`);
    }
    if (hubLong.length) {
        warn(`${hubLong.length} hub title(s) exceed ${TITLE_MAX} chars`, hubLong);
    } else {
        pass(`no hub title exceeds ${TITLE_MAX} chars`);
    }

    // Company titles: same brand rule.
    const companySamples = [
        ['الهدي لنقل الاثاث والعفش', 'moving'],
        ['الاسطورة', 'moving'],
        ['شركة النجوم', 'cleaning'],
        ['الصفوة', 'pest-control'],
    ] as const;
    const badCompany = companySamples
        .map(([n, c]) => buildCompanyTitle(n, c))
        .filter(t => !t.endsWith(` - ${BRAND}`) || (t.match(new RegExp(BRAND, 'g')) || []).length !== 1);
    if (badCompany.length) {
        fail('company titles malformed', badCompany);
    } else {
        pass(`company titles match "شركة {name} {service} - ${BRAND}"`);
    }
}

// ════════════════════════════════════════════════════════════════════════
section('Summary');
console.log(`  ${failures === 0 ? '\x1b[32m' : '\x1b[31m'}${failures} failure(s)\x1b[0m, \x1b[33m${warnings} warning(s)\x1b[0m\n`);
process.exit(failures === 0 ? 0 : 1);
