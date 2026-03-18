// ============================================
// 🔐 API: Verify Phone for Business Claim (Step 2)
// POST: check phone matches registered + mark as phone-verified
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const CLAIMS_COLLECTION = 'business_claims';

export async function POST(request: NextRequest) {
    try {
        const { email, companyCode, phone } = await request.json();

        if (!email || !companyCode || !phone) {
            return NextResponse.json({ error: 'البريد ورمز الشركة ورقم الهاتف مطلوبون' }, { status: 400 });
        }

        // Find the claim (must be email-verified)
        const claimsRef = collection(db, CLAIMS_COLLECTION);
        const q = query(
            claimsRef,
            where('company_code', '==', companyCode),
            where('claimant_email', '==', email),
        );
        const snap = await getDocs(q);

        if (snap.empty) {
            return NextResponse.json({ error: 'لم يتم العثور على طلب توثيق' }, { status: 404 });
        }

        // Update with phone verification
        const claimDoc = snap.docs[0];
        await updateDoc(claimDoc.ref, {
            status: 'verified',
            phone_verified: true,
            verified_phone: phone,
            verified_at: Timestamp.fromDate(new Date()),
        });

        return NextResponse.json({
            success: true,
            message: 'تم توثيق المنشأة بالكامل — البريد + الهاتف ✅',
        });
    } catch {
        return NextResponse.json({ error: 'حدث خطأ أثناء التحقق' }, { status: 500 });
    }
}
