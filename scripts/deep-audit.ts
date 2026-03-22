/**
 * DEEP QUALITY AUDIT — Shadow Pricing System
 * Checks: data integrity, price realism, field completeness,
 * inflation math, unit consistency, and edge cases
 */
import { cleaningServices } from '@/lib/services/cleaning/data';
import { movingServices } from '@/lib/services/moving/data';
import { pestControlServices } from '@/lib/services/pest-control/data';
import { insulationServices } from '@/lib/services/insulation/data';
import { sewageServices } from '@/lib/services/sewage/data';
import { leakDetectionServices } from '@/lib/services/leak-detection/data';
import { BASE_PRICING } from '@/lib/services';
import { getCityContext, getAdjustedPriceRange } from '@/lib/city-context';
import { generatePageContent } from '@/lib/seo-content';

// ============================================
// ALL SERVICES
// ============================================
const allServices: { slug: string; category: string; name_ar: string }[] = [
    ...cleaningServices.map((s: any) => ({ ...s, category: 'cleaning' })),
    ...movingServices.map((s: any) => ({ ...s, category: 'moving' })),
    ...pestControlServices.map((s: any) => ({ ...s, category: 'pest-control' })),
    ...insulationServices.map((s: any) => ({ ...s, category: 'insulation' })),
    ...sewageServices.map((s: any) => ({ ...s, category: 'sewage' })),
    ...leakDetectionServices.map((s: any) => ({ ...s, category: 'leak-detection' })),
];

const testCities = [
    { slug: 'riyadh', name_ar: 'الرياض' },
    { slug: 'jeddah', name_ar: 'جدة' },
    { slug: 'dammam', name_ar: 'الدمام' },
    { slug: 'abha', name_ar: 'أبها' },
    { slug: 'tabuk', name_ar: 'تبوك' },
];

let totalChecks = 0;
let passedChecks = 0;
let failedChecks: string[] = [];
let warnings: string[] = [];

function check(name: string, condition: boolean, detail?: string) {
    totalChecks++;
    if (condition) {
        passedChecks++;
    } else {
        failedChecks.push(`❌ ${name}${detail ? ': ' + detail : ''}`);
    }
}

function warn(name: string, detail: string) {
    warnings.push(`⚠️ ${name}: ${detail}`);
}

console.log('══════════════════════════════════════════════════');
console.log('  DEEP QUALITY AUDIT — Shadow Pricing System');
console.log('══════════════════════════════════════════════════\n');

// ============================================
// 1. DATA INTEGRITY — Price Validation
// ============================================
console.log('\n🔬 SECTION 1: Price Data Integrity');
console.log('─'.repeat(50));

for (const service of allServices) {
    const pricing = (BASE_PRICING as any)[service.slug];

    check(
        `${service.slug}/exists`,
        !!pricing,
        `No pricing data found`
    );

    if (!pricing) continue;

    for (let i = 0; i < pricing.length; i++) {
        const item = pricing[i];
        const prefix = `${service.slug}[${i}]`;

        // minPrice < maxPrice
        check(
            `${prefix}/price-order`,
            item.minPrice < item.maxPrice,
            `minPrice(${item.minPrice}) >= maxPrice(${item.maxPrice})`
        );

        // Prices are positive
        check(
            `${prefix}/positive-min`,
            item.minPrice > 0,
            `minPrice is ${item.minPrice}`
        );

        // No absurd prices (>100,000 SAR for a single service)
        check(
            `${prefix}/max-ceiling`,
            item.maxPrice <= 100000,
            `maxPrice(${item.maxPrice}) exceeds 100,000 SAR`
        );

        // Type is not empty
        check(
            `${prefix}/type-nonempty`,
            item.type && item.type.trim().length > 0,
            'Empty type field'
        );

        // Unit is not empty
        check(
            `${prefix}/unit-nonempty`,
            item.unit && item.unit.trim().length > 0,
            'Empty unit field'
        );

        // No generic labels
        check(
            `${prefix}/not-generic`,
            !['خدمة أساسية', 'خدمة متوسطة', 'خدمة شاملة'].includes(item.type),
            `Generic label "${item.type}"`
        );

        // Check for time field (warn if missing, not fail)
        if (!item.time) {
            warn(`${prefix}/time-missing`, `"${item.type}" has no time field`);
        }
    }

    // Minimum 3 items per service
    check(
        `${service.slug}/min-items`,
        pricing.length >= 3,
        `Only ${pricing.length} items`
    );

    // Price range progression (items should generally go from cheap to expensive)
    if (pricing.length >= 2) {
        const firstMin = pricing[0].minPrice;
        const lastMax = pricing[pricing.length - 1].maxPrice;
        check(
            `${service.slug}/price-progression`,
            lastMax > firstMin,
            `Last maxPrice(${lastMax}) not > first minPrice(${firstMin})`
        );
    }
}

