import * as fs from 'fs';
import * as path from 'path';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

const SA = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../serviceAccountKey.json'), 'utf-8'));
if (getApps().length === 0) initializeApp({ credential: cert(SA) });
const db = getFirestore();

async function main() {
    const snap = await db.collection('advertisers').where('is_premium', '==', true).get();
    const all = snap.docs.map(d => ({ id: d.id, ...d.data() })) as any[];
    const newOnes = all.filter(d => {
        const c = d.created_at instanceof Timestamp ? d.created_at.toDate() : new Date(0);
        return c >= new Date('2026-04-04');
    });

    console.log('════════════════════════════════════════');
    console.log('  DEEP AUDIT — PROKR PREMIUM COMPANIES');
    console.log('════════════════════════════════════════\n');

    // 1
    console.log('▸ 1. إحصاء');
    console.log('  إجمالي المميزة:', all.length);
    console.log('  جديدة:', newOnes.length, '| قديمة:', all.length - newOnes.length);

    // 2 Phone
    console.log('\n▸ 2. أرقام الهاتف');
    const badPhones = newOnes.filter(d => !d.phone_number?.startsWith('+966') && !d.phone_number?.startsWith('966'));
    const noWA = newOnes.filter(d => !d.whatsapp_number);
    console.log('  بدون +966:', badPhones.length);
    badPhones.slice(0, 5).forEach(d => console.log('    ❌', d.business_name, '→', d.phone_number));
    console.log('  بدون واتساب:', noWA.length);

    // 3 Fields
    console.log('\n▸ 3. حقول مفقودة');
    const noDesc = newOnes.filter(d => !d.description || d.description.length < 10);
    const noCities = newOnes.filter(d => !d.targeted_cities?.length);
    const noSvc = newOnes.filter(d => !d.targeted_services?.length);
    console.log('  بدون وصف:', noDesc.length, '| بدون مدن:', noCities.length, '| بدون خدمات:', noSvc.length);

    // 4 Expiry
    console.log('\n▸ 4. الاشتراكات');
    const now = new Date();
    const expired = all.filter(d => {
        if (!d.subscription_expiry) return false;
        const exp = d.subscription_expiry instanceof Timestamp ? d.subscription_expiry.toDate() : new Date(d.subscription_expiry);
        return exp < now;
    });
    const noExpiry = all.filter(d => !d.subscription_expiry);
    console.log('  منتهية:', expired.length);
    expired.forEach(d => {
        const exp = d.subscription_expiry instanceof Timestamp ? d.subscription_expiry.toDate().toISOString().split('T')[0] : '?';
        console.log('    ⚠️', d.business_name, '— انتهت:', exp);
    });
    console.log('  بدون تاريخ انتهاء:', noExpiry.length);

    // 5 Priority
    console.log('\n▸ 5. توزيع priority_score');
    const scoreDist: Record<number, number> = {};
    all.forEach(d => { scoreDist[d.priority_score] = (scoreDist[d.priority_score] || 0) + 1; });
    Object.entries(scoreDist).sort((a, b) => Number(b[0]) - Number(a[0])).forEach(([s, c]) =>
        console.log('    score', s + ':', c, 'شركة')
    );

    // 6 City coverage
    console.log('\n▸ 6. تغطية المدن');
    const cityCount: Record<string, { total: number; new_: number }> = {};
    all.forEach(d => {
        const isNew = d.created_at instanceof Timestamp ? d.created_at.toDate() >= new Date('2026-04-04') : false;
        (d.targeted_cities || []).forEach((c: string) => {
            if (!cityCount[c]) cityCount[c] = { total: 0, new_: 0 };
            cityCount[c].total++;
            if (isNew) cityCount[c].new_++;
        });
    });
    Object.entries(cityCount).sort((a, b) => b[1].total - a[1].total).forEach(([city, counts]) =>
        console.log('   ', city + ':', counts.total, 'إجمالي,', counts.new_, 'جديدة')
    );

    // 7 Service coverage
    console.log('\n▸ 7. تغطية الخدمات');
    const svcCount: Record<string, { total: number; new_: number }> = {};
    all.forEach(d => {
        const isNew = d.created_at instanceof Timestamp ? d.created_at.toDate() >= new Date('2026-04-04') : false;
        (d.targeted_services || []).forEach((s: string) => {
            if (!svcCount[s]) svcCount[s] = { total: 0, new_: 0 };
            svcCount[s].total++;
            if (isNew) svcCount[s].new_++;
        });
    });
    Object.entries(svcCount).sort((a, b) => b[1].total - a[1].total).forEach(([svc, counts]) =>
        console.log('   ', svc + ':', counts.total, 'إجمالي,', counts.new_, 'جديدة')
    );

    // 8 Inactive
    console.log('\n▸ 8. شركات غير نشطة');
    const inactive = all.filter(d => d.is_active === false);
    console.log('  غير نشطة:', inactive.length);
    inactive.forEach(d => console.log('    ⛔', d.business_name));

    // 9 Logos
    console.log('\n▸ 9. لوجوهات');
    const noLogo = newOnes.filter(d => !d.logo_url);
    console.log('  بدون لوجو:', noLogo.length, 'من', newOnes.length);

    // 10 Description quality
    console.log('\n▸ 10. جودة الأوصاف');
    const shortDesc = newOnes.filter(d => d.description && d.description.length < 50);
    console.log('  وصف قصير (<50):', shortDesc.length);
    console.log('  وصف جيد (≥50):', newOnes.length - shortDesc.length - noDesc.length);

    // 11 Duplicates
    console.log('\n▸ 11. أسماء مكررة');
    const nameMap: Record<string, string[]> = {};
    all.forEach(d => {
        const n = d.business_name.trim();
        if (!nameMap[n]) nameMap[n] = [];
        nameMap[n].push(d.id);
    });
    const dupes = Object.entries(nameMap).filter(([, ids]) => ids.length > 1);
    console.log('  مكررة:', dupes.length);
    dupes.forEach(([name, ids]) => console.log('    ⚠️', name, '→', ids.length, 'نسخ'));

    // 12 is_active missing
    console.log('\n▸ 12. حقل is_active');
    const noActive = newOnes.filter(d => d.is_active === undefined);
    console.log('  بدون is_active:', noActive.length);

    console.log('\n════════════════════════════════════════');
    console.log('  ✅ اكتمل التدقيق');
    console.log('════════════════════════════════════════');
    process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
