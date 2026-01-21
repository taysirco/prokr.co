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
    Lock,
    Search,
    Filter,
    Edit,
    Trash2,
    Eye,
    EyeOff,
    ToggleLeft,
    ToggleRight,
    Users,
    ChevronDown,
    RefreshCw,
    ExternalLink,
    ClipboardList,
    CheckCircle,
    XCircle,
    User as UserIcon,
    Calendar
} from 'lucide-react';
import { CITIES, SERVICES, getCitiesByRegion, getServicesByCategory, CATEGORY_NAMES } from '@/lib/seed';
import { uploadLogo, uploadGallery, validateFile } from '@/lib/storage';
import {
    createAdvertiser,
    getAllAdvertisers,
    updateAdvertiser,
    deleteAdvertiser,
    toggleAdvertiserPremium,
    toggleAdvertiserActive,
    getPendingRequests,
    approveRequest,
    rejectRequest,
    deleteRequest
} from '@/lib/db-actions';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import type { Advertiser, AdvertiserRequest } from '@/types';

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

// Region names mapping
const regionNames: Record<string, string> = {
    central: 'المنطقة الوسطى',
    western: 'المنطقة الغربية',
    eastern: 'المنطقة الشرقية',
    northern: 'المنطقة الشمالية',
    southern: 'المنطقة الجنوبية',
};

