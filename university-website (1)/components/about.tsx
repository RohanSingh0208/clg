import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About UniverCity</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Established in 1965, UniverCity has been at the forefront of higher education for over five decades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=800&width=1200" alt="University campus" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide accessible, high-quality education that empowers students to achieve their full potential and
              make meaningful contributions to society.
            </p>

            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a globally recognized institution known for academic excellence, innovative research, and commitment
              to social responsibility.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h4 className="text-4xl font-bold text-primary">25,000+</h4>
                <p className="text-sm font-medium">Students</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h4 className="text-4xl font-bold text-primary">1,200+</h4>
                <p className="text-sm font-medium">Faculty Members</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h4 className="text-4xl font-bold text-primary">150+</h4>
                <p className="text-sm font-medium">Programs</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h4 className="text-4xl font-bold text-primary">95%</h4>
                <p className="text-sm font-medium">Employment Rate</p>
              </div>
            </div>

            <Button className="mt-4">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
