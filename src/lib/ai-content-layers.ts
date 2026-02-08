import { City, Service } from '@/types';
import { CITY_CONTEXT } from './city-context';
import { getServiceKeywordProfile, getCityKeyword, resolveKeywordTemplate } from './keyword-strategy';

// Types for the AI Content Layers
export interface ContentLayers {
    introduction: string;
    whyUs: string[];
    localChallenges: string[];
    customSolutions: string[];
    successStories: { title: string; result: string }[];
    shortAnswer: string; // For Google Featured Snippets
    metaTitle: string;
    h1: string;
}

// Helper to pick random item from array based on seed (city+service)
// ensures consistency (same city+service always gets same content) but variety across pages
function getStableRandomItem<T>(arr: T[], seed: string): T {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    const index = Math.abs(hash) % arr.length;
    return arr[index];
}

// ==========================================
// 1. UNIQUE INTRODUCTIONS
// ==========================================
function generateIntroduction(city: City, service: Service, context: any): string {
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);
    const count = Math.floor(30 * (context.priceModifier || 1));
    const climateNote = context.climate === 'humid-coastal'
        ? 'الرطوبة الساحلية' : context.climate === 'mountain' ? 'تضاريس المنطقة الجبلية' : 'الحرارة المرتفعة والغبار';

    const categoryTemplates: Record<string, string[]> = {
        'moving': [
            `هل تبحث عن ${service.name_ar} ${cityKw}؟ عملية النقل تحتاج تخطيط دقيق من فك الأثاث وتغليفه بمواد احترافية إلى التحميل والتوصيل الآمن. بروكر يوفر لك مقارنة فورية بين أفضل شركات النقل المعتمدة ${cityKw} مع ضمان شامل.`,
            `${service.name_ar} ${cityKw} تتطلب فريقاً محترفاً يتعامل مع كل قطعة بعناية. ${climateNote} تستوجب تغليفاً محكماً وسيارات مغلقة لحماية ممتلكاتك. نربطك بشركات نقل مرخصة تغطي جميع أحياء ${city.name_ar}.`,
            `تحتاج ${service.name_ar} ${cityKw}؟ اختيار الشركة المناسبة هو الفرق بين تجربة نقل سلسة وبين خسائر لا تُعوّض. بروكر يعرض لك تقييمات حقيقية وأسعار شفافة من نخبة شركات النقل ${cityKw}.`,
            `أصبح ${service.name_ar} ${cityKw} أسهل مع بروكر. دينات وسيارات نقل بأحجام مختلفة، فنيين فك وتركيب، وتغليف احترافي — استجابة سريعة ${context.responseTime} في جميع أحياء ${city.name_ar}.`,
        ],
        'cleaning': [
            `تبحث عن ${service.name_ar} ${cityKw}؟ النظافة ضرورة صحية وليست رفاهية. ${climateNote} تتطلب تنظيفاً دورياً بمواد وأجهزة متخصصة. بروكر يربطك بأفضل شركات التنظيف المعتمدة ${cityKw}.`,
            `${service.name_ar} ${cityKw} بمفهوم احترافي. عمالة مدربة ومواد تنظيف آمنة معتمدة من هيئة الغذاء والدواء — نختار لك الأفضل من بين ${count}+ شركة تنظيف تغطي جميع أحياء ${city.name_ar}.`,
            `هل جربت ${service.name_ar} ${cityKw} الاحترافية؟ الفرق واضح: أجهزة بخار، مواد إزالة بقع متخصصة، وعمالة تعرف كيف تتعامل مع كل نوع سطح. قارن الأسعار واختر الأنسب.`,
            `خدمة ${service.name_ar} ${cityKw} على مدار الأسبوع. تنظيف عميق أو صيانة دورية — شركاؤنا المعتمدون يقدمون خدمة بمعايير فندقية بالاستجابة ${context.responseTime}. احصل على عرض سعر الآن.`,
        ],
        'pest-control': [
            `هل تعاني من مشكلة حشرات ${cityKw}؟ ${service.name_ar} ليست مجرد رش — هي علم يتطلب تشخيصاً دقيقاً لنوع الحشرة ودرجة الإصابة. ${climateNote} بيئة خصبة للحشرات. بروكر يوصلك بمتخصصين معتمدين.`,
            `${service.name_ar} ${cityKw} بمبيدات آمنة ومعتمدة من وزارة الصحة. سلامة عائلتك أولوية — نتعامل فقط مع شركات مرخصة تستخدم مبيدات لا تضر الأطفال والحيوانات الأليفة، مع ضمان يصل حتى سنة.`,
            `مشكلة الحشرات ${cityKw} تحتاج حلاً جذرياً وليس مؤقتاً. ${service.name_ar} الاحترافية تشمل الرش الوقائي وسد المنافذ ومعالجة بؤر التكاثر. قارن بين ${count}+ شركة مكافحة معتمدة.`,
            `${service.name_ar} ${cityKw} بتقنيات حديثة: رش، جل، بخار، وطعوم متخصصة حسب نوع الإصابة. كشف مجاني وخطة علاج شاملة مع ضمان. استجابة ${context.responseTime}.`,
        ],
        'sewage': [
            `مشاكل الصرف الصحي لا تحتمل التأخير. ${service.name_ar} ${cityKw} متوفرة 24 ساعة مع أحدث المعدات: كمبروسر، سلك كهربائي، وكاميرات فحص. بروكر يربطك بالأقرب والأسرع.`,
            `${service.name_ar} ${cityKw} بمعدات حديثة وأسعار ثابتة. لا تنتظر حتى تتفاقم المشكلة — الاستجابة السريعة توفر تكاليف إصلاح باهظة. ${count}+ شركة متاحة في جميع أحياء ${city.name_ar}.`,
            `تعاني من انسداد أو طفح ${cityKw}؟ ${service.name_ar} تحتاج معدات متخصصة وفنيين ذوي خبرة. سيارات شفط بأحجام مختلفة وكمبروسر ضغط عالي لأصعب الانسدادات.`,
            `خدمة ${service.name_ar} ${cityKw} طوارئ. وصول سريع ${context.responseTime} مع ضمان عدم تكرار المشكلة. شركات ذات سمعة ممتازة وأسعار معلنة بدون مفاجآت.`,
        ],
        'leak-detection': [
            `كشف تسربات المياه ${cityKw} بأحدث الأجهزة الإلكترونية وبدون أي تكسير. ${service.name_ar} تحتاج دقة عالية — أجهزة الموجات فوق الصوتية والكاميرات الحرارية تحدد مكان التسريب بدقة متناهية.`,
            `${service.name_ar} ${cityKw} بدون تكسير وبتقرير معتمد. ${climateNote} تسرّع تآكل المواسير، لذا الكشف المبكر يوفر عليك آلاف الريالات. احصل على فحص شامل من شركات معتمدة.`,
            `ارتفاع فاتورة المياه؟ قد يكون السبب تسريباً مخفياً. ${service.name_ar} ${cityKw} يحدد المشكلة بدقة ويوفر تقريراً معتمداً من شركة المياه. قارن أسعار ${count}+ شركة كشف تسربات.`,
            `${service.name_ar} ${cityKw} خطوة أولى لحماية منزلك من تلف الجدران وظهور العفن وانهيار الأساسات. الكشف المبكر يوفر تكاليف إصلاح ضخمة. فحص إلكتروني سريع ودقيق.`,
        ],
        'insulation': [
            `${service.name_ar} ${cityKw} استثمار طويل الأمد يحمي مبناك ويقلل فواتيرك. ${context.climate === 'humid-coastal' ? 'العزل المائي ضرورة في المدن الساحلية لحماية المبنى من الرطوبة والملوحة' : 'العزل الحراري يقلل حتى 40% من استهلاك الكهرباء'}. بروكر يربطك بأفضل شركات العزل ${cityKw}.`,
            `فاتورة كهربائك مرتفعة؟ ${service.name_ar} ${cityKw} هو الحل. فوم بولي يوريثان، إيبوكسي، رولات — مواد عزل حديثة مع ضمان يصل 10 سنوات. قارن بين ${count}+ شركة عزل معتمدة.`,
            `${service.name_ar} ${cityKw} بمعايير البناء السعودية. حماية شاملة ضد تسرب المياه والحرارة — أسطح، خزانات، حمامات، وأساسات. فحص مجاني وضمان مكتوب.`,
            `حماية مبناك تبدأ بـ${service.name_ar} الاحترافي ${cityKw}. مواد معتمدة من هيئة المواصفات (SASO) بأيدي فنيين متخصصين. استجابة ${context.responseTime} وأسعار شفافة.`,
        ],
    };

    const templates = categoryTemplates[service.category] || categoryTemplates['cleaning'];
    return getStableRandomItem(templates, `${city.slug}-${service.slug}-intro`);
}

