"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link as ScrollLink } from "react-scroll"

const navLinks = [
  { name: "Home", to: "hero", offset: -100 },
  { name: "About", to: "about", offset: -80 },
  { name: "Programs", to: "programs", offset: -80 },
  { name: "Campus", to: "campus", offset: -80 },
  { name: "Events", to: "events", offset: -80 },
  { name: "Faculty", to: "faculty", offset: -80 },
  { name: "Contact", to: "contact", offset: -80 },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => link.to)

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className={cn("text-2xl font-bold transition-colors", scrolled ? "text-primary" : "text-white")}>
            UniverCity
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              className={cn(
                "text-sm font-medium cursor-pointer transition-colors",
                scrolled ? "hover:text-primary" : "text-white hover:text-white/80",
                activeSection === link.to && (scrolled ? "text-primary" : "text-white font-bold"),
              )}
              activeClass={scrolled ? "text-primary" : "text-white font-bold"}
            >
              {link.name}
            </ScrollLink>
          ))}
          <Button className={cn(!scrolled && "bg-white text-primary hover:bg-white/90")}>Apply Now</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={cn("md:hidden", scrolled ? "text-primary" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                className="text-sm font-medium hover:text-primary cursor-pointer transition-colors py-2"
                activeClass="text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <Button className="w-full">Apply Now</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
