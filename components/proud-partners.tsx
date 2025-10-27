"use client"
import Image from "next/image"

export function ProudPartners() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aldar-waterfront.png"
          alt="Aldar Waterfront Development"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/38" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6">
            <h2 className="font-serif text-5xl lg:text-6xl leading-tight">
              Our Proud
              <br />
              Partners
            </h2>
            <p className="text-white/90 text-sm leading-relaxed max-w-md">
              We collaborate with the most prestigious developers in the region to bring you exclusive access to the
              finest properties. Our partnerships ensure unparalleled quality and exceptional investment opportunities.
            </p>
            <div className="flex gap-6 text-sm pt-4">
              <a href="#" className="border-b border-white/60 hover:border-white transition-colors pb-1">
                About Aldar
              </a>
              <a href="#" className="border-b border-white/60 hover:border-white transition-colors pb-1">
                Exclusive Properties
              </a>
            </div>
          </div>

          {/* Right Side - Aldar Branding */}
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Aldar Logo */}
            <div className="relative w-64 h-32">
              <Image
                src="/images/aldar-logo.png"
                alt="Aldar"
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>

            {/* Project Names */}
            <div className="text-center space-y-4">
              <h3 className="text-white text-2xl font-light tracking-wider">WATERFRONT LIVING</h3>
              <div className="space-y-2">
                <p className="text-amber-400 text-lg font-light tracking-wide">Yas Island Development</p>
                <p className="text-white/80 text-sm uppercase tracking-widest">Abu Dhabi</p>
              </div>
            </div>

            {/* Disney Announcement */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 text-center">
              <p className="text-amber-400 text-xs uppercase tracking-widest mb-2">Coming Soon</p>
              <p className="text-white text-xl font-light">Disneyland Abu Dhabi</p>
              <p className="text-white/70 text-sm mt-2">Minutes away from this exclusive development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
