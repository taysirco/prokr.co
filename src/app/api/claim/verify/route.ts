// ============================================
// 🔐 API: Verify Business Claim (Email — Step 1)
// POST: mark a claim as email_verified
// Uses Admin SDK (bypasses Firestore rules)
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin-init';
import { FieldValue } from 'firebase-admin/firestore';

const CLAIMS_COLLECTION = 'business_claims';

export async function POST(request: NextRequest) {
    try {
        const { email, companyCode } = await request.json();

        if (!email || !companyCode) {
            return NextResponse.json({ error: 'البريد ورمز الشركة مطلوبان' }, { status: 400 });
        }

        const db = getAdminDb();
        const snap = await db.collection(CLAIMS_COLLECTION)
            .where('company_code', '==', companyCode)
            .where('claimant_email', '==', email)
            .where('status', '==', 'pending')
            .get();

        if (snap.empty) {
            return NextResponse.json({ error: 'لم يتم العثور على طلب توثيق معلّق' }, { status: 404 });
        }

        // Update the claim to email_verified (Step 1 complete, pending phone Step 2)
        await snap.docs[0].ref.update({
            status: 'email_verified',
            email_verified_at: FieldValue.serverTimestamp(),
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
