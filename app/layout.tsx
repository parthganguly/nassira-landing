import type React from "react"
import type { Metadata } from "next"
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
  title: "Nassira Properties | Luxury Real Estate",
  description: "Experience luxury real estate with Nassira Properties. Buy, sell, and invest in exclusive properties in the world's most prestigious locations.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
