"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input placeholder="Name" required />
          </div>
          <div>
            <Input type="email" placeholder="Email" required />
          </div>
          <div>
            <Textarea placeholder="Message" required className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
}

