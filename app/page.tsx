import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { QueenOfLuxurySection } from "@/components/queen-of-luxury-section"
import { MediaLogos } from "@/components/media-logos"
import { FlagshipProperty } from "@/components/flagship-property"
import { ProudPartners } from "@/components/proud-partners"
import { LuxuryAreas } from "@/components/luxury-areas"
import { WhyChooseNassira } from "@/components/why-choose-nassira"
import { MdlShowSection } from "@/components/mdl-show-section"
import { InThePress } from "@/components/in-the-press"
import { ResourcesSection } from "@/components/resources-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QueenOfLuxurySection />
      <MediaLogos />
      <FlagshipProperty />
      <ProudPartners />
      <LuxuryAreas />
      <WhyChooseNassira />
      <MdlShowSection />
      <InThePress />
      <ResourcesSection />
      <Footer />
    </main>
  )
}
