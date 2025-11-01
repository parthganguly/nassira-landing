"use client"

import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Maximize, Phone, Mail, MessageCircle, Expand, Heart, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyCardProps {
  property: {
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
    url?: string
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  const imageSrc =
    property.image && property.image.startsWith("http") ? property.image : "/placeholder.svg?height=400&width=600"

  const isRental = property.status.includes("RENT")
  const badgeColor = isRental ? "bg-blue-600" : "bg-emerald-600"

  // Use Property Finder URL if provided, otherwise construct fallback
  const propertyUrl = property.url || (() => {
    // Fallback URL construction using /en/plp/ format
    const category = isRental ? 'rent' : 'buy';
    const propertySlug = property.type.toLowerCase().replace(/\s+/g, '-');
    // Basic fallback URL (may result in 404, but better than nothing)
    return `https://www.propertyfinder.ae/en/plp/${category}/${propertySlug}-${property.id}.html`;
  })()

  return (
    <Link 
      href={propertyUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-white rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow block"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className={`absolute top-3 left-3 ${badgeColor} text-white text-xs font-medium px-3 py-1 rounded`}>
          {property.status}
        </div>

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <Expand className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Type & Price */}
        <div className="mb-3">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{property.type}</p>
          <p className="text-xl font-semibold text-foreground">{property.price}</p>
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium mb-2 line-clamp-1">{property.title}</h3>

        {/* Location */}
        <p className="text-sm text-muted-foreground mb-4">{property.location}</p>

        {/* Property Details */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
          <div className="flex items-center gap-1.5 text-sm">
            <Bed className="w-4 h-4 text-muted-foreground" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <Bath className="w-4 h-4 text-muted-foreground" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <Maximize className="w-4 h-4 text-muted-foreground" />
            <span>{property.sqft.toLocaleString()} SqFt</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2" onClick={(e) => e.stopPropagation()}>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs bg-transparent"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.location.href = `tel:+971501234567`;
            }}
          >
            <Phone className="w-3 h-3 mr-1" />
            Call
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs bg-transparent"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.location.href = `mailto:info@nassirarealty.com`;
            }}
          >
            <Mail className="w-3 h-3 mr-1" />
            Email
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs bg-transparent"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(`https://wa.me/971501234567`, '_blank');
            }}
          >
            <MessageCircle className="w-3 h-3 mr-1" />
            WhatsApp
          </Button>
        </div>
      </div>
    </Link>
  )
}
