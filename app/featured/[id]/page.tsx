import Image from "next/image"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getFeaturedById } from "@/components/featured-data"
import { VolanteCarousel } from "@/components/volante-carousel"
import { DesignerCarousel } from "@/components/designer-carousel"
import { EmiratesCarousel } from "@/components/emirates-carousel"
import { AlBarariCarousel } from "@/components/al-barari-carousel"

type PageProps = { params: { id: string } }

export default function FeaturedDetailPage({ params }: PageProps) {
  const id = Number(params.id)
  const listing = getFeaturedById(id)
  if (!listing) return notFound()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24" />

      {/* Hero / Carousel for Volante */}
      <section className="max-w-7xl mx-auto px-4">
        {id === 3 ? (
          <VolanteCarousel />
        ) : id === 1 ? (
          <EmiratesCarousel />
        ) : id === 4 ? (
          <AlBarariCarousel />
        ) : id === 5 ? (
          <DesignerCarousel />
        ) : (
          <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden shadow">
            <Image src={listing.image} alt={listing.title} fill className="object-cover" />
          </div>
        )}
        <div className="flex items-center justify-between py-4">
          <h1 className="font-serif text-2xl md:text-4xl">{listing.title}</h1>
          <p className="text-xl md:text-2xl font-semibold">{listing.price}</p>
        </div>
      </section>

      {/* Overview (single row to avoid tall right column forcing empty space) */}
      <section className="max-w-7xl mx-auto px-4 pb-8 md:pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl border p-3 md:p-4 auto-rows-min items-start">
          <div>
            <p className="text-xs text-muted-foreground">Property Type</p>
            <p className="font-medium">{id === 3 ? "Penthouse" : "Villa"}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Bedrooms</p>
            <p className="font-medium">{listing.beds ?? "-"}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Bathrooms</p>
            <p className="font-medium">{listing.baths ?? "-"}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Size</p>
            <p className="font-medium">{listing.sqft}</p>
          </div>
        </div>
      </section>

      {/* Description + Documents */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-[2fr_1fr] gap-8 pb-12">
        <div className="rounded-xl border p-6">
          <h3 className="font-medium mb-4">Description</h3>
          <div className="text-sm text-muted-foreground leading-7 space-y-4">
            <p>
              This {id === 3 ? "Volante penthouse" : "residence"} is crafted for elevated living with generous
              entertaining spaces, designer finishes, and sweeping skyline views. Floor‑to‑ceiling glazing floods the
              great room with natural light, while the chef’s kitchen pairs premium appliances with bespoke cabinetry
              and a large preparation island for effortless hosting.
            </p>
            <p>
              The private bedroom wing creates a tranquil retreat with a serene primary suite featuring a spa‑style
              bath, dual vanities, soaking tub and oversized walk‑in wardrobe. Secondary bedrooms offer en‑suite baths
              and thoughtfully planned storage. Discreet service areas allow staff circulation away from the main
              entertaining spaces to preserve comfort and privacy.
            </p>
            <p>
              Residents of Volante enjoy 24/7 concierge, secure parking and access to world‑class facilities including
              a waterfront lounge, fitness center and temperature‑controlled pool deck. Positioned along the canal in
              Business Bay, the home provides immediate connection to Downtown and DIFC while maintaining the quiet
              elegance of a private address.
            </p>
            <p>
              For a complete information pack or to arrange a confidential viewing, submit a tour request and our team
              will assist you promptly.
            </p>
          </div>
        </div>
        <aside className="rounded-xl border p-6 space-y-4">
          <div>
            <h3 className="font-medium mb-3">Request Info</h3>
            <form className="grid gap-3">
              <input className="border rounded px-3 py-2" placeholder="Name" />
              <input className="border rounded px-3 py-2" placeholder="Phone" />
              <input className="border rounded px-3 py-2" placeholder="Email" />
              <textarea className="border rounded px-3 py-2" placeholder="Your message" rows={4} />
              <button className="bg-black text-white rounded px-4 py-2">Submit a Tour Request</button>
            </form>
          </div>
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white w-full">
            Download Brochure
          </a>
        </aside>
      </section>

      {/* Details table */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="rounded-xl border overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="font-medium">Details</h3>
          </div>
          <div className="p-0">
            <div className="m-6 rounded-lg bg-muted/30 p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Property ID</p>
                <p className="font-medium">{id === 5 ? "PJ-05" : "HZ-06"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Price</p>
                <p className="font-medium">{listing.price}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Property Size</p>
                <p className="font-medium">{listing.sqft}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Bedrooms</p>
                <p className="font-medium">{listing.beds ?? "-"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Bathrooms</p>
                <p className="font-medium">{listing.baths ?? "-"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Garage</p>
                <p className="font-medium">1</p>
              </div>
              <div>
                <p className="text-muted-foreground">Garage Size</p>
                <p className="font-medium">205 Sq Ft</p>
              </div>
              <div>
                <p className="text-muted-foreground">Property Type</p>
                <p className="font-medium">{id === 3 ? "Penthouse" : "Villa"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Property Status</p>
                <p className="font-medium">For Sale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional details */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="rounded-xl border p-6 text-sm grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <p className="text-muted-foreground">Deposit</p>
            <p className="font-medium">20%</p>
          </div>
          <div>
            <p className="text-muted-foreground">Furnished</p>
            <p className="font-medium">No</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-xl border p-6">
          <h3 className="font-medium mb-4">Features</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <span>Air Conditioning</span>
            <span>Sauna</span>
            <span>Window Coverings</span>
            <span>Laundry</span>
            <span>Swimming Pool</span>
            <span>WiFi</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


