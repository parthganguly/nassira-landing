"use client"
import Image from "next/image"
import Link from "next/link"

export function ProudPartners() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Link href="/invest" className="absolute inset-0 z-10" aria-label="Explore Mandarin Oriental Residences Saadiyat" />

      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/mandarin.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/38" />
      </div>

      <div className="relative container mx-auto px-4 py-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-6">
            <h2 className="font-serif text-5xl lg:text-6xl leading-tight">
              Current Project
              <br />
              Focus
            </h2>
            <p className="text-white/90 text-sm leading-relaxed max-w-md">
              Mandarin Oriental Residences sits within Saadiyat Cultural District in Abu Dhabi. The development is by Aldar, with residential hospitality and services managed by Mandarin Oriental Hotel Group.
            </p>
            <div className="flex gap-6 text-sm pt-4 relative z-20">
              <Link href="/invest" className="border-b border-white/60 hover:border-white transition-colors pb-1">
                Project Details
              </Link>
              <Link href="/contact" className="border-b border-white/60 hover:border-white transition-colors pb-1">
                Private Enquiry
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="relative w-64 h-32">
              <Image
                src="/images/aldar-logo.png"
                alt="Aldar"
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-white text-2xl font-light tracking-wider">MANDARIN ORIENTAL RESIDENCES</h3>
              <div className="space-y-2">
                <p className="text-amber-400 text-lg font-light tracking-wide">Saadiyat Cultural District</p>
                <p className="text-white/80 text-sm uppercase tracking-widest">Abu Dhabi</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 text-center">
              <p className="text-amber-400 text-xs uppercase tracking-widest mb-2">Cultural District</p>
              <p className="text-white text-xl font-light">Louvre Abu Dhabi</p>
              <p className="text-white/70 text-sm mt-2">Part of Saadiyat&apos;s cultural destination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
