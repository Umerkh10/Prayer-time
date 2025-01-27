// "use client"
// import React, { useEffect, useState } from 'react'

// function page() {
//     const [data, setData] = useState<any>({})

//     useEffect(()=>{
//         const city = localStorage.getItem('cityDetails')
//         if (city) {
//             setData(JSON.parse(city))
//         }
//     },[])

//     console.log(data)

//   return (
//     <>
//     <div>Salam Alaikum this is chahat fateh {data?.city?.name} </div>
//     <div>Salam Alaikum this is chahat fateh {data?.city?.latitude} </div>
//     <div>Salam Alaikum this is chahat fateh {data?.city?.longitude} </div>
//     <div>{data?.timezones}</div>



//     </>
//   )
// }

// export default page



"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { PrayerTimes, CalculationMethod, Madhab } from "adhan";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PrayerTime {
  date: ReactNode;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  current?: string;
}

function Page() {
  const [data, setData] = useState<any>({});
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime | null>(null);
  const [monthlyTimes, setMonthlyTimes] = useState<PrayerTime[] | null>(null);
  const [selectedMadhab, setSelectedMadhab] = useState<keyof typeof Madhab>("Shafi");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cityDetails = localStorage.getItem("cityDetails");
    const monthlyPrayerTimes = localStorage.getItem("monthlyPrayerTimes");

    if (cityDetails) {
      const parsedData = JSON.parse(cityDetails);
      setData(parsedData);
    }

    if (monthlyPrayerTimes) {
      const parsedMonthlyTimes = JSON.parse(monthlyPrayerTimes);
      setMonthlyTimes(parsedMonthlyTimes);
    }
  }, []);

  useEffect(() => {
    if (data?.city?.latitude && data?.city?.longitude) {
      calculatePrayerTimes();
    }
  }, [data, selectedMadhab]);

  const calculatePrayerTimes = () => {
    if (!data?.city?.latitude || !data?.city?.longitude) {
      setError("Latitude and Longitude are required to calculate prayer times.");
      return;
    }

    const now = new Date();
    const method = CalculationMethod[(data.city.country as keyof typeof CalculationMethod) || "MuslimWorldLeague"]();
    method.madhab = Madhab[selectedMadhab];

    const prayerTimes = new PrayerTimes(
      { latitude: data.city.latitude, longitude: data.city.longitude },
      now,
      method
    );

    const formatTime = (time: Date) =>
      time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

    setPrayerTimes({
          date: now.toLocaleDateString(),
          fajr: formatTime(prayerTimes.fajr),
          sunrise: formatTime(prayerTimes.sunrise),
          dhuhr: formatTime(prayerTimes.dhuhr),
          asr: formatTime(prayerTimes.asr),
          maghrib: formatTime(prayerTimes.maghrib),
          isha: formatTime(prayerTimes.isha),
          current: prayerTimes.currentPrayer(now) || undefined,
        });

    setError(null);
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-2xl font-bold">Prayer Times</span>
            <span className="text-sm font-normal flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {data?.city?.name}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {prayerTimes ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Object.keys(prayerTimes).map((key) => (
                key !== 'date' && key !== 'current' && (
                  <div key={key} className="bg-secondary p-3 rounded-lg">
                    <p className="text-sm font-semibold">{key}</p>
                    <p className="text-lg">{(prayerTimes as any)[key]}</p>
                  </div>
                )
              ))}
            </div>
          ) : (
            <p>Loading prayer times...</p>
          )}

          {prayerTimes?.current && (
            <div className="mt-4 bg-primary text-primary-foreground p-3 rounded-lg">
              <p className="text-sm font-semibold">Current Prayer</p>
              <p className="text-lg">{prayerTimes.current}</p>
            </div>
          )}

          <div className="mt-6">
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

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Monthly Prayer Times
            </h2>
            {monthlyTimes ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Fajr</TableHead>
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
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
