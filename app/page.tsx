import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const whatsappUrl =
  "https://wa.me/971566002563?text=Hello%20Nassira%2C%20I%27d%20like%20to%20discuss%20a%20property%20enquiry."

export const metadata: Metadata = {
  title: "Nassira Properties | Private Real Estate Advisory",
  description:
    "Nassira Properties provides private real estate advisory in Dubai and Abu Dhabi. Speak directly with Nassira about current opportunities and property enquiries.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nassira Properties | Private Real Estate Advisory",
    description: "Private real estate advisory in Dubai and Abu Dhabi.",
    url: "/",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#171717]">
      <Navbar />

      <section className="relative overflow-hidden bg-black pt-20 text-white">
        <div className="absolute inset-0 top-20">
          <Image
            src="/dubai-skyline-at-sunset-with-golden-sky-and-modern.jpg"
            alt="Dubai skyline"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-5 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6b26d]">Nassira Properties</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
              Private real estate advisory, without the catalogue theatre.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              We focus on direct conversations, current information and carefully selected opportunities in Dubai and Abu Dhabi.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#d6b26d] px-7 text-sm font-semibold text-black transition hover:bg-[#e2c184]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Nassira
              </a>
              <Link
                href="/invest"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/35 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Saadiyat opportunity
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[470px] overflow-hidden rounded-[2rem] bg-[#eeeae2]">
            <Image
              src="/images/nassira-sekkay.png"
              alt="Nassira Sekkay"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a6d2c]">Founder-led advisory</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Speak directly with Nassira.</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-black/65">
              Nassira Sekkay is the founder and CEO of Nassira Properties. Enquiries are handled around the facts that matter: current availability, documentation, viewing options and the next practical step.
            </p>
            <div className="mt-8 border-l-2 border-[#d6b26d] pl-5 text-sm leading-7 text-black/60">
              No invented listings. No guaranteed-return language. No anonymous success stories presented as proof.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1ede5] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a6d2c]">Current focus</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Mandarin Oriental Residences, Saadiyat Cultural District.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/65">
                A residential collection in Abu Dhabi developed by Aldar, managed by Mandarin Oriental and designed by Bjarke Ingels Group. Current availability and commercial terms are confirmed at the time of enquiry.
              </p>
              <Link
                href="/invest"
                className="mt-8 inline-flex items-center gap-3 border-b border-black pb-1 text-sm font-semibold uppercase tracking-[0.12em]"
              >
                Explore Saadiyat
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-black md:min-h-[520px]">
              <Image
                src="/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg"
                alt="Saadiyat Island, Abu Dhabi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a6d2c]">Direct contact</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">A property conversation should start with what is real today.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60">
            Call, email or WhatsApp Nassira Properties for current information. We will not present placeholder inventory as live stock.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="tel:+971566002563" className="rounded-full border border-black px-6 py-3 text-sm font-semibold">+971 56 600 2563</a>
            <a href="mailto:contact@nassiraproperties.com" className="rounded-full border border-black px-6 py-3 text-sm font-semibold">contact@nassiraproperties.com</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
