import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Define a type for event data
type Achievement = {
  type: 'ranking' | 'bounty'
  details: string
}

type PastEvent = {
  id: string
  year: number
  name: string
  projectName: string
  date: string
  location: {
    city: string
    country: string
  }
  image?: string
  achievements: Achievement[]
  description: string
  highlights?: string[]
  technologies: string[]
}

// Create an array of past events
const pastEvents: PastEvent[] = [
  {
    id: "hackupc-2024",
    year: 2024,
    name: "HackUPC",
    projectName: "EcoMobile",
    date: "May 2024",
    location: {
      city: "Barcelona",
      country: "Spain"
    },
    image: "/images/hackupc-2024.jpg",
    achievements: [
      {
        type: "ranking",
        details: "1st Place",
      },
      {
        type: "bounty",
        details: "Best UI Design",
      },
      {
        type: "bounty",
        details: "MLH: Best Use of Cloud",
      }
    ],
    description: "Developed an innovative solution for sustainable urban mobility, focusing on reducing carbon emissions.",
    technologies: ["React", "AI", "IoT"]
  },
  {
    id: "ethdam-2024",
    year: 2024,
    name: "EthDam",
    projectName: "Endorsis",
    date: "April 2024",
    location: {
      city: "Amsterdam",
      country: "Netherlands"
    },
    image: "/images/ethdam-2024.jpg",
    achievements: [
    ],
    description: "Created a platform for endorsing and verifying skills",
    technologies: ["Blockchain", "NFT", "Oasis"]
  },
  {
    id: "ethoxford-2024",
    year: 2024,
    name: "EthOxford",
    projectName: "DeDoctor",
    date: "May 2024",
    location: {
      city: "Oxford",
      country: "United Kingdom"
    },
    image: "/images/ethoxford-2024.jpg",
    achievements: [
      {
        type: "bounty",
        details: "Near Protocol: Best account abstraction",
      }
    ],
    description: "Built a Federated Learning system for a decentralized AI model",
    technologies: ["Blockchain", "AI", "React"]
  },
  {
    id: "Lauzhack-2023",
    year: 2023,
    name: "Lauzhack",
    projectName: "StockBot",
    date: "December 2023",
    location: {
      city: "Lausanne",
      country: "Switzerland"
    },
    image: "/images/lauzhack-2023.jpg",
    achievements: [
      {
        type: "bounty",
        details: "Swissquote",
      }
    ],
    description: "Build a Telegram bot to send newsletters about their interets stocks",
    technologies: ["Python", "Telegram API"]
  },
  {
    id: "hackupc-2023",
    year: 2023,
    name: "HackUPC",
    projectName: "Ski telemetry",
    date: "May 2023",
    location: {
      city: "Barcelona",
      country: "Spain"
    },
    image: "/images/hackupc-2023.jpg",
    achievements: [
    ],
    description: "Developed a telemetry system using IoT devices to track skiers' performance and provide real-time feedback.",
    technologies: ["React", "AI", "IoT"]
  },
  // Add more events here
]

export default function PastEventsPage() {
  // Group events by year
  const eventsByYear = pastEvents.reduce((acc, event) => {
    if (!acc[event.year]) {
      acc[event.year] = [];
    }
    acc[event.year].push(event);
    return acc;
  }, {} as Record<number, PastEvent[]>);

  // Sort years in descending order
  const sortedYears = Object.keys(eventsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Enhanced Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-b from-background to-secondary/20 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Journey
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl">
            A timeline of our hackathon adventures and achievements
          </p>
          {/* Quick stats */}
          <div className="flex gap-8 justify-center mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Hackathons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section with Enhanced Header */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section introduction */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold mb-4">Milestones & Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From our first hackathon to international victories, each event has shaped our team&apos;s journey and expertise.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-border to-border"></div>

            {/* Timeline items */}
            <div className="space-y-20">
              {sortedYears.map((year) => (
                <div key={year} className="relative">
                  {/* Year marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
                    <div className="bg-background border-2 border-primary text-primary font-bold px-6 py-2 rounded-full shadow-sm">
                      {year}
                    </div>
                  </div>

                  {/* Events for this year */}
                  <div className="space-y-12 mt-8">
                    {eventsByYear[year].map((event) => (
                      <div key={event.id} className="grid grid-cols-2 gap-8">
                        <div className="text-right pr-8 space-y-4">
                          <div>
                            <h3 className="font-semibold text-lg">{event.name}</h3>
                            <p className="text-sm text-muted-foreground">{event.date}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              {event.location.city}, {event.location.country}
                            </p>
                          </div>
                          {event.image && (
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                              <Image
                                src={event.image}
                                alt={`${event.name} Team Photo`}
                                fill
                                className="object-cover hover:scale-105 transition-transform"
                              />
                            </div>
                          )}
                        </div>
                        <div className="pl-8 relative">
                          <div className="absolute w-4 h-4 bg-primary rounded-full left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-glow"></div>
                          
                          <Card className="hover:shadow-lg transition-all">
                            <CardContent className="pt-4 pb-4">
                              <div className="space-y-4">
                                {/* Project Title - Always present */}
                                <div className="flex items-center justify-between -mx-6 px-6 py-2 border-b border-border/50">
                                  <h3 className="font-semibold text-lg">{event.projectName}</h3>
                                </div>

                                {/* First Place Winner Banner - Only for winners */}
                                {event.achievements.some(a => a.type === 'ranking' && a.details.includes('1st Place')) && (
                                  <div className="flex items-center justify-between bg-primary/10 -mx-6 px-6 py-3 border-y border-primary/20">
                                    <div className="flex items-center gap-2">
                                      <span className="text-2xl">🏆</span>
                                      <span className="font-semibold text-primary">Hackathon Winners</span>
                                    </div>
                                    <Badge className="bg-primary/90 text-background hover:bg-primary">
                                      1st Place
                                    </Badge>
                                  </div>
                                )}

                                {/* Description */}
                                <p className="text-sm text-muted-foreground">
                                  {event.description}
                                </p>

                                {/* Bounties Section - Colorful Achievement Style */}
                                {event.achievements.some(a => a.type === 'bounty') && (
                                  <div className="space-y-2">
                                    <div className="grid grid-cols-2 gap-2">
                                      {event.achievements
                                        .filter(a => a.type === 'bounty')
                                        .map((achievement, index) => {
                                          const colorSchemes = [
                                            'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-500',
                                            'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-500',
                                            'from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-500',
                                            'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-500'
                                          ];
                                          const colorScheme = colorSchemes[index % colorSchemes.length];

                                          return (
                                            <div 
                                              key={index}
                                              className={`relative group rounded-lg p-2.5 border bg-gradient-to-br ${colorScheme} transition-all hover:scale-[1.02]`}
                                            >
                                              <div className="absolute top-1.5 right-1.5 opacity-20 text-lg group-hover:opacity-40 transition-opacity">
                                                🏅
                                              </div>
                                              <div>
                                                <div className="text-sm font-medium pr-5">
                                                  {achievement.details}
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        })}
                                    </div>
                                  </div>
                                )}

                                {/* Technologies */}
                                <div className="flex gap-2 flex-wrap pt-2 border-t border-border/50">
                                  {event.technologies.map((tech, index) => (
                                    <Badge key={index} variant="outline">{tech}</Badge>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground">
              And this is just the beginning...
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}