"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const whatsappUrl =
  "https://wa.me/971566002563?text=Hello%20Nassira%2C%20I%27d%20like%20to%20discuss%20a%20property%20enquiry."

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/np-black-logo.png"
              alt="Nassira Properties"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/invest" className="text-sm font-medium hover:text-primary transition-colors">
              Saadiyat
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/invest" className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Saadiyat
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors py-2">
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
