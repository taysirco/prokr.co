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
  date: string; // ISO string from Firestore
  // Voice review fields (التقييم الصوتي)
  review_type?: 'text' | 'audio';
  audio_url?: string;
  audio_transcript?: string;
  audio_duration_seconds?: number;
  transcript_confidence?: number;
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
  // Enhanced LocalBusiness Schema fields
  crn?: string;                    // رقم السجل التجاري السعودي (Commercial Registration Number)
  sbc_number?: string;             // رقم شهادة المركز السعودي للأعمال (SBC)
  street_address?: string;         // العنوان الوطني (National Address / Street)
  postal_code?: string;            // الرمز البريدي
  google_maps_url?: string;        // رابط الشركة على خرائط جوجل
  google_maps_place_id?: string;   // Google Maps Place ID
  payment_methods?: string[];      // طرق الدفع المقبولة
  has_verified_employees?: boolean; // فريق معتمد بتحقق أمني (نفاذ)
  zatca_registered?: boolean;        // ملتزمة بنظام الفوترة الإلكترونية (ZATCA)
  qiwa_registered?: boolean;         // عقود موثقة في منصة قوى / أجير
  nitaqat_band?: 'green' | 'platinum' | 'low-green'; // تصنيف نطاقات
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
  // Enhanced LocalBusiness Schema fields
  crn?: string;
  sbc_number?: string;
  street_address?: string;
  postal_code?: string;
  google_maps_url?: string;
  google_maps_place_id?: string;
  payment_methods?: string[];
  has_verified_employees?: boolean;
  zatca_registered?: boolean;
  qiwa_registered?: boolean;
  nitaqat_band?: 'green' | 'platinum' | 'low-green';
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
export interface PageContent {
  title: string;
  description: string;
  h1: string;
  pricesSection: string;
  howToChooseSection: string;
}

// JSON-LD Schema types
export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness' | 'HomeAndConstructionBusiness';
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
    streetAddress?: string;
    postalCode?: string;
  };
  identifier?: {
    '@type': 'PropertyValue';
    propertyID: string;
    value: string;
    url?: string;
  }[];
  location?: {
    '@type': 'Place';
    sameAs?: string;
    hasMap?: string;
  };
  paymentAccepted?: string[];
  employee?: Record<string, unknown>;
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
    name?: string;
    url?: string;
    item?: {
      '@type': 'LocalBusiness';
      name: string;
      url: string;
      telephone?: string;
      image?: string;
      aggregateRating?: {
        '@type': 'AggregateRating';
        ratingValue: number;
        reviewCount: number;
        bestRating: number;
        worstRating: number;
      };
    };
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

// ============================================
// AI Booking API — Service Booking Types
// Used by /api/book endpoint for Google Assistant
// and AI agent programmatic reservations
// ============================================

export type BookingSource = 'web' | 'google_assistant' | 'ai_agent' | 'api';
export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface ServiceBooking {
  id: string;
  reservation_id: string;           // Human-readable ID: BK-{timestamp}-{random}
  service_slug: string;
  city_slug: string;
  customer_name: string;
  customer_phone: string;           // Saudi format: 05xxxxxxxx
  preferred_date?: string;          // ISO date string
  notes?: string;
  source: BookingSource;
  status: BookingStatus;
  matched_providers: string[];      // Array of advertiser short_codes
  matched_providers_count: number;
  created_at: Date;
  updated_at: Date;
}

export interface ServiceBookingFormData {
  service: string;        // service slug
  city: string;           // city slug
  customer_name: string;
  customer_phone: string;
  preferred_date?: string;
  notes?: string;
  source?: BookingSource;
}
