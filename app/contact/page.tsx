import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nassira Properties. Our women-led luxury real estate team is here to help with buying, selling, or investing in Dubai properties. Contact us today.",
  keywords: [
    "contact luxury real estate Dubai",
    "real estate consultation Dubai",
    "property inquiry Dubai",
    "luxury property experts",
  ],
  openGraph: {
    title: "Contact Nassira Properties | Luxury Real Estate Dubai",
    description: "Get in touch with Nassira Properties. Our women-led luxury real estate team is here to help with buying, selling, or investing in Dubai properties.",
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
