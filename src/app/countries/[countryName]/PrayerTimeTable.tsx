"use client";

import { useEffect, useState } from "react";
import {
  PrayerTimes,
  CalculationMethod,
  Madhab,
  CalculationParameters,
} from "adhan";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Sun, Sunrise, Sunset } from "lucide-react";

interface PrayerTime {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  current?: string; // To track the current prayer
}

interface City {
  name: string;
  latitude: number;
  longitude: number;
}

interface PrayerTimesTableProps {
  country: string; // Country name as a string
  timezone: string; 
}

const prayerIcons = {
  fajr: Sunrise,
  dhuhr: Sun,
  asr: Sun,
  maghrib: Sunset,
  isha: Moon,
};

// Static list of cities with their locations
const citiesByCountry: { [key: string]: City[] } = {
  // Pacific Time Zone
  "Pacific Time Zone": [
    { name: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
    { name: "San Francisco", latitude: 37.7749, longitude: -122.4194 },
    { name: "Seattle", latitude: 47.6067, longitude: -122.3321 },
  ],

  // Eastern Time Zone
  "Eastern Time Zone": [
    { name: "New York", latitude: 40.7128, longitude: -74.006 },
    { name: "Miami", latitude: 25.7617, longitude: -80.1918 },
    { name: "Boston", latitude: 42.3584, longitude: -71.0596 },
  ],

  // Central Time Zone
  "Central Time Zone": [
    { name: "Chicago", latitude: 41.8781, longitude: -87.6298 },
    { name: "Houston", latitude: 29.7633, longitude: -95.3632 },
    { name: "Dallas", latitude: 32.7763, longitude: -96.7969 },
  ],

  // Mountain Time Zone
  "Mountain Time Zone": [
    { name: "Denver", latitude: 39.7392, longitude: -104.9903 },
    { name: "Phoenix", latitude: 33.4484, longitude: -112.0739 },
    { name: "Salt Lake City", latitude: 40.7677, longitude: -111.8906 },
  ],

  // Other countries
  Pakistan: [
    { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
    { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
    { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
    { name: "Faisalabad", latitude: 31.4167, longitude: 73.0833 },
    { name: "Rawalpindi", latitude: 33.6007, longitude: 73.0679 },
    { name: "Gujranwala", latitude: 32.1611, longitude: 74.1883 },
    { name: "Peshawar", latitude: 34.0083, longitude: 71.5783 },
    { name: "Multan", latitude: 30.1956, longitude: 71.4681 },
    { name: "Hyderabad", latitude: 25.3925, longitude: 68.3734 },
    { name: "Quetta", latitude: 30.1843, longitude: 67.0099 },
    { name: "Sialkot", latitude: 32.5069, longitude: 74.5319 },
    { name: "Bahawalpur", latitude: 29.3956, longitude: 71.6839 },
  ],
  "Saudi Arabia": [
    { name: "Riyadh", latitude: 24.7136, longitude: 46.6753 },
    { name: "Mecca", latitude: 21.3891, longitude: 39.8579 },
    { name: "Medina", latitude: 24.5247, longitude: 39.5692 },
  ],
  Egypt: [
    { name: "Cairo", latitude: 30.0444, longitude: 31.2357 },
    { name: "Alexandria", latitude: 31.2156, longitude: 29.9553 },
    { name: "Giza", latitude: 29.9765, longitude: 31.1313 },
  ],
  "United Kingdom": [
    { name: "London", latitude: 51.5074, longitude: -0.1278 },
    { name: "Birmingham", latitude: 52.4862, longitude: -1.8904 },
    { name: "Manchester", latitude: 53.4808, longitude: -2.2426 },
  ],
  Turkey: [
    { name: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
    { name: "Ankara", latitude: 39.9208, longitude: 32.8541 },
    { name: "Izmir", latitude: 38.4192, longitude: 27.1287 },
  ],
  Iran: [
    { name: "Tehran", latitude: 35.6892, longitude: 51.389 },
    { name: "Mashhad", latitude: 36.2605, longitude: 59.6168 },
    { name: "Isfahan", latitude: 32.6546, longitude: 51.668 },
  ],
  "United Arab Emirates": [
    { name: "Dubai", latitude: 25.2048, longitude: 55.2708 },
    { name: "Abu Dhabi", latitude: 24.4539, longitude: 54.3773 },
    { name: "Sharjah", latitude: 25.3463, longitude: 55.4209 },
  ],
  Singapore: [
    { name: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  ],
  // Kuwait: [
  //   { name: "Kuwait City", latitude: 29.3759, longitude: 47.9774 },
  // ],
  Germany: [
    { name: "Berlin", latitude: 52.5200, longitude: 13.405 },
    { name: "Munich", latitude: 48.1351, longitude: 11.582 },
    { name: "Frankfurt", latitude: 50.1109, longitude: 8.6821 },
  ],
  "South Africa": [
    { name: "Johannesburg", latitude: -26.2041, longitude: 28.0473 },
    { name: "Cape Town", latitude: -33.9249, longitude: 18.4241 },
    { name: "Durban", latitude: -29.8587, longitude: 31.0218 },
  ],
  India: [
    { name: "Delhi", latitude: 28.7041, longitude: 77.1025 },
    { name: "Mumbai", latitude: 19.076, longitude: 72.8777 },
    { name: "Bangalore", latitude: 12.9716, longitude: 77.5946 },
  ],
  Australia: [
    { name: "Sydney", latitude: -33.8688, longitude: 151.2093 },
    { name: "Melbourne", latitude: -37.8136, longitude: 144.9631 },
    { name: "Brisbane", latitude: -27.4698, longitude: 153.0251 },
  ],
  Canada: [
    { name: "Toronto", latitude: 43.6511, longitude: -79.3832 },
    { name: "Vancouver", latitude: 49.2827, longitude: -123.1207 },
    { name: "Montreal", latitude: 45.5017, longitude: -73.5673 },
  ],
  Indonesia: [
    { name: "Jakarta", latitude: -6.2088, longitude: 106.8456 },
    { name: "Surabaya", latitude: -7.2575, longitude: 112.7521 },
    { name: "Bandung", latitude: -6.9175, longitude: 107.6191 },
  ],
};


const getCalculationMethod = (country: string) => {
  switch (country) {
    case "Pakistan":
      return CalculationMethod.Karachi();
    case "United States":
    case "Germany":
      return CalculationMethod.NorthAmerica();
    case "United Kingdom":
      return CalculationMethod.MuslimWorldLeague();
    case "Saudi Arabia":
      return CalculationMethod.UmmAlQura();
    case "Egypt":
      return CalculationMethod.Egyptian();
    case "Singapore":
      return CalculationMethod.Singapore();
    case "Kuwait":
      return CalculationMethod.Kuwait();
    case "Iran":
      return CalculationMethod.Tehran();
    case "Turkey":
      return CalculationMethod.Turkey();
    case "Dubai":
      return CalculationMethod.Dubai();
    default:
      return CalculationMethod.MuslimWorldLeague();
  }
};

export function PrayerTimesTable({ country,timezone }: PrayerTimesTableProps) {
  const [cities, setCities] = useState<City[]>([]);
  const [prayerTimes, setPrayerTimes] = useState<Record<string, PrayerTime>>({});
  const [selectedMadhab, setSelectedMadhab] = useState<keyof typeof Madhab>("Shafi");
  const [error, setError] = useState<string | null>(null);
  

  const calculatePrayerTimes = () => {
    const cityList = citiesByCountry[country];
    if (!cityList) {
      setError(`No cities available for ${country}.`);
      return;
    }

    const now = new Date();
    const calculationMethod = getCalculationMethod(country);
    calculationMethod.madhab = Madhab[selectedMadhab];

    const times = cityList.reduce((acc, city) => {
      const prayerTimes = new PrayerTimes(
        { latitude: city.latitude, longitude: city.longitude },
        now,
        calculationMethod
      );

      // Use the passed timezone prop instead of resolving it dynamically
      const formatTime = (time: Date) =>
        time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: timezone, // Ensure the passed timezone is used here
        });

      acc[city.name] = {
        fajr: formatTime(prayerTimes.fajr),
        sunrise: formatTime(prayerTimes.sunrise),
        dhuhr: formatTime(prayerTimes.dhuhr),
        asr: formatTime(prayerTimes.asr),
        maghrib: formatTime(prayerTimes.maghrib),
        isha: formatTime(prayerTimes.isha),
        current: prayerTimes.currentPrayer(now) || undefined,
      };

      return acc;
    }, {} as Record<string, PrayerTime>);

    setCities(cityList);
    setPrayerTimes(times);
    setError(null); // Clear error if previously set
  };

  useEffect(() => {
    calculatePrayerTimes();
  }, [country, selectedMadhab, timezone]); // Add timezone to dependencies to recalculate when it changes

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="mb-6">
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
                    <span className="flex items-center">
                  
                      {prayer.charAt(0).toUpperCase() + prayer.slice(1)}
                    </span>
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
                <div className="flex items-center">

                  {prayer.charAt(0).toUpperCase() + prayer.slice(1)}
                </div>
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
  );
}
