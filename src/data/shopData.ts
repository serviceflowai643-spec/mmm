import { Barber, BusinessInfo, GalleryItem, Review, Service } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Lords' Barbering",
  tagline: "Crafted. Not Rushed.",
  address: "7 Grand Arcade",
  postcode: "LS1 6PG",
  city: "Leeds",
  phone: "+44 113 243 0080",
  email: "info@lordsbarbering.co.uk",
  instagram: "https://www.instagram.com/lordsbarbering/",
  booksyUrl: "https://booksy.com/en-gb/32959_lords-barbering_barber-shop_133276_leeds",
  googleMapsUrl: "https://maps.google.com/?q=7+Grand+Arcade+Leeds+LS1+6PG",
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
    id: 'haircut',
    title: 'Haircut',
    price: '£28',
    duration: '45 mins',
    category: 'Cuts',
    description: 'Bespoke consultation, precision haircut, scalp wash, blow-dry styling & hot towel nape clean.',
    includes: ['In-depth hair consultation', 'Precision scissor & clipper work', 'Scalp wash & massage', 'Blow dry & matte styling product', 'Hot towel nape clean'],
    isPopular: true,
    recommendedFor: 'Standard trim or complete restyle'
  },
  {
    id: 'skin-fade',
    title: 'Skin Fade',
    price: '£32',
    duration: '45 mins',
    category: 'Cuts',
    description: 'Foil shaver & cut-throat razor skin fade blended seamlessly into your desired top style.',
    includes: ['Zero-gap foil fade', 'Precision top cut & texturising', 'Scalp refresh & wash', 'Hot towel finish', 'Styling consultation'],
    isPopular: true,
    recommendedFor: 'Razor-sharp sides & seamless gradient'
  },
  {
    id: 'beard-trim',
    title: 'Beard Trim',
    price: '£18',
    duration: '30 mins',
    category: 'Beard',
    description: 'Clipper shape, cheek & neck line crisp edging, hot towel treatment & nourishing beard oil.',
    includes: ['Length reduction & shaping', 'Razor cheek & neck line-up', 'Hot towel steam prep', 'Beard balm & premium oil massage'],
    recommendedFor: 'Maintaining shape & crisp beard lines'
  },
  {
    id: 'luxury-beard-sculpt',
    title: 'Luxury Beard Sculpt',
    price: '£25',
    duration: '40 mins',
    category: 'Beard',
    description: 'Full beard restyle with dual hot towels, open razor detailing, hot oil steam treatment & cold towel seal.',
    includes: ['Full architectural beard shaping', 'Dual hot towel steam prep', 'Straight-razor crisp edging', 'Essential hot oil conditioning', 'Cold towel pore seal'],
    isPopular: true,
    recommendedFor: 'Full beard transformations & relaxation'
  },
  {
    id: 'scissor-cut',
    title: 'Scissor Cut',
    price: '£30',
    duration: '45 mins',
    category: 'Cuts',
    description: '100% hand-crafted scissor precision haircut for medium to long hair styles requiring soft natural texture.',
    includes: ['Hand scissor layering', 'Natural texture blending', 'Conditioning scalp wash', 'Precision blow dry styling', 'Hot towel finish'],
    recommendedFor: 'Medium to long hair & classic scissor cuts'
  },
  {
    id: 'hair-beard-combo',
    title: 'Hair + Beard Combo',
    price: '£42',
    duration: '60 mins',
    category: 'Combos',
    description: 'Our signature combination package: Full bespoke haircut or skin fade plus complete beard shape & hot towel finish.',
    includes: ['Precision haircut or skin fade', 'Full beard sculpt & razor edge', 'Dual hot towel steam massage', 'Complimentary espresso or craft beverage', 'Premium styling finish'],
    isPopular: true,
    recommendedFor: 'The complete grooming overhaul'
  },
  {
    id: 'wedding-groom-package',
    title: 'Wedding Groom Package',
    price: '£85',
    duration: '90 mins',
    category: 'Packages',
    description: 'The ultimate wedding day grooming ritual: Full haircut, luxury beard sculpt, hot towel facial massage, hair scalp treatment & celebratory pour.',
    includes: ['Precision restyle or fade', 'Luxury hot towel beard sculpt', 'Deep cleaning steam facial', 'Scalp detox wash', 'Glass of single malt scotch or artisan espresso', 'Complimentary grooming gift bag'],
    recommendedFor: 'Grooms, groomsmen & major occasions'
  },
  {
    id: 'hot-towel-finish',
    title: 'Hot Towel Finish & Facial Refresh',
    price: '£15',
    duration: '20 mins',
    category: 'Packages',
    description: 'Relaxing hot steam towel infused with essential oils, facial cleansing & energising massage.',
    includes: ['Hot steam essential oil wrap', 'Facial cleanse & exfoliation', 'Pressure point face massage', 'Cold towel seal & moisturiser'],
    recommendedFor: 'Post-flight refresh or weekend unwind'
  },
  {
    id: 'kids-haircut',
    title: 'Kids Haircut (Under 14)',
    price: '£20',
    duration: '30 mins',
    category: 'Junior',
    description: 'Patient, high-quality haircut for young gentlemen under 14 in a relaxed environment.',
    includes: ['Custom consultation', 'Gentle precision cut', 'Styling product touch-up', 'Complimentary drink'],
    recommendedFor: 'Young gentlemen under 14'
  }
];

