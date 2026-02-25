// Database Actions - Barrel Export
// Split from monolithic db-actions.ts into domain modules

// Static data (cities, services, validation)
export { getCities, getServices, validateCity, validateService, getServicesInCity, getCitiesForService } from './static';

// Advertiser queries and creation
export { getAdvertisersBySilo, getAdvertiserByCode, createAdvertiser } from './advertisers';

// Admin CRUD (all advertisers, update, delete, toggles)
export { getAllAdvertisers, updateAdvertiser, deleteAdvertiser, toggleAdvertiserPremium, toggleAdvertiserActive } from './admin';

// Request management (create, list, approve, reject, delete)
export { createAdvertiserRequest, getPendingRequests, getAllRequests, approveRequest, rejectRequest, deleteRequest } from './requests';