// ============================================
// 2. INFLATION MATH VERIFICATION
// ============================================
console.log('\n\n🧮 SECTION 2: Inflation Math & Price Modifier');
console.log('─'.repeat(50));

const inflationFactors = [1.45, 1.55, 1.65, 1.75, 1.5, 1.6];

for (const factor of inflationFactors) {
    // Test that savings are in expected range (30-55%)
    const testMin = 500;
    const testMax = 1000;
    const marketMin = Math.round(testMax * factor * 0.85);
    const marketMax = Math.round(testMax * factor * 1.15);
    const savingPercent = Math.round(((marketMax - testMax) / marketMax) * 100);

    check(
        `inflation/factor-${factor}/saving-range`,
        savingPercent >= 25 && savingPercent <= 55,
        `Saving ${savingPercent}% outside expected 25-55% range`
    );
    console.log(`  Factor ${factor}: marketMax=${marketMax}, savingPercent=${savingPercent}%`);
}

// ============================================
// 3. CITY PRICE MODIFIER VERIFICATION
// ============================================
console.log('\n\n🌍 SECTION 3: City Price Modifiers');
console.log('─'.repeat(50));

for (const city of testCities) {
    const context = getCityContext(city.slug);

    check(
        `city/${city.slug}/context-exists`,
        !!context,
        'No city context found'
    );

    if (context) {
        // priceModifier should be 0.3 - 1.5
        check(
            `city/${city.slug}/modifier-range`,
            context.priceModifier >= 0.3 && context.priceModifier <= 1.5,
            `priceModifier ${context.priceModifier} outside 0.3-1.5 range`
        );

        console.log(`  ${city.name_ar} (${city.slug}): priceModifier=${context.priceModifier}, climate=${context.climate}`);

        // Test getAdjustedPriceRange output format
        const rangeStr = getAdjustedPriceRange(500, 1000, city.slug);
        check(
            `city/${city.slug}/range-format`,
            rangeStr.includes('-') || rangeStr.includes('–'),
            `Range "${rangeStr}" doesn't contain dash separator`
        );

        // Check it doesn't contain "ريال" (that would cause double "ريال")
        check(
            `city/${city.slug}/no-rial-in-range`,
            !rangeStr.includes('ريال'),
            `Range "${rangeStr}" already contains ريال — would cause double display`
        );
    }
}

// ============================================
// 4. FULL SEO CONTENT GENERATION TEST
// ============================================
console.log('\n\n📝 SECTION 4: Full SEO Content Generation');
console.log('─'.repeat(50));

// Sample 5 different service/city combos
const testCombos = [
    { city: testCities[0], service: allServices.find(s => s.slug === 'bathroom-leak-detection')! },
    { city: testCities[1], service: allServices.find(s => s.slug === 'dabab')! },
    { city: testCities[2], service: allServices.find(s => s.slug === 'snakes-control')! },
    { city: testCities[3], service: allServices.find(s => s.slug === 'hourly-cleaning')! },
    { city: testCities[4], service: allServices.find(s => s.slug === 'epoxy-coating')! },
];

