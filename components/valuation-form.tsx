"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { fbq } from "@/lib/metaPixel"

export function ValuationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)

    try {
      const formData = new FormData(e.currentTarget)
      const formObject = Object.fromEntries(formData.entries())

      const response = await fetch("/api/valuation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      })

      const data = await response.json()

      if (data.ok) {
        setIsSuccess(true)
        // Reset form
        ;(e.target as HTMLFormElement).reset()
        fbq("track", "Lead", {
          content_name: "Sell Valuation Form",
          currency: "AED",
        })
      } else {
        setIsError(true)
      }
    } catch (error) {
      console.error("Valuation form error:", error)
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="valuation-form" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Get a Valuation from Our Women‑Led Team</h2>
            <p className="text-muted-foreground text-lg text-balance">
              Nassira Properties supports female homeowners with confidential, accurate market insights.
            </p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#f5f5f5] p-8 md:p-12 rounded-2xl">
              {isError && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                  Something went wrong. Please try again.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="bg-white border-gray-300 rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="bg-white border-gray-300 rounded-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    className="bg-white border-gray-300 rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="propertyType" className="text-sm font-medium">
                    Property Type *
                  </label>
                  <Select name="propertyType" required>
                    <SelectTrigger className="bg-white border-gray-300 rounded-none">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="mansion">Mansion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Property Location *
                </label>
                <Input
                  id="location"
                  name="location"
                  required
                  placeholder="e.g., Palm Jumeirah, Emirates Hills, Downtown Dubai"
                  className="bg-white border-gray-300 rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Additional Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us more about your property (size, bedrooms, special features, etc.)"
                  className="bg-white border-gray-300 rounded-none resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base rounded-none"
              >
                {isSubmitting ? "Submitting..." : "Get Free Valuation"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          ) : (
            <div className="bg-[#f5f5f5] p-8 md:p-12 rounded-2xl text-center">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-[#c17a5c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-3">Thank You!</h3>
              <p className="text-muted-foreground mb-6">
                We've received your valuation request. Our team will contact you within 24 hours.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                className="bg-black hover:bg-gray-800 text-white py-3 px-8 text-base rounded-none"
              >
                Submit Another Request
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
