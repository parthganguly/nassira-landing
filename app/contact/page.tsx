import type { Metadata } from "next"
import { Mail, MessageCircle, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const whatsappUrl =
  "https://wa.me/971566002563?text=Hello%20Nassira%2C%20I%27d%20like%20to%20discuss%20a%20property%20enquiry."

export const metadata: Metadata = {
  title: "Contact Nassira Properties",
  description: "Contact Nassira Properties by WhatsApp, phone or email for current property information in Dubai and Abu Dhabi.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0]">
      <Navbar />
      <section className="px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a6d2c]">Contact</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">Speak with Nassira Properties directly.</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-black/60 md:text-lg">
            For current availability, project materials, viewings or a private property discussion, contact us through the channel you prefer.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl bg-black p-7 text-white transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-6 w-6 text-[#d6b26d]" />
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/45">WhatsApp</p>
              <p className="mt-2 font-serif text-2xl">Message Nassira</p>
            </a>
            <a href="tel:+971566002563" className="rounded-3xl bg-white p-7 transition hover:-translate-y-0.5">
              <Phone className="h-6 w-6 text-[#9a6d2c]" />
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-black/40">Phone</p>
              <p className="mt-2 font-serif text-2xl">+971 56 600 2563</p>
            </a>
            <a href="mailto:contact@nassiraproperties.com" className="rounded-3xl bg-white p-7 transition hover:-translate-y-0.5">
              <Mail className="h-6 w-6 text-[#9a6d2c]" />
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-black/40">Email</p>
              <p className="mt-2 break-all font-serif text-xl">contact@nassiraproperties.com</p>
            </a>
          </div>

          <div className="mt-12 border-t border-black/10 pt-8 text-sm leading-7 text-black/55">
            <p>Al Maidoor Building, Sheikh Zayed Road, Al Quoz 3, Dubai</p>
            <p className="mt-2">Property details, availability and commercial terms are confirmed at the time of enquiry.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
