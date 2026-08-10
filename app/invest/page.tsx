import type { Metadata } from "next"
import { SaadiyatInvestLanding } from "@/components/saadiyat-invest-landing"

export const metadata: Metadata = {
  title: "Mandarin Oriental Residences Saadiyat",
  description:
    "Explore Mandarin Oriental Residences in Saadiyat Cultural District, Abu Dhabi. Request current availability, pricing and floor plans directly from Nassira Properties.",
  keywords: [
    "Mandarin Oriental Residences Saadiyat",
    "Saadiyat Cultural District property",
    "Saadiyat Island apartments for sale",
    "luxury property Abu Dhabi",
    "Aldar Saadiyat",
    "Mandarin Oriental Abu Dhabi residences",
  ],
  alternates: {
    canonical: "/invest",
  },
  openGraph: {
    title: "Mandarin Oriental Residences Saadiyat | Nassira Properties",
    description:
      "A private introduction to Mandarin Oriental Residences, Saadiyat Cultural District. Request current availability and floor plans from Nassira Properties.",
    url: "/invest",
    type: "website",
    images: [
      {
        url: "/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg",
        width: 1200,
        height: 630,
        alt: "Saadiyat Island, Abu Dhabi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandarin Oriental Residences Saadiyat | Nassira Properties",
    description: "Request current availability and floor plans for Mandarin Oriental Residences on Saadiyat Island.",
    images: ["/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg"],
  },
}

export default function InvestPage() {
  return <SaadiyatInvestLanding />
}
