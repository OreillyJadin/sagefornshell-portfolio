import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Target } from "lucide-react"

export default function About() {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <GraduationCap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p>Kansas State University</p>
                <p className="text-muted-foreground">Graduating May 2025</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p>Cargill Protein HQ</p>
                <p className="text-muted-foreground">Summer Intern 2024</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Target className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Focus</h3>
                <p>Sales & Consulting</p>
                <p className="text-muted-foreground">Business Solutions</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

