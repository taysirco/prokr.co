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
            {children}
        </>
    );
}
