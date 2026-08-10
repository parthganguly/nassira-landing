# Marsa Al Saadiyat — campaign setup notes

Short operational notes for the Marsa funnel. Strategy lives in
`marsa_saadiyat_google_ads_agent_playbook.html`.

## Landing page

- Page: `/marsa-al-saadiyat` (`app/marsa-al-saadiyat/page.tsx`)
- Facts, WhatsApp prefill, FAQs and disclaimers: `lib/marsa.ts` — update this file
  first whenever a new official announcement lands, then the ads.

## Environment variables

| Variable | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | no | Defaults to `AW-17696030703`, the tag already in `app/layout.tsx`. |
| `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL` | no | Defaults to the live WhatsApp lead action, so clicks send `AW-17696030703/x0CoCPfLoN8cEO__j_ZB`. Set only to point at a different conversion action. |
| `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL` | no | Only if the call channel is used. |
| `NEXT_PUBLIC_LEAD_VALUE` | no | Numeric value in AED attached to conversions for bidding. Omit to send no value. |

A label is the part after the `/` in `send_to: AW-XXXXXXXXX/LABEL`, shown on the
conversion action in Google Ads → Goals → Conversions → *Use Google tag*.

## Final URL and UTMs

```
https://nassiraproperties.com/marsa-al-saadiyat
  ?utm_source=google&utm_medium=cpc&utm_campaign=marsa-launch-search
  &utm_content={creative}&utm_term={keyword}
```

Auto-tagging (`gclid`) must stay enabled. `utm_*`, `gclid`, `gbraid` and `wbraid`
are captured on any entry page (`components/attribution-tracker.tsx`) and stored
for 90 days. The full campaign detail stays internal (conversion events only); the
WhatsApp prefill carries just `Ref: NP-XXXXX` so a conversation can be matched
back to the click it came from.

## Conversions fired on a WhatsApp / phone click

`lib/conversions.ts` sends, per click: the Google Ads conversion (when a label is
set, de-duplicated per click via `transaction_id`), a `whatsapp_click` /
`phone_click` gtag event, a `dataLayer` push for GTM, and Meta `Lead` via pixel
plus the existing `/api/track-event` Conversions API route.

## Creative asset slots

| Slot | Drop file at | Wired in |
| --- | --- | --- |
| Hero film (16:9, muted, 15–20s) | `public/marsa/hero.mp4` | set `HERO_VIDEO` in `components/marsa/marsa-hero.tsx` |
| Waterfront / marina / beach stills (4:5) | `public/marsa/*.jpg` | `pillars` array in `components/marsa/marsa-destination.tsx` |

Until approved Marsa creative exists, these slots use genuine Saadiyat and Abu
Dhabi waterfront photography and the page prints the imagery disclosure from
`MARSA_IMAGERY_NOTE`. Remove that note only when every slot is an official
developer render.
