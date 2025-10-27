import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SellHero } from "@/components/sell-hero"
import { WhySellWithUs } from "@/components/why-sell-with-us"
import { SellerTestimonials } from "@/components/seller-testimonials"
import { ValuationForm } from "@/components/valuation-form"
import { SellCTA } from "@/components/sell-cta"

export default function SellPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SellHero />
      <WhySellWithUs />
      <SellerTestimonials />
      <ValuationForm />
      <SellCTA />
      <Footer />
    </main>
  )
}
