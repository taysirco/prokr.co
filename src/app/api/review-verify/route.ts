// ============================================
// 🔐 API: Verified Reviews
// POST: submit a review (validated via Firebase ID token)
// PUT:  verify a review after email confirmation
// Uses Admin SDK for server-side operations
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
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
        // 🔐 SERVER-SIDE TOKEN VALIDATION (REQUIRED)
        // Reviews MUST be authenticated — prevents spam/abuse.
        // The token is verified against the email/phone the user
        // signed in with on the client.
        // ============================================
        const authHeader = request.headers.get('Authorization');
        const tokenData = await verifyAuthToken(authHeader);

        if (!tokenData) {
            return NextResponse.json(
                { error: 'يجب تسجيل الدخول لإرسال تقييم' },
                { status: 401 }
            );
        }

        let isVerified = false;
        if (email && tokenData.email === email) {
            isVerified = true;
        }
        if (phone && tokenData.phone_number === phone) {
            isVerified = true;
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

        // ── Sync to Advertiser Document (so review appears on company page) ──
        try {
            const advertiserSnap = await db.collection('advertisers')
                .where('short_code', '==', companyCode)
                .limit(1)
                .get();

            if (!advertiserSnap.empty) {
                const advertiserRef = advertiserSnap.docs[0].ref;
                await advertiserRef.update({
                    reviews: FieldValue.arrayUnion({
                        user: userName || 'عميل بروكر',
                        rating: Number(rating),
                        comment: comment || '',
                        date: new Date().toISOString(),
                        verified: isVerified,
                        review_type: 'text',
                    }),
                });
            }
        } catch (syncErr) {
            console.error('[REVIEW SYNC ERROR]', syncErr);
        }

        // Revalidate cached company page so the new review appears instantly
        try {
            revalidatePath(`/company/${companyCode}`);
        } catch {
            // Non-blocking
        }

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
