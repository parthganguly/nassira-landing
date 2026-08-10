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
          <div className="relative">
            <div className="px-8 py-6">
              <h2 className="font-serif text-4xl md:text-5xl mb-8 text-balance">Meet Nassira Sekkay</h2>

              <div className="space-y-4 mb-8">
                <p className="text-foreground/80 leading-loose text-sm">
                  <span className="tracking-[0.04em]">
                    Nassira Sekkay is the founder and CEO of Nassira Properties, advising clients on residential real estate in Dubai and Abu Dhabi.
                  </span>{" "}
                  Her approach is built around direct communication, current project information and private client service.
                </p>
                <p className="text-foreground/80 leading-loose text-sm">
                  The team begins with the client requirement, then confirms the relevant availability, documentation, commercial terms and viewing options for the property or project being considered.
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
                <Link
                  href="/contact"
                  className="font-serif text-base hover:text-copper transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  Private Enquiry
                </Link>
              </div>
            </div>
          </div>

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
