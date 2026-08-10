import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ResourcesSection() {
  const resources = [
    {
      title: "Saadiyat",
      subtitle: "Explore Project",
      image: "/aerial-view-of-saadiyat-island-abu-dhabi-luxury-be.jpg",
      link: "/invest",
    },
    {
      title: "About Nassira",
      subtitle: "Meet the Founder",
      image: "/images/nassira-sekkay.png",
      link: "/about",
    },
    {
      title: "Private Enquiry",
      subtitle: "Contact Us",
      image: "/modern-white-luxury-villa-minimalist-architecture.jpg",
      link: "/contact",
    },
    {
      title: "Media Coverage",
      subtitle: "View Coverage",
      image: "/images/nassira-mdl-promo.jpeg",
      link: "/#press",
    },
  ]

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Saadiyat", href: "/invest" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <section className="relative py-24 px-4 md:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.link}
              className="group relative h-[320px] rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <Image
                src={resource.image}
                alt={resource.title}
                fill
                className={`object-cover ${resource.title === "About Nassira" ? "object-top" : ""}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 text-balance drop-shadow-lg">
                  {resource.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-white font-semibold text-sm bg-copper px-5 py-2.5 rounded-full w-fit transition-all group-hover:bg-copper/90 group-hover:gap-3">
                  <span>{resource.subtitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

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
