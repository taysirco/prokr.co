import { Metadata } from 'next';
import { BreadcrumbJsonLd, WebPageJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'سجّل شركتك مجاناً | أعلن في بروكر - دليل الخدمات السعودي',
    description: 'انضم إلى أكثر من 500 شركة خدمات في بروكر. سجّل شركتك مجاناً واحصل على عملاء جدد كل يوم في 24 مدينة سعودية. باقات إعلانية مميزة.',
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
        description: 'احصل على عملاء جدد في 24 مدينة سعودية',
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
            {children}
        </>
    );
}
