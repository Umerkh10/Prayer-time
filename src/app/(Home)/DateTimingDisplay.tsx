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
  const [selectedMadhab, setSelectedMadhab] = useState<typeof Madhab.Shafi>(Madhab.Shafi);
  const [error, setError] = useState<string | null>(null);

  const calculatePrayerTimes = () => {
    const cityList = citiesByCountry[country];
    if (!cityList) {
      setError(`No cities available for ${country}.`);
      return;
    }

    const now = new Date();
    const calculationMethod = getCalculationMethod(country);
    calculationMethod.madhab = selectedMadhab;

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
              e.target.value === "Shafi" ? Madhab.Shafi : Madhab.Hanafi
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
