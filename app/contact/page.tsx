import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Nassira Properties",
  description: "Contact Nassira Properties by WhatsApp, phone or email for current property information in Dubai and Abu Dhabi.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Nassira Properties",
    description: "Speak directly with Nassira Properties about a property enquiry in Dubai or Abu Dhabi.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
