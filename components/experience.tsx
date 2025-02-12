import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Summer Intern - Cargill Protein HQ</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Wichita, KS | Summer 2024</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Gained hands-on experience in protein industry operations</li>
              <li>Collaborated with cross-functional teams on business initiatives</li>
              <li>Developed strategic solutions for business challenges</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

