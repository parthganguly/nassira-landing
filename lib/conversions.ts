/**
 * Conversion reporting for the paid acquisition funnel.
 *
 * The primary conversion is a WhatsApp click — the visitor leaves the site, so
 * the click itself is the only signal we can hand back to Google Ads. Phone
 * clicks are reported as a secondary action.
 *
 * Google Ads conversion labels are supplied through env vars so the conversion
 * actions can be created in the Ads UI without a code change:
 *
 *   NEXT_PUBLIC_GOOGLE_ADS_ID              (default: the tag already on the site)
 *   NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL  (default: the live WhatsApp lead action)
 *   NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL     (optional, only if calls are used)
 *   NEXT_PUBLIC_LEAD_VALUE                 (optional numeric value, AED)
 *
 * A named gtag event is fired alongside the conversion, so the action can also
 * be created from a Google Analytics / gtag event instead.
 */

import { attributionEventParams, describeAttribution, getAttribution } from "@/lib/attribution"
import { fbq } from "@/lib/metaPixel"

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-17696030703"
// Live WhatsApp lead conversion action → AW-17696030703/x0CoCPfLoN8cEO__j_ZB
export const WHATSAPP_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL || "x0CoCPfLoN8cEO__j_ZB"
export const PHONE_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL || ""

const LEAD_VALUE = Number(process.env.NEXT_PUBLIC_LEAD_VALUE || "") || undefined
const LEAD_CURRENCY = "AED"

/** A repeated tap on the same CTA within this window is the same intent. */
const DEDUPE_WINDOW_MS = 2000

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export type LeadChannel = "whatsapp" | "phone"

export interface LeadClickInput {
  channel: LeadChannel
  /** Where the CTA sits on the page: hero, sticky, final, … */
  location: string
  /** Campaign context, e.g. "marsa_al_saadiyat". */
  project: string
  /** Readable label for Meta / reporting. */
  contentName?: string
}

const recentEvents = new Map<string, number>()

function isDuplicate(key: string): boolean {
  const last = recentEvents.get(key)
  const now = Date.now()
  if (last && now - last < DEDUPE_WINDOW_MS) return true
  recentEvents.set(key, now)
  return false
}

function gtag(...args: unknown[]): void {
  if (typeof window === "undefined") return
  if (typeof window.gtag === "function") {
    window.gtag(...args)
    return
  }
  // Tag not loaded yet — queue on the dataLayer the base snippet reads from.
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

function conversionLabel(channel: LeadChannel): string {
  return channel === "whatsapp" ? WHATSAPP_CONVERSION_LABEL : PHONE_CONVERSION_LABEL
}

/**
 * Fires the full conversion set for a lead click:
 *  - Google Ads conversion (when a label is configured)
 *  - a named gtag event (usable as a GA4-imported conversion)
 *  - a dataLayer push for GTM
 *  - Meta Lead (pixel + Conversions API)
 */
export function trackLeadClick({ channel, location, project, contentName }: LeadClickInput): void {
  if (typeof window === "undefined") return

  const eventName = channel === "whatsapp" ? "whatsapp_click" : "phone_click"
  if (isDuplicate(`${eventName}:${location}`)) return

  const attribution = getAttribution()
  const attributionParams = attributionEventParams(attribution)
  const attributionSource = describeAttribution(attribution)

  const sharedParams = {
    event_category: "lead",
    event_label: `${project}_${location}`,
    project,
    cta_position: location,
    lead_channel: channel,
    attribution_source: attributionSource,
    ...attributionParams,
  }

  gtag("event", eventName, sharedParams)

  const label = conversionLabel(channel)
  if (label) {
    gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${label}`,
      // One click reference = one counted conversion, even on repeat taps.
      transaction_id: attribution?.ref,
      ...(LEAD_VALUE ? { value: LEAD_VALUE, currency: LEAD_CURRENCY } : {}),
    })
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    lead_source: project,
    ...sharedParams,
  })

  const name = contentName || project
  fbq("track", "Lead", {
    content_name: name,
    content_category: project,
    ...(LEAD_VALUE ? { value: LEAD_VALUE, currency: LEAD_CURRENCY } : {}),
  })

  // Server-side mirror through the existing Conversions API route.
  void fetch("/api/track-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName: "Lead",
      contentName: name,
      contentCategory: project,
      eventSourceUrl: window.location.href,
    }),
    keepalive: true,
  }).catch(() => {
    /* never block the visitor's journey to WhatsApp */
  })
}
