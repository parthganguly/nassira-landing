import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Marsa is pre-launch, so the page keeps Nassira's genuine, currently
 * available Saadiyat opportunity in view for buyers who do not want to wait.
 */
export function MarsaOpportunities() {
  return (
    <section className="px-5 pb-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c17a5c]">Available on Saadiyat now</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            While Marsa waits for its first release.
          </h2>
          <p className="mt-5 text-base leading-8 text-black/62">
            Saadiyat already has homes on the market today. If your timing is nearer than H2 2026, these are worth
            seeing first.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Link
            href="/invest"
            className="group relative min-h-[380px] overflow-hidden rounded-[1.6rem] bg-black shadow-lg md:min-h-[460px]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label="Mandarin Oriental Residences, Saadiyat Cultural District"
              className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-[1.03]"
            >
              <source src="/videos/mandarin.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.82)_0%,rgba(0,0,0,.15)_60%,transparent_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Saadiyat Cultural District
              </p>
              <h3 className="mt-3 max-w-lg font-serif text-3xl leading-tight md:text-4xl">
                Mandarin Oriental Residences
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                1 to 5-bedroom homes developed by Aldar and managed by Mandarin Oriental Hotel Group. Current
                availability and floor plans on request.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                View the residences
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={1.75} />
              </span>
            </div>
          </Link>

          <div className="flex flex-col gap-5">
            <Link
              href="/featured"
              className="group flex flex-1 flex-col justify-between rounded-[1.6rem] border border-black/8 bg-white p-7 shadow-sm transition hover:border-[#c17a5c]/40 md:p-9"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c17a5c]">Featured</p>
                <h3 className="mt-4 font-serif text-2xl leading-tight md:text-3xl">
                  Nassira&rsquo;s current collection
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/58">
                  Selected residences across Dubai and Abu Dhabi, with availability confirmed on enquiry.
                </p>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#c17a5c]">
                Browse featured homes
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={1.75} />
              </span>
            </Link>

            <div className="rounded-[1.6rem] bg-[#efe6dc] p-7 md:p-9">
              <h3 className="font-serif text-2xl leading-tight">Buying off-plan on Saadiyat?</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">
                Ask about how the first release is likely to work, what documentation is needed, and how to be ready
                before launch day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
