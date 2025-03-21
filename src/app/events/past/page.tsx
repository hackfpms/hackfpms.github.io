import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function PastEventsPage() {
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
              {/* 2024 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
                  <div className="bg-background border-2 border-primary text-primary font-bold px-6 py-2 rounded-full shadow-sm">
                    2024
                  </div>
                </div>
                
                {/* Event Item */}
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div className="text-right pr-8 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">HackUPC</h3>
                      <p className="text-sm text-muted-foreground">May 2024</p>
                      <p className="text-sm text-muted-foreground mt-1">Barcelona, Spain</p>
                    </div>
                    {/* Image on the left side */}
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="/images/hackupc-2024.jpg"
                        alt="HackUPC 2024 Team Photo"
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                  <div className="pl-8 relative">
                    {/* Timeline dot */}
                    <div className="absolute w-4 h-4 bg-primary rounded-full left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-glow"></div>
                    
                    <Card className="hover:shadow-lg transition-all">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-primary">1st Place</Badge>
                            <Badge variant="outline">Sustainability</Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Developed an innovative solution for sustainable urban mobility, focusing on reducing carbon emissions.
                        </p>
                        {/* Project highlights */}
                        <div className="bg-muted/50 p-3 rounded-lg mb-3">
                          <h4 className="font-medium mb-2">Project Highlights:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Real-time traffic optimization</li>
                            <li>• AI-powered route suggestions</li>
                            <li>• Carbon footprint tracking</li>
                          </ul>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">AI</Badge>
                          <Badge variant="secondary">IoT</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
                  <div className="bg-background border-2 border-primary text-primary font-bold px-4 py-1 rounded-full">
                    2023
                  </div>
                </div>

                {/* Event Item with consistent card design */}
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div className="text-right pr-8">
                    <h3 className="font-semibold text-lg">BruHack</h3>
                    <p className="text-sm text-muted-foreground">November 2023</p>
                    <p className="text-sm text-muted-foreground mt-1">Brussels, Belgium</p>
                  </div>
                  <div className="pl-8 relative">
                    {/* Enhanced timeline dot */}
                    <div className="absolute w-4 h-4 bg-primary rounded-full left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-glow"></div>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-primary">2nd Place</Badge>
                            <Badge variant="outline">Healthcare</Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Developed an AI-powered healthcare accessibility platform to improve patient care coordination.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="secondary">AI/ML</Badge>
                          <Badge variant="secondary">Next.js</Badge>
                          <Badge variant="secondary">Python</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Add more 2023 events */}
              </div>

              {/* Add more years as needed */}
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