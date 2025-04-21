"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=800&width=1600",
    title: "Welcome to UniverCity",
    subtitle: "Shaping Tomorrow's Leaders Today",
    description: "Discover a world-class education that prepares you for success in a global society.",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=800&width=1600",
    title: "Excellence in Education",
    subtitle: "Innovative Programs for the Modern World",
    description: "Our cutting-edge curriculum is designed to meet the challenges of today and tomorrow.",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=800&width=1600",
    title: "Join Our Community",
    subtitle: "Where Diversity Meets Opportunity",
    description: "Experience a vibrant campus life with students from around the globe.",
  },
]

export default function Hero() {
  const autoplayOptions = {
    delay: 5000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  }

  const autoplayPlugin = useRef(Autoplay(autoplayOptions))

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false }, [autoplayPlugin.current])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const toggleAutoplay = useCallback(() => {
    if (!emblaApi) return

    if (isPaused) {
      autoplayPlugin.current.play()
    } else {
      autoplayPlugin.current.stop()
    }

    setIsPaused(!isPaused)
  }, [emblaApi, isPaused])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] relative min-w-0 h-full">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white p-4">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-xl md:text-2xl font-medium mb-2 animate-fadeIn">{slide.subtitle}</h2>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slideUp">{slide.title}</h1>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fadeIn">{slide.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp">
                    <Button size="lg" className="text-lg">
                      Apply Now
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg">
                      Virtual Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm transition-all"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm transition-all"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause/Play Button */}
      <button
        className="absolute bottom-8 right-8 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm transition-all"
        onClick={toggleAutoplay}
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
        {isPaused ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-white"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-white"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        )}
      </button>
    </section>
  )
}
