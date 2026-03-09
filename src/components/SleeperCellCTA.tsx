'use client';

import { Rocket, ShieldCheck, Clock, Users, Phone, Building2, Star, TrendingUp, CheckCircle2 } from 'lucide-react';

interface SleeperCellCTAProps {
    cityName: string;
    serviceName: string;
}

/**
 * بروتوكول الخلايا النائمة (Sleeper Cell Protocol)
 * 
 * عندما لا يوجد معلنين مسجلين في مدينة/خدمة معينة،
 * بدلاً من عرض محتوى فارغ (Thin Content → Soft-404 penalty)
 * نعرض صفحة Lead Gen مغناطيسية بـ Scarcity Framing.
 * 
 * النتيجة: الصفحة تبقى حية، تتأرشف، وتجمع عملاء محتملين.
 */
export default function SleeperCellCTA({ cityName, serviceName }: SleeperCellCTAProps) {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Main Scarcity Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-emerald-50 border-2 border-amber-200 shadow-xl">
                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-emerald-400/10 to-transparent rounded-tl-full" />

                <div className="relative p-8 md:p-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-bold mb-6">
                        <TrendingUp className="w-4 h-4" />
                        <span>الطلب يفوق العرض</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                        <Rocket className="w-8 h-8 text-amber-500 inline-block ml-2" />
                        خدمة {serviceName} في {cityName} — قيد التقييم الهندسي
                    </h2>

                    {/* Explanation */}
                    <p className="text-lg text-gray-700 max-w-3xl mb-8 leading-relaxed">
                        نحن حالياً في مرحلة <strong className="text-emerald-700">التقييم الهندسي الصارم (QA)</strong> لمزودي
                        خدمة {serviceName} في {cityName} لضمان أعلى معايير الجودة المعتمدة من بروكر.
                        فقط الشركات التي تجتاز <strong>7 معايير تقييم</strong> يتم اعتمادها.
                    </p>

                    {/* Quality Criteria Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {[
                            { icon: ShieldCheck, text: 'سجل تجاري ساري المفعول', color: 'text-emerald-600' },
                            { icon: Star, text: 'تقييم عملاء لا يقل عن 4.0', color: 'text-amber-500' },
                            { icon: CheckCircle2, text: 'تأمين ضد أضرار التنفيذ', color: 'text-blue-600' },
                            { icon: Clock, text: 'التزام بمواعيد التسليم', color: 'text-purple-600' },
                            { icon: Users, text: 'فريق عمل مؤهل ومدرّب', color: 'text-teal-600' },
                            { icon: Building2, text: 'خبرة موثقة في المنطقة', color: 'text-orange-600' },
                        ].map(({ icon: Icon, text, color }, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/80 rounded-xl p-4 border border-gray-100 shadow-sm">
                                <Icon className={`w-5 h-5 ${color} shrink-0`} />
                                <span className="text-sm font-medium text-gray-700">{text}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Customer CTA */}
                        <a
                            href={`https://wa.me/966920000000?text=${encodeURIComponent(`مرحباً، أريد حجز أولوية تنفيذ خدمة ${serviceName} في ${cityName}`)}`}
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-0.5"
                        >
                            <Phone className="w-5 h-5 group-hover:animate-pulse" />
                            <span>للعملاء: احجز أولوية التنفيذ</span>
                        </a>

                        {/* Company CTA */}
                        <a
                            href="/advertise"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-700 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-0.5"
                        >
                            <Building2 className="w-5 h-5 group-hover:animate-pulse" />
                            <span>للشركات: قدّم طلب الاعتماد</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Trust Signals Row */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">ضمان الجودة</p>
                        <p className="text-sm text-gray-500">معايير بروكر المعتمدة</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">أولوية الحجز</p>
                        <p className="text-sm text-gray-500">المسجلون أولاً يُخدمون أولاً</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">قائمة الانتظار</p>
                        <p className="text-sm text-gray-500">سنبلغك فور توفر شركة معتمدة</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
