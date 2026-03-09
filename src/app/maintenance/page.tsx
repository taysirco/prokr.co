import { Metadata } from 'next';
import { Wrench, Clock, Shield, Bell, Sparkles, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'بروكر - تحت الصيانة | Prokr - Under Maintenance',
    description: 'نعمل على تطوير وتحسين منصة بروكر لنقدم لكم تجربة أفضل. سنعود قريباً بإذن الله.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function MaintenancePage() {
    return (
        <html lang="ar" dir="rtl">
            <body>
                <main className="min-h-screen bg-gradient-to-bl from-emerald-950 via-emerald-900 to-slate-900 text-white relative overflow-hidden flex items-center justify-center">
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 opacity-[0.04]" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                        {/* Floating Glowing Orbs */}
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] animate-pulse"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                        {/* Logo / Brand */}
                        <div className="mb-10">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl shadow-2xl shadow-emerald-500/30 mb-6 animate-bounce" style={{ animationDuration: '3s' }}>
                                <Wrench className="w-12 h-12 text-white" />
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold mb-2">
                                <span className="bg-gradient-to-l from-emerald-300 to-emerald-400 bg-clip-text text-transparent">بروكر</span>
                            </h1>
                            <p className="text-emerald-400/80 text-lg font-medium">prokr.co</p>
                        </div>

                        {/* Main Message */}
                        <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 sm:p-10 mb-10 shadow-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium mb-6 border border-amber-400/20">
                                <Sparkles className="w-4 h-4" />
                                <span>تطوير وتحسين</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                                نعمل على تطوير
                                <span className="block bg-gradient-to-l from-amber-300 to-amber-400 bg-clip-text text-transparent">
                                    تجربة أفضل لكم
                                </span>
                            </h2>

                            <p className="text-emerald-100/70 text-lg leading-relaxed max-w-xl mx-auto mb-8">
                                فريق بروكر يعمل بكل جهد على تحسين المنصة وإضافة مزايا جديدة لتقديم أفضل تجربة للبحث عن الخدمات في المملكة العربية السعودية.
                            </p>

                            {/* Features Coming */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                <div className="flex flex-col items-center gap-2 p-4 bg-white/[0.04] rounded-2xl border border-white/5">
                                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <span className="text-sm text-emerald-200/80 font-medium">شركات موثوقة</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 bg-white/[0.04] rounded-2xl border border-white/5">
                                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <span className="text-sm text-emerald-200/80 font-medium">تجربة محسّنة</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 bg-white/[0.04] rounded-2xl border border-white/5">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                        <Bell className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <span className="text-sm text-emerald-200/80 font-medium">مزايا جديدة</span>
                                </div>
                            </div>

                            {/* Estimated Time */}
                            <div className="inline-flex items-center gap-3 px-5 py-3 bg-emerald-500/10 border border-emerald-400/20 rounded-xl">
                                <Clock className="w-5 h-5 text-emerald-400" />
                                <span className="text-emerald-200 font-medium">سنعود قريباً بإذن الله</span>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <p className="text-emerald-300/50 text-sm">
                            للاستفسارات العاجلة يمكنكم التواصل معنا عبر البريد الإلكتروني
                        </p>
                        <a href="mailto:info@prokr.co" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mt-2 font-medium">
                            info@prokr.co
                            <ArrowLeft className="w-4 h-4" />
                        </a>
                    </div>
                </main>
            </body>
        </html>
    );
}
