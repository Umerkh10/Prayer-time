"use client";
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,} from "@/components/ui/accordion";
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { Coordinates, CalculationMethod, Madhab, PrayerTimes } from "adhan";
import moment from "moment-hijri";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronDownIcon, MoonIcon, SunIcon } from 'lucide-react';

interface LocationInfo {
  city: string;
  country: string;
  timezone: string;
}

const MonthlyNamazTimings = () => {
  interface NamazTiming {
    date: string;
    formattedDate: string;
    timings: {
      Fajr: string;
      Sunrise: string;
      Dhuhr: string;
      Asr: string;
      Maghrib: string;
      Isha: string;
    };
  }

  const [location, setLocation] = useState<LocationInfo | null>(null);
  const [timings, setTimings] = useState<NamazTiming[]>([]);
  const [hijriDate, setHijriDate] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [school, setSchool] = useState<"hanafi" | "shafi">("shafi");

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        `https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN&fields=lat,lon,city,country,timezone`,
        { cache: "reload" }
      );
      const data = await response.json();
      const { lat, lon, city, country, timezone } = data;
      setLocation({ city, country, timezone });
      return { lat, lon, country };
    } catch (error: any) {
      console.error("Error fetching location data:", error.message);
      setError("Failed to fetch location data.");
      return null;
    }
  };

  const getCalculationMethod = (country: string) => {
    if (country === "Pakistan") {
      return CalculationMethod.Karachi();
    } 
    if (country === "United States" || country === "Germany" || country === "Canada") {
      return CalculationMethod.NorthAmerica();
    } 
    if (country === "United Kingdom") {
      return CalculationMethod.MuslimWorldLeague();
    } 
    if (country === "Saudi Arabia") {
      return CalculationMethod.UmmAlQura();
    } 
    if (country === "Egypt") {
      return CalculationMethod.Egyptian();
    } 
    if (country === "Singapore") {
      return CalculationMethod.Singapore();
    } 
    if (country === "Kuwait") {
      return CalculationMethod.Kuwait();
    } 
    if (country === "Iran") {
      return CalculationMethod.Tehran();
    } 
    if (country === "Turkey") {
      return CalculationMethod.Turkey();
    } 
    if (country === "Dubai") {
      return CalculationMethod.Dubai();
    } 
    
    return CalculationMethod.MuslimWorldLeague(); // Default
  };

  const calculateMonthlyTimings = async () => {
    const coordinates = await fetchLocation();
    if (!coordinates) return;

    const { lat, lon, country } = coordinates;
    const calculationMethod = getCalculationMethod(country);
    const madhab = school === "hanafi" ? Madhab.Hanafi : Madhab.Shafi;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const newTimings: NamazTiming[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      const prayerTimes = new PrayerTimes(
        new Coordinates(lat, lon),
        date,
        calculationMethod
      );

      calculationMethod.madhab = madhab;

      if (day === now.getDate()) {
        const hijri = moment(date).locale("en").format("iD iMMMM iYYYY");
        setHijriDate(hijri);
      }

      const formatTime = (time: Date) =>
        time.toLocaleTimeString("en-US", {
          timeZone: location?.timezone,
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

      const formattedDate = moment(date).locale("en").format("DD-MMM-YYYY dddd");

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
      });
    }

    setTimings(newTimings);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    calculateMonthlyTimings();
  }, [school]);

  const renderSkeletonRow = () => (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
      {Array.from({ length: 7 }).map((_, index) => (
        <Skeleton key={index} className="h-6 w-full" />
      ))}
    </div>
  )

  const currentDate = moment().format("YYYY-MM-DD");

  return (
    <Card className="dark:bg-background bg-transparent w-full  mx-auto my-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">Monthly Namaz Timings</CardTitle>
        {location && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center "
          >
            {/* <h2 className="font-bold text-lg sm:text-xl">{`${location.city}, ${location.country}`}</h2> */}
          </motion.div>
        )}
        {hijriDate && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-base text-muted-foreground"
          >
            <p>Hijri Date: {hijriDate}</p>
          </motion.div>
        )}
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => setSchool("hanafi")}
            variant={school === "hanafi" ? "default" : "outline"}
            size="default"
            className="mx-1 dark:text-zinc-50"
          >
            Hanafi
          </Button>
          <Button
            onClick={() => setSchool("shafi")}
            variant={school === "shafi" ? "default" : "outline"}
            size="default"
            className="mx-1 dark:text-zinc-50"
          >
            Shafi
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {renderSkeletonRow()}
            </motion.div>
          ))
        ) : (
          <>
            <div className="hidden md:grid md:grid-cols-7 gap-2 p-2 font-semibold text-center bg-gray-100 dark:bg-gray-800 rounded-lg my-2 text-sm sticky top-0">
              <div>Date</div>
              <div><SunIcon className="inline-block mr-1" size={16} /> Fajr</div>
              <div><SunIcon className="inline-block mr-1" size={16} /> Sunrise</div>
              <div><SunIcon className="inline-block mr-1" size={16} /> Dhuhr</div>
              <div><SunIcon className="inline-block mr-1" size={16} /> Asr</div>
              <div><MoonIcon className="inline-block mr-1" size={16} /> Maghrib</div>
              <div><MoonIcon className="inline-block mr-1" size={16} /> Isha</div>
            </div>
            <Accordion type="single" collapsible className="w-full md:hidden">
              {timings.map((day, index) => (
                <AccordionItem key={day.date} value={day.date}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AccordionTrigger className={`text-sm ${
                      day.date === currentDate
                        ? "bg-primary text-primary-foreground"
                        : "even:bg-muted"
                    } p-4 rounded-lg`}>
                      <div className="flex justify-between w-full">
                        <span>{day.formattedDate}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 gap-2 p-2 text-sm">
                        <div className="flex items-center"><SunIcon className="mr-2 h-4 w-4" /> Fajr</div>
                        <div>{day.timings.Fajr}</div>
                        <div className="flex items-center"><SunIcon className="mr-2 h-4 w-4" /> Sunrise</div>
                        <div>{day.timings.Sunrise}</div>
                        <div className="flex items-center"><SunIcon className="mr-2 h-4 w-4" /> Dhuhr</div>
                        <div>{day.timings.Dhuhr}</div>
                        <div className="flex items-center"><SunIcon className="mr-2 h-4 w-4" /> Asr</div>
                        <div>{day.timings.Asr}</div>
                        <div className="flex items-center"><MoonIcon className="mr-2 h-4 w-4" /> Maghrib</div>
                        <div>{day.timings.Maghrib}</div>
                        <div className="flex items-center"><MoonIcon className="mr-2 h-4 w-4" /> Isha</div>
                        <div>{day.timings.Isha}</div>
                      </div>
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="hidden md:block">
              {timings.map((day, index) => (
                <motion.div
                  key={day.date}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`grid grid-cols-7 gap-2 p-4 rounded-lg text-base dark:text-zinc-100 hover:bg-blue-400 hover:shadow-xl hover:text-zinc-100 ${day.date === currentDate ? "bg-blue-400 text-primary-foreground" : "even:bg-muted"}`}>
                  <div className="text-center">{day.formattedDate}</div>
                  <div className="text-center">{day.timings.Fajr}</div>
                  <div className="text-center">{day.timings.Sunrise}</div>
                  <div className="text-center">{day.timings.Dhuhr}</div>
                  <div className="text-center">{day.timings.Asr}</div>
                  <div className="text-center">{day.timings.Maghrib}</div>
                  <div className="text-center">{day.timings.Isha}</div>
                </motion.div>
              ))}
            </div>
          </>
        )}
        {!loading && timings.length === 0 && (
          <div className="text-center py-8">
            <Button onClick={fetchLocation} size="sm">
              <CalendarIcon className="mr-2 h-4 w-4" /> Load Timings
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MonthlyNamazTimings;