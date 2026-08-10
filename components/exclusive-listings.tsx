import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { featuredListings } from "@/components/featured-data"

const listings = featuredListings.slice(0, 4)

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
              Our Exclusive Listings
            </h2>
            <p className="text-neutral-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base max-w-md">
              Discover Nassira Properties&apos; curated collection of exceptional luxury residences across Dubai.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
              <Link href="/featured" className="underline underline-offset-4 decoration-1 hover:text-neutral-600 transition-colors">
                View Luxury Collection
              </Link>
              <Link href="/invest" className="underline underline-offset-4 decoration-1 hover:text-neutral-600 transition-colors">
                Saadiyat Opportunities
              </Link>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-4 md:gap-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-lg aspect-[4/3]"
              >
                <Link href={`/featured/${listing.id}`} className="absolute inset-0 z-20" aria-label={`View ${listing.title}`} />
                <Image
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title || "Luxury property"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 86vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white z-30 pointer-events-none">
                  <p className="text-xs mb-2 font-light">{listing.price}</p>
                  <h3 className="font-serif text-lg md:text-xl mb-3 text-balance">{listing.title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs mb-4 font-light">
                    {typeof listing.beds !== "undefined" && <span>{listing.beds} BEDS</span>}
                    {typeof listing.baths !== "undefined" && <span>{listing.baths} BATH</span>}
                    {!listing.hideSizeInStrip && <span>{listing.sqft}</span>}
                  </div>
                  <div className="pointer-events-auto">
                    <Button asChild className="bg-white text-black hover:bg-white/90 w-full text-xs md:text-sm py-4 md:py-5">
                      <Link href={`/featured/${listing.id}`}>VIEW PROPERTY</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden grid grid-cols-2 gap-3">
            {listings.map((listing) => (
              <div key={listing.id} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
                <Link href={`/featured/${listing.id}`} className="absolute inset-0 z-20" aria-label={`View ${listing.title}`} />
                <Image
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title || "Luxury property"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 45vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white z-30 pointer-events-none">
                  <p className="text-[10px] mb-1 font-light">{listing.price}</p>
                  <h3 className="font-serif text-xs mb-2 text-balance leading-tight">{listing.title}</h3>
                  <div className="flex flex-col gap-0.5 text-[9px] mb-2 font-light">
                    <span>{listing.beds} BEDS · {listing.baths} BATH</span>
                    {!listing.hideSizeInStrip && <span>{listing.sqft}</span>}
                  </div>
                  <div className="pointer-events-auto">
                    <Button asChild className="bg-white text-black hover:bg-white/90 w-full text-[10px] py-2 h-auto">
                      <Link href={`/featured/${listing.id}`}>VIEW PROPERTY</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
