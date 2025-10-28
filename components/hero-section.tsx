import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image with Overlay */}
      <div className="relative h-[35vh] md:min-h-[min(82vh,900px)] overflow-hidden rounded-3xl mx-4 md:mx-8 mt-24">
        <Image
          src="/images/luxury-villa-pool-sunset.png"
          alt="Luxury Property"
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

        {/* Centered Logo */}
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
              Empowering Women to Lead in Luxury Real Estate
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-background">
        {/* Service Columns */}
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Buy Luxury Homes */}
            <Link
              href="/buy"
              className="flex flex-col items-center text-center px-6 py-8 group cursor-pointer transition-all duration-300 hover:scale-105 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-gray-300"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/icon-buy-homes.png"
                  alt="Buy Luxury Homes"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground group-hover:text-black transition-colors font-semibold">
                Buy Luxury Homes
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Find exclusive and luxurious properties with premium amenities. Our curated selection features the
                finest homes in Dubai's most prestigious locations.
              </p>
            </Link>

            {/* Selling Property */}
            <Link
              href="/sell"
              className="flex flex-col items-center text-center px-6 py-8 group cursor-pointer transition-all duration-300 hover:scale-105 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-gray-300"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/icon-selling.png"
                  alt="Selling Property"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground group-hover:text-black transition-colors font-semibold">
                Selling Property
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Maximize your property value with our expert marketing strategies. We connect you with qualified buyers
                and ensure a seamless selling experience.
              </p>
            </Link>

            {/* Off-Plan Investment */}
            <Link
              href="/invest"
              className="flex flex-col items-center text-center px-6 py-8 group cursor-pointer transition-all duration-300 hover:scale-105 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-gray-300"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/icon-investment.png"
                  alt="Off-Plan Investment"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground group-hover:text-black transition-colors font-semibold">
                Off-Plan Investment
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Invest in premium off-plan properties with exclusive pre-launch opportunities. Secure the best deals
                with flexible payment plans and guaranteed returns.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
