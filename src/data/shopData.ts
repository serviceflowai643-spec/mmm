import { Barber, BusinessInfo, GalleryItem, Review, Service } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "MASTER BARBER",
  tagline: "Premium Barbering Experience in Headingley, Leeds",
  address: "109 Otley Rd, Headingley",
  postcode: "LS6 3PX",
  city: "Leeds",
  phone: "+44 7946 006015",
  email: "contact@masterbarberleeds.co.uk",
  instagram: "https://instagram.com/masterbarberleeds",
  booksyUrl: "https://booksy.com",
  googleMapsUrl: "https://maps.google.com/?q=109+Otley+Rd+Headingley+Leeds+LS6+3PX",
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
    price: '£28',
    duration: '45 mins',
    category: 'Cuts',
    description: 'Zero foil skin fade blended seamlessly into your desired top style with crisp hairline edging.',
    includes: ['Zero-gap foil fade', 'Precision top cut & texturising', 'Scalp refresh & wash', 'Hot towel finish', 'Styling consultation'],
    isPopular: true,
    recommendedFor: 'Razor-sharp sides & seamless gradient'
  },
  {
    id: 'classic-haircut',
    title: 'Classic Haircut',
    price: '£25',
    duration: '40 mins',
    category: 'Cuts',
    description: 'Bespoke consultation, precision haircut, scalp wash, blow-dry styling & hot towel nape clean.',
    includes: ['In-depth hair consultation', 'Precision scissor & clipper work', 'Scalp wash & refresh', 'Blow dry & matte styling product', 'Hot towel nape clean'],
    isPopular: true,
    recommendedFor: 'Standard trim or neat classic style'
  },
  {
    id: 'beard-trim',
    title: 'Beard Trim',
    price: '£15',
    duration: '25 mins',
    category: 'Beard',
    description: 'Clipper shape, cheek & neck line crisp edging, hot towel treatment & nourishing beard oil.',
    includes: ['Length reduction & shaping', 'Razor cheek & neck line-up', 'Hot towel steam prep', 'Beard balm & premium oil massage'],
    recommendedFor: 'Maintaining shape & crisp beard lines'
  },
  {
    id: 'hair-beard-package',
    title: 'Hair & Beard Package',
    price: '£38',
    duration: '60 mins',
    category: 'Combos',
    description: 'Our complete grooming combination: Bespoke haircut or skin fade plus full beard shape & hot towel finish.',
    includes: ['Precision haircut or skin fade', 'Full beard sculpt & razor edge', 'Dual hot towel steam massage', 'Complimentary beverage', 'Premium styling finish'],
    isPopular: true,
    recommendedFor: 'The complete grooming overhaul'
  },
  {
    id: 'buzz-cut',
    title: 'Buzz Cut',
    price: '£18',
    duration: '25 mins',
    category: 'Cuts',
    description: 'Clean, uniform clipper cut all over with crisp hairline edging & hot towel nape neck shave.',
    includes: ['Uniform grade clipper cut all over', 'Razor crisp neck line-up', 'Scalp wash & refresh', 'Hot towel finish'],
    recommendedFor: 'Low maintenance, ultra-clean short styles'
  },
  {
    id: 'scissor-cut',
    title: 'Scissor Cut',
    price: '£28',
    duration: '45 mins',
    category: 'Cuts',
    description: '100% hand-crafted scissor precision haircut for classic or textured medium to long styles.',
    includes: ['Hand scissor layering', 'Natural texture blending', 'Conditioning scalp wash', 'Precision blow dry styling', 'Hot towel finish'],
    recommendedFor: 'Medium to long hair & classic scissor cuts'
  },
  {
    id: 'restyle',
    title: 'Restyle',
    price: '£32',
    duration: '50 mins',
    category: 'Cuts',
    description: 'Complete hairstyle transformation with in-depth personal consultation, precision restyling, wash & custom product finish.',
    includes: ['Detailed transformation consultation', 'Complete re-shaping & weight reduction', 'Scalp detox wash', 'Custom blow-dry & product guide'],
    recommendedFor: 'Major length changes & new style directions'
  },
  {
    id: 'kids-haircut',
    title: 'Kids Haircut',
    price: '£18',
    duration: '30 mins',
    category: 'Junior',
    description: 'Patient, high-quality haircut for young gentlemen in a friendly, relaxed Headingley atmosphere.',
    includes: ['Custom consultation', 'Gentle precision cut', 'Styling product touch-up', 'Complimentary treat'],
    recommendedFor: 'Young gentlemen under 14'
  }
];

