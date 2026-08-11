"use client"

import Image from "next/image"
import { ArrowRight, Building2, Landmark, MapPin, MessageCircle, ShieldCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"

const WHATSAPP_NUMBER = "971566002563"
const WHATSAPP_MESSAGE =
  "Hello Nassira, I’m interested in Mandarin Oriental Residences, Saadiyat Cultural District. Please share the current availability, pricing and floor plans."

function trackWhatsAppClick(position: string) {
  if (typeof window === "undefined") return

  const w = window as typeof window & {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }

  if (typeof w.gtag === "function") {
    w.gtag("event", "whatsapp_click", {
      event_category: "lead",
      event_label: `saadiyat_${position}`,
      value: 1,
    })
  }

  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({
    event: "whatsapp_click",
    lead_source: "saadiyat_invest_landing",
    cta_position: position,
  })
}

function WhatsAppButton({ position, label = "Request Private Details" }: { position: string; label?: string }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(position)}
      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b7925e] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#a68150] focus:outline-none focus:ring-2 focus:ring-[#b7925e]/40 md:px-8 md:py-4 md:text-base"
    >
      <MessageCircle className="h-5 w-5" />
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  )
}

const details = [
  {
    title: "1–5 Bedroom Homes",
    description: "A collection of 1–4 bedroom residences and 5-bedroom penthouses.",
    icon: Building2,
  },
  {
    title: "Saadiyat Cultural District",
    description: "Positioned beside Abu Dhabi’s landmark museums and cultural institutions.",
    icon: Landmark,
  },
  {
    title: "Mandarin Oriental Service",
    description: "Residential service and hospitality managed by Mandarin Oriental Hotel Group.",
    icon: ShieldCheck,
  },
]

const amenities = [
  "Indoor & outdoor pools",
  "Signature spa & wellness studio",
  "Residents’ lounge & private dining",
  "Cinema, game room & kids’ club",
  "Co-working & conference facilities",
  "24/7 security and concierge services",
]

export function SaadiyatInvestLanding() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#181714]">
      <Navbar />

      <section className="px-4 pb-8 pt-24 md:px-8 md:pb-12 md:pt-28">
        <div className="relative mx-auto min-h-[680px] max-w-[1500px] overflow-hidden rounded-[2rem] bg-black shadow-2xl md:min-h-[760px]">
          <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
            <source src="/videos/mandarin.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,.83)_0%,rgba(8,8,8,.62)_42%,rgba(8,8,8,.2)_70%,rgba(8,8,8,.38)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.55)_0%,transparent_45%)]" />

          <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-16 md:min-h-[760px] md:px-12 lg:px-16">
            <div className="max-w-3xl text-white">
              <div className="mb-8 flex flex-wrap items-center gap-5">
                <div className="relative h-16 w-36 md:h-20 md:w-44">
                  <Image src="/images/aldar-logo.png" alt="Aldar" fill className="object-contain brightness-0 invert" />
                </div>
                <span className="h-10 w-px bg-white/35" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">Saadiyat Cultural District</p>
                  <p className="mt-1 text-sm font-medium text-white">Abu Dhabi</p>
                </div>
              </div>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#e2c69d] md:text-sm">
                Mandarin Oriental Residences
              </p>
              <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.02em] text-white md:text-7xl lg:text-[5.4rem]">
                A landmark home in the heart of Saadiyat.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/82 md:text-xl">
                An exclusive collection of 1 to 5-bedroom homes in Saadiyat Cultural District, developed by Aldar and managed by Mandarin Oriental Hotel Group.
              </p>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton position="hero" label="Request Current Availability" />
                <p className="max-w-xs text-xs leading-relaxed text-white/65">
                  Pricing, floor plans and available residences shared privately on request.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10 hidden items-center justify-between border-t border-white/20 pt-5 text-xs uppercase tracking-[0.18em] text-white/60 md:flex md:left-12 md:right-12 lg:left-16 lg:right-16">
            <span>Private client enquiries</span>
            <span>Nassira Properties</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7647]">The Residence</p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight md:text-6xl">
                Luxury framed by culture, design and service.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-black/62 md:text-lg">
              Mandarin Oriental Residences sits within Saadiyat Cultural District with access to institutions including Louvre Abu Dhabi, Zayed National Museum and Guggenheim Abu Dhabi. The residences combine Aldar’s development expertise with Mandarin Oriental’s residential service and architecture by Bjarke Ingels Group.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {details.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[1.6rem] border border-black/8 bg-white p-7 shadow-sm md:p-8">
                  <Icon className="h-7 w-7 text-[#9a7647]" strokeWidth={1.5} />
                  <h3 className="mt-7 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/58">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#171612] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4b17e]">Life at Mandarin Oriental Residences</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight md:text-6xl">Service designed around how you live.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
              Wellness, leisure, private dining and concierge services are integrated into the residential experience, with select à la carte services available on request.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {amenities.map((amenity) => (
              <div key={amenity} className="bg-[#171612] p-6 md:p-7">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#d4b17e]" />
                  <p className="text-sm leading-6 text-white/78">{amenity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[520px] lg:min-h-[660px]">
            <Image src="/images/nassira-sekkay.png" alt="Nassira Sekkay" fill className="object-cover object-top" />
          </div>
          <div className="flex items-center p-8 md:p-12 lg:p-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7647]">Your Private Point of Contact</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Speak directly with Nassira.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/62 md:text-lg">
                Nassira Sekkay is the founder of Nassira Properties and a featured real estate professional on Million Dollar Listing UAE. For Saadiyat enquiries, current availability, floor plans and viewing options can be discussed privately over WhatsApp.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-black/55">
                <span className="rounded-full border border-black/10 px-4 py-2">Million Dollar Listing UAE</span>
                <span className="rounded-full border border-black/10 px-4 py-2">Luxury Real Estate UAE</span>
              </div>

              <div className="mt-9">
                <WhatsAppButton position="nassira" label="WhatsApp Nassira" />
              </div>
              <p className="mt-4 text-sm text-black/45">+971 56 600 2563</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-6 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#d6bd96] px-7 py-14 text-center md:px-14 md:py-20">
          <MapPin className="mx-auto h-7 w-7 text-black/55" strokeWidth={1.5} />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-black/55">Saadiyat Cultural District · Abu Dhabi</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">Request the residences currently available.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/60">
            Receive current availability, floor plans, pricing and private consultation directly from Nassira Properties.
          </p>
          <div className="mt-8">
            <WhatsAppButton position="final" label="Request Details on WhatsApp" />
          </div>
        </div>
      </section>

      <footer className="border-t border-black/8 bg-[#f7f4ef] px-5 py-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Image src="/images/np-black-logo.png" alt="Nassira Properties" width={180} height={54} className="h-9 w-auto" />
            <div className="text-sm text-black/50 md:text-right">
              <p>contact@nassiraproperties.com · +971 56 600 2563</p>
              <p className="mt-1">Dubai & Abu Dhabi, United Arab Emirates</p>
            </div>
          </div>
          <p className="mt-8 max-w-5xl border-t border-black/8 pt-6 text-[11px] leading-5 text-black/38">
            Nassira Properties is an independent real estate brokerage. Mandarin Oriental Residences Saadiyat Cultural District is a development by Aldar and is managed by Mandarin Oriental Hotel Group. Project names and trademarks belong to their respective owners. Availability, pricing and project details are subject to change. Purchasers should obtain independent legal and financial advice before entering into any property transaction.
          </p>
        </div>
      </footer>
    </main>
  )
}