export default function AdminDashboard() {
    const [user, setUser] = useState<User | null>(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'list' | 'add' | 'requests'>('list');

    // Form states
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState<AdvertiserForm>(initialForm);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);

    // Advertiser list states
    const [advertisers, setAdvertisers] = useState<Advertiser[]>([]);
    const [filteredAdvertisers, setFilteredAdvertisers] = useState<Advertiser[]>([]);
    const [listLoading, setListLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCity, setFilterCity] = useState('');
    const [filterService, setFilterService] = useState('');
    const [filterStatus, setFilterStatus] = useState<'all' | 'premium' | 'free' | 'active' | 'inactive'>('all');

    // Login form states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);

    // Requests states
    const [requests, setRequests] = useState<AdvertiserRequest[]>([]);
    const [requestsLoading, setRequestsLoading] = useState(false);

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

    // Load advertisers when user is authenticated
    useEffect(() => {
        if (user) {
            loadAdvertisers();
            loadRequests();
        }
    }, [user]);

    // Filter advertisers
    useEffect(() => {
        let filtered = [...advertisers];

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(ad =>
                ad.business_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ad.phone_number.includes(searchQuery) ||
                ad.short_code.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // City filter
        if (filterCity) {
            filtered = filtered.filter(ad => ad.targeted_cities.includes(filterCity));
        }

        // Service filter
        if (filterService) {
            filtered = filtered.filter(ad => ad.targeted_services.includes(filterService));
        }

        // Status filter
        if (filterStatus === 'premium') {
            filtered = filtered.filter(ad => ad.is_premium);
        } else if (filterStatus === 'free') {
            filtered = filtered.filter(ad => !ad.is_premium);
        } else if (filterStatus === 'active') {
            filtered = filtered.filter(ad => ad.is_active !== false);
        } else if (filterStatus === 'inactive') {
            filtered = filtered.filter(ad => ad.is_active === false);
        }

        setFilteredAdvertisers(filtered);
    }, [advertisers, searchQuery, filterCity, filterService, filterStatus]);

    const loadAdvertisers = async () => {
        setListLoading(true);
        try {
            const data = await getAllAdvertisers();
            setAdvertisers(data);
        } catch (error) {
            console.error('Error loading advertisers:', error);
        } finally {
            setListLoading(false);
        }
    };

    const loadRequests = async () => {
        setRequestsLoading(true);
        try {
            const data = await getPendingRequests();
            setRequests(data);
        } catch (error) {
            console.error('Error loading requests:', error);
        } finally {
            setRequestsLoading(false);
        }
    };

    const handleApproveRequest = async (requestId: string) => {
        if (!confirm('هل تريد الموافقة على هذا الطلب وتحويله لمعلن؟')) return;

        try {
            const advertiser = await approveRequest(requestId);
            setSuccessMessage(`تمت الموافقة على الطلب! كود المعلن: ${advertiser.short_code}`);
            loadRequests();
            loadAdvertisers();
            setTimeout(() => setSuccessMessage(''), 5000);
        } catch (error) {
            console.error('Error approving request:', error);
            alert('حدث خطأ أثناء الموافقة على الطلب');
        }
    };

    const handleRejectRequest = async (requestId: string) => {
        const reason = prompt('سبب الرفض (اختياري):');
        if (reason === null) return; // User cancelled

        try {
            await rejectRequest(requestId, reason);
            setSuccessMessage('تم رفض الطلب');
            loadRequests();
            setTimeout(() => setSuccessMessage(''), 5000);
        } catch (error) {
            console.error('Error rejecting request:', error);
            alert('حدث خطأ أثناء رفض الطلب');
        }
    };

    const handleDeleteRequest = async (requestId: string, businessName: string) => {
        if (!confirm(`هل تريد حذف طلب "${businessName}"؟`)) return;

        try {
            await deleteRequest(requestId);
            loadRequests();
        } catch (error) {
            console.error('Error deleting request:', error);
            alert('حدث خطأ أثناء حذف الطلب');
        }
    };

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

            if (editingId) {
                // Update existing advertiser
                await updateAdvertiser(editingId, {
                    business_name: form.business_name,
                    phone_number: form.phone_number,
                    whatsapp_number: form.whatsapp_number || form.phone_number,
                    is_premium: form.is_premium,
                    priority_score: form.priority_score,
                    targeted_cities: form.targeted_cities,
                    targeted_services: form.targeted_services,
                    description: form.description,
                });
                setSuccessMessage('تم تحديث المعلن بنجاح!');
                setEditingId(null);
            } else {
                // Create new advertiser
                let logoUrl = '';
                if (logoFile) {
                    logoUrl = await uploadLogo(logoFile, form.business_name);
                }

                let galleryUrls: string[] = [];
                if (galleryFiles.length > 0) {
                    galleryUrls = await uploadGallery(galleryFiles, form.business_name);
                }

                const subscriptionExpiry = form.is_premium
                    ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
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
            }

            setForm(initialForm);
            setLogoFile(null);
            setGalleryFiles([]);
            loadAdvertisers();
            setActiveTab('list');

            setTimeout(() => setSuccessMessage(''), 5000);
        } catch (error) {
            console.error('Error saving advertiser:', error);
            alert('حدث خطأ: ' + (error instanceof Error ? error.message : 'خطأ غير معروف'));
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (advertiser: Advertiser) => {
        setEditingId(advertiser.id);
        setForm({
            business_name: advertiser.business_name,
            phone_number: advertiser.phone_number,
            whatsapp_number: advertiser.whatsapp_number,
            is_premium: advertiser.is_premium,
            priority_score: advertiser.priority_score,
            targeted_cities: advertiser.targeted_cities,
            targeted_services: advertiser.targeted_services,
            description: advertiser.description,
        });
        setActiveTab('add');
    };

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`هل أنت متأكد من حذف "${name}"؟`)) return;

        try {
            await deleteAdvertiser(id);
            loadAdvertisers();
        } catch (error) {
            console.error('Error deleting:', error);
            alert('حدث خطأ أثناء الحذف');
        }
    };

    const handleTogglePremium = async (id: string, currentStatus: boolean) => {
        try {
            await toggleAdvertiserPremium(id, !currentStatus);
            loadAdvertisers();
        } catch (error) {
            console.error('Error toggling premium:', error);
        }
    };

    const handleToggleActive = async (id: string, currentStatus: boolean) => {
        try {
            await toggleAdvertiserActive(id, !currentStatus);
            loadAdvertisers();
        } catch (error) {
            console.error('Error toggling active:', error);
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setForm(initialForm);
        setLogoFile(null);
        setGalleryFiles([]);
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
            <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-emerald-500/30">
                            <span className="text-white font-black text-3xl">P</span>
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
                            className="w-full px-4 py-4 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30"
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
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <div>
                                <h1 className="font-bold text-gray-900">لوحة التحكم</h1>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Stats */}
                            <div className="hidden md:flex items-center gap-6 px-4 py-2 bg-gray-50 rounded-xl">
                                <div className="text-center">
                                    <p className="text-lg font-bold text-gray-900">{advertisers.length}</p>
                                    <p className="text-xs text-gray-500">إجمالي</p>
                                </div>
                                <div className="w-px h-8 bg-gray-200"></div>
                                <div className="text-center">
                                    <p className="text-lg font-bold text-amber-600">{advertisers.filter(a => a.is_premium).length}</p>
                                    <p className="text-xs text-gray-500">مميز</p>
                                </div>
                                <div className="w-px h-8 bg-gray-200"></div>
                                <div className="text-center">
                                    <p className="text-lg font-bold text-emerald-600">{advertisers.filter(a => a.is_active !== false).length}</p>
                                    <p className="text-xs text-gray-500">نشط</p>
                                </div>
                            </div>

                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
                            >
                                <LogOut className="w-5 h-5" />
                                <span className="hidden sm:inline">خروج</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Tabs */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-1">
                        <button
                            onClick={() => { setActiveTab('list'); cancelEdit(); }}
                            className={`px-6 py-4 font-medium transition-all border-b-2 ${activeTab === 'list'
                                ? 'text-emerald-600 border-emerald-600 bg-emerald-50'
                                : 'text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            <Users className="w-5 h-5 inline ml-2" />
                            إدارة المعلنين
                        </button>
                        <button
                            onClick={() => { setActiveTab('requests'); cancelEdit(); }}
                            className={`px-6 py-4 font-medium transition-all border-b-2 relative ${activeTab === 'requests'
                                ? 'text-amber-600 border-amber-600 bg-amber-50'
                                : 'text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            <ClipboardList className="w-5 h-5 inline ml-2" />
                            طلبات التسجيل
                            {requests.length > 0 && (
                                <span className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                    {requests.length}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => { setActiveTab('add'); cancelEdit(); }}
                            className={`px-6 py-4 font-medium transition-all border-b-2 ${activeTab === 'add'
                                ? 'text-emerald-600 border-emerald-600 bg-emerald-50'
                                : 'text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            <Plus className="w-5 h-5 inline ml-2" />
                            {editingId ? 'تعديل معلن' : 'إضافة معلن جديد'}
                        </button>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Success Message */}
                {successMessage && (
                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span className="text-emerald-800 font-medium">{successMessage}</span>
                    </div>
                )}

                {/* Advertisers List Tab */}
                {activeTab === 'list' && (
                    <div className="space-y-6">
                        {/* Filters */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                {/* Search */}
                                <div className="md:col-span-2 relative">
                                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="بحث بالاسم أو الهاتف أو الكود..."
                                        className="w-full pr-10 pl-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    />
                                </div>

                                {/* City Filter */}
                                <select
                                    value={filterCity}
                                    onChange={(e) => setFilterCity(e.target.value)}
                                    className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                >
                                    <option value="">جميع المدن</option>
                                    {CITIES.map(city => (
                                        <option key={city.slug} value={city.slug}>{city.name_ar}</option>
                                    ))}
                                </select>

                                {/* Service Filter */}
                                <select
                                    value={filterService}
                                    onChange={(e) => setFilterService(e.target.value)}
                                    className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                >
                                    <option value="">جميع الخدمات</option>
                                    {SERVICES.map(service => (
                                        <option key={service.slug} value={service.slug}>{service.name_ar}</option>
                                    ))}
                                </select>

                                {/* Status Filter */}
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
                                    className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                >
                                    <option value="all">جميع الحالات</option>
                                    <option value="premium">مميز فقط</option>
                                    <option value="free">مجاني فقط</option>
                                    <option value="active">نشط فقط</option>
                                    <option value="inactive">متوقف فقط</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                <p className="text-sm text-gray-500">
                                    عرض {filteredAdvertisers.length} من {advertisers.length} معلن
                                </p>
                                <button
                                    onClick={loadAdvertisers}
                                    disabled={listLoading}
                                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                                >
                                    <RefreshCw className={`w-4 h-4 ${listLoading ? 'animate-spin' : ''}`} />
                                    تحديث القائمة
                                </button>
                            </div>
                        </div>

                        {/* Advertisers Table */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            {listLoading ? (
                                <div className="flex items-center justify-center py-20">
                                    <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
                                </div>
                            ) : filteredAdvertisers.length === 0 ? (
                                <div className="text-center py-20">
                                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500">لا يوجد معلنين</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="text-right px-6 py-4 text-sm font-bold text-gray-700">المعلن</th>
                                                <th className="text-right px-4 py-4 text-sm font-bold text-gray-700">الكود</th>
                                                <th className="text-right px-4 py-4 text-sm font-bold text-gray-700">المدن</th>
                                                <th className="text-right px-4 py-4 text-sm font-bold text-gray-700">الخدمات</th>
                                                <th className="text-center px-4 py-4 text-sm font-bold text-gray-700">النوع</th>
                                                <th className="text-center px-4 py-4 text-sm font-bold text-gray-700">الحالة</th>
                                                <th className="text-center px-4 py-4 text-sm font-bold text-gray-700">الإجراءات</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {filteredAdvertisers.map(advertiser => (
                                                <tr key={advertiser.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                                                                {advertiser.logo_url ? (
                                                                    <img src={advertiser.logo_url} alt="" className="w-full h-full object-cover" />
                                                                ) : (
                                                                    <Building2 className="w-6 h-6 text-gray-400" />
                                                                )}
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-gray-900">{advertiser.business_name}</p>
                                                                <p className="text-sm text-gray-500 flex items-center gap-1" dir="ltr">
                                                                    <Phone className="w-3 h-3" />
                                                                    {advertiser.phone_number}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
                                                            {advertiser.short_code}
                                                        </code>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <span className="text-sm text-gray-600">
                                                            {advertiser.targeted_cities.length} مدينة
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <span className="text-sm text-gray-600">
                                                            {advertiser.targeted_services.length} خدمة
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4 text-center">
                                                        <button
                                                            onClick={() => handleTogglePremium(advertiser.id, advertiser.is_premium)}
                                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${advertiser.is_premium
                                                                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                                }`}
                                                        >
                                                            {advertiser.is_premium ? (
                                                                <>
                                                                    <Crown className="w-4 h-4 inline ml-1" />
                                                                    مميز
                                                                </>
                                                            ) : 'مجاني'}
                                                        </button>
                                                    </td>
                                                    <td className="px-4 py-4 text-center">
                                                        <button
                                                            onClick={() => handleToggleActive(advertiser.id, advertiser.is_active !== false)}
                                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${advertiser.is_active !== false
                                                                ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                                                : 'bg-red-100 text-red-700 hover:bg-red-200'
                                                                }`}
                                                        >
                                                            {advertiser.is_active !== false ? (
                                                                <>
                                                                    <Eye className="w-4 h-4 inline ml-1" />
                                                                    نشط
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <EyeOff className="w-4 h-4 inline ml-1" />
                                                                    متوقف
                                                                </>
                                                            )}
                                                        </button>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center justify-center gap-1">
                                                            <a
                                                                href={`/company/${advertiser.short_code}`}
                                                                target="_blank"
                                                                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                                title="معاينة"
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                            </a>
                                                            <button
                                                                onClick={() => handleEdit(advertiser)}
                                                                className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                                                title="تعديل"
                                                            >
                                                                <Edit className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(advertiser.id, advertiser.business_name)}
                                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                                title="حذف"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Requests Tab */}
                {activeTab === 'requests' && (
                    <div className="space-y-6">
                        {/* Header */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">طلبات التسجيل الجديدة</h2>
                                    <p className="text-sm text-gray-500">
                                        {requests.length} طلب معلق بانتظار المراجعة
                                    </p>
                                </div>
                                <button
                                    onClick={loadRequests}
                                    disabled={requestsLoading}
                                    className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm"
                                >
                                    <RefreshCw className={`w-4 h-4 ${requestsLoading ? 'animate-spin' : ''}`} />
                                    تحديث
                                </button>
                            </div>
                        </div>

                        {/* Requests Table */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            {requestsLoading ? (
                                <div className="flex items-center justify-center py-20">
                                    <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
                                </div>
                            ) : requests.length === 0 ? (
                                <div className="text-center py-20">
                                    <ClipboardList className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500 font-medium">لا توجد طلبات معلقة</p>
                                    <p className="text-gray-400 text-sm">ستظهر هنا طلبات التسجيل الجديدة</p>
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-100">
                                    {requests.map(request => (
                                        <div key={request.id} className="p-6 hover:bg-gray-50 transition-colors">
                                            <div className="flex items-start justify-between gap-6">
                                                {/* Request Info */}
                                                <div className="flex-1 space-y-4">
                                                    <div className="flex items-center gap-4">
                                                        {request.logo_url ? (
                                                            <img
                                                                src={request.logo_url}
                                                                alt=""
                                                                className="w-16 h-16 rounded-xl object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                                                                <Building2 className="w-8 h-8 text-gray-400" />
                                                            </div>
                                                        )}
                                                        <div>
                                                            <h3 className="font-bold text-gray-900 text-lg">{request.business_name}</h3>
                                                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                                                <span className="flex items-center gap-1">
                                                                    <UserIcon className="w-4 h-4" />
                                                                    {request.contact_name}
                                                                </span>
                                                                <span className="flex items-center gap-1" dir="ltr">
                                                                    <Phone className="w-4 h-4" />
                                                                    {request.phone_number}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className={`px-3 py-1 rounded-lg text-sm font-medium ${request.selected_plan === 'premium'
                                                                ? 'bg-amber-100 text-amber-700'
                                                                : 'bg-gray-100 text-gray-600'
                                                            }`}>
                                                            {request.selected_plan === 'premium' ? (
                                                                <>
                                                                    <Crown className="w-4 h-4 inline ml-1" />
                                                                    مميز
                                                                </>
                                                            ) : 'مجاني'}
                                                        </span>
                                                    </div>

                                                    <p className="text-gray-600 text-sm line-clamp-2">{request.description}</p>

                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <MapPin className="w-4 h-4" />
                                                            {request.targeted_cities.length} مدينة
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Wrench className="w-4 h-4" />
                                                            {request.targeted_services.length} خدمة
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            {new Date(request.created_at).toLocaleDateString('ar-SA')}
                                                        </span>
                                                    </div>

                                                    {/* Gallery Preview */}
                                                    {request.gallery && request.gallery.length > 0 && (
                                                        <div className="flex gap-2 flex-wrap">
                                                            {request.gallery.slice(0, 5).map((img, idx) => (
                                                                <img
                                                                    key={idx}
                                                                    src={img}
                                                                    alt=""
                                                                    className="w-16 h-16 rounded-lg object-cover"
                                                                />
                                                            ))}
                                                            {request.gallery.length > 5 && (
                                                                <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                                                                    +{request.gallery.length - 5}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Actions */}
                                                <div className="flex flex-col gap-2">
                                                    <button
                                                        onClick={() => handleApproveRequest(request.id)}
                                                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                                                    >
                                                        <CheckCircle className="w-4 h-4" />
                                                        موافقة
                                                    </button>
                                                    <button
                                                        onClick={() => handleRejectRequest(request.id)}
                                                        className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 font-medium rounded-lg hover:bg-red-200 transition-colors"
                                                    >
                                                        <XCircle className="w-4 h-4" />
                                                        رفض
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteRequest(request.id, request.business_name)}
                                                        className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                        حذف
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Add/Edit Form Tab */}
                {activeTab === 'add' && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {editingId && (
                            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between">
                                <span className="text-amber-800 font-medium">
                                    <Edit className="w-5 h-5 inline ml-2" />
                                    تعديل معلن موجود
                                </span>
                                <button
                                    type="button"
                                    onClick={cancelEdit}
                                    className="text-amber-700 hover:text-amber-900 text-sm font-medium"
                                >
                                    إلغاء التعديل
                                </button>
                            </div>
                        )}

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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                                        <label className="flex items-center gap-2 cursor-pointer px-4 py-3 border rounded-xl hover:bg-gray-50 flex-1">
                                            <input
                                                type="radio"
                                                checked={!form.is_premium}
                                                onChange={() => setForm(prev => ({ ...prev, is_premium: false }))}
                                                className="w-4 h-4 text-emerald-600"
                                            />
                                            <span>مجاني</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer px-4 py-3 border border-amber-200 bg-amber-50 rounded-xl hover:bg-amber-100 flex-1">
                                            <input
                                                type="radio"
                                                checked={form.is_premium}
                                                onChange={() => setForm(prev => ({ ...prev, is_premium: true }))}
                                                className="w-4 h-4 text-amber-600"
                                            />
                                            <span className="text-amber-700 font-medium">
                                                <Crown className="w-4 h-4 inline ml-1" />
                                                مميز
                                            </span>
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                                        placeholder="اكتب وصفاً تفصيلياً للشركة..."
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
                                            {regionNames[region]}
                                        </h4>
                                        <div className="space-y-1 bg-gray-50 rounded-xl p-3">
                                            {cities.map(city => (
                                                <label
                                                    key={city.slug}
                                                    className="flex items-center gap-2 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors"
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
                                            {CATEGORY_NAMES[category] || category}
                                        </h4>
                                        <div className="space-y-1 bg-gray-50 rounded-xl p-3 max-h-64 overflow-y-auto">
                                            {services.map(service => (
                                                <label
                                                    key={service.slug}
                                                    className="flex items-center gap-2 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={form.targeted_services.includes(service.slug)}
                                                        onChange={() => handleServiceToggle(service.slug)}
                                                        className="w-4 h-4 text-emerald-600 rounded"
                                                    />
                                                    <span className="text-gray-700 text-sm">{service.name_ar}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Media Upload - Only for new advertisers */}
                        {!editingId && (
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
                                                                className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
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
                        )}

                        {/* Submit Button */}
                        <div className="flex justify-end gap-4">
                            {editingId && (
                                <button
                                    type="button"
                                    onClick={cancelEdit}
                                    className="px-6 py-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50"
                                >
                                    إلغاء
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        جاري الحفظ...
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-5 h-5" />
                                        {editingId ? 'تحديث المعلن' : 'حفظ المعلن'}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </main>
        </div>
    );
}
