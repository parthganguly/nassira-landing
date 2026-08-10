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
const HERO_IMAGE = "/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg"

/**
 * The headline here stays aligned with the Search ad headline and the WhatsApp
 * prefill — one offer across all three surfaces.
 */
export function MarsaHero() {
  return (
    <section className="px-4 pb-8 pt-24 md:px-8 md:pb-12 md:pt-28">
      <div className="relative mx-auto min-h-[640px] max-w-[1500px] overflow-hidden rounded-[2rem] bg-black shadow-2xl md:min-h-[760px]">
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
            alt="Aerial view of Saadiyat Island, Abu Dhabi"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,.86)_0%,rgba(8,8,8,.62)_44%,rgba(8,8,8,.22)_72%,rgba(8,8,8,.4)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.62)_0%,transparent_50%)]" />

        {/* Bottom padding clears the stat bar pinned to the base of the card. */}
        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-6 pb-52 pt-16 md:min-h-[760px] md:px-12 md:pb-44 lg:px-16">
          <div className="max-w-3xl text-white">
            <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.22em] text-white/70">
              <span>{MARSA_LOCATION}</span>
              <span className="hidden h-3 w-px bg-white/30 sm:block" />
              <span>Off-plan · Pre-launch</span>
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#e0a78a] md:text-sm">
              {MARSA_PROJECT_NAME}
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.02em] text-white md:text-7xl lg:text-[5.2rem]">
              The next chapter of Saadiyat.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 md:text-xl">
              A new waterfront destination on Saadiyat Island, unveiled in July 2026. First home sales are expected to
              commence in H2 2026.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <MarsaWhatsAppButton position="hero" label="Register Your Interest" />
              <p className="max-w-xs text-xs leading-relaxed text-white/65">
                Launch information is sent directly by Nassira as soon as it is released.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-black/30 px-6 py-6 backdrop-blur-sm md:px-12 lg:px-16">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
            {MARSA_HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/55">{stat.label}</dt>
                <dd className="mt-1 font-serif text-2xl text-white md:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
