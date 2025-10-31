"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const propertyImages = [
  { src: "/images/property-exterior.png", alt: "Modern villa exterior at night" },
  { src: "/images/property-living.png", alt: "Double-height living room with gold chandelier" },
  { src: "/images/property-bedroom.png", alt: "Master bedroom with ensuite" },
  { src: "/images/property-pool.png", alt: "Aerial view of pool and terrace" },
  { src: "/images/property-bathroom.png", alt: "Designer bathroom with marble and gold" },
]

export function FlagshipProperty() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % propertyImages.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)
  }

  return (
    <section className="pt-8 md:pt-20 pb-12 md:pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="relative w-full rounded-lg overflow-hidden aspect-[5/4] md:aspect-[4/3] max-w-4xl mx-auto">
          <div className="relative w-full h-full group">
            {/* Make entire flagship area clickable to featured */}
            <Link href="/featured" className="absolute inset-0 z-20" aria-label="View featured properties" />
            <div className="relative w-full h-full">
              {propertyImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Navigation Arrows */}
            <button
              onClick={previousImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            <div className="absolute bottom-[160px] md:bottom-[200px] left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {propertyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
              <p className="text-xs md:text-sm font-medium tracking-wider mb-1 md:mb-2">AED 75,000,000</p>
              <h2 className="text-xl md:text-3xl font-serif leading-tight text-balance mb-2 md:mb-3">
                Designer Villa in Pearl Jumeirah
              </h2>
              <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium tracking-wide mb-4 md:mb-6">
                <span>5 BEDS</span>
                <span>5 BATH</span>
                <span>11,251 SQ FT</span>
              </div>
              <Link href="/featured" legacyBehavior>
                <Button
                size="lg"
                className="w-full bg-white text-black hover:bg-white/90 font-medium tracking-wide py-4 md:py-6 text-sm md:text-base rounded-lg shadow-lg"
                >
                  VIEW PROPERTY
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
