import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getFeaturedById } from "@/components/featured-data"
import { FeaturedDetailLayout } from "@/components/featured-detail/layout"

type PageProps = { params: { id: string } }

export default function FeaturedDetailPage({ params }: PageProps) {
  const id = Number(params.id)
  const listing = getFeaturedById(id)
  if (!listing) return notFound()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24" />
      <FeaturedDetailLayout listing={listing} />
      <Footer />
    </main>
  )
}


