import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { InvestHero } from "@/components/invest-hero"
import { WhyInvest } from "@/components/why-invest"
import { FeaturedInvestments } from "@/components/featured-investments"
import { OffPlanInvestments } from "@/components/offplan-investments"
import { PartnerSpotlight } from "@/components/partner-spotlight"
import { InvestorStories } from "@/components/investor-stories"
import { InvestmentMetrics } from "@/components/investment-metrics"
import { InvestCta } from "@/components/invest-cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Real Estate Investment",
  description: "Invest in Dubai luxury real estate with Nassira Properties. Explore off-plan properties, secure investment opportunities, and maximize returns in Dubai's premium property market.",
  keywords: [
    "real estate investment Dubai",
    "Dubai property investment",
    "off-plan properties Dubai",
    "luxury property investment",
    "property ROI Dubai",
    "investment properties UAE",
  ],
  openGraph: {
    title: "Real Estate Investment in Dubai | Nassira Properties",
    description: "Invest in Dubai luxury real estate with Nassira Properties. Explore off-plan properties and secure investment opportunities.",
    url: "/invest",
  },
}

export default function InvestPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <InvestHero />
      <WhyInvest />
      <FeaturedInvestments />
      <OffPlanInvestments />
      <PartnerSpotlight />
      <InvestorStories />
      <InvestmentMetrics />
      <InvestCta />
      <Footer />
    </main>
  )
}
