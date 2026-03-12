import { pricingData, pricingToCSV } from '@/lib/pricing-data';

export async function GET() {
  const csv = '\uFEFF' + pricingToCSV(pricingData); // BOM for Excel Arabic

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition':
        'attachment; filename="prokr-pricing-index-2026.csv"',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
