import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy | Nassira Properties",
  description: "Privacy information for visitors to Nassira Properties.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a6d2c]">Privacy</p>
        <h1 className="mt-5 font-serif text-5xl md:text-6xl">Privacy notice</h1>
        <p className="mt-6 text-sm text-black/45">Last updated: 10 August 2026</p>

        <div className="mt-10 space-y-9 text-base leading-8 text-black/65">
          <section>
            <h2 className="font-serif text-2xl text-black">Information you provide</h2>
            <p className="mt-3">
              If you contact Nassira Properties by phone, email or WhatsApp, you may choose to provide information such as your name, contact details, property interests and other information relevant to your enquiry.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-black">Website and advertising data</h2>
            <p className="mt-3">
              This website may use analytics and advertising technologies, including services provided by Google and Meta, to understand website activity, measure advertising performance and improve our marketing. These technologies may process device, browser, interaction and advertising-attribution information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-black">How information is used</h2>
            <p className="mt-3">
              Information is used to respond to enquiries, provide requested property information, arrange follow-up conversations or viewings, operate the website, and measure the effectiveness of our advertising.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-black">Third-party services</h2>
            <p className="mt-3">
              When you choose to contact us through WhatsApp or interact with third-party platforms, those services operate under their own privacy terms. We recommend reviewing the privacy information provided by the service you use.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-black">Contact</h2>
            <p className="mt-3">
              For privacy questions, email <a className="underline underline-offset-4" href="mailto:contact@nassiraproperties.com">contact@nassiraproperties.com</a> or call <a className="underline underline-offset-4" href="tel:+971566002563">+971 56 600 2563</a>.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
