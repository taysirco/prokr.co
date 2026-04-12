import { Metadata } from 'next';
import { BreadcrumbJsonLd, WebPageJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'تواصل معنا | بروكر - دليل الخدمات السعودي',
    description: 'تواصل مع فريق بروكر لأي استفسار أو اقتراح. نحن هنا لمساعدتك في إيجاد أفضل شركات الخدمات في السعودية.',
    keywords: ['تواصل معنا', 'بروكر', 'دعم العملاء', 'اتصل بنا', 'خدمة العملاء'],
    openGraph: {
        title: 'تواصل معنا | بروكر',
        description: 'تواصل مع فريق بروكر لأي استفسار أو اقتراح',
        locale: 'ar_SA',
        type: 'website',
        siteName: 'بروكر',
        url: 'https://prokr.co/contact-us',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'تواصل معنا | بروكر',
        description: 'تواصل مع فريق بروكر لأي استفسار',
    },
    alternates: {
        canonical: 'https://prokr.co/contact-us',
    },
};

const breadcrumbs = [
    { name: 'الرئيسية', url: 'https://prokr.co' },
    { name: 'تواصل معنا', url: 'https://prokr.co/contact-us' },
];

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbs} />
            <WebPageJsonLd
                title="تواصل معنا"
                description="تواصل مع فريق بروكر لأي استفسار أو اقتراح"
                url="https://prokr.co/contact-us"
                breadcrumbs={breadcrumbs}
            />
            {/* ContactPage + Organization Contact Details — E-E-A-T Trust */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "اتصل بنا — بروكر",
                    "url": "https://prokr.co/contact-us",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "بروكر",
                        "url": "https://prokr.co",
                        "telephone": "+966542317431",
                        "email": "info@prokr.co",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "الرياض",
                            "addressCountry": "SA"
                        },
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+966542317431",
                                "contactType": "customer service",
                                "availableLanguage": ["Arabic", "English"],
                                "areaServed": "SA",
                                "hoursAvailable": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Saturday"],
                                    "opens": "08:00",
                                    "closes": "22:00"
                                }
                            },
                            {
                                "@type": "ContactPoint",
                                "telephone": "+966542317431",
                                "contactType": "sales",
                                "availableLanguage": ["Arabic"],
                                "areaServed": "SA"
                            }
                        ]
                    }
                }) }}
            />
            {/* FAQPage — contact-level */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "كيف أتواصل مع بروكر؟",
                            "acceptedAnswer": { "@type": "Answer", "text": "يمكنك التواصل مع بروكر عبر الهاتف أو واتساب على الرقم +966542317431، أو عبر البريد الإلكتروني info@prokr.co، أو من خلال نموذج الاتصال في صفحة تواصل معنا." }
                        },
                        {
                            "@type": "Question",
                            "name": "ما هي ساعات عمل فريق دعم بروكر؟",
                            "acceptedAnswer": { "@type": "Answer", "text": "فريق دعم بروكر متاح على مدار الساعة عبر واتساب والبريد الإلكتروني. الاتصال الهاتفي متاح من 8 صباحاً حتى 10 مساءً بتوقيت السعودية." }
                        },
                        {
                            "@type": "Question",
                            "name": "كيف أقدم شكوى على شركة في بروكر؟",
                            "acceptedAnswer": { "@type": "Answer", "text": "يمكنك تقديم شكوى عبر نموذج الاتصال مع اختيار 'شكوى' كموضوع الرسالة. سيتم مراجعة شكواك خلال 24 ساعة واتخاذ الإجراء المناسب." }
                        }
                    ]
                }) }}
            />
            {children}
        </>
    );
}
