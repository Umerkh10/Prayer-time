"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { PrayerTimes, CalculationMethod, Madhab } from 'adhan';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sun, Sunrise, Moon, Calendar, Search } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useTranslation } from '@/hooks/useTranslation';

// Types
interface PrayerTime {
  date: string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

interface City {
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  countryCode: string;
}

interface CountryData {
  name: string;
  code: string;
  cities: City[];
}

interface ApiResponse {
  country: string;
  countryCode: string;
  city: City;
  timezones: {
    zone: string;
  };
  cities: City[];
}

const countryToMethod = {
  SA: CalculationMethod.UmmAlQura,
  AE: CalculationMethod.Dubai,
  QA: CalculationMethod.Qatar,
  KW: CalculationMethod.Kuwait,
  SG: CalculationMethod.Singapore,
  TR: CalculationMethod.Turkey,
  PK: CalculationMethod.Karachi,
};

// Helper functions
const formatMonthlyDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const CityPage = () => {
  // State
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime | null>(null);
  const [monthlyTimes, setMonthlyTimes] = useState<PrayerTime[] | null>(null);
  const [selectedMadhab, setSelectedMadhab] = useState<keyof typeof Madhab>("Shafi");
  const [error, setError] = useState<string | null>(null);
  const [nextPrayer, setNextPrayer] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation("city");

  // Get URL params
  const pathname = usePathname();
  const parts = pathname.split("/");
  const currentLang = parts[1];
  const isArabic = currentLang === 'ar';
  const countryName = parts[3];
  const cityName = parts[4];

  // Prayer names based on language
  const prayerNames = {
    fajr: isArabic ? "الفجر" : "fajr",
    sunrise: isArabic ? "الشروق" : "sunrise",
    dhuhr: isArabic ? "الظهر" : "dhuhr",
    asr: isArabic ? "العصر" : "asr",
    maghrib: isArabic ? "المغرب" : "maghrib",
    isha: isArabic ? "العشاء" : "isha",
  };

  // Fetch city data
  useEffect(() => {
    const fetchCityData = async () => {
      setIsLoading(true);
      try {
        // Use the correct API path
        const response = await fetch(
          `/api/city-data?country=${encodeURIComponent(countryName)}&city=${encodeURIComponent(cityName)}`
        );

        

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const cityData = await response.json();

        if (cityData.error) {
          throw new Error(cityData.error);
        }

        setData(cityData);
        setError(null);

        // Calculate prayer times if data is available
        if (cityData.city?.timezone) {
          calculatePrayerTimes(cityData.city.timezone);
          calculateMonthlyPrayerTimes(cityData.city.timezone);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCityData();
  }, [countryName, cityName]);

  // Calculate prayer times
  const updateCurrentTime = (timezone: string) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      timeStyle: "medium",
      dateStyle: "long",
    });
    setCurrentTime(formatter.format(new Date()));
  };

  const getNextPrayer = (prayerTimes: PrayerTimes, dateInCity: Date) => {
    const now = dateInCity.getTime();
    const times = [
      { name: "fajr", time: prayerTimes.fajr.getTime() },
      { name: "dhuhr", time: prayerTimes.dhuhr.getTime() },
      { name: "asr", time: prayerTimes.asr.getTime() },
      { name: "maghrib", time: prayerTimes.maghrib.getTime() },
      { name: "isha", time: prayerTimes.isha.getTime() },
    ];
    for (const time of times) {
      if (now < time.time) return time.name;
    }
    return "fajr";
  };

  const getCountdown = (prayerTimes: PrayerTimes, dateInCity: Date) => {
    const now = dateInCity.getTime();
    const times = [
      { name: "fajr", time: prayerTimes.fajr.getTime() },
      { name: "dhuhr", time: prayerTimes.dhuhr.getTime() },
      { name: "asr", time: prayerTimes.asr.getTime() },
      { name: "maghrib", time: prayerTimes.maghrib.getTime() },
      { name: "isha", time: prayerTimes.isha.getTime() },
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
    const { latitude, longitude, countryCode } = data?.city || {};
    if (!latitude || !longitude) {
      setError("Missing coordinates for prayer times.");
      return;
    }

    const methodFn = countryCode && countryToMethod.hasOwnProperty(countryCode) 
      ? countryToMethod[countryCode as keyof typeof countryToMethod] 
      : CalculationMethod.MuslimWorldLeague;
    const method = methodFn();
    method.madhab = Madhab[selectedMadhab];

    const now = new Date();
    const dateInCity = new Date(now.toLocaleString("en-US", { timeZone: timezone }));

    const prayerTimesInstance = new PrayerTimes(
      { latitude, longitude },
      dateInCity,
      method
    );

    const format = (time: Date) => time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: timezone,
    });

    setPrayerTimes({
      date: dateInCity.toLocaleDateString(),
      fajr: format(prayerTimesInstance.fajr),
      sunrise: format(prayerTimesInstance.sunrise),
      dhuhr: format(prayerTimesInstance.dhuhr),
      asr: format(prayerTimesInstance.asr),
      maghrib: format(prayerTimesInstance.maghrib),
      isha: format(prayerTimesInstance.isha),
    });

    setNextPrayer(getNextPrayer(prayerTimesInstance, dateInCity));
    setCountdown(getCountdown(prayerTimesInstance, dateInCity));
    setError(null);
  };

