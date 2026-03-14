import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بعنيزة — CaCO₃ Scale 550ppm+Nafud سد فلتر+48°م+لقاح — Descaler+HEPA! (2026)',
        description: 'تنظيف مكيفات عنيزة. CaCO₃ Scale 550ppm مبخّر! Nafud سد فلتر. 48°م حمل. لقاح نخيل. Descaler+HEPA+فحص.',
        h1: 'تنظيف مكيفات بعنيزة — Scale+Nafud+حمل!',
        keywords: ['تنظيف مكيفات بعنيزة', 'تنظيف مكيف بعنيزة', 'شركة تنظيف مكيفات بعنيزة'],
    },
    content: {
        introduction: 'مكيف عنيزة = CaCO₃ Scale على المبخّر! CaCO₃ Scale 550ppm: ماء التكثيف (Condensate) يتبخر ← يترك ترسبات كلس على Evaporator Coil ← أداء يقل 30-40%! Descaler Acidic إلزامي. Nafud سد فلتر: SiO₂ 7 Mohs = رمل ناعم يتراكم على فلتر المكيف ← يسد أسرع من أي مدينة ساحلية. تنظيف شهري. 48°م حمل: صيف عنيزة 48°م = المكيف يعمل 18-20h/يوم ← Compressor حمل فوق الطاقة. تنظيف Condenser خارجي يُقلّل حمل 20%. لقاح: مارس-مايو = حبوب لقاح تدخل الفلتر ← تنتشر بالغرفة = حساسية. HEPA Filter. مقارنة: الباحة = Aspergillus عفن+Heat Pump. عنيزة = Scale+Nafud+حمل+لقاح = مختلف.',
        shortAnswer: 'على عكس [الغسل بدون Descaler]، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [عنيزة] على [Descaler ← HEPA ← Condenser ← فلتر شهري]. ففي ظل [CaCO₃ Scale+Nafud سد+48°م حمل+لقاح]، تتفاقم ظاهرة [ترسبات+انسداد+حمل+حساسية]. لذا؛ يتدخل فنيونا عبر [Descaler ← HEPA ← Condenser ← شهري].',
        heroSubtitle: 'CaCO₃ Scale + Nafud سد + 48°م حمل + لقاح — Descaler!',
    },
    pricing: [
        { type: 'سبلت + Descaler', unit: 'مكيف', minPrice: 80, maxPrice: 170, time: '30-60 دقيقة' },
        { type: '+ HEPA Filter تركيب', unit: 'مكيف', minPrice: 110, maxPrice: 230, time: '45-60 دقيقة' },
        { type: 'مركزي (4+ وحدات)', unit: 'نظام', minPrice: 300, maxPrice: 620, time: '3-4h' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 250, maxPrice: 520, time: '4 تنظيف + فلتر شهري' },
    ],
    faq: [
        { question: 'ليش مكيف عنيزة يضعف أسرع؟', answer: 'CaCO₃ Scale 550ppm على المبخّر = -30-40%. Descaler.' },
        { question: 'ليش فلتر عنيزة يسد أسرع؟', answer: 'Nafud SiO₂ 7 Mohs = رمل ناعم يتراكم. شهري.' },
        { question: 'ليش كهرباء المكيف مرتفعة بعنيزة؟', answer: '48°م = 18-20h/يوم. Condenser نظيف يوفر 20%.' },
        { question: 'كم تكلفة مكيف بعنيزة مقابل الباحة؟', answer: 'أرخص 15-20% — لا Anti-Fungal+لا Heat Pump.' },
        { question: 'هل لقاح يأثر على المكيف بعنيزة؟', answer: 'مارس-مايو = لقاح يدخل الفلتر ← حساسية. HEPA.' },
    ],
    expertTips: [
        'Descaler — CaCO₃ Scale 550ppm.',
        'فلتر شهري — Nafud 7 Mohs.',
        'Condenser — 48°م حمل.',
        'HEPA — لقاح مارس-مايو.',
        'Compressor فحص — حمل مستمر.',
    ],
    warnings: [
        'CaCO₃ Scale × 6 أشهر = -40% أداء ← فاتورة YMYL.',
        'Nafud + فلتر عادي × شهر = انسداد ← حمل Compressor.',
        '48°م + مكيف متسخ = Compressor يحترق ← 3000+ ريال.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكيف عنيزة: CaCO₃ Scale+Nafud+48°م. Descaler+HEPA+شهري.', source: 'جغرافيا المناخ — مكيفات القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكيفات مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler Acidic', use: 'CaCO₃ Scale — مبخّر' },
        { name: 'HEPA Filter', use: 'لقاح — مارس-مايو' },
        { name: 'Condenser Cleaner', use: '48°م — حمل خارجي' },
    ],
    commonConcerns: [
        { concern: 'غسل عادي.', solution: 'Scale = Descaler إلزامي.' },
        { concern: 'مثل الباحة.', solution: 'Scale+Nafud ≠ Aspergillus.' },
    ],
    consumerEducation: [
        { myth: 'ربع سنوي فلتر.', truth: 'شهري! Nafud 7 Mohs.' },
        { myth: 'لا حاجة Descaler.', truth: '550ppm Scale = -40%.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 7 },
    ],
};
