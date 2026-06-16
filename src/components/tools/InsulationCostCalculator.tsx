'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

/**
 * InsulationCostCalculator — interactive roof/surface insulation cost estimator.
 *
 * Type base rates (SAR/m²) are adjusted by a per-city cost factor derived from
 * Prokr's first-party roof-insulation pricing index (cityAvg ÷ nationalAvg),
 * plus a surface-condition multiplier. Output is an indicative range, not a quote.
 */

export interface CityFactor {
    slug: string;
    name: string;
    avg: number; // city roof-insulation avg (SAR/m²) from the pricing index
}

interface Props {
    cityBases: CityFactor[];
    nationalAvg: number; // national roof-insulation avg (SAR/m²)
}

const TYPES = [
    { key: 'water', label: 'عزل مائي', rate: 22, note: 'لمنع تسرب المياه' },
    { key: 'thermal', label: 'عزل حراري', rate: 30, note: 'لتقليل الحرارة وفاتورة الكهرباء' },
    { key: 'foam', label: 'عزل فوم (بولي يوريثان)', rate: 110, note: 'مائي + حراري معاً، الأطول عمراً' },
] as const;

const CONDITIONS = [
    { key: 'good', label: 'سطح جيد وجاهز', m: 1.0 },
    { key: 'prep', label: 'يحتاج تجهيز/ترميم', m: 1.2 },
] as const;

const roundTo50 = (n: number) => Math.round(n / 50) * 50;
const sar = (n: number) => n.toLocaleString('en-US');

export default function InsulationCostCalculator({ cityBases, nationalAvg }: Props) {
    const [area, setArea] = useState<number>(200);
    const [type, setType] = useState<string>('water');
    const [citySlug, setCitySlug] = useState(cityBases[0]?.slug ?? 'other');
    const [condition, setCondition] = useState<string>('good');

    const result = useMemo(() => {
        const safeArea = Number.isFinite(area) && area > 0 ? area : 0;
        const rate = TYPES.find(t => t.key === type)?.rate ?? 22;
        const cityAvg = cityBases.find(c => c.slug === citySlug)?.avg ?? nationalAvg;
        const cityFactor = nationalAvg > 0 ? cityAvg / nationalAvg : 1;
        const mCond = CONDITIONS.find(c => c.key === condition)?.m ?? 1;
        const perMeter = rate * cityFactor * mCond;
        const estimate = perMeter * safeArea;
        return {
            perMeterLow: Math.round(perMeter * 0.85),
            perMeterHigh: Math.round(perMeter * 1.2),
            low: roundTo50(estimate * 0.85),
            high: roundTo50(estimate * 1.2),
            mid: roundTo50(estimate),
            hasArea: safeArea > 0,
        };
    }, [area, type, citySlug, condition, cityBases, nationalAvg]);

    const selectCls =
        'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition';
    const labelCls = 'block text-sm font-bold text-gray-700 mb-2';

    return (
        <div dir="rtl" className="grid gap-6 lg:grid-cols-5">
            {/* Inputs */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label className={labelCls} htmlFor="ic-area">مساحة السطح (م²)</label>
                        <input
                            id="ic-area" type="number" min={0} inputMode="numeric"
                            className={selectCls} value={Number.isFinite(area) ? area : ''}
                            onChange={e => setArea(parseFloat(e.target.value))}
                        />
                    </div>
                    <div>
                        <label className={labelCls} htmlFor="ic-type">نوع العزل</label>
                        <select id="ic-type" className={selectCls} value={type} onChange={e => setType(e.target.value)}>
                            {TYPES.map(t => <option key={t.key} value={t.key}>{t.label}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className={labelCls} htmlFor="ic-city">المدينة</label>
                        <select id="ic-city" className={selectCls} value={citySlug} onChange={e => setCitySlug(e.target.value)}>
                            {cityBases.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                            <option value="other">مدينة أخرى</option>
                        </select>
                    </div>
                    <div>
                        <label className={labelCls} htmlFor="ic-cond">حالة السطح</label>
                        <select id="ic-cond" className={selectCls} value={condition} onChange={e => setCondition(e.target.value)}>
                            {CONDITIONS.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
                        </select>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                    💡 العزل الفوم أعلى تكلفة لكنه يجمع المائي والحراري وأطول عمراً. السطح الذي يحتاج تجهيزاً تزيد تكلفته.
                </p>
            </div>

            {/* Result */}
            <div className="lg:col-span-2 bg-gradient-to-bl from-amber-50 to-amber-100 rounded-2xl border border-amber-200 p-6 flex flex-col">
                <p className="text-sm font-bold text-amber-900 mb-1">التكلفة التقديرية</p>
                <div className="text-3xl font-extrabold text-amber-700 leading-tight my-2" aria-live="polite">
                    {result.hasArea ? `${sar(result.low)} – ${sar(result.high)}` : '—'}
                    <span className="text-lg font-bold text-amber-600"> ر.س</span>
                </div>
                <p className="text-xs text-amber-800/80 mb-4">
                    {result.hasArea
                        ? `نطاق تقديري — حوالي ${sar(result.perMeterLow)}–${sar(result.perMeterHigh)} ر.س للمتر`
                        : 'أدخل مساحة السطح للحساب'}
                </p>

                <div className="bg-white/70 rounded-xl p-4 text-sm text-gray-700 space-y-1.5 mb-4">
                    <p className="font-bold text-gray-800 mb-1">كيف حسبناها؟</p>
                    <p>سعر المتر حسب نوع العزل، معدّلاً بمؤشر تكلفة مدينتك من مؤشر بروكر وحالة السطح، مضروباً في المساحة.</p>
                </div>

                <Link
                    href="/roof-insulation"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl px-5 py-3 transition-colors"
                >
                    قارن عروض شركات عزل موثّقة
                </Link>
                <p className="text-[11px] text-amber-900/70 mt-3 leading-relaxed">
                    ⚠️ تقدير إرشادي وليس عرض سعر. السعر النهائي يحتاج معاينة. اطلب ضماناً مكتوباً على العزل.
                </p>
            </div>
        </div>
    );
}
