import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowRight, Trophy, Users, Globe, Award, Calendar, Clock } from "lucide-react"
import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic'
import MapSection from "@/components/map-section"

// New type for gallery images
type GalleryImage = {
  src: string;
  orientation: 'vertical' | 'horizontal';
}

function getImagesFromDirectory(orientation: 'horizontal' | 'vertical'): GalleryImage[] {
  const directoryPath = path.join(process.cwd(), 'public', 'images', orientation);

  try {
    const files = fs.readdirSync(directoryPath);
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => ({
        src: `/images/${orientation}/${file}`,
        orientation: orientation
      }));
  } catch (error) {
    console.error(`Error reading ${orientation} images directory:`, error);
    return [];
  }
}

export default function Home() {
  // Updated Stats data
  const stats = [
    { 
      number: "5", // Updated from 50+
      label: "Hackers", 
      icon: <Users className="h-8 w-8 mb-4 text-primary" />,
      description: "Active members"
    },
    { 
      number: "$25K+", 
      label: "In Prizes", 
      icon: <Trophy className="h-8 w-8 mb-4 text-primary" />,
      description: "Total winnings"
    },
    { 
      number: "10+", // Updated from 15+
      label: "Hackathons", 
      icon: <Award className="h-8 w-8 mb-4 text-primary" />,
      description: "Competitions attended"
    },
    { 
      number: "8", 
      label: "Countries", 
      icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
      description: "International presence"
    },
  ]

  // Next event data
  const nextEvent = {
    name: "ETHDam 2025",
    date: "May 9-11, 2025",
    time: "36 hours",
    location: "Amsterdam, Netherlands",
    image: "/images/ethdam.jpg",
    description: "Join us at EthDam a Blockchain Hackathon focussing mainly in AI, Privacy, and Security",
    prizes: ["$20000+ in Total Prizes", "Company Sponsor Bounties", "Swag and Goodies"],
    link: "/events/upcoming"
  }

  // Last event data
  const lastEvent = {
    name: "EthOxford",
    project: "DeDoctor",
    description: "Built a Federated Learning system for a decentralized AI model",
    achievement: "Near Protocol: Best account abstraction",
    image: "/images/ethoxford-2024.jpg",
    link: "/events/past"
  }

  const horizontalImages = getImagesFromDirectory('horizontal');
  const verticalImages = getImagesFromDirectory('vertical');

  // Combine and arrange images in a pattern
  const arrangeGalleryImages = () => {
    const pattern = [
      { type: 'h', span: 'col-span-8', aspect: 'aspect-[16/9]' }, // Large horizontal
      { type: 'v', span: 'col-span-4', aspect: 'aspect-[3/4]' }, // Vertical
      { type: 'v', span: 'col-span-4', aspect: 'aspect-[3/4]' }, // Vertical
      { type: 'h', span: 'col-span-8', aspect: 'aspect-[16/9]' }, // Large horizontal
      { type: 'h', span: 'col-span-6', aspect: 'aspect-[4/3]' }, // Medium horizontal
      { type: 'h', span: 'col-span-6', aspect: 'aspect-[4/3]' }, // Medium horizontal
    ];

    let hIndex = 0;
    let vIndex = 0;

    return pattern.map((item) => {
      const image = item.type === 'h'
        ? horizontalImages[hIndex++]
        : verticalImages[vIndex++];

      if (!image) return null;

      return {
        ...image,
        span: item.span,
        aspect: item.aspect
      };
    }).filter(Boolean);
  };

  const galleryImages = arrangeGalleryImages();

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Enhanced Stats */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            FPMS Hackers
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Building the future, one hackathon at a time
          </p>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, _index) => (
              <Card
                key={_index}
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

      {/* Next Event Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Next Event</h2>
            <Link
              href="/events/upcoming"
              className="text-primary hover:underline flex items-center text-sm"
            >
              View all upcoming events <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative aspect-[16/10] md:aspect-auto group">
                <Image
                  src={nextEvent.image}
                  alt={nextEvent.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    {nextEvent.date}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{nextEvent.name}</h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    {nextEvent.time} hackathon
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {nextEvent.description}
                  </p>

                  {/* Prizes */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold">Prizes & Opportunities</h4>
                    <ul className="space-y-1">
                      {nextEvent.prizes.map((prize, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                          {prize}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Single Action Button */}
                <div className="mt-4">
                  <Button variant="outline" className="w-full sm:w-auto" asChild>
                    <Link href={nextEvent.link} className="flex items-center justify-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Last Event Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Our Latest Achievement</h2>
            <Link
              href={lastEvent.link}
              className="text-primary hover:underline flex items-center text-sm"
            >
              View all past events <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <Card className="overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative aspect-video md:aspect-auto group">
                <Image
                  src={lastEvent.image}
                  alt={lastEvent.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Badge variant="secondary" className="mb-2">
                    {lastEvent.name}
                  </Badge>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 flex flex-col justify-center">
                {/* Project Name with Trophy */}
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                  <h3 className="text-3xl font-bold">{lastEvent.project}</h3>
                </div>

                {/* Achievement Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Award className="h-4 w-4" />
                    {lastEvent.achievement}
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {lastEvent.description}
                </p>

                {/* Action Button */}
                <Button variant="outline" className="w-fit" asChild>
                  <Link href={lastEvent.link} className="flex items-center gap-2">
                    View Project Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Add the MapSection before the Photo Gallery section */}
      <MapSection />

      {/* Photo Gallery Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Our Journey in Pictures</h2>

          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-12 gap-4">
              {galleryImages.map((image, i) => (
                image && (
                  <div
                    key={i}
                    className={`${image.span} relative rounded-lg overflow-hidden group`}
                  >
                    <div className={`${image.aspect} w-full`}>
                      <Image
                        src={image.src}
                        alt={`Gallery image ${i + 1}`}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-105"
                      />

                      {/* Hover overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )
              ))}
            </div>
          ) : (
            // Fallback when no images are found
            <Card className="p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/images/placeholder.jpg"
                  alt="No images found"
                  width={200}
                  height={200}
                  className="opacity-50"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-2">No Images Available</h3>
                  <p className="text-muted-foreground">
                    Please add images to the public/images/horizontal and public/images/vertical directories.
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>
    </main>
  )
}