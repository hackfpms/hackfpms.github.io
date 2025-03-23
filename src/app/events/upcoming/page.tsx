import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Link as LinkIcon } from "lucide-react"
import Link from "next/link"

type UpcomingEvent = {
  name: string
  date: string
  location: {
    city: string
    country: string
    venue?: string
  }
  status: 'planning' | 'confirmed' | 'registration-open'
  description: string
  registrationInfo: {
    opens?: string
    teamSize: string
  }
  prizes?: string
  website: string
}

const upcomingEvents: UpcomingEvent[] = [
  {
    name: "Junction 2024",
    date: "November 15-17, 2024",
    location: {
      city: "Helsinki",
      country: "Finland",
      venue: "Aalto University"
    },
    status: "planning",
    description: "Europe's largest hackathon, bringing together over 1000 developers. Join us for an unforgettable weekend of innovation, coding, and collaboration.",
    registrationInfo: {
      opens: "July 2024",
      teamSize: "4-5",
    },
    prizes: "€20,000+",
    website: "https://junction.hack/"
  },
  {
    name: "ETH Global London",
    date: "March 15-17, 2024",
    location: {
      city: "London",
      country: "United Kingdom"
    },
    status: "confirmed",
    description: "One of the largest Ethereum hackathons in Europe. Build the future of Web3 with developers from around the world.",
    registrationInfo: {
      teamSize: "2-4",
    },
    prizes: "£50,000+",
    website: "https://ethglobal.com/"
  }
  // Add more events as needed
]

export default function UpcomingEventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-col items-center justify-center min-h-[40vh] bg-gradient-to-b from-background to-secondary/20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Upcoming Events
        </h1>
        <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8 max-w-2xl">
          Check out where you&apos;ll find us next!
        </p>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left side - Main info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">{event.name}</h3>
                        <Badge variant={
                          event.status === 'registration-open' ? 'default' :
                          event.status === 'confirmed' ? 'secondary' : 'outline'
                        } className="ml-2">
                          {event.status === 'registration-open' ? 'Registration Open' :
                           event.status === 'confirmed' ? 'Confirmed' : 'Planning'}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1.5" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1.5" />
                          {event.location.city}, {event.location.country}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1.5" />
                          Team: {event.registrationInfo.teamSize}
                        </div>
                        {event.prizes && (
                          <div className="flex items-center">
                            <span className="mr-1.5">🏆</span>
                            {event.prizes}
                          </div>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {event.description}
                      </p>
                    </div>

                    {/* Right side - Simplified */}
                    <div className="md:w-48 flex flex-col justify-between">
                      <div className="text-sm">
                        <p className="text-muted-foreground">
                          Registration {event.registrationInfo.opens ? 
                            `opens ${event.registrationInfo.opens}` : 'TBA'}
                        </p>
                      </div>
                      
                      <Link 
                        href={event.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-4"
                      >
                        <Button size="sm" variant="outline" className="w-full">
                          <LinkIcon className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}