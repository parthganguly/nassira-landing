"use client"

import Link from "next/link"
import { Mail, MessageCircle, Phone } from "lucide-react"

const whatsappUrl =
  "https://wa.me/971566002563?text=Hello%20Nassira%2C%20I%27d%20like%20to%20discuss%20a%20property%20enquiry."

export function ContactForm() {
  return (
    <div className="container mx-auto max-w-xl">
      <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="font-serif font-semibold text-3xl md:text-4xl text-center mb-3">Contact Us</h1>
        <p className="text-sm text-muted-foreground text-center mb-8">
          Choose the channel you prefer for a private property enquiry.
        </p>

        <div className="space-y-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-black hover:bg-gray-800 text-white font-medium py-4 px-5 rounded-xl transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp Nassira</span>
          </a>

          <a
            href="tel:+971566002563"
            className="flex items-center gap-4 w-full border border-input bg-background hover:bg-muted/40 font-medium py-4 px-5 rounded-xl transition-colors"
          >
            <Phone className="h-5 w-5 text-[#c17a5c]" />
            <span>+971 56 600 2563</span>
          </a>

          <a
            href="mailto:contact@nassiraproperties.com"
            className="flex items-center gap-4 w-full border border-input bg-background hover:bg-muted/40 font-medium py-4 px-5 rounded-xl transition-colors"
          >
            <Mail className="h-5 w-5 text-[#c17a5c]" />
            <span className="break-all">contact@nassiraproperties.com</span>
          </a>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm leading-6 text-muted-foreground">
            Office Unit 104, Al Maidoor Building, Al Quoz, Sheikh Zayed Road, Dubai
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Brokerage ORN 34078 · Nassira Sekkay BRN 47146
          </p>
          <Link href="/privacy" className="mt-4 inline-block text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground">
            Privacy notice
          </Link>
        </div>
      </div>
    </div>
  )
}
