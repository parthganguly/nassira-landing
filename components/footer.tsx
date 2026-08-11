import Link from "next/link"

const whatsappUrl =
  "https://wa.me/971566002563?text=Hello%20Nassira%2C%20I%27d%20like%20to%20discuss%20a%20property%20enquiry."

export function Footer() {
  return (
    <footer className="relative bg-[#f5f5f5] py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-6">Contact Us</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm break-words">Office Unit 104, Al Maidoor Building, Al Quoz, Sheikh Zayed Road, Dubai</p>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+971566002563" className="text-sm hover:text-[#c17a5c] transition-colors break-all">
                  +971 56 600 2563
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@nassiraproperties.com" className="text-sm hover:text-[#c17a5c] transition-colors break-all">
                  contact@nassiraproperties.com
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/nassiraproperties/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#c17a5c] hover:text-[#c17a5c] transition-colors text-gray-500"
                aria-label="Instagram"
              >
                <span className="text-xs font-semibold">IG</span>
              </a>
              <a
                href="https://www.linkedin.com/company/nassiraproperties"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#c17a5c] hover:text-[#c17a5c] transition-colors text-gray-500"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-semibold">in</span>
              </a>
              <a
                href="https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#c17a5c] hover:text-[#c17a5c] transition-colors text-gray-500"
                aria-label="Property Finder"
              >
                <span className="text-xs font-semibold">PF</span>
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-6">Private Enquiry</h2>
            <p className="text-sm leading-7 text-gray-600 max-w-md">
              Speak directly with Nassira Properties for current property information, project materials, availability and viewing options.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex px-6 sm:px-8 py-3 bg-gray-700 text-white text-sm font-medium hover:bg-[#c17a5c] transition-colors"
            >
              WHATSAPP NASSIRA
            </a>
            <div className="mt-7 text-xs leading-6 text-gray-500">
              <p>Brokerage ORN 34078 · Nassira Sekkay BRN 47146</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                <Link href="/about" className="hover:text-[#c17a5c]">About</Link>
                <Link href="/invest" className="hover:text-[#c17a5c]">Saadiyat</Link>
                <Link href="/contact" className="hover:text-[#c17a5c]">Contact</Link>
                <Link href="/privacy" className="hover:text-[#c17a5c]">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
