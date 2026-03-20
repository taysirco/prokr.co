// ============================================
// 🔐 API: Verify Business Claim (Email — Step 1)
// POST: mark a claim as email_verified
// ⚠️ SECURITY: Validates Firebase ID token to ensure
//    the caller actually owns the email address.
// Uses Admin SDK (bypasses Firestore rules)
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb, verifyAuthToken } from '@/lib/firebase-admin-init';
import { FieldValue } from 'firebase-admin/firestore';

const CLAIMS_COLLECTION = 'business_claims';

export async function POST(request: NextRequest) {
    try {
        const { email, companyCode } = await request.json();

        if (!email || !companyCode) {
            return NextResponse.json({ error: 'البريد ورمز الشركة مطلوبان' }, { status: 400 });
        }

        // ============================================
        // 🔐 TOKEN VALIDATION — Prevent unauthorized claim verification
        // Without this, anyone could POST {email, companyCode}
        // and fraudulently mark a claim as email_verified.
        // The caller must have signed in via the email link
        // (completeEmailSignIn) which creates a Firebase session.
        // ============================================
        const authHeader = request.headers.get('Authorization');
        const tokenData = await verifyAuthToken(authHeader);

        if (!tokenData || tokenData.email !== email) {
            return NextResponse.json(
                { error: 'يجب تسجيل الدخول بنفس البريد الإلكتروني المستخدم في التوثيق' },
                { status: 401 }
            );
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
            verified_by_uid: tokenData.uid,
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
