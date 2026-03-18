// ============================================
// 🔐 API: Verify Business Claim
// POST: mark a claim as verified after email confirmation
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const CLAIMS_COLLECTION = 'business_claims';

export async function POST(request: NextRequest) {
    try {
        const { email, companyCode } = await request.json();

        if (!email || !companyCode) {
            return NextResponse.json({ error: 'البريد ورمز الشركة مطلوبان' }, { status: 400 });
        }

        const claimsRef = collection(db, CLAIMS_COLLECTION);
        const q = query(
            claimsRef,
            where('company_code', '==', companyCode),
            where('claimant_email', '==', email),
            where('status', '==', 'pending')
        );
        const snap = await getDocs(q);

        if (snap.empty) {
            return NextResponse.json({ error: 'لم يتم العثور على طلب توثيق معلّق' }, { status: 404 });
        }

        // Update the claim to email_verified (Step 1 complete, pending phone Step 2)
        const claimDoc = snap.docs[0];
        await updateDoc(claimDoc.ref, {
            status: 'email_verified',
            email_verified_at: Timestamp.fromDate(new Date()),
        });

        return NextResponse.json({
            success: true,
            message: 'تم تأكيد البريد! الآن أكمل الخطوة 2: تأكيد رقم الهاتف',
            next_step: 'phone',
        });
    } catch (err) {
        console.error('[CLAIM VERIFY ERROR]', err);
        return NextResponse.json({ error: 'حدث خطأ أثناء التحقق' }, { status: 500 });
    }
}
