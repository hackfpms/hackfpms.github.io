import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Globe, Award } from "lucide-react"
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

  // Updated stats data with icons
  const stats = [
    { 
      number: "15+", 
      label: "Hackathons", 
      icon: <Users className="h-8 w-8 mb-4 text-primary" />,
      description: "Competitions attended"
    },
    { 
      number: "2", 
      label: "Finals", 
      icon: <Trophy className="h-8 w-8 mb-4 text-primary" />,
      description: "Top placements"
    },
    { 
      number: "8", 
      label: "Bounties", 
      icon: <Award className="h-8 w-8 mb-4 text-primary" />,
      description: "Special prizes"
    },
    { 
      number: "6", 
      label: "Countries", 
      icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
      description: "International presence"
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Enhanced Stats */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Journey
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            A timeline of our hackathon adventures and achievements
          </p>
          
          {/* Enhanced Stats Grid - now 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="flex justify-center">
                      {stat.icon}
                    </div>
                    
                    {/* Number */}
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-base font-medium mb-1">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                      <div key={event.id} className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="md:text-right text-left md:pr-8 space-y-4">
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
                        <div className="md:pl-8 relative">
                          <div className="absolute w-4 h-4 bg-primary rounded-full left-0 md:block hidden top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-glow"></div>
                          
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
                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
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