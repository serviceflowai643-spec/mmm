import { Barber, BusinessInfo, GalleryItem, Review, Service } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Scissorhands Barber",
  tagline: "Professional Barbering in the Heart of Leeds",
  address: "31a Great George St",
  postcode: "LS1 3BB",
  city: "Leeds",
  phone: "+44 7522 846125",
  email: "contact@scissorhandsbarber.co.uk",
  instagram: "https://instagram.com/scissorhandsbarber",
  booksyUrl: "https://booksy.com",
  googleMapsUrl: "https://maps.google.com/?q=31a+Great+George+St+Leeds+LS1+3BB",
  hours: [
    { day: "Monday", time: "09:00 - 18:00" },
    { day: "Tuesday", time: "09:00 - 18:00" },
    { day: "Wednesday", time: "09:00 - 18:00" },
    { day: "Thursday", time: "09:00 - 19:00" },
    { day: "Friday", time: "09:00 - 19:00" },
    { day: "Saturday", time: "08:30 - 17:30" },
    { day: "Sunday", time: "Closed" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'skin-fade',
    title: 'Skin Fade',
    price: '£26',
    duration: '45 mins',
    category: 'Cuts',
    description: 'Precision zero-gap foil skin fade seamlessly blended into your desired top style with razor crisp edging.',
    includes: ['Zero-gap foil fade', 'Precision top cut & texturising', 'Scalp refresh & wash', 'Hot towel finish', 'Styling consultation'],
    isPopular: true,
    recommendedFor: 'Razor-sharp sides & smooth seamless gradient'
  },
  {
    id: 'classic-haircut',
    title: 'Classic Haircut',
    price: '£22',
    duration: '35 mins',
    category: 'Cuts',
    description: 'Bespoke consultation, precision haircut, scalp wash, blow-dry styling & hot towel neck clean.',
    includes: ['Hair consultation', 'Precision scissor & clipper work', 'Scalp wash & refresh', 'Blow dry & matte styling product', 'Hot towel neck clean'],
    isPopular: true,
    recommendedFor: 'Clean standard trim or timeless classic style'
  },
  {
    id: 'student-haircut',
    title: 'Student Haircut',
    price: '£18',
    duration: '35 mins',
    category: 'Cuts',
    description: 'High-quality precision haircut at a discounted rate for students with valid student ID.',
    includes: ['Student ID discount', 'Precision fade or cut', 'Scalp wash & refresh', 'Styling product touch-up'],
    isPopular: true,
    recommendedFor: 'Leeds University & Beckett students'
  },
  {
    id: 'beard-trim',
    title: 'Beard Trim',
    price: '£14',
    duration: '25 mins',
    category: 'Beard',
    description: 'Clipper shape, cheek & neck line crisp edging, hot towel treatment & nourishing beard oil.',
    includes: ['Length reduction & shaping', 'Razor cheek & neck line-up', 'Hot towel steam prep', 'Beard balm & oil massage'],
    recommendedFor: 'Maintaining crisp beard lines & neat shape'
  },
  {
    id: 'hair-beard-package',
    title: 'Hair & Beard Package',
    price: '£34',
    duration: '55 mins',
    category: 'Combos',
    description: 'Complete grooming package: Custom haircut or skin fade plus full beard shape, razor edging & hot towel finish.',
    includes: ['Precision haircut or skin fade', 'Full beard sculpt & razor edge', 'Dual hot towel steam massage', 'Complimentary beverage', 'Premium styling finish'],
    isPopular: true,
    recommendedFor: 'The complete grooming overhaul'
  },
  {
    id: 'buzz-cut',
    title: 'Buzz Cut',
    price: '£16',
    duration: '20 mins',
    category: 'Cuts',
    description: 'Clean, uniform clipper cut all over with crisp hairline edging & hot towel neck shave.',
    includes: ['Uniform grade clipper cut all over', 'Razor crisp neck line-up', 'Scalp wash & refresh', 'Hot towel finish'],
    recommendedFor: 'Low maintenance, ultra-clean short styles'
  },
  {
    id: 'scissor-cut',
    title: 'Scissor Cut',
    price: '£25',
    duration: '45 mins',
    category: 'Cuts',
    description: '100% hand-crafted scissor precision haircut for textured or classic medium to long styles.',
    includes: ['Hand scissor layering', 'Natural texture blending', 'Conditioning scalp wash', 'Precision blow dry styling', 'Hot towel finish'],
    recommendedFor: 'Medium to long hair & classic scissor cuts'
  },
  {
    id: 'restyle',
    title: 'Restyle',
    price: '£30',
    duration: '50 mins',
    category: 'Cuts',
    description: 'Complete hairstyle transformation with in-depth personal consultation, precision restyling, wash & custom product finish.',
    includes: ['Detailed transformation consultation', 'Complete re-shaping & weight reduction', 'Scalp detox wash', 'Custom blow-dry & product guide'],
    recommendedFor: 'Major length changes & new style directions'
  }
];

