import Image from "next/image"
import Link from "next/link"
import { Building2, Network, Tv } from "lucide-react"

export function WhyChooseNassira() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Top section with text and image */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="font-serif text-4xl mb-4 text-balance">Why Sell With Nassira Properties</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With unparalleled expertise in Dubai's luxury real estate market, Nassira Properties offers exclusive
              access to high-net-worth buyers and sophisticated marketing strategies that maximize your property's
              value. Our elite network and proven track record ensure your property receives the attention it deserves.
            </p>
            <Link
              href="/sell"
              className="inline-block border-b-2 border-black pb-1 hover:border-amber-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/professional-real-estate-meeting-luxury-office.jpg"
              alt="Professional real estate consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div>
            <div className="font-serif text-4xl mb-2">2.5 Billion</div>
            <div className="text-gray-600">In Sales since 2022</div>
          </div>
          <div>
            <div className="font-serif text-4xl mb-2">255 Million</div>
            <div className="text-gray-600">In Commission</div>
          </div>
          <div>
            <div className="font-serif text-4xl mb-2">15 Agents</div>
            <div className="text-gray-600">In Commission</div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Building2 className="w-12 h-12 text-black" />
            </div>
            <h3 className="font-serif text-xl mb-3">Luxury Homes</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We specialize in ultra-luxury properties across Dubai's most prestigious neighborhoods, from waterfront
              villas to penthouse apartments with unparalleled amenities.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Network className="w-12 h-12 text-black" />
            </div>
            <h3 className="font-serif text-xl mb-3">Elite Network</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our extensive network of high-net-worth individuals and international investors ensures your property
              reaches the right buyers through exclusive channels.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Tv className="w-12 h-12 text-black" />
            </div>
            <h3 className="font-serif text-xl mb-3">TV Show Exposure</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Featured on international luxury real estate shows, your property gains unprecedented exposure to a global
              audience of qualified buyers and investors.
            </p>
          </div>
        </div>

        {/* CTA with background image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-[500px]">
            <Image
              src="/modern-white-luxury-villa-minimalist-architecture.jpg"
              alt="Modern luxury villa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="font-serif text-3xl text-balance">
                  <Link href="/contact" className="border-b-2 border-black hover:border-amber-600 transition-colors">
                    Click here
                  </Link>{" "}
                  to get your free property evaluation today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
