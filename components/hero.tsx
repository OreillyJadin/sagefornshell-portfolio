import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${process.env.NEXT_PUBLIC_VERCEL_URL ? "https://sjc.microlink.io/tEBuqweV-FofmhMsSXxvgOuwvuKy8N5zuI-MCSjD_fzOmNb7Khjll5yoPbTfqWcwn0INJ7F5EWEvHVb2sQjr3Q.jpeg" : "/placeholder.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center text-white z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Sage Fornshell</h1>
        <p className="text-xl md:text-2xl mb-8">Sales Professional & Business Consultant</p>
        <Button className="bg-primary hover:bg-primary/90">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

