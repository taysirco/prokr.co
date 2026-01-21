// Core TypeScript interfaces for Prokr

// City interface for static_data
export interface City {
  slug: string;
  name_ar: string;
  name_en: string;
  region: 'central' | 'western' | 'eastern' | 'northern' | 'southern';
}

// Service interface for static_data
export interface Service {
  slug: string;
  name_ar: string;
  name_en: string;
  category: string;
  icon?: string;
}

// Review interface for embedded reviews
export interface Review {
  id: string;
  user: string;
  rating: number; // 1-5
  comment: string;
  date: Date;
}

// Main Advertiser interface
export interface Advertiser {
  id: string;
  short_code: string; // Unique 6-char alphanumeric ID, e.g., 'X9kL2m'
  business_name: string;
  phone_number: string;
  whatsapp_number: string;
  logo_url: string;
  is_premium: boolean;
  priority_score: number; // 1-100
  subscription_expiry: Date | null;
  targeted_cities: string[]; // Array of city slugs
  targeted_services: string[]; // Array of service slugs
  description: string;
  gallery: string[]; // Array of image URLs
  reviews: Review[];
  created_at: Date;
  updated_at: Date;
}

// Form data for creating/editing advertisers
export interface AdvertiserFormData {
  business_name: string;
  phone_number: string;
  whatsapp_number: string;
  logo_url?: string;
  is_premium: boolean;
  priority_score: number;
  subscription_expiry?: Date | null;
  targeted_cities: string[];
  targeted_services: string[];
  description: string;
  gallery?: string[];
}

// Silo page params
export interface SiloParams {
  city: string;
  service: string;
}

// Company page params
export interface CompanyParams {
  code: string;
}

// Static data document structure
export interface StaticData {
  cities: City[];
  services: Service[];
}

// SEO content structure
export interface SeoContent {
  title: string;
  description: string;
  h1: string;
  pricesSection: string;
  howToChooseSection: string;
}

// JSON-LD Schema types
export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  telephone: string;
  image: string;
  address: {
    '@type': 'PostalAddress';
    addressCountry: 'SA';
    addressRegion: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    reviewCount: number;
  };
}

export interface ServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  description: string;
  areaServed: {
    '@type': 'City';
    name: string;
  };
  provider: {
    '@type': 'Organization';
    name: string;
  }[];
}
