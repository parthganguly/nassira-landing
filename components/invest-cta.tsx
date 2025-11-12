"use client"
import Image from "next/image"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { fbq } from "@/lib/metaPixel"

export function InvestCta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    fbq("track", "Lead", {
      content_name: "Invest CTA Form",
      currency: "AED",
    })
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/invest-cta-network-background.jpeg"
          alt="Sophisticated network connections representing investment partnerships"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white mb-12">
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">Join Nassira's Investment Circle</h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Start your journey to financial freedom with Dubai's premier women-led luxury real estate firm
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl"
        >
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 rounded-full"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 rounded-full"
                required
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 rounded-full"
                required
              />
            </div>
            <div>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full h-12 px-4 rounded-full border border-input bg-background"
                required
              >
                <option value="">Investment Budget</option>
                <option value="1-2m">AED 1M - 2M</option>
                <option value="2-5m">AED 2M - 5M</option>
                <option value="5-10m">AED 5M - 10M</option>
                <option value="10m+">AED 10M+</option>
              </select>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-black hover:bg-gray-800 text-white h-12 rounded-full text-base font-medium"
            >
              Start Investing
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
