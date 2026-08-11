import { MARSA_FACTS, MARSA_RELEASE_NOTE, MARSA_SOURCES } from "@/lib/marsa"
import { MarsaWhatsAppButton } from "@/components/marsa/marsa-cta"

/**
 * The masterplan at a glance. Every figure is from the official announcement —
 * nothing here is an estimate, and no price or layout claim appears anywhere.
 */
export function MarsaStatus() {
  return (
    <section id="masterplan" className="px-5 pb-6 md:px-8">
      {/* Presented as a bright, matted sheet on the ivory page rather than a
          full-bleed dark band — brighter, and closer to the site's rhythm. */}
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/[0.06] bg-white px-7 py-14 shadow-sm md:px-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c17a5c]">The masterplan</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight md:text-6xl">
              The scale of what is coming.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
              Every figure below comes from the official announcement.
            </p>

            <dl className="mt-10 border-t border-black/10">
              {MARSA_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 border-b border-black/10 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6"
                >
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-black/40">{fact.label}</dt>
                  <dd>
                    <p className="font-serif text-xl text-[#181714] md:text-2xl">{fact.value}</p>
                    <p className="mt-1 text-sm leading-6 text-black/55">{fact.detail}</p>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-xs leading-6 text-black/35">Source: {MARSA_SOURCES}</p>
          </div>

          <div className="lg:pt-16">
            <div className="rounded-[1.6rem] bg-[#f7f4ef] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c17a5c]">Ahead of the launch</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
                First to know, first to choose.
              </h3>
              <p className="mt-6 text-base leading-8 text-black/62">
                {MARSA_RELEASE_NOTE} Register your interest and you will receive them directly from Nassira, the moment
                they are issued.
              </p>
              <div className="mt-8">
                <MarsaWhatsAppButton position="status" label="Get Launch Information" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
