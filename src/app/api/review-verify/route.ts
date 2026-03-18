// ============================================
// 🔐 API: Verified Reviews
// POST: submit a review (validated via Firebase ID token)
// PUT:  verify a review after email confirmation
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs, addDoc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { verifyAuthToken } from '@/lib/firebase-admin-init';

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
        // Verify the Firebase ID token to confirm
        // the user is actually authenticated
        // ============================================
        const authHeader = request.headers.get('Authorization');
        const tokenData = await verifyAuthToken(authHeader);

        // Determine if review should be marked as verified
        // Token MUST be valid AND match the submitted email/phone
        let isVerified = false;
        if (tokenData) {
            if (email && tokenData.email === email) {
                isVerified = true;
            }
            if (phone && tokenData.phone_number === phone) {
                isVerified = true;
            }
        }

        // Check for duplicate review (by email or phone)
        const reviewsRef = collection(db, REVIEWS_COLLECTION);
        if (email) {
            const dupEmailQ = query(reviewsRef, where('company_code', '==', companyCode), where('reviewer_email', '==', email));
            const dupEmailSnap = await getDocs(dupEmailQ);
            if (!dupEmailSnap.empty) {
                return NextResponse.json({ error: 'لقد قمت بتقييم هذه الشركة مسبقاً' }, { status: 409 });
            }
        }
        if (phone) {
            const dupPhoneQ = query(reviewsRef, where('company_code', '==', companyCode), where('reviewer_phone', '==', phone));
            const dupPhoneSnap = await getDocs(dupPhoneQ);
            if (!dupPhoneSnap.empty) {
                return NextResponse.json({ error: 'لقد قمت بتقييم هذه الشركة مسبقاً' }, { status: 409 });
            }
        }

        // Create review — verified status is SERVER-DETERMINED, not client
        await addDoc(reviewsRef, {
            company_code: companyCode,
            reviewer_email: email || '',
            reviewer_phone: phone || '',
            reviewer_uid: tokenData?.uid || '',
            user_name: userName || 'عميل بروكر',
            rating: Number(rating),
            comment: comment || '',
            verified: isVerified,
            created_at: Timestamp.fromDate(new Date()),
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

        const reviewsRef = collection(db, REVIEWS_COLLECTION);
        const q = query(
            reviewsRef,
            where('company_code', '==', companyCode),
            where('reviewer_email', '==', email),
            where('verified', '==', false)
        );
        const snap = await getDocs(q);

        if (snap.empty) {
            return NextResponse.json({ error: 'لم يتم العثور على تقييم معلّق' }, { status: 404 });
        }

        await updateDoc(snap.docs[0].ref, {
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
