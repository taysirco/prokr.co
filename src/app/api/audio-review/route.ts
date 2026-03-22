// ============================================
// 🎤 API: Audio Voice Reviews (التقييم الصوتي)
// POST: Upload audio → Speech-to-Text → Firestore
// Uses Admin SDK (server-side operations)
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin-init';
import { verifyAuthToken } from '@/lib/firebase-admin-init';
import { FieldValue } from 'firebase-admin/firestore';

const REVIEWS_COLLECTION = 'verified_reviews';
const MAX_AUDIO_SIZE = 1024 * 1024; // 1MB (20s recording)

export async function POST(request: NextRequest) {
    try {
        // ── 1. Auth Validation ──
        const authHeader = request.headers.get('Authorization');
        const tokenData = await verifyAuthToken(authHeader);

        if (!tokenData) {
            return NextResponse.json(
                { error: 'يجب تسجيل الدخول لإرسال تقييم صوتي' },
                { status: 401 }
            );
        }

        // ── 2. Parse FormData ──
        const formData = await request.formData();
        const audioFile = formData.get('audio') as File | null;
        const rating = Number(formData.get('rating'));
        const companyCode = formData.get('companyCode') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const userName = formData.get('userName') as string;
        const duration = Number(formData.get('duration')) || 0;

        // ── 3. Validations ──
        if (!audioFile || !companyCode || !rating) {
            return NextResponse.json(
                { error: 'الملف الصوتي والتقييم ورمز الشركة مطلوبة' },
                { status: 400 }
            );
        }

        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                { error: 'التقييم يجب أن يكون بين 1 و 5' },
                { status: 400 }
            );
        }

        if (audioFile.size > MAX_AUDIO_SIZE) {
            return NextResponse.json(
                { error: 'حجم التسجيل الصوتي كبير جداً (الحد الأقصى 1MB)' },
                { status: 400 }
            );
        }

        if (duration < 2 || duration > 22) {
            return NextResponse.json(
                { error: 'مدة التسجيل يجب أن تكون بين 2 و 20 ثانية' },
                { status: 400 }
            );
        }

        // Validate content type
        const contentType = audioFile.type;
        if (!contentType.startsWith('audio/')) {
            return NextResponse.json(
                { error: 'نوع الملف غير مدعوم. يرجى إرسال ملف صوتي.' },
                { status: 400 }
            );
        }

        // ── 4. Duplicate Check ──
        const db = getAdminDb();
        const reviewsRef = db.collection(REVIEWS_COLLECTION);

        if (email) {
            const dupSnap = await reviewsRef
                .where('company_code', '==', companyCode)
                .where('reviewer_email', '==', email)
                .get();
            if (!dupSnap.empty) {
                return NextResponse.json(
                    { error: 'لقد قمت بتقييم هذه الشركة مسبقاً' },
                    { status: 409 }
                );
            }
        }
        if (phone) {
            const dupSnap = await reviewsRef
                .where('company_code', '==', companyCode)
                .where('reviewer_phone', '==', phone)
                .get();
            if (!dupSnap.empty) {
                return NextResponse.json(
                    { error: 'لقد قمت بتقييم هذه الشركة مسبقاً' },
                    { status: 409 }
                );
            }
        }

        // ── 5. Upload Audio to Firebase Storage (Admin SDK) ──
        const { getStorage } = await import('firebase-admin/storage');
        const bucket = getStorage().bucket();
        const timestamp = Date.now();
        const ext = contentType.includes('webm') ? 'webm' : 'mp4';
        const storagePath = `voice-reviews/${companyCode}/${tokenData.uid}-${timestamp}.${ext}`;

        const fileBuffer = Buffer.from(await audioFile.arrayBuffer());
        const storageFile = bucket.file(storagePath);

        await storageFile.save(fileBuffer, {
            metadata: {
                contentType,
                metadata: {
                    reviewerUid: tokenData.uid,
                    companyCode,
                    duration: String(duration),
                },
            },
        });

        await storageFile.makePublic();
        const audioUrl = `https://storage.googleapis.com/${bucket.name}/${storagePath}`;

        // ── 6. Speech-to-Text Transcription ──
        let transcript = '';
        let transcriptConfidence = 0;

        try {
            transcript = await transcribeAudio(fileBuffer, contentType);
            transcriptConfidence = transcript.length > 0 ? 0.9 : 0;
        } catch (sttError) {
            console.error('[STT Error]', sttError);
            // Non-blocking: save review even if transcription fails
            transcript = '';
            transcriptConfidence = 0;
        }

        // ── 7. Verify identity match ──
        let isVerified = false;
        if (email && tokenData.email === email) isVerified = true;
        if (phone && tokenData.phone_number === phone) isVerified = true;

        // ── 8. Save to Firestore (verified_reviews collection) ──
        const reviewData = {
            company_code: companyCode,
            reviewer_email: email || '',
            reviewer_phone: phone || '',
            reviewer_uid: tokenData.uid,
            user_name: userName || 'عميل بروكر',
            rating: Number(rating),
            comment: transcript, // Transcript as the review text
            verified: isVerified,
            review_type: 'audio',
            audio_url: audioUrl,
            audio_transcript: transcript,
            audio_duration_seconds: duration,
            transcript_confidence: transcriptConfidence,
            created_at: FieldValue.serverTimestamp(),
        };

        await reviewsRef.add(reviewData);

        // ── 9. Sync to Advertiser Document (so review appears on company page) ──
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
                        comment: transcript,
                        date: new Date().toISOString(),
                        verified: isVerified,
                        review_type: 'audio',
                        audio_url: audioUrl,
                        audio_transcript: transcript,
                        audio_duration_seconds: duration,
                        transcript_confidence: transcriptConfidence,
                    }),
                });
            }
        } catch (syncErr) {
            // Non-blocking: review is saved in verified_reviews even if sync fails
            console.error('[REVIEW SYNC ERROR]', syncErr);
        }

        return NextResponse.json({
            message: 'تم إرسال تقييمك الصوتي بنجاح 🎤✅',
            status: 'success',
            verified: isVerified,
            transcript,
            audioUrl,
        });
    } catch (err) {
        console.error('[AUDIO REVIEW POST ERROR]', err);
        return NextResponse.json(
            { error: 'حدث خطأ. حاول مرة أخرى.' },
            { status: 500 }
        );
    }
}

