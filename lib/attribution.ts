/**
 * First-party attribution capture.
 *
 * Paid traffic lands on the site with campaign parameters in the URL, but the
 * conversion itself happens off-site in WhatsApp. This module persists the
 * click context on the visitor's device so that:
 *
 *  1. the WhatsApp prefill can carry a short reference back into the chat,
 *  2. conversion events can be de-duplicated per click (transaction_id),
 *  3. lead quality can be traced back to campaign / ad group / keyword.
 *
 * Storage only — nothing is sent anywhere from here.
 */

export const ATTRIBUTION_STORAGE_KEY = "np_attribution_v1"
export const ATTRIBUTION_TTL_DAYS = 90

/** UTM fields the playbook requires us to preserve. */
export const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const

/**
 * Click identifiers. gclid is standard Search; gbraid / wbraid are the
 * privacy-safe iOS/web-to-app equivalents Google now sends on many clicks.
 * fbclid is kept because the site already runs a Meta pixel.
 */
export const CLICK_ID_PARAMS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid"] as const

export type AttributionParamKey = (typeof UTM_PARAMS)[number] | (typeof CLICK_ID_PARAMS)[number]

export interface AttributionRecord {
  /** Short human-quotable code shared into the WhatsApp prefill. */
  ref: string
  firstSeen: string
  lastSeen: string
  landingPage: string
  referrer: string
  params: Partial<Record<AttributionParamKey, string>>
}

interface StoredEnvelope {
  expiresAt: number
  record: AttributionRecord
}

const TRACKED_PARAMS: AttributionParamKey[] = [...UTM_PARAMS, ...CLICK_ID_PARAMS]
const MAX_VALUE_LENGTH = 200

function nowIso(): string {
  return new Date().toISOString()
}

function createRef(): string {
  const time = Date.now().toString(36).toUpperCase().slice(-5)
  const random = Math.random().toString(36).toUpperCase().slice(2, 5).padEnd(3, "X")
  return `NP-${time}${random}`
}

/**
 * localStorage first (survives the return trip from WhatsApp), sessionStorage
 * as a fallback for browsers in restricted / private modes.
 */
function availableStores(): Storage[] {
  if (typeof window === "undefined") return []
  const stores: Storage[] = []
  try {
    if (window.localStorage) stores.push(window.localStorage)
  } catch {
    /* storage blocked */
  }
  try {
    if (window.sessionStorage) stores.push(window.sessionStorage)
  } catch {
    /* storage blocked */
  }
  return stores
}

function readRecord(): AttributionRecord | null {
  for (const store of availableStores()) {
    try {
      const raw = store.getItem(ATTRIBUTION_STORAGE_KEY)
      if (!raw) continue
      const parsed = JSON.parse(raw) as StoredEnvelope
      if (!parsed?.record?.ref) continue
      if (parsed.expiresAt && parsed.expiresAt < Date.now()) {
        store.removeItem(ATTRIBUTION_STORAGE_KEY)
        continue
      }
      return parsed.record
    } catch {
      /* corrupt entry, ignore */
    }
  }
  return null
}

function writeRecord(record: AttributionRecord): void {
  const envelope: StoredEnvelope = {
    expiresAt: Date.now() + ATTRIBUTION_TTL_DAYS * 24 * 60 * 60 * 1000,
    record,
  }
  const serialized = JSON.stringify(envelope)
  for (const store of availableStores()) {
    try {
      store.setItem(ATTRIBUTION_STORAGE_KEY, serialized)
    } catch {
      /* quota or blocked, ignore */
    }
  }
}

function readParamsFromSearch(search: string): Partial<Record<AttributionParamKey, string>> {
  const params: Partial<Record<AttributionParamKey, string>> = {}
  if (!search) return params
  const searchParams = new URLSearchParams(search)
  for (const key of TRACKED_PARAMS) {
    const value = searchParams.get(key)
    if (value) params[key] = value.slice(0, MAX_VALUE_LENGTH)
  }
  return params
}

/**
 * Called once per page load. Last non-direct click wins, which is how Google
 * Ads attributes conversions, but the original first-touch timestamp is kept.
 */
export function captureAttribution(): AttributionRecord | null {
  if (typeof window === "undefined") return null

  const existing = readRecord()
  const incoming = readParamsFromSearch(window.location.search)
  const hasIncoming = Object.keys(incoming).length > 0

  if (!hasIncoming && existing) {
    const touched: AttributionRecord = { ...existing, lastSeen: nowIso() }
    writeRecord(touched)
    return touched
  }

  const record: AttributionRecord = {
    // A fresh click gets a fresh reference so a WhatsApp message maps to one click.
    ref: hasIncoming || !existing ? createRef() : existing.ref,
    firstSeen: existing?.firstSeen ?? nowIso(),
    lastSeen: nowIso(),
    landingPage: window.location.pathname,
    referrer: typeof document !== "undefined" ? document.referrer.slice(0, MAX_VALUE_LENGTH) : "",
    params: hasIncoming ? incoming : (existing?.params ?? {}),
  }

  writeRecord(record)
  return record
}

export function getAttribution(): AttributionRecord | null {
  if (typeof window === "undefined") return null
  return readRecord()
}

/** True when the visit can be traced to a campaign click rather than direct/organic. */
export function hasCampaignAttribution(record: AttributionRecord | null): boolean {
  if (!record) return false
  return Object.keys(record.params).length > 0
}

/** e.g. "google / cpc / marsa-launch-search" — used in the WhatsApp prefill and event payloads. */
export function describeAttribution(record: AttributionRecord | null): string {
  if (!record) return ""
  const { params } = record
  const source = params.utm_source ?? (params.gclid || params.gbraid || params.wbraid ? "google" : "")
  const medium = params.utm_medium ?? (params.gclid || params.gbraid || params.wbraid ? "cpc" : "")
  return [source, medium, params.utm_campaign].filter(Boolean).join(" / ")
}

/**
 * Appends only a short reference token to a WhatsApp prefill, so the
 * conversation can be matched back to the click without putting campaign
 * strings in front of the customer. Organic visitors get the clean message.
 */
export function withAttributionReference(message: string, record: AttributionRecord | null): string {
  if (!hasCampaignAttribution(record) || !record) return message
  return `${message}\n\nRef: ${record.ref}`
}

/** Flat key/value bag for analytics payloads. */
export function attributionEventParams(record: AttributionRecord | null): Record<string, string> {
  if (!record) return {}
  const payload: Record<string, string> = { attribution_ref: record.ref }
  for (const [key, value] of Object.entries(record.params)) {
    if (value) payload[key] = value
  }
  return payload
}
