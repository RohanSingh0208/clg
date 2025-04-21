import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Programs from "@/components/programs"
import Campus from "@/components/campus"
import Testimonials from "@/components/testimonials"
import Events from "@/components/events"
import Faculty from "@/components/faculty"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Campus />
      <Testimonials />
      <Events />
      <Faculty />
      <Contact />
      <Footer />
    </main>
  )
}
