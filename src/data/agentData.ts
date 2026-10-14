export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  neighborhood: string;
  price: number;
  priceFormatted: string;
  beds: number;
  baths: number;
  sqft: number;
  status: 'For Sale' | 'Sold' | 'For Rent';
  representation?: string;
  soldDate?: string;
  daysOnMarket?: string;
  pricePerSqFt?: string;
  image: string;
  description: string;
  features: string[];
  zillowUrl: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  transactionType: string;
  location: string;
}

export interface ExperiencedArea {
  id: string;
  name: string;
  salesCount: number;
  tagline: string;
  description: string;
  avgPrice: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  interestType: string;
}

export const AGENT_INFO = {
  name: 'Jonathan Daugherty',
  title: 'Licensed REALTOR®',
  license: 'FL License #3268202',
  brokerage: 'FUTURE HOME REALTY INC',
  team: 'The Someday Group Real Estate',
  phone: '(904) 944-7009',
  phoneAlt: '(904) 859-2469',
  phoneRaw: 'tel:+19049447009',
  email: 'jonathansellsjax@gmail.com',
  officeAddress: '6274 Battlegate Rd, Jacksonville, FL 32258',
  marketArea: 'Jacksonville & Northeast Florida',
  portraitImage: '/src/assets/images/jonathan_real_headshot_enhanced_1791994299317.jpg',
  stats: {
    rating: '5.0',
    reviewCount: 148,
    totalSales: 419,
    recentSalesFiveYear: 190,
    totalValueFiveYear: '$88.5M',
    averagePriceFiveYear: '$465.8K',
    priceRange: '$220K – $1.6M',
    salesLastYear: 32,
    yearsExperience: 19,
  },
  social: {
    zillow: 'https://www.zillow.com/profile/Jonathan%20Daugherty',
    homes: 'https://www.homes.com/real-estate-agents/jonathan-daugherty/b4sglhc/',
    instagram: 'https://www.instagram.com/jacksonville_realtor/',
    linkedin: 'https://www.linkedin.com/in/jonathan-daugherty-88b94614b',
    yelp: 'https://m.yelp.com/biz/jonathan-daugherty-realtor-jacksonville',
  },
  bio: `Jonathan Daugherty is a licensed Florida REALTOR® with Future Home Realty and The Someday Group, consistently ranked among the Top 100 Realtors in Northeast Florida. With 19+ years in the industry, over 419 career transactions, and more than $88.5M in closed volume in the past five years alone, Jonathan offers buyers, sellers, and relocating families unparalleled mastery of Jacksonville, St. Johns County, SilverLeaf, and Saint Augustine real estate.`,
};

