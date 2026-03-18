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

        // Update the claim to verified
        const claimDoc = snap.docs[0];
        await updateDoc(claimDoc.ref, {
            status: 'verified',
            verified_at: Timestamp.fromDate(new Date()),
        });

        return NextResponse.json({
            success: true,
            message: 'تم توثيق المنشأة بنجاح! ✅',
        });
    } catch {
        return NextResponse.json({ error: 'حدث خطأ أثناء التحقق' }, { status: 500 });
    }
}
