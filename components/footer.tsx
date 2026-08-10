import Link from "next/link"

const whatsappUrl =
  "https://wa.me/971566002563?text=Hello%20Nassira%2C%20I%27d%20like%20to%20discuss%20a%20property%20enquiry."

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#111] px-5 py-12 text-white/70 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-end">
        <div>
          <p className="font-serif text-2xl text-white">Nassira Properties</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
            Independent real estate advisory. Property details, availability, specifications and commercial terms
            should be confirmed at the time of enquiry.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/invest" className="transition hover:text-white">Saadiyat</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
          </div>
        </div>

        <div className="text-sm leading-7 md:text-right">
          <p>Al Maidoor Building, Sheikh Zayed Road, Al Quoz 3, Dubai</p>
          <a href="tel:+971566002563" className="block transition hover:text-white">+971 56 600 2563</a>
          <a href="mailto:contact@nassiraproperties.com" className="block transition hover:text-white">
            contact@nassiraproperties.com
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
          >
            WhatsApp Nassira
          </a>
        </div>
      </div>
    </footer>
  )
}
