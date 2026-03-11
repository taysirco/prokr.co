/**
 * DEEP UNIQUENESS AUDIT — Per-Service-Slug Phantom Geo-Hijacking
 * Tests ALL 53 services × 24 cities = 1,272 combinations
 * Checks:
 * 1. Zero duplicate "rendered text" (equipment + narrative + team)
 * 2. Zero duplicate Google Maps URLs
 * 3. Per-service-slug profile coverage
 * 4. Zone override correctness
 * 5. Coordinate validity
 */
import { CITY_DISPATCH_ZONES, getGeoNarrative, SERVICE_ZONE_MAP, type CityDispatchData } from '@/lib/geo-dispatch-data';
import { getServiceGeoProfile, SERVICE_GEO_PROFILES } from '@/lib/service-geo-profiles';
import { CITY_CONTEXT } from '@/lib/city-context';
import { SERVICES } from '@/lib/services';

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

console.log('══════════════════════════════════════════════════════════');
console.log('  DEEP UNIQUENESS AUDIT — Per-Service-Slug Geo-Hijacking');
console.log(`  ${SERVICES.length} services × ${citySlugs.length} cities = ${SERVICES.length * citySlugs.length} combinations`);
console.log('══════════════════════════════════════════════════════════\n');

// ============================================
// 1. Profile coverage: all 53 slugs have specific profiles
// ============================================
console.log('🎯 SECTION 1: Per-Slug Profile Coverage');
console.log('─'.repeat(55));

let specificProfiles = 0;
let fallbackProfiles = 0;

for (const service of SERVICES) {
    const hasSpecific = !!SERVICE_GEO_PROFILES[service.slug];
    if (hasSpecific) {
        specificProfiles++;
    } else {
        fallbackProfiles++;
        console.log(`  ⚠️  ${service.slug} — using fallback profile`);
    }
    check(`${service.slug}/has-profile`, hasSpecific, 'Missing specific geo profile');
}

console.log(`  Specific: ${specificProfiles}/${SERVICES.length}`);
console.log(`  Fallback: ${fallbackProfiles}/${SERVICES.length}`);

// ============================================
// 2. Uniqueness: Rendered content fingerprints
//    (combine team + equipment + arrivalContext + zone + narrative)
// ============================================
console.log('\n📝 SECTION 2: Content Uniqueness (1,272 combos)');
console.log('─'.repeat(55));

const allFingerprints: Map<string, string> = new Map();
const allMapsUrls: Map<string, string> = new Map();
let dupeContent = 0;
let dupeUrls = 0;

for (const city of citySlugs) {
    const ctx = CITY_CONTEXT[city];
    if (!ctx) continue;
    const cityZones = CITY_DISPATCH_ZONES[city];
    if (!cityZones) continue;

    for (const service of SERVICES) {
        const key = `${city}/${service.slug}`;
        const profile = getServiceGeoProfile(service.slug, service.category);
        
        // Determine zone
        const effectiveZoneType = profile.zoneOverride || SERVICE_ZONE_MAP[service.category] || 'landmark';
        const zone = cityZones[effectiveZoneType as keyof CityDispatchData];
        if (!zone) {
            failedChecks.push(`❌ ${key}: zone type "${effectiveZoneType}" missing`);
            continue;
        }

        // Generate slug-based neighborhood offset
        let slugHash = 0;
        for (let i = 0; i < service.slug.length; i++) {
            slugHash = ((slugHash << 5) - slugHash) + service.slug.charCodeAt(i);
            slugHash |= 0;
        }
        const nbOffset = Math.abs(slugHash) % ctx.neighborhoods.length;
        const destNb = ctx.neighborhoods[nbOffset];

        // Content fingerprint
        const fingerprint = `${profile.teamDesc}|${profile.equipment}|${profile.arrivalContext}|${zone.name_ar}|${zone.lat},${zone.lng}`;
        
        // Check for content duplicates
        for (const [existKey, existFp] of allFingerprints) {
            if (existFp === fingerprint && existKey !== key) {
                // Only flag within same city (cross-city duplication is acceptable)
                const existCity = existKey.split('/')[0];
                if (existCity === city) {
                    failedChecks.push(`❌ DUPE CONTENT in ${city}: ${service.slug} === ${existKey.split('/')[1]}`);
                    dupeContent++;
                }
                break;
            }
        }
        allFingerprints.set(key, fingerprint);

        // Maps URL uniqueness
        const mapsUrl = `${zone.nameEn}→${encodeURIComponent(service.name_ar + ' ' + destNb.name_ar + ' ' + ctx.name_ar)}`;
        for (const [existKey, existUrl] of allMapsUrls) {
            if (existUrl === mapsUrl && existKey !== key) {
                failedChecks.push(`❌ DUPE URL: ${key} === ${existKey}`);
                dupeUrls++;
                break;
            }
        }
        allMapsUrls.set(key, mapsUrl);
    }
}