// ==========================================
// 2. WHY CHOOSE US (City Specific)
// ==========================================
function generateWhyUs(city: City, service: Service, context: any): string[] {
    const categoryReasons: Record<string, string[]> = {
        'moving': [
            'فنيين متخصصين في فك وتركيب جميع أنواع الأثاث',
            'تغليف احترافي بمواد عالية الجودة (بابل راب، كرتون، ستريتش)',
            'سيارات نقل مغلقة بأحجام متنوعة',
            'تأمين شامل على الأثاث ضد الكسر والخدش',
            'خدمة ترتيب وتنظيم في المنزل الجديد',
        ],
        'cleaning': [
            'مواد تنظيف آمنة ومعتمدة من هيئة الغذاء والدواء',
            'عمالة مدربة ومؤهلة على أعلى المعايير',
            'أجهزة تنظيف بالبخار وشفط أتربة احترافية',
            'خدمة مفصلة حسب نوع وحجم المكان',
            'ضمان إعادة التنظيف مجاناً في حال عدم الرضا',
        ],
        'pest-control': [
            'مبيدات معتمدة وآمنة على الأطفال والحيوانات الأليفة',
            'ضمان يصل حتى سنة كاملة بعد المعالجة',
            'كشف مجاني لتحديد نوع ودرجة الإصابة',
            'تقنيات متعددة: رش، جل، بخار، طعوم حسب الحالة',
            'خطة متابعة دورية لمنع عودة الحشرات',
        ],
        'sewage': [
            'معدات حديثة: كمبروسر ضغط عالي وكاميرات فحص',
            'خدمة طوارئ 24 ساعة طوال أيام الأسبوع',
            'أسعار ثابتة ومعلنة بدون رسوم إضافية',
            'سيارات شفط بأحجام 10 و 20 طن',
            'ضمان عدم تكرار المشكلة لمدة محددة',
        ],
        'leak-detection': [
            'أجهزة كشف إلكترونية (موجات فوق صوتية + كاميرات حرارية)',
            'فحص بدون تكسير وبدون إتلاف التشطيبات',
            'تقرير فني معتمد من شركة المياه الوطنية',
            'إصلاح فوري بعد تحديد موقع التسرب بدقة',
            'توفير كبير في فاتورة المياه بعد الإصلاح',
        ],
        'insulation': [
            'مواد عزل معتمدة من هيئة المواصفات السعودية (SASO)',
            'ضمان يصل حتى 10 سنوات على مواد العزل',
            'تقليل استهلاك الكهرباء حتى 40% في الصيف',
            'عزل مائي وحراري متكامل للأسطح والخزانات',
            'فحص مجاني وتقرير فني قبل بدء العمل',
        ],
    };

    const climateReason = context.climate === 'humid-coastal'
        ? 'خبرة متخصصة في التعامل مع الرطوبة الساحلية'
        : context.climate === 'mountain'
            ? 'معدات وفرق مجهزة للمناطق الجبلية'
            : 'حلول مخصصة للتعامل مع الحرارة والغبار';

    const reasons = categoryReasons[service.category] || categoryReasons['cleaning'];
    return [climateReason, ...reasons].slice(0, 5);
}

