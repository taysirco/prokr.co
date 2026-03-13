import type {
    Advertiser,
    City,
    LocalBusinessSchema,
} from '@/types';

// ============================================
// ENHANCED LOCAL BUSINESS SCHEMA
// For individual company pages — includes Saudi sovereign identifiers
// ============================================
interface LocalBusinessJsonLdProps {
    advertiser: Advertiser;
    city?: City;
}

export function LocalBusinessJsonLd({ advertiser, city }: LocalBusinessJsonLdProps) {
    const reviews = advertiser.reviews || [];
    const avgRating = reviews.length > 0
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        : undefined;

    // Build identifier array (CRN + SBC) — kept for PropertyValue compatibility
    const identifiers: { '@type': 'PropertyValue'; propertyID: string; value: string; url?: string }[] = [];
    if (advertiser.crn) {
        identifiers.push({
            '@type': 'PropertyValue' as const,
            propertyID: 'رقم السجل التجاري السعودي (CRN)',
            value: advertiser.crn,
        });
    }
    if (advertiser.sbc_number) {
        identifiers.push({
            '@type': 'PropertyValue' as const,
            propertyID: 'شهادة المركز السعودي للأعمال (SBC)',
            value: advertiser.sbc_number,
            url: `https://business.sa/${advertiser.sbc_number}`,
        });
    }

    // 🚨 السجل السيادي الموحد (Unified Sovereign Credential Ledger) 🚨
    // جميع الاعتمادات الحكومية في مصفوفة واحدة — بدون تعارضات spread
    const sovereignCredentials: Record<string, unknown>[] = [];

    // 1. السجل التجاري — وزارة التجارة
    if (advertiser.crn) {
        sovereignCredentials.push({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Commercial Registration (CRN)',
            name: `سجل تجاري رقم ${advertiser.crn}`,
            recognizedBy: {
                '@type': 'GovernmentOrganization',
                name: 'وزارة التجارة — المملكة العربية السعودية',
                url: 'https://mc.gov.sa',
            },
        });
    }

    // 2. المركز السعودي للأعمال (SBC)
    if (advertiser.sbc_number) {
        sovereignCredentials.push({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Saudi Business Center Certificate',
            name: `شهادة SBC رقم ${advertiser.sbc_number}`,
            recognizedBy: {
                '@type': 'GovernmentOrganization',
                name: 'المركز السعودي للأعمال (SBC)',
                url: 'https://business.sa',
            },
        });
    }

    // 3. الفوترة الإلكترونية — ZATCA المرحلة الثانية
    if (advertiser.zatca_registered) {
        sovereignCredentials.push({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Tax Compliance — ZATCA Phase 2',
            name: 'الفوترة الإلكترونية — المرحلة الثانية (الربط والتكامل)',
            recognizedBy: {
                '@type': 'GovernmentOrganization',
                name: 'هيئة الزكاة والضريبة والجمارك (ZATCA)',
                url: 'https://zatca.gov.sa',
            },
        });
    }

    // 4. فريق بتحقق أمني — نفاذ (Nafath)
    if (advertiser.has_verified_employees) {
        sovereignCredentials.push({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Security Clearance — National Information Center',
            name: 'تحقق أمني وسجل جنائي نظيف',
            recognizedBy: {
                '@type': 'GovernmentOrganization',
                name: 'مركز المعلومات الوطني — منصة نفاذ (Nafath)',
                url: 'https://www.iam.gov.sa/',
            },
        });
    }

    // 5. تصنيف نطاقات — وزارة الموارد البشرية
    if (advertiser.nitaqat_band) {
        const bandLabel = advertiser.nitaqat_band === 'platinum' ? 'بلاتيني' :
                          advertiser.nitaqat_band === 'green' ? 'أخضر' : 'أخضر منخفض';
        sovereignCredentials.push({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: `Saudization Tier: ${advertiser.nitaqat_band}`,
            name: `تصنيف نطاقات: ${bandLabel}`,
            recognizedBy: {
                '@type': 'GovernmentOrganization',
                name: 'وزارة الموارد البشرية والتنمية الاجتماعية (HRSD)',
                url: 'https://hrsd.gov.sa',
            },
        });
    }

    const schema: LocalBusinessSchema & Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        '@id': `https://prokr.co/company/${advertiser.short_code}#business`,
        name: advertiser.business_name,
        telephone: advertiser.phone_number,
        url: `https://prokr.co/company/${advertiser.short_code}`,
        description: advertiser.description,
        image: advertiser.logo_url || '',
        priceRange: 'SAR',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'SA',
            addressRegion: city?.name_ar || 'المملكة العربية السعودية',
            addressLocality: city?.name_ar,
            ...(advertiser.street_address && { streetAddress: advertiser.street_address }),
            ...(advertiser.postal_code && { postalCode: advertiser.postal_code }),
        },
        // Sovereign identifiers (CRN + SBC)
        ...(identifiers.length > 0 && { identifier: identifiers }),
        // Google Maps location
        ...((advertiser.google_maps_url || advertiser.google_maps_place_id) && {
            location: {
                '@type': 'Place',
                ...(advertiser.google_maps_url && { sameAs: advertiser.google_maps_url }),
                ...(advertiser.google_maps_place_id && {
                    hasMap: `https://www.google.com/maps/place/?q=place_id:${advertiser.google_maps_place_id}`,
                }),
            },
        }),
        // Payment methods
        ...(advertiser.payment_methods && advertiser.payment_methods.length > 0 && {
            paymentAccepted: advertiser.payment_methods,
        }),
        // 🚨 السجل السيادي الموحد — Unified Sovereign Credential Ledger 🚨
        // جميع الاعتمادات الحكومية في مصفوفة واحدة بدون تعارضات
        ...(sovereignCredentials.length > 0 && { hasCredential: sovereignCredentials }),
        // Qiwa workforce compliance (ProgramMembership — separate from credentials)
        ...(advertiser.qiwa_registered && {
            memberOf: {
                '@type': 'ProgramMembership',
                programName: 'منصة قوى — عقود عمل موثقة ومنصة أجير للتأجير النظامي',
                hostingOrganization: {
                    '@type': 'GovernmentOrganization',
                    name: 'وزارة الموارد البشرية والتنمية الاجتماعية',
                    url: 'https://qiwa.sa',
                },
            },
        }),
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '09:00',
            closes: '18:00',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: advertiser.phone_number,
            contactType: 'customer service',
            areaServed: 'SA',
            availableLanguage: 'Arabic',
        },
        ...(avgRating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: Math.round(avgRating * 10) / 10,
                reviewCount: reviews.length,
                bestRating: 5,
                worstRating: 1,
            },
        }),
        ...(reviews.length > 0 && {
            review: reviews.slice(0, 5).map(r => ({
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: r.user,
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: r.rating,
                    bestRating: 5,
                    worstRating: 1,
                },
                reviewBody: r.comment,
                datePublished: new Date(r.date).toISOString().split('T')[0],
            })),
        }),
        ...(advertiser.gallery.length > 0 && {
            photo: advertiser.gallery.map(img => ({
                '@type': 'ImageObject',
                url: img,
            })),
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
