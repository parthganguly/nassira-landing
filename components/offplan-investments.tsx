import Image from "next/image"
import { Button } from "@/components/ui/button"

export function OffPlanInvestments() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">Why Off-Plan Investments?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the advantages of investing in Dubai's off-plan properties and secure your future returns today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/images/offplan-construction-dubai.jpeg"
              alt="Dubai skyscrapers under construction with cranes at sunset"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Lower Entry Prices */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17a5c]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#c17a5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-2">Lower Entry Prices</h3>
                <p className="text-gray-600 leading-relaxed">
                  Purchase properties at pre-construction prices, typically 20-30% below market value, maximizing your
                  investment potential from day one.
                </p>
              </div>
            </div>

            {/* Flexible Payment Plans */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17a5c]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#c17a5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-2">Flexible Payment Plans</h3>
                <p className="text-gray-600 leading-relaxed">
                  Benefit from developer-backed payment schedules with low down payments and installments spread over
                  construction, making luxury investments accessible.
                </p>
              </div>
            </div>

            {/* High Appreciation Potential */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17a5c]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#c17a5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-2">High Appreciation Potential</h3>
                <p className="text-gray-600 leading-relaxed">
                  Watch your investment grow as construction progresses. Dubai's off-plan properties historically
                  appreciate 15-25% by completion date.
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#c17a5c] hover:bg-[#a86a4f] text-white px-8 py-6 rounded-full shadow-lg mt-4"
            >
              Explore Off-Plan Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
