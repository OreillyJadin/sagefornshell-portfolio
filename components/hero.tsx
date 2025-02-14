import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Manhattan.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center text-white z-10 p-4">
        {/* Correctly Sized Headshot Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/Fornshell_Sage_Headshot-2.jpg" // Path to your headshot
            alt="Sage Fornshell"
            className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-white shadow-lg" // Valid Tailwind classes
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">Sage Fornshell</h1>
        <p className="text-xl md:text-2xl mb-8">
          Sales Professional @ Kansas State University
        </p>
        <a href="#experience">
          <Button className="bg-primary hover:bg-primary/90">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}
