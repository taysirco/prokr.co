

import { Rocket, ShieldCheck, Clock, Users, Phone, Building2, Star, TrendingUp, CheckCircle2, Thermometer, MapPin, AlertTriangle, Zap } from 'lucide-react';
import { getMarketTimingConfig } from '@/lib/market-timing';

interface LeadCaptureCTAProps {
    cityName: string;
    serviceName: string;
    serviceSlug: string;
    citySlug: string;
}

// ============================================
// بروتوكول الخلايا النائمة — محرك المحتوى الفريد
// يولّد نصاً مختلفاً لكل تركيبة (مدينة × خدمة)
// لمنع عقوبة Duplicate Content من جوجل
// ============================================

// --- Service-Specific Quality Criteria ---
const SERVICE_CRITERIA: Record<string, { icon: string; items: string[] }> = {
    moving: {
        icon: '🚛',
        items: [
            'أسطول نقل مجهز بتقنيات التغليف الهوائي',
            'فريق فك وتركيب أثاث محترف ومؤمّن',
            'تأمين شامل ضد كسر وتلف المنقولات',
            'أجهزة تتبع GPS لمتابعة الشحنة لحظياً',
            'ضمان مكتوب على سلامة جميع القطع',
            'أسعار ثابتة بدون رسوم مخفية',
        ],
    },
    cleaning: {
        icon: '🧹',
        items: [
            'منظفات معتمدة من هيئة الغذاء والدواء (SFDA)',
            'أجهزة بخار صناعية للتعقيم العميق',
            'فريق مدرّب على بروتوكولات النظافة الاحترافية',
            'تقنية التنظيف الجاف للأقمشة والسجاد الفاخر',
            'ضمان إعادة التنظيف خلال 48 ساعة',
            'مواد صديقة للبيئة وآمنة للأطفال',
        ],
    },
    'pest-control': {
        icon: '🛡️',
        items: [
            'مبيدات مسجلة في نظام SFDA فقط',
            'تقنيات رش حراري وجل طُعم متقدمة',
            'ضمان إبادة مكتوب يشمل زيارة متابعة',
            'فريق مؤهل حاصل على رخصة رش معتمدة',
            'فحص شامل لجميع نقاط الدخول والتكاثر',
            'معاينة مجانية قبل بدء العلاج',
        ],
    },
    sewage: {
        icon: '🔧',
        items: [
            'كاميرات فحص CCTV لتشخيص الانسداد بدقة',
            'شاحنات شفط حديثة بسعات متعددة',
            'صيانة دورية وقائية للشبكات',
            'استجابة طوارئ على مدار 24 ساعة',
            'تقنيات ضغط مائي عالٍ لتنظيف الأنابيب',
            'ترخيص بلدي ساري لأعمال الصرف الصحي',
        ],
    },
    'leak-detection': {
        icon: '💧',
        items: [
            'أجهزة كشف بالموجات فوق الصوتية (Ultrasonic)',
            'كاميرات حرارية متقدمة لتحديد موقع التسرب بدقة سم',
            'فحص بغاز النيتروجين للشبكة الكاملة',
            'تقرير NWC معتمد يُقلّل فاتورتك بأثر رجعي',
            'ضمان على الإصلاح يشمل الكسر والتسريب',
            'إصلاح فوري بدون تكسير باستخدام تقنية Pipelining',
        ],
    },
    insulation: {
        icon: '🏗️',
        items: [
            'مواد عزل معتمدة من هيئة المواصفات السعودية (SASO)',
            'فحص بكاميرا حرارية قبل وبعد العزل',
            'ضمان 10 سنوات على العزل المائي',
            'فريق متخصص في عزل الفوم والبيتومين',
            'شهادة اختبار ضغط المياه بعد التنفيذ',
            'تقرير فني مفصّل لحالة السطح والمبنى',
        ],
    },
};

