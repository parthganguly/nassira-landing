import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono, EB_Garamond } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-eb-garamond",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Nassira Properties | Luxury Real Estate Dubai & Abu Dhabi",
    template: "%s | Nassira Properties",
  },
  description: "Experience luxury real estate with Nassira Properties. Buy, sell, and invest in exclusive properties in Palm Jumeirah, Downtown Dubai, Emirates Hills, and Abu Dhabi's premier locations. Women-led real estate excellence.",
  keywords: [
    "luxury real estate Dubai",
    "luxury properties Abu Dhabi",
    "Palm Jumeirah villas",
    "Downtown Dubai apartments",
    "Emirates Hills properties",
    "buy luxury property Dubai",
    "sell luxury property Dubai",
    "real estate investment Dubai",
    "women-led real estate",
    "Nassira Properties",
  ],
  authors: [{ name: "Nassira Properties" }],
  creator: "Nassira Properties",
  publisher: "Nassira Properties",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nassiraproperties.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nassiraproperties.com",
    siteName: "Nassira Properties",
    title: "Nassira Properties | Luxury Real Estate Dubai & Abu Dhabi",
    description: "Experience luxury real estate with Nassira Properties. Buy, sell, and invest in exclusive properties in the world's most prestigious locations.",
    images: [
      {
        url: "/images/luxury-villa-pool-sunset.png",
        width: 1200,
        height: 630,
        alt: "Luxury Property Dubai - Nassira Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nassira Properties | Luxury Real Estate Dubai & Abu Dhabi",
    description: "Experience luxury real estate with Nassira Properties. Buy, sell, and invest in exclusive properties.",
    images: ["/images/luxury-villa-pool-sunset.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Nassira Properties",
    description: "Women-led luxury real estate brokerage in Dubai and Abu Dhabi",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://nassiraproperties.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nassiraproperties.com"}/images/np-white-logo.png`,
    areaServed: [
      {
        "@type": "City",
        name: "Dubai",
      },
      {
        "@type": "City",
        name: "Abu Dhabi",
      },
    ],
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressRegion: "Dubai",
    },
  }

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/eb-garamond-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1345773383529169');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1345773383529169&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
