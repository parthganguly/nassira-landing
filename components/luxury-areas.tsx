"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const locations = [
  {
    name: "Dubai Hills",
    image: "/aerial-view-of-dubai-hills-luxury-golf-course-comm.jpg",
  },
  {
    name: "District One",
    image: "/aerial-view-of-district-one-dubai-luxury-villas-an.jpg",
  },
  {
    name: "Palm Jumeirah",
    image: "/aerial-view-of-palm-jumeirah-dubai-iconic-palm-sha.jpg",
  },
  {
    name: "Emirates Hills",
    image: "/aerial-view-of-emirates-hills-dubai-luxury-gated-c.jpg",
  },
  {
    name: "Downtown Dubai",
    image: "/aerial-view-of-downtown-dubai-skyline-with-burj-kh.jpg",
  },
  {
    name: "Jumeirah Golf Estate",
    image: "/aerial-view-of-jumeirah-golf-estate-dubai-luxury-v.jpg",
  },
  {
    name: "Saadiyat Island",
    image: "/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg",
  },
  {
    name: "Yas Island",
    image: "/aerial-view-of-yas-island-abu-dhabi-waterfront-lux.jpg",
  },
]

const otherAreas = [
  "Jumeirah Beach",
  "Umm Suqeim",
  "Marina & JBR",
  "Arabian Ranches",
  "Al Reem Island",
  "Al Maryah Island",
]

export function LuxuryAreas() {
  return (
    <section className="relative py-24 overflow-hidden bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left content */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 text-balance">UAE&apos;s Most Luxurious Areas</h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Discover the most prestigious neighborhoods in Dubai and Abu Dhabi. From the iconic Palm Jumeirah to the
              exclusive Emirates Hills, explore where luxury meets lifestyle.
            </p>
            <Link
              href="#map"
              className="inline-block border-b-2 border-black pb-1 hover:border-amber-600 transition-colors"
            >
              Launch Map View
            </Link>
          </div>

          {/* Right grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <div
                  key={location.name}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
                >
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: "center 40%" }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl md:text-3xl mb-4">{location.name}</h3>
                    <Link href={`/buy?area=${encodeURIComponent(location.name)}`}>
                      <Button className="bg-white text-black hover:bg-white/90 w-full text-sm py-5">
                        View Properties
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}

              <div className="relative overflow-hidden rounded-3xl shadow-lg bg-white p-6 aspect-[4/3] flex flex-col justify-between">
                <h3 className="font-serif text-2xl md:text-3xl mb-4">Other Areas</h3>
                <ul className="space-y-2 flex-1">
                  {otherAreas.map((area) => (
                    <li key={area}>
                      <Link
                        href={`/buy?area=${encodeURIComponent(area)}`}
                        className="text-neutral-700 hover:text-amber-600 transition-colors flex items-center gap-2 text-sm md:text-base"
                      >
                        <span className="text-amber-600">›</span>
                        {area}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
