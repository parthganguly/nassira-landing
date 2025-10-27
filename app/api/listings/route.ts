import { NextResponse } from "next/server"
import { getListingsData } from "@/lib/listings-data"
import * as cheerio from "cheerio"

export const dynamic = "force-dynamic"

// In-memory cache with TTL of 1 hour
let cachedListings: any = null
let cacheTime = 0
const CACHE_TTL = 3600000 // 1 hour in milliseconds

async function fetchPropertyFinder() {
  try {
    console.log("[API] Fetching from PropertyFinder...")
    
    const response = await fetch("https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824", {
    headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://www.google.com/",
    },
      next: { revalidate: 3600 }
  })

  if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
  }

    const html = await response.text()
  const $ = cheerio.load(html)
  const listings: any[] = []
    const areas = new Set<string>()
    const cities = new Set<string>()

    // Try different selectors to find property cards
    const propertySelectors = [
      '[data-testid="property-card"]',
      'article[class*="property"]',
      '.property-item',
      '[class*="PropertyCard"]',
      'a[href*="/property/"]',
    ]

    propertySelectors.forEach(selector => {
      $(selector).each((i, el) => {
        const $el = $(el)
        
        // Find link to property
        const $link = $el.is('a') ? $el : $el.find('a').first()
        if (!$link.length) return

        // Get basic info
        const text = $el.text()
        const titleMatch = text.match(/(.+?)(?:for sale|for rent|AED|USD|in |\d+ bed)/i)
        const title = titleMatch ? titleMatch[1].trim() : text.slice(0, 50).trim() || 'Luxury Property'

        if (title === 'Luxury Property' && text.length < 20) return

        // Get price
        const priceMatch = text.match(/(AED|USD)\s*([\d,]+)/i)
        const price = priceMatch ? `${priceMatch[1]} ${priceMatch[2]}` : 'Price on Request'

        // Get location
        const locMatch = text.match(/in\s+([^,\n]+(?:,\s*[^,\n]+)?)/i)
        const location = locMatch ? locMatch[1].trim() : 'Dubai, UAE'

        // Get beds/baths
        const bedMatch = text.match(/(\d+)\s*bed/i)
        const bathMatch = text.match(/(\d+)\s*bath/i)
        const beds = bedMatch ? parseInt(bedMatch[1]) : 0
        const baths = bathMatch ? parseInt(bathMatch[1]) : 0

        // Get type
        const typeMatch = text.match(/(villa|apartment|penthouse|townhouse|studio)/i)
        const type = typeMatch ? typeMatch[1].toUpperCase() : 'PROPERTY'

        // Get status
        const status = text.toLowerCase().includes('rent') || text.toLowerCase().includes('lease') 
          ? 'FOR RENT' : 'FOR SALE'

        // Get image
        const img = $el.find('img').first()
        const image = img.attr('src') || img.attr('data-src') || img.attr('data-lazy-src') || '/placeholder.svg?height=400&width=600'

        // Parse location for areas/cities
        const locParts = location.split(',').map(p => p.trim())
        if (locParts[0]) areas.add(locParts[0])
        if (locParts[1]) cities.add(locParts[1])

      listings.push({
          id: listings.length + 1,
          title,
        price,
        location,
        beds,
        baths,
          sqft: 0,
          type,
          status,
          image: image.startsWith('http') ? image : '/placeholder.svg?height=400&width=600'
        })
      })
    })

    // Deduplicate by title
    const unique = listings.filter((v, i, a) => a.findIndex(t => t.title === v.title) === i)

    console.log(`[API] Found ${unique.length} unique listings`)

    return {
      listings: unique,
      areas: Array.from(areas).sort(),
      cities: Array.from(cities).sort(),
      count: unique.length
    }
  } catch (error) {
    console.error("[API] PropertyFinder fetch failed:", error)
    return null
  }
}

