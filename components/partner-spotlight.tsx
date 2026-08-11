import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PartnerSpotlight() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/partner-waterfront-promenade.png"
          alt="Dubai luxury waterfront promenade at twilight with modern towers"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 min-h-[500px] md:min-h-[600px] lg:min-h-[70vh] flex items-center">
        <div className="max-w-2xl text-white space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">Selected Developers</h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Selected opportunities from leading UAE developers, including Aldar, are introduced with current project
            information confirmed at source.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild className="bg-black hover:bg-gray-800 text-white rounded-full">
              <a href="#opportunities">View Current Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
