import type { Metadata } from "next"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  Check,
  Landmark,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const whatsappNumber = "971566002563"
const whatsappMessage = encodeURIComponent(
  "Hi Nassira, I’m interested in Mandarin Oriental Residences at Saadiyat Cultural District. Please share the current availability, floor plans and details.",
)
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

export const metadata: Metadata = {
  title: "Mandarin Oriental Residences Saadiyat | Nassira Properties",
  description:
    "Explore Mandarin Oriental Residences in Saadiyat Cultural District, Abu Dhabi. Request current availability, floor plans and a private consultation with Nassira Properties.",
  keywords: [
    "Mandarin Oriental Residences Saadiyat",
    "Saadiyat Cultural District property",
    "Saadiyat Island apartments for sale",
    "luxury property Abu Dhabi",
    "Aldar Saadiyat",
    "Mandarin Oriental Abu Dhabi residences",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mandarin Oriental Residences | Saadiyat Cultural District",
    description:
      "A landmark collection of residences in Abu Dhabi’s cultural heart. Request current availability through Nassira Properties.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg",
        width: 1200,
        height: 630,
        alt: "Saadiyat Island, Abu Dhabi",
      },
    ],
  },
}

const projectHighlights = [
  {
    icon: Building2,
    label: "Residences",
    value: "1–5 bedrooms",
    detail: "Residences and penthouses",
  },
  {
    icon: Sparkles,
    label: "Hospitality",
    value: "Mandarin Oriental",
    detail: "Managed residential experience",
  },
  {
    icon: Landmark,
    label: "Architecture",
    value: "BIG",
    detail: "Bjarke Ingels Group",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Saadiyat Cultural District",
    detail: "Abu Dhabi",
  },
]

