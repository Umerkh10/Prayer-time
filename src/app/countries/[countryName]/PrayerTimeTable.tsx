"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Sunrise, Sunset, Moon } from 'lucide-react'

interface PrayerTime {
  fajr: string
  sunrise: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
}

interface City {
  name: string
  times: PrayerTime
}

interface PrayerTimesTableProps {
  city: City[]
}

const prayerIcons = {
  fajr: Sunrise,
  sunrise: Sun,
  dhuhr: Sun,
  asr: Sun,
  maghrib: Sunset,
  isha: Moon,
}

export function PrayerTimesTable({ city }: PrayerTimesTableProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {Array.isArray(city) && city.length > 0 ? (
      city.map((city) => (
        <Card key={city.name} className="overflow-hidden hover:shadow-lg transition-shadow">
          <Link href={`/${city.name.toLowerCase()}`} className="block h-full">
            <CardHeader className="bg-primary text-zinc-100 p-4">
              <CardTitle className="text-xl font-bold">{city.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(prayerIcons).map(([prayer, Icon]) => (
                  <div key={prayer} className="flex flex-col items-center justify-center p-2">
                    <Icon className="h-6 w-6 text-primary mb-1" />
                    <p className="text-xs font-medium capitalize">{prayer}</p>
                    <p className="text-sm font-bold">{city.times[prayer as keyof PrayerTime]}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Link>
        </Card>
      ))
    ) : (
      <p>No cities available.</p>
    )}
  </div>
  )
}

