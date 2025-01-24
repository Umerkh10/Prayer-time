"use client"

import { useEffect, useState } from "react"
import { PrayerTimes, CalculationMethod, Madhab } from "adhan"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun, Sunrise, Sunset } from "lucide-react"
import { countriesData, type City } from "./citiesAndTimezones"

interface PrayerTime {
  fajr: string
  sunrise: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
  current?: string
}

interface PrayerTimesTableProps {
  country: string
  timezone: string
}

const prayerIcons = {
  fajr: Sunrise,
  dhuhr: Sun,
  asr: Sun,
  maghrib: Sunset,
  isha: Moon,
}

const getCalculationMethod = (country: string) => {
  switch (country) {
    case "Pakistan":
      return CalculationMethod.Karachi()
    case "United States":
    case "Germany":
      return CalculationMethod.NorthAmerica()
    case "United Kingdom":
      return CalculationMethod.MuslimWorldLeague()
    case "Saudi Arabia":
      return CalculationMethod.UmmAlQura()
    case "Egypt":
      return CalculationMethod.Egyptian()
    // Add other countries as needed...
    default:
      return CalculationMethod.MuslimWorldLeague()
  }
}

export function PrayerTimesTable({ country }: PrayerTimesTableProps) {
  const [cities, setCities] = useState<City[]>([])
  const [prayerTimes, setPrayerTimes] = useState<Record<string, PrayerTime>>({})
  const [selectedMadhab, setSelectedMadhab] = useState<keyof typeof Madhab>("Shafi")
  const [selectedTimezone, setSelectedTimezone] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (countriesData[country]) {
      setSelectedTimezone(countriesData[country].timezones[0])
    } else {
      setError(`No data available for ${country}.`)
    }
  }, [country])

  const calculatePrayerTimes = () => {
    if (!countriesData[country] || !selectedTimezone) return

    const cityList = countriesData[country].cities[selectedTimezone]
    if (!cityList) {
      setError(`No cities available for ${country} in ${selectedTimezone}.`)
      return
    }

    const now = new Date()
    const calculationMethod = getCalculationMethod(country)
    calculationMethod.madhab = Madhab[selectedMadhab]

    const times = cityList.reduce(
      (acc, city) => {
        const prayerTimes = new PrayerTimes(
          { latitude: city.latitude, longitude: city.longitude },
          now,
          calculationMethod,
        )

        const formatTime = (time: Date) =>
          time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: selectedTimezone,
          })

        acc[city.name] = {
          fajr: formatTime(prayerTimes.fajr),
          sunrise: formatTime(prayerTimes.sunrise),
          dhuhr: formatTime(prayerTimes.dhuhr),
          asr: formatTime(prayerTimes.asr),
          maghrib: formatTime(prayerTimes.maghrib),
          isha: formatTime(prayerTimes.isha),
          current: prayerTimes.currentPrayer(now) || undefined,
        }

        return acc
      },
      {} as Record<string, PrayerTime>,
    )

    setCities(cityList)
    setPrayerTimes(times)
    setError(null)
  }

  useEffect(() => {
    calculatePrayerTimes()
  }, [country, selectedMadhab, selectedTimezone])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 space-y-4">
        <div>
          <label htmlFor="madhab" className="block text-sm font-medium mb-2">
            Select Madhab:
          </label>
          <Select value={selectedMadhab} onValueChange={(value) => setSelectedMadhab(value as keyof typeof Madhab)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Madhab" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Shafi">Shafi</SelectItem>
              <SelectItem value="Hanafi">Hanafi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {countriesData[country]?.timezones.length > 1 && (
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium mb-2">
              Select Timezone:
            </label>
            <Select value={selectedTimezone} onValueChange={setSelectedTimezone}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Timezone" />
              </SelectTrigger>
              <SelectContent>
                {countriesData[country].timezones.map((timezone: string) => (
                  <SelectItem key={timezone} value={timezone}>
                    {timezone}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Mobile view */}
      <div className="grid gap-6 md:hidden">
        {cities.map((city) => (
          <CardContent key={city.name}>
            <CardHeader>
              <CardTitle>{city.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {Object.entries(prayerTimes[city.name] || {}).map(([prayer, time]) => {
                  if (prayer === "current") return null
                  return (
                    <li key={prayer} className="flex items-center justify-between">
                      <span className="flex items-center">{prayer.charAt(0).toUpperCase() + prayer.slice(1)}</span>
                      <span className={prayerTimes[city.name]?.current === prayer ? "font-bold text-primary" : ""}>
                        {time}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </CardContent>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>City</TableHead>
              {Object.entries(prayerIcons).map(([prayer, Icon]) => (
                <TableHead key={prayer}>
                  <div className="flex items-center">{prayer.charAt(0).toUpperCase() + prayer.slice(1)}</div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {cities.map((city) => (
              <TableRow key={city.name}>
                <TableCell className="font-medium">{city.name}</TableCell>
                {Object.entries(prayerIcons).map(([prayer]) => (
                  <TableCell
                    key={prayer}
                    className={prayerTimes[city.name]?.current === prayer ? "font-bold text-primary" : ""}
                  >
                    {prayerTimes[city.name]?.[prayer as keyof PrayerTime]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

