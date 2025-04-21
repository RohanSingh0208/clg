import { BookOpen, Code, FlaskRoundIcon as Flask, Stethoscope, Briefcase, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const programs = [
  {
    id: 1,
    title: "Computer Science",
    description: "Develop cutting-edge software and explore artificial intelligence, cybersecurity, and data science.",
    icon: Code,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Business Administration",
    description: "Learn essential management skills, entrepreneurship, finance, and marketing strategies.",
    icon: Briefcase,
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 3,
    title: "Medicine & Health Sciences",
    description: "Prepare for careers in healthcare with our comprehensive medical and health science programs.",
    icon: Stethoscope,
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    id: 4,
    title: "Arts & Humanities",
    description: "Explore literature, philosophy, history, and creative arts to develop critical thinking skills.",
    icon: Palette,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 5,
    title: "Natural Sciences",
    description: "Study biology, chemistry, physics, and environmental science with hands-on laboratory experience.",
    icon: Flask,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 6,
    title: "Education",
    description: "Become an inspiring educator with our teacher training and educational leadership programs.",
    icon: BookOpen,
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our diverse range of undergraduate and graduate programs designed to prepare you for success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-full ${program.color} flex items-center justify-center mb-4`}>
                  <program.icon className={`h-6 w-6 ${program.iconColor}`} />
                </div>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Programs</Button>
        </div>
      </div>
    </section>
  )
}
