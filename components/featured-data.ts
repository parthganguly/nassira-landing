export type FeaturedListing = {
  id: number
  image: string // thumbnail
  price: string
  title: string
  beds?: number
  baths?: number
  sqft: string
  location?: string
  objectType?: string
  livingAreaSqm?: string
  plotSqft?: string
  amenities?: string[]
  brochurePath?: string
  description?: string
  gallery?: string[]
  hideSizeInStrip?: boolean
}

export const featuredListings: FeaturedListing[] = [
  {
    id: 1,
    image: "/luxury-penthouse-with-city-views-in-dubai-business.jpg",
    price: "AED 150,000,000",
    title: "Emirates Hills Modern Villa",
    beds: 7,
    baths: 9,
    sqft: "45,850 SQ FT",
    location: "Emirates Hills, Dubai",
    objectType: "Villa",
    // size/plot intentionally hidden per request
    hideSizeInStrip: true,
    amenities: ["Infinity Pool", "Private Gym", "Cinema Room", "Elevator", "Landscaped Gardens"],
    brochurePath: "/brochures/emirates-hills.pdf",
    description:
      "Flagship modern villa in Emirates Hills, Dubai’s premier golf‑course community. Designed for grand entertaining and private family life, the home showcases double‑height reception areas, floor‑to‑ceiling glazing and bespoke joinery throughout. Seven ensuite bedrooms pair with a wellness‑level gym, cinema and elevator. Outdoors, landscaped gardens frame an infinity pool and generous terraces, creating a true estate experience in the city’s most exclusive enclave.",
    gallery: Array.from({ length: 19 }, (_, i) => `/Emirates Hills/${i + 2}.png`),
  },
  {
    id: 2,
    image: "/luxury-villa-with-pool-at-sunset-dubai.jpg",
    price: "AED 95,000,000",
    title: "Luxury Villa with Pool",
    beds: 6,
    baths: 6,
    sqft: "38,500 SQ FT",
    location: "Dubai",
    objectType: "Villa",
    livingAreaSqm: "3,577 m²",
    amenities: ["Pool", "Garden"],
  },
  {
    id: 3,
    image: "/modern-luxury-living-room-with-blue-accents-and-ci.jpg",
    price: "AED 50,000,000",
    title: "Volante Penthouse in Business Bay",
    beds: 5,
    baths: 5,
    sqft: "11,251 SQ FT",
    location: "Volante, Business Bay, Dubai",
    objectType: "Penthouse",
    // size/plot intentionally hidden per request
    hideSizeInStrip: true,
    amenities: ["Rooftop Pool", "Concierge", "Fitness Center"],
    brochurePath: "/brochures/volante.pdf",
    description:
      "Elegant duplex penthouse with sweeping skyline and canal views. Crafted with bespoke millwork and natural stone, the residence flows from grand reception areas to generous terraces for refined entertaining.",
    gallery: [
      "/Volante Penthouse/imgi_67_15318619-80a80o.jpg",
      "/Volante Penthouse/imgi_70_15318619-c5349o.jpg",
      "/Volante Penthouse/imgi_78_15318619-5650eo.jpg",
      "/Volante Penthouse/imgi_82_15318619-df458o.jpg",
      "/Volante Penthouse/imgi_86_15318619-12239o.jpg",
      "/Volante Penthouse/imgi_90_15318619-1ac3eo.jpg",
      "/Volante Penthouse/imgi_94_15318619-a019bo.jpg",
      "/Volante Penthouse/imgi_98_15318619-5f7e4o.jpg",
      "/Volante Penthouse/imgi_102_15318619-dc0ffo.jpg",
      "/Volante Penthouse/imgi_126_15318619-80576o.jpg",
      "/Volante Penthouse/imgi_130_15318619-c5b5fo.jpg",
      "/Volante Penthouse/imgi_134_15318619-9999bo.jpg",
    ],
  },
  {
    id: 4,
    image: "/al barari/1.png",
    price: "AED 79,000,000",
    title: "Al Barari Modern Lux Villa",
    beds: 6,
    baths: 7,
    sqft: "14,792 SQ FT",
    location: "Wadi Al Safa, Al Barari, Dubai",
    objectType: "Villa",
    // size/plot intentionally hidden per request
    hideSizeInStrip: true,
    amenities: ["Private Pool", "Landscaped Garden", "3-Car Garage", "Elevator", "Show & Service Kitchens"],
    brochurePath: "/brochures/al-barari.pdf",
    description:
      "Brand‑new ultra‑luxury villa in Al Barari’s lush sanctuary. Fully furnished with curated Italian pieces, this modern home delivers resort‑style living with seamless indoor‑outdoor flow. The residence features six ensuite bedrooms, formal and family lounges, show and service kitchens with premium appliances, an elevator and a 3‑car garage. Expansive terraces overlook a temperature‑controlled pool and landscaped gardens—ideally positioned close to the community’s dining and wellness destinations.",
    gallery: Array.from({ length: 34 }, (_, i) => `/al barari/${i + 1}.png`),
  },
  {
    id: 5,
    image: "/images/property-exterior.png",
    price: "AED 75,000,000",
    title: "Designer Villa in Pearl Jumeirah",
    beds: 5,
    baths: 5,
    sqft: "11,251 SQ FT",
    location: "Pearl Jumeirah, Dubai",
    objectType: "Villa",
    livingAreaSqm: "1,045 m²",
    plotSqft: "11,251 Sq Ft",
    amenities: ["Private Pool", "Roof Terrace", "BBQ", "Elevator"],
    brochurePath: "/brochures/pearl-jumeirah.pdf",
    description:
      "Exquisite designer residence with curated interiors and a show kitchen, complemented by a private pool and landscaped gardens. Refined finishes and smart-home conveniences throughout.",
    gallery: [
      "/images/property-exterior.png",
      "/images/property-living.png",
      "/images/property-bedroom.png",
      "/images/property-pool.png",
      "/images/property-bathroom.png",
    ],
  },
]

export function getFeaturedById(id: number) {
  return featuredListings.find((l) => l.id === id)
}

