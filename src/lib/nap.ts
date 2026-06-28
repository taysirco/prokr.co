// ============================================
// NAP (Name, Address, Phone) Constants
// Single source of truth for business info across all pages and schemas
// ============================================

export const NAP = {
    name: 'بروكر الخدمي',
    nameEn: 'Prokr',
    url: 'https://prokr.co',
    phone: '+966542317431',
    phoneDisplay: '+966 54 231 7431',
    email: 'info@prokr.co',
    address: {
        country: 'المملكة العربية السعودية',
        countryCode: 'SA',
    },
    social: {
        twitter: 'https://twitter.com/prokr_sa',
        instagram: 'https://www.instagram.com/prokr_sa',
        facebook: 'https://www.facebook.com/prokr.sa',
    },
    logo: 'https://prokr.co/logo.png',
    description: 'دليل شامل لأفضل شركات الخدمات في المملكة العربية السعودية',
    // Legal entity identifiers — E-E-A-T / entity verification
    legal: {
        crn: '4030253566',          // السجل التجاري — وزارة التجارة
        vatId: '311280328300003',   // الرقم الضريبي (VAT) — هيئة الزكاة والضريبة والجمارك
    },
} as const;
