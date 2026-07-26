import { Barber, BusinessInfo, GalleryItem, Review, Service } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Precision Barbers",
  tagline: "Precision Cuts. Premium Style. Trusted Barbers in Leeds.",
  address: "107 Roundhay Rd, Harehills",
  postcode: "LS8 5AJ",
  city: "Leeds",
  phone: "+44 113 219 9046",
  email: "contact@infinitybarbers.co.uk",
  website: "https://infinitybarbers.co.uk",
  instagram: "https://www.instagram.com/precision_barber1/",
  booksyUrl: "https://infinitybarbers.co.uk",
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=107+Roundhay+Rd,+Harehills,+Leeds+LS8+5AJ",
  hours: [
    { day: "Monday", time: "09:00 - 18:30" },
    { day: "Tuesday", time: "09:00 - 18:30" },
    { day: "Wednesday", time: "09:00 - 18:30" },
    { day: "Thursday", time: "09:00 - 19:00" },
    { day: "Friday", time: "09:00 - 19:00" },
    { day: "Saturday", time: "08:30 - 18:00" },
    { day: "Sunday", time: "10:00 - 16:00" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'skin-fade',
    title: 'Skin Fade',
    price: '£22',
    duration: '45 mins',
    category: 'Cuts',
    description: 'Precision zero-gap foil skin fade seamlessly blended into your desired top style with clean razor line-up.',
    includes: ['Zero-gap foil fade', 'Precision top cut & texturising', 'Scalp refresh', 'Hot towel finish', 'Styling consultation'],
    isPopular: true,
    recommendedFor: 'Sharp sides & seamless fade gradient'
  },
  {
    id: 'classic-haircut',
    title: 'Classic Haircut',
    price: '£18',
    duration: '35 mins',
    category: 'Cuts',
    description: 'Personal consultation, precision haircut, blow-dry styling & hot towel neck finish.',
    includes: ['Hair consultation', 'Precision scissor & clipper work', 'Blow dry & matte product styling', 'Hot towel neck clean'],
    isPopular: true,
    recommendedFor: 'Clean standard trim or timeless classic style'
  },
  {
    id: 'beard-trim',
    title: 'Beard Trim',
    price: '£12',
    duration: '25 mins',
    category: 'Beard',
    description: 'Clipper shape, cheek & neck line razor edging, hot towel steam & nourishing beard oil.',
    includes: ['Length reduction & shaping', 'Razor cheek & neck line-up', 'Hot towel steam treatment', 'Beard balm & oil massage'],
    recommendedFor: 'Maintaining clean beard lines & sharp shape'
  },
  {
    id: 'hair-beard-package',
    title: 'Hair & Beard Package',
    price: '£28',
    duration: '55 mins',
    category: 'Combos',
    description: 'Complete grooming package: Custom haircut or skin fade plus full beard sculpt, razor edging & hot towel finish.',
    includes: ['Precision haircut or skin fade', 'Full beard sculpt & razor edge', 'Hot towel steam massage', 'Premium styling finish'],
    isPopular: true,
    recommendedFor: 'The complete grooming overhaul'
  },
  {
    id: 'scissor-cut',
    title: 'Scissor Cut',
    price: '£22',
    duration: '45 mins',
    category: 'Cuts',
    description: 'Hand-crafted scissor precision haircut for textured or classic medium to long styles.',
    includes: ['Hand scissor layering', 'Natural texture blending', 'Precision blow dry styling', 'Hot towel finish'],
    recommendedFor: 'Medium to long hair & classic scissor styles'
  },
  {
    id: 'buzz-cut',
    title: 'Buzz Cut',
    price: '£14',
    duration: '20 mins',
    category: 'Cuts',
    description: 'Clean, uniform clipper cut all over with razor hairline edging & hot towel neck shave.',
    includes: ['Uniform grade clipper cut all over', 'Razor crisp neck line-up', 'Hot towel finish'],
    recommendedFor: 'Low maintenance, ultra-clean short styles'
  },
  {
    id: 'kids-haircut',
    title: 'Kids Haircut',
    price: '£14',
    duration: '30 mins',
    category: 'Junior',
    description: 'Patient, friendly haircut for kids with cool modern styles and attentive care.',
    includes: ['Friendly barber care', 'Precision fade or trim', 'Fun styling finish'],
    recommendedFor: 'Children & young gents under 12'
  },
  {
    id: 'restyle',
    title: 'Restyle',
    price: '£26',
    duration: '50 mins',
    category: 'Cuts',
    description: 'Complete hairstyle transformation with in-depth personal consultation, precision restyling, and custom product finish.',
    includes: ['Detailed transformation consultation', 'Complete re-shaping & weight reduction', 'Custom blow-dry & product guide'],
    recommendedFor: 'Major length changes & new style directions'
  },
  {
    id: 'hot-towel-shave',
    title: 'Hot Towel Shave',
    price: '£18',
    duration: '35 mins',
    category: 'Beard',
    description: 'Traditional hot towel steam shave with straight razor, soothing essential oils and cold towel finish.',
    includes: ['Pre-shave essential oils', 'Dual hot towel steam prep', 'Straight razor full shave', 'Cooling post-shave balm'],
    recommendedFor: 'Traditional luxury smooth shave'
  }
];

