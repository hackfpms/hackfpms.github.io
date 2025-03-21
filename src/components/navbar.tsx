import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              HackFPMS
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/events/upcoming" className="text-sm text-muted-foreground hover:text-foreground">
              Upcoming Events
            </Link>
            <Link href="/events/past" className="text-sm text-muted-foreground hover:text-foreground">
              Past Events
            </Link>
            <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground">
              Team
            </Link>
            <Link href="/ressources" className="text-sm text-muted-foreground hover:text-foreground">
              Resources
            </Link>
            <Button asChild variant="default" size="sm">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 