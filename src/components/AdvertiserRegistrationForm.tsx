'use client';

import { useState } from 'react';
import {
    Building2,
    Phone,
    User,
    FileText,
    MapPin,
    Wrench,
    Upload,
    X,
    Loader2,
    CheckCircle,
    Crown,
    Star,
    Image as ImageIcon,
} from 'lucide-react';
import { CITIES, SERVICES, getCitiesByRegion, getServicesByCategory, CATEGORY_NAMES } from '@/lib/seed';
import { uploadPublicLogo, uploadPublicGallery, validateFile, generateShortCode } from '@/lib/storage';
import { createAdvertiserRequest } from '@/lib/db-actions';

// Region names
const regionNames: Record<string, string> = {
    central: 'المنطقة الوسطى',
    western: 'المنطقة الغربية',
    eastern: 'المنطقة الشرقية',
    northern: 'المنطقة الشمالية',
    southern: 'المنطقة الجنوبية',
};

interface AdvertiserRegistrationFormProps {
    initialPlan?: 'free' | 'premium';
    onSuccess?: () => void;
}

export default function AdvertiserRegistrationForm({
    initialPlan = 'free',
    onSuccess
}: AdvertiserRegistrationFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form state
    const [form, setForm] = useState({
        business_name: '',
        contact_name: '',
        phone_number: '',
        whatsapp_number: '',
        description: '',
        targeted_cities: [] as string[],
        targeted_services: [] as string[],
        region: '',
        selected_plan: initialPlan as 'free' | 'premium',
    });

    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
    const [error, setError] = useState('');

    const citiesByRegion = getCitiesByRegion();
    const servicesByCategory = getServicesByCategory();

    const handleCityToggle = (citySlug: string) => {
        setForm(prev => ({
            ...prev,
            targeted_cities: prev.targeted_cities.includes(citySlug)
                ? prev.targeted_cities.filter(c => c !== citySlug)
                : [...prev.targeted_cities, citySlug]
        }));
    };

    const handleServiceToggle = (serviceSlug: string) => {
        setForm(prev => ({
            ...prev,
            targeted_services: prev.targeted_services.includes(serviceSlug)
                ? prev.targeted_services.filter(s => s !== serviceSlug)
                : [...prev.targeted_services, serviceSlug]
        }));
    };

    const handleRegionChange = (region: string) => {
        setForm(prev => ({
            ...prev,
            region,
            // Auto-select cities in the region
            targeted_cities: citiesByRegion[region]?.map(c => c.slug) || []
        }));
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const validation = validateFile(file);
            if (!validation.valid) {
                setError(validation.error || 'خطأ في الملف');
                return;
            }
            setLogoFile(file);
            setError('');
        }
    };

    const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const maxFiles = 11; // Maximum 11 images for all plans

        for (const file of files) {
            const validation = validateFile(file);
            if (!validation.valid) {
                setError(validation.error || 'خطأ في الملف');
                return;
            }
        }

        setGalleryFiles(prev => [...prev, ...files].slice(0, maxFiles));
        setError('');
    };

    const removeGalleryImage = (index: number) => {
        setGalleryFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // Validation
            if (!form.business_name.trim()) {
                throw new Error('يرجى إدخال اسم الشركة');
            }
            if (!form.contact_name.trim()) {
                throw new Error('يرجى إدخال اسم المسؤول');
            }
            if (!form.phone_number.trim()) {
                throw new Error('يرجى إدخال رقم التواصل');
            }
            if (!form.description.trim()) {
                throw new Error('يرجى إدخال وصف الشركة');
            }
            if (form.targeted_cities.length === 0) {
                throw new Error('يرجى اختيار مدينة واحدة على الأقل');
            }
            if (form.targeted_services.length === 0) {
                throw new Error('يرجى اختيار خدمة واحدة على الأقل');
            }
            if (!form.region) {
                throw new Error('يرجى اختيار المنطقة');
            }

            // Generate unique request ID for file uploads
            const requestId = generateShortCode(8);

            // Upload files to public folder
            let logoUrl = '';
            if (logoFile) {
                logoUrl = await uploadPublicLogo(logoFile, requestId);
            }

            let galleryUrls: string[] = [];
            if (galleryFiles.length > 0) {
                galleryUrls = await uploadPublicGallery(galleryFiles, requestId);
            }

            // Create the request
            await createAdvertiserRequest(form, logoUrl, galleryUrls);

            setIsSuccess(true);
            onSuccess?.();

        } catch (err) {
            setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-emerald-50 rounded-3xl p-8 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    تم إرسال طلبك بنجاح!
                </h3>
                <p className="text-gray-600 mb-6">
                    سيتم مراجعة طلبك من قبل فريقنا والتواصل معك قريباً.
                    <br />
                    شكراً لاختيارك بروكر!
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
                >
                    إرسال طلب آخر
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8" id="registration-form">
            {/* Error Message */}
            {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                    {error}
                </div>
            )}

            {/* Plan Selection */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Crown className="w-5 h-5 text-amber-500" />
                    اختر الباقة
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Free Plan */}
                    <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, selected_plan: 'free' }))}
                        className={`p-4 rounded-xl border-2 text-right transition-all ${form.selected_plan === 'free'
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-gray-900">الباقة المجانية</span>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${form.selected_plan === 'free' ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'
                                }`}>
                                {form.selected_plan === 'free' && <CheckCircle className="w-3 h-3 text-white" />}
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">3 مدن · 2 خدمات · 3 صور</p>
                    </button>

                    {/* Premium Plan */}
                    <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, selected_plan: 'premium' }))}
                        className={`relative p-4 rounded-xl border-2 text-right transition-all ${form.selected_plan === 'premium'
                            ? 'border-amber-400 bg-amber-50'
                            : 'border-gray-200 hover:border-amber-300'
                            }`}
                    >
                        <div className="absolute -top-2 left-2 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded">
                            مميز
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-gray-900">الباقة المميزة</span>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${form.selected_plan === 'premium' ? 'border-amber-500 bg-amber-500' : 'border-gray-300'
                                }`}>
                                {form.selected_plan === 'premium' && <CheckCircle className="w-3 h-3 text-white" />}
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">جميع المدن · جميع الخدمات · 10 صور · تصدر النتائج</p>
                        <p className="text-amber-600 font-bold mt-1">299 ر.س / شهرياً</p>
                    </button>
                </div>
            </div>

            {/* Basic Info */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-600" />
                    معلومات الشركة
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            اسم الشركة <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={form.business_name}
                            onChange={(e) => setForm(prev => ({ ...prev, business_name: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="مثال: شركة النظافة المتميزة"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            اسم المسؤول <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={form.contact_name}
                                onChange={(e) => setForm(prev => ({ ...prev, contact_name: e.target.value }))}
                                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="اسم المسؤول عن التواصل"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            رقم الهاتف <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                value={form.phone_number}
                                onChange={(e) => setForm(prev => ({ ...prev, phone_number: e.target.value }))}
                                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="05xxxxxxxx"
                                dir="ltr"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            رقم الواتساب (اختياري)
                        </label>
                        <div className="relative">
                            <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                value={form.whatsapp_number}
                                onChange={(e) => setForm(prev => ({ ...prev, whatsapp_number: e.target.value }))}
                                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="نفس رقم الهاتف إذا تُرك فارغاً"
                                dir="ltr"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            وصف الشركة <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <FileText className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                            <textarea
                                value={form.description}
                                onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                                rows={4}
                                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                                placeholder="اكتب وصفاً مختصراً عن شركتك وخدماتها..."
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Region Selection */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    المنطقة والمدن
                </h3>

                <div className="space-y-6">
                    {/* Region */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            اختر المنطقة <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {Object.entries(regionNames).map(([key, name]) => (
                                <button
                                    key={key}
                                    type="button"
                                    onClick={() => handleRegionChange(key)}
                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${form.region === key
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cities */}
                    {form.region && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                اختر المدن <span className="text-red-500">*</span>
                                <span className="text-gray-400 text-xs mr-2">
                                    ({form.targeted_cities.length} مدينة مختارة)
                                </span>
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {citiesByRegion[form.region]?.map(city => (
                                    <button
                                        key={city.slug}
                                        type="button"
                                        onClick={() => handleCityToggle(city.slug)}
                                        className={`px-4 py-2 rounded-lg text-sm transition-all ${form.targeted_cities.includes(city.slug)
                                            ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-500'
                                            : 'bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200'
                                            }`}
                                    >
                                        {city.name_ar}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-emerald-600" />
                    الخدمات المقدمة
                    <span className="text-gray-400 text-xs font-normal">
                        ({form.targeted_services.length} خدمة مختارة)
                    </span>
                </h3>

                <div className="space-y-6">
                    {Object.entries(servicesByCategory).map(([category, services]) => (
                        <div key={category}>
                            <h4 className="font-medium text-gray-800 mb-3">
                                {CATEGORY_NAMES[category] || category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {services.map(service => (
                                    <button
                                        key={service.slug}
                                        type="button"
                                        onClick={() => handleServiceToggle(service.slug)}
                                        className={`px-3 py-1.5 rounded-lg text-sm transition-all ${form.targeted_services.includes(service.slug)
                                            ? 'bg-blue-100 text-blue-700 border-2 border-blue-500'
                                            : 'bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200'
                                            }`}
                                    >
                                        {service.name_ar}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Images */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-emerald-600" />
                    الصور
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Logo */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            شعار الشركة (اللوجو)
                        </label>
                        <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors">
                            {logoFile ? (
                                <div className="relative inline-block">
                                    <img
                                        src={URL.createObjectURL(logoFile)}
                                        alt="Logo preview"
                                        className="w-24 h-24 object-cover rounded-xl"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setLogoFile(null)}
                                        className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
                                <label className="cursor-pointer block">
                                    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-500 mb-2">اضغط لرفع اللوجو</p>
                                    <p className="text-xs text-gray-400">حد أقصى 5 ميجابايت</p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleLogoUpload}
                                        className="hidden"
                                    />
                                </label>
                            )}
                        </div>
                    </div>

                    {/* Gallery */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            صور النشاط
                            <span className="text-gray-400 text-xs mr-2">
                                (حتى 11 صورة · حد أقصى 5 ميجابايت للصورة)
                            </span>
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-emerald-400 transition-colors">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {galleryFiles.map((file, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeGalleryImage(index)}
                                            className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            {galleryFiles.length < 11 && (
                                <label className="flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                                    <Upload className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm text-gray-500">إضافة صور ({galleryFiles.length}/11)</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleGalleryUpload}
                                        className="hidden"
                                    />
                                </label>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-l from-emerald-50 to-white rounded-2xl border border-gray-200">
                <div>
                    <p className="font-bold text-gray-900">
                        {form.selected_plan === 'premium' ? 'الباقة المميزة - 299 ر.س/شهرياً' : 'الباقة المجانية'}
                    </p>
                    <p className="text-sm text-gray-500">
                        سيتم مراجعة طلبك والتواصل معك خلال 24 ساعة
                    </p>
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-xl shadow-emerald-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            جاري الإرسال...
                        </>
                    ) : (
                        <>
                            <CheckCircle className="w-5 h-5" />
                            إرسال الطلب
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
