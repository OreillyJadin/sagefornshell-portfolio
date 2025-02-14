"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="tel:316-773-8951"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary"
              >
                <Phone className="h-5 w-5" />
                <span>316-773-8951</span>
              </a>
              <a
                href="mailto:sagemarie03@ksu.edu"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span>sagemarie03@ksu.edu</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sagefornshell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/sagefornshell</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input placeholder="Name" required />
            </div>
            <div>
              <Input type="email" placeholder="Email" required />
            </div>
            <div>
              <Textarea
                placeholder="Message"
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
