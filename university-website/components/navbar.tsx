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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
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
          <span className="text-2xl font-bold text-primary">UniverCity</span>
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
              className="text-sm font-medium hover:text-primary cursor-pointer transition-colors"
              activeClass="text-primary"
            >
              {link.name}
            </ScrollLink>
          ))}
          <Button>Apply Now</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4">
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