// ============================================
// 🧠 Speech-to-Text Helper
// Uses Google Cloud Speech-to-Text V2 REST API
// Model: chirp_2 (best for Arabic Saudi dialect)
// Region: us-central1 (chirp_2 only in us-central1, europe-west4, asia-southeast1)
// ============================================
async function transcribeAudio(audioBuffer: Buffer, _contentType: string): Promise<string> {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

    if (!projectId) {
        console.warn('[STT] No project ID configured');
        return '';
    }

    // Uses Application Default Credentials (automatic on Firebase App Hosting)
    const { GoogleAuth } = await import('google-auth-library');
    const auth = new GoogleAuth({
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();

    if (!accessToken.token) {
        console.warn('[STT] Could not obtain access token');
        return '';
    }

    // Chirp 2 requires v2 API with specific regional endpoint
    // Use autoDecodingConfig to let the API auto-detect encoding (WebM/Opus, MP4, WAV, etc.)
    const region = 'us-central1';
    const requestBody = {
        config: {
            autoDecodingConfig: {}, // Auto-detect audio encoding
            languageCodes: ['ar-SA'],
            model: 'chirp_2',
            features: {
                enableAutomaticPunctuation: true,
            },
        },
        content: audioBuffer.toString('base64'),
    };

    // V2 regional endpoint — chirp_2 is NOT available at global
    const endpoint = `https://${region}-speech.googleapis.com/v2/projects/${projectId}/locations/${region}/recognizers/_:recognize`;

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken.token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('[STT] API Error:', response.status, errorText);
        return '';
    }

    const data = await response.json();

    // Extract transcript from response
    const results = data.results || [];
    const transcript = results
        .map((r: { alternatives?: { transcript?: string }[] }) =>
            r.alternatives?.[0]?.transcript || ''
        )
        .join(' ')
        .trim();

    return transcript;
}
