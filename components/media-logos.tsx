"use client"

import Image from "next/image"
import Link from "next/link"

export function MediaLogos() {
  const logos = [
    { 
      src: "/images/media-million-dollar.png", 
      alt: "As Featured on Million Dollar Listing", 
      width: 300, 
      height: 200, 
      isLarge: true,
      link: "#as-seen-on-tv"
    },
    { 
      src: "/images/media-emmies.png", 
      alt: "Emmies du Maroc", 
      width: 120, 
      height: 60,
      link: "https://femmesdumaroc.com/femmes/maroqueens/nassira-sekkay-letoile-marocaine-de-million-dollar-listing-uae"
    },
    { 
      src: "/images/media-bazaar.png", 
      alt: "Bazaar", 
      width: 120, 
      height: 60,
      link: "https://www.harpersbazaararabia.com/culture/people/who-is-nassira-sekkay-million-dollar-listing-uae"
    },
    { 
      src: "/images/media-arabian-business.png", 
      alt: "Arabian Business", 
      width: 140, 
      height: 60,
      link: "https://www.arabianbusiness.com/industries/real-estate/exclusive-million-dollar-listing-uae-confirmed-for-season-2-starzplay"
    },
    { 
      src: "/images/media-starzplay.png", 
      alt: "Starzplay", 
      width: 120, 
      height: 60,
      link: "https://www.starzplay.com"
    },
    { 
      src: "/images/media-arab-news.png", 
      alt: "Arab News", 
      width: 140, 
      height: 60,
      link: "https://www.arabnews.com/node/2373591/lifestyle"
    },
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-8 md:py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-medium text-muted-foreground mb-6 md:mb-8 uppercase tracking-wider">
          Featured On
        </h3>
        
        {/* Animated Logo Carousel */}
        <div className="relative w-full">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedLogos.map((logo, index) => (
                <Link
                  key={index}
                  href={logo.link || "#"}
                  target={logo.link?.startsWith("http") ? "_blank" : undefined}
                  rel={logo.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex items-center cursor-pointer"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height || 60}
                    className={`${logo.isLarge ? "h-16 md:h-24 lg:h-32" : "h-8 md:h-10 lg:h-12"} w-auto drop-shadow-lg`}
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
