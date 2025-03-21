import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-background to-secondary/20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          HackFPMS
        </h1>
        <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8 max-w-2xl">
          We are FPMS's competitive hackathon team, turning ideas into winning projects.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/team">Meet the Team</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/events/upcoming">Upcoming Events</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-muted-foreground">Hackathons Attended</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <h3 className="text-3xl font-bold mb-2">8</h3>
              <p className="text-muted-foreground">Awards Won</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <h3 className="text-3xl font-bold mb-2">12</h3>
              <p className="text-muted-foreground">Team Members</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20 bg-secondary/20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">HackUPC 2024</h3>
                  <Badge>1st Place</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Created an innovative solution for sustainable urban mobility.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events/past">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">BruHack 2023</h3>
                  <Badge>2nd Place</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Developed an AI-powered solution for healthcare accessibility.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events/past">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate students who want to build amazing things and participate in hackathons.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}