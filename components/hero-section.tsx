import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[35vh] md:min-h-[min(82vh,900px)] overflow-hidden rounded-3xl mx-4 md:mx-8 mt-24">
        <Image
          src="/images/luxury-villa-pool-sunset.png"
          alt="Luxury property in the UAE"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#d6b26d]/28 via-transparent to-transparent"
          style={{ width: "40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[48ch] text-center px-4">
            <Image
              src="/images/np-white-logo.png"
              alt="Nassira Properties"
              width={400}
              height={120}
              className="w-64 md:w-96 h-auto mx-auto leading-[1.1] md:leading-normal"
              priority
            />
            <p
              className="font-sans font-medium text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide leading-relaxed mt-4 md:mt-6 px-4"
              style={{
                color: "#ffffff",
                textShadow: `
                  0 1px 2px rgba(0, 0, 0, 0.6),
                  0 2px 4px rgba(0, 0, 0, 0.4)
                `,
              }}
            >
              Private Real Estate Advisory in Dubai & Abu Dhabi
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-background">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <Link
              href="/contact"
              className="flex flex-col items-center text-center px-6 py-8 group cursor-pointer transition-all duration-300 hover:scale-105 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-gray-300"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/icon-buy-homes.png"
                  alt="Private property buying advisory"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground group-hover:text-black transition-colors font-semibold">
                Private Buying
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Tell us what you are looking for and we will discuss current opportunities, project information and viewing options directly with you.
              </p>
            </Link>

            <Link
              href="/contact"
              className="flex flex-col items-center text-center px-6 py-8 group cursor-pointer transition-all duration-300 hover:scale-105 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-gray-300"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/icon-selling.png"
                  alt="Private property selling advisory"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground group-hover:text-black transition-colors font-semibold">
                Private Selling
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Speak with Nassira Properties about your property, your objectives and the appropriate next step before it is marketed.
              </p>
            </Link>

            <Link
              href="/invest"
              className="flex flex-col items-center text-center px-6 py-8 group cursor-pointer transition-all duration-300 hover:scale-105 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-gray-300"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/icon-investment.png"
                  alt="Saadiyat property opportunity"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground group-hover:text-black transition-colors font-semibold">
                Saadiyat Opportunity
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Explore Mandarin Oriental Residences in Saadiyat Cultural District and request current availability, pricing and floor plans.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
