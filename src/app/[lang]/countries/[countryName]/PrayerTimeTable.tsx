"use client"

import { useEffect, useState } from "react"
import { PrayerTimes, CalculationMethod, Madhab } from "adhan"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun, Sunrise, Sunset } from "lucide-react"
import { countriesData, type City } from "./citiesAndTimezones"
import Link from "next/link"
import { checkIsPathnameIsEqualToLang, urlSplitter } from "@/lib"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/hooks/useTranslation"

interface PrayerTime {
  fajr: string
  sunrise: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
  current?: string
  upcoming?: string
}

interface PrayerTimesTableProps {
  country: string
  timezone: string
  timezoneMapping: any;
  countryCode: any;
}

const prayerIcons = {
  fajr: Sunrise,
  sunrise: Sunrise,
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
    case "Canada":
      return CalculationMethod.NorthAmerica()
    case "United Kingdom":
      return CalculationMethod.MuslimWorldLeague()
    case "Saudi Arabia":
      return CalculationMethod.UmmAlQura()
    case "Egypt":
      return CalculationMethod.Egyptian()
    case "Iran":
      return CalculationMethod.Tehran()
    case "Turkey":
      return CalculationMethod.Turkey()
    case "United Arab Emirates":
      return CalculationMethod.Dubai()
    case "Qatar":
      return CalculationMethod.Qatar()
    case "Kuwait":
      return CalculationMethod.Kuwait()
    default:
      return CalculationMethod.MuslimWorldLeague()
  }
}

