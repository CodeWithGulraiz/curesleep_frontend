"use client"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 py-16 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-4">
             <img src={logo} />
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional home sleep testing and virtual treatment across Canada.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Sleep Evaluation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Home Sleep Test
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  CPAP Therapy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Follow-Up Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  How HSAT Works
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Compliance Info
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Returns & Billing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@curesleep.ca"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@curesleep.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+17806651500" className="text-muted-foreground hover:text-primary transition-colors">
                  (780) 665-1500
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">St. Albert, Alberta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Restora Sleep. All rights reserved.</p>
            <p className="text-xs mt-3 sm:mt-0">
              Telemedicine across AB, BC, MB, ON by licensed clinicians. PIPEDA/PHIPA compliant.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
