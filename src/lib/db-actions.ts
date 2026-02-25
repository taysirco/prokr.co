// ============================================
// Database Actions - Re-export from domain modules
// This file maintained for backward compatibility.
// New code should import directly from '@/lib/db'.
// ============================================

export {
    // Static data
    getCities,
    getServices,
    validateCity,
    validateService,
    getServicesInCity,
    getCitiesForService,
    // Advertiser queries
    getAdvertisersBySilo,
    getAdvertiserByCode,
    createAdvertiser,
    // Admin CRUD
    getAllAdvertisers,
    updateAdvertiser,
    deleteAdvertiser,
    toggleAdvertiserPremium,
    toggleAdvertiserActive,
    // Request management
    createAdvertiserRequest,
    getPendingRequests,
    getAllRequests,
    approveRequest,
    rejectRequest,
    deleteRequest,
} from './db';
