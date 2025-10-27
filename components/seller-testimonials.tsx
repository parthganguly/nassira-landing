"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Nassira helped me maximize my property's value and break through barriers I didn't even know existed. Her expertise and dedication to empowering women sellers is unmatched.",
    author: "Fatima A.",
    property: "Emirates Hills Villa",
    sale: "AED 45M",
  },
  {
    quote:
      "As a first-time seller, I felt supported every step of the way. Nassira Properties truly champions women in real estate and helped me achieve results beyond my expectations.",
    author: "Sarah M.",
    property: "Palm Jumeirah Penthouse",
    sale: "AED 32M",
  },
  {
    quote:
      "Working with a women-led team made all the difference. They understood my vision and negotiated a record-breaking price while making me feel empowered throughout the entire process.",
    author: "Layla K.",
    property: "Downtown Dubai Apartment",
    sale: "AED 18M",
  },
]

export function SellerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Success Stories</h2>
          <p className="text-muted-foreground text-lg">Hear from our satisfied sellers</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <svg className="w-12 h-12 text-[#c17a5c]/20 absolute top-8 left-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>

            <div className="relative z-10 pt-8">
              <p className="font-serif italic text-2xl md:text-3xl mb-8 text-balance leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="border-t border-border pt-6">
                <p className="font-semibold text-lg mb-1">{testimonials[currentIndex].author}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].property} • Sold for {testimonials[currentIndex].sale}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-[#c17a5c] w-8" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
