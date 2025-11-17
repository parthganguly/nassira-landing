"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertySearchProps {
  onSearch: (filters: {
    keyword: string
    status: string
    type: string
    area: string
    city: string
    bedrooms: string
  }) => void
  onSort: (sortBy: string) => void
  areas?: string[]
  cities?: string[]
  initialArea?: string
  initialCity?: string
}

export function PropertySearch({
  onSearch,
  onSort,
  areas = [],
  cities = [],
  initialArea,
  initialCity,
}: PropertySearchProps) {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if ((initialArea || initialCity) && formRef.current) {
      const formData = new FormData(formRef.current)
      onSearch({
        keyword: formData.get("keyword") as string,
        status: formData.get("status") as string,
        type: formData.get("type") as string,
        area: formData.get("area") as string,
        city: formData.get("city") as string,
        bedrooms: formData.get("bedrooms") as string,
      })
    }
  }, [initialArea, initialCity, onSearch])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchParams = {
      keyword: formData.get("keyword") as string,
      status: formData.get("status") as string,
      type: formData.get("type") as string,
      area: formData.get("area") as string,
      city: formData.get("city") as string,
      bedrooms: formData.get("bedrooms") as string,
    }

    // Build search string for tracking
    const searchParts: string[] = []
    if (searchParams.keyword) searchParts.push(searchParams.keyword)
    if (searchParams.area) searchParts.push(`Area: ${searchParams.area}`)
    if (searchParams.city) searchParts.push(`City: ${searchParams.city}`)
    if (searchParams.type) searchParts.push(`Type: ${searchParams.type}`)
    if (searchParams.status) searchParts.push(`Status: ${searchParams.status}`)
    if (searchParams.bedrooms) searchParts.push(`Bedrooms: ${searchParams.bedrooms}`)
    
    const searchString = searchParts.join(", ")

    // Track Search event
    if (typeof window !== "undefined") {
      // Browser pixel (old account)
      const { fbq } = await import("@/lib/metaPixel")
      fbq("track", "Search", {
        search_string: searchString,
        content_category: "Property Search",
      })

      // Conversions API (new account)
      fetch("/api/track-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventName: "Search",
          searchString,
          contentCategory: "Property Search",
          eventSourceUrl: window.location.href,
        }),
      }).catch((error) => {
        console.error("Error sending Search to Conversions API:", error)
      })
    }

    onSearch(searchParams)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-border p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Search Input */}
        <div className="md:col-span-2 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            name="keyword"
            placeholder="Enter Keyword..."
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Status Dropdown */}
        <div>
          <select
            name="status"
            className="w-full px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="">All Status</option>
            <option value="FOR SALE">For Sale</option>
            <option value="FOR RENT">For Rent</option>
            <option value="FEATURED">Featured</option>
          </select>
        </div>

        {/* Type Dropdown */}
        <div>
          <select
            name="type"
            className="w-full px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="">All Types</option>
            <option value="VILLA">Villa</option>
            <option value="APARTMENT">Apartment</option>
            <option value="STUDIO">Studio</option>
            <option value="PENTHOUSE">Penthouse</option>
            <option value="TOWNHOUSE">Townhouse</option>
          </select>
        </div>

        <div>
          <select
            name="area"
            defaultValue={initialArea || ""}
            className="w-full px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="">All Areas</option>
            {areas.length > 0 ? (
              areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))
            ) : (
              <>
                <option value="Palm Jumeirah">Palm Jumeirah</option>
                <option value="Downtown Dubai">Downtown Dubai</option>
                <option value="Dubai Marina">Dubai Marina</option>
                <option value="Business Bay">Business Bay</option>
              </>
            )}
          </select>
        </div>

        <div>
          <select
            name="city"
            defaultValue={initialCity || ""}
            className="w-full px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="">All Cities</option>
            {cities.length > 0 ? (
              cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))
            ) : (
              <>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Sharjah">Sharjah</option>
                <option value="Ajman">Ajman</option>
              </>
            )}
          </select>
        </div>

        {/* Bedrooms Dropdown */}
        <div>
          <select
            name="bedrooms"
            className="w-full px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="">All Bedrooms</option>
            <option value="0">Studio</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
        <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 w-full sm:w-auto">
          Search
        </Button>

        <div className="flex items-center gap-2 sm:ml-auto w-full sm:w-auto">
          <span className="text-sm text-muted-foreground whitespace-nowrap shrink-0">Sort by:</span>
          <select
            onChange={(e) => onSort(e.target.value)}
            className="flex-1 sm:w-[180px] px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="default">Default Order</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>
    </form>
  )
}
