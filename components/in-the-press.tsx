"use client"

import Image from "next/image"
import Link from "next/link"

export function InThePress() {
  const pressItems = [
    {
      id: 1,
      type: "article",
      publication: "Harper's Bazaar Arabia",
      title: "Who Is Nassira Sekkay, An Agent On The Million Dollar Listing UAE?",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-11rVtAIWCUibGK6weAQ5Zk9Glt7BQH.png",
      link: "https://www.harpersbazaararabia.com/culture/people/who-is-nassira-sekkay-million-dollar-listing-uae",
      span: "row-span-2",
    },
    {
      id: 2,
      type: "article",
      publication: "Fact Magazine",
      title: "Million Dollar Listing UAE Interview: Nassira Sekkay",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EUtAc4xzESr3hd099vjAIhSRoycLoE.png",
      link: "https://www.factmagazines.com/entertainment/million-dollar-listing-uae-interview-nassira-sekkay",
      span: "row-span-1",
    },
    {
      id: 3,
      type: "article",
      publication: "Arab News",
      title: "Million Dollar Listing UAE Stars on Why the Mideast Version Could Be the Best",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oSe161F9zJZyAu1tt3YF6OmjsM20Ck.png",
      link: "https://www.arabnews.com/node/2373591/lifestyle",
      span: "row-span-1",
    },
    {
      id: 4,
      type: "article",
      publication: "Khaleej Times",
      title: "Meet the Real Estate Mavericks of UAE",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-405vzoatZJCrNVjtIC4M5fgEUDUhes.png",
      link: "https://www.khaleejtimes.com/entertainment/meet-the-real-estate-mavericks-of-uae",
      span: "row-span-1",
    },
    {
      id: 5,
      type: "article",
      publication: "Emirates Woman",
      title: "Breaking Barriers in Luxury Real Estate",
      image: "/nassira-emirates-woman-luxury-real-estate.jpg",
      link: "#",
      span: "row-span-1",
    },
  ]

  return (
    <section id="press" className="relative py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left side - Text content */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">In the Press</h2>
            <p className="text-neutral-600 leading-relaxed mb-8 text-sm">
              Nassira Sekkay has been featured in major publications across the region, from Harper's Bazaar to Khaleej
              Times. Her journey from humble beginnings to becoming the "Wonder Woman of Real Estate" has captured the
              attention of media outlets worldwide, inspiring countless women to pursue their dreams in the luxury real
              estate industry.
            </p>
            <Link
              href="#media"
              className="inline-block text-sm font-medium border-b-2 border-neutral-900 hover:border-neutral-700 transition-colors pb-1"
            >
              View All Coverage
            </Link>
          </div>

          <div className="w-full flex-1 hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[280px]">
              {pressItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-2xl bg-neutral-900 hover:shadow-2xl transition-all duration-300 aspect-[4/5] md:aspect-auto ${item.span}`}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-900">
                      {item.publication}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-xl md:text-2xl mb-3 text-balance leading-tight">{item.title}</h3>
                    <span className="inline-flex items-center text-amber-500 text-sm font-medium group-hover:text-amber-400 transition-colors">
                      Read Article
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:hidden">
            <div className="grid grid-cols-2 gap-3">
              {pressItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl bg-neutral-900 hover:shadow-xl transition-all duration-300 aspect-[3/4]"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-medium text-neutral-900">
                      {item.publication}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <h3 className="font-serif text-xs mb-2 text-balance leading-tight line-clamp-3">{item.title}</h3>
                    <span className="inline-flex items-center text-amber-500 text-[10px] font-medium group-hover:text-amber-400 transition-colors">
                      Read
                      <svg
                        className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