const amenities = [
  "Signature spa and wellness spaces",
  "Indoor and outdoor swimming pools",
  "Private dining and residents’ lounge",
  "Cinema, games room and library",
  "Fitness and dedicated workout studios",
  "Curated services by Mandarin Oriental",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#171717]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" aria-label="Nassira Properties home" className="flex items-center">
            <Image
              src="/images/np-white-logo.png"
              alt="Nassira Properties"
              width={220}
              height={70}
              className="h-10 w-auto md:h-12"
              priority
            />
          </a>
          <div className="flex items-center gap-5">
            <a
              href="#residences"
              className="hidden text-xs font-medium uppercase tracking-[0.2em] text-white/75 transition hover:text-white md:inline"
            >
              The Residences
            </a>
            <a
              href="#nassira"
              className="hidden text-xs font-medium uppercase tracking-[0.2em] text-white/75 transition hover:text-white md:inline"
            >
              Private Advisory
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#d6b26d] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-[#e2c184] md:px-5"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp Nassira</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative min-h-[92vh] overflow-hidden bg-black pt-20 text-white">
        <div className="absolute inset-0 top-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/videos/mandarin.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-center px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#e3c488] md:text-sm">
              Saadiyat Cultural District · Abu Dhabi
            </p>
            <h1 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.6rem]">
              Mandarin Oriental
              <span className="block text-white/82">Residences</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/82 md:text-xl md:leading-relaxed">
              A landmark residential collection in the cultural heart of Abu Dhabi — developed by Aldar, managed by
              Mandarin Oriental, and designed by Bjarke Ingels Group.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#d6b26d] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-[#e2c184]"
              >
                Request Current Availability
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#residences"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/45 bg-white/5 px-7 text-sm font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Explore the project
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs text-white/65">
              <ShieldCheck className="h-4 w-4 text-[#e3c488]" />
              Private enquiries handled by Nassira Properties
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-black/10 px-5 md:grid-cols-4 md:divide-y-0 md:px-8">
          {projectHighlights.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="px-4 py-7 sm:px-6 md:py-9">
                <Icon className="mb-4 h-5 w-5 text-[#a6792e]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">{item.label}</p>
                <p className="mt-2 font-serif text-lg leading-tight md:text-xl">{item.value}</p>
                <p className="mt-1 text-xs text-black/50">{item.detail}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section id="residences" className="bg-[#f7f5f0] py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#a6792e]">The Residences</p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Live where culture, design and legendary service meet.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-black/65">
              <p>
                Mandarin Oriental Residences occupies a privileged position within Saadiyat Cultural District, with
                the Zayed National Museum, Louvre Abu Dhabi and the wider cultural destination close at hand.
              </p>
              <p>
                The collection spans one- to four-bedroom residences and five-bedroom penthouses, with interiors
                conceived by New York designer Lillian Wu and a residential service experience managed by Mandarin
                Oriental.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 border-b border-black pb-1 text-sm font-semibold uppercase tracking-[0.12em] transition hover:border-[#a6792e] hover:text-[#a6792e]"
            >
              Ask for floor plans & availability
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-black shadow-2xl md:min-h-[650px]">
            <Image
              src="/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg"
              alt="Saadiyat Island and its cultural district in Abu Dhabi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e3c488]">An exceptional address</p>
              <p className="mt-3 max-w-md font-serif text-3xl leading-tight md:text-4xl">
                At the centre of Abu Dhabi’s cultural future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171717] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b26d]">Residential Experience</p>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">Designed for exceptional everyday living.</h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
                Hospitality-level amenities are integrated into the residential experience, with spaces for wellness,
                entertaining, work and quiet retreat.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-start gap-3 border-b border-white/10 py-5">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-[#d6b26d]" />
                  <p className="text-sm leading-6 text-white/82">{amenity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="nassira" className="bg-white py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2rem] bg-[#eeeae2]">
            <Image
              src="/images/nassira-sekkay.png"
              alt="Nassira Sekkay, CEO of Nassira Properties"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 42vw"
            />
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#a6792e]">Private buyer advisory</p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">Speak directly with Nassira.</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-black/65">
              Nassira Sekkay is the founder and CEO of Nassira Properties and a featured realtor on Million Dollar
              Listing UAE. For clients considering Saadiyat, the conversation is kept simple: current availability,
              the right residence, the relevant documentation and a clear route to the next step.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border-l-2 border-[#d6b26d] pl-4">
                <p className="font-serif text-2xl">English</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-black/45">Advisory</p>
              </div>
              <div className="border-l-2 border-[#d6b26d] pl-4">
                <p className="font-serif text-2xl">Arabic</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-black/45">Advisory</p>
              </div>
              <div className="border-l-2 border-[#d6b26d] pl-4">
                <p className="font-serif text-2xl">French</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-black/45">Advisory</p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-black px-7 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#a6792e]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Nassira
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f5f0] py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">Nassira Sekkay featured in</p>
          <div className="mt-9 grid grid-cols-2 items-center gap-7 opacity-65 md:grid-cols-4 md:gap-12">
            <div className="relative h-14">
              <Image src="/images/media-million-dollar.png" alt="Million Dollar Listing UAE" fill className="object-contain" />
            </div>
            <div className="relative h-10">
              <Image src="/images/media-bazaar.png" alt="Harper's Bazaar Arabia" fill className="object-contain" />
            </div>
            <div className="relative h-10">
              <Image src="/images/media-arabian-business.png" alt="Arabian Business" fill className="object-contain" />
            </div>
            <div className="relative h-10">
              <Image src="/images/media-arab-news.png" alt="Arab News" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b26d]">Private Enquiry</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">Request today’s availability.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65">
            Ask for current residence options, floor plans and project materials. No generic property portal — just a
            direct conversation about Mandarin Oriental Residences at Saadiyat Cultural District.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#d6b26d] px-8 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-[#e2c184]"
          >
            Start a WhatsApp conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="bg-[#101010] px-5 py-10 text-white/60 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Image
              src="/images/np-white-logo.png"
              alt="Nassira Properties"
              width={180}
              height={55}
              className="h-9 w-auto opacity-90"
            />
            <p className="mt-4 max-w-xl text-xs leading-6">
              Nassira Properties provides independent real estate advisory. Project details, specifications,
              availability and commercial terms are subject to change by the developer and should be confirmed at the
              time of enquiry. Aldar and Mandarin Oriental are trademarks of their respective owners.
            </p>
          </div>
          <div className="text-xs leading-6 md:text-right">
            <p>Al Maidoor Building, Sheikh Zayed Road, Al Quoz 3, Dubai</p>
            <a href="tel:+971566002563" className="block transition hover:text-white">+971 56 600 2563</a>
            <a href="mailto:contact@nassiraproperties.com" className="block transition hover:text-white">
              contact@nassiraproperties.com
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-3 backdrop-blur-lg md:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#d6b26d] px-5 text-sm font-semibold text-black"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp for current availability
        </a>
      </div>
    </main>
  )
}
