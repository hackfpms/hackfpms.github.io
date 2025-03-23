import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Team Photo */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/team-photo.jpg"
            alt="HackFPMS Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Have questions or want to join our next hackathon adventure?
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Meet the HackFPMS Team</h2>
          <p className="text-muted-foreground">
            We're a group of passionate students from FPMS, dedicated to fostering innovation 
            and collaboration through hackathons. Whether you're interested in participating 
            in our next event or just want to learn more about what we do, we'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-8">
            {/* Email Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Mail className="w-8 h-8 mb-4 text-primary" />
                  <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
                  <p className="text-muted-foreground mb-4">
                    For general inquiries and collaboration opportunities
                  </p>
                  <Link href="mailto:contact@hackfpms.com">
                    <Button variant="default" size="lg">
                      contact@hackfpms.com
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Social Links Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <h2 className="text-2xl font-semibold mb-4">Follow Our Journey</h2>
                  <div className="flex gap-4">
                    <Link href="https://github.com/hackfpms" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg" className="gap-2">
                        <Github className="w-5 h-5" />
                        GitHub
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com/company/hackfpms" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg" className="gap-2">
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Message */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                We typically respond within 24 hours during weekdays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Team Photos Section */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event Photos */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/team-event-1.jpg"
                alt="Team at Junction 2023"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/team-event-2.jpg"
                alt="Team at ETH Global"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Our team at recent hackathon events
          </p>
        </div>
      </section>
    </main>
  )
}
