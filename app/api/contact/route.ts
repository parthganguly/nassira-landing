import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 })
    }

    // Log the contact form submission
    console.log("=".repeat(50))
    console.log("NEW CONTACT FORM SUBMISSION")
    console.log("=".repeat(50))
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Phone:", phone || "Not provided")
    console.log("Message:", message)
    console.log("Timestamp:", new Date().toISOString())
    console.log("=".repeat(50))

    // TODO: Integrate with email service
    // Options:
    // 1. Resend (recommended): https://resend.com
    // 2. SendGrid: https://sendgrid.com
    // 3. Nodemailer with SMTP
    // Example with Resend:
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contact@nassiraproperties.com',
    //   to: 'contact@nassiraproperties.com',
    //   subject: `New contact form submission from ${name}`,
    //   html: `<p>Name: ${name}<br>Email: ${email}<br>Phone: ${phone}<br>Message: ${message}</p>`
    // })

    // Return success response
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 })
  }
}
