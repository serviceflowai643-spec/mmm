import { Barber, BusinessInfo, GalleryItem, FacebookPost, Review, Service } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Hussain Barbers",
  tagline: "Premium Barbering Experience in Hyde Park, Leeds",
  address: "65 Brudenell Grove",
  postcode: "LS6 1HR",
  city: "Leeds",
  phone: "+44 7765 365536",
  email: "contact@hussainbarbershop.co.uk",
  website: "https://hussainbarbershop.co.uk",
  facebook: "https://www.facebook.com/17hussainbarber/?locale=en_GB",
  instagram: "https://www.facebook.com/17hussainbarber/?locale=en_GB",
  booksyUrl: "https://hussainbarbershop.co.uk",
  googleMapsUrl: "https://maps.google.com/?q=65+Brudenell+Grove,+Leeds+LS6+1HR",
  rating: 4.8,
  reviewsCount: 158,
  hours: [
    { day: "Monday", time: "09:00 - 18:30" },
    { day: "Tuesday", time: "09:00 - 18:30" },
    { day: "Wednesday", time: "09:00 - 18:30" },
    { day: "Thursday", time: "09:00 - 19:00" },
    { day: "Friday", time: "09:00 - 19:00" },
    { day: "Saturday", time: "08:30 - 18:30" },
    { day: "Sunday", time: "10:00 - 16:00" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'skin-fade',
    title: 'Skin Fade',
    price: '£20',
    duration: '40 mins',
    category: 'Cuts',
    description: 'Precision zero-gap foil skin fade seamlessly blended into your desired top style with clean razor line-up.',
    includes: ['Zero-gap foil fade', 'Precision top cut & texturising', 'Scalp refresh', 'Hot towel finish', 'Styling consultation'],
    isPopular: true,
    recommendedFor: 'Sharp sides & seamless fade gradient'
  },
  {
    id: 'classic-haircut',
    title: 'Classic Haircut',
    price: '£16',
    duration: '30 mins',
    category: 'Cuts',
    description: 'Personal consultation, precision haircut, blow-dry styling & hot towel neck finish with complimentary tea or coffee.',
    includes: ['Hair consultation', 'Precision scissor & clipper work', 'Blow dry & matte product styling', 'Hot towel neck clean'],
    isPopular: true,
    recommendedFor: 'Clean standard trim or timeless classic style'
  },
  {
    id: 'beard-trim',
    title: 'Beard Trim',
    price: '£10',
    duration: '20 mins',
    category: 'Beard',
    description: 'Clipper shape, cheek & neck line razor edging, hot towel steam & nourishing beard oil treatment.',
    includes: ['Length reduction & shaping', 'Razor cheek & neck line-up', 'Hot towel steam treatment', 'Beard balm & oil massage'],
    recommendedFor: 'Maintaining clean beard lines & sharp shape'
  },
  {
    id: 'hair-beard-package',
    title: 'Hair & Beard Package',
    price: '£24',
    duration: '50 mins',
    category: 'Combos',
    description: 'Our signature combo: Custom haircut or skin fade plus full beard sculpt, razor edging & relaxing hot towel treatment.',
    includes: ['Precision haircut or skin fade', 'Full beard sculpt & razor edge', 'Hot towel steam massage', 'Complimentary hot drink'],
    isPopular: true,
    recommendedFor: 'The complete grooming overhaul & best value'
  },
  {
    id: 'scissor-cut',
    title: 'Scissor Cut',
    price: '£18',
    duration: '40 mins',
    category: 'Cuts',
    description: 'Hand-crafted scissor precision haircut for textured or classic medium to long styles.',
    includes: ['Hand scissor layering', 'Natural texture blending', 'Precision blow dry styling', 'Hot towel finish'],
    recommendedFor: 'Medium to long hair & classic scissor styles'
  },
  {
    id: 'buzz-cut',
    title: 'Buzz Cut',
    price: '£12',
    duration: '20 mins',
    category: 'Cuts',
    description: 'Clean, uniform clipper cut all over with razor hairline edging & hot towel neck shave.',
    includes: ['Uniform grade clipper cut all over', 'Razor crisp neck line-up', 'Hot towel finish'],
    recommendedFor: 'Low maintenance, ultra-clean short styles'
  },
  {
    id: 'kids-haircut',
    title: 'Kids Haircut',
    price: '£13',
    duration: '25 mins',
    category: 'Junior',
    description: 'Patient, friendly haircut for kids with cool modern styles and attentive care in a welcoming environment.',
    includes: ['Friendly barber care', 'Precision fade or trim', 'Fun styling finish'],
    isPopular: true,
    recommendedFor: 'Children & young gents'
  },
  {
    id: 'restyle',
    title: 'Restyle',
    price: '£22',
    duration: '45 mins',
    category: 'Cuts',
    description: 'Complete hairstyle transformation with in-depth personal consultation, precision restyling, and custom product finish.',
    includes: ['Detailed transformation consultation', 'Complete re-shaping & weight reduction', 'Custom blow-dry & product guide'],
    recommendedFor: 'Major length changes & new style directions'
  },
  {
    id: 'head-massage',
    title: 'Head Massage',
    price: '£15',
    duration: '20 mins',
    category: 'Wellness',
    description: 'Revitalising head and scalp massage with essential hair tonic to relieve tension and boost circulation.',
    includes: ['Scalp tension relief', 'Essential hair tonic application', 'Deep relaxation treatment'],
    recommendedFor: 'Stress relief & scalp rejuvenation'
  },
  {
    id: 'hot-towel-shave',
    title: 'Hot Towel Shave',
    price: '£16',
    duration: '30 mins',
    category: 'Beard',
    description: 'Traditional hot towel steam shave with straight razor, soothing essential oils and cold towel finish.',
    includes: ['Pre-shave essential oils', 'Dual hot towel steam prep', 'Straight razor full shave', 'Cooling post-shave balm'],
    recommendedFor: 'Traditional luxury smooth shave'
  }
];

