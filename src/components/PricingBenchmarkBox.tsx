import Link from 'next/link';
import { pricingData } from '@/lib/pricing-data';

interface PricingBenchmarkBoxProps {
  citySlug: string;
  serviceSlug: string;
}

/**
 * مربع متوسط السعر وفق مؤشر بروكر
 * يُعرض في كل صفحة خدمة (Super Page) لتعزيز الربط الداخلي
 */
export default function PricingBenchmarkBox({
  citySlug,
  serviceSlug,
}: PricingBenchmarkBoxProps) {
  const entry = pricingData.find(
    (d) => d.citySlug === citySlug && d.serviceSlug === serviceSlug
  );

  if (!entry) return null;

  return (
    <aside className="bg-gradient-to-br from-blue-50 to-cyan-50 border-r-4 border-blue-600 p-5 rounded-xl my-8 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-blue-900 text-sm flex items-center gap-1.5">
            📊 متوسط السعر وفق مؤشر بروكر
          </h3>
          <p className="text-3xl font-black text-blue-700 mt-2">
            {entry.avgPrice}{' '}
            <span className="text-base font-medium text-blue-500">
              {entry.unit}
            </span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            بناءً على {entry.sampleCount} عرض سعر حقيقي في {entry.city}
          </p>
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-400">النطاق السعري</div>
          <div className="text-sm mt-1">
            <span className="text-green-700 font-bold">{entry.minPrice}</span>
            <span className="text-gray-400 mx-1">—</span>
            <span className="text-red-600 font-bold">{entry.maxPrice}</span>
          </div>
          <div
            className={`mt-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
              entry.quarterlyChange > 0
                ? 'bg-red-100 text-red-700'
                : entry.quarterlyChange < 0
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600'
            }`}
          >
            {entry.quarterlyChange > 0 ? '↑' : entry.quarterlyChange < 0 ? '↓' : '—'}
            {' '}{Math.abs(entry.quarterlyChange)}% ربعي
          </div>
        </div>
      </div>
      <Link
        href="/research/pricing-index"
        className="text-blue-600 text-xs underline mt-3 inline-block hover:text-blue-800 transition-colors"
      >
        عرض المؤشر الكامل لجميع المدن والخدمات ←
      </Link>
    </aside>
  );
}
