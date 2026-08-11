import type { Metadata } from "next"
import { EB_Garamond } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MarsaHero } from "@/components/marsa/marsa-hero"
import { MarsaDestination } from "@/components/marsa/marsa-destination"
import { MarsaStatus } from "@/components/marsa/marsa-status"
import { MarsaAdvisor } from "@/components/marsa/marsa-advisor"
import { MarsaOpportunities } from "@/components/marsa/marsa-opportunities"
import { MarsaClosing } from "@/components/marsa/marsa-closing"
import { MarsaStickyCta } from "@/components/marsa/marsa-cta"
import { MARSA_FAQS, MARSA_PATH } from "@/lib/marsa"

/**
 * `font-serif` resolves to `var(--font-eb-garamond)`, so the variable has to be
 * present on the tree for the site's editorial headline face to render.
 */
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-eb-garamond",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Marsa Al Saadiyat | Register Your Interest",
  description:
    "Marsa Al Saadiyat, the new waterfront destination on Saadiyat Island, Abu Dhabi. First home sales expected H2 2026. Register your interest with Nassira Properties for official launch information.",
  keywords: [
    "Marsa Al Saadiyat",
    "Marsa Al Saadiyat launch",
    "Aldar Marsa Al Saadiyat",
    "Marsa Saadiyat property",
    "Saadiyat off plan",
    "Saadiyat new launch",
    "Saadiyat waterfront property",
  ],
  alternates: {
    canonical: MARSA_PATH,
  },
  openGraph: {
    title: "Marsa Al Saadiyat | Nassira Properties",
    description:
      "A new waterfront destination on Saadiyat Island, unveiled July 2026. First home sales expected H2 2026. Register your interest with Nassira Properties.",
    url: MARSA_PATH,
    type: "website",
    images: [
      {
        // Official masterplan render. Dimensions match the source file so the
        // social crop is taken from the real frame, not a declared one.
        url: "/marsa/marsa-masterplan-day.jpg",
        width: 1319,
        height: 821,
        alt: "Aerial masterplan view of Marsa Al Saadiyat, Saadiyat Island, Abu Dhabi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marsa Al Saadiyat | Nassira Properties",
    description: "New waterfront destination on Saadiyat Island. First home sales expected H2 2026.",
    images: ["/marsa/marsa-masterplan-day.jpg"],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: MARSA_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export default function MarsaAlSaadiyatPage() {
  return (
    <main className={`${ebGaramond.variable} min-h-screen bg-[#f7f4ef] text-[#181714]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />
      <MarsaHero />
      <MarsaDestination />
      <MarsaStatus />
      <MarsaAdvisor />
      <MarsaOpportunities />
      <MarsaClosing />
      <Footer />

      {/* Clearance for the mobile conversion bar. */}
      <div className="h-16 md:hidden" />
      <MarsaStickyCta />
    </main>
  )
}