export const TEAM: Barber[] = [
  {
    id: 'hussain-master-barber',
    name: 'Hussain',
    role: 'Owner & Master Barber',
    experience: '12+ Years Experience',
    bio: "Founder and Lead Barber at Hussain Barbers in Hyde Park, Leeds. Famous for expert skin fades, warm hospitality, precision scissors, and welcoming every customer with tea or coffee.",
    specialties: ['Precision Skin Fades', 'Beard Sculpting', 'Traditional Shaves', 'Student Restyles'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    facebook: 'https://www.facebook.com/17hussainbarber/?locale=en_GB',
    rating: 4.9,
    reviewsCount: 94,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 'fade-specialist-leeds',
    name: 'Senior Stylist',
    role: 'Skin Fade & Beard Specialist',
    experience: '8+ Years Experience',
    bio: "Specialist in razor skin fades, sharp beard line-ups, and modern textured crops. Dedicated to delivering top quality cuts at affordable prices.",
    specialties: ['Foil Skin Fades', 'Textured Crops', 'Razor Line-ups', 'Kids Haircuts'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    facebook: 'https://www.facebook.com/17hussainbarber/?locale=en_GB',
    rating: 4.8,
    reviewsCount: 64,
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Hussain Barbers Shopfront',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    caption: '65 Brudenell Grove, Leeds LS6 1HR - Welcome to Hussain Barbers in Hyde Park, Leeds.',
    location: 'Brudenell Grove, Hyde Park'
  },
  {
    id: 'g2',
    title: 'Barber Workstations & Hospitality',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Clean, modern barber stations where every client is offered fresh tea or coffee upon arrival.',
    location: 'Main Salon Floor'
  },
  {
    id: 'g3',
    title: 'Sharp Skin Fade',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crisp zero skin fade with textured top and sharp hairline edging.',
    location: 'Hussain Barbers'
  },
  {
    id: 'g4',
    title: 'Hot Towel & Beard Trim',
    category: 'Beard Grooming',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80',
    caption: 'Relaxing hot towel steam treatment with precise straight razor beard sculpt.',
    location: 'Beard Grooming Station'
  },
  {
    id: 'g5',
    title: 'Friendly Student & Local Community Hub',
    category: 'Atmosphere',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Trusted neighbourhood barbershop with warm atmosphere for students and locals alike.',
    location: 'Hyde Park, Leeds'
  },
  {
    id: 'g6',
    title: 'Classic Scissor Cut',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
    caption: 'Hand-crafted scissor layering for a timeless, natural haircut.',
    location: 'Styling Station'
  }
];

export const FACEBOOK_POSTS: FacebookPost[] = [
  {
    id: 'fb1',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    caption: 'Crisp mid skin fade with textured top & sharp razor line-up! Drop in at 65 Brudenell Grove or book ahead. Always welcomed with hot tea or coffee! ☕✂️ #HussainBarbers #LeedsBarbers #SkinFade #HydeParkLeeds',
    likes: 87,
    comments: 14,
    shares: 5,
    date: '3 DAYS AGO',
    url: 'https://www.facebook.com/17hussainbarber/?locale=en_GB'
  },
  {
    id: 'fb2',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
    caption: 'Full Hair & Beard package with hot towel treatment for that fresh weekend look! Great value & top service guaranteed. 💈🔥 #BeardTrim #HussainBarbers #StudentBarberLeeds',
    likes: 104,
    comments: 11,
    shares: 8,
    date: '5 DAYS AGO',
    url: 'https://www.facebook.com/17hussainbarber/?locale=en_GB'
  },
  {
    id: 'fb3',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    caption: 'Thank you to our amazing clients for pushing us past 158+ Google Reviews with a 4.8★ rating! Proud to serve Hyde Park and all of Leeds! 🌟🙌 #48Stars #LeedsCommunity #BrudenellGrove',
    likes: 162,
    comments: 29,
    shares: 12,
    date: '1 WEEK AGO',
    url: 'https://www.facebook.com/17hussainbarber/?locale=en_GB'
  },
  {
    id: 'fb4',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    caption: 'Precision scissor work and classical restyling for our student clients back for term! Drop by for your fresh trim today. ✂️📚 #StudentDiscount #HydeParkBarber #LeedsUniversity',
    likes: 95,
    comments: 8,
    shares: 4,
    date: '2 WEEKS AGO',
    url: 'https://www.facebook.com/17hussainbarber/?locale=en_GB'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Satisfied Customer',
    rating: 5,
    date: 'Recent Google Review',
    service: 'Classic Haircut',
    text: "The staff were polite, friendly and professional. The haircut was excellent and the service was very welcoming.",
    verified: true
  },
  {
    id: 'r2',
    author: 'Leeds Student',
    rating: 5,
    date: 'Recent Google Review',
    service: 'Skin Fade & Beard Trim',
    text: "A truly friendly and affordable barber in Leeds, especially for students. Always welcomed with a warm smile and a comforting cup of tea.",
    verified: true
  },
  {
    id: 'r3',
    author: 'Local Client',
    rating: 5,
    date: 'Recent Google Review',
    service: 'Hair & Beard Package',
    text: "Great value, fantastic service and always offered tea or coffee. Highly recommended.",
    verified: true
  },
  {
    id: 'r4',
    author: 'Brudenell Resident',
    rating: 5,
    date: 'Verified Client',
    service: 'Skin Fade',
    text: "Top quality skin fade every time! Hussain and the team are skilled, warm and extremely consistent.",
    verified: true
  },
  {
    id: 'r5',
    author: 'Regular Client',
    rating: 5,
    date: 'Verified Client',
    service: 'Hot Towel Shave',
    text: "Best barbershop experience in Hyde Park! Welcoming hospitality, great prices and exceptional haircuts.",
    verified: true
  }
];

export const BRAND_STATS = [
  { value: '158+', label: 'Google Reviews', prefix: '' },
  { value: '4.8★', label: 'Average Rating', prefix: '' },
  { value: '2500+', label: 'Happy Clients', prefix: '' },
  { value: '100%', label: 'Customer Satisfaction', prefix: '' }
];

export const MARQUEE_ITEMS = [
  'HUSSAIN BARBERS',
  'HYDE PARK LEEDS',
  '65 BRUDENELL GROVE',
  '4.8★ RATED (158 REVIEWS)',
  'COMPLIMENTARY TEA & COFFEE',
  'PRECISION SKIN FADES',
  'BEARD TRIMS & SHAVES',
  '+44 7765 365536'
];

export const INSTAGRAM_POSTS = FACEBOOK_POSTS;

