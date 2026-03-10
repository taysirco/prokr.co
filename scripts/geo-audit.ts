/**
 * UNIQUENESS AUDIT — Phantom Geo-Hijacking
 * Verifies:
 * 1. All 24 cities have dispatch zone data
 * 2. All 6 service categories produce unique content per city
 * 3. Zero duplicate narratives across all 144 (24×6) combos
 * 4. Zero duplicate Google Maps URLs
 * 5. Zone coordinates are real (within Saudi Arabia bounds)
 */
import { CITY_DISPATCH_ZONES, getDispatchZone, getGeoNarrative, SERVICE_ZONE_MAP } from '@/lib/geo-dispatch-data';
import { CITY_CONTEXT } from '@/lib/city-context';

const categories = ['cleaning', 'pest-control', 'leak-detection', 'moving', 'sewage', 'insulation'];
const citySlugs = Object.keys(CITY_CONTEXT);

let totalChecks = 0;
let passedChecks = 0;
let failedChecks: string[] = [];

function check(name: string, condition: boolean, detail?: string) {
    totalChecks++;
    if (condition) {
        passedChecks++;
    } else {
        failedChecks.push(`❌ ${name}${detail ? ': ' + detail : ''}`);
    }
}

console.log('══════════════════════════════════════════════════');
console.log('  UNIQUENESS AUDIT — Phantom Geo-Hijacking');
console.log('══════════════════════════════════════════════════\n');

// ============================================
// 1. Coverage: All 24 cities have dispatch zones
// ============================================
console.log('🗺️  SECTION 1: Dispatch Zone Coverage');
console.log('─'.repeat(50));

for (const slug of citySlugs) {
    const zones = CITY_DISPATCH_ZONES[slug];
    check(`${slug}/has-zones`, !!zones, 'No dispatch zone data found');

    if (zones) {
        for (const zoneType of ['residential', 'commercial', 'logistics', 'landmark'] as const) {
            const zone = zones[zoneType];
            check(`${slug}/${zoneType}/exists`, !!zone, `Missing ${zoneType} zone`);

            if (zone) {
                // Validate coords are within Saudi Arabia (lat: 16-33, lng: 34-56)
                check(
                    `${slug}/${zoneType}/lat-range`,
                    zone.lat >= 16 && zone.lat <= 33,
                    `Latitude ${zone.lat} outside Saudi Arabia bounds (16-33)`
                );
                check(
                    `${slug}/${zoneType}/lng-range`,
                    zone.lng >= 34 && zone.lng <= 56,
                    `Longitude ${zone.lng} outside Saudi Arabia bounds (34-56)`
                );
            }
        }
    }
}

const coveredCities = citySlugs.filter(s => CITY_DISPATCH_ZONES[s]);
console.log(`  Coverage: ${coveredCities.length}/${citySlugs.length} cities have dispatch zones`);

// ============================================
// 2. Uniqueness: Narratives
// ============================================
console.log('\n\n📝 SECTION 2: Narrative Uniqueness');
console.log('─'.repeat(50));

const allNarratives: Map<string, string> = new Map();
let dupeNarratives = 0;

for (const slug of citySlugs) {
    const context = CITY_CONTEXT[slug];
    if (!context) continue;

    for (const cat of categories) {
        const zone = getDispatchZone(slug, cat);
        if (!zone) continue;

        const narrative = getGeoNarrative(
            slug, cat, context.name_ar,
            context.responseTime, context.coverageRadius, zone.name_ar
        );

        const key = `${slug}/${cat}`;

        // Check for duplicates
        for (const [existingKey, existingNarrative] of allNarratives) {
            if (existingNarrative === narrative && existingKey !== key) {
                failedChecks.push(`❌ DUPLICATE narrative: ${key} === ${existingKey}`);
                dupeNarratives++;
                break;
            }
        }

        allNarratives.set(key, narrative);
    }
}

check('narratives/total', allNarratives.size > 0, 'No narratives generated');
check('narratives/no-duplicates', dupeNarratives === 0, `${dupeNarratives} duplicates found`);
console.log(`  Total narratives: ${allNarratives.size}`);
console.log(`  Duplicates: ${dupeNarratives}`);

// ============================================
// 3. Uniqueness: Dispatch Zones per City
// ============================================
console.log('\n\n🎯 SECTION 3: Zone Differentiation per City');
console.log('─'.repeat(50));