// ==========================================
// 3. LOCAL CHALLENGES & SOLUTIONS
// ==========================================
function generateChallengesAndSolutions(city: City, service: Service, context: any) {
    const specificNuances = context.serviceNuances?.[service.category] || [];
    const generalChallenges = context.challenges || [];
    const challenges = [...specificNuances, ...generalChallenges].slice(0, 3);

    const categorySolutions: Record<string, Record<string, string>> = {
        'moving': {
            'الرطوبة': 'تغليف مزدوج مقاوم للرطوبة مع سيارات نقل مغلقة بالكامل تحمي الأثاث.',
            'الغبار': 'تغليف محكم بالستريتش والبابل راب مع سيارات مغلقة تمنع دخول الأتربة.',
            'الحرارة': 'جدولة النقل في ساعات الصباح الباكر مع سيارات مكيفة للأثاث الحساس.',
            'الازدحام': 'فريق متخصص يختار أفضل الأوقات والطرق البديلة لتجنب الزحام المروري.',
            'الجبلية': 'سيارات مجهزة بأنظمة فرامل قوية ومعدات رفع خاصة بالمنحدرات.',
        },
        'cleaning': {
            'الرطوبة': 'مواد تنظيف مضادة للعفن والفطريات مع تجفيف سريع بأجهزة شفط متخصصة.',
            'الغبار': 'أجهزة شفط أتربة صناعية عالية القدرة مع فلاتر HEPA لتنقية الهواء.',
            'الحرارة': 'تنظيف بالبخار في درجات حرارة عالية يقضي على البكتيريا والجراثيم.',
            'الازدحام': 'فرق تنظيف متعددة في أحياء مختلفة لضمان وصول سريع في أي منطقة.',
            'الجبلية': 'معدات تنظيف متنقلة خفيفة الوزن سهلة النقل في المناطق المرتفعة.',
        },
        'pest-control': {
            'الرطوبة': 'مبيدات خاصة بالحشرات المحبة للرطوبة مع معالجة بؤر التكاثر في الأماكن الرطبة.',
            'الغبار': 'رش وقائي يشكل حاجزاً يمنع دخول الحشرات من الخارج مع سد جميع المنافذ.',
            'الحرارة': 'مكافحة مكثفة في فصل الصيف حيث ينشط تكاثر الحشرات بسبب الحرارة.',
            'الازدحام': 'خدمة مكافحة متوفرة في جميع الأحياء مع إمكانية الحجز في نفس اليوم.',
            'الجبلية': 'خبرة في مكافحة حشرات وزواحف المناطق الجبلية كالعقارب والثعابين.',
        },
        'sewage': {
            'الرطوبة': 'مواسير وتوصيلات مقاومة للتآكل والملوحة مناسبة للمناطق الساحلية.',
            'الغبار': 'كمبروسر ضغط عالي يزيل الانسدادات الناتجة عن تراكم الرمال والأتربة.',
            'الحرارة': 'صيانة دورية في الصيف حيث تتمدد المواسير وتزداد مشاكل الصرف.',
            'الازدحام': 'سيارات شفط مجهزة بأحجام مختلفة تصل لأضيق الأحياء والشوارع الداخلية.',
            'الجبلية': 'معدات خاصة للتعامل مع شبكات الصرف في المنحدرات والتضاريس الوعرة.',
        },
        'leak-detection': {
            'الرطوبة': 'أجهزة كشف متطورة تميز بين الرطوبة الطبيعية وتسريب المياه الفعلي بدقة.',
            'الغبار': 'كاميرات حرارية تكشف التسريب حتى خلف الجدران المغطاة بالأتربة والدهان.',
            'الحرارة': 'فحص المواسير المعرضة للتمدد والانكماش بسبب فروق الحرارة الكبيرة.',
            'الازدحام': 'فنيون متوفرون في جميع أحياء المدينة مع وصول سريع ومعدات محمولة.',
            'الجبلية': 'فحص شبكات المياه المعقدة في المباني المبنية على منحدرات ومرتفعات.',
        },
        'insulation': {
            'الرطوبة': 'عزل مائي متعدد الطبقات يحمي المبنى من تسرب المياه والملوحة الساحلية.',
            'الغبار': 'عزل محكم يمنع تسلل الأتربة ويحسن جودة الهواء داخل المبنى.',
            'الحرارة': 'فوم بولي يوريثان بسماكة مناسبة يقلل حرارة السطح حتى 15 درجة مئوية.',
            'الازدحام': 'فرق عمل متخصصة تنجز العزل في وقت قياسي دون إزعاج الجيران.',
            'الجبلية': 'عزل مزدوج (حراري + مائي) مناسب لتقلبات الطقس في المرتفعات الجبلية.',
        },
    };

    const solutionsMap = categorySolutions[service.category] || categorySolutions['cleaning'];
    const solutions = challenges.map((challenge: string) => {
        const key = Object.keys(solutionsMap).find(k => challenge.includes(k));
        return key ? solutionsMap[key] : 'نقدم حلولاً مبتكرة ومخصصة لهذا التحدي لضمان أفضل النتائج.';
    });

    return { challenges, solutions };
}

