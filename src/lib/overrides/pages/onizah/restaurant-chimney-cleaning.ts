import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بعنيزة — كربنة جافة + تمور كرملة — لا Biofilm! NFPA أبسط! (2026)',
        description: 'تنظيف مداخن عنيزة. كربنة جافة. تمور كرملة في المداخن. لا Biofilm! NFPA أبسط. Alkaline+Enzymatic+مقياس ميكرون.',
        h1: 'تنظيف مداخن مطاعم بعنيزة — كربنة جافة وتمور — NFPA أبسط!',
        keywords: ['تنظيف مداخن عنيزة', 'تنظيف مداخن بعنيزة', 'شركة تنظيف مداخن عنيزة'],
    },
    content: {
        introduction: 'مداخن عنيزة = أبسط مداخن بالمملكة إلتزاماً بـ NFPA 96 — لكن مع كرملة تمور فريدة! الأبسط: لا Biofilm! 15-25% رطوبة = الكربنة الدهنية تتكوّن جافة بدون غشاء بيولوجي يحميها. Alkaline مباشر يُذيب الدهن = أسرع+أرخص. في خميس والباحة: Biofilm يحمي الكربنة = Anti-Biofilm أولاً ← ثم Alkaline = خطوة إضافية + خطر حريق أعلى. التحدي الفريد — كرملة تمور في المداخن!: مطاعم عنيزة تستخدم التمور في الطبخ والحلويات. أبخرة السكر ترتفع في المدخنة ← تتكرمل على الجدران الداخلية = طبقة سوداء لزجة مختلفة عن الكربنة الدهنية. Alkaline لا يُكسِّرها — Enzymatic إلزامي. مقياس ميكرون بعد التنظيف = تحقق NFPA.',
        shortAnswer: 'على عكس [تنظيف الدهن فقط بدون إزالة كرملة التمور]، يعتمد بروتوكولنا في خدمة [تنظيف مداخن المطاعم] بمدينة [عنيزة] على [Enzymatic ← Alkaline ← مقياس ميكرون]. ففي ظل [كربنة جافة + كرملة تمور + لا Biofilm + NFPA 96]، تتفاقم ظاهرة [طبقة دهنية + سكرية مزدوجة]. لذا؛ يتدخل فنيونا عبر [إنزيم ← قلوي ← قياس] لضمان سلامة NFPA.',
        heroSubtitle: 'كربنة جافة + كرملة تمور — لا Biofilm! NFPA أبسط!',
    },
    pricing: [
        { type: 'مدخنة واحدة', unit: 'مدخنة', minPrice: 200, maxPrice: 450, time: '3-4 ساعات' },
        { type: 'مدخنة + إزالة كرملة تمور', unit: 'مدخنة', minPrice: 250, maxPrice: 550, time: '4-5 ساعات' },
        { type: 'فحص ميكرون NFPA', unit: 'فحص', minPrice: 100, maxPrice: 210, time: '1 ساعة' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 650, maxPrice: 1500, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كيف أُزيل كرملة التمور من المدخنة؟', answer: 'Enzymatic يُكسِّر السكر المتكرمل (20 دقيقة نقع) ← ثم Alkaline للكربنة الدهنية. Alkaline وحده لا يكفي.' },
        { question: 'ليش مداخن عنيزة أبسط من خميس مشيط NFPA؟', answer: 'لا Biofilm! 15-25% رطوبة = Alkaline مباشر. خميس: Biofilm يحمي الكربنة = Anti-Biofilm أولاً = خطوة+تكلفة.' },
        { question: 'كم مرة أنظف المدخنة بعنيزة سنوياً؟', answer: 'ربع سنوي (4 مرات) حسب NFPA 96. مطاعم التمور والحلويات: كل شهرين بسبب كرملة إضافية.' },
        { question: 'هل المدخنة تحتاج Anti-Biofilm بعنيزة؟', answer: 'لا! 15-25% = صفر Biofilm. وفّر 100% من Anti-Biofilm. أبسط NFPA بالمملكة.' },
        { question: 'متى أخطر وقت لحريق مدخنة بعنيزة؟', answer: 'بعد موسم التمور (نوفمبر) — كرملة سكر + كربنة دهنية = وقود مزدوج. تنظيف فوري!' },
    ],
    expertTips: [
        'Enzymatic أولاً — كرملة تمور لا يُذيبها Alkaline.',
        'Alkaline ثانياً — كربنة جافة مباشرة (لا Biofilm!).',
        'مقياس ميكرون — NFPA 96 يشترط < 25μm.',
        'لا Anti-Biofilm — 15-25% = صفر. وفّر.',
        'ربع سنوي — بعد كل موسم (تمور + رمضان + صيف + شتاء).',
    ],
    warnings: [
        'كرملة تمور + كربنة = وقود مزدوج — خطر حريق أعلى من الكربنة العادية.',
        'Alkaline فقط بدون Enzymatic = كرملة تبقى = طبقة قابلة للاشتعال.',
        'مدخنة مهملة 6 أشهر = سماكة ≥ 50μm = خطر حريق فوري حسب NFPA 96.',
    ],
    trustAnchors: [
        { ...GOV.CIVILDEFENSE, role: 'سلامة مداخن — NFPA 96' },
        { ...GOV.BALADI, role: 'ترخيص مطاعم' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مداخن عنيزة: لا Biofilm = أبسط NFPA. لكن كرملة تمور = Enzymatic إلزامي. وقود مزدوج.', source: 'نصائح هندسية — مداخن قصيمية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ مداخن مرخصة', authority: 'بلدي + دفاع مدني', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Enzymatic Sugar Breaker', use: 'يُكسِّر كرملة التمور — Alkaline لا يكفي' },
        { name: 'Alkaline Degreaser', use: 'يُذيب الكربنة الدهنية الجافة (لا Biofilm!)' },
        { name: 'مقياس ميكرون', use: 'NFPA 96 compliance — < 25μm' },
    ],
    commonConcerns: [
        { concern: 'Alkaline يكفي.', solution: 'كرملة تمور ≠ كربنة. Enzymatic إلزامي.' },
        { concern: 'مثل خميس NFPA.', solution: 'أبسط — لا Biofilm = Alkaline مباشر.' },
    ],
    consumerEducation: [
        { myth: 'المداخن ما تحتاج Enzymatic.', truth: 'مطاعم التمور = كرملة سكر في المدخنة. Alkaline لا يكفي.' },
        { myth: 'نصف سنوي يكفي.', truth: 'ربع سنوي — NFPA 96 + كرملة تمور = تراكم أسرع.' },
    ],
    relatedServices: [
        { slug: 'oven-cleaning', context: 'أفران — كربنة', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — مطاعم', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
