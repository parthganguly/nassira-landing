import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ResourcesSection() {
  const resources = [
    {
      title: "Buyer's Guide",
      subtitle: "Download Guide",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buyers-guide-Qt3YMzsmqGtVjbIYeAbcem9mAgWgId.png",
      link: "/complete-guide-buying-properties-dubai.pdf",
      download: true,
      bgColor: "bg-neutral-700",
    },
    {
      title: "",
      subtitle: "View Agents",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/super1-v9UrmBpfXGUE5hZ7dsxkG4R6gI7vUC.png",
      link: "#",
      download: false,
      bgColor: "bg-cyan-500",
    },
    {
      title: "Discover Bluewaters",
      subtitle: "Explore Now",
      image: "/bluewaters-dubai-ferris-wheel-night-illuminated.jpg",
      link: "#",
      download: false,
      bgColor: "bg-blue-950",
    },
    {
      title: "In The Spotlight",
      subtitle: "View More",
      image: "/luxury-real-estate-spotlight-feature.jpg",
      link: "#",
      download: false,
      bgColor: "bg-neutral-800",
    },
  ]

  const quickLinks = [
    { label: "Real Estate Blog", href: "#" },
    { label: "In The Spotlight", href: "#" },
    { label: "Discover Dubai", href: "#" },
    { label: "Guides & Tools", href: "#" },
  ]

  return (
    <section className="relative py-24 px-4 md:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) =>
            resource.download ? (
              <a
                key={index}
                href={resource.link}
                download="Complete-Guide-Buying-Properties-Dubai.pdf"
                className="group relative h-[320px] rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent`} />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {resource.title && (
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 text-balance drop-shadow-lg">
                      {resource.title}
                    </h3>
                  )}
                  <div className="inline-flex items-center gap-2 text-white font-semibold text-sm bg-copper px-5 py-2.5 rounded-full w-fit transition-all group-hover:bg-copper/90 group-hover:gap-3">
                    <span>{resource.subtitle}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ) : (
              <Link
                key={index}
                href={resource.link}
                className="group relative h-[320px] rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent`} />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {resource.title && (
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 text-balance drop-shadow-lg">
                      {resource.title}
                    </h3>
                  )}
                  <div className="inline-flex items-center gap-2 text-white font-semibold text-sm bg-copper px-5 py-2.5 rounded-full w-fit transition-all group-hover:bg-copper/90 group-hover:gap-3">
                    <span>{resource.subtitle}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ),
          )}
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-foreground/70 hover:text-copper transition-colors font-medium flex items-center gap-2 group"
            >
              <span className="relative">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-copper transition-all group-hover:w-full" />
              </span>
              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
