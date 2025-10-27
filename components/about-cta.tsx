import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutCta() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/elegant-dubai-luxury-real-estate-office-interior-w.jpg"
          alt="Nassira Properties office"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-balance leading-tight"
            style={{
              color: "#fff8f0",
              textShadow: `
                0 2px 4px rgba(0, 0, 0, 0.8),
                0 4px 12px rgba(0, 0, 0, 0.6)
              `,
            }}
          >
            Join the Movement of Women Empowering Women in Real Estate
          </h2>

          <p
            className="text-base md:text-lg mb-8 leading-relaxed"
            style={{
              color: "#f5e8d0",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            Be part of a community that's redefining luxury, leadership, and legacy in the UAE.
          </p>

          <Button
            size="lg"
            className="bg-[#c17a5c] hover:bg-[#a86a4f] text-white px-8 py-6 text-base md:text-lg rounded-full transition-all duration-300 font-medium shadow-2xl hover:shadow-[0_0_30px_rgba(193,122,92,0.5)] hover:scale-105"
          >
            Connect With Us
          </Button>
        </div>
      </div>
    </section>
  )
}
