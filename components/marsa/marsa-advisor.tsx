import Image from "next/image"
import { MarsaPhoneLink, MarsaWhatsAppButton } from "@/components/marsa/marsa-cta"

export function MarsaAdvisor() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-2">
        {/* The portrait is shot on white, so it is cropped to head-and-shoulders
            rather than letting the empty background dominate the panel. */}
        <div className="relative min-h-[420px] bg-[#efe6dc] lg:min-h-[560px]">
          <Image
            src="/images/nassira-sekkay.png"
            alt="Nassira Sekkay, founder of Nassira Properties"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[50%_16%]"
          />
        </div>

        <div className="flex items-center p-8 md:p-12 lg:p-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c17a5c]">Why Nassira</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              One conversation, not a call centre.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-black/62 md:text-lg">
              Nassira Sekkay is the founder of Nassira Properties and a featured real estate professional on Million
              Dollar Listing UAE. Marsa enquiries are handled personally over WhatsApp — you receive launch information
              as it is released, and an honest answer when something is not yet known.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-black/55">
              <span className="rounded-full border border-black/10 px-4 py-2">Million Dollar Listing UAE</span>
              <span className="rounded-full border border-black/10 px-4 py-2">Dubai &amp; Abu Dhabi</span>
              <span className="rounded-full border border-black/10 px-4 py-2">ORN 34078 · BRN 47146</span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <MarsaWhatsAppButton position="advisor" label="WhatsApp Nassira" />
              <MarsaPhoneLink position="advisor" className="text-black/55" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