// ==========================================
// 4. SUCCESS STORIES (Simulated)
// ==========================================
function generateSuccessStories(city: City, service: Service, context: any) {
    const neighborhood = context.neighborhoods[0]?.name_ar || 'وسط المدينة';
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);

    const categoryStories: Record<string, { title: string; result: string }[]> = {
        'moving': [
            {
                title: `نقل فيلا كاملة في ${neighborhood}`,
                result: `تم نقل أثاث فيلا من 3 طوابق في حي ${neighborhood} — فك وتغليف 120 قطعة وتوصيلها بدون أي خدش خلال يوم واحد.`
            },
            {
                title: `نقل عاجل ${cityKw}`,
                result: `استجابة خلال ${context.responseTime} لطلب نقل عاجل ${cityKw}. تم التغليف والتحميل والتوصيل في نفس اليوم مع ضمان شامل على جميع القطع.`
            },
        ],
        'cleaning': [
            {
                title: `تنظيف عميق في ${neighborhood}`,
                result: `تنظيف شقة 5 غرف في حي ${neighborhood} تنظيفاً عميقاً شاملاً — بخار وتعقيم وإزالة بقع صعبة. النتيجة: نظافة بمعايير فندقية.`
            },
            {
                title: `تنظيف بعد البناء ${cityKw}`,
                result: `فريق متخصص أنهى تنظيف فيلا جديدة ${cityKw} بعد أعمال التشطيب — إزالة بقايا الدهان والجبس وتلميع جميع الأسطح في يومين.`
            },
        ],
        'pest-control': [
            {
                title: `إبادة شاملة في ${neighborhood}`,
                result: `معالجة إصابة شديدة بالحشرات في منزل بحي ${neighborhood} — تم القضاء على المشكلة نهائياً بعد جلستين مع ضمان 6 أشهر.`
            },
            {
                title: `رش وقائي ${cityKw}`,
                result: `رش وقائي شامل لمجمع سكني ${cityKw}. بعد ${context.responseTime} من التواصل، تم معالجة 15 وحدة سكنية مع ضمان سنة كاملة.`
            },
        ],
        'sewage': [
            {
                title: `فتح انسداد طارئ في ${neighborhood}`,
                result: `استجابة طوارئ لانسداد صرف كامل في حي ${neighborhood}. وصل الفريق خلال ${context.responseTime} وتم فتح الانسداد بالكمبروسر في 30 دقيقة.`
            },
            {
                title: `شفط وتنظيف بيارة ${cityKw}`,
                result: `شفط وتنظيف بيارة كبيرة ${cityKw} بسيارة 20 طن. تم إنجاز العمل مع تنظيف الموقع بالكامل وبسعر ثابت بدون إضافات.`
            },
        ],
        'leak-detection': [
            {
                title: `كشف تسريب مخفي في ${neighborhood}`,
                result: `اكتشاف تسريب مياه خلف جدار في حي ${neighborhood} بالكاميرا الحرارية — إصلاح بدون تكسير ووفر العميل 70% من فاتورة المياه.`
            },
            {
                title: `فحص شامل ${cityKw}`,
                result: `فحص إلكتروني شامل لشبكة المياه في مبنى ${cityKw} — تحديد 3 نقاط تسريب وإصلاحها مع تقرير معتمد خلال يوم واحد.`
            },
        ],
        'insulation': [
            {
                title: `عزل سطح فيلا في ${neighborhood}`,
                result: `عزل سطح فيلا 400م² في حي ${neighborhood} بالفوم — انخفضت حرارة الطابق العلوي 12 درجة وفاتورة الكهرباء 35% في أول شهر.`
            },
            {
                title: `عزل خزان معتمد ${cityKw}`,
                result: `عزل خزان أرضي ${cityKw} بمادة الإيبوكسي المعتمدة. شهادة صلاحية من شركة المياه مع ضمان 10 سنوات.`
            },
        ],
    };

    return categoryStories[service.category] || categoryStories['cleaning'];
}

