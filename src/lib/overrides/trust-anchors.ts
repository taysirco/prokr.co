// ═══════════════════════════════════════════════════════════════
// Trust Anchors Database — قاعدة بيانات كيانات الثقة
// كل الجهات الحكومية + الخبراء الحقيقيين في السعودية
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────
// 1. الجهات الحكومية (Government Entities)
// ─────────────────────────────────────────

export const GOV = {
    // ─── قطاع المياه والتسربات ───
    NWC: {
        entity: 'شركة المياه الوطنية',
        acronym: 'NWC',
        url: 'https://www.nwc.com.sa',
        role: 'المرجع الأول لفواتير المياه والتقارير المعتمدة لتعديل الفاتورة',
    },
    MAWAI: {
        entity: 'المركز الوطني لكفاءة وترشيد المياه',
        acronym: 'مائي',
        url: 'https://www.nwrc.gov.sa',
        role: 'المشرف على تطبيق "كشف" ومعايير ترشيد المياه',
    },
    SCE: {
        entity: 'الهيئة السعودية للمهندسين',
        acronym: 'SCE',
        url: 'https://www.saudieng.sa',
        role: 'اعتماد المهندسين المدنيين وفاحصي المباني',
    },

    // ─── قطاع مكافحة الحشرات ───
    SFDA: {
        entity: 'الهيئة العامة للغذاء والدواء',
        acronym: 'SFDA',
        url: 'https://www.sfda.gov.sa',
        role: 'تسجيل مبيدات الصحة العامة عبر نظام "غد" ومراقبة سلامة المبيدات',
    },
    WEQAA: {
        entity: 'المركز الوطني للوقاية من الأمراض ومكافحتها',
        acronym: 'وقاء',
        url: 'https://weqaya.sa',
        role: 'إرشادات الوقاية من الآفات والأمراض المنقولة بالحشرات',
    },

    // ─── قطاع النقل واللوجستيات ───
    TGA: {
        entity: 'الهيئة العامة للنقل',
        acronym: 'TGA',
        url: 'https://www.tga.gov.sa',
        role: 'التشريع والتنظيم — تراخيص النقل البري والبحري',
    },
    LOGISTI: {
        entity: 'منصة لوجستي — بوابة النقل',
        acronym: 'لوجستي',
        url: 'https://logisti.sa',
        role: 'إصدار تراخيص النقل وبيان الحمولة إلكترونياً',
    },

    // ─── قطاع النظافة وإدارة المرافق ───
    BALADI: {
        entity: 'وزارة البلديات والإسكان — منصة بلدي',
        acronym: 'بلدي',
        url: 'https://balady.gov.sa',
        role: 'إصدار الرخص التجارية والشهادات الصحية لشركات النظافة',
    },
    HRSD: {
        entity: 'وزارة الموارد البشرية والتنمية الاجتماعية',
        acronym: 'HRSD',
        url: 'https://hrsd.gov.sa',
        role: 'تنظيم عقود العمالة واعتماد شركات التشغيل والنظافة',
    },

    // ─── قطاع العزل والبناء ───
    SBC: {
        entity: 'كود البناء السعودي',
        acronym: 'SBC',
        url: 'https://www.sbc.gov.sa',
        role: 'اشتراطات العزل الحراري والمائي (SBC 601/602)',
    },
    MOENERGY: {
        entity: 'المركز السعودي لكفاءة الطاقة',
        acronym: 'كفاءة',
        url: 'https://seec.gov.sa',
        role: 'معايير كفاءة الطاقة في المباني والأجهزة',
    },

    // ─── قطاع الصحة والتعقيم ───
    MOH: {
        entity: 'وزارة الصحة السعودية',
        acronym: 'MOH',
        url: 'https://www.moh.gov.sa',
        role: 'بروتوكولات التعقيم وتنظيف الخزانات لحماية الأسرة',
    },
    CIVILDEFENSE: {
        entity: 'المديرية العامة للدفاع المدني',
        acronym: '998',
        url: 'https://www.998.gov.sa',
        role: 'إرشادات الوقاية من حرائق المطابخ والمداخن والسلامة المنزلية',
    },
    SASO: {
        entity: 'الهيئة السعودية للمواصفات والمقاييس',
        acronym: 'SASO',
        url: 'https://www.saso.gov.sa',
        role: 'اعتماد مواد التنظيف والجلي المطابقة للمواصفات السعودية',
    },
    MAEE: {
        entity: 'المركز الوطني لكفاءة وترشيد المياه',
        acronym: 'مائي',
        url: 'https://maee.gov.sa',
        role: 'الجهة المسؤولة عن كشف التسربات وتطبيق كشف وترشيد المياه',
    },

    // ─── قطاع الزكاة والضريبة ───
    ZATCA: {
        entity: 'هيئة الزكاة والضريبة والجمارك',
        acronym: 'ZATCA',
        url: 'https://zatca.gov.sa',
        role: 'الفوترة الإلكترونية — التحقق من امتثال الشركات لنظام فاتورة الإلكترونية',
    },

    // ─── قطاع العمالة والتوظيف ───
    QIWA: {
        entity: 'منصة قوى — وزارة الموارد البشرية',
        acronym: 'قوى',
        url: 'https://qiwa.sa',
        role: 'توثيق العقود وإدارة العلاقة التعاقدية للعمالة + منصة أجير للتأجير النظامي',
    },
    NITAQAT: {
        entity: 'برنامج نطاقات — وزارة الموارد البشرية',
        acronym: 'نطاقات',
        url: 'https://hrsd.gov.sa',
        role: 'تصنيف الشركات بحسب نسبة التوطين — النطاق الأخضر = شركة ملتزمة',
    },
} as const;


