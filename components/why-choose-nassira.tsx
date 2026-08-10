import Image from "next/image"
import Link from "next/link"
import { Building2, MessageCircle, ShieldCheck } from "lucide-react"

export function WhyChooseNassira() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="font-serif text-4xl mb-4 text-balance">Why Work With Nassira Properties</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Luxury property decisions require current information and direct communication. Nassira Properties keeps the process focused on the client requirement, the property or project being considered, and the practical next step.
            </p>
            <Link
              href="/contact"
              className="inline-block border-b-2 border-black pb-1 hover:border-amber-600 transition-colors"
            >
              Start a Private Enquiry
            </Link>
          </div>
          <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/speed-sell-super-agents.png"
              alt="Nassira Properties"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div>
            <div className="font-serif text-4xl mb-2">Dubai & Abu Dhabi</div>
            <div className="text-gray-600">UAE Property Advisory</div>
          </div>
          <div>
            <div className="font-serif text-4xl mb-2">Direct</div>
            <div className="text-gray-600">Client Communication</div>
          </div>
          <div>
            <div className="font-serif text-4xl mb-2">Current</div>
            <div className="text-gray-600">Availability & Project Information</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Building2 className="w-12 h-12 text-black" />
            </div>
            <h3 className="font-serif text-xl mb-3">Selected Opportunities</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We focus on specific properties and projects that can be discussed with current information rather than presenting placeholder inventory as live stock.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-12 h-12 text-black" />
            </div>
            <h3 className="font-serif text-xl mb-3">Private Communication</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Buyers and sellers can speak directly with Nassira Properties by WhatsApp, phone or email to discuss requirements and next steps.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="w-12 h-12 text-black" />
            </div>
            <h3 className="font-serif text-xl mb-3">Terms Confirmed at Enquiry</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Availability, pricing, specifications and commercial terms are confirmed for the relevant property or project when you enquire.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-[500px]">
            <Image
              src="/modern-white-luxury-villa-minimalist-architecture.jpg"
              alt="Modern luxury villa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="font-serif text-3xl text-balance">
                  <Link href="/contact" className="border-b-2 border-black hover:border-amber-600 transition-colors">
                    Contact Nassira Properties
                  </Link>{" "}
                  for a private property conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
