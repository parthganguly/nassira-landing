import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Nassira Properties",
  description: "Learn about Nassira Properties and founder Nassira Sekkay, providing private real estate advisory in Dubai and Abu Dhabi.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <Navbar />
      <section className="px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-[2rem] bg-[#eeeae2]">
            <Image
              src="/images/nassira-sekkay.png"
              alt="Nassira Sekkay"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 42vw"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a6d2c]">About</p>
            <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">Nassira Properties</h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-black/65">
              Nassira Properties is a founder-led real estate advisory serving property clients in Dubai and Abu Dhabi.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/60">
              Nassira Sekkay is the founder and CEO. The company focuses on direct client conversations, current property information and a clear path from initial enquiry to viewings and transaction support.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/60">
              We deliberately avoid publishing placeholder inventory, projected returns or transaction claims that cannot be substantiated at the time they are shown.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/invest"
                className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-black px-6 text-sm font-semibold text-white"
              >
                View Saadiyat opportunity
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-black px-6 text-sm font-semibold"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
