import { pricingData, getPricingStats } from '@/lib/pricing-data';

export async function GET() {
  const stats = getPricingStats(pricingData);

  const response = {
    meta: {
      source: 'المركز البحثي لدليل بروكر',
      url: 'https://prokr.co/research/pricing-index',
      updated: stats.lastUpdated,
      total_samples: stats.totalSamples,
      cities: stats.cities,
      services: stats.services,
      license: 'CC BY-SA 4.0',
      citation:
        'دليل بروكر. (2026). مؤشر أسعار الخدمات المنزلية السعودية. prokr.co/research/pricing-index',
    },
    data: pricingData.map((d) => ({
      city: d.city,
      city_en: d.cityEn,
      city_slug: d.citySlug,
      service: d.service,
      service_en: d.serviceEn,
      service_slug: d.serviceSlug,
      min_price: d.minPrice,
      max_price: d.maxPrice,
      avg_price: d.avgPrice,
      median_price: d.medianPrice,
      sample_count: d.sampleCount,
      unit: d.unit,
      last_updated: d.lastUpdated,
      quarterly_change_pct: d.quarterlyChange,
    })),
  };

  return Response.json(response, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
