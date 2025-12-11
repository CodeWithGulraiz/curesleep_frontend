"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "../../components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-sm font-bold">
              CS
            </div>
            <span className={isScrolled ? "text-foreground" : "text-white"}>CureSleep</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <a
              href="#"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:bg-muted hover:text-primary" : "text-white hover:bg-white/10"
              }`}
            >
              Home
            </a>
            <a
              href="#"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:bg-muted hover:text-primary" : "text-white hover:bg-white/10"
              }`}
            >
              How It Works
            </a>
            <a
              href="#"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:bg-muted hover:text-primary" : "text-white hover:bg-white/10"
              }`}
            >
              Services
            </a>
            <a
              href="#"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:bg-muted hover:text-primary" : "text-white hover:bg-white/10"
              }`}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+17806651500"
              className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isScrolled ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(780) 665-1500</span>
            </a>
            <Button
              size="sm"
              className={`${
                isScrolled
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "border-white text-white bg-transparent hover:bg-white/10"
              }`}
              variant={isScrolled ? "default" : "outline"}
            >
              Get Started
            </Button>
            <button
              className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border divide-y divide-border">
            <div className="px-4 py-4 space-y-2">
              <a
                href="#"
                className="block px-3 py-2 text-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors"
              >
                How It Works
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="px-4 py-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
