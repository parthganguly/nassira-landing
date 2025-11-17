"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { fbq } from "@/lib/metaPixel"

interface ViewContentTrackerProps {
  contentName: string
  contentCategory?: string
  contentIds?: string[]
  value?: number
  currency?: string
}

/**
 * Client-side component to track ViewContent events
 * Tracks when users view property detail pages
 */
export function ViewContentTracker({
  contentName,
  contentCategory,
  contentIds,
  value,
  currency = "AED",
}: ViewContentTrackerProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Track ViewContent event with browser pixel (old account)
    fbq("track", "ViewContent", {
      content_name: contentName,
      content_category: contentCategory,
      content_ids: contentIds,
      currency,
      value,
    })

    // Also send to Conversions API via API route
    fetch("/api/track-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName: "ViewContent",
        contentName,
        contentCategory,
        contentIds,
        value,
        currency,
        eventSourceUrl: typeof window !== "undefined" ? window.location.href : pathname,
      }),
    }).catch((error) => {
      console.error("Error sending ViewContent to Conversions API:", error)
    })
  }, [contentName, contentCategory, contentIds, value, currency, pathname])

  return null
}

