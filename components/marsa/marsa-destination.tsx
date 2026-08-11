import Image from "next/image"

/**
 * Campaign imagery slots. Replace the `src` values with approved Marsa creative
 * as it is produced (public/marsa/waterfront.jpg, marina.jpg, beach.jpg).
 *
 * Until then these stay genuine Abu Dhabi waterfront photography — never a
 * developer render of another project.
 */
const pillars = [
  {
    stat: "≈ 8 km",
    title: "Waterfront",
    copy: "A continuous water's edge forms the spine of the masterplan, from marina to shoreline.",
    src: "/aerial-view-of-yas-island-abu-dhabi-waterfront-lux.jpg",
    alt: "Aerial view of a waterfront district in Abu Dhabi",
  },
  {
    stat: "Up to 350",
    title: "Marina berths planned",
    copy: "A marina sits at the centre of the destination, planned with capacity for up to 350 berths.",
    src: "/yas-island-abu-dhabi-waterfront-luxury-apartments.jpg",
    alt: "Waterfront residences and moorings on the Abu Dhabi coast",
  },
  {
    stat: "≈ 5.6 km",
    title: "Beaches",
    copy: "Beachfront runs through the destination, on the island already known for Saadiyat's shoreline.",
    src: "/saadiyat-island-abu-dhabi-luxury-beachfront-villas.jpg",
    alt: "Beachfront on Saadiyat Island, Abu Dhabi",
  },
]

export function MarsaDestination() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c17a5c]">Why it matters</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight md:text-6xl">
              A waterfront destination, not another address.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-black/62 md:text-lg">
            Saadiyat Island is already the cultural centre of Abu Dhabi. Marsa Al Saadiyat adds a marina-led waterfront
            chapter to it: a destination of approximately 6.4 million sqm with an announced masterplan development value
            of AED 100 billion. For buyers, the significance is simple — this is the beginning of a new address on an
            island where land is finite.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.75rem] border border-black/[0.06] bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Matted frame: the photograph sits inside the card rather than
                  bleeding to its edge, and carries no overlay. */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={pillar.src}
                  alt={pillar.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="px-5 pb-6 pt-7 md:px-6 md:pb-7">
                <p className="font-serif text-3xl leading-none text-[#181714] md:text-4xl">{pillar.stat}</p>
                <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c17a5c]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{pillar.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
