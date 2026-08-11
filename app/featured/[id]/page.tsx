import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getFeaturedById } from "@/components/featured-data"
import { FeaturedDetailLayout } from "@/components/featured-detail/layout"
import { ViewContentTracker } from "@/components/view-content-tracker"

type PageProps = { params: Promise<{ id: string }> }

export default async function FeaturedDetailPage({ params }: PageProps) {
  const { id: idParam } = await params
  const id = Number(idParam)
  const listing = getFeaturedById(id)
  if (!listing) return notFound()

  const priceValue = listing.price
    ? Number.parseFloat(listing.price.replace(/[^\d.]/g, ""))
    : undefined

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24" />
      <ViewContentTracker
        contentName={listing.title}
        contentCategory={listing.objectType || "Property"}
        contentIds={[String(id)]}
        value={priceValue}
        currency="AED"
      />
      <FeaturedDetailLayout listing={listing} />
      <Footer />
    </main>
  )
}
