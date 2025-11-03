"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Start from 2.png since 1.png was removed
const images = Array.from({ length: 19 }, (_, i) => `/Emirates Hills/${i + 2}.png`)

export function EmiratesCarousel() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
      <Image src={images[current]} alt="Emirates Hills Modern Villa" fill className="object-cover" priority />
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow" aria-label="Previous">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow" aria-label="Next">
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute top-3 right-3 flex gap-1.5">
        {images.map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-white/90" : "w-2 bg-white/50"}`} />
        ))}
      </div>
    </div>
  )
}

export default EmiratesCarousel


