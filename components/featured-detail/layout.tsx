import Link from "next/link"
import { ArrowLeft, Share2 } from "lucide-react"
import { FeaturedListing } from "@/components/featured-data"
import FeaturedGallery from "@/components/featured-detail/gallery"
import SpecStrip from "@/components/featured-detail/spec-strip"
import DetailGrid from "@/components/featured-detail/detail-grid"
import ContactCard from "@/components/featured-detail/contact-card"

export function FeaturedDetailLayout({ listing }: { listing: FeaturedListing }) {
  const details = [
    { label: "Object type", value: listing.objectType },
    { label: "Location", value: listing.location },
    { label: "Total surface", value: listing.livingAreaSqm || listing.sqft },
    { label: "Plot size", value: listing.plotSqft },
    { label: "Bedrooms", value: typeof listing.beds === "number" ? `${listing.beds}` : undefined },
    { label: "Bathrooms", value: typeof listing.baths === "number" ? `${listing.baths}` : undefined },
  ].filter((item) => item.value)
  const highlights = listing.amenities?.slice(0, 10) ?? []
  const agent = {
    name: "Nassira Properties",
    office: "Private Client Office",
    phone: "+971 56 600 2563",
    email: "contact@nassiraproperties.com",
  }

  return (
    <div className="bg-[#f7f4ef] text-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">
          <Link href="/featured" className="flex items-center gap-2 hover:text-neutral-900">
            <ArrowLeft className="size-4" />
            Back to listings
          </Link>
          <button className="hidden items-center gap-2 hover:text-neutral-900 md:flex">
            <Share2 className="size-4" />
            Share
          </button>
        </div>

        <header className="mt-8 flex flex-col gap-6 border-b border-neutral-200 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">{listing.objectType || "Residence"}</p>
            <h1 className="mt-3 font-serif text-[2.4rem] leading-tight md:text-5xl">{listing.title}</h1>
            {listing.location && (
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-neutral-500">{listing.location}</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">Asking price</p>
            <p className="mt-3 text-3xl font-semibold md:text-4xl">{listing.price}</p>
          </div>
        </header>

        <section className="mt-6">
          <SpecStrip beds={listing.beds} baths={listing.baths} size={listing.sqft} plot={listing.plotSqft} />
        </section>

        <section className="mt-8">
          <FeaturedGallery images={listing.gallery || [listing.image]} alt={listing.title} />
        </section>

        <section className="mt-12 grid gap-10 lg:grid-cols-[1.7fr_1fr]">
          <div className="space-y-10">
            <article className="rounded-[32px] border border-neutral-200 bg-white/80 px-8 py-8 shadow-sm">
              <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500">Description</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700">
                {listing.description ||
                  "Refined residence offering bespoke interiors, flowing entertaining spaces, and curated amenities set within one of Dubai’s most prestigious enclaves."}
              </p>
            </article>

            {highlights.length > 0 && (
              <article className="rounded-[32px] border border-neutral-200 bg-white/80 px-8 py-8 shadow-sm">
                <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500">Features</h2>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium text-neutral-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </div>
          <div className="space-y-6">
            <ContactCard brochurePath={listing.brochurePath} />
            <aside className="rounded-[32px] border border-neutral-200 bg-white/80 px-6 py-6 text-sm shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">Brokerage</p>
              <h3 className="mt-3 font-serif text-2xl text-neutral-900">{agent.name}</h3>
              <p className="mt-2 text-neutral-600">{agent.office}</p>
              <div className="mt-4 space-y-2 text-neutral-700">
                <a href={`tel:${agent.phone.replace(/\s+/g, "")}`} className="block hover:text-neutral-900">
                  {agent.phone}
                </a>
                <a href={`mailto:${agent.email}`} className="block hover:text-neutral-900">
                  {agent.email}
                </a>
              </div>
            </aside>
          </div>
        </section>
      </div>

      <section className="bg-[#f0ede8]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <DetailGrid details={details} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-[32px] border border-neutral-200 bg-white/80 px-8 py-8 shadow-sm">
          <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500">Energy efficiency</h2>
          <div className="mt-6 grid gap-6 text-sm text-neutral-700 sm:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Energy rating</p>
              <p className="mt-2 font-semibold text-neutral-900">In progress</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Heating</p>
              <p className="mt-2 font-semibold text-neutral-900">Underfloor heating, VRF cooling</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturedDetailLayout
