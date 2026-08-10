import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FlagshipProperty() {
  return (
    <section className="pt-8 md:pt-20 pb-12 md:pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="relative w-full rounded-lg overflow-hidden aspect-[5/4] md:aspect-[4/3] max-w-4xl mx-auto">
          <div className="relative w-full h-full group">
            <Link href="/invest" className="absolute inset-0 z-20" aria-label="Explore Mandarin Oriental Residences Saadiyat" />
            <Image
              src="/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg"
              alt="Saadiyat Island, Abu Dhabi"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 900px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white z-30 pointer-events-none">
              <p className="text-xs md:text-sm font-medium tracking-wider mb-1 md:mb-2">SAADIYAT CULTURAL DISTRICT · ABU DHABI</p>
              <h2 className="text-xl md:text-3xl font-serif leading-tight text-balance mb-2 md:mb-3">
                Mandarin Oriental Residences
              </h2>
              <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-medium tracking-wide mb-4 md:mb-6">
                <span>1–5 BEDROOM HOMES</span>
                <span>DEVELOPED BY ALDAR</span>
                <span>MANAGED BY MANDARIN ORIENTAL</span>
              </div>
              <div className="pointer-events-auto">
                <Link href="/invest">
                  <Button
                    size="lg"
                    className="w-full bg-white text-black hover:bg-white/90 font-medium tracking-wide py-4 md:py-6 text-sm md:text-base rounded-lg shadow-lg"
                  >
                    VIEW SAADIYAT RESIDENCES
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
