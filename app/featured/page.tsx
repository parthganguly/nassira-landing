import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturedListings } from "@/components/featured-listings"
import { FeaturedHero } from "@/components/featured-hero"
import { PartnersLogos } from "@/components/partners-logos"

export const metadata: Metadata = {
  title: "Featured Luxury Listings",
  description:
    "Explore Nassira's Luxury Collection – a curated selection of featured, ultra‑premium properties across Dubai. Discover exclusive luxury homes in Palm Jumeirah, Emirates Hills, and Dubai's most prestigious locations.",
  keywords: [
    "featured luxury properties Dubai",
    "exclusive luxury homes Dubai",
    "ultra-premium properties",
    "luxury collection Dubai",
    "Palm Jumeirah luxury homes",
  ],
  openGraph: {
    title: "Featured Luxury Listings | Nassira Properties Dubai",
    description: "Explore Nassira's Luxury Collection – a curated selection of featured, ultra‑premium properties across Dubai.",
    url: "/featured",
  },
}

export default function FeaturedPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <div className="pt-20" />
      <FeaturedListings />
      <FeaturedHero />
      <PartnersLogos />
      <Footer />
    </main>
  )
}