export const TEAM: Barber[] = [
  {
    id: 'anthony',
    name: 'Anthony',
    role: 'Master Barber & Founder',
    experience: '12+ Years Crafting',
    bio: "Lead barber at MASTER BARBER in Headingley, Leeds. Passionate about precision haircuts, modern skin fades, and building lasting client relationships in a friendly atmosphere.",
    specialties: ['Precision Haircuts', 'Modern Skin Fades', 'Beard Grooming', 'Bespoke Restyles'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://instagram.com/masterbarberleeds',
    rating: 4.9,
    reviewsCount: 94,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 'kyle',
    name: 'Kyle',
    role: 'Senior Fade Specialist',
    experience: '8+ Years Crafting',
    bio: "Renowned across Leeds for surgical skin fades and contemporary street-style textures. Kyle combines sharp technical speed with meticulous attention to detail.",
    specialties: ['Foil Skin Fades', 'Modern Crop Textures', 'Crisp Line-ups', 'Styling Advice'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://instagram.com/masterbarberleeds',
    rating: 4.9,
    reviewsCount: 54,
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 'byron',
    name: 'Byron',
    role: 'Beard & Barber Specialist',
    experience: '7+ Years Crafting',
    bio: "Master of facial hair alignment and traditional hot towel treatments. Byron treats beard sculpting as fine art, tailoring cheek lines and neck fades to complement facial contours perfectly.",
    specialties: ['Hot Towel Beard Trims', 'Straight-Razor Detailing', 'Scissor Cuts', 'Scalp Treatments'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://instagram.com/masterbarberleeds',
    rating: 4.9,
    reviewsCount: 38,
    availableDays: ['Monday', 'Thursday', 'Friday', 'Saturday']
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'MASTER BARBER Headingley Shopfront',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    caption: '109 Otley Rd, Headingley, Leeds - Welcome to MASTER BARBER.',
    location: 'Otley Road, Headingley'
  },
  {
    id: 'g2',
    title: 'Barber Chairs & Styling Station',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Comfortable barber chairs with solid mirrors and modern lighting.',
    location: 'Main Barber Floor'
  },
  {
    id: 'g3',
    title: 'Precision Skin Fade',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Zero foil skin fade blended seamlessly into textured top.',
    location: 'Barber Station 1'
  },
  {
    id: 'g4',
    title: 'Hot Towel Beard Grooming',
    category: 'Beard Grooming',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80',
    caption: 'Steam hot towel treatment and razor edge line-up.',
    location: 'Grooming Station'
  },
  {
    id: 'g5',
    title: 'Welcoming Waiting Lounge',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Relaxed atmosphere with friendly service and complimentary refreshments.',
    location: 'Lounge Area'
  },
  {
    id: 'g6',
    title: 'Classic Scissor Cut',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
    caption: 'Precision hand scissor layering for a natural classic finish.',
    location: 'Barber Station 2'
  },
  {
    id: 'g7',
    title: 'Razor Line-Up & Beard Sculpt',
    category: 'Beard Grooming',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Clean straight-razor cheek and neck line-up.',
    location: 'Barber Station 3'
  },
  {
    id: 'g8',
    title: 'Shop Atmosphere & Friendly Vibe',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=80',
    caption: 'A welcoming environment where quality, consistency and friendly service come first.',
    location: 'MASTER BARBER Headingley'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Daniel H.',
    rating: 5,
    date: '2 days ago',
    service: 'Hair & Beard Package',
    text: "Best barber in Leeds without doubt. Best service, very welcoming and excellent haircut every time.",
    verified: true
  },
  {
    id: 'r2',
    author: 'Sam T.',
    rating: 5,
    date: '1 week ago',
    service: 'Skin Fade',
    text: "Fairly priced, quality trims and the friendliest staff.",
    verified: true
  },
  {
    id: 'r3',
    author: 'Alex P.',
    rating: 5,
    date: '2 weeks ago',
    service: 'Classic Haircut & Beard Trim',
    text: "Professional service, great atmosphere and consistently excellent haircuts.",
    verified: true
  },
  {
    id: 'r4',
    author: 'Oliver K.',
    rating: 5,
    date: '3 weeks ago',
    service: 'Skin Fade',
    text: "Always a top-class haircut at MASTER BARBER. The attention to detail is brilliant and Headingley location is super convenient.",
    verified: true
  },
  {
    id: 'r5',
    author: 'Liam R.',
    rating: 5,
    date: '1 month ago',
    service: 'Hair & Beard Package',
    text: "Spot on every single time. Great atmosphere, friendly barbers, and reasonably priced for such high quality.",
    verified: true
  }
];

export const BRAND_STATS = [
  { value: '186+', label: 'Google Reviews', prefix: '' },
  { value: '4.9★', label: 'Average Rating', prefix: '' },
  { value: '1000+', label: 'Happy Clients', prefix: '' },
  { value: '100%', label: 'Customer Satisfaction', prefix: '' }
];

export const MARQUEE_ITEMS = [
  'MASTER BARBER',
  'HEADINGLEY, LEEDS',
  '109 OTLEY RD',
  '4.9★ RATED (186 REVIEWS)',
  'PRECISION SKIN FADES',
  'EXPERT BEARD GROOMING',
  'CLASSIC HAIRCUTS',
  'PREMIUM BARBERING EXPERIENCE'
];
