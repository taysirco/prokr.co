import { PricingItem } from '../types';

export const pestControlPricing: Record<string, PricingItem[]> = {
    'pest-control': [
        { type: 'شقة صغيرة — رش شامل', unit: 'رش شامل', minPrice: 150, maxPrice: 250 },
        { type: 'شقة متوسطة/كبيرة — رش شامل', unit: 'رش شامل', minPrice: 250, maxPrice: 400 },
        { type: 'فيلا — رش + معالجة حديقة', unit: 'رش شامل', minPrice: 400, maxPrice: 700 },
        { type: 'مكافحة النمل الأبيض', unit: 'للمتر المربع', minPrice: 15, maxPrice: 25 },
        { type: 'عقد سنوي (4 زيارات)', unit: '4 زيارات', minPrice: 800, maxPrice: 1500 },
    ],
    'termite-control': [
        { type: 'معالجة موضعية — نقطة إصابة', unit: 'نقطة', minPrice: 300, maxPrice: 500 },
        { type: 'معالجة شاملة (شقة) — حقن أرضي', unit: 'وحدة', minPrice: 1000, maxPrice: 2000 },
        { type: 'معالجة شاملة (فيلا) — حقن + حاجز كيميائي', unit: 'وحدة', minPrice: 2000, maxPrice: 5000 },
        { type: 'حماية ما قبل البناء — مانع نمل أبيض', unit: 'للمتر المربع', minPrice: 20, maxPrice: 40 },
    ],
    'pesticide-spraying': [
        { type: 'رش مبيدات — شقة', unit: 'جلسة', minPrice: 150, maxPrice: 250 },
        { type: 'رش مبيدات — فيلا', unit: 'جلسة', minPrice: 300, maxPrice: 500 },
        { type: 'رش مبيدات — مستودع / مزرعة', unit: 'جلسة', minPrice: 500, maxPrice: 1000 },
        { type: 'رش وقائي شهري', unit: 'شهرياً', minPrice: 200, maxPrice: 400 },
    ],
    'insects-spraying': [
        { type: 'رش حشرات — شقة', unit: 'جلسة', minPrice: 150, maxPrice: 250 },
        { type: 'رش حشرات — فيلا مع حديقة', unit: 'جلسة', minPrice: 300, maxPrice: 550 },
        { type: 'رش حشرات — محل تجاري / مطعم', unit: 'جلسة', minPrice: 250, maxPrice: 450 },
    ],
    'cockroach-control': [
        { type: 'مكافحة صراصير — شقة (جل + رش)', unit: 'جلسة', minPrice: 150, maxPrice: 250 },
        { type: 'مكافحة صراصير — فيلا', unit: 'جلسة', minPrice: 300, maxPrice: 500 },
        { type: 'مكافحة صراصير — مطعم / مطبخ تجاري', unit: 'جلسة', minPrice: 400, maxPrice: 700 },
    ],
    'bedbugs-control': [
        { type: 'مكافحة بق — غرفة واحدة', unit: 'غرفة', minPrice: 200, maxPrice: 350 },
        { type: 'مكافحة بق — شقة (بخار + كيميائي)', unit: 'شقة', minPrice: 400, maxPrice: 700 },
        { type: 'مكافحة بق — فيلا (معالجة شاملة)', unit: 'فيلا', minPrice: 700, maxPrice: 1200 },
    ],
    'rodent-control': [
        { type: 'مكافحة فئران — شقة', unit: 'جلسة', minPrice: 200, maxPrice: 350 },
        { type: 'مكافحة فئران — فيلا + حديقة', unit: 'جلسة', minPrice: 350, maxPrice: 600 },
        { type: 'مكافحة فئران — مستودع / مزرعة', unit: 'جلسة', minPrice: 500, maxPrice: 1000 },
    ],
    'ants-control': [
        { type: 'مكافحة نمل — شقة', unit: 'جلسة', minPrice: 100, maxPrice: 200 },
        { type: 'مكافحة نمل — فيلا + حديقة', unit: 'جلسة', minPrice: 200, maxPrice: 400 },
        { type: 'مكافحة نمل — عقد وقائي (3 زيارات)', unit: 'عقد', minPrice: 400, maxPrice: 700 },
    ],
    'bird-control': [
        { type: 'تركيب طارد حمام — نافذة واحدة', unit: 'نافذة', minPrice: 50, maxPrice: 100 },
        { type: 'تركيب طارد حمام — شقة كاملة', unit: 'شقة', minPrice: 300, maxPrice: 600 },
        { type: 'تركيب شبك + أسلاك — فيلا / سطح', unit: 'وحدة', minPrice: 500, maxPrice: 1200 },
    ],
    'snakes-control': [
        { type: 'إزالة ثعبان — حالة طارئة', unit: 'زيارة', minPrice: 200, maxPrice: 400 },
        { type: 'مكافحة ثعابين — فيلا + حديقة', unit: 'جلسة', minPrice: 400, maxPrice: 700 },
        { type: 'حاجز وقائي ضد الزواحف — محيط المنزل', unit: 'وحدة', minPrice: 500, maxPrice: 1000 },
    ],
};