for (const slug of coveredCities) {
    const zones = CITY_DISPATCH_ZONES[slug];
    const coordSet = new Set<string>();

    for (const zoneType of ['residential', 'commercial', 'logistics', 'landmark'] as const) {
        const zone = zones[zoneType];
        if (!zone) continue;
        const coordKey = `${zone.lat.toFixed(4)},${zone.lng.toFixed(4)}`;

        // Allow landmark to share coords with another zone
        if (zoneType !== 'landmark') {
            if (coordSet.has(coordKey)) {
                failedChecks.push(`❌ ${slug}: ${zoneType} shares coords with another non-landmark zone: ${coordKey}`);
            }
            coordSet.add(coordKey);
        }
    }

    // Residential, commercial, logistics should have DIFFERENT names
    const names = ['residential', 'commercial', 'logistics'].map(
        t => zones[t as keyof typeof zones].name_ar
    );
    const uniqueNames = new Set(names);
    check(
        `${slug}/unique-zone-names`,
        uniqueNames.size === 3,
        `Only ${uniqueNames.size}/3 unique names: ${names.join(', ')}`
    );
}

// ============================================
// 4. Maps URL Uniqueness
// ============================================
console.log('\n\n🔗 SECTION 4: Google Maps URL Uniqueness');
console.log('─'.repeat(50));

const allUrls: Map<string, string> = new Map();
let dupeUrls = 0;

for (const slug of citySlugs) {
    const context = CITY_CONTEXT[slug];
    if (!context) continue;

    for (const cat of categories) {
        const zone = getDispatchZone(slug, cat);
        if (!zone) continue;

        // Simulate URL generation — per-category offset (not per-zone-type)
        const categoryOffset: Record<string, number> = {
            'cleaning': 0, 'pest-control': 1, 'insulation': 2,
            'leak-detection': 3, 'moving': 4, 'sewage': 5,
        };
        const offset = categoryOffset[cat] ?? 0;
        const destNeighborhood = context.neighborhoods[offset % context.neighborhoods.length];
        // Include category in destination to match component logic
        const mapsUrl = `origin=${zone.nameEn}&dest=${encodeURIComponent(cat + ' ' + destNeighborhood.name_ar + ' ' + context.name_ar)}`;

        const key = `${slug}/${cat}`;

        for (const [existingKey, existingUrl] of allUrls) {
            if (existingUrl === mapsUrl && existingKey !== key) {
                failedChecks.push(`❌ DUPLICATE URL: ${key} === ${existingKey}`);
                dupeUrls++;
                break;
            }
        }

        allUrls.set(key, mapsUrl);
    }
}

check('urls/no-duplicates', dupeUrls === 0, `${dupeUrls} duplicate URLs found`);
console.log(`  Total URLs: ${allUrls.size}`);
console.log(`  Duplicates: ${dupeUrls}`);

// ============================================
// 5. Sample Output — Show 3 combos per region
// ============================================
console.log('\n\n📋 SECTION 5: Sample Outputs');
console.log('─'.repeat(50));

const samples = [
    { slug: 'riyadh', cat: 'cleaning' },
    { slug: 'riyadh', cat: 'moving' },
    { slug: 'riyadh', cat: 'pest-control' },
    { slug: 'jeddah', cat: 'insulation' },
    { slug: 'jeddah', cat: 'sewage' },
    { slug: 'dammam', cat: 'leak-detection' },
];

for (const s of samples) {
    const context = CITY_CONTEXT[s.slug];
    const zone = getDispatchZone(s.slug, s.cat);
    if (!context || !zone) continue;

    const narrative = getGeoNarrative(
        s.slug, s.cat, context.name_ar,
        context.responseTime, context.coverageRadius, zone.name_ar
    );

    console.log(`\n  🏙️ ${context.name_ar} / ${s.cat}:`);
    console.log(`     📍 Zone: ${zone.name_ar} (${zone.lat}, ${zone.lng})`);
    console.log(`     📝 "${narrative.substring(0, 80)}..."`);
}

// ============================================
// FINAL REPORT
// ============================================
console.log('\n\n══════════════════════════════════════════════════');
console.log('  FINAL REPORT');
console.log('══════════════════════════════════════════════════');
console.log(`Total checks: ${totalChecks}`);
console.log(`Passed: ${passedChecks} ✅`);
console.log(`Failed: ${failedChecks.length} ❌`);
console.log(`Pass rate: ${Math.round((passedChecks / totalChecks) * 100)}%`);
console.log(`\nCombinations: ${allNarratives.size} (${coveredCities.length} cities × ${categories.length} categories)`);
console.log(`Unique narratives: ${allNarratives.size - dupeNarratives}`);
console.log(`Unique URLs: ${allUrls.size - dupeUrls}`);

if (failedChecks.length > 0) {
    console.log('\n🔴 FAILURES:');
    failedChecks.forEach(f => console.log(`  ${f}`));
}

if (failedChecks.length === 0) {
    console.log('\n🟢 ALL CHECKS PASS — Zero duplicates, full coverage');
}

process.exit(failedChecks.length > 0 ? 1 : 0);
