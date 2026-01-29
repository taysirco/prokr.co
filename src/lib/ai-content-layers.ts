import { City, Service } from '@/types';
import { CITY_CONTEXT } from './city-context';

// Types for the AI Content Layers
export interface ContentLayers {
    introduction: string;
    whyUs: string[];
    localChallenges: string[];
    customSolutions: string[];
    successStories: { title: string; result: string }[];
    shortAnswer: string; // For Google Featured Snippets
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
    const templates = [
        `هل تبحث عن خدمات ${service.name_ar} احترافية في ${city.name_ar}؟ نحن ندرك تماماً تحديات ${context.climate === 'humid-coastal' ? 'الرطوبة الساحلية التي تؤثر على ممتلكاتك' : 'الأجواء الحارة التي تتطلب عناية خاصة'}. بروكر يربطك بأفضل المتخصصين المحليين.`,

        `تتميز ${city.name_ar} بكونها ${context.urbanTraits[0]}، مما يجعل الحصول على ${service.name_ar} موثوقة أمراً ضرورياً. وفرنا لك نخبة الشركات التي تغطي جميع أحياء ${city.name_ar}.`,

        `في ${city.name_ar}، تتطلب ${service.name_ar} خبرة خاصة للتعامل مع ${context.challenges[0]}. احصل على عروض أسعار تنافسية وضمان شامل من شركائنا المعتمدين.`,

        `خدمة ${service.name_ar} في ${city.name_ar} بمفهوم جديد. نغطي كافة الأحياء ونضمن لك سرعة الاستجابة ${context.responseTime} مع الالتزام بأعلى معايير الجودة.`,
    ];

    return getStableRandomItem(templates, `${city.slug}-${service.slug}-intro`);
}

// ==========================================
// 2. WHY CHOOSE US (City Specific)
// ==========================================
function generateWhyUs(city: City, service: Service, context: any): string[] {
    const commonReasons = [
        'أسعار شفافة وبدون رسوم خفية',
        'ضمان شامل على الخدمة',
        'خدمة عملاء 24/7',
    ];

    const citySpecificReasons = [];

    if (context.climate === 'humid-coastal') {
        citySpecificReasons.push('مواد خاصة مقاومة للرطوبة والصدأ');
        citySpecificReasons.push('خبرة في التعامل مع أجواء المدن الساحلية');
    } else if (context.climate === 'dry-hot') {
        citySpecificReasons.push('حماية قصوى من الغبار والحرارة');
        citySpecificReasons.push('تقنيات متطورة تناسب الأجواء الجافة');
    } else if (context.climate === 'mountain') {
        citySpecificReasons.push('معدات مجهزة للمناطق الجبلية والمرتفعات');
        citySpecificReasons.push('سائقون وفنيون خبارى بتضاريس المنطقة');
    }

    if (context.priceModifier > 1.1) {
        citySpecificReasons.push('عروض خاصة لتقليل التكلفة في المناطق الحيوية');
    } else {
        citySpecificReasons.push('أفضل قيمة مقابل السعر في المنطقة');
    }

    return [...citySpecificReasons, ...commonReasons].slice(0, 4);
}

// ==========================================
// 3. LOCAL CHALLENGES & SOLUTIONS
// ==========================================
function generateChallengesAndSolutions(city: City, service: Service, context: any) {
    // Get service-specific nuances from city context
    const specificNuances = context.serviceNuances?.[service.category] || [];
    const generalChallenges = context.challenges || [];

    // Combine and format
    const challenges = [
        ...specificNuances,
        ...generalChallenges
    ].slice(0, 3); // Take top 3

    const solutionsMap: Record<string, string> = {
        'الرطوبة': 'نستخدم مواد عزل وتغليف بمعايير عالمية مقاومة للرطوبة.',
        'الغبار': 'فريقنا يستخدم أجهزة تنظيف وتغليف محكمة تمنع تسلل الغبار.',
        'الحرارة': 'نحرص على العمل في الأوقات المناسبة واستخدام مواد تتحمل درجات الحرارة العالية.',
        'الازدحام': 'نخطط مساراتنا بعناية لضمان الوصول في الموعد المحدد.',
        'الجبلية': 'أسطولنا مجهز بمركبات قوية ومعدات رفع تناسب المرتفعات.',
    };

    const solutions = challenges.map((challenge: string) => {
        // Find matching solution keyword
        const key = Object.keys(solutionsMap).find(k => challenge.includes(k));
        return key ? solutionsMap[key] : 'نقدم حلولاً مبتكرة ومخصصة لهذا التحدي لضمان راحتك.';
    });

    return { challenges, solutions };
}

// ==========================================
// 4. SUCCESS STORIES (Simulated)
// ==========================================
function generateSuccessStories(city: City, service: Service, context: any) {
    const neighborhood = context.neighborhoods[0]?.name_ar || 'وسط المدينة';

    return [
        {
            title: `إنجاز في ${neighborhood}`,
            result: `تم تنفيذ خدمة ${service.name_ar} لعميلنا في حي ${neighborhood} بنجاح تام، مع التغلب على تحدي ${context.challenges[0] || 'ضيق الوقت'} بفضل التخطيط المسبق.`
        },
        {
            title: 'خدمة عاجلة',
            result: `استجابة سريعة لطلب طارئ في ${city.name_ar}، حيث وصل فريقنا ${context.responseTime} وتم إنجاز العمل بأعلى جودة.`
        }
    ];
}

// ==========================================
// 5. FEATURED SNIPPET ANSWER
// ==========================================
function generateShortAnswer(city: City, service: Service, minPrice: number): string {
    return `تبدأ أسعار ${service.name_ar} في ${city.name_ar} من ${minPrice} ريال تقريباً لعام 2026. تختلف التكلفة حسب حجم العمل والموقع، ونحن في بروكر نوفر لك مقارنة بين أفضل الشركات المعتمدة لضمان الجودة والسعر المناسب.`;
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
        shortAnswer: generateShortAnswer(city, service, Math.round(baseMin))
    };
}
