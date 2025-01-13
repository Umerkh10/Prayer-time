"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { Coordinates, CalculationMethod, Madhab, PrayerTimes } from "adhan";
import moment from "moment-hijri";

interface LocationInfo {
  city: string;
  country: string;
  timezone: string;
}



const MonthlyNamazTimings = () => {
  interface NamazTiming {
    date: string;
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

      newTimings.push({
        date: date.toISOString().split("T")[0],
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
    <div className="grid grid-cols-7 gap-4 p-4 rounded-lg animate-pulse">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  );

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Monthly Namaz Timings</CardTitle>
        {location && (
          <div className="text-center mt-2">
            <h2 className="font-bold text-2xl">{`${location.city}, ${location.country}`}</h2>
          </div>
        )}
        {hijriDate && (
          <div className="text-center text-gray-500">
            <p>Hijri Date: {hijriDate}</p>
          </div>
        )}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setSchool("hanafi")}
            className={`px-4 py-2 mx-2 rounded font-semibold ${school === "hanafi" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-zinc-800"}`}
          >
            Hanafi
          </button>
          <button
            onClick={() => setSchool("shafi")}
            className={`px-4 py-2 mx-2 rounded font-semibold ${school === "shafi" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-zinc-800"}`}
          >
            Shafi
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-4 p-4 font-bold text-center bg-gray-100 text-blue-900 dark:bg-slate-900 dark:text-zinc-200 rounded-lg my-2">
          <div>Date</div>
          <div>Fajr</div>
          <div>Sunrise</div>
          <div>Dhuhr</div>
          <div>Asr</div>
          <div>Maghrib</div>
          <div>Isha</div>
        </div>
        {loading
          ? Array.from({ length: 5 }).map((_, index) => <div key={index}>{renderSkeletonRow()}</div>)
          : timings.map((day) => (
              <div key={day.date} className={`grid grid-cols-7 gap-4 p-4 rounded-lg ${day.date === currentDate ? "bg-blue-500 text-white" : "even:bg-slate-200 dark:even:bg-gray-100/10"}`}>
                <div className="text-center">{day.date}</div>
                <div className="text-center">{day.timings.Fajr}</div>
                <div className="text-center">{day.timings.Sunrise}</div>
                <div className="text-center">{day.timings.Dhuhr}</div>
                <div className="text-center">{day.timings.Asr}</div>
                <div className="text-center">{day.timings.Maghrib}</div>
                <div className="text-center">{day.timings.Isha}</div>
              </div>
            ))}
      </CardContent>
    </Card>
  );
};

export default MonthlyNamazTimings;
