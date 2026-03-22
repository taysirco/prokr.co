// ============================================
// 🎤 AudioObject Schema — البصمة الصوتية
// JSON-LD Review + AudioObject for voice reviews
// Provides anti-fraud SEO signal to Google
// ============================================

interface AudioReviewSchemaProps {
    reviews: {
        userName: string;
        rating: number;
        audioUrl: string;
        transcript: string;
        durationSeconds: number;
        date: string;
    }[];
    businessName: string;
    pageUrl: string;
}

export function AudioReviewSchema({ reviews, businessName, pageUrl }: AudioReviewSchemaProps) {
    if (!reviews || reviews.length === 0) return null;

    const schema = {
        '@context': 'https://schema.org',
        '@graph': reviews.map((review, index) => ({
            '@type': 'Review',
            '@id': `${pageUrl}#audio-review-${index}`,
            itemReviewed: {
                '@type': 'LocalBusiness',
                '@id': `${pageUrl}#business`,
                name: businessName,
            },
            reviewBody: review.transcript,
            reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating,
                bestRating: 5,
                worstRating: 1,
            },
            author: {
                '@type': 'Person',
                name: review.userName,
            },
            datePublished: review.date,
            associatedMedia: {
                '@type': 'AudioObject',
                contentUrl: review.audioUrl,
                encodingFormat: 'audio/webm',
                duration: `PT${review.durationSeconds}S`,
                transcript: review.transcript,
                description: `تقييم صوتي مُوثّق من عميل حقيقي لـ ${businessName}`,
                inLanguage: 'ar-SA',
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
