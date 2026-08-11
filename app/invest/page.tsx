import type { Metadata } from "next"
import { EB_Garamond } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { InvestHero } from "@/components/invest-hero"
import { WhyInvest } from "@/components/why-invest"
import { FeaturedInvestments } from "@/components/featured-investments"
import { OffPlanInvestments } from "@/components/offplan-investments"
import { PartnerSpotlight } from "@/components/partner-spotlight"
import { InvestCta } from "@/components/invest-cta"
import { Footer } from "@/components/footer"

/** `font-serif` resolves to `var(--font-eb-garamond)`, so the variable has to be on the tree. */
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-eb-garamond",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Invest in UAE Real Estate",
  description:
    "Private access to selected residential opportunities across Dubai and Abu Dhabi, including current Saadiyat Island projects, with Nassira Properties.",
  keywords: [
    "UAE real estate investment",
    "Dubai property investment",
    "Abu Dhabi property investment",
    "off-plan property UAE",
    "Saadiyat Island property",
    "luxury property investment",
  ],
  alternates: {
    canonical: "/invest",
  },
  openGraph: {
    title: "Invest in UAE Real Estate | Nassira Properties",
    description:
      "Private access to selected residential opportunities across Dubai and Abu Dhabi with Nassira Properties.",
    url: "/invest",
    type: "website",
    images: [
      {
        url: "/images/invest-hero-dubai-marina.jpeg",
        width: 1200,
        height: 630,
        alt: "Dubai marina at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest in UAE Real Estate | Nassira Properties",
    description: "Private access to selected residential opportunities across Dubai and Abu Dhabi.",
    images: ["/images/invest-hero-dubai-marina.jpeg"],
  },
}

export default function InvestPage() {
  return (
    <main className={`${ebGaramond.variable} min-h-screen`}>
      <Navbar />
      <InvestHero />
      <WhyInvest />
      <FeaturedInvestments />
      <OffPlanInvestments />
      <PartnerSpotlight />
      <InvestCta />
      <Footer />
    </main>
  )
}
