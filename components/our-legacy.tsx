import Image from "next/image"

export function OurLegacy() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/dubai-skyline-at-sunset-with-golden-sky-and-modern.jpg"
          alt="Dubai skyline at sunset"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-balance leading-tight"
            style={{
              color: "#ffffff",
              textShadow: `
                0 2px 4px rgba(0, 0, 0, 0.8),
                0 4px 12px rgba(0, 0, 0, 0.6)
              `,
            }}
          >
            Real estate advice should begin with what is current and relevant to the client.
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "#f5e8d0",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            Nassira Properties combines direct communication with project and property information confirmed at the time of enquiry.
          </p>
        </div>
      </div>
    </section>
  )
}