// ─────────────────────────────────────────
// 2. الخبراء الحقيقيون (Real Human Experts)
// ─────────────────────────────────────────

export const EXPERTS = {
    // ═══ خبراء البناء والتسربات والعزل ═══

    ALJUND: {
        name: 'م. عبدالغني الجند',
        title: 'مؤلف موسوعة "أخطاء في البناء"',
        credential: 'مهندس مدني — أشهر متخصص في عيوب البناء بالسعودية',
        profileUrl: 'https://x.com/ssrrr22',
        sector: 'building' as const,
    },
    ALMOHAIMED: {
        name: 'م. ماجد المحيميد',
        title: 'خبير جودة تشطيبات وعزل',
        credential: 'مهندس مدني معتمد — المرجع الأول في جودة البناء والتشطيبات',
        profileUrl: 'https://x.com/majedalmohaimed',
        sector: 'building' as const,
    },
    SHIHATA: {
        name: 'م. إسلام شحاتة',
        title: 'مهندس مدني — تصميم بنية تحتية',
        credential: 'خبير في الكود السعودي SBC وأنظمة الصرف والمياه',
        profileUrl: 'https://mostaql.com/u/Eslam_Shihata',
        sector: 'building' as const,
    },
    M_SAID: {
        name: 'م. محمود سعيد',
        title: 'مهندس مدني — حصر هندسي وتنفيذ',
        credential: 'خبير في الحصر الهندسي وإشراف التنفيذ',
        profileUrl: 'https://mostaql.com/u/M1_Said',
        sector: 'building' as const,
    },
    WISSAM: {
        name: 'م. وسام',
        title: 'مهندس دراسات إنشائية',
        credential: 'متخصص في الكود الإنشائي السعودي والتحليل الهيكلي',
        profileUrl: 'https://mostaql.com/u/wissam_sle121',
        sector: 'building' as const,
    },

    // ═══ خبراء الصحة العامة والحشرات ═══

    ALKHODAIRY: {
        name: 'أ.د. فهد الخضيري',
        title: 'عالم أبحاث طبي — متخصص في السموم والصحة العامة',
        credential: 'أستاذ وباحث في المسرطنات والسموم البيئية — المرجع الأول للتحذير من المبيدات السامة',
        profileUrl: 'https://x.com/DrAlkhodairy',
        sector: 'health' as const,
    },
    ALMISNID: {
        name: 'أ.د. عبدالله المسند',
        title: 'أستاذ المناخ والبيئة',
        credential: 'أستاذ جغرافيا المناخ — المرجع الأول لمواسم الحشرات والظواهر المناخية في السعودية',
        profileUrl: 'https://x.com/ALMISNID',
        sector: 'climate' as const,
    },

    // ═══ خبراء النقل واللوجستيات ═══

    ALZUWAYED: {
        name: 'أ. صالح الزويد',
        title: 'المتحدث الرسمي للهيئة العامة للنقل',
        credential: 'المتحدث الرسمي — مرجع لاشتراطات النقل الآمن والتراخيص',
        profileUrl: 'https://x.com/SalehAlZuwayed',
        sector: 'transport' as const,
    },
    ALSHABNAN: {
        name: 'م. صالح الشبنان',
        title: 'خبير خدمات لوجستية وسلاسل إمداد',
        credential: 'من أبرز متخصصي اللوجستيات في السوق السعودي',
        profileUrl: 'https://x.com/SalehAlshabnan',
        sector: 'transport' as const,
    },
} as const;


// ─────────────────────────────────────────
// 3. ربط الخبراء بالقطاعات (Expert → Sector)
// ─────────────────────────────────────────

/** خبراء مراجعة قطاع التسربات والعزل والبناء */
export const LEAK_REVIEWERS = [EXPERTS.ALJUND, EXPERTS.ALMOHAIMED, EXPERTS.SHIHATA] as const;

/** خبراء مراجعة قطاع مكافحة الحشرات */
export const PEST_REVIEWERS = [EXPERTS.ALKHODAIRY, EXPERTS.ALMISNID] as const;

/** خبراء مراجعة قطاع النقل */
export const TRANSPORT_REVIEWERS = [EXPERTS.ALZUWAYED, EXPERTS.ALSHABNAN] as const;

