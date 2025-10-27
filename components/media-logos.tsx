import Image from "next/image"

export function MediaLogos() {
  const logos = [
    { src: "/images/media-emmies.png", alt: "Emmies du Maroc", width: 120 },
    { src: "/images/media-bazaar.png", alt: "Bazaar", width: 120 },
    { src: "/images/media-arabian-business.png", alt: "Arabian Business", width: 140 },
    { src: "/images/media-starzplay.png", alt: "Starzplay", width: 120 },
    { src: "/images/media-arab-news.png", alt: "Arab News", width: 140 },
  ]

  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-medium text-muted-foreground mb-6 md:mb-8 uppercase tracking-wider">
          Featured On
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={60}
                className="h-6 md:h-8 lg:h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