export async function GET() {
  try {
    const now = Date.now()

    // Return cached data if available and fresh
    if (cachedListings && (now - cacheTime) < CACHE_TTL) {
      console.log("[API] Returning cached listings")
      return NextResponse.json(cachedListings)
    }

    // Try to fetch all pages
    console.log("[API] Fetching all pages from PropertyFinder...")
    const allListings: any[] = []
    const allAreas = new Set<string>()
    const allCities = new Set<string>()

    for (let page = 1; page <= 10; page++) {
      try {
        const url = page === 1 
          ? "https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824"
          : `https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824?page=${page}`
        
        console.log(`[API] Fetching page ${page}...`)
        
        const response = await fetch(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
            "Referer": "https://www.google.com/",
          },
          next: { revalidate: 3600 }
        })

        if (!response.ok) {
          console.log(`[API] Page ${page} returned ${response.status}`)
          break
        }

        const html = await response.text()
        const $ = cheerio.load(html)
        
        let pageListings = 0

        // Find all property cards
        const propertySelectors = [
          '[data-testid="property-card"]',
          'article[class*="property"]',
          '.property-item',
          '[class*="PropertyCard"]',
          'a[href*="/property/"]',
        ]

        propertySelectors.forEach(selector => {
          $(selector).each((i, el) => {
            const $el = $(el)
            
            const $link = $el.is('a') ? $el : $el.find('a').first()
            if (!$link.length) return

            const text = $el.text()
            const titleMatch = text.match(/(.+?)(?:for sale|for rent|AED|USD|in |\d+ bed)/i)
            const title = titleMatch ? titleMatch[1].trim() : text.slice(0, 50).trim() || 'Luxury Property'

            if (title === 'Luxury Property' && text.length < 20) return

            // Check for duplicates
            if (allListings.some(l => l.title === title)) return

            const priceMatch = text.match(/(AED|USD)\s*([\d,]+)/i)
            const price = priceMatch ? `${priceMatch[1]} ${priceMatch[2]}` : 'Price on Request'

            const locMatch = text.match(/in\s+([^,\n]+(?:,\s*[^,\n]+)?)/i)
            const location = locMatch ? locMatch[1].trim() : 'Dubai, UAE'

            const bedMatch = text.match(/(\d+)\s*bed/i)
            const bathMatch = text.match(/(\d+)\s*bath/i)
            const beds = bedMatch ? parseInt(bedMatch[1]) : 0
            const baths = bathMatch ? parseInt(bathMatch[1]) : 0

            const typeMatch = text.match(/(villa|apartment|penthouse|townhouse|studio)/i)
            const type = typeMatch ? typeMatch[1].toUpperCase() : 'PROPERTY'

            const status = text.toLowerCase().includes('rent') || text.toLowerCase().includes('lease') 
              ? 'FOR RENT' : 'FOR SALE'

            const img = $el.find('img').first()
            const image = img.attr('src') || img.attr('data-src') || img.attr('data-lazy-src') || '/placeholder.svg?height=400&width=600'

            const locParts = location.split(',').map(p => p.trim())
            if (locParts[0]) allAreas.add(locParts[0])
            if (locParts[1]) allCities.add(locParts[1])

            allListings.push({
              id: allListings.length + 1,
              title,
              price,
              location,
              beds,
              baths,
              sqft: 0,
              type,
              status,
              image: image.startsWith('http') ? image : '/placeholder.svg?height=400&width=600'
            })

            pageListings++
          })
        })

        console.log(`[API] Page ${page}: ${pageListings} listings`)

        if (pageListings === 0 && page > 1) {
          console.log(`[API] No more listings on page ${page}, stopping`)
          break
        }

        // Small delay between pages
        if (page < 10 && pageListings > 0) {
          await new Promise(resolve => setTimeout(resolve, 1000))
        }

      } catch (err) {
        console.error(`[API] Error on page ${page}:`, err)
        break
      }
    }

    if (allListings.length > 10) {
      const data = {
        listings: allListings,
        areas: Array.from(allAreas).sort(),
        cities: Array.from(allCities).sort(),
        count: allListings.length
      }
      
      cachedListings = data
      cacheTime = now
      console.log(`[API] Successfully fetched ${data.count} listings`)
      return NextResponse.json(data)
    }

    // Fallback to static data
    console.log("[API] Using static listings data")
    const staticData = getListingsData()
    cachedListings = staticData
    cacheTime = now
    return NextResponse.json(staticData)

  } catch (error: any) {
    console.error("[API] Error:", error.message)
    return NextResponse.json(getListingsData())
  }
}
