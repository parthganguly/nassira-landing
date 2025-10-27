import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      propertyType,
      propertyStatus,
      bedrooms,
      location,
      sqft,
      message,
    } = body

    // Basic validation
    if (!name || !email || !propertyType || !location) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 })
    }

    // Log the valuation request
    console.log("=".repeat(50))
    console.log("NEW VALUATION REQUEST")
    console.log("=".repeat(50))
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Phone:", phone || "Not provided")
    console.log("Property Type:", propertyType)
    console.log("Property Status:", propertyStatus)
    console.log("Bedrooms:", bedrooms)
    console.log("Location:", location)
    console.log("Square Footage:", sqft || "Not provided")
    console.log("Message:", message || "Not provided")
    console.log("Timestamp:", new Date().toISOString())
    console.log("=".repeat(50))

    // TODO: Integrate with email service
    // Options:
    // 1. Resend (recommended): https://resend.com
    // 2. SendGrid: https://sendgrid.com
    // 3. Nodemailer with SMTP
    //
    // Example with Resend:
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contact@nassiraproperties.com',
    //   to: 'contact@nassiraproperties.com',
    //   subject: `New property valuation request from ${name}`,
    //   html: `
    //     <p><strong>Property Valuation Request</strong></p>
    //     <p>Name: ${name}<br>
    //     Email: ${email}<br>
    //     Phone: ${phone}<br>
    //     Property Type: ${propertyType}<br>
    //     Status: ${propertyStatus}<br>
    //     Bedrooms: ${bedrooms}<br>
    //     Location: ${location}<br>
    //     Square Footage: ${sqft}<br>
    //     Message: ${message}</p>
    //   `
    // })

    // Return success response
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Valuation API error:", error)
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 })
  }
}

