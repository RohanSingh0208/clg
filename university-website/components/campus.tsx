"use client"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

const campusFacilities = [
  {
    id: "libraries",
    name: "Libraries",
    description:
      "Our state-of-the-art libraries house over 2 million books, digital resources, and study spaces designed for collaborative and individual learning.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "labs",
    name: "Research Labs",
    description:
      "Cutting-edge research facilities equipped with the latest technology to support innovation and discovery across all disciplines.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "sports",
    name: "Sports Facilities",
    description:
      "Modern athletic centers featuring Olympic-sized pools, fitness studios, courts, and fields for recreational and competitive sports.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "housing",
    name: "Student Housing",
    description:
      "Comfortable and secure on-campus residences designed to create a supportive living and learning community for students.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "dining",
    name: "Dining Halls",
    description:
      "Multiple dining options offering diverse, nutritious meals prepared with locally-sourced ingredients to satisfy all dietary preferences.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function Campus() {
  return (
    <section id="campus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Facilities</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our modern campus designed to enhance your learning experience and student life.
          </p>
        </div>

        <Tab.Group>
          <Tab.List className="flex flex-wrap justify-center space-x-1 rounded-xl bg-muted p-1 mb-8">
            {campusFacilities.map((facility) => (
              <Tab
                key={facility.id}
                className={({ selected }) =>
                  cn(
                    "rounded-lg py-2.5 px-4 text-sm font-medium transition-all",
                    "ring-white ring-opacity-60 ring-offset-2 focus:outline-none",
                    selected
                      ? "bg-white shadow text-primary"
                      : "text-muted-foreground hover:bg-white/[0.12] hover:text-primary",
                  )
                }
              >
                {facility.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {campusFacilities.map((facility) => (
              <Tab.Panel
                key={facility.id}
                className={cn("rounded-xl bg-white p-3", "ring-white ring-opacity-60 focus:outline-none")}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{facility.name}</h3>
                    <p className="text-lg text-muted-foreground">{facility.description}</p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Modern facilities with the latest technology</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Accessible 24/7 for enrolled students</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Professional staff available for assistance</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Regular upgrades to meet evolving needs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}
