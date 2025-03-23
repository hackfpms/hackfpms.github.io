import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Article = {
  title: string
  description: string
  image: string
  url: string
  tags: string[]
}

const articles: Article[] = [
  {
    title: "Building a Telegram Mini App",
    description: "A step by step guide to building a Telegram Mini App",
    image: "/images/resources/telegram-mini-app.jpg",
    url: "https://medium.com/@tanguyvans/building-a-telegram-mini-app-a-step-by-step-guide-d921d2e23442",
    tags: ["Telegram Mini App", "Next.js", "TypeScript"]
  },
  // Add more articles here
]

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-col items-center justify-center min-h-[40vh] bg-gradient-to-b from-background to-secondary/20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Resources & Articles
        </h1>
        <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8 max-w-2xl">
          Learn from our experiences and insights
        </p>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Link 
                href={article.url} 
                key={index}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.description}
                    </p>

                    <div className="flex justify-end">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 