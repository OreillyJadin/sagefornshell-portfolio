import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/sagefornshell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:sage.fornshell@gmail.com"
            className="text-foreground hover:text-primary"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="tel:316-773-8951"
            className="text-foreground hover:text-primary"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Sage Fornshell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
