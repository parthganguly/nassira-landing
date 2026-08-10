import Image from "next/image"
import Link from "next/link"

export function MdlShowSection() {
  return (
    <section id="as-seen-on-tv" className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">As Seen On TV</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nassira Sekkay appeared as a cast member of STARZPLAY&apos;s Million Dollar Listing UAE, the first international edition of the Million Dollar Listing franchise.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/nassira-mdl-promo.jpeg"
              alt="Nassira Sekkay on Million Dollar Listing UAE"
              width={1200}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-7 text-center">
          <div className="relative w-36 h-14 md:w-44 md:h-16 opacity-75">
            <Image src="/images/starzplay-logo.png" alt="STARZPLAY" fill className="object-contain" />
          </div>
          <Link
            href="https://starzplay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-b-2 border-gray-900 pb-1 text-sm font-medium hover:border-amber-600 transition-colors"
          >
            Visit STARZPLAY
          </Link>
        </div>
      </div>
    </section>
  )
}
