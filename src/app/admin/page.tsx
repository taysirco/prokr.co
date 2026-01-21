'use client';

import { useState, useEffect } from 'react';
import {
    Plus,
    Upload,
    X,
    Check,
    Loader2,
    Building2,
    Phone,
    MessageCircle,
    Crown,
    MapPin,
    Wrench,
    Image as ImageIcon,
    Save,
    LogOut,
    Mail,
    Lock
} from 'lucide-react';
import { CITIES, SERVICES, getCitiesByRegion, getServicesByCategory, CATEGORY_NAMES } from '@/lib/seed';
import { uploadLogo, uploadGallery, validateFile } from '@/lib/storage';
import { createAdvertiser } from '@/lib/db-actions';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';

interface AdvertiserForm {
    business_name: string;
    phone_number: string;
    whatsapp_number: string;
    is_premium: boolean;
    priority_score: number;
    targeted_cities: string[];
    targeted_services: string[];
    description: string;
}

const initialForm: AdvertiserForm = {
    business_name: '',
    phone_number: '',
    whatsapp_number: '',
    is_premium: false,
    priority_score: 50,
    targeted_cities: [],
    targeted_services: [],
    description: '',
};

export default function AdminDashboard() {
    const [user, setUser] = useState<User | null>(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState<AdvertiserForm>(initialForm);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
    const [successMessage, setSuccessMessage] = useState('');

    // Login form states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);

    const citiesByRegion = getCitiesByRegion();
    const servicesByCategory = getServicesByCategory();

    // Firebase Auth listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');
        setLoginLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Login error:', error);
            setLoginError('بيانات الدخول غير صحيحة');
        } finally {
            setLoginLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

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

    const handleSelectAllCities = () => {
        setForm(prev => ({
            ...prev,
            targeted_cities: prev.targeted_cities.length === CITIES.length
                ? []
                : CITIES.map(c => c.slug)
        }));
    };

    const handleSelectAllServices = () => {
        setForm(prev => ({
            ...prev,
            targeted_services: prev.targeted_services.length === SERVICES.length
                ? []
                : SERVICES.map(s => s.slug)
        }));
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogoFile(file);
        }
    };

    const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setGalleryFiles(prev => [...prev, ...files].slice(0, 10));
    };

    const removeGalleryImage = (index: number) => {
        setGalleryFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Validation
            if (!form.business_name || !form.phone_number) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                setIsLoading(false);
                return;
            }

            if (form.targeted_cities.length === 0) {
                alert('يرجى اختيار مدينة واحدة على الأقل');
                setIsLoading(false);
                return;
            }

            if (form.targeted_services.length === 0) {
                alert('يرجى اختيار خدمة واحدة على الأقل');
                setIsLoading(false);
                return;
            }

            // Validate files
            if (logoFile) {
                const logoValidation = validateFile(logoFile);
                if (!logoValidation.valid) {
                    alert(logoValidation.error);
                    setIsLoading(false);
                    return;
                }
            }

            for (const file of galleryFiles) {
                const validation = validateFile(file);
                if (!validation.valid) {
                    alert(validation.error);
                    setIsLoading(false);
                    return;
                }
            }

            // Upload logo to Firebase Storage
            let logoUrl = '';
            if (logoFile) {
                logoUrl = await uploadLogo(logoFile, form.business_name);
            }

            // Upload gallery images
            let galleryUrls: string[] = [];
            if (galleryFiles.length > 0) {
                galleryUrls = await uploadGallery(galleryFiles, form.business_name);
            }

            // Create advertiser in Firestore
            const subscriptionExpiry = form.is_premium
                ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year
                : null;

            const advertiser = await createAdvertiser({
                business_name: form.business_name,
                phone_number: form.phone_number,
                whatsapp_number: form.whatsapp_number || form.phone_number,
                logo_url: logoUrl,
                is_premium: form.is_premium,
                priority_score: form.priority_score,
                subscription_expiry: subscriptionExpiry,
                targeted_cities: form.targeted_cities,
                targeted_services: form.targeted_services,
                description: form.description,
                gallery: galleryUrls,
            });

            setSuccessMessage(`تم إضافة المعلن بنجاح! الكود: ${advertiser.short_code}`);
            setForm(initialForm);
            setLogoFile(null);
            setGalleryFiles([]);

            setTimeout(() => setSuccessMessage(''), 5000);
        } catch (error) {
            console.error('Error creating advertiser:', error);
            alert('حدث خطأ أثناء إضافة المعلن: ' + (error instanceof Error ? error.message : 'خطأ غير معروف'));
        } finally {
            setIsLoading(false);
        }
    };

    // Loading state
    if (authLoading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
            </div>
        );
    }

    // Login screen
    if (!user) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Building2 className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">لوحة تحكم بروكر</h1>
                        <p className="text-gray-500 mt-2">تسجيل الدخول للمتابعة</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                            <div className="relative">
                                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    placeholder="admin@prokr.co"
                                    required
                                    dir="ltr"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
                            <div className="relative">
                                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    placeholder="••••••••"
                                    required
                                    dir="ltr"
                                />
                            </div>
                        </div>

                        {loginError && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                                {loginError}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loginLoading}
                            className="w-full px-4 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loginLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    جاري الدخول...
                                </>
                            ) : (
                                'تسجيل الدخول'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                                <h1 className="font-bold text-gray-900">لوحة التحكم</h1>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="hidden sm:inline">تسجيل الخروج</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Success Message */}
                {successMessage && (
                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span className="text-emerald-800 font-medium">{successMessage}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-emerald-500" />
                            معلومات الشركة
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    اسم الشركة *
                                </label>
                                <input
                                    type="text"
                                    value={form.business_name}
                                    onChange={(e) => setForm(prev => ({ ...prev, business_name: e.target.value }))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                    placeholder="مثال: شركة النخبة للخدمات"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Phone className="w-4 h-4 inline ml-1" />
                                    رقم الهاتف *
                                </label>
                                <input
                                    type="tel"
                                    value={form.phone_number}
                                    onChange={(e) => setForm(prev => ({ ...prev, phone_number: e.target.value }))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                    placeholder="+966501234567"
                                    dir="ltr"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <MessageCircle className="w-4 h-4 inline ml-1" />
                                    رقم الواتساب
                                </label>
                                <input
                                    type="tel"
                                    value={form.whatsapp_number}
                                    onChange={(e) => setForm(prev => ({ ...prev, whatsapp_number: e.target.value }))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                    placeholder="+966501234567"
                                    dir="ltr"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Crown className="w-4 h-4 inline ml-1" />
                                    نوع الاشتراك
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            checked={!form.is_premium}
                                            onChange={() => setForm(prev => ({ ...prev, is_premium: false }))}
                                            className="w-4 h-4 text-emerald-600"
                                        />
                                        <span>مجاني</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            checked={form.is_premium}
                                            onChange={() => setForm(prev => ({ ...prev, is_premium: true }))}
                                            className="w-4 h-4 text-amber-600"
                                        />
                                        <span className="text-amber-600 font-medium">مميز (ذهبي)</span>
                                    </label>
                                </div>
                            </div>

                            {form.is_premium && (
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        الأولوية (1-100)
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={form.priority_score}
                                        onChange={(e) => setForm(prev => ({ ...prev, priority_score: parseInt(e.target.value) }))}
                                        className="w-full"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>أقل</span>
                                        <span className="font-bold text-emerald-600">{form.priority_score}</span>
                                        <span>أعلى</span>
                                    </div>
                                </div>
                            )}

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    وصف الشركة
                                </label>
                                <textarea
                                    value={form.description}
                                    onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                                    placeholder="اكتب وصفاً تفصيلياً للشركة والخدمات المقدمة..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Cities Matrix */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-emerald-500" />
                                المدن المستهدفة
                                <span className="text-sm font-normal text-gray-500">
                                    ({form.targeted_cities.length} مدينة)
                                </span>
                            </h2>
                            <button
                                type="button"
                                onClick={handleSelectAllCities}
                                className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                            >
                                {form.targeted_cities.length === CITIES.length ? 'إلغاء الكل' : 'تحديد الكل'}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(citiesByRegion).map(([region, cities]) => (
                                <div key={region} className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase">
                                        {region === 'central' && 'المنطقة الوسطى'}
                                        {region === 'western' && 'المنطقة الغربية'}
                                        {region === 'eastern' && 'المنطقة الشرقية'}
                                        {region === 'northern' && 'المنطقة الشمالية'}
                                        {region === 'southern' && 'المنطقة الجنوبية'}
                                    </h4>
                                    <div className="space-y-1">
                                        {cities.map(city => (
                                            <label
                                                key={city.slug}
                                                className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={form.targeted_cities.includes(city.slug)}
                                                    onChange={() => handleCityToggle(city.slug)}
                                                    className="w-4 h-4 text-emerald-600 rounded"
                                                />
                                                <span className="text-gray-700">{city.name_ar}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Matrix */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <Wrench className="w-5 h-5 text-emerald-500" />
                                الخدمات المقدمة
                                <span className="text-sm font-normal text-gray-500">
                                    ({form.targeted_services.length} خدمة)
                                </span>
                            </h2>
                            <button
                                type="button"
                                onClick={handleSelectAllServices}
                                className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                            >
                                {form.targeted_services.length === SERVICES.length ? 'إلغاء الكل' : 'تحديد الكل'}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(servicesByCategory).map(([category, services]) => (
                                <div key={category} className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase">
                                        {category === 'moving' && 'نقل'}
                                        {category === 'cleaning' && 'تنظيف'}
                                        {category === 'pest-control' && 'مكافحة الحشرات'}
                                        {category === 'maintenance' && 'صيانة'}
                                        {category === 'general' && 'خدمات عامة'}
                                    </h4>
                                    <div className="space-y-1">
                                        {services.map(service => (
                                            <label
                                                key={service.slug}
                                                className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={form.targeted_services.includes(service.slug)}
                                                    onChange={() => handleServiceToggle(service.slug)}
                                                    className="w-4 h-4 text-emerald-600 rounded"
                                                />
                                                <span className="text-gray-700">{service.name_ar}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Media Upload */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <ImageIcon className="w-5 h-5 text-emerald-500" />
                            الوسائط
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Logo Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    شعار الشركة
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-500 transition-colors">
                                    {logoFile ? (
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={URL.createObjectURL(logoFile)}
                                                    alt="Logo preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setLogoFile(null)}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <label className="cursor-pointer">
                                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                            <span className="text-gray-500 text-sm">اضغط لرفع الشعار</span>
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

                            {/* Gallery Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    معرض الصور ({galleryFiles.length}/10)
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-emerald-500 transition-colors">
                                    {galleryFiles.length > 0 ? (
                                        <div className="grid grid-cols-4 gap-2">
                                            {galleryFiles.map((file, index) => (
                                                <div key={index} className="relative group">
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt={`Gallery ${index + 1}`}
                                                        className="w-full aspect-square object-cover rounded-lg"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => removeGalleryImage(index)}
                                                        className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                            {galleryFiles.length < 10 && (
                                                <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-emerald-500">
                                                    <Plus className="w-6 h-6 text-gray-400" />
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
                                    ) : (
                                        <label className="cursor-pointer block text-center py-4">
                                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                            <span className="text-gray-500 text-sm">اضغط لرفع الصور</span>
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

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    جاري الحفظ...
                                </>
                            ) : (
                                <>
                                    <Save className="w-5 h-5" />
                                    حفظ المعلن
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