// --- Climate-Specific Challenges ---
const CLIMATE_CONTEXT: Record<string, { label: string; desc: string }> = {
    'dry-hot': { label: 'مناخ حار وجاف', desc: 'الحرارة المرتفعة والعواصف الرملية تتطلب شركات ذات خبرة في الظروف الصحراوية القاسية' },
    'humid-coastal': { label: 'مناخ ساحلي رطب', desc: 'الرطوبة العالية وملوحة الهواء تستلزم معدات وخبرات متخصصة لمقاومة التآكل والعفن' },
    'mountain': { label: 'مناخ جبلي', desc: 'التضاريس الجبلية والأمطار الموسمية تتطلب فرقاً ذات خبرة في المناطق الوعرة والبرودة' },
    'desert': { label: 'مناخ صحراوي', desc: 'البرودة الشتوية الشديدة والعواصف الرملية تتطلب تجهيزات خاصة وعمالة مدربة' },
    'moderate': { label: 'مناخ معتدل', desc: 'رغم اعتدال المناخ، يتطلب الأمر خبرة محلية لضمان جودة التنفيذ وفق المعايير' },
};

// --- Availability context (vary by service) ---
const AVAILABILITY_CONTEXT: Record<string, string> = {
    moving: 'مع ارتفاع حركة النقل والتقل في المنطقة، نقوم بتقييم صارم لضمان أن شركات النقل المعتمدة تمتلك الأسطول والتأمين الكافي لحماية ممتلكاتك.',
    cleaning: 'نظراً لارتفاع الطلب على خدمات التنظيف الاحترافي، نُخضع كل شركة لاختبار ميداني فعلي قبل منحها شارة الاعتماد من بروكر.',
    'pest-control': 'سلامة عائلتك أولوية. لذلك نتحقق من أن كل شركة تستخدم مبيدات مسجلة رسمياً في SFDA ولديها رخصة رش سارية المفعول.',
    sewage: 'خدمات الصرف الصحي تتطلب معدات ثقيلة وتراخيص بلدية. نتأكد من أن كل شركة مرخصة ومجهزة بأحدث تقنيات الشفط والتنظيف.',
    'leak-detection': 'الكشف الدقيق عن التسربات يتطلب أجهزة باهظة الثمن وخبرة هندسية عالية. نقيّم قدرات كل شركة ميدانياً قبل الاعتماد.',
    insulation: 'جودة العزل تؤثر مباشرة على عمر المبنى وفاتورة الكهرباء. نتحقق من أن المواد المستخدمة حاصلة على اعتماد SASO وأن التنفيذ يخضع لفحص حراري.',
};

// --- Get service category from slug ---
function getCategory(serviceSlug: string): string {
    const categoryMap: Record<string, string> = {
        'furniture-moving': 'moving', 'furniture-storage': 'moving', 'moving-out': 'moving',
        'international-moving': 'moving', 'furniture-assembly': 'moving',
        'house-cleaning': 'cleaning', 'apartment-cleaning': 'cleaning', 'villa-cleaning': 'cleaning',
        'carpet-cleaning': 'cleaning', 'sofa-cleaning': 'cleaning', 'deep-cleaning': 'cleaning',
        'tank-cleaning': 'cleaning', 'facade-cleaning': 'cleaning', 'swimming-pool-cleaning': 'cleaning',
        'ac-cleaning': 'cleaning', 'office-cleaning': 'cleaning', 'after-construction-cleaning': 'cleaning',
        'pest-control': 'pest-control', 'termite-control': 'pest-control', 'cockroach-control': 'pest-control',
        'bed-bug-treatment': 'pest-control', 'rodent-control': 'pest-control', 'mosquito-control': 'pest-control',
        'snake-control': 'pest-control', 'pigeon-control': 'pest-control',
        'sewage-cleaning': 'sewage', 'sewer-repair': 'sewage', 'septic-tank': 'sewage',
        'sewage-suction': 'sewage', 'drain-unblocking': 'sewage',
        'water-leak-detection': 'leak-detection', 'roof-leak-repair': 'leak-detection',
        'pipe-repair': 'leak-detection', 'bathroom-leak-repair': 'leak-detection',
        'water-heater-repair': 'leak-detection',
        'roof-insulation': 'insulation', 'thermal-insulation': 'insulation',
        'water-insulation': 'insulation', 'foam-insulation': 'insulation',
        'swimming-pool-insulation': 'insulation', 'tank-insulation': 'insulation',
    };
    return categoryMap[serviceSlug] || 'cleaning';
}

