import type { Metadata } from "next"
import { SaadiyatInvestLanding } from "@/components/saadiyat-invest-landing"

export const metadata: Metadata = {
  title: "Mandarin Oriental Residences Saadiyat | Nassira Properties",
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
        url: "/images/nassira-mdl-promo.jpeg",
        width: 1200,
        height: 1200,
        alt: "Nassira Properties - luxury real estate UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandarin Oriental Residences Saadiyat | Nassira Properties",
    description: "Request current availability and floor plans for Mandarin Oriental Residences on Saadiyat Island.",
    images: ["/images/nassira-mdl-promo.jpeg"],
  },
}

export default function InvestPage() {
  return <SaadiyatInvestLanding />
}
