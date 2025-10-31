import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FeaturedHero() {
  return (
    <section className="py-12 md:py-20 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image panel */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/featured.png"
            alt="Nassira's Luxury Collection feature"
            width={1200}
            height={1200}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Content card */}
        <div className="relative">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg p-6 md:p-8 lg:p-10">
            <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-4">Nassira's Luxury Collection</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              Curated Homes
              <br />
              For Discerning Lifestyles
            </h2>
            <p className="text-neutral-600 text-sm md:text-base mb-6">
              A handpicked portfolio of statement residences defined by craftsmanship, privacy and prime locations.
              Discover properties available exclusively through our private network.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-8 mt-2">
              <div>
                <p className="font-serif text-4xl md:text-5xl">42+</p>
                <p className="text-xs md:text-sm text-neutral-500 mt-1">Real Estate Agents</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl">270+</p>
                <p className="text-xs md:text-sm text-neutral-500 mt-1">Available Listings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedHero


