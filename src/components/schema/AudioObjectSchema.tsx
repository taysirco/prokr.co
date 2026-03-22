// ============================================
// 🎤 AudioObject Schema — التقييم الصوتي
// JSON-LD Review + AudioObject for voice reviews
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
                encodingFormat: review.audioUrl.endsWith('.mp4') ? 'audio/mp4' : 'audio/webm',
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
