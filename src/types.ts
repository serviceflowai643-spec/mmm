export interface Service {
  id: string;
  title: string;
  price: string;
  duration: string;
  category: 'Cuts' | 'Beard' | 'Combos' | 'Packages' | 'Junior';
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
  instagram: string;
  rating: number;
  reviewsCount: number;
  availableDays: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior & Arcade' | 'Skin Fades & Cuts' | 'Beard Sculpting' | 'Espresso & Culture' | 'Interior & Shop' | 'Beard Grooming';
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

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: string;
  postcode: string;
  city: string;
  phone: string;
  email: string;
  instagram: string;
  booksyUrl: string;
  googleMapsUrl: string;
  hours: {
    day: string;
    time: string;
  }[];
}
