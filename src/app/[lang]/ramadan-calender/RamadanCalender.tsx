"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import { Coordinates, CalculationMethod, Madhab, PrayerTimes } from "adhan"
import moment from "moment-hijri"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Coffee, Sunset } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { usePathname } from "next/navigation"
import { urlSplitter } from "@/lib"

interface LocationInfo {
  city: string
  country: string
  timezone: string
}

const RamadanCalender = () => {
  interface NamazTiming {
    date: string
    formattedDate: string
    timings: {
      Fajr: string
      Sunrise: string
      Dhuhr: string
      Asr: string
      Maghrib: string
      Isha: string
    }
  }

  const pathname = usePathname()
  const lang = urlSplitter(pathname)
  const [location, setLocation] = useState<LocationInfo | null>(null)
  const [timings, setTimings] = useState<NamazTiming[]>([])
  const [hijriDate, setHijriDate] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [school, setSchool] = useState<"hanafi" | "shafi">("shafi")
  const isArabic = pathname.split("/")[1]

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        `https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN&fields=lat,lon,city,country,timezone`,
        { cache: "reload" },
      )
      const data = await response.json()
      const { lat, lon, city, country, timezone } = data
      setLocation({ city, country, timezone })
      return { lat, lon, country }
    } catch (error: any) {
      console.error("Error fetching location data:", error.message)
      setError("Failed to fetch location data.")
      return null
    }
  }

  const getCalculationMethod = (country: string) => {
    if (country === "Pakistan") {
      return CalculationMethod.Karachi()
    }
    if (country === "United States" || country === "Germany" || country === "Canada") {
      return CalculationMethod.NorthAmerica()
    }
    if (country === "United Kingdom") {
      return CalculationMethod.MuslimWorldLeague()
    }
    if (country === "Saudi Arabia") {
      return CalculationMethod.UmmAlQura()
    }
    if (country === "Egypt") {
      return CalculationMethod.Egyptian()
    }
    if (country === "Singapore") {
      return CalculationMethod.Singapore()
    }
    if (country === "Kuwait") {
      return CalculationMethod.Kuwait()
    }
    if (country === "Iran") {
      return CalculationMethod.Tehran()
    }
    if (country === "Turkey") {
      return CalculationMethod.Turkey()
    }
    if (country === "Dubai") {
      return CalculationMethod.Dubai()
    }

    return CalculationMethod.MuslimWorldLeague() // Default
  }

  const calculateRamadanTimings = async () => {
    const coordinates = await fetchLocation()
    if (!coordinates) return

    const { lat, lon, country } = coordinates
    const calculationMethod = getCalculationMethod(country)
    const madhab = school === "hanafi" ? Madhab.Hanafi : Madhab.Shafi

    const now = new Date()
    const year = now.getFullYear()

    const ramadanStart = moment(`${year}-03-02`, "YYYY-MM-DD") // Start of Ramadan in March
    const ramadanEnd = moment(ramadanStart).add(29, "days") // Ramadan lasts 29 or 30 days

    const newTimings: NamazTiming[] = []

    for (let day = 0; day <= 29; day++) {
      const date = moment(ramadanStart).add(day, "days").toDate()

      const prayerTimes = new PrayerTimes(new Coordinates(lat, lon), date, calculationMethod)

      calculationMethod.madhab = madhab
      if (day === 0) {
        const hijri = moment(date)
          .locale(isArabic === "ar" ? "ar-SA" : "en")
          .format(isArabic === "ar" ? "iD iMMMM iYYYY" : "iD iMMMM iYYYY")
        setHijriDate(hijri)
      }

      const formatTime = (time: Date) =>
        time.toLocaleTimeString("en-US", {
          timeZone: location?.timezone,
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })

      const formattedDate = moment(date).locale("en").format("DD-MMM-YYYY dddd")

      newTimings.push({
        date: date.toISOString().split("T")[0],
        formattedDate: formattedDate,
        timings: {
          Fajr: formatTime(prayerTimes.fajr),
          Sunrise: formatTime(prayerTimes.sunrise),
          Dhuhr: formatTime(prayerTimes.dhuhr),
          Asr: formatTime(prayerTimes.asr),
          Maghrib: formatTime(prayerTimes.maghrib),
          Isha: formatTime(prayerTimes.isha),
        },
      })
    }

    setTimings(newTimings)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    calculateRamadanTimings()
  }, [school])

  const renderSkeletonRow = () => (
    <div className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="h-6 w-full" />
      ))}
    </div>
  )

  const currentDate = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split("T")[0]
  const { t } = useTranslation("ramadanpage")

  return (
    <Card className="dark:bg-background bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background w-full mx-auto my-4 shadow-lg border-emerald-100 dark:border-emerald-900/30">
      <CardHeader className="pb-2">
        <div className="flex flex-col items-center space-y-2">
          <div
            className="px-4 py-1 text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
          >
            {t("ramadanpage.hijri")}
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-emerald-700 to-emerald-500 dark:from-emerald-400 dark:to-emerald-300 bg-clip-text text-transparent">
          {t("ramadanpage.heading")}
          </CardTitle>
        </div>

        {location && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-2"
          >
            <p className="text-sm font-medium text-muted-foreground">
              {location.city}, {location.country}
            </p>
          </motion.div>
        )}
{/* 
        {hijriDate && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-base text-muted-foreground"
          >
            <p>
              {isArabic
                ? `${t("CurrentNamazTime.hijridate")} ${hijriDate} `
                : `${t("CurrentNamazTime.hijridate")} ${hijriDate}`}
            </p>
          </motion.div>
        )} */}
      </CardHeader>

      <CardContent>
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-2"
            >
              {renderSkeletonRow()}
            </motion.div>
          ))
        ) : (
          <>
            <div className="hidden md:grid md:grid-cols-3 gap-2 p-3 font-semibold text-center bg-emerald-100 dark:bg-emerald-900/30 rounded-lg my-2 text-sm sticky top-0 z-10">
              <div className="flex items-center justify-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>{t("CurrentNamazTime.date")}</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Coffee className="h-4 w-4" />
                <span> {t("ramadanpage.suhoor")}</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Sunset className="h-4 w-4" />
                <span>{t("ramadanpage.iftar")}</span>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full md:hidden">
              {timings.map((day, index) => (
                <AccordionItem
                  key={day.date}
                  value={day.date}
                  className="border-b border-emerald-100 dark:border-emerald-900/30"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <AccordionTrigger
                      className={`text-sm p-4 rounded-lg ${
                        day.date === currentDate
                          ? "bg-emerald-500 text-white"
                          : "even:bg-emerald-50 dark:even:bg-emerald-900/10"
                      }`}
                    >
                      <div className="flex justify-between w-full">
                        <span>{day.formattedDate}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-1">
                      <div className="grid grid-cols-2 gap-4 p-4 text-sm bg-white dark:bg-black/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Coffee className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          <span>  {t("ramadanpage.suhoorends")} </span>
                        </div>
                        <div className="font-medium">{day.timings.Fajr}</div>

                        <div className="flex items-center gap-2">
                          <Sunset className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          <span>{t("ramadanpage.iftartime")}</span>
                        </div>
                        <div className="font-medium">{day.timings.Maghrib}</div>
                      </div>
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="hidden md:block space-y-2 mt-4">
              {timings.map((day, index) => (
                <motion.div
                  key={day.date}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className={`grid grid-cols-3 gap-2 p-4 rounded-lg text-base transition-all duration-200 hover:shadow-md ${
                    day.date === currentDate
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg"
                      : "even:bg-emerald-50 dark:even:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/20"
                  }`}
                >
                  <div className="text-center font-medium">{day.formattedDate}</div>
                  <div className="text-center flex items-center justify-center gap-2">
                    <Coffee
                      className={`h-4 w-4 ${day.date === currentDate ? "text-white" : "text-emerald-600 dark:text-emerald-400"}`}
                    />
                    <span>{day.timings.Fajr}</span>
                  </div>
                  <div className="text-center flex items-center justify-center gap-2">
                    <Sunset
                      className={`h-4 w-4 ${day.date === currentDate ? "text-white" : "text-amber-600 dark:text-amber-400"}`}
                    />
                    <span>{day.timings.Maghrib}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {!loading && timings.length === 0 && (
          <div className="text-center py-8">
            <Button
              onClick={fetchLocation}
              variant="outline"
              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200 hover:border-emerald-300 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800"
            >
              <CalendarIcon className="mr-2 h-4 w-4" /> Load Ramadan Timings
            </Button>
          </div>
        )}

        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>{t("ramadanpage.footertext")}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default RamadanCalender

