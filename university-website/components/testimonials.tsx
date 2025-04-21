"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Computer Science Graduate, 2022",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "My experience at UniverCity transformed my career prospects. The professors were incredibly supportive, and the hands-on projects prepared me for real-world challenges in the tech industry.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Administration Student",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The business program offers incredible networking opportunities with industry leaders. I've secured an internship at a Fortune 500 company thanks to connections made through the university's career services.",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Medicine Graduate, 2021",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The medical program's emphasis on both clinical skills and patient care philosophy has made me a more compassionate and effective physician. The simulation labs were particularly valuable.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Engineering Student",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The engineering department's facilities are world-class. I've had the opportunity to work on cutting-edge research projects alongside renowned professors, which has been invaluable for my professional development.",
  },
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)

    // Auto-scroll every 5 seconds
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, 5000)

    return () => {
      emblaApi.off("select", onSelect)
      clearInterval(autoplay)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear what our students and alumni have to say about their experience at UniverCity.
          </p>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <QuoteIcon className="h-10 w-10 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex ? "bg-primary scale-125" : "bg-primary/30"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
