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
  title: "About Nassira Properties",
  description:
    "Learn about Nassira Properties and founder Nassira Sekkay, providing private real estate advisory in Dubai and Abu Dhabi.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Nassira Properties",
    description: "Founder-led real estate advisory in Dubai and Abu Dhabi.",
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
