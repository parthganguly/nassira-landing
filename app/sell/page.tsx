import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SellHero } from "@/components/sell-hero"
import { WhySellWithUs } from "@/components/why-sell-with-us"
import { SellCTA } from "@/components/sell-cta"

export const metadata: Metadata = {
  title: "Sell Your Property",
  description:
    "Sell your luxury property in Dubai with Nassira Properties. Private client outreach, premium presentation and a tailored selling strategy.",
  keywords: [
    "sell property Dubai",
    "luxury property sale",
    "sell villa Dubai",
    "sell apartment Dubai",
    "property marketing Dubai",
  ],
  openGraph: {
    title: "Sell Your Luxury Property in Dubai | Nassira Properties",
    description:
      "Discuss the sale of your luxury property with Nassira Properties and receive a tailored marketing approach.",
    url: "/sell",
  },
}

export default function SellPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SellHero />
      <WhySellWithUs />
      <SellCTA />
      <Footer />
    </main>
  )
}
