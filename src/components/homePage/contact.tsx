"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready for Better <span className="text-primary">Sleep?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Take the first step towards restful nights. Our sleep specialists are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 p-8 bg-muted/30 rounded-xl border border-border">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We'll contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <textarea
                  placeholder="Tell us about your sleep concerns..."
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 bg-muted/30 rounded-xl border border-border">
              <div className="flex gap-4">
                <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (780) 665-1500</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-muted/30 rounded-xl border border-border">
              <div className="flex gap-4">
                <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">info@curesleep.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-muted/30 rounded-xl border border-border">
              <div className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">St. Albert, AB Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
