export type FeaturedListing = {
  id: number
  image: string
  price: string
  title: string
  beds?: number
  baths?: number
  sqft: string
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
  },
  {
    id: 2,
    image: "/luxury-villa-with-pool-at-sunset-dubai.jpg",
    price: "AED 95,000,000",
    title: "Luxury Villa with Pool",
    beds: 6,
    baths: 6,
    sqft: "38,500 SQ FT",
  },
  {
    id: 3,
    image: "/modern-luxury-living-room-with-blue-accents-and-ci.jpg",
    price: "AED 50,000,000",
    title: "Volante Penthouse in Business Bay",
    beds: 5,
    baths: 5,
    sqft: "11,251 SQ FT",
  },
  {
    id: 4,
    image: "/al barari/32.png",
    price: "AED 79,000,000",
    title: "Al Barari Modern Lux Villa",
    beds: 6,
    baths: 7,
    sqft: "14,792 SQ FT",
  },
  {
    id: 5,
    image: "/images/property-exterior.png",
    price: "AED 75,000,000",
    title: "Designer Villa in Pearl Jumeirah",
    beds: 5,
    baths: 5,
    sqft: "11,251 SQ FT",
  },
]

export function getFeaturedById(id: number) {
  return featuredListings.find((l) => l.id === id)
}