for (const combo of testCombos) {
    if (!combo.service) continue;
    const label = `${combo.city.slug}/${combo.service.slug}`;

    try {
        const content = generatePageContent({
            city: combo.city as any,
            service: combo.service as any
        });

        check(`seo/${label}/has-pricing`, content.pricing && content.pricing.length > 0, 'No pricing generated');
        check(`seo/${label}/has-modifier`, typeof content.priceModifier === 'number', 'No priceModifier');

        if (content.pricing) {
            for (let i = 0; i < content.pricing.length; i++) {
                const p = content.pricing[i];

                // price field should be a string (formatted range)
                check(`seo/${label}[${i}]/price-is-string`, typeof p.price === 'string', `price is ${typeof p.price}`);

                // price should NOT contain "ريال"
                check(`seo/${label}[${i}]/no-rial`, !p.price.includes('ريال'), `"${p.price}" contains ريال`);

                // minPrice and maxPrice should be numbers
                check(`seo/${label}[${i}]/min-number`, typeof p.minPrice === 'number', `minPrice is ${typeof p.minPrice}`);
                check(`seo/${label}[${i}]/max-number`, typeof p.maxPrice === 'number', `maxPrice is ${typeof p.maxPrice}`);

                // Adjusted prices should differ from raw if modifier != 1
                if (content.priceModifier !== 1) {
                    const rawPricing = (BASE_PRICING as any)[combo.service.slug];
                    if (rawPricing && rawPricing[i]) {
                        check(
                            `seo/${label}[${i}]/adjusted`,
                            p.minPrice !== rawPricing[i].minPrice,
                            `Price not adjusted by modifier (raw=${rawPricing[i].minPrice}, adj=${p.minPrice})`
                        );
                    }
                }
            }

            console.log(`  ✓ ${label}: ${content.pricing.length} items, modifier=${content.priceModifier}`);
            console.log(`    Sample: "${content.pricing[0].type}" → ${content.pricing[0].price} ريال`);
        }

        // Check FAQ items
        check(`seo/${label}/has-faq`, content.faqItems && content.faqItems.length > 0, 'No FAQ items');

        // Check trust factors
        check(`seo/${label}/has-trust`, content.trustFactors && content.trustFactors.length > 0, 'No trust factors');

    } catch (err: any) {
        failedChecks.push(`❌ seo/${label}/generation-error: ${err.message}`);
    }
}

// ============================================
// 5. TEMPLATE PLACEHOLDER COMPLETENESS
// ============================================
console.log('\n\n🔤 SECTION 5: Template Placeholders');
console.log('─'.repeat(50));

for (const combo of testCombos) {
    if (!combo.service) continue;
    const label = `${combo.city.slug}/${combo.service.slug}`;

    try {
        const content = generatePageContent({
            city: combo.city as any,
            service: combo.service as any
        });

        // Check for unreplaced placeholders in all string fields
        const allStrings = JSON.stringify(content);
        const placeholderMatch = allStrings.match(/\{[a-zA-Z_.]+\}/g);

        check(
            `template/${label}/no-placeholders`,
            !placeholderMatch,
            `Found unreplaced: ${placeholderMatch?.join(', ')}`
        );

        // Check for "undefined" or "NaN" in content
        check(
            `template/${label}/no-undefined`,
            !allStrings.includes('undefined'),
            'Contains "undefined"'
        );
        check(
            `template/${label}/no-nan`,
            !allStrings.includes('NaN'),
            'Contains "NaN"'
        );

        console.log(`  ✓ ${label}: No unreplaced placeholders`);

    } catch (err: any) {
        failedChecks.push(`❌ template/${label}/check-error: ${err.message}`);
    }
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
console.log(`Warnings: ${warnings.length} ⚠️`);
console.log(`Pass rate: ${Math.round((passedChecks / totalChecks) * 100)}%`);

if (failedChecks.length > 0) {
    console.log('\n🔴 FAILURES:');
    failedChecks.forEach(f => console.log(`  ${f}`));
}

if (warnings.length > 0) {
    console.log(`\n🟡 WARNINGS (${warnings.length}):`);
    // Group by type
    const timeWarnings = warnings.filter(w => w.includes('time-missing'));
    const otherWarnings = warnings.filter(w => !w.includes('time-missing'));

    if (timeWarnings.length > 0) {
        console.log(`  ⚠️ ${timeWarnings.length} items missing "time" field (cosmetic, not critical)`);
    }
    otherWarnings.forEach(w => console.log(`  ${w}`));
}

if (failedChecks.length === 0) {
    console.log('\n🟢 ALL CHECKS PASS — System is production-ready');
}

process.exit(failedChecks.length > 0 ? 1 : 0);
