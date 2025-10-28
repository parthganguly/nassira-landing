import { NextResponse } from "next/server"
import { getListingsData } from "@/lib/listings-data"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    // Use static listings data (manually maintained)
    // All listings are stored in lib/listings-data.ts
    // To add more listings, edit lib/listings-data.ts and add to staticListings array
    const staticData = getListingsData()
    console.log(`[API] Returning ${staticData.count} static listings`)
    return NextResponse.json(staticData)

  } catch (error: any) {
    console.error("[API] Error:", error.message)
    return NextResponse.json(getListingsData())
  }
}
