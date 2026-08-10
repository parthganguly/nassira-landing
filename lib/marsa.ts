/**
 * Marsa Al Saadiyat — campaign truth sheet and copy.
 *
 * This file is the single source of truth for the Marsa landing experience and
 * should be updated BEFORE the landing page, the ads or the creative whenever
 * a new official announcement is published. Everything in `MARSA_FACTS` must be
 * traceable to a primary source (Abu Dhabi Media Office / Aldar communications).
 *
 * Never add pricing, payment plans, unit counts, sizes, ROI, rental yield,
 * allocation, exclusivity or availability claims here unless they come from a
 * verified first-party source. See docs/marsa-google-ads-campaign.md.
 */

export const MARSA_PROJECT_ID = "marsa_al_saadiyat"
export const MARSA_PROJECT_NAME = "Marsa Al Saadiyat"
export const MARSA_LOCATION = "Saadiyat Island, Abu Dhabi"
export const MARSA_PATH = "/marsa-al-saadiyat"

export const WHATSAPP_NUMBER = "971566002563"
export const PHONE_NUMBER = "+971 56 600 2563"
export const PHONE_HREF = "tel:+971566002563"

/** Kept identical to the prefill specified in the playbook. */
export const MARSA_WHATSAPP_MESSAGE =
  "Hello Nassira, I'm interested in Marsa Al Saadiyat. Please send me the latest launch information and let me know when the first residential release becomes available."

export const MARSA_SOURCES = "Abu Dhabi Media Office and Aldar official communications."

export interface MarsaFact {
  label: string
  value: string
  detail: string
}

/** Campaign-safe facts. Nothing may be stated in an ad that is not on this list. */
export const MARSA_FACTS: MarsaFact[] = [
  {
    label: "Unveiled",
    value: "July 2026",
    detail: "Marsa Al Saadiyat was publicly unveiled as a new Saadiyat Island destination.",
  },
  {
    label: "Masterplan value",
    value: "AED 100bn",
    detail: "Announced development value of the wider masterplan.",
  },
  {
    label: "Destination scale",
    value: "≈ 6.4m sqm",
    detail: "The masterplan area of the destination as announced.",
  },
  {
    label: "Waterfront",
    value: "≈ 8 km",
    detail: "Continuous waterfront forming the spine of the masterplan.",
  },
  {
    label: "Beaches",
    value: "≈ 5.6 km",
    detail: "Beachfront planned within the destination.",
  },
  {
    label: "Marina",
    value: "Up to 350 berths",
    detail: "A marina is planned with capacity for up to 350 berths.",
  },
  {
    label: "First home sales",
    value: "Expected H2 2026",
    detail: "First residential sales are expected to commence in the second half of 2026.",
  },
  {
    label: "Residential mix",
    value: "Apartments to mansions",
    detail: "The announced mix includes apartments, villas, mansions and branded residences.",
  },
]

/** The four figures used in the hero strip and across ad copy. */
export const MARSA_HERO_STATS = [
  { value: "≈ 8 km", label: "Waterfront" },
  { value: "≈ 5.6 km", label: "Beaches" },
  { value: "Up to 350", label: "Marina berths" },
  { value: "≈ 6.4m sqm", label: "Destination" },
]

/**
 * The single line the page uses in place of any price, plan or layout claim.
 * Keep it short — the page leads with the opportunity, not with caveats.
 */
export const MARSA_RELEASE_NOTE =
  "Pricing, layouts and first-release details will be shared as officially announced."

export interface MarsaFaq {
  question: string
  answer: string
}

export const MARSA_FAQS: MarsaFaq[] = [
  {
    question: "What is Marsa Al Saadiyat?",
    answer:
      "Marsa Al Saadiyat is a waterfront destination on Saadiyat Island in Abu Dhabi, unveiled in July 2026. The announced masterplan covers approximately 6.4 million sqm with around 8 km of waterfront, around 5.6 km of beaches and a marina planned for up to 350 berths.",
  },
  {
    question: "When do the first homes go on sale?",
    answer:
      "First home sales are expected to commence in H2 2026. Nassira Properties shares confirmed release information with registered enquirers as soon as it is published.",
  },
  {
    question: "Is pricing available for Marsa Al Saadiyat?",
    answer:
      "Pricing, layouts and first-release details will be shared as officially announced. Register your interest and you will receive them directly from Nassira as they are issued.",
  },
  {
    question: "What kind of homes are planned?",
    answer:
      "The announced residential mix includes apartments, villas, mansions and branded residences. The composition of the first release has not yet been confirmed.",
  },
]

export const MARSA_DISCLAIMER =
  "Nassira Properties is an independent real estate brokerage. Marsa Al Saadiyat is a development announced by Aldar; project names and trademarks belong to their respective owners. Details on this page are limited to publicly announced information and are subject to change. Pricing, payment plans, layouts and release timing are not confirmed until officially published by the developer. Purchasers should obtain independent legal and financial advice before entering into any property transaction."

/** Footer-level note only — never placed inside the marketing flow. */
export const MARSA_IMAGERY_NOTE = "Lifestyle imagery is illustrative."