export function PrayerTimesTable({ country, timezoneMapping, countryCode, timezone }: PrayerTimesTableProps) {
  const [cities, setCities] = useState<City[]>([])
  const [prayerTimes, setPrayerTimes] = useState<Record<string, PrayerTime>>({})
  const [selectedMadhab, setSelectedMadhab] = useState<keyof typeof Madhab>("Shafi")
  const [selectedTimezone, setSelectedTimezone] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [matchingUTC, setMatchingUTC] = useState<any>(null)
  const { t } = useTranslation("timezonemapping")

  useEffect(() => {
    if (countriesData[country]) {
      setSelectedTimezone(countriesData[country].timezones[0])
      console.log("timezones ==>", countriesData[country].timezones[0]);
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

        const prayerNames = {
          fajr: isArabic === "ar" ? "الفجر" : "fajr",
          sunrise: isArabic === "ar" ? "الشروق" : "sunrise",
          dhuhr: isArabic === "ar" ? "الظهر" : "dhuhr",
          asr: isArabic === "ar" ? "العصر" : "asr",
          maghrib: isArabic === "ar" ? "المغرب" : "maghrib",
          isha: isArabic === "ar" ? "العشاء" : "isha",
        }

        acc[city.name] = {
          fajr: formatTime(prayerTimes.fajr),
          sunrise: formatTime(prayerTimes.sunrise),
          dhuhr: formatTime(prayerTimes.dhuhr),
          asr: formatTime(prayerTimes.asr),
          maghrib: formatTime(prayerTimes.maghrib),
          isha: formatTime(prayerTimes.isha),
          current: prayerNames[prayerTimes.currentPrayer(now) as keyof typeof prayerNames],
          upcoming: prayerNames[prayerTimes.nextPrayer(now) as keyof typeof prayerNames] || undefined,
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


  useEffect(() => {
    if (timezoneMapping && timezoneMapping.length > 0 && selectedTimezone) {
      const matchingTimezones = timezoneMapping.find((timezone: any) => {
        console.log("Comparing:", selectedTimezone, timezone.zone);
        return selectedTimezone.trim() === timezone.zone.trim();
      });

      if (matchingTimezones) {
        setMatchingUTC(matchingTimezones);
      } else {
        console.warn("No matching timezone found for:", selectedTimezone);
      }

      console.log("timezoneMapping:", timezoneMapping);
    } else {
      console.warn("timezoneMapping or selectedTimezone is not ready");
    }
  }, [timezoneMapping, selectedTimezone]);


  const saveCityDetails = (city: any) => {
    localStorage.setItem("cityDetails", JSON.stringify({ city, timezones: matchingUTC, countryCode, timezone }))
  }

  const pathname = usePathname()
  const currentLang = urlSplitter(pathname)
  const isLang = checkIsPathnameIsEqualToLang(currentLang)

  const isArabic = pathname.split("/")[1]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 space-y-4">


        {isArabic === "ar" ? (<div>
          <label htmlFor="madhab" className="block text-sm font-medium mb-2 text-right">
            {t("city.school")}
          </label>
          <Select value={selectedMadhab} onValueChange={(value) => setSelectedMadhab(value as keyof typeof Madhab)}>
            <SelectTrigger className="w-full flex justify-end">
              <SelectValue placeholder="Select Madhab" />
            </SelectTrigger>
            <SelectContent >
              <SelectItem className="flex justify-end" value="Shafi">{t("city.shafi")}</SelectItem>
              <SelectItem className="flex justify-end" value="Hanafi">{t("city.hanafi")}</SelectItem>
            </SelectContent>
          </Select>
        </div>) : (<div>
          <label htmlFor="madhab" className="block text-sm font-medium mb-2">
            {t("city.school")}
          </label>
          <Select value={selectedMadhab} onValueChange={(value) => setSelectedMadhab(value as keyof typeof Madhab)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Madhab" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Shafi">{t("city.shafi")}</SelectItem>
              <SelectItem value="Hanafi">{t("city.hanafi")}</SelectItem>
            </SelectContent>
          </Select>
        </div>)}


        {countriesData[country]?.timezones.length > 1 && (
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium mb-2">
              {t("city.selecttimezone")}
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
      <div className="grid gap-4 md:hidden px-4">
        {cities.map((city) => (
          <Link onClick={() => saveCityDetails(city)} key={city.name} href={isLang ? `/${currentLang}/countries/${country.toLowerCase().replaceAll(" ", "-")}/${city.name.toLowerCase().replaceAll(" ", "-")}` : `/countries/${country.toLowerCase().replaceAll(" ", "-")}/${city.name.toLowerCase().replaceAll(" ", "-")}`}
            className="block rounded-xl shadow-md bg-zinc-50 dark:bg-gray-800 p-4 border border-gray-200 transition hover:shadow-xl scale-95 hover:scale-100 duration-200 delay-200 ">
            <div className="flex items-center justify-between border-b pb-2 mb-2">
              <h3 className="text-lg font-bold ">{city.name}</h3>
              <span className="text-sm ">Tap for details</span>
            </div>

            <ul className="space-y-2">
              {Object.entries(prayerTimes[city.name] || {}).map(([prayer, time]) => {
                if (prayer === "current") return null;
                const prayerName = isArabic === "ar" ? {
                  fajr: "الفجر",
                  sunrise: "الشروق",
                  dhuhr: "الظهر",
                  asr: "العصر",
                  maghrib: "المغرب",
                  isha: "العشاء",
                }[prayer] : prayer;
                return (
                  <li key={prayer} className="flex items-center justify-between text-sm">
                    <span className="capitalize ">{prayerName}</span>
                    <span className={prayerTimes[city.name]?.current === prayer ? "font-bold text-primary" : "font-semibold"}>
                      {time}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Link>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link onClick={() => saveCityDetails(city)} key={city.name} href={isLang ? `/${currentLang}/countries/${country.toLowerCase().replaceAll(" ", "-")}/${city.name.toLowerCase().replaceAll(" ", "-")}` : `/countries/${country.toLowerCase().replaceAll(" ", "-")}/${city.name.toLowerCase().replaceAll(" ", "-")}`}>
              <div className="flex flex-col p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                {/* City Name */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{city.name}</h3>
                </div>

                {/* Prayer Times */}
                <div className="space-y-4">
                  {Object.entries(prayerIcons).map(([prayer, Icon]) => {
                    const prayerName = isArabic === "ar" ? {
                      fajr: "الفجر",
                      sunrise: "الشروق",
                      dhuhr: "الظهر",
                      asr: "العصر",
                      maghrib: "المغرب",
                      isha: "العشاء",
                    }[prayer] : prayer;

                    return (
                      <div
                        key={prayer}
                        className={`flex justify-between items-center p-3 rounded-lg ${prayerTimes[city.name]?.upcoming === prayer ? "bg-blue-500 text-zinc-50" : "bg-gray-50 dark:bg-gray-700"
                          }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="w-5 h-5 " />
                          <span className="capitalize text-sm ">{prayerName}</span>
                        </div>
                        <span
                          className={`text-sm font-medium ${prayerTimes[city.name]?.upcoming === prayer ? "font-bold text-primary-700" : "text-gray-500 dark:text-gray-300"
                            }`}
                        >
                          {prayerTimes[city.name]?.[prayer as keyof PrayerTime]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>



  )
}

