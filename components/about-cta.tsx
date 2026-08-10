import Image from "next/image"
import Link from "next/link"

const whatsappUrl =
  "https://wa.me/971566002563?text=Hello%20Nassira%2C%20I%27d%20like%20to%20discuss%20a%20property%20enquiry."

export function AboutCta() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/elegant-dubai-luxury-real-estate-office-interior-w.jpg"
          alt="Nassira Properties"
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
              color: "#fff8f0",
              textShadow: `
                0 2px 4px rgba(0, 0, 0, 0.8),
                0 4px 12px rgba(0, 0, 0, 0.6)
              `,
            }}
          >
            Start a Private Property Conversation
          </h2>

          <p
            className="text-base md:text-lg mb-8 leading-relaxed"
            style={{
              color: "#f5e8d0",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            Tell us what you are considering and we will respond with the most relevant current information and next step.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm text-black hover:bg-white px-6 py-4 md:px-8 md:py-5 text-xs md:text-sm font-semibold tracking-wide shadow-2xl transition-colors"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            WHATSAPP NASSIRA
          </a>
        </div>

        <div className="mt-12 md:mt-16 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto border-t border-white/20 pt-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 mb-2">Call</p>
            <a
              href="tel:+971566002563"
              className="text-sm md:text-base text-white hover:text-[#e0a78a] transition-colors break-all"
            >
              +971 56 600 2563
            </a>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 mb-2">Email</p>
            <a
              href="mailto:contact@nassiraproperties.com"
              className="text-sm md:text-base text-white hover:text-[#e0a78a] transition-colors break-all"
            >
              contact@nassiraproperties.com
            </a>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 mb-2">Office</p>
            <p className="text-sm md:text-base text-white/85 leading-6">
              Office Unit 104, Al Maidoor Building, Al Quoz, Sheikh Zayed Road, Dubai
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-white/55">
          <p>Brokerage ORN 34078 · Nassira Sekkay BRN 47146</p>
          <Link href="/contact" className="mt-2 inline-block underline underline-offset-4 hover:text-white">
            Send an enquiry form
          </Link>
        </div>
      </div>
    </section>
  )
}
