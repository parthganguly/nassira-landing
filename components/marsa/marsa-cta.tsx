"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { getAttribution, withAttributionReference } from "@/lib/attribution"
import { trackLeadClick } from "@/lib/conversions"
import {
  MARSA_PROJECT_ID,
  MARSA_PROJECT_NAME,
  MARSA_WHATSAPP_MESSAGE,
  PHONE_HREF,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
} from "@/lib/marsa"

function whatsAppHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * The clean message renders on the server so the CTA works before hydration;
 * once mounted, the href is upgraded with the stored campaign reference.
 */
function useMarsaWhatsAppHref(message: string): string {
  const [href, setHref] = useState(() => whatsAppHref(message))

  useEffect(() => {
    setHref(whatsAppHref(withAttributionReference(message, getAttribution())))
  }, [message])

  return href
}

type ButtonTone = "copper" | "light" | "outline"

const toneStyles: Record<ButtonTone, string> = {
  copper: "bg-[#c17a5c] text-white shadow-lg hover:bg-[#a9664a] focus-visible:ring-[#c17a5c]/40",
  light: "bg-white text-[#181714] shadow-lg hover:bg-white/90 focus-visible:ring-white/50",
  outline:
    "border border-black/15 bg-white/70 text-[#181714] hover:border-[#c17a5c] hover:text-[#8f5741] focus-visible:ring-[#c17a5c]/30",
}

interface WhatsAppButtonProps {
  /** Where the CTA sits on the page — reported with the conversion. */
  position: string
  label?: string
  tone?: ButtonTone
  message?: string
  className?: string
}

export function MarsaWhatsAppButton({
  position,
  label = "Register Your Interest",
  tone = "copper",
  message = MARSA_WHATSAPP_MESSAGE,
  className = "",
}: WhatsAppButtonProps) {
  const href = useMarsaWhatsAppHref(message)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackLeadClick({
          channel: "whatsapp",
          location: position,
          project: MARSA_PROJECT_ID,
          contentName: MARSA_PROJECT_NAME,
        })
      }
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 md:px-8 md:py-4 md:text-base ${toneStyles[tone]} ${className}`}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
      {label}
      <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
    </a>
  )
}

export function MarsaPhoneLink({ position, className = "" }: { position: string; className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      onClick={() =>
        trackLeadClick({
          channel: "phone",
          location: position,
          project: MARSA_PROJECT_ID,
          contentName: MARSA_PROJECT_NAME,
        })
      }
      className={`inline-flex items-center gap-2 text-sm font-medium transition hover:text-[#c17a5c] ${className}`}
    >
      <Phone className="h-4 w-4" strokeWidth={1.75} />
      {PHONE_NUMBER}
    </a>
  )
}

/**
 * Mobile conversion bar. Paid traffic on this page is overwhelmingly mobile,
 * and the hero CTA scrolls out of view within one swipe.
 */
export function MarsaStickyCta() {
  const [visible, setVisible] = useState(false)
  const href = useMarsaWhatsAppHref(MARSA_WHATSAPP_MESSAGE)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-[#f7f4ef]/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c17a5c]">
            {MARSA_PROJECT_NAME}
          </p>
          <p className="truncate text-xs text-black/55">First homes expected H2 2026</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackLeadClick({
              channel: "whatsapp",
              location: "sticky",
              project: MARSA_PROJECT_ID,
              contentName: MARSA_PROJECT_NAME,
            })
          }
          className="inline-flex flex-none items-center gap-2 rounded-full bg-[#c17a5c] px-5 py-3 text-sm font-semibold text-white shadow-lg"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
