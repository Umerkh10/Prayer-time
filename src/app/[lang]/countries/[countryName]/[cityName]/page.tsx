"use client";

import React, { useEffect, useState } from "react";
import { PrayerTimes, CalculationMethod, Madhab } from "adhan";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Moon, Search, Sun, Sunrise } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cityTimezones } from '../../[countryName]/[cityName]/cityTimezones';
import Flag from 'react-world-flags';
import { useTranslation } from "@/hooks/useTranslation";
import { usePathname } from "next/navigation";
import { log } from "console";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { checkIsPathnameIsEqualToLang, urlSplitter } from "@/lib";

interface City {
  name: string;
  latitude: number;
  longitude: number;
}

interface PrayerTime {
  date: string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

const formatMonthlyDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};


function Page() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime | null>(null);
  const [monthlyTimes, setMonthlyTimes] = useState<PrayerTime[] | null>(null);
  const [selectedMadhab, setSelectedMadhab] = useState<keyof typeof Madhab>("Shafi");
  const [error, setError] = useState<string | null>(null);
  const [nextPrayer, setNextPrayer] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [countryLink, setCountryLink] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("")
  const pathname = usePathname()
  const cityInUrl = pathname.split("/")[4]
  const [cities, setCities] = useState<any[]>([]);
  const currentLang = urlSplitter(pathname)
  const isLang = checkIsPathnameIsEqualToLang(currentLang)
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  const { t } = useTranslation("city")


  useEffect(() => {
    const cityDetails: any = localStorage.getItem("cityDetails");
    const parsedCityDetails = cityDetails ? JSON.parse(cityDetails) : null;
    const countryData: any = localStorage.getItem("countryData");

    if (parsedCityDetails) {
      setCountryLink(countryData ? (JSON.parse(countryData) as CountryData).name : null);
      setData(parsedCityDetails);
      setCities(parsedCityDetails.cities || []);
    }
  }, []);

  const flagUrl = data?.countryCode
    ? `https://flagcdn.com/w320/${data.countryCode.toLowerCase()}.png`
    : null;

  useEffect(() => {
    if (data?.city?.name) {
      const timezone = data?.timezones?.zone || data?.timezone;

      if (timezone) {
        calculatePrayerTimes(timezone);
        calculateMonthlyPrayerTimes(timezone);

        const interval = setInterval(() => {
          updateCurrentTime(timezone);
        }, 1000);

        return () => clearInterval(interval);
      } else {
        setError("Timezone for the selected city is not available.");
      }
    }
  }, [data, selectedMadhab]);

  const updateCurrentTime = (timezone: string) => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: timezone,
      timeStyle: "medium",
      dateStyle: "long",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    setCurrentTime(formatter.format(new Date()));
  };

  const getNextPrayer = (prayerTimes: PrayerTimes, dateInCity: Date): string => {
    const now = dateInCity.getTime();
    const times = [
      { name: pathname.includes('/ar') ? "الفجر" : "fajr", time: prayerTimes.fajr.getTime() },
      { name: pathname.includes('/ar') ? "الظهر" : "dhuhr", time: prayerTimes.dhuhr.getTime() },
      { name: pathname.includes('/ar') ? "العصر" : "asr", time: prayerTimes.asr.getTime() },
      { name: pathname.includes('/ar') ? "المغرب" : "maghrib", time: prayerTimes.maghrib.getTime() },
      { name: pathname.includes('/ar') ? "العشاء" : "isha", time: prayerTimes.isha.getTime() },
    ];

    for (const time of times) {
      if (now < time.time) {
        return time.name;
      }
    }

    return "fajr";
  };

  const getCountdown = (prayerTimes: PrayerTimes, dateInCity: Date): string => {
    const now = dateInCity.getTime();
    const times = [
      { name: pathname.includes('/ar') ? "الفجر" : "fajr", time: prayerTimes.fajr.getTime() },
      { name: pathname.includes('/ar') ? "الظهر" : "dhuhr", time: prayerTimes.dhuhr.getTime() },
      { name: pathname.includes('/ar') ? "العصر" : "asr", time: prayerTimes.asr.getTime() },
      { name: pathname.includes('/ar') ? "المغرب" : "maghrib", time: prayerTimes.maghrib.getTime() },
      { name: pathname.includes('/ar') ? "العشاء" : "isha", time: prayerTimes.isha.getTime() },
    ];

    for (const time of times) {
      if (now < time.time) {
        const diff = time.time - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}h ${minutes}m`;
      }
    }

    return "0h 0m";
  };

  const calculatePrayerTimes = (timezone: string) => {
    if (!data?.city?.latitude || !data?.city?.longitude) {
      setError("Invalid city data. Please ensure latitude and longitude are set.");
      return;
    }

    const method = CalculationMethod[(data.city.country as keyof typeof CalculationMethod) || "MuslimWorldLeague"]();
    method.madhab = Madhab[selectedMadhab];

    const now = new Date();
    const dateInCity = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
    const prayerTimes = new PrayerTimes(
      { latitude: data.city.latitude, longitude: data.city.longitude },
      dateInCity,
      method
    );

    const formatTime = (time: Date) =>
      time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: timezone,
      });

    setPrayerTimes({
      date: dateInCity.toLocaleDateString(),
      fajr: formatTime(prayerTimes.fajr),
      sunrise: formatTime(prayerTimes.sunrise),
      dhuhr: formatTime(prayerTimes.dhuhr),
      asr: formatTime(prayerTimes.asr),
      maghrib: formatTime(prayerTimes.maghrib),
      isha: formatTime(prayerTimes.isha),
    });

    setNextPrayer(getNextPrayer(prayerTimes, dateInCity));
    setCountdown(getCountdown(prayerTimes, dateInCity));
    setError(null);
  };

  const calculateMonthlyPrayerTimes = (timezone: string) => {
    if (!data?.city?.latitude || !data?.city?.longitude) {
      setError("Invalid city data for monthly prayer times.");
      return;
    }

    const method = CalculationMethod[(data.city.country as keyof typeof CalculationMethod) || "MuslimWorldLeague"]();
    method.madhab = Madhab[selectedMadhab];

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthlyTimesArray: PrayerTime[] = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateInCity = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
      const prayerTimes = new PrayerTimes(
        { latitude: data.city.latitude, longitude: data.city.longitude },
        dateInCity,
        method
      );

      const formatTime = (time: Date) =>
        time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: timezone,
        });

      monthlyTimesArray.push({
        date: formatMonthlyDate(dateInCity.toLocaleDateString("en-US")),
        fajr: formatTime(prayerTimes.fajr),
        sunrise: formatTime(prayerTimes.sunrise),
        dhuhr: formatTime(prayerTimes.dhuhr),
        asr: formatTime(prayerTimes.asr),
        maghrib: formatTime(prayerTimes.maghrib),
        isha: formatTime(prayerTimes.isha),
      });
    }

    setMonthlyTimes(monthlyTimesArray);
    setError(null);
  }

  const isArabic = pathname.split("/")[1]

  const prayerNames = {
    fajr: pathname.includes('/ar') ? "الفجر" : "fajr",
    sunrise: pathname.includes('/ar') ? "الشروق" : "sunrise",
    dhuhr: pathname.includes('/ar') ? "الظهر" : "dhuhr",
    asr: pathname.includes('/ar') ? "العصر" : "asr",
    maghrib: pathname.includes('/ar') ? "المغرب" : "maghrib",
    isha: pathname.includes('/ar') ? "العشاء" : "isha",
  };

  useEffect(() => {
    const cityDetailsInLS: any = localStorage.getItem("cityDetails");
    const cityData = cityDetailsInLS ? JSON.parse(cityDetailsInLS) : null;

    if (cityData) {
      const city = cityData.city;
      const newCity = { ...cityData, city: { latitude: city.latitude, longitude: city.longitude, name: cityInUrl } };
      localStorage.setItem("cityDetails", JSON.stringify(newCity));
      setData(newCity);
    }
  }, []);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group filtered cities by first letter
  const groupedCities: Record<string, City[]> = {};

  filteredCities.forEach((city) => {
    const firstLetter = city.name.charAt(0).toUpperCase();
    if (!groupedCities[firstLetter]) {
      groupedCities[firstLetter] = [];
    }
    groupedCities[firstLetter].push(city);
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">

      {isArabic === "ar" ? (<div className="flex items-center justify-between md:gap-2 gap-5 mb-8">
        <div> <img src={flagUrl || "/placeholder.svg"} alt={`${name} flag`} width={120} height={120} className="rounded shadow-sm" />
        </div>
        <div>
          <h1 className="md:text-3xl text-lg font-bold mb-2 capitalize"> {data?.city?.name} {t("country.title")}</h1>
          <div className="flex items-center space-x-2">

            <p className="md:text-lg text-xs font-medium text-muted-foreground">{data?.timezones?.utc} {currentTime} </p>
          </div>
        </div>

      </div>) : (<div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 capitalize">{t("country.title")} {data?.city?.name}</h1>
          <div className="flex items-center space-x-2">

            <p className="text-lg text-muted-foreground">{data?.timezones?.utc} {currentTime} </p>
          </div>
        </div>
        <div>
          <img src={flagUrl || "/placeholder.svg"} alt={`${name} flag`} width={120} height={120} className="rounded shadow-sm" />
        </div>
      </div>)}

      <Card className="mb-8">
        <CardContent className="pt-6">


          <div className="flex justify-end items-center px-3 py-4 ">

            <div className="my-3">
              <label className="block mb-2 text-sm font-medium">{t("city.school")}</label>
              <Select value={selectedMadhab} onValueChange={(value) => setSelectedMadhab(value as keyof typeof Madhab)}>
                <SelectTrigger className="w-full sm:w-[190px]">
                  <SelectValue placeholder="Select Madhab" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Shafi">{t("city.shafi")}</SelectItem>
                  <SelectItem value="Hanafi">{t("city.hanafi")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>



          {prayerTimes ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(prayerTimes).map(([key, value]) =>
                key !== "date" ? (
                  <div key={key} className={`p-4 rounded-xl ${nextPrayer === key ? "bg-blue-600 text-zinc-50" : "bg-secondary"}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {key === "fajr" && <Sun className="h-4 w-4" />}
                      {key === "sunrise" && <Sunrise className="h-4 w-4" />}
                      {key === "dhuhr" && <Sun className="h-4 w-4" />}
                      {key === "asr" && <Sun className="h-4 w-4" />}
                      {key === "maghrib" && <Moon className="h-4 w-4" />}
                      {key === "isha" && <Moon className="h-4 w-4" />}
                      <span className="capitalize text-sm font-medium">{prayerNames[key as keyof typeof prayerNames]}</span>
                    </div>
                    <p className="text-2xl font-bold">{value}</p>
                    {nextPrayer === key && countdown && (
                      <p className="text-xs font-semibold text-white">{countdown}</p>
                    )}
                  </div>
                ) : null
              )}
            </div>
          ) : (
            <p>Loading prayer times...</p>
          )}
        </CardContent>
      </Card>

      <div className="mt-4 md:mt-8 w-full">
        <h2
          className={`text-lg md:text-2xl font-bold mb-4 md:mb-6 flex items-center ${isArabic === "ar" ? "justify-end" : "justify-start"
            } gap-2 px-3 md:px-0`}
        >
          {isArabic === "ar" ? (
            <>
              {t("city.monthlytitle")} <Calendar className="h-5 w-5" />
            </>
          ) : (
            <>
              <Calendar className="h-5 w-5" /> {t("city.monthlytitle")}
            </>
          )}
        </h2>

        {monthlyTimes ? (
          <>
            {/* Mobile View */}
            <div className="md:hidden space-y-3 px-3">
              {monthlyTimes.map((day, index) => {
                const isToday = new Date().toLocaleDateString() === day.date
                return (
                  <Card key={index} className={`p-3 ${isToday ? "bg-primary/10" : ""}`}>
                    <div className="font-semibold text-base mb-2">{formatMonthlyDate(day.date)}</div>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm">
                      <div>
                        <div className="text-muted-foreground text-xs">{t("CurrentNamazTime.namazfajr")}</div>
                        <div>{day.fajr}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs">{t("CurrentNamazTime.sunrise")}</div>
                        <div>{day.sunrise}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs">{t("CurrentNamazTime.namazdhuhr")}</div>
                        <div>{day.dhuhr}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs">{t("CurrentNamazTime.namazasr")}</div>
                        <div>{day.asr}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs">{t("CurrentNamazTime.namazmaghrib")}</div>
                        <div>{day.maghrib}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs">{t("CurrentNamazTime.namazisha")}</div>
                        <div>{day.isha}</div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              <Card className="rounded-lg px-5 py-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">{t("CurrentNamazTime.date")}</TableHead>
                      <TableHead>{t("CurrentNamazTime.namazfajr")}</TableHead>
                      <TableHead>{t("CurrentNamazTime.sunrise")}</TableHead>
                      <TableHead>{t("CurrentNamazTime.namazdhuhr")}</TableHead>
                      <TableHead>{t("CurrentNamazTime.namazasr")}</TableHead>
                      <TableHead>{t("CurrentNamazTime.namazmaghrib")}</TableHead>
                      <TableHead>{t("CurrentNamazTime.namazisha")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monthlyTimes.map((day, index) => {
                      const isToday = new Date().toLocaleDateString() === day.date
                      return (
                        <TableRow
                          key={index}
                          className={`
                          transition-colors
                          hover:bg-muted/50
                          ${isToday ? "bg-primary/10 hover:bg-primary/20" : ""}
                        `}
                        >
                          <TableCell className="font-medium">{formatMonthlyDate(day.date)}</TableCell>
                          <TableCell>{day.fajr}</TableCell>
                          <TableCell>{day.sunrise}</TableCell>
                          <TableCell>{day.dhuhr}</TableCell>
                          <TableCell>{day.asr}</TableCell>
                          <TableCell>{day.maghrib}</TableCell>
                          <TableCell>{day.isha}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </>
        ) : (
          <div className="px-3 md:px-0">
            <Card className="flex h-[140px] items-center justify-center rounded-lg border-dashed">
              <p className="text-muted-foreground text-sm">{t("city.noMonthlyTimes")}</p>
            </Card>
          </div>
        )}
      </div>

      {isArabic === "ar" ? (<div className="view-forarabic">
        <div className="my-6 ">
          <div className="relative ">
            <div className="absolute inset-y-0 right-0 flex items-center  pr-3 pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder={t("city.placeholdersearch")}
              className="pr-10 text-right"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-right">{t("city.cities")}</h2>
          {/* Only iterate over letters that have cities */}
          {Object.keys(groupedCities).map((letter) => (
            <div key={letter}>
              <h2 className="text-2xl font-bold text-primary sticky top-0 bg-background py-2 px-1 z-10 border-b flex items-center">
                {letter}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
                {groupedCities[letter].map((city, index) => (
                  <Link
                    href={isLang ? `/${currentLang}/countries/${countryLink.toLowerCase().replaceAll(" ", "-")}/${city.name.toLowerCase().replaceAll(" ", "-")}` : `/countries/${countryLink.toLowerCase().replaceAll(" ", "-")}/${city.name.toLowerCase().replaceAll(" ", "-")}`}
                    key={index}
                    className="p-3 bg-secondary rounded-lg shadow hover:bg-blue-500 hover:text-zinc-100 transition-all duration-200 flex items-center"
                  >
                    <span className="truncate">{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {filteredCities.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">No cities found matching your search.</div>
          )}
        </div>
      </div>) : (
        <div className="space-y-6">
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder={t("city.placeholdersearch")}
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Only iterate over letters that have cities */}
          {Object.keys(groupedCities).map((letter) => (
            <div key={letter}>
              <h2 className="text-2xl font-bold text-primary sticky top-0 bg-background py-2 px-1 z-10 border-b flex items-center">
                {letter}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
                {groupedCities[letter].map((city, index) => (
                  <Link
                    href={isLang ? `/${currentLang}/countries/${countryLink.toLowerCase().replaceAll(" ", "-")}/${city.name.toLowerCase().replaceAll(" ", "-")}` : `/countries/${countryLink.toLowerCase().replaceAll(" ", "-")}/${city.name.toLowerCase().replaceAll(" ", "-")}`}
                    key={index}
                    className="p-3 bg-secondary rounded-lg shadow hover:bg-blue-500 hover:text-zinc-100 transition-all duration-200 flex items-center"
                  >
                    <span className="truncate">{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {filteredCities.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">No cities found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Page;
