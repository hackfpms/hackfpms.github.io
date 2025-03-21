import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-b from-background to-secondary/20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Our Events
        </h1>
        <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8 max-w-2xl">
          From upcoming hackathons to past achievements
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/events/upcoming">Upcoming Events</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/events/past">Past Events</Link>
          </Button>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">HackULB 2024</h3>
                    <p className="text-muted-foreground">April 15-16, 2024</p>
                  </div>
                  <Badge variant="secondary">Registration Open</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Annual hackathon at ULB focusing on sustainable technology solutions.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events/upcoming">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            {/* Add more upcoming events as needed */}
          </div>
        </div>
      </section>

      {/* Past Events Highlight */}
      <section className="py-20 bg-secondary/20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Past Achievements</h2>
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
                  <Link href="/events/past">View Details</Link>
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
                  <Link href="/events/past">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}