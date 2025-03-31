import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {currentYear} HackFPMS. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-2">
          <Link href="https://github.com/hackfpms" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/company/hackfpms" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
} 