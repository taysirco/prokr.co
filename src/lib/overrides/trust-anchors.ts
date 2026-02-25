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
