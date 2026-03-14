import type { City, Service } from '@/types';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/locale-formatting';

// ============================================
// HOWTO SCHEMA
// For service selection guidance on silo pages
// ============================================
interface HowToJsonLdProps {
    service: Service;
    city: City;
}

export function HowToJsonLd({ service, city }: HowToJsonLdProps) {
    const kwProfile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, kwProfile.cityPrefixPattern);
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `كيف تختار أفضل شركة ${service.name_ar} ${cityKw}`,
        description: `دليل خطوة بخطوة لاختيار شركة ${service.name_ar} موثوقة ${cityKw}`,
        step: [
            {
                '@type': 'HowToStep',
                position: 1,
                name: 'حدد احتياجاتك بدقة',
                text: `حدد نوع الخدمة المطلوبة وحجم العمل قبل التواصل مع شركات ${service.name_ar} ${cityKw}.`,
            },
            {
                '@type': 'HowToStep',
                position: 2,
                name: 'قارن بين العروض',
                text: `احصل على عروض أسعار من 3 شركات ${service.name_ar} على الأقل ${cityKw} وقارن بينها.`,
            },
            {
                '@type': 'HowToStep',
                position: 3,
                name: 'تحقق من الترخيص',
                text: 'تأكد من أن الشركة مرخصة ومعتمدة رسمياً من الجهات المختصة.',
            },
            {
                '@type': 'HowToStep',
                position: 4,
                name: 'اقرأ تقييمات العملاء',
                text: 'راجع تقييمات وتجارب العملاء السابقين للتأكد من جودة الخدمة.',
            },
            {
                '@type': 'HowToStep',
                position: 5,
                name: 'احجز الخدمة',
                text: `تواصل مع الشركة المختارة واتفق على الموعد والسعر النهائي لخدمة ${service.name_ar}.`,
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