export const PROPERTIES: Property[] = [
  // Real Zillow & Homes.com Active Listings
  {
    id: 'julington-oaks',
    address: '12629 Julington Oaks Dr',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32223',
    neighborhood: 'Mandarin / Julington Creek',
    price: 635000,
    priceFormatted: '$635,000',
    beds: 5,
    baths: 3.5,
    sqft: 3432,
    status: 'For Sale',
    representation: 'Showcase Listing · Future Home Realty Inc',
    image: '/src/assets/images/real_julington_oaks_sunset_1791994300071.jpg',
    description: 'MASSIVE 5 bedroom PLUS flex room with 3 car garage! LOW HOA neighborhood in Mandarin! 20ft soaring ceilings! 4.125% assumable loan available! Price cut below appraisal for quick sale. Massive open living space with over 3,400 sf for you to enjoy! Fully fenced backyard.',
    features: ['20-Foot Cathedral Ceilings', '4.125% Assumable Loan Option', '3-Car Attached Garage', 'Low HOA Community', 'Below Appraisal Valuation'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#active-listings',
  },
  {
    id: 'heather-lake',
    address: '7839 Heather Lake Ct E',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32256',
    neighborhood: 'Deer Creek / Baymeadows',
    price: 575000,
    priceFormatted: '$575,000',
    beds: 3,
    baths: 2,
    sqft: 2228,
    status: 'For Sale',
    representation: 'Showcase Listing · Future Home Realty Inc',
    image: '/src/assets/images/real_heather_lake_exterior_1791994301899.jpg',
    description: 'Rare offering in Deer Creek! This 3 bedroom 2 bath home sits on a beautiful nature preserve that is walking distance to the newly renovated Deer Creek country club. Located within a secure 24-hour guarded gate, boasting custom luxury master bath with walk-in marble shower.',
    features: ['24-Hour Guarded Gated Community', 'Nature Preserve Lot', 'Walking Distance to Country Club', 'Custom Marble Master Bath', 'Open Floor Plan'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#active-listings',
  },
  {
    id: 'remler-drive',
    address: '3443 Remler Drive S',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32223',
    neighborhood: 'Mandarin',
    price: 399900,
    priceFormatted: '$399,900',
    beds: 3,
    baths: 2,
    sqft: 1540,
    status: 'For Sale',
    representation: 'Showcase Listing · Under Contract',
    image: '/src/assets/images/real_remler_drive_exterior_1791994300435.jpg',
    description: 'Under Contract Showcase home in desirable Mandarin! Beautiful Florida home with stacked stone accents, clerestory roof dormer, in-ground swimming pool, private fenced backyard, and lush green lawn beneath mature mossy live oaks.',
    features: ['In-Ground Private Swimming Pool', 'Horizontal White Siding & Stone Veneer', 'Large Fenced Lot', 'No Expensive CDD Fees', 'Mature Oak Canopy'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#active-listings',
  },
  {
    id: 'el-camino',
    address: '1672 El Camino Rd, Unit 3',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32216',
    neighborhood: 'Glynlea / Southside',
    price: 89900,
    priceFormatted: '$89,900',
    beds: 1,
    baths: 1,
    sqft: 725,
    status: 'For Sale',
    representation: 'Active Listing · Future Home Realty Inc',
    image: '/src/assets/images/real_el_camino_fireplace_1791994301063.jpg',
    description: 'Fully remodeled condo just walking distance from River City Science Academy on Beach Blvd. Features rustic floor-to-ceiling stone fireplace, new wood vinyl plank floors, sliding glass doors to balcony, paint, quartz countertops, and new stainless appliances.',
    features: ['Floor-to-Ceiling Stone Fireplace', 'New Wood Vinyl Plank Flooring', 'Quartz Countertops', 'Walk to River City Science Academy', 'Low-Maintenance Living'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#active-listings',
  },
  {
    id: 'warwick-rent',
    address: '3741 Warwick St',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32210',
    neighborhood: 'Westside / Ortega',
    price: 1800,
    priceFormatted: '$1,800/mo',
    beds: 3,
    baths: 2,
    sqft: 1206,
    status: 'For Rent',
    representation: 'Active Rental Listing · 3D Tour',
    image: '/src/assets/images/property_riverside_craftsman_1791989533562.jpg',
    description: 'Turnkey 3 bedroom, 2 bath Jacksonville rental property with modern interior finishes, spacious yard, clean curb appeal, and full 3D virtual tour available.',
    features: ['3 Bedrooms / 2 Baths', 'Full 3D Virtual Tour Available', 'Spacious Private Yard', 'Central AC & Heating', 'Turnkey Move-in Ready'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#active-rentals',
  },

  // Real Recently Sold Listings from Zillow & Homes.com Screenshots
  {
    id: 'sharing-cross',
    address: '9761 Sharing Cross Dr',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32257',
    neighborhood: 'Southside / Mandarin',
    price: 425000,
    priceFormatted: '$425,000',
    beds: 3,
    baths: 2,
    sqft: 1686,
    status: 'Sold',
    soldDate: 'SOLD JUL 02, 2026',
    daysOnMarket: '5 Days On Market',
    pricePerSqFt: '$252/SF',
    representation: 'Future Home Realty Inc',
    image: '/src/assets/images/listing_sharing_cross_sunset_1791991331614.jpg',
    description: 'Stunning resort-style home with illuminated evening pool, outdoor patio fireplace, and tropical landscaping. Sold in just 5 days on market at 1% below list price!',
    features: ['Sold in Just 5 Days', 'Resort Pool & Fireplace Patio', '$252 per Sq Ft', 'Future Home Realty Representation', 'Current Est. Value $422K'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#past-sales',
  },
  {
    id: 'acosta-street',
    address: '708 Acosta St',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32204',
    neighborhood: 'Historic Riverside',
    price: 375000,
    priceFormatted: '$375,000',
    beds: 3,
    baths: 2,
    sqft: 1476,
    status: 'Sold',
    soldDate: 'SOLD AUG 17, 2026',
    daysOnMarket: '70 Days On Market',
    pricePerSqFt: '$254/SF',
    representation: 'Buyer & Seller Representation',
    image: '/src/assets/images/property_riverside_craftsman_1791989533562.jpg',
    description: 'Classic 1920s historic craftsman home in Jacksonville Riverside. Jonathan successfully handled dual representation for both buyer and seller in this landmark closing.',
    features: ['Dual Representation (Buyer & Seller)', 'Historic Craftsman Architecture', 'Walkable to 5 Points & King St', '$254 per Sq Ft', 'Closed at $375,000'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#past-sales',
  },
  {
    id: 'bandera-circle',
    address: '8831 Bandera Cir S',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32244',
    neighborhood: 'Argyle Forest',
    price: 335000,
    priceFormatted: '$335,000',
    beds: 4,
    baths: 2,
    sqft: 1920,
    status: 'Sold',
    soldDate: 'SOLD JUL 14, 2026',
    daysOnMarket: '47 Days On Market',
    pricePerSqFt: '$174/SF',
    representation: 'Seller Representation',
    image: '/src/assets/images/property_mandarin_home_1791989534761.jpg',
    description: 'Single-story suburban Florida residence featuring 4 spacious bedrooms, 2 bathrooms, 2-car garage, and warm curb appeal. Sold by Jonathan representing the home sellers.',
    features: ['4 Bedrooms / 2 Baths', '1,920 Finished Sq Ft', 'Seller Representation', '$174 per Sq Ft', 'Closed at $335,000'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#past-sales',
  },
  {
    id: 'narrow-oak',
    address: '11858 S Narrow Oak Lane',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32223',
    neighborhood: 'Mandarin',
    price: 405000,
    priceFormatted: '$405,000',
    beds: 3,
    baths: 2,
    sqft: 1957,
    status: 'Sold',
    soldDate: 'Sold 2 months ago',
    representation: 'Buyer Representation',
    image: '/src/assets/images/property_mandarin_home_1791989534761.jpg',
    description: 'Charming Mandarin single family home under mossy canopy oaks, secured for buyer clients through strategic negotiation.',
    features: ['Buyer Representation', '1,957 Finished Sq Ft', 'Mature Mandarin Trees', 'Closed at $405,000'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#past-sales',
  },
  {
    id: 'devonhurst-drive',
    address: '6251 Devonhurst Drive',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32258',
    neighborhood: 'Bartram Park',
    price: 398000,
    priceFormatted: '$398,000',
    beds: 3,
    baths: 4,
    sqft: 2206,
    status: 'Sold',
    soldDate: 'Sold 2 months ago',
    representation: 'Buyer Representation',
    image: '/src/assets/images/property_julington_oaks_1791989532236.jpg',
    description: 'Executive two-story home in Bartram Park corridor with 4 bathrooms. Successfully negotiated and closed for buyer clients.',
    features: ['3 Beds / 4 Baths', '2,206 Sq Ft', 'Buyer Representation', 'Closed at $398,000'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#past-sales',
  },
  {
    id: 'reds-gait',
    address: '3881 Reds Gait Lane',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32223',
    neighborhood: 'Mandarin / Julington',
    price: 700000,
    priceFormatted: '$700,000',
    beds: 5,
    baths: 4,
    sqft: 3187,
    status: 'Sold',
    soldDate: 'Sold 2 months ago',
    representation: 'Buyer Representation',
    image: '/src/assets/images/real_julington_oaks_sunset_1791994300071.jpg',
    description: 'Premier 5-bedroom luxury estate in Mandarin with 4 bathrooms and expansive private grounds, negotiated for buyer client.',
    features: ['5 Bedrooms / 4 Baths', '3,187 Sq Ft Luxury Estate', 'Buyer Representation', 'Closed at $700,000'],
    zillowUrl: 'https://www.zillow.com/profile/Jonathan%20Daugherty#past-sales',
  },
];

// Exact "Areas Jonathan is Experienced In" from Homes.com screenshot
export const EXPERIENCED_AREAS: ExperiencedArea[] = [
  {
    id: 'saint-augustine',
    name: 'Saint Augustine',
    salesCount: 49,
    tagline: 'Historic Spanish Architecture & Coastal Charm',
    description: 'The nation\'s oldest city offers historic downtown residences, intracoastal estates, and beach communities. Jonathan has executed 49 closed sales in this market.',
    avgPrice: '$510,000',
    image: '/src/assets/images/jacksonville_river_waterfront_1791989532144.jpg',
  },
  {
    id: 'silverleaf',
    name: 'SilverLeaf',
    salesCount: 23,
    tagline: 'Premier Master-Planned Living with No CDD Fees',
    description: 'One of the most sought-after new construction master developments in St. Johns County, boasting resort amenities, top schools, and no CDD bond fees. Jonathan has 23 verified sales here.',
    avgPrice: '$545,000',
    image: '/src/assets/images/real_julington_oaks_sunset_1791994300071.jpg',
  },
  {
    id: 'mandarin',
    name: 'Mandarin',
    salesCount: 11,
    tagline: 'Historic River Oaks & Southern Serenity',
    description: 'Famed for canopy roads, grand moss-draped live oaks, and direct St. Johns River frontage. Large residential lots with serene river breezes and top amenities.',
    avgPrice: '$485,000',
    image: '/src/assets/images/real_remler_drive_exterior_1791994300435.jpg',
  },
  {
    id: 'creekside',
    name: 'Creekside',
    salesCount: 11,
    tagline: 'River Access, Marinas & Waterfront Serenity',
    description: 'Boating and waterfront haven along protected creeks and St. Johns tributaries. Ideal for boat owners, water enthusiasts, and families seeking quiet coastal living.',
    avgPrice: '$460,000',
    image: '/src/assets/images/jacksonville_river_waterfront_1791989532144.jpg',
  },
  {
    id: 'world-golf-village',
    name: 'World Golf Village',
    salesCount: 9,
    tagline: 'Championship Golf Courses & Executive Estates',
    description: 'Home to the King & Bear and Slammer & Squire championship courses, scenic lakefront properties, and gated neighborhoods with premier clubhouse access.',
    avgPrice: '$530,000',
    image: '/src/assets/images/real_heather_lake_exterior_1791994301899.jpg',
  },
  {
    id: 'saint-johns',
    name: 'Saint Johns',
    salesCount: 9,
    tagline: 'A-Rated Schools & Master Lagoon Communities',
    description: 'Consistently ranked Florida\'s #1 public school district. Features world-class crystal lagoon amenities, nature preserves, and family-first master communities.',
    avgPrice: '$580,000',
    image: '/src/assets/images/real_julington_oaks_sunset_1791994300071.jpg',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'meredith-page',
    author: 'Meredith Page',
    date: 'October 8, 2026',
    rating: 5,
    location: 'Mandarin, Jacksonville',
    transactionType: 'Buyer Representation',
    text: 'Jonathan was incredible from start to finish. In a fast-moving Northeast Florida market, his calm guidance, immediate answers, and deep inspection insights saved us time and prevented costly mistakes. Highly recommend him to anyone moving to Jacksonville.',
  },
  {
    id: 'brett-grandchamp',
    author: 'Brett Grandchamp',
    date: 'July 22, 2026',
    rating: 5,
    location: 'St. Johns County',
    transactionType: 'Buyer Representation',
    text: 'Top-tier real estate professional. Jonathan helped us negotiate fiercely and navigate every step of the transaction seamlessly. He knows every neighborhood, builder, and nuance in St. Johns County. Best experience we have had with an agent.',
  },
  {
    id: 'julianginebra',
    author: 'Julianginebra',
    date: 'November 19, 2025',
    rating: 5,
    location: 'Jacksonville, FL',
    transactionType: 'Relocation & Purchase',
    text: 'Jonathan made our relocation to Jacksonville as easy as possible. He knows the neighborhoods, school districts, and market dynamics inside out. We found the perfect home in under two weeks thanks to his preparation.',
  },
  {
    id: 'ashish-desai',
    author: 'Ashish Desai',
    date: 'August 26, 2025',
    rating: 5,
    location: 'Baymeadows / Deerwood',
    transactionType: 'Home Purchase',
    text: 'Very thorough, responsive, and detail-oriented. Jonathan protected our interests at every turn, coordinated all inspections, and secured our purchase under asking price. An outstanding advocate in your corner.',
  },
  {
    id: 'cristin-doane',
    author: 'Cristin Doane',
    date: 'July 2, 2025',
    rating: 5,
    location: 'Jacksonville, FL',
    transactionType: 'Seller & Buyer Representation',
    text: 'We could not have asked for a better agent in Northeast Florida. Jonathan is attentive, patient, and truly cares about his clients. His advice on staging and pricing was spot-on, leading to multiple offers.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'buying',
    title: 'Buying a Home',
    description: 'Expert guidance navigating property evaluations, neighborhood selection, and competitive offer structuring in Jacksonville.',
    bullets: [
      'Comprehensive MLS & private off-market property sourcing',
      'Comparative market valuation & strategic pricing advice',
      'Tenacious contract negotiation & contingency management',
      'Inspection coordination & closing escrow protection',
    ],
    ctaText: 'Find Your Home',
    interestType: 'Buying',
  },
  {
    id: 'selling',
    title: 'Selling a Home',
    description: 'Maximized net proceeds with targeted marketing, professional architectural photography, and data-backed pricing strategy.',
    bullets: [
      'Data-driven comparative market analysis (CMA)',
      'High-impact digital marketing & Zillow Showcase placement',
      'Professional photography, virtual walkthroughs & staging',
      'Vetted buyer pre-qualification & contract management',
    ],
    ctaText: 'Sell With Confidence',
    interestType: 'Selling',
  },
  {
    id: 'first-time',
    title: 'First-Time Homebuyers',
    description: 'Clear, step-by-step guidance from credit planning and Florida assistance programs through final keys in hand.',
    bullets: [
      'Education on earnest money, closing costs & down payments',
      'Introductions to trusted Northeast Florida local lenders',
      'Honest property condition assessments at every showing',
      'No-pressure walkthroughs with transparent counsel',
    ],
    ctaText: 'Start Your Journey',
    interestType: 'First-Time Homebuyer',
  },
  {
    id: 'military-new-build',
    title: 'Military & New Construction',
    description: 'Specialized support for active-duty PCS relocations (NAS Jax, Mayport) and builder contract negotiations.',
    bullets: [
      'PCS timeline coordination & remote video home tours',
      'VA loan expertise & Florida military property tax exemptions',
      'New construction builder contract reviews & pre-drywall checks',
      'Independent buyer representation at no cost to you as buyer',
    ],
    ctaText: 'Discuss Your Move',
    interestType: 'Military / New Construction',
  },
];