// ==========================================
// 5. FEATURED SNIPPET ANSWER
// ==========================================
function generateShortAnswer(city: City, service: Service, minPrice: number): string {
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);
    return `تبدأ أسعار ${service.name_ar} ${cityKw} من ${minPrice} ريال تقريباً لعام 2026. ${profile.usp}. قارن بين أفضل الشركات المعتمدة ${cityKw} عبر بروكر لضمان الجودة وأفضل سعر.`;
}

// ==========================================
// MAIN GENERATOR FUNCTION
// ==========================================
export function generateContentLayers(city: City, service: Service): ContentLayers {
    const context = CITY_CONTEXT[city.slug] || CITY_CONTEXT['riyadh']; // Fallback

    // Calculate base price estimate for Snippet
    const baseMin = 300 * (context.priceModifier || 1);

    const { challenges, solutions } = generateChallengesAndSolutions(city, service, context);

    return {
        introduction: generateIntroduction(city, service, context),
        whyUs: generateWhyUs(city, service, context),
        localChallenges: challenges,
        customSolutions: solutions,
        successStories: generateSuccessStories(city, service, context),
        shortAnswer: generateShortAnswer(city, service, Math.round(baseMin)),
        metaTitle: generateMetaTitle(city, service, Math.round(baseMin)),
        h1: generateH1(city, service)
    };
}

