"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { PropertySearch } from "@/components/property-search"
import { PropertyCard } from "@/components/property-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

interface Property {
  id: number
  type: string
  status: string
  price: string
  title: string
  location: string
  beds: number
  baths: number
  sqft: number
  image: string
}

export default function BuyPage() {
  const searchParams = useSearchParams()
  const [allProperties, setAllProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [availableAreas, setAvailableAreas] = useState<string[]>([])
  const [availableCities, setAvailableCities] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [initialFilters, setInitialFilters] = useState<{ area?: string; city?: string }>({})
  const propertiesPerPage = 9

  useEffect(() => {
    async function fetchListings() {
      try {
        const response = await fetch("/api/listings")
        const data = await response.json()

        if (data.listings && data.listings.length > 0) {
          setAllProperties(data.listings)
          setFilteredProperties(data.listings)
          setAvailableAreas(data.areas || [])
          setAvailableCities(data.cities || [])
        } else {
          const fallbackData = generateFallbackData()
          setAllProperties(fallbackData)
          setFilteredProperties(fallbackData)
        }
      } catch (error) {
        console.error("Error fetching listings:", error)
        const fallbackData = generateFallbackData()
        setAllProperties(fallbackData)
        setFilteredProperties(fallbackData)
      } finally {
        setLoading(false)
      }
    }

    fetchListings()
  }, [])

  useEffect(() => {
    if (allProperties.length > 0) {
      const areaParam = searchParams.get("area")
      const cityParam = searchParams.get("city")

      if (areaParam || cityParam) {
        const filters = {
          area: areaParam || "",
          city: cityParam || "",
        }
        setInitialFilters(filters)

        let filtered = [...allProperties]

        if (areaParam) {
          filtered = filtered.filter((p) => p.location.split(",")[0].trim() === areaParam)
        }

        if (cityParam) {
          filtered = filtered.filter((p) => p.location.includes(cityParam))
        }

        setFilteredProperties(filtered)
      }
    }
  }, [allProperties, searchParams])

  const handleSearch = (filters: {
    keyword: string
    status: string
    type: string
    area: string
    city: string
    bedrooms: string
  }) => {
    let filtered = [...allProperties]

    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(keyword) ||
          p.location.toLowerCase().includes(keyword) ||
          p.type.toLowerCase().includes(keyword),
      )
    }

    if (filters.status) {
      filtered = filtered.filter((p) => p.status === filters.status)
    }

    if (filters.type) {
      filtered = filtered.filter((p) => p.type === filters.type)
    }

    if (filters.area) {
      filtered = filtered.filter((p) => p.location.split(",")[0].trim() === filters.area)
    }

    if (filters.city) {
      filtered = filtered.filter((p) => p.location.includes(filters.city))
    }

    if (filters.bedrooms) {
      const beds = Number.parseInt(filters.bedrooms)
      if (beds === 4) {
        filtered = filtered.filter((p) => p.beds >= 4)
      } else {
        filtered = filtered.filter((p) => p.beds === beds)
      }
    }

    setFilteredProperties(filtered)
    setCurrentPage(1)
  }

  const handleSort = (sortBy: string) => {
    const sorted = [...filteredProperties]

    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => extractPrice(a.price) - extractPrice(b.price))
        break
      case "price-high":
        sorted.sort((a, b) => extractPrice(b.price) - extractPrice(a.price))
        break
      case "newest":
        sorted.reverse()
        break
      default:
        break
    }

    setFilteredProperties(sorted)
  }

  const extractPrice = (priceStr: string): number => {
    const match = priceStr.match(/[\d,]+/)
    return match ? Number.parseInt(match[0].replace(/,/g, "")) : 0
  }

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)
  const startIndex = (currentPage - 1) * propertiesPerPage
  const endIndex = startIndex + propertiesPerPage
  const currentProperties = filteredProperties.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <a href="/" className="hover:text-foreground transition-colors">
              Home
            </a>
            <span>›</span>
            <span className="text-foreground">Properties</span>
          </div>

          <h1 className="text-4xl font-serif mb-2">Buy & Rent Properties</h1>
          <p className="text-muted-foreground mb-8">
            Explore Nassira Realty Group's exclusive portfolio of luxury properties for sale and rent
          </p>

          <PropertySearch
            onSearch={handleSearch}
            onSort={handleSort}
            areas={availableAreas}
            cities={availableCities}
            initialArea={initialFilters.area}
            initialCity={initialFilters.city}
          />

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading properties...</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  {filteredProperties.length} {filteredProperties.length === 1 ? "Property" : "Properties"}
                </p>
              </div>

              {currentProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {currentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No properties found matching your criteria.</p>
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded ${
                          currentPage === pageNum ? "bg-emerald-600 text-white" : "hover:bg-muted"
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

function generateFallbackData(): Property[] {
  const placeholderImage = "/placeholder.svg?height=400&width=600"

  return [
    {
      id: 1,
      type: "VILLA",
      status: "FOR SALE",
      price: "AED 32,000,000",
      title: "Luxury Villa in Palm Jumeirah",
      location: "Palm Jumeirah, Dubai, United Arab Emirates",
      beds: 5,
      baths: 6,
      sqft: 8500,
      image: placeholderImage,
    },
    {
      id: 2,
      type: "APARTMENT",
      status: "FOR SALE",
      price: "AED 4,500,000",
      title: "Modern Apartment in Downtown Dubai",
      location: "Downtown Dubai, Dubai, United Arab Emirates",
      beds: 2,
      baths: 3,
      sqft: 1800,
      image: placeholderImage,
    },
    {
      id: 3,
      type: "PENTHOUSE",
      status: "FOR SALE",
      price: "AED 18,000,000",
      title: "Exclusive Penthouse with Burj Khalifa View",
      location: "Business Bay, Dubai, United Arab Emirates",
      beds: 4,
      baths: 5,
      sqft: 5200,
      image: placeholderImage,
    },
  ]
}
