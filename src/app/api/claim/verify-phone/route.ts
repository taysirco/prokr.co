// ============================================
// 🔐 API: Verify Phone for Business Claim (Step 2)
// POST: server-side phone matching + mark as verified
// Uses Admin SDK for server-side operations
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin-init';
import { FieldValue } from 'firebase-admin/firestore';
import { getAdvertiserByCode } from '@/lib/db';

const CLAIMS_COLLECTION = 'business_claims';

/**
 * Normalize phone for comparison
 * Handles: 05XX, 5XX, +966XX, 966XX → +9665XX
 */
function normalizePhone(phone: string): string {
    const digits = phone.replace(/\D/g, '');
    if (digits.startsWith('966')) return `+${digits}`;
    if (digits.startsWith('05')) return `+966${digits.slice(1)}`;
    if (digits.startsWith('5') && digits.length === 9) return `+966${digits}`;
    return `+${digits}`;
}

export async function POST(request: NextRequest) {
    try {
        const { email, companyCode, phone } = await request.json();

        if (!email || !companyCode || !phone) {
            return NextResponse.json({ error: 'البريد ورمز الشركة ورقم الهاتف مطلوبون' }, { status: 400 });
        }

        // ============================================
        // 🔐 SERVER-SIDE PHONE MATCHING
        // ============================================
        const advertiser = await getAdvertiserByCode(companyCode);
        if (!advertiser) {
            return NextResponse.json({ error: 'لم يتم العثور على المنشأة' }, { status: 404 });
        }

        const submittedPhone = normalizePhone(phone);
        const registeredPhone = normalizePhone(advertiser.phone_number);

        if (submittedPhone !== registeredPhone) {
            return NextResponse.json(
                { error: 'رقم الهاتف لا يتطابق مع الرقم المسجل لهذه المنشأة' },
                { status: 403 }
            );
        }

        // Find the claim (must be email-verified, NOT pending)
        const db = getAdminDb();
        const snap = await db.collection(CLAIMS_COLLECTION)
            .where('company_code', '==', companyCode)
            .where('claimant_email', '==', email)
            .where('status', '==', 'email_verified')
            .get();

        if (snap.empty) {
            return NextResponse.json({ error: 'يجب تأكيد البريد الإلكتروني أولاً (الخطوة 1)' }, { status: 404 });
        }

        // Update with phone verification
        await snap.docs[0].ref.update({
            status: 'verified',
            phone_verified: true,
            verified_phone: submittedPhone,
            verified_at: FieldValue.serverTimestamp(),
        });

        return NextResponse.json({
            success: true,
            message: 'تم توثيق المنشأة بالكامل — البريد + الهاتف ✅',
        });
    } catch (err) {
        console.error('[CLAIM VERIFY-PHONE ERROR]', err);
        return NextResponse.json({ error: 'حدث خطأ أثناء التحقق' }, { status: 500 });
    }
}
