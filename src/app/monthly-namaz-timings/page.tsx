"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { Coordinates, CalculationMethod, Madhab, PrayerTimes } from "adhan";

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
      return { lat, lon };
    } catch (error: any) {
      console.error("Error fetching location data:", error.message);
      setError("Failed to fetch location data.");
      return null;
    }
  };

  const calculateMonthlyTimings = async () => {
    const coordinates = await fetchLocation();
    if (!coordinates) return;

    const { lat, lon } = coordinates;
    const calculationMethod = CalculationMethod.MuslimWorldLeague();
    const madhab = school === "hanafi" ? Madhab.Hanafi : Madhab.Shafi;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const newTimings: NamazTiming[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      calculationMethod.madhab = madhab;

      const prayerTimes = new PrayerTimes(
        new Coordinates(lat, lon),
        date,
        calculationMethod
      );

      newTimings.push({
        date: date.toISOString().split("T")[0],
        timings: {
          Fajr: prayerTimes.fajr.toLocaleTimeString("en-US", {
            timeZone: location?.timezone,
          }),
          Sunrise: prayerTimes.sunrise.toLocaleTimeString("en-US", {
            timeZone: location?.timezone,
          }),
          Dhuhr: prayerTimes.dhuhr.toLocaleTimeString("en-US", {
            timeZone: location?.timezone,
          }),
          Asr: prayerTimes.asr.toLocaleTimeString("en-US", {
            timeZone: location?.timezone,
          }),
          Maghrib: prayerTimes.maghrib.toLocaleTimeString("en-US", {
            timeZone: location?.timezone,
          }),
          Isha: prayerTimes.isha.toLocaleTimeString("en-US", {
            timeZone: location?.timezone,
          }),
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
        {loading
          ? Array.from({ length: 5 }).map((_, index) => <div key={index}>{renderSkeletonRow()}</div>)
          : timings.map((day) => (
              <div key={day.date} className={`grid grid-cols-7 gap-4 p-4 ${day.date === currentDate ? "bg-blue-500 text-white" : "even:bg-gray-100/10"}`}>
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
