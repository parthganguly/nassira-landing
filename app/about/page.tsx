import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { OurStory } from "@/components/our-story"
import { OurValues } from "@/components/our-values"
import { OurLegacy } from "@/components/our-legacy"
import { TeamSection } from "@/components/team-section"
import { AboutCta } from "@/components/about-cta"

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Nassira Properties - Dubai's premier women-led luxury real estate brokerage. Learn about our mission, values, and commitment to excellence in luxury property services.",
  keywords: [
    "luxury real estate Dubai",
    "women-led real estate",
    "real estate professionals Dubai",
    "property consultants Dubai",
    "luxury property experts",
  ],
  openGraph: {
    title: "About Nassira Properties | Women-Led Luxury Real Estate Dubai",
    description: "Meet Nassira Properties - Dubai's premier women-led luxury real estate brokerage. Learn about our mission, values, and commitment to excellence.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <OurStory />
      <OurValues />
      <OurLegacy />
      <TeamSection />
      <AboutCta />
      <Footer />
    </main>
  )
}
