'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

/**
 * MovingCostCalculator — interactive furniture-moving cost estimator.
 *
 * Grounded in Prokr's first-party pricing index (furniture-moving avg per city)
 * passed in via `cityBases`. The city average represents a typical 3-room,
 * same-city move; transparent multipliers adjust for home size, floor/elevator,
 * packing, and intercity distance. Output is an indicative range, not a quote.
 */

export interface CityBase {
    slug: string;
    name: string;
    avg: number;
}

interface Props {
    cityBases: CityBase[];
    /** National fallback average for "other city". */
    nationalAvg: number;
}

const HOME_SIZES = [
    { key: 'studio', label: 'استوديو / غرفة واحدة', m: 0.55 },
    { key: '2rooms', label: 'شقة غرفتين', m: 0.78 },
    { key: '3rooms', label: 'شقة 3 غرف (المرجع)', m: 1.0 },
    { key: '4rooms', label: 'شقة 4 غرف', m: 1.35 },
    { key: 'small_villa', label: 'فيلا صغيرة (دورين)', m: 1.75 },
    { key: 'large_villa', label: 'فيلا كبيرة', m: 2.3 },
] as const;

const FLOORS = [
    { key: 'ground_or_elevator', label: 'أرضي أو يوجد مصعد', m: 1.0 },
    { key: 'low_no_elevator', label: 'دور 1–2 بدون مصعد', m: 1.12 },
    { key: 'high_no_elevator', label: 'دور 3 فأعلى بدون مصعد', m: 1.28 },
] as const;

const PACKING = [
    { key: 'none', label: 'بدون تغليف', m: 1.0 },
    { key: 'partial', label: 'تغليف جزئي (القطع القابلة للكسر)', m: 1.15 },
    { key: 'full', label: 'تغليف كامل + فك وتركيب', m: 1.35 },
] as const;

const DISTANCE = [
    { key: 'same', label: 'داخل نفس المدينة', m: 1.0 },
    { key: 'near', label: 'مدينة قريبة (أقل من 300 كم)', m: 1.5 },
    { key: 'far', label: 'مدينة بعيدة (أكثر من 300 كم)', m: 2.1 },
] as const;

const roundTo50 = (n: number) => Math.round(n / 50) * 50;
const sar = (n: number) => n.toLocaleString('en-US');

export default function MovingCostCalculator({ cityBases, nationalAvg }: Props) {
    const [citySlug, setCitySlug] = useState(cityBases[0]?.slug ?? 'other');
    const [homeSize, setHomeSize] = useState<string>('3rooms');
    const [floor, setFloor] = useState<string>('ground_or_elevator');
    const [packing, setPacking] = useState<string>('partial');
    const [distance, setDistance] = useState<string>('same');

    const result = useMemo(() => {
        const base = cityBases.find(c => c.slug === citySlug)?.avg ?? nationalAvg;
        const mSize = HOME_SIZES.find(s => s.key === homeSize)?.m ?? 1;
        const mFloor = FLOORS.find(f => f.key === floor)?.m ?? 1;
        const mPack = PACKING.find(p => p.key === packing)?.m ?? 1;
        const mDist = DISTANCE.find(d => d.key === distance)?.m ?? 1;
        const estimate = base * mSize * mFloor * mPack * mDist;
        return {
            base,
            low: roundTo50(estimate * 0.85),
            high: roundTo50(estimate * 1.2),
            mid: roundTo50(estimate),
        };
    }, [citySlug, homeSize, floor, packing, distance, cityBases, nationalAvg]);

    const selectCls =
        'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition';
    const labelCls = 'block text-sm font-bold text-gray-700 mb-2';

    return (
        <div dir="rtl" className="grid gap-6 lg:grid-cols-5">
            {/* Inputs */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label className={labelCls} htmlFor="mc-city">المدينة</label>
                        <select id="mc-city" className={selectCls} value={citySlug} onChange={e => setCitySlug(e.target.value)}>
                            {cityBases.map(c => (
                                <option key={c.slug} value={c.slug}>{c.name}</option>
                            ))}
                            <option value="other">مدينة أخرى</option>
                        </select>
                    </div>
                    <div className="sm:col-span-2">
                        <label className={labelCls} htmlFor="mc-size">حجم المنزل</label>
                        <select id="mc-size" className={selectCls} value={homeSize} onChange={e => setHomeSize(e.target.value)}>
                            {HOME_SIZES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className={labelCls} htmlFor="mc-floor">الدور والمصعد</label>
                        <select id="mc-floor" className={selectCls} value={floor} onChange={e => setFloor(e.target.value)}>
                            {FLOORS.map(f => <option key={f.key} value={f.key}>{f.label}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className={labelCls} htmlFor="mc-pack">خدمة التغليف</label>
                        <select id="mc-pack" className={selectCls} value={packing} onChange={e => setPacking(e.target.value)}>
                            {PACKING.map(p => <option key={p.key} value={p.key}>{p.label}</option>)}
                        </select>
                    </div>
                    <div className="sm:col-span-2">
                        <label className={labelCls} htmlFor="mc-dist">المسافة</label>
                        <select id="mc-dist" className={selectCls} value={distance} onChange={e => setDistance(e.target.value)}>
                            {DISTANCE.map(d => <option key={d.key} value={d.key}>{d.label}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Result */}
            <div className="lg:col-span-2 bg-gradient-to-bl from-sky-50 to-sky-100 rounded-2xl border border-sky-200 p-6 flex flex-col">
                <p className="text-sm font-bold text-sky-900 mb-1">التكلفة التقديرية</p>
                <div className="text-3xl font-extrabold text-sky-700 leading-tight my-2" aria-live="polite">
                    {sar(result.low)} – {sar(result.high)}
                    <span className="text-lg font-bold text-sky-600"> ر.س</span>
                </div>
                <p className="text-xs text-sky-800/80 mb-4">نطاق تقديري — متوسط تقريبي {sar(result.mid)} ر.س</p>

                <div className="bg-white/70 rounded-xl p-4 text-sm text-gray-700 space-y-1.5 mb-4">
                    <p className="font-bold text-gray-800 mb-1">كيف حسبناها؟</p>
                    <p>الأساس: متوسط سعر نقل العفش في المدينة من مؤشر بروكر، معدّلاً حسب حجم المنزل والدور والتغليف والمسافة.</p>
                </div>

                <Link
                    href="/furniture-moving"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl px-5 py-3 transition-colors"
                >
                    قارن عروض شركات موثّقة
                </Link>
                <p className="text-[11px] text-sky-900/70 mt-3 leading-relaxed">
                    ⚠️ هذا تقدير إرشادي وليس عرض سعر. السعر النهائي يحتاج معاينة. لا تدفع أكثر من 20% مقدماً واطلب عقداً مكتوباً.
                </p>
            </div>
        </div>
    );
}
