// ============================================
// 🔐 API: Business Claim — Submit & Check
// POST: submit a new claim
// GET:  check claim status for a company
// Uses Admin SDK (bypasses Firestore rules)
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin-init';
import { FieldValue } from 'firebase-admin/firestore';

const CLAIMS_COLLECTION = 'business_claims';

// POST — Submit a new business claim
export async function POST(request: NextRequest) {
    try {
        const { email, companyCode, businessName } = await request.json();

        if (!email || !companyCode) {
            return NextResponse.json({ error: 'البريد الإلكتروني ورمز الشركة مطلوبان' }, { status: 400 });
        }

        const db = getAdminDb();
        const claimsRef = db.collection(CLAIMS_COLLECTION);

        // Check if already claimed
        const existingSnap = await claimsRef
            .where('company_code', '==', companyCode)
            .where('status', '==', 'verified')
            .get();

        if (!existingSnap.empty) {
            return NextResponse.json({ error: 'هذه المنشأة مُوثّقة بالفعل', claimed: true }, { status: 409 });
        }

        // Check if pending claim exists for this email
        const pendingSnap = await claimsRef
            .where('company_code', '==', companyCode)
            .where('claimant_email', '==', email)
            .where('status', '==', 'pending')
            .get();

        if (!pendingSnap.empty) {
            return NextResponse.json({ message: 'طلب التوثيق قيد الانتظار. تحقق من بريدك الإلكتروني', status: 'pending' });
        }

        // Create new claim
        await claimsRef.add({
            company_code: companyCode,
            claimant_email: email,
            business_name: businessName || '',
            status: 'pending',
            claimed_at: FieldValue.serverTimestamp(),
            verified_at: null,
        });

        return NextResponse.json({ message: 'تم إرسال رابط التأكيد إلى بريدك الإلكتروني', status: 'pending' });
    } catch (err) {
        console.error('[CLAIM POST ERROR]', err);
        return NextResponse.json({ error: 'حدث خطأ. حاول مرة أخرى.' }, { status: 500 });
    }
}

// GET — Check claim status
export async function GET(request: NextRequest) {
    const companyCode = request.nextUrl.searchParams.get('code');

    if (!companyCode) {
        return NextResponse.json({ error: 'رمز الشركة مطلوب' }, { status: 400 });
    }

    try {
        const db = getAdminDb();
        const claimsRef = db.collection(CLAIMS_COLLECTION);

        // Check fully verified (email + phone)
        const verifiedSnap = await claimsRef
            .where('company_code', '==', companyCode)
            .where('status', '==', 'verified')
            .get();

        if (!verifiedSnap.empty) {
            const claim = verifiedSnap.docs[0].data();
            return NextResponse.json({
                claimed: true,
                email_verified: true,
                phone_verified: claim.phone_verified === true,
                verified_at: claim.verified_at?.toDate()?.toISOString(),
            });
        }

        // Check email-only verified (pending phone)
        const emailOnlySnap = await claimsRef
            .where('company_code', '==', companyCode)
            .where('status', '==', 'email_verified')
            .get();

        if (!emailOnlySnap.empty) {
            const claim = emailOnlySnap.docs[0].data();
            return NextResponse.json({
                claimed: false,
                email_verified: true,
                phone_verified: false,
                claimant_email: claim.claimant_email || '',
            });
        }

        return NextResponse.json({ claimed: false, email_verified: false, phone_verified: false });
    } catch (err) {
        console.error('[CLAIM GET ERROR]', err);
        return NextResponse.json({ error: 'حدث خطأ' }, { status: 500 });
    }
}
