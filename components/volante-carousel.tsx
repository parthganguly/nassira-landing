"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/Volante Penthouse/imgi_67_15318619-80a80o.jpg",
  "/Volante Penthouse/imgi_70_15318619-c5349o.jpg",
  "/Volante Penthouse/imgi_78_15318619-5650eo.jpg",
  "/Volante Penthouse/imgi_82_15318619-df458o.jpg",
  "/Volante Penthouse/imgi_86_15318619-12239o.jpg",
  "/Volante Penthouse/imgi_90_15318619-1ac3eo.jpg",
  "/Volante Penthouse/imgi_94_15318619-a019bo.jpg",
  "/Volante Penthouse/imgi_98_15318619-5f7e4o.jpg",
  "/Volante Penthouse/imgi_102_15318619-dc0ffo.jpg",
  "/Volante Penthouse/imgi_126_15318619-80576o.jpg",
  "/Volante Penthouse/imgi_130_15318619-c5b5fo.jpg",
  "/Volante Penthouse/imgi_134_15318619-9999bo.jpg",
]

export function VolanteCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
      <Image src={images[current]} alt="Volante Penthouse" fill className="object-cover" priority />
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
        aria-label="Next"
      >
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

export default VolanteCarousel


