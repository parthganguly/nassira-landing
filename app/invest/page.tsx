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
