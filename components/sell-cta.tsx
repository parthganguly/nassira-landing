"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SellCTA() {
  return (
    <section className="relative py-8 md:py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg md:rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative w-full h-[50vh] min-h-[400px] md:h-[40vh] md:min-h-[350px] lg:h-[50vh]">
            <Image
              src="/images/sell-cta-dubai-skyline-dusk.jpeg"
              alt="UAE skyline at dusk"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/85 via-black/75 to-black/60 md:from-black/70 md:via-black/60 md:to-amber-900/40" />

            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
              <div className="text-center max-w-3xl">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 md:mb-6 text-balance leading-tight">
                  Join the Movement of Women Empowering Women in Real Estate.
                </h2>
                <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-8 text-balance leading-relaxed">
                  Partner with Nassira Properties to achieve extraordinary results.
                </p>
                <Button
                  size="lg"
                  className="bg-white/90 backdrop-blur-sm text-black hover:bg-white/95 px-5 py-4 md:px-7 md:py-5 text-xs md:text-sm rounded-none font-semibold shadow-2xl"
                  onClick={() => {
                    window.location.href = "/contact"
                  }}
                >
                  Connect with Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
