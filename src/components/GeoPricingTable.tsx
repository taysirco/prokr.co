import { getGeoPricing } from '@/lib/geo-pricing-data';
import type { MovingRoute, CleaningZone, PestPricing, LeakPricing, InsulationPricing, SewagePricing, ACPricing } from '@/lib/geo-pricing-data';

interface GeoPricingTableProps {
    citySlug: string;
    cityName: string;
    serviceSlug: string;
    serviceName: string;
}

// ============ TABLE HEADERS ============

const HEADERS: Record<string, { icon: string; title: string; subtitle: string }> = {
    moving: { icon: '🚚', title: 'التسعير الجغرافي لنقل العفش', subtitle: 'أسعار تقديرية حسب مسارات النقل بين الأحياء — تختلف حسب الوقت والازدحام وعدد القطع' },
    cleaning: { icon: '🧹', title: 'تسعير التنظيف حسب الحي ونوع العقار', subtitle: 'الأسعار بالريال — تختلف حسب المساحة ونوع الحي وحالة العقار' },
    'pest-control': { icon: '🦟', title: 'تسعير المكافحة حسب نوع الآفة والمساحة', subtitle: 'الأسعار بالريال — تشمل المبيدات والعمالة وضمان ما بعد الرش' },
    'leak-detection': { icon: '💧', title: 'تسعير كشف التسربات حسب نوع الفحص', subtitle: 'الأسعار بالريال — تختلف حسب عمر المبنى ونوع الأنابيب' },
    insulation: { icon: '🏗️', title: 'تسعير العزل حسب النوع والمساحة', subtitle: 'السعر بالمتر المربع — الحد الأدنى يطبق على المساحات الصغيرة' },
    sewage: { icon: '🚽', title: 'تسعير الصرف الصحي حسب حجم البيارة', subtitle: 'الأسعار بالريال — تختلف حسب البعد عن محطة المعالجة' },
    ac: { icon: '❄️', title: 'تسعير صيانة المكيفات حسب النوع', subtitle: 'الأسعار بالريال — تختلف حسب نوع المكيف والموسم' },
};

// ============ TABLE RENDERERS ============