export const TEAM: Barber[] = [
  {
    id: 'alex',
    name: 'Alex',
    role: 'Master Barber & Founder',
    experience: '10+ Years Crafting',
    bio: "Lead barber at Scissorhands Barber in Leeds. Known for fast, friendly service, precision haircuts and building a loyal community of satisfied clients.",
    specialties: ['Precision Haircuts', 'Modern Skin Fades', 'Beard Grooming', 'Student Restyles'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://instagram.com/scissorhandsbarber',
    rating: 4.8,
    reviewsCount: 142,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 'sam',
    name: 'Sam',
    role: 'Senior Fade Specialist',
    experience: '7+ Years Crafting',
    bio: "Specialist in razor skin fades, textured crop styling, and sharp line-ups. Sam combines technical precision with a friendly, welcoming approach.",
    specialties: ['Foil Skin Fades', 'Textured Crops', 'Razor Line-ups', 'Styling Advice'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://instagram.com/scissorhandsbarber',
    rating: 4.8,
    reviewsCount: 88,
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 'marco',
    name: 'Marco',
    role: 'Beard & Scissor Specialist',
    experience: '6+ Years Crafting',
    bio: "Expert in beard shaping, hot towel treatments, and hand-scissor work. Marco tailors every trim to fit the client's individual facial contours.",
    specialties: ['Beard Sculpting', 'Hot Towel Trims', 'Scissor Layering', 'Classic Styles'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://instagram.com/scissorhandsbarber',
    rating: 4.8,
    reviewsCount: 42,
    availableDays: ['Monday', 'Thursday', 'Friday', 'Saturday']
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Scissorhands Barber Shopfront',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    caption: '31a Great George St, Leeds - Welcome to Scissorhands Barber.',
    location: '31a Great George St, Leeds'
  },
  {
    id: 'g2',
    title: 'Modern Barber Chairs & Workstations',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Clean, comfortable stations equipped with top-tier barbering tools.',
    location: 'Main Salon Floor'
  },
  {
    id: 'g3',
    title: 'Precision Skin Fade & Crop',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Seamless zero skin fade with textured top finish.',
    location: 'Station 1'
  },
  {
    id: 'g4',
    title: 'Hot Towel Beard Trim',
    category: 'Beard Grooming',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80',
    caption: 'Steam hot towel treatment and razor edge line-up.',
    location: 'Beard Station'
  },
  {
    id: 'g5',
    title: 'Welcoming Shop Atmosphere',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Friendly staff and relaxed environment in central Leeds.',
    location: 'Lounge'
  },
  {
    id: 'g6',
    title: 'Classic Scissor Haircut',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
    caption: 'Precision hand scissor layering for a polished classic finish.',
    location: 'Station 2'
  },
  {
    id: 'g7',
    title: 'Razor Line-Up Detail',
    category: 'Beard Grooming',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crisp straight-razor cheek and neck line-up.',
    location: 'Station 3'
  },
  {
    id: 'g8',
    title: 'Shop Vibe & Customer Experience',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Affordable prices, friendly staff, and consistently top haircuts.',
    location: 'Scissorhands Barber'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'James W.',
    rating: 5,
    date: '3 days ago',
    service: 'Classic Haircut',
    text: "Reasonably priced service with friendly staff.",
    verified: true
  },
  {
    id: 'r2',
    author: 'Marcus B.',
    rating: 5,
    date: '1 week ago',
    service: 'Skin Fade & Beard Trim',
    text: "Good quality, good price – all-round great experience.",
    verified: true
  },
  {
    id: 'r3',
    author: 'Chris P.',
    rating: 5,
    date: '2 weeks ago',
    service: 'Hair & Beard Package',
    text: "Absolutely love this place. Been coming here for years and always receive a fantastic haircut and excellent service.",
    verified: true
  },
  {
    id: 'r4',
    author: 'Tom S.',
    rating: 5,
    date: '3 weeks ago',
    service: 'Student Haircut',
    text: "Best student haircut in Leeds! Fast service, great price, and the fade is always spot on.",
    verified: true
  },
  {
    id: 'r5',
    author: 'David L.',
    rating: 5,
    date: '1 month ago',
    service: 'Skin Fade',
    text: "Super friendly barbers and fantastic attention to detail every time I visit. Highly recommended!",
    verified: true
  }
];

export const BRAND_STATS = [
  { value: '272+', label: 'Google Reviews', prefix: '' },
  { value: '4.8★', label: 'Average Rating', prefix: '' },
  { value: '1500+', label: 'Happy Clients', prefix: '' },
  { value: '100%', label: 'Customer Satisfaction', prefix: '' }
];

export const MARQUEE_ITEMS = [
  'SCISSORHANDS BARBER',
  'LEEDS LS1 3BB',
  '31A GREAT GEORGE ST',
  '4.8★ RATED (272 REVIEWS)',
  'PRECISION SKIN FADES',
  'STUDENT HAIRCUTS',
  'EXPERT BEARD GROOMING',
  'PROFESSIONAL BARBERING IN LEEDS'
];
