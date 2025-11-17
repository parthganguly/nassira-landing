import { NextResponse } from "next/server"
import { sendConversionsApiEvent, getUserDataFromRequest } from "@/lib/conversionsApi"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      eventName,
      contentName,
      contentCategory,
      contentIds,
      value,
      currency,
      searchString,
      eventSourceUrl,
    } = body

    if (!eventName) {
      return NextResponse.json({ ok: false, error: "Missing eventName" }, { status: 400 })
    }

    const url = new URL(request.url)
    const userData = getUserDataFromRequest(request)

    await sendConversionsApiEvent({
      eventName,
      eventTime: Math.floor(Date.now() / 1000),
      eventSourceUrl: eventSourceUrl || url.origin + url.pathname,
      actionSource: "website",
      userData,
      customData: {
        ...(contentName && { content_name: contentName }),
        ...(contentCategory && { content_category: contentCategory }),
        ...(contentIds && { content_ids: contentIds }),
        ...(value && { value }),
        ...(currency && { currency }),
        ...(searchString && { search_string: searchString }),
      },
      eventId: `${eventName.toLowerCase()}_${Date.now()}_${Math.random().toString(36).substring(7)}`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Track event API error:", error)
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 })
  }
}

