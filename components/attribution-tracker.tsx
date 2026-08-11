"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { captureAttribution } from "@/lib/attribution"

/**
 * Captures campaign parameters on every entry point of the site, not just the
 * campaign landing page — a visitor can arrive from an ad on any URL and then
 * navigate before enquiring.
 */
export function AttributionTracker() {
  const pathname = usePathname()

  useEffect(() => {
    captureAttribution()
  }, [pathname])

  return null
}
