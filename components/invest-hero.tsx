"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function InvestHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full px-4 md:px-8 lg:px-12 pt-24 md:pt-28 pb-8 md:pb-12">
      <div className="relative w-full min-h-[280px] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <Image
          src="/images/invest-hero-dubai-marina.jpeg"
          alt="Luxury yachts in Dubai marina with skyline at golden hour"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, rgba(20, 20, 20, 0.7) 0%, rgba(20, 20, 20, 0.35) 40%, transparent 70%),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.25) 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(214, 178, 109, 0.3) 0%, transparent 50%)",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
            <div
              className={`max-w-2xl transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1
                className="font-serif font-semibold text-xl sm:text-3xl md:text-5xl mb-2 md:mb-4 text-balance leading-tight tracking-tight"
                style={{
                  color: "#fff8f0",
                  textShadow: `
                    0 2px 4px rgba(0, 0, 0, 0.8),
                    0 4px 12px rgba(0, 0, 0, 0.6),
                    0 8px 24px rgba(0, 0, 0, 0.4)
                  `,
                }}
              >
                Invest in UAE's Luxury Real Estate Market
              </h1>

              <p
                className="font-sans font-normal text-xs sm:text-base md:text-xl mb-4 md:mb-8 leading-relaxed text-balance"
                style={{
                  color: "#f5e8d0",
                  textShadow: `
                    0 1px 3px rgba(0, 0, 0, 0.8),
                    0 2px 8px rgba(0, 0, 0, 0.6),
                    0 4px 16px rgba(0, 0, 0, 0.4)
                  `,
                }}
              >
                Unlock premium ROI opportunities with female-focused investment strategies in the UAE's most prestigious
                developments.
              </p>

              <Button
                size="lg"
                className="bg-[#c17a5c]/30 hover:bg-[#c17a5c]/50 text-[#fff8f0] border-2 border-[#d8b47f] hover:border-[#fff8f0] px-4 py-3 md:px-8 md:py-6 text-xs md:text-base rounded-full transition-all duration-300 font-medium shadow-2xl hover:shadow-[0_0_30px_rgba(214,178,109,0.4)] hover:scale-[1.05] backdrop-blur-md"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
