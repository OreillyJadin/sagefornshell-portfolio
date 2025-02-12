import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-foreground hover:text-primary">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Sage Fornshell. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

