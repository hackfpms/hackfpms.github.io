import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Junction 2024</h3>
                    <p className="text-muted-foreground">November 15-17, 2024</p>
                    <p className="text-muted-foreground">Helsinki, Finland</p>
                  </div>
                  <Badge variant="secondary">Planning to Attend</Badge>
                </div>
                <div className="mt-4 space-y-4">
                  <p>Europe&apos;s largest hackathon, bringing together over 1000 developers.</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>🎯 Registration Opens: July 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>👥 Team Size: 4-5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Add more upcoming events */}
          </div>
        </div>
      </section>
    </main>
  )
}