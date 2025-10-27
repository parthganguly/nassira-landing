import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Al-Mansouri",
    image: "/images/investor-sarah.jpg",
    quote:
      "Investing with Nassira Properties was the best financial decision I've made. Their expertise in the Dubai market and personalized approach helped me achieve a 24% ROI on my first investment property.",
    project: "Marina Bay Residences",
    roi: "24%",
  },
  {
    id: 2,
    name: "Layla Hassan",
    image: "/images/investor-layla.jpg",
    quote:
      "As a female investor, I appreciated Nassira's understanding of my goals and risk tolerance. They guided me through every step, and my portfolio has grown significantly in just two years.",
    project: "Downtown Heights",
    roi: "19%",
  },
]

export function InvestorStories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">Investor Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from women who have achieved exceptional returns through strategic investments with Nassira Properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-lg">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.project} • {testimonial.roi} ROI
                  </p>
                </div>
              </div>
              <blockquote className="font-serif text-lg md:text-xl text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
