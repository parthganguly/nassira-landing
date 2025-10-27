"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function SellHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full px-4 md:px-8 lg:px-12 pt-24 md:pt-28 pb-8 md:pb-12">
      <div className="relative w-full min-h-[280px] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/images/sell-hero-luxury-interior.jpeg"
          alt="Ultra-luxury Dubai penthouse interior with golden chandelier and skyline view"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, rgba(20, 20, 20, 0.75) 0%, rgba(20, 20, 20, 0.4) 40%, transparent 70%),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.3) 100%),
              radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.25) 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(214, 178, 109, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
            <div
              className={`max-w-3xl transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1
                className="font-serif font-semibold text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-3 md:mb-6 text-balance leading-[1.05] tracking-tight"
                style={{
                  color: "#fff8f0",
                  textShadow: `
                    0 2px 4px rgba(0, 0, 0, 0.8),
                    0 4px 12px rgba(0, 0, 0, 0.6),
                    0 8px 24px rgba(0, 0, 0, 0.4),
                    0 2px 40px rgba(214, 178, 109, 0.2)
                  `,
                }}
              >
                Empower Your Property Journey.
              </h1>

              <p
                className="font-sans font-normal text-sm sm:text-lg md:text-2xl lg:text-3xl mb-5 md:mb-10 leading-relaxed text-balance"
                style={{
                  color: "#f5e8d0",
                  textShadow: `
                    0 1px 3px rgba(0, 0, 0, 0.8),
                    0 2px 8px rgba(0, 0, 0, 0.6),
                    0 4px 16px rgba(0, 0, 0, 0.4)
                  `,
                }}
              >
                Sell with Nassira Properties — where luxury meets legacy.
              </p>

              <Button
                size="lg"
                className="bg-[#c17a5c]/30 hover:bg-[#c17a5c]/50 text-[#fff8f0] border-2 border-[#d8b47f] hover:border-[#fff8f0] px-5 py-3 md:px-10 md:py-7 text-xs md:text-lg lg:text-xl rounded-full transition-all duration-300 font-medium shadow-2xl hover:shadow-[0_0_30px_rgba(214,178,109,0.4)] hover:scale-[1.05] backdrop-blur-md"
                onClick={() => {
                  document.getElementById("valuation-form")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                List Your Property
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