export const TEAM: Barber[] = [
  {
    id: 'heady',
    name: 'Heady',
    role: 'Lead Master Barber',
    experience: '10+ Years Experience',
    bio: "Renowned master barber at Precision Barbers. Highly praised by clients for exceptional skill, clean skin fades, attention to detail, and top-tier customer service.",
    specialties: ['Precision Skin Fades', 'Beard Sculpting', 'Restyles', 'Hot Towel Shaves'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://www.instagram.com/precision_barber1/',
    rating: 4.8,
    reviewsCount: 84,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 'sam',
    name: 'Sam',
    role: 'Senior Fade Specialist',
    experience: '7+ Years Experience',
    bio: "Specialist in razor skin fades, textured crop styling, and sharp line-ups. Sam delivers consistent quality and friendly conversation.",
    specialties: ['Foil Skin Fades', 'Textured Crops', 'Razor Line-ups', 'Kid Haircuts'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://www.instagram.com/precision_barber1/',
    rating: 4.6,
    reviewsCount: 32,
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  {
    id: 'marco',
    name: 'Marco',
    role: 'Beard & Scissor Specialist',
    experience: '6+ Years Experience',
    bio: "Expert in beard shaping, hot towel treatments, and hand-scissor work. Tailors every haircut to match individual style.",
    specialties: ['Beard Sculpting', 'Hot Towel Shaves', 'Scissor Layering', 'Classic Cuts'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://www.instagram.com/precision_barber1/',
    rating: 4.6,
    reviewsCount: 21,
    availableDays: ['Monday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Precision Barbers Exterior',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    caption: '107 Roundhay Rd, Harehills, Leeds LS8 5AJ - Welcome to Precision Barbers.',
    location: '107 Roundhay Rd, Harehills'
  },
  {
    id: 'g2',
    title: 'Barber Workstations & Chairs',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Modern barber stations equipped for high-precision cuts and grooming.',
    location: 'Main Salon Floor'
  },
  {
    id: 'g3',
    title: 'Clean Precision Skin Fade',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Seamless zero skin fade with textured top finish.',
    location: 'Station 1'
  },
  {
    id: 'g4',
    title: 'Hot Towel Shave & Beard Trim',
    category: 'Beard Grooming',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80',
    caption: 'Traditional hot towel treatment and crisp beard line-up.',
    location: 'Beard Station'
  },
  {
    id: 'g5',
    title: 'Welcoming Shop Atmosphere',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Friendly barbers and welcoming environment in Harehills, Leeds.',
    location: 'Precision Barbers'
  },
  {
    id: 'g6',
    title: 'Classic Scissor Haircut',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
    caption: 'Precision hand scissor layering for a sharp classic look.',
    location: 'Station 2'
  },
  {
    id: 'g7',
    title: 'Sharp Line-Up Detail',
    category: 'Beard Grooming',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crisp straight-razor edging and beard sculpt.',
    location: 'Station 3'
  },
  {
    id: 'g8',
    title: 'Top Quality Barbering Experience',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Consistent 5-star quality and customer satisfaction every day.',
    location: 'Precision Barbers Leeds'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Customer Review',
    rating: 5,
    date: '1 week ago',
    service: 'Skin Fade',
    text: "I cannot recommend Heady at Precision enough. His skills are excellent and every haircut is first class.",
    verified: true
  },
  {
    id: 'r2',
    author: 'Satisfied Client',
    rating: 5,
    date: '2 weeks ago',
    service: 'Classic Haircut & Beard',
    text: "Professional, friendly, and always delivers clean, precise and consistent haircuts.",
    verified: true
  },
  {
    id: 'r3',
    author: 'Leeds Resident',
    rating: 5,
    date: '3 weeks ago',
    service: 'Hair & Beard Package',
    text: "Best skin fades in Leeds. Great atmosphere, top barbers and excellent service.",
    verified: true
  },
  {
    id: 'r4',
    author: 'Harehills Client',
    rating: 5,
    date: '1 month ago',
    service: 'Skin Fade',
    text: "Fantastic service every time. Highly recommended barbershop in Harehills!",
    verified: true
  },
  {
    id: 'r5',
    author: 'Regular Client',
    rating: 5,
    date: '1 month ago',
    service: 'Beard Trim & Hot Towel',
    text: "Clean, quick and top quality skin fade. 10/10 experience!",
    verified: true
  }
];

export const BRAND_STATS = [
  { value: '127+', label: 'Google Reviews', prefix: '' },
  { value: '4.6★', label: 'Average Rating', prefix: '' },
  { value: '1500+', label: 'Happy Clients', prefix: '' },
  { value: '100%', label: 'Customer Satisfaction', prefix: '' }
];

export const MARQUEE_ITEMS = [
  'PRECISION BARBERS',
  'HAREHILLS LEEDS',
  '107 ROUNDHAY RD',
  '4.6★ RATED (127 REVIEWS)',
  'PRECISION CUTS & SKIN FADES',
  'EXPERT BEARD GROOMING',
  'HOT TOWEL SHAVES',
  'INFINITYBARBERS.CO.UK'
];
