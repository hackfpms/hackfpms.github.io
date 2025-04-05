'use client'

import WorldMap from "react-svg-worldmap"

export default function Map() {
  const completedHackathons = [
    { country: "BE", value: 1 }, // Belgium
    { country: "GB", value: 1 }, // United Kingdom
    { country: "CH", value: 1 }, // Switzerland
    { country: "TH", value: 1 }, // Thailand (Bangkok)
    { country: "SG", value: 1 }, // Singapore
    { country: "ES", value: 1 }, // Spain
    { country: "PL", value: 1 }, // Poland
    { country: "NL", value: 1 }, // Netherlands
  ]

  const upcomingHackathons = [
    { country: "AR", value: 2 }, // Argentina
    { country: "FR", value: 2 }, // France
    { country: "IN", value: 2 }  // India
  ]

  const styleFunction = ({ countryCode }: { countryCode: string }) => {
    if (upcomingHackathons.some(h => h.country === countryCode)) {
      return {
        fill: "#f97316", // Orange for upcoming
        stroke: "#4b5563",
        strokeWidth: 1.5
      }
    }
    if (completedHackathons.some(h => h.country === countryCode)) {
      return {
        fill: "#22c55e", // Green for completed
        stroke: "#4b5563",
        strokeWidth: 1.5
      }
    }
    return {
      fill: "transparent",
      stroke: "#4b5563",
      strokeWidth: 2.5
    }
  }

  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <WorldMap
        size="xl"
        data={[...completedHackathons, ...upcomingHackathons]}
        tooltipBgColor="#374151"
        tooltipTextColor="white"
        backgroundColor="transparent"
        frame={false}
        richInteraction
        styleFunction={styleFunction}
        tooltipTextFunction={(country) => {
          const isUpcoming = upcomingHackathons.some(h => h.country === country.countryCode)
          const isCompleted = completedHackathons.some(h => h.country === country.countryCode)
          if (isUpcoming) return `${country.countryName}: Upcoming hackathon`
          if (isCompleted) return `${country.countryName}: Completed hackathon`
          return country.countryName
        }}
      />
    </div>
  )
}