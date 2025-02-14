import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Experience
        </h2>

        {/* Upcoming Job */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>
                  Field Sales Representative - Bunzl Processor Division
                </CardTitle>
                <p className="text-muted-foreground">
                  Riverside, MO | Starting After Graduation
                </p>
              </div>
              <Badge variant="secondary">Upcoming</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Excited to start my career in field sales, leveraging my education
              in Professional Strategic Selling and internship experience to
              drive business growth and build strong client relationships.
            </p>
          </CardContent>
        </Card>

        {/* Cargill Experience */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>
                  Protein Sales Intern - Cargill Protein Headquarters
                </CardTitle>
                <p className="text-muted-foreground">
                  Wichita, KS | May 2024 – August 2024
                </p>
              </div>
              <Badge variant="secondary">Completed</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Observed and shadowed 12 members of the Cargill foodservice
                sales team
              </li>
              <li>
                Networked with over 80 different Cargill team members across
                various segments
              </li>
              <li>
                Shadowed cattle procurement team to understand market dynamics
              </li>
              <li>
                Collaborated on customer catalog development with pricing
                integration
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Current Server Role */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Server - Bigs Bar and Grill</CardTitle>
            <p className="text-muted-foreground">
              Wichita, KS | May 2023 - Present
            </p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Provide exceptional customer service in a fast-paced environment
              </li>
              <li>Demonstrate strong communication and interpersonal skills</li>
              <li>Utilize menu knowledge for recommendations and upselling</li>
            </ul>
          </CardContent>
        </Card>

        {/* Medical Experience */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Medical Assistant - Cancer Center of Kansas</CardTitle>
            <p className="text-muted-foreground">
              Wichita, KS | May 2022 - January 2023
            </p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Managed patient care and medical records</li>
              <li>Maintained medical supplies and equipment</li>
              <li>Provided direct patient care and support</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
