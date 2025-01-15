"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Sunrise, Sunset, Moon, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

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
  cities: City[]
}

const prayerIcons = {
  fajr: Sunrise,
  sunrise: Sun,
  dhuhr: Sun,
  asr: Sun,
  maghrib: Sunset,
  isha: Moon,
}

export function PrayerTimesTable({ cities }: PrayerTimesTableProps) {
  const [selectedCity, setSelectedCity] = useState(cities[0].name)
  const [currentTime, setCurrentTime] = useState(new Date())
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const isCurrentPrayer = (prayerTime: string) => {
    const [hours, minutes] = prayerTime.split(":").map(Number)
    const prayerDate = new Date(currentTime)
    prayerDate.setHours(hours, minutes, 0)
    return currentTime >= prayerDate && currentTime < new Date(prayerDate.getTime() + 60 * 60 * 1000)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -100 : 100
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4 sm:p-6">
        <div className="relative mb-4">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {cities.map((city) => (
              <button
                key={city.name}
                onClick={() => setSelectedCity(city.name)}
                className={`snap-start shrink-0 px-4 py-2 text-xs sm:text-sm mr-2 last:mr-0 rounded-full transition-colors ${
                  selectedCity === city.name
                    ? 'bg-primary text-zinc-50'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-1 rounded-full shadow-md sm:hidden"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-1 rounded-full shadow-md sm:hidden"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <AnimatePresence mode="wait">
          {cities.map((city) => (
            city.name === selectedCity && (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {Object.entries(city.times).map(([prayer, time]) => {
                  const Icon = prayerIcons[prayer as keyof typeof prayerIcons]
                  return (
                    <Card key={prayer} className={`overflow-hidden ${isCurrentPrayer(time) ? 'ring-2 ring-primary' : ''}`}>
                      <CardContent className="p-3 sm:p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-medium capitalize">{prayer}</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">{time}</p>
                          </div>
                        </div>
                        {isCurrentPrayer(time) && (
                          <div className="flex items-center text-primary">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            <span className="text-xs">Current</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

