import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"

const faculty = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    position: "Dean, School of Computer Science",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Ph.D. in Computer Science from MIT with over 15 years of experience in AI research and education.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "Prof. James Wilson",
    position: "Chair, Department of Business",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Former CEO with extensive industry experience and a passion for entrepreneurship education.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    name: "Dr. Maria Rodriguez",
    position: "Professor, Medical Sciences",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Award-winning researcher specializing in immunology with numerous publications in top medical journals.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 4,
    name: "Prof. David Okafor",
    position: "Director, Arts & Humanities",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Renowned author and scholar with expertise in comparative literature and cultural studies.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
]

export default function Faculty() {
  return (
    <section id="faculty" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Faculty</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our distinguished faculty members who are leaders in their fields.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member) => (
            <Card key={member.id} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium">{member.position}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.facebook}
                    aria-label="Facebook"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    aria-label="Twitter"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    aria-label="LinkedIn"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Our faculty members are committed to excellence in teaching, research, and service. They bring real-world
            experience and cutting-edge research into the classroom.
          </p>
        </div>
      </div>
    </section>
  )
}
