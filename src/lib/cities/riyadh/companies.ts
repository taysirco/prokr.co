// This file contains all authorized service companies in Riyadh
// Using this specific file prevents the main city context from becoming too large.

export interface Company {
    id: string;
    name: string;
    services: string[];
    rating: number;
    reviewsCount: number;
    phone: string;
    // Add additional company-specific properties below (e.g., logo, address)
}

// Example array of companies - Populate with actual reliable companies in Riyadh
export const riyadhCompanies: Company[] = [
    // {
    //     id: 'riyadh-moving-experts',
    //     name: 'خبراء النقل بالرياض',
    //     services: ['furniture-moving', 'furniture-storage'],
    //     rating: 4.8,
    //     reviewsCount: 154,
    //     phone: '+966542317431'
    // },
];
