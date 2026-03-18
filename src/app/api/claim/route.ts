// ============================================
// 🔐 API: Business Claim — Submit & Check
// POST: submit a new claim
// GET:  check claim status for a company
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const CLAIMS_COLLECTION = 'business_claims';

// POST — Submit a new business claim
export async function POST(request: NextRequest) {
    try {
        const { email, companyCode, businessName } = await request.json();

        if (!email || !companyCode) {
            return NextResponse.json({ error: 'البريد الإلكتروني ورمز الشركة مطلوبان' }, { status: 400 });
        }

        // Check if already claimed
        const claimsRef = collection(db, CLAIMS_COLLECTION);
        const existingQ = query(claimsRef, where('company_code', '==', companyCode), where('status', '==', 'verified'));
        const existingSnap = await getDocs(existingQ);

        if (!existingSnap.empty) {
            return NextResponse.json({ error: 'هذه المنشأة مُوثّقة بالفعل', claimed: true }, { status: 409 });
        }

        // Check if pending claim exists for this email
        const pendingQ = query(claimsRef, where('company_code', '==', companyCode), where('claimant_email', '==', email), where('status', '==', 'pending'));
        const pendingSnap = await getDocs(pendingQ);

        if (!pendingSnap.empty) {
            return NextResponse.json({ message: 'طلب التوثيق قيد الانتظار. تحقق من بريدك الإلكتروني', status: 'pending' });
        }

        // Create new claim
        await addDoc(claimsRef, {
            company_code: companyCode,
            claimant_email: email,
            business_name: businessName || '',
            status: 'pending',
            claimed_at: Timestamp.fromDate(new Date()),
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
        const claimsRef = collection(db, CLAIMS_COLLECTION);

        // Check fully verified (email + phone)
        const verifiedQ = query(claimsRef, where('company_code', '==', companyCode), where('status', '==', 'verified'));
        const verifiedSnap = await getDocs(verifiedQ);

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
        const emailOnlyQ = query(claimsRef, where('company_code', '==', companyCode), where('status', '==', 'email_verified'));
        const emailOnlySnap = await getDocs(emailOnlyQ);

        if (!emailOnlySnap.empty) {
            return NextResponse.json({
                claimed: false,
                email_verified: true,
                phone_verified: false,
            });
        }

        return NextResponse.json({ claimed: false, email_verified: false, phone_verified: false });
    } catch (err) {
        console.error('[CLAIM GET ERROR]', err);
        return NextResponse.json({ error: 'حدث خطأ' }, { status: 500 });
    }
}
