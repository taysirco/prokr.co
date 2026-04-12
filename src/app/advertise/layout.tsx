import { Metadata } from 'next';
import { BreadcrumbJsonLd, WebPageJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'سجّل شركتك مجاناً | أعلن في بروكر - دليل الخدمات السعودي',
    description: 'انضم إلى أكثر من 500 شركة خدمات في بروكر. سجّل شركتك مجاناً واحصل على عملاء جدد كل يوم في 30 مدينة سعودية. باقات إعلانية مميزة.',
    keywords: ['أعلن في بروكر', 'تسجيل شركة خدمات', 'إعلان شركة نقل عفش', 'إعلان شركة تنظيف', 'تسويق شركات خدمات'],
    openGraph: {
        title: 'سجّل شركتك مجاناً | بروكر',
        description: 'انضم لأكبر دليل خدمات في السعودية واحصل على عملاء جدد كل يوم',
        locale: 'ar_SA',
        type: 'website',
        siteName: 'بروكر',
        url: 'https://prokr.co/advertise',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'سجّل شركتك في بروكر مجاناً',
        description: 'احصل على عملاء جدد في 30 مدينة سعودية',
    },
    alternates: {
        canonical: 'https://prokr.co/advertise',
    },
};

const breadcrumbs = [
    { name: 'الرئيسية', url: 'https://prokr.co' },
    { name: 'أعلن في بروكر', url: 'https://prokr.co/advertise' },
];

export default function AdvertiseLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbs} />
            <WebPageJsonLd
                title="سجّل شركتك في بروكر"
                description="انضم لأكبر دليل خدمات في السعودية واحصل على عملاء جدد"
                url="https://prokr.co/advertise"
                breadcrumbs={breadcrumbs}
            />
            {/* FAQPage — advertiser questions */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "هل تسجيل شركتي في بروكر مجاني؟",
                            "acceptedAnswer": { "@type": "Answer", "text": "نعم، التسجيل الأساسي في بروكر مجاني تماماً. يمكنك إضافة شركتك وعرض خدماتك بدون أي رسوم. تتوفر أيضاً باقات مميزة (Premium) للشركات التي تريد ظهوراً أعلى وميزات إضافية." }
                        },
                        {
                            "@type": "Question",
                            "name": "كيف أسجل شركتي في بروكر؟",
                            "acceptedAnswer": { "@type": "Answer", "text": "قم بتعبئة نموذج التسجيل مع بيانات شركتك: الاسم التجاري، رقم السجل التجاري، الخدمات المقدمة، المدن المغطاة، ورقم الجوال. سيتم مراجعة طلبك وتفعيل حسابك خلال 24 ساعة." }
                        },
                        {
                            "@type": "Question",
                            "name": "ما هي شروط التسجيل في بروكر؟",
                            "acceptedAnswer": { "@type": "Answer", "text": "يجب أن تمتلك الشركة سجل تجاري ساري من وزارة التجارة السعودية، ورقم جوال سعودي للتواصل. يتم التحقق من جميع الشركات قبل إضافتها لضمان جودة الخدمات." }
                        },
                        {
                            "@type": "Question",
                            "name": "كم عدد العملاء الذين سأحصل عليهم من بروكر؟",
                            "acceptedAnswer": { "@type": "Answer", "text": "يعتمد ذلك على نوع الخدمة والمدينة والباقة المختارة. الشركات المميزة (Premium) تحصل على 3-5 أضعاف الاستفسارات مقارنة بالحسابات المجانية. بروكر يستقبل آلاف الزوار شهرياً من عملاء يبحثون فعلياً عن الخدمات." }
                        }
                    ]
                }) }}
            />
            {children}
        </>
    );
}
