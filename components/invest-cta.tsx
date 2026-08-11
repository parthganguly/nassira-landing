import Image from "next/image"

const whatsappUrl = `https://wa.me/971566002563?text=${encodeURIComponent(
  "Hello Nassira, I'd like to discuss current investment opportunities in Dubai and Abu Dhabi.",
)}`

export function InvestCta() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/invest-cta-network-background.jpeg"
          alt="Sophisticated network connections representing investment partnerships"
          fill
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">Speak with Nassira</h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Discuss which current opportunity suits your timing, what is available today, and what is still to be
            released.
          </p>

          <div className="mt-9 flex flex-col items-center gap-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm md:text-base font-semibold text-black shadow-2xl transition-colors hover:bg-white/90"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              WhatsApp Nassira
            </a>
            <a href="tel:+971566002563" className="text-sm text-white/70 transition-colors hover:text-white">
              +971 56 600 2563
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
