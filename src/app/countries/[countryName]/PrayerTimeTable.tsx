"use client";

import { useEffect, useState } from "react";
import {
  PrayerTimes,
  CalculationMethod,
  Madhab,
  CalculationParameters,
} from "adhan";

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
}

const prayerIcons = {
  fajr: "Fajr",
  sunrise: "Sunrise",
  dhuhr: "Dhuhr",
  asr: "Asr",
  maghrib: "Maghrib",
  isha: "Isha",
};

// Static list of cities with their locations
const citiesByCountry: { [key: string]: City[] } = {
  Pakistan: [
    { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
    { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
    { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
  ],
  "United States": [
    { name: "New York", latitude: 40.7128, longitude: -74.006 },
    { name: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
    { name: "Chicago", latitude: 41.8781, longitude: -87.6298 },
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
  Kuwait: [
    { name: "Kuwait City", latitude: 29.3759, longitude: 47.9774 },
  ],
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


const getCalculationMethod = (country: string): CalculationParameters => {
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

export function PrayerTimesTable({ country }: PrayerTimesTableProps) {
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

      const formatTime = (time: Date) =>
        time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
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
  }, [country, selectedMadhab]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      {/* Madhab Selection */}
      <div className="mb-4">
        <label htmlFor="madhab" className="block text-sm font-medium">
          Select Madhab:
        </label>
        <select
          id="madhab"
          className="mt-1 block w-full rounded-lg border px-3 py-2"
          value={selectedMadhab}
          onChange={(e) =>
            setSelectedMadhab(
              e.target.value as keyof typeof Madhab
            )
          }
        >
          <option value="Shafi">Shafi</option>
          <option value="Hanafi">Hanafi</option>
        </select>
      </div>

      {/* Prayer Times */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <div key={city.name} className="p-4 border rounded-lg shadow">
            <h3 className="text-lg font-bold">{city.name}</h3>
            <ul className="mt-2">
              {Object.entries(prayerIcons).map(([prayer, label]) => (
                <li
                  key={prayer}
                  className={`${
                    prayerTimes[city.name]?.current === prayer
                      ? "text-blue-500 font-bold"
                      : ""
                  }`}
                >
                  <strong>{label}: </strong>
                  {prayerTimes[city.name]?.[prayer as keyof PrayerTime]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
