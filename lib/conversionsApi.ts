/**
 * Facebook Conversions API Utility
 * Sends server-side events to Facebook Conversions API
 * 
 * Pixel ID: 1251459406816726 (new account)
 * Access Token: From FACEBOOK_CONVERSIONS_API_ACCESS_TOKEN env variable
 */

const CONVERSIONS_API_URL = "https://graph.facebook.com/v21.0/1251459406816726/events"
const PIXEL_ID = "1251459406816726"

export interface ConversionsApiEvent {
  eventName: string
  eventTime: number
  eventSourceUrl?: string
  actionSource?: "website" | "email" | "app" | "phone_call" | "chat" | "physical_store" | "system_generated" | "other"
  userData?: {
    email?: string
    phone?: string
    firstName?: string
    lastName?: string
    gender?: string
    city?: string
    country?: string
    clientIpAddress?: string
    clientUserAgent?: string
    fbc?: string // Facebook Click ID
    fbp?: string // Facebook Browser ID
  }
  customData?: {
    content_name?: string
    content_category?: string
    content_ids?: string[]
    currency?: string
    value?: number
    search_string?: string
    [key: string]: unknown
  }
  eventId?: string
}

/**
 * Hash email/phone for privacy (SHA-256)
 */
async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder()
  const dataBuffer = encoder.encode(data.toLowerCase().trim())
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

/**
 * Send event to Facebook Conversions API
 */
export async function sendConversionsApiEvent(event: ConversionsApiEvent): Promise<boolean> {
  const accessToken = process.env.FACEBOOK_CONVERSIONS_API_ACCESS_TOKEN

  if (!accessToken) {
    console.warn("FACEBOOK_CONVERSIONS_API_ACCESS_TOKEN not set, skipping Conversions API event")
    return false
  }

  try {
    // Prepare user data with hashing
    const userData: Record<string, string> = {}

    if (event.userData?.email) {
      userData.em = await hashData(event.userData.email)
    }
    if (event.userData?.phone) {
      // Remove non-digits and hash
      const phone = event.userData.phone.replace(/\D/g, "")
      if (phone) {
        userData.ph = await hashData(phone)
      }
    }
    if (event.userData?.firstName) {
      userData.fn = await hashData(event.userData.firstName)
    }
    if (event.userData?.lastName) {
      userData.ln = await hashData(event.userData.lastName)
    }
    if (event.userData?.gender) {
      userData.ge = await hashData(event.userData.gender)
    }
    if (event.userData?.city) {
      userData.ct = await hashData(event.userData.city)
    }
    if (event.userData?.country) {
      userData.country = await hashData(event.userData.country)
    }

    // Non-hashed fields
    if (event.userData?.clientIpAddress) {
      userData.client_ip_address = event.userData.clientIpAddress
    }
    if (event.userData?.clientUserAgent) {
      userData.client_user_agent = event.userData.clientUserAgent
    }
    if (event.userData?.fbc) {
      userData.fbc = event.userData.fbc
    }
    if (event.userData?.fbp) {
      userData.fbp = event.userData.fbp
    }

    // Build the event payload
    const eventData = {
      event_name: event.eventName,
      event_time: event.eventTime || Math.floor(Date.now() / 1000),
      event_source_url: event.eventSourceUrl,
      action_source: event.actionSource || "website",
      user_data: userData,
      custom_data: event.customData || {},
    }

    if (event.eventId) {
      eventData.event_id = event.eventId
    }

    const payload = {
      data: [eventData],
      access_token: accessToken,
    }

    // Send to Conversions API
    const response = await fetch(CONVERSIONS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Conversions API error:", response.status, errorText)
      return false
    }

    const result = await response.json()
    
    if (result.events_received && result.events_received > 0) {
      console.log("Conversions API event sent successfully:", event.eventName)
      return true
    }

    console.warn("Conversions API event not received:", result)
    return false
  } catch (error) {
    console.error("Error sending Conversions API event:", error)
    return false
  }
}

/**
 * Helper to extract user data from request headers
 */
export function getUserDataFromRequest(request: Request, body?: {
  email?: string
  phone?: string
  name?: string
  firstName?: string
  lastName?: string
  gender?: string
  city?: string
  country?: string
}): ConversionsApiEvent["userData"] {
  const headers = request.headers
  const clientIpAddress = 
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "unknown"
  
  const clientUserAgent = headers.get("user-agent") || "unknown"

  // Extract fbc and fbp from cookies if available
  const cookies = headers.get("cookie") || ""
  const fbcMatch = cookies.match(/_fbc=([^;]+)/)
  const fbpMatch = cookies.match(/_fbp=([^;]+)/)

  // Parse name into first/last if needed
  let firstName = body?.firstName
  let lastName = body?.lastName
  
  if (!firstName && !lastName && body?.name) {
    const nameParts = body.name.trim().split(/\s+/)
    firstName = nameParts[0]
    lastName = nameParts.slice(1).join(" ") || undefined
  }

  return {
    email: body?.email,
    phone: body?.phone,
    firstName,
    lastName,
    gender: body?.gender,
    city: body?.city,
    country: body?.country || "AE", // Default to UAE
    clientIpAddress,
    clientUserAgent,
    fbc: fbcMatch ? fbcMatch[1] : undefined,
    fbp: fbpMatch ? fbpMatch[1] : undefined,
  }
}

