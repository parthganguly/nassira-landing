import { MARSA_FACTS, MARSA_RELEASE_NOTE, MARSA_SOURCES } from "@/lib/marsa"
import { MarsaWhatsAppButton } from "@/components/marsa/marsa-cta"

/**
 * The masterplan at a glance. Every figure is from the official announcement —
 * nothing here is an estimate, and no price or layout claim appears anywhere.
 */
export function MarsaStatus() {
  return (
    <section id="masterplan" className="bg-[#171612] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d79a79]">The masterplan</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight md:text-6xl">
            The scale of what is coming.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
            Every figure below comes from the official announcement.
          </p>

          <dl className="mt-10 border-t border-white/12">
            {MARSA_FACTS.map((fact) => (
              <div key={fact.label} className="grid gap-1 border-b border-white/12 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/45">{fact.label}</dt>
                <dd>
                  <p className="font-serif text-xl text-white md:text-2xl">{fact.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">{fact.detail}</p>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs leading-6 text-white/38">Source: {MARSA_SOURCES}</p>
        </div>

        <div className="lg:pt-16">
          <div className="rounded-[1.6rem] border border-white/12 bg-white/[0.04] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d79a79]">Ahead of the launch</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              First to know, first to choose.
            </h3>
            <p className="mt-6 text-base leading-8 text-white/70">
              {MARSA_RELEASE_NOTE} Register your interest and you will receive them directly from Nassira, the moment
              they are issued.
            </p>
            <div className="mt-8">
              <MarsaWhatsAppButton position="status" label="Get Launch Information" tone="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
