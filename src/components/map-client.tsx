'use client'

import dynamic from 'next/dynamic'

const WorldMap = dynamic(() => import('./world-map'), {
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center">Loading map...</div>
})

export default function MapClient() {
  return <WorldMap />
} 