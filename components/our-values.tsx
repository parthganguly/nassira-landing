export function OurValues() {
  const values = [
    {
      title: "Empowerment",
      description: "Championing women to lead and succeed in real estate.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "Building trust through transparency and care.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description: "Delivering world-class service defined by grace and precision.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">Our Values</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every decision we make
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#d8b47f]/20 hover:border-[#d8b47f]/40"
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d8b47f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="relative text-black mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                  {/* Gold shimmer overlay on hover */}
                  <div className="absolute inset-0 rounded-full bg-[#d6b26d] opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-300" />
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{value.title}</h3>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
