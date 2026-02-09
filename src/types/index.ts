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
  is_active: boolean; // Whether the advertiser is visible
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
  '@id'?: string;
  name: string;
  telephone: string;
  url?: string;
  description?: string;
  image: string;
  priceRange?: string;
  address: {
    '@type': 'PostalAddress';
    addressCountry: 'SA';
    addressRegion: string;
    addressLocality?: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
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

// Organization Schema for company pages
export interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  '@id': string;
  name: string;
  url: string;
  logo?: string;
  description?: string;
  telephone?: string;
  areaServed?: {
    '@type': 'Country' | 'City';
    name: string;
  }[];
  hasOfferCatalog?: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: {
      '@type': 'OfferCatalog';
      name: string;
    }[];
  };
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  };
}

// ItemList Schema for listing pages
export interface ItemListSchema {
  '@context': 'https://schema.org';
  '@type': 'ItemList';
  name: string;
  description?: string;
  numberOfItems: number;
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    url: string;
  }[];
}

// WebPage Schema for category pages
export interface WebPageSchema {
  '@context': 'https://schema.org';
  '@type': 'WebPage';
  '@id': string;
  name: string;
  description: string;
  url: string;
  inLanguage?: string;
  datePublished?: string;
  dateModified?: string;
  isPartOf: {
    '@type': 'WebSite';
    '@id': string;
    name: string;
    url: string;
  };
  breadcrumb?: {
    '@type': 'BreadcrumbList';
    itemListElement: {
      '@type': 'ListItem';
      position: number;
      name: string;
      item: string;
    }[];
  };
}

// ServiceCatalog Schema for services listing
export interface ServiceCatalogSchema {
  '@context': 'https://schema.org';
  '@type': 'OfferCatalog';
  name: string;
  description: string;
  itemListElement: {
    '@type': 'Offer';
    itemOffered: {
      '@type': 'Service';
      name: string;
      url: string;
    };
  }[];
}

// Advertiser Registration Request interface
export interface AdvertiserRequest {
  id: string;
  business_name: string;
  contact_name: string;
  phone_number: string;
  whatsapp_number: string;
  description: string;
  logo_url: string;
  gallery: string[];
  targeted_cities: string[];
  targeted_services: string[];
  region: string;
  selected_plan: 'free' | 'premium';
  status: 'pending' | 'approved' | 'rejected';
  rejection_reason?: string;
  created_at: Date;
  updated_at: Date;
}

// Form data for advertiser registration
export interface AdvertiserRequestFormData {
  business_name: string;
  contact_name: string;
  phone_number: string;
  whatsapp_number: string;
  description: string;
  targeted_cities: string[];
  targeted_services: string[];
  region: string;
  selected_plan: 'free' | 'premium';
}
