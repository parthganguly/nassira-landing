"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function QueenOfLuxurySection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="relative">
            <div className="px-8 py-6">
              <h2 className="font-serif text-4xl md:text-5xl mb-8 text-balance">The Queen of Luxury</h2>

              <div className="space-y-4 mb-8">
                <p className="text-foreground/80 leading-loose text-sm">
                  <span className="tracking-[0.04em]">
                    Nassira Sekkay is Dubai's most recognized luxury real estate expert, renowned for her unparalleled
                    expertise in the emirate's most prestigious properties.
                  </span>{" "}
                  As the star of UAE Million Dollar Listing, she has captivated audiences with her insider access to the
                  region's most exclusive homes and her ability to connect discerning buyers with extraordinary
                  properties.
                </p>
                <p className="text-foreground/80 leading-loose text-sm">
                  With an elite network spanning international investors, high-net-worth individuals, and Dubai's most
                  influential developers, Nassira offers her clients privileged access to off-market opportunities and
                  pre-launch investments that define luxury living in the UAE. Her commitment to excellence and deep
                  understanding of the luxury market have established her as the trusted advisor for those seeking the
                  finest properties in Dubai.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <a
                  href="#press"
                  onClick={(e) => handleSmoothScroll(e, "press")}
                  className="font-serif text-base hover:text-copper transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                  In the Press
                </a>
                <Link
                  href="/about"
                  className="font-serif text-base hover:text-copper transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  About Nassira
                </Link>
                <a
                  href="#as-seen-on-tv"
                  onClick={(e) => handleSmoothScroll(e, "as-seen-on-tv")}
                  className="font-serif text-base hover:text-copper transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                  UAE Million Dollar Listing
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-[78%] md:w-full mx-auto mt-3 md:mt-0">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/images/nassira-sekkay.png"
                alt="Nassira Sekkay"
                fill
                className="object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