/** خبراء مراجعة قطاع العزل */
export const INSULATION_REVIEWERS = [EXPERTS.ALJUND, EXPERTS.ALMOHAIMED, EXPERTS.WISSAM] as const;


// ─────────────────────────────────────────
// 4. أنظمة وأكواد سعودية (Saudi Regulations)
// ─────────────────────────────────────────

export const REGULATIONS = {
    SBC_601: {
        code: 'SBC 601',
        description: 'كود البناء السعودي — متطلبات كفاءة الطاقة والعزل الحراري',
        url: 'https://www.sbc.gov.sa',
    },
    SBC_602: {
        code: 'SBC 602',
        description: 'كود البناء السعودي — متطلبات العزل المائي وحماية المباني من الرطوبة',
        url: 'https://www.sbc.gov.sa',
    },
    GHAD_SYSTEM: {
        code: 'نظام غد — SFDA',
        description: 'منصة تسجيل مبيدات الصحة العامة — كل مبيد يُستخدم يجب أن يكون مسجلاً',
        url: 'https://www.sfda.gov.sa',
    },
    NWC_REPORT: {
        code: 'نظام التقارير المعتمدة — NWC',
        description: 'تقرير فني معتمد يُقدم لشركة المياه الوطنية لتعديل الفاتورة بأثر رجعي',
        url: 'https://www.nwc.com.sa',
    },
    TGA_LICENSE: {
        code: 'ترخيص النقل البري — TGA',
        description: 'كل شركة نقل ملزمة بترخيص الهيئة العامة للنقل وبيان حمولة عبر منصة لوجستي',
        url: 'https://logisti.sa',
    },
    BALADI_HEALTH: {
        code: 'الشهادة الصحية — بلدي',
        description: 'شركات النظافة ملزمة بشهادة صحية من منصة بلدي لمزاولة النشاط',
        url: 'https://balady.gov.sa',
    },
} as const;


// ─────────────────────────────────────────
// 5. الأمانات الجغرافية (Geographic Trust Anchors)
// ─────────────────────────────────────────

export const AMANA = {
    // ═══ المنطقة الوسطى ═══
    RIYADH: { entity: 'أمانة منطقة الرياض', url: 'https://www.alriyadh.gov.sa/', cities: ['riyadh', 'al-kharj'] },
    QASSIM: { entity: 'أمانة منطقة القصيم', url: 'https://www.qassim.gov.sa/', cities: ['qassim', 'buraidah', 'onizah'] },

    // ═══ المنطقة الغربية ═══
    JEDDAH: { entity: 'أمانة محافظة جدة', url: 'https://www.jeddah.gov.sa/', cities: ['jeddah'] },
    MAKKAH: { entity: 'أمانة العاصمة المقدسة', url: 'https://holymakkah.gov.sa/', cities: ['makkah'] },
    MADINAH: { entity: 'أمانة منطقة المدينة المنورة', url: 'https://www.amana-md.gov.sa/', cities: ['madinah', 'yanbu'] },
    TAIF: { entity: 'أمانة محافظة الطائف', url: 'https://www.taifcity.gov.sa/', cities: ['taif'] },

    // ═══ المنطقة الشرقية ═══
    SHARQIA: { entity: 'أمانة المنطقة الشرقية', url: 'https://www.eamana.gov.sa/', cities: ['dammam', 'al-khobar', 'dhahran', 'jubail', 'qatif'] },
    AHSA: { entity: 'أمانة محافظة الأحساء', url: 'https://www.alhasa.gov.sa/', cities: ['al-ahsa'] },
    HAFR: { entity: 'أمانة محافظة حفر الباطن', url: 'https://www.hafr.gov.sa/', cities: ['hafr-albatin'] },

    // ═══ المنطقة الشمالية ═══
    TABUK: { entity: 'أمانة منطقة تبوك', url: 'https://www.tabukm.gov.sa/', cities: ['tabuk'] },
    HAIL: { entity: 'أمانة منطقة حائل', url: 'https://www.amanathail.gov.sa/', cities: ['hail'] },

    // ═══ المنطقة الجنوبية ═══
    ASIR: { entity: 'أمانة منطقة عسير', url: 'https://ars.gov.sa/', cities: ['abha', 'khamis-mushait'] },
    NAJRAN: { entity: 'أمانة منطقة نجران', url: 'https://www.najran.gov.sa/', cities: ['najran'] },
    JAZAN: { entity: 'أمانة منطقة جازان', url: 'https://www.jazan.gov.sa/', cities: ['jazan'] },
    BAHA: { entity: 'أمانة منطقة الباحة', url: 'https://www.albaham.gov.sa/', cities: ['al-baha'] },
} as const;


/**
 * Get the Amana trust anchor for a specific city
 */
export function getAmanaForCity(citySlug: string): { entity: string; url: string } | null {
    for (const amana of Object.values(AMANA)) {
        if ((amana.cities as readonly string[]).includes(citySlug)) {
            return { entity: amana.entity, url: amana.url };
        }
    }
    return null;
}

