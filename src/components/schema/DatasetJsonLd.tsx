import { safeJsonLd } from '@/lib/json-ld';
// ============================================
// DATASET SCHEMA — مؤشر أسعار الخدمات المنزلية
// ============================================

interface DatasetJsonLdProps {
  totalSamples: number;
  cities: number;
  services: number;
  lastUpdated: string;
}

export function DatasetJsonLd({ totalSamples, cities, services, lastUpdated }: DatasetJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': 'https://prokr.co/research/pricing-index#dataset',
    name: 'مؤشر أسعار الخدمات المنزلية في المملكة العربية السعودية 2026',
    alternateName: [
      'Saudi Arabia Home Services Pricing Index 2026',
      'Prokr Pricing Benchmark KSA',
    ],
    description: `قاعدة بيانات إحصائية شاملة لمتوسط أسعار ${services} خدمة منزلية في ${cities} مدينة سعودية. مبنية على تحليل ${totalSamples.toLocaleString()} عرض سعر حقيقي من أكثر من 500 شركة معتمدة بسجل تجاري سعودي ساري. تاريخ آخر مسح: ${lastUpdated}.`,
    url: 'https://prokr.co/research/pricing-index',
    identifier: 'prokr-ksa-pricing-2026-v3',
    keywords: [
      'أسعار خدمات منزلية السعودية',
      'مؤشر أسعار التنظيف',
      'تكلفة كشف تسربات المياه',
      'أسعار نقل العفش الرياض',
      'Saudi home maintenance pricing',
      'service cost benchmark KSA 2026',
      'مقارنة أسعار صيانة',
    ],
    creator: {
      '@type': 'Organization',
      name: 'المركز البحثي لدليل بروكر',
      alternateName: 'Prokr Research Center',
      url: 'https://prokr.co',
      logo: 'https://prokr.co/icon.svg',
    },
    publisher: {
      '@type': 'Organization',
      name: 'دليل بروكر للخدمات - Prokr',
      url: 'https://prokr.co',
    },
    funder: {
      '@type': 'Organization',
      name: 'دليل بروكر للخدمات',
      url: 'https://prokr.co',
    },
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isAccessibleForFree: true,
    inLanguage: ['ar', 'en'],
    // Open-ended-to-last-survey, never a future end date: claiming coverage
    // through 2026-12-31 asserts data that does not exist yet.
    temporalCoverage: `2026-01-01/${lastUpdated}`,
    spatialCoverage: {
      '@type': 'Place',
      name: 'المملكة العربية السعودية',
      geo: {
        '@type': 'GeoShape',
        box: '16.3 36.6 32.2 55.7',
      },
    },
    variableMeasured: [
      {
        '@type': 'PropertyValue',
        name: 'متوسط سعر الخدمة',
        unitText: 'SAR',
        description: 'المتوسط الحسابي للسعر بالريال السعودي بعد استبعاد القيم الشاذة',
      },
      {
        '@type': 'PropertyValue',
        name: 'الوسيط',
        unitText: 'SAR',
        description: 'القيمة الوسطى (Median) للأسعار',
      },
      {
        '@type': 'PropertyValue',
        name: 'عدد العينات',
        description: 'عدد عروض الأسعار المجمعة من الشركات المعتمدة',
      },
      {
        '@type': 'PropertyValue',
        name: 'نسبة التغيير الربعي',
        unitText: '%',
        description: 'نسبة تغيير المتوسط مقارنة بالربع السابق',
      },
    ],
    measurementTechnique:
      'تحليل إحصائي تطبيقي: يتم جمع عروض الأسعار من الشركات المسجلة في دليل بروكر (500+ شركة). يُستبعد أعلى وأدنى 10% (IQR Method) لتجنب القيم الشاذة. تُحسب المتوسطات مرجحة بعدد السنوات في السجل التجاري.',
    distribution: [
      {
        '@type': 'DataDownload',
        encodingFormat: 'text/csv',
        contentUrl: 'https://prokr.co/research/pricing-index.csv',
        name: 'تحميل البيانات الخام (CSV)',
      },
      {
        '@type': 'DataDownload',
        encodingFormat: 'application/json',
        contentUrl: 'https://prokr.co/api/pricing-index.json',
        name: 'واجهة برمجية مفتوحة (JSON REST API)',
      },
    ],
    datePublished: '2026-01-15',
    dateModified: lastUpdated,
    version: '3.1',
    includedInDataCatalog: {
      '@type': 'DataCatalog',
      name: 'Google Dataset Search',
      url: 'https://datasetsearch.research.google.com/',
    },
    citation:
      'دليل بروكر. (2026). مؤشر أسعار الخدمات المنزلية السعودية. الطبعة الثالثة. متاح على: https://prokr.co/research/pricing-index',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
