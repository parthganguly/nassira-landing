import Image from "next/image"
import Link from "next/link"

export function MdlShowSection() {
  return (
    <section id="as-seen-on-tv" className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Section heading */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">As Seen On TV</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch Nassira Sekkay on STARZPLAY's Million Dollar Listing, showcasing the UAE's most exclusive properties
          </p>
        </div>

        {/* Main promotional image */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/nassira-mdl-promo.jpeg"
              alt="Nassira Sekkay on Million Dollar Listing - STARZPLAY Original"
              width={1200}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
          <div className="relative w-32 h-12 md:w-40 md:h-16 opacity-70 hover:opacity-100 transition-opacity">
            <Image src="/images/starzplay-logo.png" alt="STARZPLAY" fill className="object-contain" />
          </div>
          <div className="relative w-24 h-12 md:w-32 md:h-16 opacity-70 hover:opacity-100 transition-opacity">
            <Image src="/images/mdl-logo-1.png" alt="Million Dollar Listing Partner" fill className="object-contain" />
          </div>
          <div className="relative w-24 h-12 md:w-32 md:h-16 opacity-70 hover:opacity-100 transition-opacity">
            <Image src="/images/mdl-logo-2.png" alt="Million Dollar Listing Partner" fill className="object-contain" />
          </div>
          <div className="relative w-24 h-12 md:w-32 md:h-16 opacity-70 hover:opacity-100 transition-opacity">
            <Image src="/images/mdl-logo-3.png" alt="Million Dollar Listing Partner" fill className="object-contain" />
          </div>
          <div className="relative w-24 h-12 md:w-32 md:h-16 opacity-70 hover:opacity-100 transition-opacity">
            <Image src="/images/mdl-logo-4.png" alt="Million Dollar Listing Partner" fill className="object-contain" />
          </div>
        </div>

        {/* As Featured On */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 mb-8 md:mb-12">As Featured On</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Link
              href="https://starzplay.com/en/series/million-dollar-listing-uae/443673128315"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[9/5] bg-white rounded-lg shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Image
                src="/images/featured-starzplay.png"
                alt="STARZPLAY"
                fill
                className="object-contain p-2 invert opacity-80"
              />
            </Link>
            <Link
              href="https://www.primevideo.com/detail/Million-Dollar-Listing-UAE/0LMDKVSAUQM65WLT690V54E4MF"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[9/5] bg-white rounded-lg shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Image
                src="/images/featured-villamart.png"
                alt="Prime Video"
                fill
                className="object-contain p-2 invert opacity-80"
              />
            </Link>
            <Link
              href="https://tv.apple.com/ae/show/million-dollar-listing-uae/umc.cmc.bv8wxcbqv2gccaydzdvalx2u"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[9/5] bg-white rounded-lg shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Image
                src="/images/featured-propertyfinder.png"
                alt="Hulu"
                fill
                className="object-contain p-2 invert opacity-80"
              />
            </Link>
            <Link
              href="https://tv.apple.com/ae/show/million-dollar-listing-uae/umc.cmc.bv8wxcbqv2gccaydzdvalx2u"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[9/5] bg-white rounded-lg shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Image
                src="/images/featured-bayut.png"
                alt="Apple TV"
                fill
                className="object-contain p-2 invert opacity-80"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
