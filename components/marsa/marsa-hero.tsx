import Image from "next/image"
import { MARSA_HERO_STATS, MARSA_LOCATION, MARSA_PROJECT_NAME } from "@/lib/marsa"
import { MarsaWhatsAppButton } from "@/components/marsa/marsa-cta"

/**
 * Hero creative slot.
 *
 * Stills today, film when the campaign video is ready: drop the master at
 * public/marsa/hero.mp4 (16:9, muted, 15–20s loop) and set HERO_VIDEO to it.
 * The still below stays as the poster / no-JS fallback.
 */
const HERO_VIDEO = ""
const HERO_IMAGE = "/marsa/marsa-masterplan-day.jpg"

/**
 * The headline here stays aligned with the Search ad headline and the WhatsApp
 * prefill — one offer across all three surfaces.
 */
export function MarsaHero() {
  return (
    <section className="px-4 pb-4 pt-24 md:px-8 md:pt-28">
      <div className="relative mx-auto min-h-[560px] max-w-[1500px] overflow-hidden rounded-3xl bg-black shadow-xl md:min-h-[700px]">
        {HERO_VIDEO ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={HERO_IMAGE}
            aria-label="Saadiyat Island waterfront"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={HERO_IMAGE}
            alt="Aerial masterplan view of Marsa Al Saadiyat, the new waterfront destination on Saadiyat Island, Abu Dhabi"
            fill
            priority
            sizes="100vw"
            /* Wide frames crop vertically only: 46% drops the empty far horizon
               while keeping the district, the bay curve and the lagoon island.
               Narrow phone frames crop horizontally only: 58% holds the bay and
               island in frame rather than sliding onto open water. */
            className="object-cover object-[58%_46%]"
          />
        )}

        {/* Kept light: enough scrim to hold the type, not a black slab over the photograph. */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,.72)_0%,rgba(12,10,9,.42)_48%,rgba(12,10,9,.08)_78%,rgba(12,10,9,.24)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,10,9,.42)_0%,transparent_46%)]" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 md:min-h-[700px] md:px-12 md:py-24 lg:px-16">
          <div className="max-w-3xl text-white">
            <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.22em] text-white/70">
              <span>{MARSA_LOCATION}</span>
              <span className="hidden h-3 w-px bg-white/30 sm:block" />
              <span>Off-plan · Pre-launch</span>
            </div>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#e0a78a] md:text-sm">
              {MARSA_PROJECT_NAME}
            </p>
            <h1 className="max-w-3xl font-serif text-[3.25rem] font-normal leading-[1.02] tracking-[-0.01em] text-white md:text-7xl lg:text-[5.5rem]">
              The next chapter of Saadiyat.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              A new waterfront destination on Saadiyat Island, unveiled in July 2026. First home sales are expected to
              commence in H2 2026.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <MarsaWhatsAppButton position="hero" label="Register Your Interest" />
              <p className="max-w-xs text-xs leading-relaxed text-white/65">
                Launch information is sent directly by Nassira as soon as it is released.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* The figures sit in a bright card beneath the image rather than as a
          black bar across it — the same rhythm as the home page hero. */}
      <dl className="mx-auto mt-4 grid max-w-[1500px] grid-cols-2 gap-px overflow-hidden rounded-3xl border border-black/[0.07] bg-black/[0.07] shadow-sm md:grid-cols-4">
        {MARSA_HERO_STATS.map((stat) => (
          <div key={stat.label} className="bg-white px-6 py-7 md:px-8 md:py-9">
            <dt className="text-[11px] uppercase tracking-[0.18em] text-black/45">{stat.label}</dt>
            <dd className="mt-2 font-serif text-3xl leading-none text-[#181714] md:text-4xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
