export function Footer() {
  return (
    <footer className="relative bg-[#f5f5f5] py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact US Section */}
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-6">Contact US</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0 text-[#c17a5c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm break-words">Al Maidoor Building, Sheikh Zayed Road, Al Quoz 3, Dubai</p>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-[#c17a5c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+971566003563" className="text-sm hover:text-[#c17a5c] transition-colors break-all">
                  +971 56 600 2563
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-[#c17a5c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@nassiraproperties.com"
                  className="text-sm hover:text-[#c17a5c] transition-colors break-all"
                >
                  contact@nassiraproperties.com
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/nassiraproperties/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#c17a5c] hover:text-[#c17a5c] transition-colors text-gray-500"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/nassirarealtygroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#c17a5c] hover:text-[#c17a5c] transition-colors text-gray-500"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="4" cy="4" r="2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#c17a5c] hover:text-[#c17a5c] transition-colors text-gray-500"
                aria-label="PropertyFinder"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="9 22 9 12 15 12 15 22"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-6">Newsletter</h2>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-none text-sm focus:outline-none focus:border-[#c17a5c] transition-colors min-w-0"
                required
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 bg-gray-400 text-white text-sm font-medium hover:bg-[#c17a5c] transition-colors whitespace-nowrap"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
