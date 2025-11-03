import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play } from "lucide-react"

const listings = [
  {
    id: 1,
    image: "/luxury-penthouse-with-city-views-in-dubai-business.jpg",
    price: "AED 142,000,000",
    title: "Dubai Hill Modern Villa",
    beds: 5,
    baths: 7,
    sqft: "45,850 SQ FT",
  },
  {
    id: 2,
    image: "/luxury-villa-with-pool-at-sunset-dubai.jpg",
    hasVideo: true,
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
    image: "/mediterranean-style-white-villa-with-arches.jpg",
    price: "AED 78,000,000",
    title: "Mediterranean Villa",
    beds: 7,
    baths: 8,
    sqft: "42,000 SQ FT",
  },
]

export function ExclusiveListings() {
  return (
    <section className="relative py-12 md:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/aerial-view-of-palm-jumeirah-dubai.jpg"
          alt="Palm Jumeirah background"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-16 items-start">
          <div className="flex flex-col justify-start pt-0 lg:pt-12">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-balance leading-tight">
              Our Exclusive Unlisted Listings
            </h2>
            <p className="text-neutral-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base max-w-md">
              Discover our curated collection of ultra-luxury properties available exclusively through Nassira
              Properties. These exceptional residences offer unparalleled elegance and privacy.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
              <Link href="/featured" className="underline underline-offset-4 decoration-1 hover:text-neutral-600 transition-colors">
                Luxury Properties
              </Link>
              <button className="underline underline-offset-4 decoration-1 hover:text-neutral-600 transition-colors">
                Off Plan Properties
              </button>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-4 md:gap-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-lg aspect-[4/3]"
              >
                {/* Click anywhere on a card to go to featured */}
                <Link href="/featured" className="absolute inset-0 z-20" aria-label="View featured properties" />
                <Image
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title || "Luxury property"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 86vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30" />

                {listing.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="size-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                      <Play className="size-8 text-black fill-black ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                  <p className="text-xs mb-2 font-light">{listing.price}</p>
                  <h3 className="font-serif text-lg md:text-xl mb-3 text-balance">{listing.title}</h3>
                  <div className="flex gap-3 text-xs mb-4 font-light">
                    <span>{listing.beds} BEDS</span>
                    <span>{listing.baths} BATH</span>
                    <span>{listing.sqft}</span>
                  </div>
                  <Link href="/featured">
                    <Button className="bg-white text-black hover:bg-white/90 w-full text-xs md:text-sm py-4 md:py-5">
                      VIEW PROPERTY
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden grid grid-cols-2 gap-3">
            {listings.map((listing) => (
              <div key={listing.id} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
                {/* Mobile card overlay to featured */}
                <Link href="/featured" className="absolute inset-0 z-20" aria-label="View featured properties" />
                <Image
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title || "Luxury property"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 45vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30" />

                {listing.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="size-12 rounded-full bg-white/95 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                      <Play className="size-4 text-black fill-black ml-0.5" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <p className="text-[10px] mb-1 font-light">{listing.price}</p>
                  <h3 className="font-serif text-xs mb-2 text-balance leading-tight">{listing.title}</h3>
                  <div className="flex flex-col gap-0.5 text-[9px] mb-2 font-light">
                    <span>
                      {listing.beds} BEDS · {listing.baths} BATH
                    </span>
                    <span>{listing.sqft}</span>
                  </div>
                  <Link href="/featured">
                    <Button className="bg-white text-black hover:bg-white/90 w-full text-[10px] py-2 h-auto">
                      VIEW PROPERTY
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
