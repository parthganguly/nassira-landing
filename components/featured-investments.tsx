"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const investments = [
  {
    id: 1,
    image: "/images/marina-bay-residences.jpg",
    name: "Marina Bay Residences",
    roi: "18%",
    startingPrice: "AED 2.5M",
    location: "Dubai Marina",
  },
  {
    id: 2,
    image: "/images/downtown-heights.jpg",
    name: "Downtown Heights",
    roi: "22%",
    startingPrice: "AED 3.2M",
    location: "Downtown Dubai",
  },
  {
    id: 3,
    image: "/images/palm-luxury-villas.jpg",
    name: "Palm Luxury Villas",
    roi: "15%",
    startingPrice: "AED 8.5M",
    location: "Palm Jumeirah",
  },
  {
    id: 4,
    image: "/images/business-bay-tower.jpg",
    name: "Business Bay Tower",
    roi: "20%",
    startingPrice: "AED 1.8M",
    location: "Business Bay",
  },
]

export function FeaturedInvestments() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">Featured Investment Opportunities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our curated selection of high-yield investment properties across Dubai's premier locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investments.map((investment) => (
            <div
              key={investment.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={investment.image || "/placeholder.svg"}
                  alt={investment.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl">{investment.name}</h3>
                <p className="text-sm text-gray-600">{investment.location}</p>
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <p className="text-xs text-gray-500">Est. ROI</p>
                    <p className="text-lg font-semibold text-black">{investment.roi}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-sm font-semibold text-black">{investment.startingPrice}</p>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-black hover:bg-gray-800 text-white rounded-full">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