  const calculateMonthlyPrayerTimes = (timezone: string) => {
    const { latitude, longitude, countryCode } = data?.city || {};
    if (!latitude || !longitude) {
      setError("Missing coordinates for monthly prayer times.");
      return;
    }

    const methodFn = countryCode && countryCode in countryToMethod 
      ? countryToMethod[countryCode as keyof typeof countryToMethod] 
      : CalculationMethod.MuslimWorldLeague;
    const method = methodFn();
    method.madhab = Madhab[selectedMadhab];

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const days = new Date(year, month + 1, 0).getDate();

    const times = [];
    for (let d = 1; d <= days; d++) {
      const date = new Date(year, month, d);
      const dateInCity = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
      const pt = new PrayerTimes({ latitude, longitude }, dateInCity, method);

      const format = (t: Date) => t.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: timezone,
      });

      times.push({
        date: dateInCity.toLocaleDateString("en-US"),
        fajr: format(pt.fajr),
        sunrise: format(pt.sunrise),
        dhuhr: format(pt.dhuhr),
        asr: format(pt.asr),
        maghrib: format(pt.maghrib),
        isha: format(pt.isha),
      });
    }
    setMonthlyTimes(times);
    setError(null);
  };

  useEffect(() => {
    if (data?.city?.timezone) {
      calculatePrayerTimes(data.city.timezone);
      calculateMonthlyPrayerTimes(data.city.timezone);

      const interval = setInterval(() => {
        updateCurrentTime(data.city.timezone);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [data, selectedMadhab]);

  const filteredCities = data?.cities?.filter((city) =>
    city.name?.toLowerCase().includes(searchTerm?.toLowerCase())
  ) || [];

  const groupedCities: Record<string, City[]> = {};
  filteredCities
    .filter((city) => city.name.toLowerCase() !== cityName.toLowerCase())
    .forEach((city) => {
      const firstLetter = city.name.charAt(0).toUpperCase();
      if (!groupedCities[firstLetter]) {
        groupedCities[firstLetter] = [];
      }
      groupedCities[firstLetter].push(city);
    });

  const flagUrl = data?.countryCode
    ? `https://flagcdn.com/w320/${data.countryCode.toLowerCase()}.png`
    : null;

  return (
    <>
      {isLoading ? (
        <div className='px-8 mt-4'>
          <Skeleton className="h-28 w-full" />
          <Skeleton className="mt-3 h-52 rounded-lg w-full" />
          <div className='flex items-center justify-center gap-2 mt-4'>
            <Skeleton className="h-28 w-full" />
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Breadcrumb */}
          {isArabic ? (
            <div className={`mb-6 flex items-center justify-end text-sm text-muted-foreground`}>
              <span className="capitalize text-foreground">{data?.city?.name}</span>
              <ChevronLeft className="h-4 w-4 mx-1" />
              <Link href={`/${currentLang}/countries/${data?.country?.toLowerCase().replaceAll(" ", "-")}`}>
                <span className="hover:text-green-500">{data?.country}</span>
              </Link>
              <ChevronLeft className="h-4 w-4 mx-1" />
              <Link href="/countries" className="hover:text-green-500">
                {t("navigation.countries")}
              </Link>
              <ChevronLeft className="h-4 w-4 mx-1" />
              <Link href="/" className="hover:text-green-500">
                {t("navigation.home")}
              </Link>
            </div>
          ) : (
            <div className={`mb-6 flex items-center text-sm text-muted-foreground`}>
              <Link href="/" className="hover:text-green-500">
                {t("navigation.home")}
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link href={`/${currentLang}/countries`} className="hover:text-green-500">
                {t("navigation.countries")}
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link href={`/${currentLang}/countries/${data?.country?.toLowerCase().replaceAll(" ", "-")}`}>
                <span className="hover:text-green-500">{data?.country}</span>
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-foreground capitalize">{data?.city?.name}</span>
            </div>
          )}

          {/* City Header */}
          {isArabic ? (
            <div className="flex items-center justify-between md:gap-2 gap-5 mb-8">
              <div>
                <img src={flagUrl || "/placeholder.svg"} alt={`${data?.city?.name} flag`} width={120} height={120} className="rounded shadow-sm" />
              </div>
              <div>
                <h1 className="lg:text-3xl md:text-xl text-lg font-bold mb-2 capitalize">
                  {data?.city?.name} {t("country.title")}
                </h1>
                <div className="flex items-center space-x-2">
                  <p className="lg:text-lg text-xs font-medium text-muted-foreground">
                    {data?.timezones?.zone} {currentTime}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="lg:text-3xl md:text-xl text-lg font-bold mb-2 capitalize">
                  {t("country.title")} {data?.city?.name}
                </h1>
                <div className="flex items-center space-x-2">
                  <p className="lg:text-lg text-xs text-muted-foreground">
                    {data?.timezones?.zone} {currentTime}
                  </p>
                </div>
              </div>
              <div>
                <img src={flagUrl || "/placeholder.svg"} alt={`${data?.city?.name} flag`} width={120} height={120} className="rounded shadow-sm" />
              </div>
            </div>
          )}

          {/* Prayer Times Card */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex justify-end items-center px-3 py-4">
                <div className="my-3">
                  <label className="block mb-2 text-sm font-medium">{t("city.school")}</label>
                  <Select
                    value={selectedMadhab}
                    onValueChange={(value) => setSelectedMadhab(value as keyof typeof Madhab)}
                  >
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
                      <div
                        key={key}
                        className={`p-4 rounded-xl ${nextPrayer === key ? "bg-green-600 text-zinc-50" : "bg-secondary"}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {key === "fajr" && <Sun className="h-4 w-4" />}
                          {key === "sunrise" && <Sunrise className="h-4 w-4" />}
                          {key === "dhuhr" && <Sun className="h-4 w-4" />}
                          {key === "asr" && <Sun className="h-4 w-4" />}
                          {key === "maghrib" && <Moon className="h-4 w-4" />}
                          {key === "isha" && <Moon className="h-4 w-4" />}
                          <span className="capitalize text-sm font-medium">
                            {prayerNames[key as keyof typeof prayerNames]}
                          </span>
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

          {/* Monthly Prayer Times */}
          <div className="mt-4 md:mt-8 w-full">
            <h2
              className={`text-lg md:text-2xl font-bold mb-4 md:mb-6 flex items-center ${isArabic ? "justify-end" : "justify-start"
                } gap-2 px-3 md:px-0`}
            >
              {isArabic ? (
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
                    const isToday = new Date().toLocaleDateString() === day.date;
                    return (
                      <Card key={index} className={`p-3 ${isToday ? "bg-primary/10" : ""}`}>
                        <div className="font-semibold text-base mb-2">{formatMonthlyDate(day.date)}</div>
                        <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm">
                          <div>
                            <div className="text-muted-foreground text-xs">
                              {t("CurrentNamazTime.namazfajr")}
                            </div>
                            <div>{day.fajr}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-xs">
                              {t("CurrentNamazTime.sunrise")}
                            </div>
                            <div>{day.sunrise}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-xs">
                              {t("CurrentNamazTime.namazdhuhr")}
                            </div>
                            <div>{day.dhuhr}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-xs">
                              {t("CurrentNamazTime.namazasr")}
                            </div>
                            <div>{day.asr}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-xs">
                              {t("CurrentNamazTime.namazmaghrib")}
                            </div>
                            <div>{day.maghrib}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-xs">
                              {t("CurrentNamazTime.namazisha")}
                            </div>
                            <div>{day.isha}</div>
                          </div>
                        </div>
                      </Card>
                    );
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
                          const isToday = new Date().toLocaleDateString() === day.date;
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
                          );
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

          {/* Other Cities */}
          {isArabic ? (
            <div className="view-forarabic">
              <div className="my-6">
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
                {Object.keys(groupedCities).map((letter) => (
                  <div key={letter}>
                    <h2 className="text-2xl font-bold sticky top-0 bg-background py-2 px-1 z-10 border-b flex items-center">
                      {letter}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
                      {groupedCities[letter].map((city, index) => (
                        <Link
                          href={`/${currentLang}/countries/${data?.country?.toLowerCase().replaceAll(" ", "-")}/${city.name?.toLowerCase().replaceAll(" ", "-")}`}
                          key={index}
                          className="p-3 text-white bg-zinc-900 dark:bg-gray-700 rounded-lg shadow hover:bg-emerald-600 hover:text-zinc-100 dark:hover:bg-emerald-700 transition-all duration-200 flex items-center"
                        >
                          <span className="truncate">{city.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {filteredCities.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No cities found matching your search.
                  </div>
                )}
              </div>
            </div>
          ) : (
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.keys(groupedCities).map((letter) => (
                  <div key={letter}>
                    <h2 className="text-2xl font-bold sticky top-0 py-2 px-1 z-10 border-b flex items-center">
                      {letter}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      {groupedCities[letter].map((city, index) => (
                        <Link
                          href={`/${currentLang}/countries/${data?.country?.toLowerCase().replaceAll(" ", "-")}/${city.name?.toLowerCase().replaceAll(" ", "-")}`}
                          key={index}
                          className="p-3 text-white bg-zinc-900 dark:bg-gray-700 rounded-lg shadow hover:bg-emerald-600 hover:text-zinc-100 dark:hover:bg-emerald-700 transition-all duration-200 flex items-center"
                        >
                          <span className="truncate">{city.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {filteredCities.length === 0 && (
                <div className="p-8 text-center text-muted-foreground">No cities found</div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CityPage;

