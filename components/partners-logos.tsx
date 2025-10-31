"use client"

export function PartnersLogos() {
  // Prefer local assets when present; otherwise fall back to reputable SVG URLs
  const base = "/partner_logos"
  const logos = [
    { alt: "Emaar", src: `${base}/Emaar_Properties_logo-10%201.png` },
    { alt: "Damac", src: `${base}/Damac_logo%201.png` },
    { alt: "Nakheel", src: `${base}/nakheel-300300-210x210%201.png` },
    { alt: "Meraas", src: `${base}/image%20315.png` },
    { alt: "Modon", src: `${base}/modon-logo%201.png` },
    { alt: "Binghatti", src: `${base}/Binghatti-logo-dark.webp%201.png` },
  ]

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Centered heading row visually balanced by container; logos themselves are vertically centered */}
        <div className="relative overflow-hidden">
          {/* Track duplicated for seamless loop */}
          <div className="flex items-center gap-20 whitespace-nowrap animate-logo-marquee will-change-transform">
            {logos.concat(logos).map((logo, idx) => (
              <div key={`${logo.alt}-${idx}`} className="inline-flex items-center justify-center grayscale opacity-80 hover:opacity-100 transition-opacity">
                <img src={logo.src} alt={logo.alt} className="h-10 md:h-14 w-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes logo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-marquee {
          display: flex;
          width: max-content;
          animation: logo-marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default PartnersLogos


