import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SellHero } from "@/components/sell-hero"
import { WhySellWithUs } from "@/components/why-sell-with-us"
import { SellerTestimonials } from "@/components/seller-testimonials"
import { ValuationForm } from "@/components/valuation-form"
import { SellCTA } from "@/components/sell-cta"

export const metadata: Metadata = {
  title: "Sell Your Property",
  description: "Sell your luxury property in Dubai with Nassira Properties. Expert valuation, premium marketing, and personalized service to maximize your property's value. Get a free valuation today.",
  keywords: [
    "sell property Dubai",
    "luxury property sale",
    "property valuation Dubai",
    "sell villa Dubai",
    "sell apartment Dubai",
    "property marketing Dubai",
  ],
  openGraph: {
    title: "Sell Your Luxury Property in Dubai | Nassira Properties",
    description: "Sell your luxury property in Dubai with Nassira Properties. Expert valuation, premium marketing, and personalized service to maximize your property's value.",
    url: "/sell",
  },
}

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
