"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const whatsappUrl =
  "https://wa.me/971566002563?text=Hello%20Nassira%2C%20I%27d%20like%20to%20discuss%20a%20property%20enquiry."

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/invest", label: "Saadiyat" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center" aria-label="Nassira Properties home">
          <Image
            src="/images/np-black-logo.png"
            alt="Nassira Properties"
            width={200}
            height={60}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-[#9a6d2c]">
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#9a6d2c]"
          >
            WhatsApp Nassira
          </a>
        </div>

        <button
          className="p-2 md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl leading-none">{isMobileMenuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-black/10 bg-white px-4 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white"
            >
              WhatsApp Nassira
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
