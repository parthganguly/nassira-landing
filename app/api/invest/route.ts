import { NextResponse } from "next/server"
import { sendConversionsApiEvent, getUserDataFromRequest } from "@/lib/conversionsApi"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, budget } = body

    // Basic validation
    if (!name || !email || !phone || !budget) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 })
    }

    // Log the investment inquiry
    console.log("=".repeat(50))
    console.log("NEW INVESTMENT INQUIRY")
    console.log("=".repeat(50))
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Phone:", phone)
    console.log("Budget:", budget)
    console.log("Timestamp:", new Date().toISOString())
    console.log("=".repeat(50))

    // Send Conversions API event
    const url = new URL(request.url)
    const userData = getUserDataFromRequest(request, { name, email, phone })
    
    await sendConversionsApiEvent({
      eventName: "Lead",
      eventTime: Math.floor(Date.now() / 1000),
      eventSourceUrl: url.origin + url.pathname,
      actionSource: "website",
      userData,
      customData: {
        content_name: "Invest CTA Form",
        content_category: "Investment Inquiry",
        currency: "AED",
        value: getBudgetValue(budget),
      },
      eventId: `invest_${Date.now()}_${Math.random().toString(36).substring(7)}`,
    })

    // Return success response
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Invest API error:", error)
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 })
  }
}

function getBudgetValue(budget: string): number {
  // Convert budget range to approximate value for tracking
  switch (budget) {
    case "1-2m":
      return 1500000 // 1.5M AED
    case "2-5m":
      return 3500000 // 3.5M AED
    case "5-10m":
      return 7500000 // 7.5M AED
    case "10m+":
      return 15000000 // 15M AED
    default:
      return 0
  }
}