export const TEAM: Barber[] = [
  {
    id: 'anthony',
    name: 'Anthony',
    role: 'Founder & Master Barber',
    experience: '12+ Years Crafting',
    bio: "Founder of Lords' Barbering. Passionate about reviving classic barbering traditions within Leeds' vibrant Grand Arcade. Specialist in classic razor work, modern textured scissor cuts, and establishing unforgettable client relationships.",
    specialties: ['Traditional Scissor Work', 'Open Razor Shaving', 'Bespoke Restyles', 'Beard Architecture'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://www.instagram.com/lordsbarbering/',
    rating: 4.9,
    reviewsCount: 88,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 'kyle',
    name: 'Kyle',
    role: 'Senior Barber & Fade Specialist',
    experience: '8+ Years Crafting',
    bio: "Renowned across Leeds for surgical skin fades and contemporary street-style textures. Kyle combines sharp technical speed with meticulous attention to head shape and hair growth patterns.",
    specialties: ['Foil Skin Fades', 'Modern Crop Textures', 'Hair Tattoo Line-ups', 'Styling Advice'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://www.instagram.com/lordsbarbering/',
    rating: 4.9,
    reviewsCount: 52,
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 'byron',
    name: 'Byron',
    role: 'Specialist Barber & Beard Sculptor',
    experience: '7+ Years Crafting',
    bio: "Master of facial hair alignment and traditional hot towel steam treatments. Byron treats beard sculpting as fine art, tailoring cheek lines and neck fades to complement facial contours perfectly.",
    specialties: ['Hot Towel Beard Sculpting', 'Straight-Razor Detailing', 'Scissor Layering', 'Scalp Treatments'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://www.instagram.com/lordsbarbering/',
    rating: 4.8,
    reviewsCount: 44,
    availableDays: ['Monday', 'Thursday', 'Friday', 'Saturday']
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: '7 Grand Arcade Exterior',
    category: 'Interior & Arcade',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    caption: "Lords' Barbering nestled inside the historic Victorian Grand Arcade, Leeds.",
    location: 'Grand Arcade, Leeds'
  },
  {
    id: 'g2',
    title: 'Vintage Leather Barber Chair',
    category: 'Interior & Arcade',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Custom Belmont leather barber chair paired with solid oak mirrors and ambient warm lighting.',
    location: 'Main Salon Floor'
  },
  {
    id: 'g3',
    title: 'Surgical Skin Fade',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Zero foil skin fade blended seamlessly into textured matte crop.',
    location: 'Barber Station 1'
  },
  {
    id: 'g4',
    title: 'Hot Towel Beard Sculpting',
    category: 'Beard Sculpting',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80',
    caption: 'Steam hot towel relaxation wrapped before razor edge detailing.',
    location: 'Beard Lounge'
  },
  {
    id: 'g5',
    title: 'Artisan Espresso & Lounge Bar',
    category: 'Espresso & Culture',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Freshly ground artisan espresso served complimentary with every service.',
    location: 'Waiting Lounge'
  },
  {
    id: 'g6',
    title: 'Hand-Crafted Scissor Cut',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
    caption: 'Precision hand scissor layering on medium length hair with natural finish.',
    location: 'Barber Station 2'
  },
  {
    id: 'g7',
    title: 'Open Razor Edge Precision',
    category: 'Beard Sculpting',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cut-throat razor crisp line-up on cheek and neck for millimeter perfection.',
    location: 'Barber Station 3'
  },
  {
    id: 'g8',
    title: 'Shop Atmosphere & Team Spirit',
    category: 'Interior & Arcade',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=80',
    caption: 'A welcoming, relaxed atmosphere where every haircut is an experience.',
    location: 'Lords Barbershop'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'James M.',
    rating: 5,
    date: '3 days ago',
    service: 'Hair + Beard Combo',
    text: "Hands down the best barber shop in Leeds. Anthony gave me the sharpest skin fade and beard trim I've ever had. The attention to detail is unmatched and the coffee in Grand Arcade is exceptional.",
    verified: true
  },
  {
    id: 'r2',
    author: 'Liam S.',
    rating: 5,
    date: '1 week ago',
    service: 'Skin Fade with Kyle',
    text: "Kyle is a master of skin fades. Zero line line-up is flawless. Grand Arcade location is beautiful, comfortable chairs and friendly conversation. Worth every penny.",
    verified: true
  },
  {
    id: 'r3',
    author: 'David R.',
    rating: 5,
    date: '2 weeks ago',
    service: 'Luxury Beard Sculpt with Byron',
    text: "Byron's hot towel beard sculpt is sheer luxury. The steam towels and razor edging transformed my beard completely. You leave feeling like royalty.",
    verified: true
  },
  {
    id: 'r4',
    author: 'Tom W.',
    rating: 5,
    date: '3 weeks ago',
    service: 'Haircut',
    text: "My go-to barber in Leeds for over 3 years now. Unhurried craftsmanship, genuine hospitality, and a great vibe in 7 Grand Arcade. Wouldn't trust anyone else with my hair.",
    verified: true
  },
  {
    id: 'r5',
    author: 'Marcus B.',
    rating: 5,
    date: '1 month ago',
    service: 'Wedding Groom Package',
    text: "Booked the Wedding Groom Package for myself and my best man before the big day. Anthony and the team looked after us with scotch, hot towels, and world-class cuts. Unforgettable experience!",
    verified: true
  }
];

export const BRAND_STATS = [
  { value: '164+', label: '5-Star Google & Booksy Reviews', prefix: '' },
  { value: '12', label: 'Years Master Craftsmanship', prefix: '' },
  { value: '15,000+', label: 'Precision Cuts Delivered', prefix: '' },
  { value: '7', label: 'Grand Arcade, Leeds LS1', prefix: 'No.' }
];

export const MARQUEE_ITEMS = [
  'TRADITIONAL CRAFT',
  'MODERN PRECISION',
  '7 GRAND ARCADE, LEEDS',
  'SKIN FADES',
  'BEARD SCULPTING',
  'COMPLIMENTARY ESPRESSO',
  'CRAFTED, NOT RUSHED',
  'LORDS\' BARBERING'
];
