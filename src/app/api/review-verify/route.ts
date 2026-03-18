// ============================================
// 🔐 API: Verified Reviews
// POST: submit a review (validated via Firebase ID token)
// PUT:  verify a review after email confirmation
// Uses Admin SDK (bypasses Firestore rules)
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin-init';
import { verifyAuthToken } from '@/lib/firebase-admin-init';
import { FieldValue } from 'firebase-admin/firestore';

const REVIEWS_COLLECTION = 'verified_reviews';

// POST — Submit a new review (server-validated via Firebase ID token)
export async function POST(request: NextRequest) {
    try {
        const { email, phone, companyCode, rating, comment, userName } = await request.json();

        if ((!email && !phone) || !companyCode || !rating) {
            return NextResponse.json({ error: 'التقييم ورمز الشركة وطريقة التحقق مطلوبون' }, { status: 400 });
        }

        if (rating < 1 || rating > 5) {
            return NextResponse.json({ error: 'التقييم يجب أن يكون بين 1 و 5' }, { status: 400 });
        }

        // ============================================
        // 🔐 SERVER-SIDE TOKEN VALIDATION
        // ============================================
        const authHeader = request.headers.get('Authorization');
        const tokenData = await verifyAuthToken(authHeader);

        let isVerified = false;
        if (tokenData) {
            if (email && tokenData.email === email) {
                isVerified = true;
            }
            if (phone && tokenData.phone_number === phone) {
                isVerified = true;
            }
        }

        const db = getAdminDb();
        const reviewsRef = db.collection(REVIEWS_COLLECTION);

        // Check for duplicate review (by email or phone)
        if (email) {
            const dupEmailSnap = await reviewsRef
                .where('company_code', '==', companyCode)
                .where('reviewer_email', '==', email)
                .get();
            if (!dupEmailSnap.empty) {
                return NextResponse.json({ error: 'لقد قمت بتقييم هذه الشركة مسبقاً' }, { status: 409 });
            }
        }
        if (phone) {
            const dupPhoneSnap = await reviewsRef
                .where('company_code', '==', companyCode)
                .where('reviewer_phone', '==', phone)
                .get();
            if (!dupPhoneSnap.empty) {
                return NextResponse.json({ error: 'لقد قمت بتقييم هذه الشركة مسبقاً' }, { status: 409 });
            }
        }

        // Create review — verified status is SERVER-DETERMINED
        await reviewsRef.add({
            company_code: companyCode,
            reviewer_email: email || '',
            reviewer_phone: phone || '',
            reviewer_uid: tokenData?.uid || '',
            user_name: userName || 'عميل بروكر',
            rating: Number(rating),
            comment: comment || '',
            verified: isVerified,
            created_at: FieldValue.serverTimestamp(),
        });

        return NextResponse.json({
            message: isVerified
                ? 'تم إرسال تقييمك المُوثّق بنجاح ✅'
                : 'تم إرسال تقييمك. سيتم مراجعته قريباً.',
            status: 'success',
            verified: isVerified,
        });
    } catch (err) {
        console.error('[REVIEW POST ERROR]', err);
        return NextResponse.json({ error: 'حدث خطأ. حاول مرة أخرى.' }, { status: 500 });
    }
}

// PUT — Verify a review after email confirmation (legacy path)
export async function PUT(request: NextRequest) {
    try {
        const { email, companyCode } = await request.json();

        if (!email || !companyCode) {
            return NextResponse.json({ error: 'البريد ورمز الشركة مطلوبان' }, { status: 400 });
        }

        const db = getAdminDb();
        const snap = await db.collection(REVIEWS_COLLECTION)
            .where('company_code', '==', companyCode)
            .where('reviewer_email', '==', email)
            .where('verified', '==', false)
            .get();

        if (snap.empty) {
            return NextResponse.json({ error: 'لم يتم العثور على تقييم معلّق' }, { status: 404 });
        }

        await snap.docs[0].ref.update({
            verified: true,
        });

        return NextResponse.json({
            success: true,
            message: 'تم تأكيد تقييمك بنجاح! ✅',
        });
    } catch (err) {
        console.error('[REVIEW PUT ERROR]', err);
        return NextResponse.json({ error: 'حدث خطأ' }, { status: 500 });
    }
}
