import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturedListings } from "@/components/featured-listings"
import { FeaturedHero } from "@/components/featured-hero"
import { PartnersLogos } from "@/components/partners-logos"

export const metadata = {
  title: "Featured Luxury Listings | Nassira Properties",
  description:
    "Explore Nassira’s Luxury Collection – a curated selection of featured, ultra‑premium properties across Dubai.",
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


