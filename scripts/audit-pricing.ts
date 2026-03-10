// Comprehensive Shadow Pricing Audit Script
import { cleaningServices } from '@/lib/services/cleaning/data';
import { movingServices } from '@/lib/services/moving/data';
import { pestControlServices } from '@/lib/services/pest-control/data';
import { insulationServices } from '@/lib/services/insulation/data';
import { sewageServices } from '@/lib/services/sewage/data';
import { leakDetectionServices } from '@/lib/services/leak-detection/data';
import { BASE_PRICING } from '@/lib/services';

const allByCategory: Record<string, string[]> = {
    cleaning: cleaningServices.map((s: any) => s.slug),
    moving: movingServices.map((s: any) => s.slug),
    'pest-control': pestControlServices.map((s: any) => s.slug),
    insulation: insulationServices.map((s: any) => s.slug),
    sewage: sewageServices.map((s: any) => s.slug),
    'leak-detection': leakDetectionServices.map((s: any) => s.slug),
};

let totalSlugs = 0;
let coveredSlugs = 0;
let missingDetails: string[] = [];
let qualityIssues: string[] = [];

console.log('═══════════════════════════════════════════');
console.log('  SHADOW PRICING AUDIT — FULL REPORT');
console.log('═══════════════════════════════════════════\n');

for (const [category, slugs] of Object.entries(allByCategory)) {
    console.log(`\n📁 ${category.toUpperCase()} (${slugs.length} services)`);
    console.log('─'.repeat(50));

    for (const slug of slugs) {
        totalSlugs++;
        const pricing = (BASE_PRICING as any)[slug];

        if (!pricing) {
            missingDetails.push(`❌ ${category}/${slug} — NO PRICING DATA`);
            console.log(`  ❌ ${slug} — MISSING (generic fallback)`);
            continue;
        }

        coveredSlugs++;
        const itemCount = pricing.length;

        const hasGeneric = pricing.some((item: any) =>
            ['خدمة أساسية', 'خدمة متوسطة', 'خدمة شاملة'].includes(item.type)
        );

        if (hasGeneric) {
            qualityIssues.push(`⚠️ ${category}/${slug} — Contains generic labels`);
            console.log(`  ⚠️ ${slug} — ${itemCount} items but HAS GENERIC LABELS`);
        } else if (itemCount < 3) {
            qualityIssues.push(`⚠️ ${category}/${slug} — Only ${itemCount} items`);
            console.log(`  ⚠️ ${slug} — Only ${itemCount} items (minimum 3 recommended)`);
        } else {
            console.log(`  ✅ ${slug} — ${itemCount} specific items`);
            console.log(`     └─ "${pricing[0].type}" (${pricing[0].minPrice}-${pricing[0].maxPrice} SAR)`);
        }
    }
}

console.log('\n\n═══════════════════════════════════════════');
console.log('  SUMMARY');
console.log('═══════════════════════════════════════════');
console.log(`Total services: ${totalSlugs}`);
console.log(`With specific pricing: ${coveredSlugs}`);
console.log(`Missing (generic fallback): ${totalSlugs - coveredSlugs}`);
console.log(`Coverage: ${Math.round((coveredSlugs / totalSlugs) * 100)}%`);

if (missingDetails.length > 0) {
    console.log('\n🔴 MISSING PRICING:');
    missingDetails.forEach(m => console.log(`  ${m}`));
}
if (qualityIssues.length > 0) {
    console.log('\n🟡 QUALITY ISSUES:');
    qualityIssues.forEach(q => console.log(`  ${q}`));
}
if (missingDetails.length === 0 && qualityIssues.length === 0) {
    console.log('\n🟢 ALL SERVICES PASS — 100% coverage with specific pricing data');
}

process.exit(0);
