'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import {
    Building2,
    Phone,
    User,
    FileText,
    MapPin,
    Upload,
    X,
    Loader2,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Image as ImageIcon,
    Sparkles,
    MapPinned,
    Briefcase,
    Camera,
} from 'lucide-react';
import { CITIES, SERVICES, getCitiesByRegion, getServicesByCategory, CATEGORY_NAMES, REGION_NAMES } from '@/lib/seed';
import { uploadPublicLogo, uploadPublicGallery, validateFile, generateShortCode } from '@/lib/storage';
import { createAdvertiserRequest } from '@/lib/db-actions';
import { getNeighborhoodsForCity } from '@/lib/neighborhoods-data';


// ─── Category Icons & Colors ───────────────────────────────────────
const CATEGORY_META: Record<string, { icon: string; color: string; gradient: string }> = {
    'moving': { icon: '🚛', color: '#3b82f6', gradient: 'from-blue-500 to-blue-600' },
    'cleaning': { icon: '✨', color: '#06b6d4', gradient: 'from-cyan-500 to-cyan-600' },
    'sewage': { icon: '🔧', color: '#8b5cf6', gradient: 'from-violet-500 to-violet-600' },
    'pest-control': { icon: '🛡️', color: '#10b981', gradient: 'from-emerald-500 to-emerald-600' },
    'leak-detection': { icon: '💧', color: '#f59e0b', gradient: 'from-amber-500 to-amber-600' },
    'insulation': { icon: '🏗️', color: '#ef4444', gradient: 'from-red-500 to-red-600' },
};

// ─── Step Definitions ──────────────────────────────────────────────
const STEPS = [
    { id: 1, title: 'نوع النشاط', icon: Briefcase, label: 'القطاع' },
    { id: 2, title: 'الموقع', icon: MapPinned, label: 'الموقع' },
    { id: 3, title: 'طلب التغطية', icon: Sparkles, label: 'المدة' },
    { id: 4, title: 'البيانات', icon: Building2, label: 'البيانات' },
    { id: 5, title: 'الصور', icon: Camera, label: 'الصور' },
];

interface CompanyRegistrationWizardProps {
    onSuccess?: () => void;
}

