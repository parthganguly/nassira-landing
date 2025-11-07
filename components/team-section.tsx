import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      name: "Nassira Sekkay",
      role: "CEO",
      image: "/images/team/nassira-sekkay.png",
    },
  ]

  return (
    <section id="team-section" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">Meet the Team</h2>
          <p className="font-serif text-sm md:text-base text-muted-foreground italic mb-2">
            The women redefining luxury and leadership in Dubai.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The visionary women leading Dubai's luxury real estate revolution
          </p>
        </div>

        <div className="flex justify-center max-w-md mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="w-full group relative bg-muted/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text - Reduced padding from p-6 to p-5 */}
              <div className="p-5 text-center">
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-black font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
