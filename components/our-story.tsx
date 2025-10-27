import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/uae-women-team.png"
              alt="Professional UAE women in luxury real estate"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">Our Story</h2>

            <div className="space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Nassira Properties was born from a vision to transform UAE's luxury real estate landscape through the
                lens of female leadership and emotional intelligence.
              </p>

              <p>
                As UAE's first women-led luxury real estate company, we bring a unique perspective to property dealings
                — one that values elegance, intuition, and genuine human connection alongside market expertise.
              </p>

              <p className="font-medium text-foreground italic">"Luxury is not just seen — it's felt."</p>
              <p className="text-sm text-muted-foreground">— Nassira Sekkay, Founder</p>

              <p>
                We believe that the future of real estate is feminine, sophisticated, and deeply rooted in trust. Every
                property we represent, every client we serve, and every deal we close reflects our commitment to
                redefining what luxury means in the UAE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
