import { Barber, BusinessInfo, GalleryItem, InstagramPost, Review, Service } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "HYDE PARK BARBERS",
  tagline: "Premium Barbering Experience in Woodhouse, Leeds",
  address: "11 Hyde Park Corner, 11 Woodhouse Ln, Woodhouse",
  postcode: "LS6 1AF",
  city: "Leeds",
  phone: "+44 7786 942694",
  email: "contact@hydeparkbarbersleeds.com",
  instagram: "https://www.instagram.com/hydeparkbarbers/",
  booksyUrl: "https://hydeparkbarbersleeds.booksy.com",
  googleMapsUrl: "https://maps.google.com/?q=11+Hyde+Park+Corner,+11+Woodhouse+Ln,+Woodhouse,+Leeds+LS6+1AF",
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
    id: 'kids-haircut',
    title: 'Kids Haircuts',
    price: '£14',
    duration: '30 mins',
    category: 'Junior',
    description: 'Patient, friendly haircut for kids with cool modern styles and attentive care in a welcoming environment.',
    includes: ['Friendly barber care', 'Precision fade or trim', 'Fun styling finish'],
    isPopular: true,
    recommendedFor: 'Children & young gents'
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
    id: 'master-barber',
    name: 'Lead Master Barber',
    role: 'Senior Barber & Stylist',
    experience: '10+ Years Experience',
    bio: "Lead barber at HYDE PARK BARBERS in Woodhouse, Leeds. Known for expert skin fades, sharp line-ups, friendly service and creating a relaxed environment.",
    specialties: ['Precision Skin Fades', 'Beard Sculpting', 'Restyles', 'Hot Towel Shaves'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://www.instagram.com/hydeparkbarbers/',
    rating: 4.9,
    reviewsCount: 68,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 'fade-specialist',
    name: 'Fade Specialist',
    role: 'Skin Fade & Beard Specialist',
    experience: '8+ Years Experience',
    bio: "Specialist in razor skin fades, textured crop styling, and sharp line-ups. Delivers clean, consistent cuts with great attention to detail.",
    specialties: ['Foil Skin Fades', 'Textured Crops', 'Razor Line-ups', 'Kids Haircuts'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    instagram: 'https://www.instagram.com/hydeparkbarbers/',
    rating: 4.9,
    reviewsCount: 45,
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'HYDE PARK BARBERS Exterior',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    caption: '11 Hyde Park Corner, 11 Woodhouse Ln, Woodhouse, Leeds LS6 1AF - Welcome to HYDE PARK BARBERS.',
    location: '11 Hyde Park Corner'
  },
  {
    id: 'g2',
    title: 'Barber Workstations',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Modern barbering stations equipped for precision skin fades and grooming.',
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
    caption: 'Traditional hot towel steam treatment and razor beard line-up.',
    location: 'Beard Station'
  },
  {
    id: 'g5',
    title: 'Welcoming Atmosphere',
    category: 'Interior & Shop',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Friendly barbers and warm, relaxed atmosphere in Woodhouse, Leeds.',
    location: 'HYDE PARK BARBERS'
  },
  {
    id: 'g6',
    title: 'Classic Scissor Haircut',
    category: 'Skin Fades & Cuts',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
    caption: 'Hand scissor layering for a sharp classic look.',
    location: 'Station 2'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    caption: 'Sharp mid skin fade with textured top & razor line-up 🔥 Clean cut at HYDE PARK BARBERS! #hydeparkbarbers #leedsbarber #skinfade',
    likes: 142,
    comments: 18,
    date: '2 DAYS AGO',
    url: 'https://www.instagram.com/hydeparkbarbers/'
  },
  {
    id: 'ig2',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
    caption: 'Full beard sculpt + hot towel treatment. Looking fresh for the weekend! 🧔💈 #beardgrooming #hydeparkbarbers #hottowelshave',
    likes: 119,
    comments: 12,
    date: '4 DAYS AGO',
    url: 'https://www.instagram.com/hydeparkbarbers/'
  },
  {
    id: 'ig3',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    caption: 'Welcome to HYDE PARK BARBERS at 11 Hyde Park Corner, Woodhouse! Walk-ins and Booksy appointments available 💈✂️',
    likes: 198,
    comments: 24,
    date: '1 WEEK AGO',
    url: 'https://www.instagram.com/hydeparkbarbers/'
  },
  {
    id: 'ig4',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    caption: 'Low skin fade transformation with natural scissor layering. Always delivering quality craftsmanship 👌 #woodhouseleeds #barberlife',
    likes: 156,
    comments: 15,
    date: '1 WEEK AGO',
    url: 'https://www.instagram.com/hydeparkbarbers/'
  },
  {
    id: 'ig5',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
    caption: 'Precision razor edging & sharp cheek line. Details matter at HYDE PARK BARBERS! ✨ #sharpedge #barbershopleeds',
    likes: 134,
    comments: 9,
    date: '2 WEEKS AGO',
    url: 'https://www.instagram.com/hydeparkbarbers/'
  },
  {
    id: 'ig6',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=80',
    caption: 'Kids haircuts made easy and fun! Loved by parents and kids alike in Woodhouse, Leeds 👦✂️ #kidsbarber #hydeparkbarbers',
    likes: 175,
    comments: 21,
    date: '2 WEEKS AGO',
    url: 'https://www.instagram.com/hydeparkbarbers/'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Verified Customer',
    rating: 5,
    date: '1 week ago',
    service: 'Kids Haircut',
    text: "The best one in the area. My kids are very happy with the service they received.",
    verified: true
  },
  {
    id: 'r2',
    author: 'Happy Client',
    rating: 5,
    date: '2 weeks ago',
    service: 'Classic Haircut',
    text: "Great customer service and a warm welcome, accompanied by a great haircut.",
    verified: true
  },
  {
    id: 'r3',
    author: 'Woodhouse Resident',
    rating: 5,
    date: '3 weeks ago',
    service: 'Haircut & Shave',
    text: "Very good haircut and shave in a really relaxed environment.",
    verified: true
  },
  {
    id: 'r4',
    author: 'Leeds Client',
    rating: 5,
    date: '1 month ago',
    service: 'Skin Fade',
    text: "Top quality skin fade every time! The barbers are skilled, friendly, and attentive.",
    verified: true
  },
  {
    id: 'r5',
    author: 'Regular Customer',
    rating: 5,
    date: '1 month ago',
    service: 'Hair & Beard Package',
    text: "Best barber experience in Leeds! Great atmosphere, 5 star customer service.",
    verified: true
  }
];

export const BRAND_STATS = [
  { value: '113+', label: 'Google Reviews', prefix: '' },
  { value: '4.9★', label: 'Average Rating', prefix: '' },
  { value: '1200+', label: 'Happy Clients', prefix: '' },
  { value: '100%', label: 'Customer Satisfaction', prefix: '' }
];

export const MARQUEE_ITEMS = [
  'HYDE PARK BARBERS',
  'WOODHOUSE LEEDS',
  '11 HYDE PARK CORNER',
  '4.9★ RATED (113 REVIEWS)',
  'PRECISION SKIN FADES',
  'EXPERT BEARD GROOMING',
  'HOT TOWEL SHAVES',
  '@HYDEPARKBARBERS'
];
