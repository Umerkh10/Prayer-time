"use client";

import React, { useEffect, useState } from "react";
import { PrayerTimes, CalculationMethod, Madhab } from "adhan";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Moon, Sun, Sunrise } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cityTimezones } from '../../[countryName]/[cityName]/cityTimezones';


interface PrayerTime {
  date: string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

function Page() {
  const [data, setData] = useState<any>({});
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime | null>(null);
  const [monthlyTimes, setMonthlyTimes] = useState<PrayerTime[] | null>(null);
  const [selectedMadhab, setSelectedMadhab] = useState<keyof typeof Madhab>("Shafi");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cityDetails = localStorage.getItem("cityDetails");
    if (cityDetails) {
      setData(JSON.parse(cityDetails));
    }
  }, []);

  useEffect(() => {
    if (data?.city?.name) {
      // Determine the timezone for the city based on its name
      const timezone = cityTimezones[data.city.name];
      if (timezone) {
        calculatePrayerTimes(timezone);
        calculateMonthlyPrayerTimes(timezone);
      } else {
        setError("Timezone for the selected city is not available.");
      }
    }
  }, [data, selectedMadhab]);

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
        date: dateInCity.toLocaleDateString(),
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
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Prayer Times In {data?.city?.name}</h1>
          <p className="text-lg text-muted-foreground">
            {data?.timezones?.utc}
          </p>
        </div>
      </div>


      <Card className="mb-8">
        <CardContent className="pt-6">
              <div className="my-3">
            <label className="block mb-2 text-sm font-medium">Select Madhab:</label>
            <Select value={selectedMadhab} onValueChange={(value) => setSelectedMadhab(value as keyof typeof Madhab)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select Madhab" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Shafi">Shafi</SelectItem>
                <SelectItem value="Hanafi">Hanafi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="inline-block px-4 py-2 bg-secondary rounded-lg mb-6">
            <span className="font-medium">Today</span>
          </div>
          {prayerTimes ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(prayerTimes).map(([key, value]) =>
                key !== "date" ? (
                  <div key={key} className="p-4 rounded-xl bg-secondary">
                    <div className="flex items-center gap-2 mb-2">
                      {key === "fajr" && <Sun className="h-4 w-4" />}
                      {key === "sunrise" && <Sunrise className="h-4 w-4" />}
                      {key === "dhuhr" && <Sun className="h-4 w-4" />}
                      {key === "asr" && <Sun className="h-4 w-4" />}
                      {key === "maghrib" && <Moon className="h-4 w-4" />}
                      {key === "isha" && <Moon className="h-4 w-4" />}
                      <span className="capitalize text-sm font-medium">{key}</span>
                    </div>
                    <p className="text-2xl font-bold">{value}</p>
                  </div>
                ) : null,
              )}
            </div>
          ) : (
            <p>Loading prayer times...</p>
          )}

    
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Monthly Prayer Times
        </h2>
        {monthlyTimes ? (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Fajr</TableHead>
                  <TableHead>Sunrise</TableHead>
                  <TableHead>Dhuhr</TableHead>
                  <TableHead>Asr</TableHead>
                  <TableHead>Maghrib</TableHead>
                  <TableHead>Isha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monthlyTimes.map((day, index) => (
                  <TableRow key={index}>
                    <TableCell>{day.date}</TableCell>
                    <TableCell>{day.fajr}</TableCell>
                    <TableCell>{day.sunrise}</TableCell>
                    <TableCell>{day.dhuhr}</TableCell>
                    <TableCell>{day.asr}</TableCell>
                    <TableCell>{day.maghrib}</TableCell>
                    <TableCell>{day.isha}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <p>No monthly prayer times found.</p>
        )}
      </div>
    </div>
  );
}

export default Page;
