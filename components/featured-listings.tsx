import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { featuredListings } from "@/components/featured-data"

const listings = featuredListings

export function FeaturedListings() {
  return (
    <section className="relative bg-neutral-950 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <p className="uppercase tracking-wider text-neutral-400 text-xs mb-2">Nassira’s</p>
          <h1 className="font-serif text-4xl md:text-6xl">Luxury Collection</h1>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Each property in our portfolio is selected for bespoke craft and flawless detail. Discover
            exclusive listings offering unparalleled elegance and prime locations.
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 pb-2">
          <div className="flex gap-5 md:gap-6 snap-x snap-mandatory">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="snap-start bg-white text-neutral-900 rounded-2xl overflow-hidden shadow-lg min-w-[220px] sm:min-w-[240px] md:min-w-[260px]"
              >
                <Link href={`/featured/${listing.id}`}>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.title || "Luxury property"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 20vw"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <p className="text-[11px] text-neutral-600 mb-1 line-clamp-1">{listing.title}</p>
                  <p className="text-lg font-semibold mb-3">{listing.price}</p>
                  <div className="flex items-center gap-3 text-[11px] text-neutral-600 mb-3">
                    {typeof listing.beds !== "undefined" && <span>{listing.beds} Beds</span>}
                    {typeof listing.baths !== "undefined" && <span>{listing.baths} Bath</span>}
                    <span>{listing.sqft}</span>
                  </div>
                  <Button asChild size="sm" className="w-full py-3">
                    <Link href={`/featured/${listing.id}`}>View Property</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedListings
