export function WhySellWithUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Why Sell With Nassira</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Three pillars of excellence that set us apart in Dubai's luxury real estate market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Global Reach */}
          <div className="bg-[#f5f5f5] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-black">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeWidth="2"
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-serif text-2xl mb-4 text-center">Global Reach</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Nassira Properties connects female-led sellers to buyers worldwide.
            </p>
          </div>

          {/* Luxury Marketing */}
          <div className="bg-[#f5f5f5] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-black">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeWidth="2"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-serif text-2xl mb-4 text-center">Luxury Marketing</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Our marketing celebrates women's leadership in the luxury property market.
            </p>
          </div>

          {/* Seamless Experience */}
          <div className="bg-[#f5f5f5] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-black">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
            </div>
            <h3 className="font-serif text-2xl mb-4 text-center">Seamless Experience</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              We champion your selling journey—every detail handled with care and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