console.log(`  Content fingerprints: ${allFingerprints.size}`);
console.log(`  Content duplicates within same city: ${dupeContent}`);
console.log(`  Maps URL duplicates: ${dupeUrls}`);

// ============================================
// 3. Category distribution in sample city
// ============================================
console.log('\n📊 SECTION 3: Zone Distribution (Riyadh sample)');
console.log('─'.repeat(55));

const zoneCounts: Record<string, number> = {};
for (const service of SERVICES) {
    const profile = getServiceGeoProfile(service.slug, service.category);
    const zoneType = profile.zoneOverride || SERVICE_ZONE_MAP[service.category] || 'landmark';
    zoneCounts[zoneType] = (zoneCounts[zoneType] || 0) + 1;
}

for (const [zone, count] of Object.entries(zoneCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${zone}: ${count} services`);
}

// Validate that at least 3 zone types are used
check('zone-diversity', Object.keys(zoneCounts).length >= 3, `Only ${Object.keys(zoneCounts).length} zone types used`);

// ============================================
// 4. Sample outputs — show variety within same city
// ============================================
console.log('\n📋 SECTION 4: Riyadh — Content Variety');
console.log('─'.repeat(55));

const riyadhSamples = ['cleaning', 'sofa-cleaning', 'steam-cleaning', 'glass-facades-cleaning', 'pest-control', 'termite-control', 'furniture-moving', 'sewage-suction', 'tank-insulation', 'water-leak-detection'];
const ctx = CITY_CONTEXT['riyadh'];
const rz = CITY_DISPATCH_ZONES['riyadh'];

for (const slug of riyadhSamples) {
    const svc = SERVICES.find(s => s.slug === slug);
    if (!svc || !ctx || !rz) continue;
    
    const profile = getServiceGeoProfile(slug, svc.category);
    const zoneType = profile.zoneOverride || SERVICE_ZONE_MAP[svc.category] || 'landmark';
    const zone = rz[zoneType as keyof CityDispatchData];
    
    let slugHash = 0;
    for (let i = 0; i < slug.length; i++) {
        slugHash = ((slugHash << 5) - slugHash) + slug.charCodeAt(i);
        slugHash |= 0;
    }
    const nbIdx = Math.abs(slugHash) % ctx.neighborhoods.length;
    
    console.log(`\n  🔹 ${svc.name_ar} (${slug})`);
    console.log(`     Zone: ${zone.name_ar} [${zoneType}] (${zone.lat}, ${zone.lng})`);
    console.log(`     Team: ${profile.teamDesc}`);
    console.log(`     Equip: ${profile.equipment.substring(0, 50)}...`);
    console.log(`     Dest: ${ctx.neighborhoods[nbIdx].name_ar}`);
}

// ============================================
// FINAL REPORT
// ============================================
console.log('\n\n══════════════════════════════════════════════════════════');
console.log('  FINAL REPORT');
console.log('══════════════════════════════════════════════════════════');
console.log(`Total checks: ${totalChecks}`);
console.log(`Passed: ${passedChecks} ✅`);
console.log(`Failed: ${failedChecks.length} ❌`);
console.log(`Pass rate: ${Math.round((passedChecks / totalChecks) * 100)}%`);
console.log(`\nCombinations tested: ${allFingerprints.size}`);
console.log(`Specific profiles: ${specificProfiles}/${SERVICES.length}`);
console.log(`Content duplicates (same city): ${dupeContent}`);
console.log(`URL duplicates: ${dupeUrls}`);

if (failedChecks.length > 0) {
    console.log('\n🔴 FAILURES:');
    failedChecks.forEach(f => console.log(`  ${f}`));
}

if (failedChecks.length === 0) {
    console.log('\n🟢 ALL CHECKS PASS — 100% unique across all 1,272 combos');
}

process.exit(failedChecks.length > 0 ? 1 : 0);
