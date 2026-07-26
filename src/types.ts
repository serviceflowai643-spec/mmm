export interface Service {
  id: string;
  title: string;
  price: string;
  duration: string;
  category: 'Cuts' | 'Beard' | 'Combos' | 'Packages' | 'Junior' | 'Wellness';
  description: string;
  includes: string[];
  recommendedFor?: string;
  isPopular?: boolean;
  image?: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  specialties: string[];
  image: string;
  facebook?: string;
  instagram?: string;
  rating: number;
  reviewsCount: number;
  availableDays: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior & Shop' | 'Skin Fades & Cuts' | 'Beard Grooming' | 'Atmosphere';
  image: string;
  caption: string;
  location?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface BookingFormState {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
}

export interface FacebookPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  date: string;
  url: string;
}

export type InstagramPost = FacebookPost;

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: string;
  postcode: string;
  city: string;
  phone: string;
  email: string;
  website: string;
  facebook: string;
  instagram: string;
  booksyUrl: string;
  googleMapsUrl: string;
  rating: number;
  reviewsCount: number;
  hours: {
    day: string;
    time: string;
  }[];
}
