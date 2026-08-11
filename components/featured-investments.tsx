import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * The current opportunity set. Only genuine, currently presented projects
 * belong here — no indicative pricing, yields or availability claims.
 */
export function FeaturedInvestments() {
  return (
    <section id="opportunities" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">Current Opportunities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Two Saadiyat Island addresses currently presented by Nassira Properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <div className="relative h-64 md:h-80">
              <Image
                src="/marsa/marsa-masterplan-day.jpg"
                alt="Aerial masterplan view of Marsa Al Saadiyat, Saadiyat Island, Abu Dhabi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[50%_35%]"
              />
              <span className="absolute top-4 left-4 rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c17a5c] shadow-sm">
                Pre-launch · Off-plan
              </span>
            </div>
            <div className="p-7 md:p-9 flex flex-col flex-1">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Saadiyat Island, Abu Dhabi</p>
              <h3 className="font-serif text-2xl md:text-3xl mt-3">Marsa Al Saadiyat</h3>
              <p className="text-gray-600 leading-relaxed mt-4 flex-1">
                A new waterfront destination unveiled in July 2026, with around 8 km of waterfront, around 5.6 km of
                beaches and a marina planned for up to 350 berths. First home sales are expected to commence in H2 2026.
              </p>
              <Link
                href="/marsa-al-saadiyat"
                className="group mt-7 inline-flex items-center gap-3 self-start border-b border-black/25 pb-1 text-sm font-semibold tracking-wide transition-colors hover:border-[#c17a5c] hover:text-[#c17a5c]"
              >
                Explore Marsa
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
              </Link>
            </div>
          </article>

          <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <div className="relative h-64 md:h-80 bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                aria-label="Mandarin Oriental Residences, Saadiyat Cultural District"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/mandarin.mp4" type="video/mp4" />
              </video>
              <span className="absolute top-4 left-4 rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-700 shadow-sm">
                Branded residences
              </span>
            </div>
            <div className="p-7 md:p-9 flex flex-col flex-1">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Saadiyat Cultural District</p>
              <h3 className="font-serif text-2xl md:text-3xl mt-3">Mandarin Oriental Residences</h3>
              <p className="text-gray-600 leading-relaxed mt-4 flex-1">
                A collection of 1 to 5-bedroom homes beside Abu Dhabi&apos;s landmark cultural institutions, developed by
                Aldar with residential service managed by Mandarin Oriental Hotel Group. Current availability and floor
                plans on request.
              </p>
              <Link
                href="/invest/mandarin-oriental"
                className="group mt-7 inline-flex items-center gap-3 self-start border-b border-black/25 pb-1 text-sm font-semibold tracking-wide transition-colors hover:border-[#c17a5c] hover:text-[#c17a5c]"
              >
                View Residences
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