// --- Generate hash-based index for variety ---
function hashIndex(str: string, max: number): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % max;
}

export default function LeadCaptureCTA({ cityName, serviceName, serviceSlug, citySlug }: LeadCaptureCTAProps) {
    const category = getCategory(serviceSlug);
    const criteria = SERVICE_CRITERIA[category] || SERVICE_CRITERIA['cleaning'];
    const availabilityText = AVAILABILITY_CONTEXT[category] || AVAILABILITY_CONTEXT['cleaning'];
    const cycleConfig = getMarketTimingConfig();

    // Derive unique content seed from city+service combination
    const seed = `${citySlug}-${serviceSlug}`;
    const idx = hashIndex(seed, 3);

    // Shuffle criteria based on seed for different ordering per page
    const shuffledCriteria = [...criteria.items].sort((a, b) => {
        const seedA = hashIndex(seed + a, 1000);
        const seedB = hashIndex(seed + b, 1000);
        return seedA - seedB;
    });

    // Pick 4-5 criteria (not all 6) for variety
    const shownCriteria = shuffledCriteria.slice(0, 4 + (idx % 2));

    // Dynamic city challenge text
    const climateKey = (() => {
        // Infer from city slug patterns
        const coastal = ['jeddah', 'yanbu', 'dammam', 'al-khobar', 'dhahran', 'jubail', 'qatif', 'jazan'];
        const mountain = ['abha', 'al-baha', 'khamis-mushait', 'taif'];
        const desert = ['tabuk', 'hail', 'hafr-albatin', 'najran'];
        if (coastal.includes(citySlug)) return 'humid-coastal';
        if (mountain.includes(citySlug)) return 'mountain';
        if (desert.includes(citySlug)) return 'desert';
        return 'dry-hot';
    })();

    const climate = CLIMATE_CONTEXT[climateKey];

    // Unique intro variations
    const intros = [
        `بروكر يقيّم حالياً مزودي خدمة ${serviceName} في ${cityName} وفق أعلى معايير الاعتماد السعودية.`,
        `نعمل على فرز وتقييم شركات ${serviceName} في ${cityName} لنضمن لك أفضل مقدمي الخدمة فقط.`,
        `معايير بروكر لاعتماد شركات ${serviceName} في ${cityName} صارمة — فقط من يجتازها يظهر هنا.`,
    ];

    // Unique CTA text variations
    const customerCtas = [
        `سجّل طلبك لخدمة ${serviceName} في ${cityName}`,
        `احجز أولوية التنفيذ في ${cityName}`,
        `اطلب ${serviceName} — أولوية الحجز في ${cityName}`,
    ];

    const companyCtas = [
        `شركتك في ${cityName}؟ قدّم طلب الاعتماد`,
        `سجّل شركتك لتقديم ${serviceName} في ${cityName}`,
        `انضم كمزوّد معتمد لـ${serviceName}`,
    ];

    const waText = encodeURIComponent(`مرحباً، أريد حجز أولوية تنفيذ خدمة ${serviceName} في ${cityName}`);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Main Availability Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-emerald-50 border-2 border-amber-200 shadow-xl">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-emerald-400/10 to-transparent rounded-tl-full" />

                <div className="relative p-8 md:p-12">
                    {/* Badge — service-specific icon */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-bold mb-6">
                        <TrendingUp className="w-4 h-4" />
                        <span>{criteria.icon} الطلب على {serviceName} يفوق العرض في {cityName}</span>
                    </div>

                    {/* 💰 Market Timing Banner */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6
                        ${cycleConfig.colors.badgeBg} ${cycleConfig.colors.badgeText} border ${cycleConfig.colors.badgeBorder}`}
                    >
                        <span>{cycleConfig.icon}</span>
                        <span>{cycleConfig.badgeText}</span>
                    </div>

                    {/* Title — unique per city+service */}
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                        <Rocket className="w-8 h-8 text-amber-500 inline-block ml-2" />
                        {serviceName} في {cityName} — جاري اعتماد مزودي الخدمة
                    </h2>

                    {/* Dynamic paragraph — varies by service category */}
                    <p className="text-lg text-gray-700 max-w-3xl mb-4 leading-relaxed">
                        {intros[idx]}
                    </p>

                    {/* Service-specific availability note */}
                    <p className="text-base text-gray-600 max-w-3xl mb-4 leading-relaxed">
                        {availabilityText}
                    </p>

                    {/* Climate challenge — unique per city group */}
                    <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100 mb-8 max-w-3xl">
                        <Thermometer className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-blue-900 text-sm">{climate.label} — {cityName}</p>
                            <p className="text-sm text-blue-700 mt-1">{climate.desc}</p>
                        </div>
                    </div>

                    {/* Dynamic Quality Criteria — shuffled and sliced per page */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {shownCriteria.map((text, i) => {
                            const icons = [ShieldCheck, Star, CheckCircle2, Clock, Users, Building2, Zap, AlertTriangle];
                            const colors = ['text-emerald-600', 'text-amber-500', 'text-blue-600', 'text-purple-600', 'text-teal-600', 'text-orange-600', 'text-rose-600', 'text-cyan-600'];
                            const Icon = icons[hashIndex(seed + text, icons.length)];
                            const color = colors[hashIndex(seed + text + 'c', colors.length)];
                            return (
                                <div key={i} className="flex items-center gap-3 bg-white/80 rounded-xl p-4 border border-gray-100 shadow-sm">
                                    <Icon className={`w-5 h-5 ${color} shrink-0`} />
                                    <span className="text-sm font-medium text-gray-700">{text}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Buttons — text varies per page */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={`https://wa.me/966920000000?text=${waText}`}
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-0.5"
                        >
                            <Phone className="w-5 h-5 group-hover:animate-pulse" />
                            <span>{cycleConfig.ctaText}</span>
                        </a>

                        {cycleConfig.showInstallment && (
                            <div className="flex items-center gap-2 px-6 py-3 bg-red-50 border-2 border-red-200 text-red-800 rounded-2xl font-bold text-sm">
                                💳 {cycleConfig.ctaSubtext}
                            </div>
                        )}

                        <a
                            href="/advertise"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-700 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-0.5"
                        >
                            <Building2 className="w-5 h-5 group-hover:animate-pulse" />
                            <span>{companyCtas[idx]}</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Trust Signals — contextualized per city */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">ضمان معايير {cityName}</p>
                        <p className="text-sm text-gray-500">تقييم ميداني في منطقتك</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">أولوية لسكان {cityName}</p>
                        <p className="text-sm text-gray-500">المسجلون أولاً يُخدمون أولاً</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">تغطية {cityName} الكاملة</p>
                        <p className="text-sm text-gray-500">جميع الأحياء والمناطق</p>
                    </div>
                </div>
            </div>

            {/* Sovereign Compliance Badges — ZATCA + قوى/أجير + نطاقات */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-4 bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-200 shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-lg font-bold text-green-700">
                        ⚡
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">فوترة إلكترونية ZATCA</p>
                        <p className="text-sm text-gray-500">شركات ملتزمة بنظام فاتورة — هيئة الزكاة والضريبة</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-200 shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-lg font-bold text-purple-700">
                        📋
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">عقود موثقة — منصة قوى</p>
                        <p className="text-sm text-gray-500">عمالة نظامية مسجلة عبر قوى وأجير</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 border border-teal-200 shadow-sm">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-lg font-bold text-teal-700">
                        🏅
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">نطاق أخضر — نطاقات</p>
                        <p className="text-sm text-gray-500">شركات ذات نسبة توطين عالية</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
