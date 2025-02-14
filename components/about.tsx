import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BadgeCheck, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <GraduationCap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p>Kansas State University</p>
                <p className="text-muted-foreground">
                  B.S. Business Administration
                </p>
                <Badge className="mt-2">GPA: 3.7</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                <p>Dean's List</p>
                <p className="text-muted-foreground">
                  Fall 2021, Spring 2021, Spring 2023, Fall 2024
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <BadgeCheck className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                <p>Certified Nurse Aid (CNA)</p>
                <p className="text-muted-foreground">
                  Kansas Nurse Aide Registry
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Involvement</h3>
                <p>National Strategic Selling Institute</p>
                <p className="text-muted-foreground">Member Since 2022</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Professional Focus</h3>
          <p className="text-muted-foreground">
            Graduating with a degree in Professional Strategic Selling and
            transitioning into a Field Sales Representative role at Bunzl
            Processor Division. Combining academic excellence with practical
            experience in customer service, healthcare, and sales to drive
            business growth and build lasting client relationships in the
            processing industry.
          </p>
        </div>
      </div>
    </section>
  );
}
