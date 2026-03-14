// ============================================
// LiveBlogPosting Schema — Freshness Signal
// Triggers Google's Query Deserves Freshness algorithm
// by presenting the page as a real-time live platform
// ============================================

interface LiveBlogPostingJsonLdProps {
    cityNameAr: string;
    serviceNameAr: string;
    citySlug: string;
    serviceSlug: string;
    availableTeams: number;
}

/**
 * Get current time in Riyadh (UTC+3) — works on any server timezone.
 */
function getRiyadhNow(): Date {
    const utcNow = new Date();
    // Shift to UTC+3 (Riyadh)
    return new Date(utcNow.getTime() + 3 * 60 * 60 * 1000);
}

export function LiveBlogPostingJsonLd({
    cityNameAr,
    serviceNameAr,
    citySlug,
    serviceSlug,
    availableTeams,
}: LiveBlogPostingJsonLdProps) {
    const riyadhNow = getRiyadhNow();
    const todayISO = riyadhNow.toISOString();

    // Coverage window: 6 AM → 11:59 PM Riyadh time
    const coverageStart = new Date(riyadhNow);
    coverageStart.setUTCHours(6, 0, 0, 0);
    const coverageEnd = new Date(riyadhNow);
    coverageEnd.setUTCHours(23, 59, 59, 0);

    const riyadhHour = riyadhNow.getUTCHours();
    const updates = generateLiveUpdates(cityNameAr, serviceNameAr, availableTeams, riyadhHour, riyadhNow);

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LiveBlogPosting',
        '@id': `https://prokr.co/${citySlug}/${serviceSlug}#live-availability`,
        headline: `حالة توفر فرق ${serviceNameAr} الآن في ${cityNameAr} — تحديث مباشر`,
        description: `متابعة لحظية لتوفر فرق العمل المعتمدة لخدمات ${serviceNameAr} في ${cityNameAr}. ${availableTeams} فريق متاح حالياً.`,
        coverageStartTime: coverageStart.toISOString(),
        coverageEndTime: coverageEnd.toISOString(),
        datePublished: coverageStart.toISOString(),
        dateModified: todayISO,
        author: {
            '@type': 'Organization',
            name: 'مركز عمليات بروكر',
            url: 'https://prokr.co',
        },
        publisher: {
            '@type': 'Organization',
            name: 'دليل بروكر للخدمات',
            url: 'https://prokr.co',
            logo: {
                '@type': 'ImageObject',
                url: 'https://prokr.co/icon.svg',
            },
        },
        about: {
            '@type': 'Service',
            name: serviceNameAr,
            areaServed: {
                '@type': 'City',
                name: cityNameAr,
                addressCountry: 'SA',
            },
        },
        liveBlogUpdate: updates,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ============================================
// DETERMINISTIC LIVE UPDATES GENERATOR
// Produces realistic updates based on Riyadh hour
// ============================================
function generateLiveUpdates(
    city: string,
    service: string,
    teams: number,
    hour: number,      // Riyadh hour (0-23)
    riyadhNow: Date,   // Already in Riyadh time
) {
    const isPeak = hour >= 8 && hour <= 12;
    const isAfternoon = hour >= 13 && hour <= 17;
    const isEvening = hour >= 18 && hour <= 22;

    const updates: Array<{
        '@type': string;
        headline: string;
        datePublished: string;
        articleBody: string;
    }> = [];

    // Latest update (current hour, :00)
    const latestTime = new Date(riyadhNow);
    latestTime.setUTCMinutes(0, 0, 0);
    updates.push({
        '@type': 'BlogPosting',
        headline: `${teams} فريق ${service} متاح الآن في ${city}`,
        datePublished: latestTime.toISOString(),
        articleBody: isPeak
            ? `ذروة الطلب: ${teams} فريق معتمد متاح حالياً لخدمات ${service} في ${city}. ننصح بالحجز المبكر لضمان التوفر.`
            : isAfternoon
                ? `${teams} فريق متاح لخدمات ${service} في ${city}. الأوقات المتاحة هذا المساء: مؤكدة.`
                : isEvening
                    ? `آخر تحديث مسائي: ${Math.max(1, teams - 2)} فريق لا يزال متاحاً لحجوزات ${service} في ${city} للغد الباكر.`
                    : `تحديث الصباح: ${teams} فريق يبدأ استقبال طلبات ${service} في ${city}.`,
    });

    // Previous update (2 hours ago, :30) — only if within today's coverage
    if (hour - 2 >= 6) {
        const prevTime = new Date(riyadhNow);
        prevTime.setUTCHours(hour - 2, 30, 0, 0);
        updates.push({
            '@type': 'BlogPosting',
            headline: `تأكيد توفر فرق ${service} في ${city}`,
            datePublished: prevTime.toISOString(),
            articleBody: `تم تأكيد توفر ${teams + 1} فريق معتمد بسجل تجاري ساري لخدمات ${service} في أحياء ${city} الرئيسية.`,
        });
    }

    // Earlier update (4 hours ago, :15) — only if within today's coverage
    if (hour - 4 >= 6) {
        const earlyTime = new Date(riyadhNow);
        earlyTime.setUTCHours(hour - 4, 15, 0, 0);
        updates.push({
            '@type': 'BlogPosting',
            headline: `تحديث أسعار ${service} في ${city}`,
            datePublished: earlyTime.toISOString(),
            articleBody: `مراجعة يومية لأسعار ${service} في ${city} — الأسعار مستقرة مع توفر عروض خاصة للحجز عبر بروكر.`,
        });
    }

    return updates;
}

