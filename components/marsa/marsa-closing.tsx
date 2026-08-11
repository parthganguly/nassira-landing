import { MARSA_DISCLAIMER, MARSA_FAQS, MARSA_IMAGERY_NOTE } from "@/lib/marsa"
import { MarsaPhoneLink, MarsaWhatsAppButton } from "@/components/marsa/marsa-cta"

export function MarsaClosing() {
  return (
    <section className="px-5 pb-24 pt-20 md:px-8 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c17a5c]">Common questions</p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight md:text-5xl">
              What buyers are asking.
            </h2>
          </div>

          <dl className="border-t border-black/10">
            {MARSA_FAQS.map((faq) => (
              <div key={faq.question} className="border-b border-black/10 py-6">
                <dt className="font-serif text-xl md:text-2xl">{faq.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-black/60 md:text-base">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#171612] px-7 py-14 text-center text-white md:px-14 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d79a79]">
            Marsa Al Saadiyat · Register your interest
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Be on the list before the first release.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/62">
            Send one message and Nassira will share launch information, release timing and the first official
            documentation as soon as it is published.
          </p>
          <div className="mt-9 flex flex-col items-center gap-5">
            <MarsaWhatsAppButton position="final" label="Message Nassira on WhatsApp" tone="light" />
            <MarsaPhoneLink position="final" className="text-white/55" />
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-5xl text-[11px] leading-5 text-black/38">
          {MARSA_IMAGERY_NOTE} {MARSA_DISCLAIMER}
        </p>
      </div>
    </section>
  )
}