export default function CompanyRegistrationWizard({ onSuccess }: CompanyRegistrationWizardProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');

    // Form state
    const [form, setForm] = useState({
        business_name: '',
        contact_name: '',
        phone_number: '',
        whatsapp_number: '',
        description: '',
        targeted_cities: [] as string[],
        targeted_services: [] as string[],
        targeted_neighborhoods: [] as string[],
        region: '',
        duration_days: 30 as 15 | 30 | 60,
    });

    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
    const [error, setError] = useState('');

    // Auto-dismiss errors after 5 seconds
    useEffect(() => {
        if (!error) return;
        const timer = setTimeout(() => setError(''), 5000);
        return () => clearTimeout(timer);
    }, [error]);

    const citiesByRegion = useMemo(() => getCitiesByRegion(), []);
    const servicesByCategory = useMemo(() => getServicesByCategory(), []);

    // ─── Step Validation ───────────────────────────────────────────
    const validateStep = useCallback((step: number): string | null => {
        switch (step) {
            case 1:
                if (form.targeted_services.length === 0) return 'يرجى اختيار خدمة واحدة على الأقل';
                return null;
            case 2:
                if (!form.region) return 'يرجى اختيار المنطقة';
                if (form.targeted_cities.length === 0) return 'يرجى اختيار مدينة واحدة على الأقل';
                return null;
            case 3:
                if (!form.duration_days) return 'يرجى اختيار مدة الإعلان';
                return null;
            case 4:
                if (!form.business_name.trim()) return 'يرجى إدخال اسم الشركة';
                if (!form.contact_name.trim()) return 'يرجى إدخال اسم المسؤول';
                if (!form.phone_number.trim()) return 'يرجى إدخال رقم التواصل';
                {
                    const cleaned = form.phone_number.replace(/[\s\-()]/g, '');
                    const isValidSA = /^05\d{8}$/.test(cleaned) || /^\+9665\d{8}$/.test(cleaned) || /^9665\d{8}$/.test(cleaned);
                    if (!isValidSA) return 'رقم الهاتف غير صحيح (يجب أن يبدأ بـ 05 أو +966)';
                }
                if (!form.description.trim()) return 'يرجى إدخال وصف الشركة';
                if (form.description.trim().length < 20) return 'وصف الشركة قصير جداً (20 حرف على الأقل)';
                return null;
            case 5:
                return null; // Images are optional
            default:
                return null;
        }
    }, [form]);

    // ─── Navigation ────────────────────────────────────────────────
    const goNext = useCallback(() => {
        const validationError = validateStep(currentStep);
        if (validationError) {
            setError(validationError);
            return;
        }
        setError('');
        setSlideDirection('next');
        setCurrentStep(prev => Math.min(prev + 1, 5));
    }, [currentStep, validateStep]);

    const goPrev = useCallback(() => {
        setError('');
        setSlideDirection('prev');
        setCurrentStep(prev => Math.max(prev - 1, 1));
    }, []);

    // Determine the currently active category (if any)
    const activeCategory = useMemo(() => {
        if (form.targeted_services.length === 0) return null;
        // Find which category the first selected service belongs to
        for (const [category, services] of Object.entries(servicesByCategory)) {
            if (services.some(s => form.targeted_services.includes(s.slug))) {
                return category;
            }
        }
        return null;
    }, [form.targeted_services, servicesByCategory]);

    const handleServiceToggle = (serviceSlug: string) => {
        // Find the category this service belongs to
        const serviceCategory = Object.entries(servicesByCategory).find(
            ([, services]) => services.some(s => s.slug === serviceSlug)
        )?.[0];

        setForm(prev => {
            // Compute current active category from prev state (avoids stale closure)
            let currentActiveCategory: string | null = null;
            for (const [cat, svcs] of Object.entries(servicesByCategory)) {
                if (svcs.some(s => prev.targeted_services.includes(s.slug))) {
                    currentActiveCategory = cat;
                    break;
                }
            }

            // If switching to a different category, clear all previous selections
            if (serviceCategory && currentActiveCategory && serviceCategory !== currentActiveCategory) {
                return {
                    ...prev,
                    targeted_services: [serviceSlug],
                };
            }
            // Toggle within the same category
            return {
                ...prev,
                targeted_services: prev.targeted_services.includes(serviceSlug)
                    ? prev.targeted_services.filter(s => s !== serviceSlug)
                    : [...prev.targeted_services, serviceSlug],
            };
        });
    };

    const handleCategoryToggle = (category: string) => {
        const categoryServices = servicesByCategory[category]?.map(s => s.slug) || [];
        const allSelected = categoryServices.every(s => form.targeted_services.includes(s));

        if (allSelected) {
            // Deselect all services in this category
            setForm(prev => ({
                ...prev,
                targeted_services: prev.targeted_services.filter(s => !categoryServices.includes(s))
            }));
        } else {
            // Select all services in this category (replacing any from other categories)
            setForm(prev => ({
                ...prev,
                targeted_services: [...categoryServices]
            }));
        }
    };

    const handleRegionChange = (region: string) => {
        setForm(prev => ({
            ...prev,
            region,
            targeted_cities: [],
            targeted_neighborhoods: [],
        }));
    };

    const handleCityToggle = (citySlug: string) => {
        setForm(prev => {
            const newCities = prev.targeted_cities.includes(citySlug)
                ? prev.targeted_cities.filter(c => c !== citySlug)
                : [...prev.targeted_cities, citySlug];
            // Remove neighborhoods of deselected cities
            const validNeighborhoods = prev.targeted_neighborhoods.filter(n => {
                return newCities.some(c => {
                    const neighborhoods = getNeighborhoodsForCity(c);
                    return neighborhoods.some(nb => nb.name_ar === n);
                });
            });
            return {
                ...prev,
                targeted_cities: newCities,
                targeted_neighborhoods: validNeighborhoods,
            };
        });
    };

    const handleNeighborhoodToggle = (name_ar: string) => {
        setForm(prev => ({
            ...prev,
            targeted_neighborhoods: prev.targeted_neighborhoods.includes(name_ar)
                ? prev.targeted_neighborhoods.filter(n => n !== name_ar)
                : [...prev.targeted_neighborhoods, name_ar]
        }));
    };

    // ─── Select All / Deselect All Cities (within current region) ──
    const handleToggleAllCities = useCallback(() => {
        if (!form.region) return;
        const regionCities = citiesByRegion[form.region] || [];
        const regionCitySlugs = regionCities.map(c => c.slug);
        const allSelected = regionCitySlugs.every(s => form.targeted_cities.includes(s));

        setForm(prev => {
            if (allSelected) {
                // Deselect all — also clean up orphaned neighborhoods
                return {
                    ...prev,
                    targeted_cities: [],
                    targeted_neighborhoods: [],
                };
            } else {
                // Select all cities in this region
                return {
                    ...prev,
                    targeted_cities: [...regionCitySlugs],
                };
            }
        });
    }, [form.region, form.targeted_cities, citiesByRegion]);

    // ─── Select All / Deselect All Neighborhoods (per city) ────────
    const handleToggleAllNeighborhoods = useCallback((citySlug: string) => {
        const neighborhoods = getNeighborhoodsForCity(citySlug);
        if (neighborhoods.length === 0) return;
        const neighborhoodNames = neighborhoods.map(n => n.name_ar);
        const allSelected = neighborhoodNames.every(n => form.targeted_neighborhoods.includes(n));

        setForm(prev => {
            if (allSelected) {
                // Deselect all neighborhoods for this city
                return {
                    ...prev,
                    targeted_neighborhoods: prev.targeted_neighborhoods.filter(n => !neighborhoodNames.includes(n)),
                };
            } else {
                // Select all neighborhoods for this city (add without duplicating)
                const existing = new Set(prev.targeted_neighborhoods);
                neighborhoodNames.forEach(n => existing.add(n));
                return {
                    ...prev,
                    targeted_neighborhoods: Array.from(existing),
                };
            }
        });
    }, [form.targeted_neighborhoods]);

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const validation = validateFile(file);
            if (!validation.valid) {
                setError(validation.error || 'خطأ في الملف');
                e.target.value = ''; // Reset so same file can be re-selected
                return;
            }
            setLogoFile(file);
            setError('');
        }
        e.target.value = ''; // Reset input to allow re-upload of same file
    };

    const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        for (const file of files) {
            const validation = validateFile(file);
            if (!validation.valid) {
                setError(validation.error || 'خطأ في الملف');
                e.target.value = '';
                return;
            }
        }
        setGalleryFiles(prev => {
            const combined = [...prev, ...files];
            if (combined.length > 11) {
                setError(`تم إضافة الصور المتاحة فقط (الحد الأقصى 11 صورة)`);
                return combined.slice(0, 11);
            }
            return combined;
        });
        setError(prev => prev || ''); // Don't clear if limit warning was just set
        e.target.value = ''; // Reset input to allow re-upload
    };

    const removeGalleryImage = (index: number) => {
        setGalleryFiles(prev => prev.filter((_, i) => i !== index));
    };

    // ─── Pricing Engine ─────────────────────────────────────────────
    const pricing = useMemo(() => {
        let locationCost = 0;
        const majorCities = ['riyadh', 'jeddah', 'makkah', 'madinah', 'dammam'];

        // Calculate locations cost
        for (const citySlug of form.targeted_cities) {
            const isMajor = majorCities.includes(citySlug);
            const neighborhoodPrice = isMajor ? 25 : 15;
            const capPrice = isMajor ? 300 : 150;
            
            const cityNeighborhoods = getNeighborhoodsForCity(citySlug);
            const selectedInCity = form.targeted_neighborhoods.filter(n => cityNeighborhoods.some(cn => cn.name_ar === n)).length;
            
            // If they chose the city but didn't pick specific neighborhoods, assume city-wide cap.
            const cityCost = selectedInCity === 0 ? capPrice : Math.min(selectedInCity * neighborhoodPrice, capPrice);
            locationCost += cityCost;
        }

        // Apply Services Multiplier (within single category)
        let baseCost = locationCost;
        const numServices = form.targeted_services.length;
        if (numServices >= 2) {
            // Mild multiplier for additional services within the same category
            const servicesMultiplier = 1 + (numServices - 1) * 0.15; // +15% per extra service
            baseCost = locationCost * servicesMultiplier;
        }
        
        let finalPrice = baseCost;
        let discount = 0;

        if (form.duration_days === 15) {
            finalPrice = (baseCost / 2) * 1.10; // 10% markup
        } else if (form.duration_days === 30) {
            finalPrice = baseCost;
        } else if (form.duration_days === 60) {
            const doubleCost = baseCost * 2;
            discount = doubleCost * 0.20; // 20% discount
            finalPrice = doubleCost - discount;
        }

        // Prevent zero price from blocking form submission UI
        if (finalPrice === 0) finalPrice = 149; // fallback minimum
        
        return {
            baseCost: Math.round(baseCost),
            finalPrice: Math.round(finalPrice),
            discount: Math.round(discount)
        };
    }, [form.targeted_cities, form.targeted_neighborhoods, form.targeted_services, form.duration_days]);

    // ─── Computed values for summary ───────────────────────────────
    const selectedServicesNames = useMemo(() => form.targeted_services.map(slug => {
        const svc = SERVICES.find(s => s.slug === slug);
        return svc?.name_ar || slug;
    }), [form.targeted_services]);

    const selectedCitiesNames = useMemo(() => form.targeted_cities.map(slug => {
        const city = CITIES.find(c => c.slug === slug);
        return city?.name_ar || slug;
    }), [form.targeted_cities]);

    // ─── Submit ────────────────────────────────────────────────────
    const handleSubmit = async () => {
        setIsLoading(true);
        setError('');

        try {
            const requestId = generateShortCode(8);

            let logoUrl = '';
            if (logoFile) {
                logoUrl = await uploadPublicLogo(logoFile, requestId);
            }

            let galleryUrls: string[] = [];
            if (galleryFiles.length > 0) {
                galleryUrls = await uploadPublicGallery(galleryFiles, requestId);
            }

            const formDataToSubmit = {
                ...form,
                calculated_price_sar: pricing.finalPrice,
                discount_applied_sar: pricing.discount,
            };
            await createAdvertiserRequest(formDataToSubmit, logoUrl, galleryUrls);

            setIsSuccess(true);
            onSuccess?.();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع');
        } finally {
            setIsLoading(false);
        }
    };

    // ─── Success Screen ────────────────────────────────────────────
    if (isSuccess) {
        return (
            <div className="relative overflow-hidden rounded-3xl p-10 text-center bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,_rgba(14,165,233,0.15)_0%,_transparent_50%),_radial-gradient(circle_at_70%_50%,_rgba(2,132,199,0.1)_0%,_transparent_50%)]" />
                <div className="relative">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-sky-500 to-sky-600 shadow-[0_8px_32px_rgba(14,165,233,0.3)]">
                        <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        تم إرسال طلبك بنجاح! 🎉
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                        سيتم مراجعة طلبك من قبل فريقنا والتواصل معك خلال 24 ساعة لإتمام عملية الدفع (عبر التحويل البنكي أو مندوب المبيعات) وتفعيل اشتراكك.
                        <br />
                        شكراً لاختيارك بروكر!
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-8 py-4 font-bold text-white rounded-xl transition-all hover:scale-105 bg-gradient-to-br from-sky-500 to-sky-600 shadow-[0_4px_16px_rgba(14,165,233,0.3)]"
                    >
                        إرسال طلب آخر
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="wizard-container" id="registration-form">
            {/* ─── Progress Bar ─────────────────────────────────────── */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                    {STEPS.map((step) => {
                        const StepIcon = step.icon;
                        const isActive = currentStep === step.id;
                        const isCompleted = currentStep > step.id;

                        return (
                            <div key={step.id} className="flex items-center flex-1">
                                <div className="flex flex-col items-center relative">
                                    <div
                                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${isCompleted
                                                ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-[0_4px_12px_rgba(16,185,129,0.3)]'
                                                : isActive
                                                    ? 'bg-gradient-to-br from-sky-500 to-sky-600 shadow-[0_4px_20px_rgba(14,165,233,0.4)] scale-110'
                                                    : 'bg-gray-200'
                                            }`}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        ) : (
                                            <StepIcon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                        )}
                                    </div>
                                    <span className={`text-xs mt-2 font-medium transition-colors duration-300 ${isActive ? 'text-sky-600' : isCompleted ? 'text-emerald-600' : 'text-gray-400'
                                        }`}>
                                        {step.label}
                                    </span>
                                </div>
                                    <div className="flex-1 mx-2 sm:mx-4 h-1 rounded-full overflow-hidden bg-gray-200">
                                        <div
                                            className={`h-full rounded-full transition-all duration-700 ease-out ${isCompleted ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 w-full' : 'bg-transparent w-0'}`}
                                        />
                                    </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ─── Error Message ────────────────────────────────────── */}
            {error && (
                <div className="mb-6 p-4 rounded-xl flex items-center gap-3 animate-shake border border-red-200 bg-gradient-to-br from-red-50 to-red-100">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-red-600" />
                    </div>
                    <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
            )}

            {/* ─── Step Content ─────────────────────────────────────── */}
            <div
                className={`step-content transition-all duration-500 ${slideDirection === 'next' ? 'animate-[slideInLeft_0.4s_ease-out]' : 'animate-[slideInRight_0.4s_ease-out]'}`}
                key={currentStep}
            >
                {currentStep === 1 && (
                    <StepServices
                        servicesByCategory={servicesByCategory}
                        selectedServices={form.targeted_services}
                        activeCategory={activeCategory}
                        onServiceToggle={handleServiceToggle}
                        onCategoryToggle={handleCategoryToggle}
                    />
                )}

                {currentStep === 2 && (
                    <StepLocation
                        citiesByRegion={citiesByRegion}
                        selectedRegion={form.region}
                        selectedCities={form.targeted_cities}
                        selectedNeighborhoods={form.targeted_neighborhoods}
                        onRegionChange={handleRegionChange}
                        onCityToggle={handleCityToggle}
                        onNeighborhoodToggle={handleNeighborhoodToggle}
                        onToggleAllCities={handleToggleAllCities}
                        onToggleAllNeighborhoods={handleToggleAllNeighborhoods}
                    />
                )}

                {currentStep === 3 && (
                    <StepDuration form={form} setForm={setForm} pricing={pricing} />
                )}

                {currentStep === 4 && (
                    <StepInfo form={form} setForm={setForm} />
                )}

                {currentStep === 5 && (
                    <StepImages
                        logoFile={logoFile}
                        galleryFiles={galleryFiles}
                        onLogoUpload={handleLogoUpload}
                        onGalleryUpload={handleGalleryUpload}
                        onRemoveGallery={removeGalleryImage}
                        onRemoveLogo={() => setLogoFile(null)}
                        form={form}
                        selectedServicesNames={selectedServicesNames}
                        selectedCitiesNames={selectedCitiesNames}
                        pricing={pricing}
                        durationDays={form.duration_days}
                    />
                )}
            </div>

            {/* ─── Navigation Buttons ──────────────────────────────── */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
                {currentStep > 1 ? (
                    <button
                        type="button"
                        onClick={goPrev}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:bg-gray-100 text-gray-500"
                    >
                        <ChevronRight className="w-5 h-5" />
                        السابق
                    </button>
                ) : <div />}

                {currentStep < 5 ? (
                    <button
                        type="button"
                        onClick={goNext}
                        className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white transition-all hover:scale-105 bg-gradient-to-br from-sky-500 to-sky-700 shadow-lg shadow-sky-500/30"
                    >
                        التالي
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-xl shadow-emerald-500/30"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                جاري الإرسال...
                            </>
                        ) : (
                            <>
                                <Sparkles className="w-5 h-5" />
                                إرسال الطلب
                            </>
                        )}
                    </button>
                )}
            </div>

            {/* ─── CSS Animations ───────────────────────────────────── */}
            <style jsx global>{`
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
                    20%, 40%, 60%, 80% { transform: translateX(4px); }
                }
                .animate-shake { animation: shake 0.5s ease-in-out; }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
            `}</style>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════
// STEP 1 — Service/Category Selection
// ═══════════════════════════════════════════════════════════════════
interface StepServicesProps {
    servicesByCategory: Record<string, { slug: string; name_ar: string; category: string }[]>;
    selectedServices: string[];
    activeCategory: string | null;
    onServiceToggle: (slug: string) => void;
    onCategoryToggle: (category: string) => void;
}

function StepServices({ servicesByCategory, selectedServices, activeCategory, onServiceToggle, onCategoryToggle }: StepServicesProps) {
    // Compute locally to guarantee consistency with current selectedServices
    const localActiveCategory = (() => {
        if (selectedServices.length === 0) return null;
        for (const [cat, svcs] of Object.entries(servicesByCategory)) {
            if (svcs.some(s => selectedServices.includes(s.slug))) {
                return cat;
            }
        }
        return null;
    })();
    // Use local computation (more reliable than prop which may lag by one render)
    const effectiveActiveCategory = localActiveCategory ?? activeCategory;

    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    ما تخصص شركتك؟
                </h2>
                <p className="text-gray-500 text-lg">
                    اختر قطاعاً واحداً فقط لضمان تخصص شركتك وجودة ظهورها
                </p>
            </div>

            <div className="space-y-6">
                {Object.entries(servicesByCategory).map(([category, services]) => {
                    const meta = CATEGORY_META[category] || { icon: '📋', color: '#6b7280', gradient: 'from-gray-500 to-gray-600' };
                    const categoryServices = services.map(s => s.slug);
                    const selectedCount = categoryServices.filter(s => selectedServices.includes(s)).length;
                    const allSelected = selectedCount === categoryServices.length;
                    const isThisCategory = effectiveActiveCategory === category;
                    const isLocked = effectiveActiveCategory !== null && !isThisCategory;

                    return (
                        <div
                            key={category}
                            data-locked={isLocked ? 'true' : 'false'}
                            data-category={category}
                            className="rounded-2xl overflow-hidden transition-all duration-300 relative"
                            style={{
                                border: selectedCount > 0 ? `2px solid ${meta.color}30` : '2px solid #e5e7eb',
                                background: selectedCount > 0 ? `${meta.color}08` : '#ffffff',
                                opacity: isLocked ? 0.35 : 1,
                                pointerEvents: isLocked ? 'none' : 'auto',
                                filter: isLocked ? 'grayscale(0.6)' : 'none',
                            }}
                        >
                            {isLocked && (
                                <div className="absolute top-3 left-3 z-10 bg-gray-800/70 text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1">
                                    🔒 قطاع آخر
                                </div>
                            )}
                            {/* Category Header */}
                            <button
                                type="button"
                                onClick={() => onCategoryToggle(category)}
                                className="w-full flex items-center justify-between p-5 hover:bg-gray-50/50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                        style={{
                                            background: `${meta.color}15`,
                                        }}
                                    >
                                        {meta.icon}
                                    </div>
                                    <div className="text-right">
                                        <h3 className="font-bold text-gray-900 text-lg">
                                            {CATEGORY_NAMES[category] || category}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {services.length} خدمات
                                            {selectedCount > 0 && (
                                                <span style={{ color: meta.color }} className="font-medium mr-2">
                                                    · {selectedCount} مختارة
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                                    style={{
                                        background: allSelected ? meta.color : '#e5e7eb',
                                    }}
                                >
                                    {allSelected && <CheckCircle className="w-4 h-4 text-white" />}
                                </div>
                            </button>

                            {/* Services */}
                            <div className="px-5 pb-5">
                                <div className="flex flex-wrap gap-2">
                                    {services.map(service => {
                                        const isSelected = selectedServices.includes(service.slug);
                                        return (
                                            <button
                                                key={service.slug}
                                                type="button"
                                                onClick={() => onServiceToggle(service.slug)}
                                                className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                                                style={{
                                                    background: isSelected ? meta.color : '#f3f4f6',
                                                    color: isSelected ? '#ffffff' : '#4b5563',
                                                    transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                                                    boxShadow: isSelected ? `0 2px 8px ${meta.color}40` : 'none',
                                                }}
                                            >
                                                {isSelected && <span className="ml-1">✓</span>}
                                                {service.name_ar}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedServices.length > 0 && (
                <div className="mt-6 p-4 rounded-xl text-center bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200">
                    <p className="text-sky-700 font-medium">
                        <Sparkles className="w-4 h-4 inline-block ml-1" />
                        تم اختيار {selectedServices.length} خدمة في قطاع {CATEGORY_NAMES[effectiveActiveCategory || ''] || effectiveActiveCategory}
                    </p>
                </div>
            )}

            {effectiveActiveCategory && (
                <div className="mt-3 p-3 rounded-xl text-center bg-amber-50 border border-amber-200">
                    <p className="text-amber-700 text-sm">
                        💡 يمكنك اختيار خدمات متعددة داخل نفس القطاع فقط لضمان تخصص الشركة
                    </p>
                </div>
            )}
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════
// STEP 2 — Location Selection
// ═══════════════════════════════════════════════════════════════════
interface StepLocationProps {
    citiesByRegion: Record<string, { slug: string; name_ar: string }[]>;
    selectedRegion: string;
    selectedCities: string[];
    selectedNeighborhoods: string[];
    onRegionChange: (region: string) => void;
    onCityToggle: (slug: string) => void;
    onNeighborhoodToggle: (name_ar: string) => void;
    onToggleAllCities: () => void;
    onToggleAllNeighborhoods: (citySlug: string) => void;
}

function StepLocation({
    citiesByRegion,
    selectedRegion,
    selectedCities,
    selectedNeighborhoods,
    onRegionChange,
    onCityToggle,
    onNeighborhoodToggle,
    onToggleAllCities,
    onToggleAllNeighborhoods,
}: StepLocationProps) {
    // Collect neighborhoods for all selected cities
    const availableNeighborhoods = useMemo(() => {
        const result: { cityName: string; citySlug: string; neighborhoods: { slug: string; name_ar: string }[]; hasNeighborhoods: boolean }[] = [];
        selectedCities.forEach(citySlug => {
            const city = CITIES.find(c => c.slug === citySlug);
            const neighborhoods = getNeighborhoodsForCity(citySlug);
            result.push({
                cityName: city?.name_ar || citySlug,
                citySlug,
                neighborhoods,
                hasNeighborhoods: neighborhoods.length > 0,
            });
        });
        return result;
    }, [selectedCities]);

    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    أين تعمل شركتك؟
                </h2>
                <p className="text-gray-500 text-lg">
                    حدد المنطقة والمدن التي تقدم فيها خدماتك
                </p>
            </div>

            {/* Region Selection */}
            <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-500" />
                    المنطقة
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {Object.entries(REGION_NAMES).map(([key, name]) => {
                        const isSelected = selectedRegion === key;
                        return (
                            <button
                                key={key}
                                type="button"
                                onClick={() => onRegionChange(key)}
                                className={`px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${isSelected ? 'bg-gradient-to-br from-sky-500 to-sky-700 text-white shadow-lg shadow-sky-500/30 scale-105' : 'bg-gray-100 text-gray-600'}`}
                            >
                                {name}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Cities Selection */}
            {selectedRegion && (
                <div className="mb-8 animate-scaleIn">
                    <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-sky-500" />
                            المدن
                            <span className="text-gray-400 text-xs font-normal">
                                ({selectedCities.length} مدينة مختارة)
                            </span>
                        </label>
                        {(citiesByRegion[selectedRegion]?.length || 0) > 1 && (
                            <button
                                type="button"
                                onClick={onToggleAllCities}
                                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                                    citiesByRegion[selectedRegion]?.every(c => selectedCities.includes(c.slug))
                                        ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200'
                                        : 'bg-sky-50 text-sky-600 hover:bg-sky-100 border border-sky-200'
                                }`}
                            >
                                {citiesByRegion[selectedRegion]?.every(c => selectedCities.includes(c.slug))
                                    ? <>✕ إلغاء الكل</>
                                    : <>☑ تحديد الكل</>}
                            </button>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                        {citiesByRegion[selectedRegion]?.map(city => {
                            const isSelected = selectedCities.includes(city.slug);
                            return (
                                <button
                                    key={city.slug}
                                    type="button"
                                    onClick={() => onCityToggle(city.slug)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border-2 ${isSelected ? 'bg-sky-500 text-white border-sky-500 shadow-lg shadow-sky-500/25' : 'bg-gray-100 text-gray-600 border-transparent'}`}
                                >
                                    {isSelected && <span className="ml-1">✓</span>}
                                    {city.name_ar}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Neighborhoods Selection */}
            {availableNeighborhoods.length > 0 && (
                <div className="animate-scaleIn">
                    <label className="block text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                        <MapPinned className="w-4 h-4 text-emerald-500" />
                        الأحياء
                        <span className="text-gray-400 text-xs font-normal">(اختياري)</span>
                    </label>

                    <div className="space-y-5">
                        {availableNeighborhoods.map(({ cityName, citySlug, neighborhoods, hasNeighborhoods }) => {
                            const allNeighborhoodsSelected = hasNeighborhoods && neighborhoods.every(n => selectedNeighborhoods.includes(n.name_ar));
                            const selectedInCity = hasNeighborhoods ? neighborhoods.filter(n => selectedNeighborhoods.includes(n.name_ar)).length : 0;
                            return (
                            <div key={citySlug} className="rounded-xl p-4 bg-slate-50 border border-slate-200">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        أحياء {cityName}
                                        {hasNeighborhoods && selectedInCity > 0 && (
                                            <span className="text-xs text-emerald-600 font-medium">({selectedInCity}/{neighborhoods.length})</span>
                                        )}
                                    </h4>
                                    {hasNeighborhoods && neighborhoods.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => onToggleAllNeighborhoods(citySlug)}
                                            className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-bold transition-all duration-200 ${
                                                allNeighborhoodsSelected
                                                    ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200'
                                                    : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200'
                                            }`}
                                        >
                                            {allNeighborhoodsSelected ? '✕ إلغاء الكل' : '☑ تحديد الكل'}
                                        </button>
                                    )}
                                </div>
                                {!hasNeighborhoods ? (
                                    <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-3 rounded-lg border border-emerald-100 font-medium text-sm">
                                        <CheckCircle className="w-4 h-4" />
                                        جميع أحياء وتسعيرات هذه المدينة مشمولة في الباقة
                                    </div>
                                ) : (
                                    <div className="flex flex-wrap gap-2">
                                        {neighborhoods.map(nb => {
                                            const isSelected = selectedNeighborhoods.includes(nb.name_ar);
                                            return (
                                                <button
                                                    key={nb.slug}
                                                    type="button"
                                                    onClick={() => onNeighborhoodToggle(nb.name_ar)}
                                                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 border-2 ${isSelected ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20' : 'bg-white text-gray-500 border-gray-200 hover:border-emerald-300'}`}
                                                >
                                                    {nb.name_ar}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}

                            </div>
                        );})}
                    </div>

                    {selectedNeighborhoods.length > 0 && (
                        <div className="mt-4 p-3 rounded-lg text-center" style={{
                            background: '#ecfdf5',
                            border: '1px solid #a7f3d0',
                        }}>
                            <p className="text-emerald-700 text-sm font-medium">
                                {selectedNeighborhoods.length} حي مختار
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════
// STEP 3 — Company Information
// ═══════════════════════════════════════════════════════════════════
interface WizardFormState {
    business_name: string;
    contact_name: string;
    phone_number: string;
    whatsapp_number: string;
    description: string;
    targeted_cities: string[];
    targeted_services: string[];
    targeted_neighborhoods: string[];
    region: string;
    duration_days: 15 | 30 | 60;
}

interface StepInfoProps {
    form: Pick<WizardFormState, 'business_name' | 'contact_name' | 'phone_number' | 'whatsapp_number' | 'description'>;
    setForm: React.Dispatch<React.SetStateAction<WizardFormState>>;
}

function StepInfo({ form, setForm }: StepInfoProps) {
    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    بيانات الشركة
                </h2>
                <p className="text-gray-500 text-lg">
                    أدخل المعلومات الأساسية لشركتك
                </p>
            </div>

            <div className="space-y-6">
                {/* Business Name */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-sky-500" />
                        اسم الشركة <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={form.business_name}
                        onChange={(e) => setForm((prev: WizardFormState) => ({ ...prev, business_name: e.target.value }))}
                        className="w-full px-5 py-3.5 rounded-xl transition-all duration-200 text-gray-900 border-2 border-gray-200 bg-gray-50 outline-none focus:border-sky-500 focus:bg-white focus:ring-[3px] focus:ring-sky-500/10"
                        placeholder="مثال: شركة النظافة المتميزة"
                    />
                </div>

                {/* Contact Name */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-sky-500" />
                        اسم المسؤول <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={form.contact_name}
                        onChange={(e) => setForm((prev: WizardFormState) => ({ ...prev, contact_name: e.target.value }))}
                        className="w-full px-5 py-3.5 rounded-xl transition-all duration-200 text-gray-900 border-2 border-gray-200 bg-gray-50 outline-none focus:border-sky-500 focus:bg-white focus:ring-[3px] focus:ring-sky-500/10"
                        placeholder="اسم المسؤول عن التواصل"
                    />
                </div>

                {/* Phone Numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-sky-500" />
                            رقم الهاتف <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            value={form.phone_number}
                            onChange={(e) => setForm((prev: WizardFormState) => ({ ...prev, phone_number: e.target.value }))}
                            className="w-full px-5 py-3.5 rounded-xl transition-all duration-200 text-gray-900 border-2 border-gray-200 bg-gray-50 outline-none focus:border-sky-500 focus:bg-white focus:ring-[3px] focus:ring-sky-500/10 text-left"
                            placeholder="05xxxxxxxx"
                            dir="ltr"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            رقم الواتساب <span className="text-gray-400 text-xs font-normal">(اختياري)</span>
                        </label>
                        <input
                            type="tel"
                            value={form.whatsapp_number}
                            onChange={(e) => setForm((prev: WizardFormState) => ({ ...prev, whatsapp_number: e.target.value }))}
                            className="w-full px-5 py-3.5 rounded-xl transition-all duration-200 text-gray-900 border-2 border-gray-200 bg-gray-50 outline-none focus:border-sky-500 focus:bg-white focus:ring-[3px] focus:ring-sky-500/10 text-left"
                            placeholder="نفس رقم الهاتف إذا تُرك فارغاً"
                            dir="ltr"
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-sky-500" />
                        وصف الشركة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={form.description}
                        onChange={(e) => setForm((prev: WizardFormState) => ({ ...prev, description: e.target.value }))}
                        rows={5}
                        className="w-full px-5 py-3.5 rounded-xl transition-all duration-200 resize-none text-gray-900 border-2 border-gray-200 bg-gray-50 outline-none focus:border-sky-500 focus:bg-white focus:ring-[3px] focus:ring-sky-500/10 text-right"
                        placeholder="اكتب وصفاً مختصراً عن شركتك وخدماتها..."
                    />
                </div>
            </div>
        </div>
    );
}

// Mini component to manage Object URL lifecycle
function PreviewImage({ file, alt, className, style }: { file: File, alt: string, className?: string, style?: React.CSSProperties }) {
    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        const objectUrl = URL.createObjectURL(file);
        // eslint-disable-next-line
        setUrl(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [file]);

    // eslint-disable-next-line @next/next/no-img-element
    return url ? <img src={url} alt={alt} className={className} style={style} /> : null;
}

// ═══════════════════════════════════════════════════════════════════
// STEP 4 — Images & Summary
// ═══════════════════════════════════════════════════════════════════
interface StepImagesProps {
    logoFile: File | null;
    galleryFiles: File[];
    onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onGalleryUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveGallery: (index: number) => void;
    onRemoveLogo: () => void;
    form: {
        business_name: string;
        region: string;
        targeted_neighborhoods: string[];
    };
    selectedServicesNames: string[];
    selectedCitiesNames: string[];
    pricing: { baseCost: number; finalPrice: number; discount: number };
    durationDays: 15 | 30 | 60;
}

function StepImages({
    logoFile,
    galleryFiles,
    onLogoUpload,
    onGalleryUpload,
    onRemoveGallery,
    onRemoveLogo,
    form,
    selectedServicesNames,
    selectedCitiesNames,
    pricing,
    durationDays,
}: StepImagesProps) {
    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    الصور والملخص
                </h2>
                <p className="text-gray-500 text-lg">
                    أضف صور شركتك وراجع بياناتك قبل الإرسال
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Logo Upload */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-sky-500" />
                        شعار الشركة (اللوجو)
                    </label>
                    <div
                        className="rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer hover:border-sky-400"
                        style={{
                            border: '2px dashed #d1d5db',
                            background: logoFile ? '#f0f9ff' : '#fafafa',
                        }}
                    >
                        {logoFile ? (
                            <div className="relative inline-block">
                                <PreviewImage
                                    file={logoFile}
                                    alt="Logo preview"
                                    className="w-28 h-28 object-cover rounded-2xl"
                                    style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <button
                                    type="button"
                                    onClick={onRemoveLogo}
                                    aria-label="إزالة اللوجو"
                                    className="absolute -top-2 -left-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                                    style={{ boxShadow: '0 2px 8px rgba(239,68,68,0.3)' }}
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <label className="cursor-pointer block">
                                <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ background: '#e0f2fe' }}>
                                    <Upload className="w-8 h-8 text-sky-500" />
                                </div>
                                <p className="text-sm font-medium text-gray-600 mb-1">اضغط لرفع اللوجو</p>
                                <p className="text-xs text-gray-400">حد أقصى 5 ميجابايت</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={onLogoUpload}
                                    className="hidden"
                                />
                            </label>
                        )}
                    </div>
                </div>

                {/* Gallery Upload */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <Camera className="w-4 h-4 text-sky-500" />
                        صور الأعمال
                        <span className="text-gray-400 text-xs font-normal">(حتى 11 صورة)</span>
                    </label>
                    <div
                        className="rounded-2xl p-4 transition-all duration-300 hover:border-sky-400"
                        style={{
                            border: '2px dashed #d1d5db',
                            background: '#fafafa',
                            minHeight: '180px',
                        }}
                    >
                        <div className="flex flex-wrap gap-2 mb-3">
                            {galleryFiles.map((file, index) => (
                                <div key={index} className="relative animate-scaleIn">
                                    <PreviewImage
                                        file={file}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-20 h-20 object-cover rounded-xl"
                                        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => onRemoveGallery(index)}
                                        aria-label="إزالة الصورة"
                                        className="absolute -top-1.5 -left-1.5 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                                        style={{ boxShadow: '0 2px 6px rgba(239,68,68,0.3)' }}
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        {galleryFiles.length < 11 && (
                            <label className="flex items-center justify-center gap-2 p-4 rounded-xl cursor-pointer transition-all hover:bg-sky-50"
                                style={{ background: '#f0f9ff', border: '1px dashed #bae6fd' }}>
                                <Upload className="w-5 h-5 text-sky-500" />
                                <span className="text-sm text-sky-600 font-medium">
                                    إضافة صور ({galleryFiles.length}/11)
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={onGalleryUpload}
                                    className="hidden"
                                />
                            </label>
                        )}
                    </div>
                </div>
            </div>

            {/* ─── Summary ──────────────────────────────────────────── */}
            <div className="rounded-2xl overflow-hidden" style={{
                background: 'linear-gradient(135deg, #f8fafc, #f0f9ff)',
                border: '1px solid #e0f2fe',
            }}>
                <div className="p-5" style={{
                    background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                }}>
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        ملخص الطلب
                    </h3>
                </div>
                <div className="p-6 space-y-4">
                    {form.business_name && (
                        <SummaryRow label="اسم الشركة" value={form.business_name} />
                    )}
                    <SummaryRow
                        label="الخدمات"
                        value={selectedServicesNames.length > 0 ? selectedServicesNames.join(' · ') : '—'}
                    />
                    <SummaryRow
                        label="المنطقة"
                        value={REGION_NAMES[form.region] || '—'}
                    />
                    <SummaryRow
                        label="المدن"
                        value={selectedCitiesNames.length > 0 ? selectedCitiesNames.join(' · ') : '—'}
                    />
                    {form.targeted_neighborhoods.length > 0 && (
                        <SummaryRow
                            label="الأحياء"
                            value={form.targeted_neighborhoods.join(' · ')}
                        />
                    )}
                    <SummaryRow
                        label="الصور"
                        value={`${logoFile ? '✓ لوجو' : '—'}${galleryFiles.length > 0 ? ` · ${galleryFiles.length} صور أعمال` : ''}`}
                    />
                    <div className="mt-4 pt-4 border-t border-sky-100">
                        <SummaryRow label="المدة" value={`${durationDays} يوماً`} />
                        {pricing.discount > 0 && (
                            <div className="mt-2">
                                <SummaryRow label="الخصم" value={`${pricing.discount} ر.س`} />
                            </div>
                        )}
                        <div className="mt-3 flex items-center justify-between p-3 rounded-xl bg-sky-100/60">
                            <span className="text-sm font-bold text-sky-800">الإجمالي التقديري</span>
                            <span className="text-xl font-extrabold text-sky-700">{pricing.finalPrice} <span className="text-sm font-medium text-sky-500">ر.س</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Summary Row ───────────────────────────────────────────────────
function SummaryRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-start gap-3">
            <span className="text-sm font-bold text-gray-500 min-w-[80px] pt-0.5">{label}</span>
            <span className="text-sm text-gray-800 font-medium leading-relaxed">{value}</span>
        </div>
    );
}

// ─── Step Duration ─────────────────────────────────────────────

interface StepDurationProps {
    form: Pick<WizardFormState, 'duration_days'>;
    setForm: React.Dispatch<React.SetStateAction<WizardFormState>>;
    pricing: { baseCost: number; finalPrice: number; discount: number };
}

function StepDuration({ form, setForm, pricing }: StepDurationProps) {
    const options = [
        { days: 15, label: '15 يوم', desc: 'لتجربة الخدمة وتقييم العوائد', popular: false },
        { days: 30, label: '30 يوم', desc: 'الاشتراك القياسي', popular: false },
        { days: 60, label: '60 يوم', desc: 'مدة أطول بتكلفة أقل', popular: true, discountLabel: '20% خصم' },
    ];

    return (
        <div className="animate-fadeIn">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">مدة حملتك الإعلانية</h2>
                <p className="text-gray-500">اختر المدة التي تناسب ميزانيتك الترويجية</p>
            </div>

            <div className="flex flex-col gap-4 max-w-lg mx-auto mb-8">
                {options.map((opt) => {
                    const isSelected = form.duration_days === opt.days;
                    return (
                        <button
                            key={opt.days}
                            type="button"
                            onClick={() => setForm((prev: WizardFormState) => ({ ...prev, duration_days: opt.days as 15|30|60 }))}
                            className={`relative flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 text-right ${isSelected ? 'border-sky-500 bg-sky-50 shadow-[0_4px_20px_rgba(14,165,233,0.2)]' : 'border-gray-200 hover:border-sky-200 hover:bg-gray-50'}`}
                        >
                            {opt.popular && (
                                <span className="absolute -top-3 left-6 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-sm">
                                    الأكثر توفيراً
                                </span>
                            )}
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-sky-500' : 'border-gray-300'}`}>
                                        {isSelected && <div className="w-3 h-3 bg-sky-500 rounded-full" />}
                                    </div>
                                    <span className={`text-xl font-bold ${isSelected ? 'text-sky-700' : 'text-gray-700'}`}>
                                        {opt.label}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2 mr-9">{opt.desc}</p>
                            </div>

                            {opt.discountLabel && (
                                <div className="flex flex-col items-center justify-center mr-4">
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded mb-1">
                                        {opt.discountLabel}
                                    </span>
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
                <h3 className="font-bold text-gray-800 mb-4 pb-4 border-b border-gray-100 text-lg">ملخص تسعير الباقة المختارة</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-gray-600">
                        <span>تكلفة التغطية والخدمات</span>
                        <span className="font-medium">{pricing.baseCost} ر.س / 30 يوم</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                        <span>المدة المختارة</span>
                        <span className="font-medium">{form.duration_days} يوماً</span>
                    </div>
                    {pricing.discount > 0 && (
                        <div className="flex justify-between items-center text-emerald-600 font-medium">
                            <span>الخصم المطبق</span>
                            <span>- {pricing.discount} ر.س</span>
                        </div>
                    )}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-4">
                        <span className="text-gray-900 font-bold text-lg">الإجمالي تقديرياً</span>
                        <span className="text-3xl font-extrabold text-sky-600">
                            {pricing.finalPrice} <span className="text-base font-medium text-gray-500">ر.س</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
