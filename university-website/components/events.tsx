import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    id: 1,
    title: "Annual Research Symposium",
    date: "June 15, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    image: "/placeholder.svg?height=400&width=600",
    category: "Academic",
  },
  {
    id: 2,
    title: "International Student Welcome Week",
    date: "August 25-30, 2023",
    time: "Various Times",
    location: "Campus-wide",
    image: "/placeholder.svg?height=400&width=600",
    category: "Student Life",
  },
  {
    id: 3,
    title: "Career Fair: Tech & Engineering",
    date: "October 10, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "Student Center",
    image: "/placeholder.svg?height=400&width=600",
    category: "Career",
  },
  {
    id: 4,
    title: "Alumni Homecoming Weekend",
    date: "November 5-7, 2023",
    time: "Various Times",
    location: "Campus-wide",
    image: "/placeholder.svg?height=400&width=600",
    category: "Alumni",
  },
]

export default function Events() {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay connected with the latest happenings and opportunities on campus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <Badge className="absolute top-2 right-2">{event.category}</Badge>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{event.title}</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button>View All Events</Button>
        </div>
      </div>
    </section>
  )
}
