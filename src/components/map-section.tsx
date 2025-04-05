'use client'

import dynamic from 'next/dynamic'
import { Card } from "@/components/ui/card"

const WorldMap = dynamic(() => import('@/components/world-map'), {
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center">Loading map...</div>
})

export default function MapSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          <WorldMap />
          <Card className="p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold">Our Global Journey</h3>
              </div>
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#22c55e]" />
                  <span>Visited Destinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#f97316]" />
                  <span>Upcoming Destinations</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Countries Visited:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>🇧🇪 Belgium</li>
                    <li>🇬🇧 United Kingdom</li>
                    <li>🇨🇭 Switzerland</li>
                    <li>🇹🇭 Thailand</li>
                    <li>🇸🇬 Singapore</li>
                    <li>🇪🇸 Spain</li>
                    <li>🇵🇱 Poland</li>
                    <li>🇳🇱 Netherlands</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Upcoming Destinations:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>🇦🇷 Argentina</li>
                    <li>🇫🇷 France</li>
                    <li>🇮🇳 India</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}