function MovingTable({ data, cityName }: { data: MovingRoute[]; cityName: string }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-blue-50 text-blue-900">
                        <th className="text-right p-3 font-bold rounded-tr-lg">🚚 مسار النقل ({cityName})</th>
                        <th className="text-center p-3 font-bold">السعر التقديري</th>
                        <th className="text-right p-3 font-bold rounded-tl-lg">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <td className="p-3 font-medium text-gray-900">من {row.from} → {row.to}</td>
                            <td className="p-3 text-center font-bold text-blue-700">{row.priceRange}</td>
                            <td className="p-3 text-gray-600 text-xs">{row.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function CleaningTable({ data, cityName }: { data: CleaningZone[]; cityName: string }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-emerald-50 text-emerald-900">
                        <th className="text-right p-3 font-bold rounded-tr-lg">🏘️ الحي / المنطقة ({cityName})</th>
                        <th className="text-center p-3 font-bold">شقة غرفتين</th>
                        <th className="text-center p-3 font-bold">شقة 3 غرف</th>
                        <th className="text-center p-3 font-bold">فيلا صغيرة</th>
                        <th className="text-center p-3 font-bold rounded-tl-lg">فيلا كبيرة</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <td className="p-3 font-medium text-gray-900 whitespace-nowrap">{row.zone}</td>
                            <td className="p-3 text-center text-emerald-700 font-medium">{row.twoRoom}</td>
                            <td className="p-3 text-center text-emerald-700 font-medium">{row.threeRoom}</td>
                            <td className="p-3 text-center text-emerald-700 font-medium">{row.smallVilla}</td>
                            <td className="p-3 text-center text-emerald-700 font-medium">{row.largeVilla}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function PestTable({ data }: { data: PestPricing[] }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-red-50 text-red-900">
                        <th className="text-right p-3 font-bold rounded-tr-lg">🦟 نوع الآفة</th>
                        <th className="text-center p-3 font-bold">&lt;200م²</th>
                        <th className="text-center p-3 font-bold">200-500م²</th>
                        <th className="text-center p-3 font-bold">&gt;500م²</th>
                        <th className="text-right p-3 font-bold rounded-tl-lg">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <td className="p-3 font-medium text-gray-900">{row.pest}</td>
                            <td className="p-3 text-center text-red-700 font-medium">{row.smallArea}</td>
                            <td className="p-3 text-center text-red-700 font-medium">{row.mediumArea}</td>
                            <td className="p-3 text-center text-red-700 font-medium">{row.largeArea}</td>
                            <td className="p-3 text-gray-600 text-xs">{row.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function LeakTable({ data }: { data: LeakPricing[] }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-cyan-50 text-cyan-900">
                        <th className="text-right p-3 font-bold rounded-tr-lg">💧 نوع الكشف</th>
                        <th className="text-center p-3 font-bold">عقار جديد (&lt;5 سنوات)</th>
                        <th className="text-center p-3 font-bold">عقار متوسط (5-15)</th>
                        <th className="text-center p-3 font-bold">عقار قديم (&gt;15)</th>
                        <th className="text-right p-3 font-bold rounded-tl-lg">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <td className="p-3 font-medium text-gray-900">{row.type}</td>
                            <td className="p-3 text-center text-cyan-700 font-medium">{row.newBuilding}</td>
                            <td className="p-3 text-center text-cyan-700 font-medium">{row.midBuilding}</td>
                            <td className="p-3 text-center text-cyan-700 font-medium">{row.oldBuilding}</td>
                            <td className="p-3 text-gray-600 text-xs">{row.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function InsulationTable({ data }: { data: InsulationPricing[] }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-amber-50 text-amber-900">
                        <th className="text-right p-3 font-bold rounded-tr-lg">🏗️ نوع العزل</th>
                        <th className="text-center p-3 font-bold">سعر المتر²</th>
                        <th className="text-center p-3 font-bold">الحد الأدنى</th>
                        <th className="text-right p-3 font-bold rounded-tl-lg">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <td className="p-3 font-medium text-gray-900">{row.type}</td>
                            <td className="p-3 text-center text-amber-700 font-bold">{row.pricePerSqm}</td>
                            <td className="p-3 text-center text-amber-700 font-medium">{row.minimum}</td>
                            <td className="p-3 text-gray-600 text-xs">{row.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function SewageTable({ data }: { data: SewagePricing[] }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-purple-50 text-purple-900">
                        <th className="text-right p-3 font-bold rounded-tr-lg">🚽 الخدمة</th>
                        <th className="text-center p-3 font-bold">بيارة صغيرة (&lt;5م³)</th>
                        <th className="text-center p-3 font-bold">بيارة وسط (5-10م³)</th>
                        <th className="text-center p-3 font-bold">بيارة كبيرة (&gt;10م³)</th>
                        <th className="text-right p-3 font-bold rounded-tl-lg">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <td className="p-3 font-medium text-gray-900">{row.service}</td>
                            <td className="p-3 text-center text-purple-700 font-medium">{row.smallTank}</td>
                            <td className="p-3 text-center text-purple-700 font-medium">{row.mediumTank}</td>
                            <td className="p-3 text-center text-purple-700 font-medium">{row.largeTank}</td>
                            <td className="p-3 text-gray-600 text-xs">{row.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ACTable({ data }: { data: ACPricing[] }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-sky-50 text-sky-900">
                        <th className="text-right p-3 font-bold rounded-tr-lg">❄️ الخدمة</th>
                        <th className="text-center p-3 font-bold">اسبليت</th>
                        <th className="text-center p-3 font-bold">مركزي</th>
                        <th className="text-center p-3 font-bold">دكت</th>
                        <th className="text-right p-3 font-bold rounded-tl-lg">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <td className="p-3 font-medium text-gray-900">{row.service}</td>
                            <td className="p-3 text-center text-sky-700 font-medium">{row.splitUnit}</td>
                            <td className="p-3 text-center text-sky-700 font-medium">{row.centralUnit}</td>
                            <td className="p-3 text-center text-sky-700 font-medium">{row.ducted}</td>
                            <td className="p-3 text-gray-600 text-xs">{row.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// ============ MAIN COMPONENT ============

export default function GeoPricingTable({ citySlug, cityName, serviceSlug, serviceName }: GeoPricingTableProps) {
    const { category, data } = getGeoPricing(citySlug, serviceSlug);
    if (!data || (Array.isArray(data) && data.length === 0)) return null;

    const header = HEADERS[category] || HEADERS.cleaning;

    return (
        <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{header.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">
                        {header.title} — {cityName}
                    </h3>
                </div>
                <p className="text-gray-500 text-sm">{header.subtitle}</p>
            </div>

            {/* Table */}
            <div className="p-4 sm:p-6">
                {category === 'moving' && <MovingTable data={data as MovingRoute[]} cityName={cityName} />}
                {category === 'cleaning' && <CleaningTable data={data as CleaningZone[]} cityName={cityName} />}
                {category === 'pest-control' && <PestTable data={data as PestPricing[]} />}
                {category === 'leak-detection' && <LeakTable data={data as LeakPricing[]} />}
                {category === 'insulation' && <InsulationTable data={data as InsulationPricing[]} />}
                {category === 'sewage' && <SewageTable data={data as SewagePricing[]} />}
                {category === 'ac' && <ACTable data={data as ACPricing[]} />}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-500 text-xs leading-relaxed">
                    ⚠️ الأسعار تقديرية بناءً على بيانات السوق — السعر النهائي يعتمد على المعاينة الفعلية. آخر تحديث: مارس 2026.
                    {' '}الأسعار بالريال السعودي وتشمل ضريبة القيمة المضافة 15%.
                    {' '}قارن بين 3 شركات على الأقل عبر بروكر للحصول على أفضل سعر.
                </p>
            </div>

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Table',
                        name: `${header.title} — ${serviceName} في ${cityName}`,
                        description: header.subtitle,
                        about: {
                            '@type': 'Service',
                            name: serviceName,
                            areaServed: { '@type': 'City', name: cityName },
                            provider: { '@type': 'Organization', name: 'بروكر', url: 'https://prokr.co' },
                        },
                    }),
                }}
            />
        </section>
    );
}
