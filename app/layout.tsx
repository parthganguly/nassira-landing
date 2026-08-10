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
    default: "Nassira Properties | Private Real Estate Advisory",
    template: "%s | Nassira Properties",
  },
  description:
    "Private real estate advisory in Dubai and Abu Dhabi. Contact Nassira Properties for current property information, project materials and viewing options.",
  keywords: [
    "Nassira Properties",
    "Nassira Sekkay",
    "Dubai real estate",
    "Abu Dhabi real estate",
    "Saadiyat Island property",
    "Saadiyat Cultural District",
  ],
  authors: [{ name: "Nassira Properties" }],
  creator: "Nassira Properties",
  publisher: "Nassira Properties",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nassiraproperties.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nassiraproperties.com",
    siteName: "Nassira Properties",
    title: "Nassira Properties | Private Real Estate Advisory",
    description: "Private real estate advisory in Dubai and Abu Dhabi.",
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
    title: "Nassira Properties | Private Real Estate Advisory",
    description: "Private real estate advisory in Dubai and Abu Dhabi.",
    images: ["/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nassiraproperties.com"
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Nassira Properties",
    description: "Real estate advisory serving clients in Dubai and Abu Dhabi",
    url: siteUrl,
    logo: `${siteUrl}/images/np-white-logo.png`,
    telephone: "+971566002563",
    email: "contact@nassiraproperties.com",
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Maidoor Building, Sheikh Zayed Road, Al Quoz 3",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17696030703" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17696030703');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
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
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