// ==========================================
// 6. DYNAMIC TITLES & H1s
// ==========================================

export function generateMetaTitle(city: City, service: Service, minPrice: number): string {
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);
    const context = CITY_CONTEXT[city.slug];
    const companiesCount = Math.floor(30 * (context?.priceModifier || 1));

    return resolveKeywordTemplate(profile.metaTitle, {
        city: cityKw,
        cityName: city.name_ar,
        serviceName: service.name_ar,
        price: minPrice,
        count: companiesCount,
    });
}

export function generateH1(city: City, service: Service): string {
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);

    return resolveKeywordTemplate(profile.h1, {
        city: cityKw,
        cityName: city.name_ar,
        serviceName: service.name_ar,
    });
}

// For Page: /[city]
export function generateCityMeta(city: City): { title: string; h1: string } {
    const cityKw = getCityKeyword(city.name_ar, 'ba');

    return {
        title: `خدمات منزلية ${cityKw} — نقل عفش، تنظيف، مكافحة حشرات، كشف تسربات 2026`,
        h1: `دليل الخدمات المنزلية ${cityKw} — أفضل الشركات المعتمدة 2026`,
    };
}

// For Page: /services-page/[service]
export function generateServiceCategoryMeta(service: Service): { title: string; h1: string } {
    return {
        title: `أفضل شركات ${service.name_ar} في السعودية — الرياض، جدة، الدمام وكل المدن 2026`,
        h1: `دليل شركات ${service.name_ar} في السعودية — مقارنة أسعار كل المدن 2026`,
    };
}
