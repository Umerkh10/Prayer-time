"use client";

import { notFound, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { PrayerTimesTable } from "./PrayerTimeTable";
import { CountryInfo } from "./CountryInfo";

type CityPrayerTimes = {
  name: string;
  times: {
    fajr: string;
    sunrise: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
  };
};
interface PrayerTimesTableProps {

  country: CountryData;

  timezone: string;

}

type CountryData = {
  countryCode: string; // ISO country code
  cities: CityPrayerTimes[];
  name: string;
  timezone: string;
  bannerImage: string;
};

const timezoneMapping: { [key: string]: string } = {
  "UTC-12:00": "Etc/GMT+12",
  "UTC-11:00": "Pacific/Pago_Pago",
  "UTC-10:00": "Pacific/Honolulu",
  "UTC-09:00": "America/Anchorage",
  "UTC-08:00": "America/Los_Angeles",
  "UTC-07:00": "America/Denver",
  "UTC-06:00": "America/Chicago",
  "UTC-05:00": "America/New_York",
  "UTC-04:00": "America/Caracas", // Venezuela
  "UTC-03:00": "America/Sao_Paulo",
  "UTC-02:00": "Atlantic/South_Georgia",
  "UTC-01:00": "Atlantic/Azores",
  "UTC+00:00": "Europe/London", // Also UTC
  "UTC+01:00": "Europe/Paris",
  "UTC+02:00": "Europe/Athens",
  "UTC+03:00": "Europe/Moscow",
  "UTC+03:30": "Asia/Tehran",
  "UTC+04:00": "Asia/Dubai",
  "UTC+04:30": "Asia/Kabul",
  "UTC+05:00": "Asia/Karachi",
  "UTC+05:30": "Asia/Kolkata",
  "UTC+05:45": "Asia/Kathmandu",
  "UTC+06:00": "Asia/Dhaka",
  "UTC+06:30": "Asia/Yangon",
  "UTC+07:00": "Asia/Bangkok",
  "UTC+08:00": "Asia/Shanghai",
  "UTC+09:00": "Asia/Tokyo",
  "UTC+09:30": "Australia/Darwin",
  "UTC+10:00": "Australia/Sydney",
  "UTC+11:00": "Pacific/Noumea",
  "UTC+12:00": "Pacific/Auckland",
  "UTC+13:00": "Pacific/Tongatapu",
  "UTC+14:00": "Pacific/Kiritimati",
};

export default function CountryPage() {
  const pathname = usePathname();
  const extracted = pathname.split("/")[2]?.toLowerCase();

  const [country, setCountry] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${extracted}?fullText=true`
        );
  
        if (!response.ok) {
          throw new Error("Country not found");
        }
  
        const data = await response.json();
        const rawTimezone = data[0].timezones?.[0];
  
        if (!rawTimezone || typeof rawTimezone !== "string") {
          throw new Error("Invalid timezone data");
        }
  
        let mappedTimezone: string;
  
        // Special cases for the UK and USA
        if (data[0].name.common === "United Kingdom") {
          mappedTimezone = "Europe/London";
        } else if (data[0].name.common === "United States") {
          mappedTimezone = "America/New_York"; // Adjust based on region if needed
        } else if (data[0].name.common === "Australia") {
          mappedTimezone = "Australia/Sydney"; // Adjust based on region if needed
        } else if (data[0].name.common === "France") {
          mappedTimezone = "Europe/Paris"; // Adjust based on region if needed
        } else {
          // Use the timezone mapping for other countries
          mappedTimezone = timezoneMapping[rawTimezone] || rawTimezone;
        }
  
        const countryData: CountryData = {
          countryCode: data[0].cca2,
          name: data[0].name.common,
          timezone: mappedTimezone,
          bannerImage: data[0].flags.svg,
          cities: []
        };
  
        setCountry(countryData);
      } catch (error) {
        console.error("Error fetching country data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    if (extracted) {
      fetchCountryData();
    }
  }, [extracted]);

  useEffect(() => {
    if (country?.timezone) {
      const updateTime = () => {
        try {
          const now = new Date();
          const options: Intl.DateTimeFormatOptions = {
            timeZone: country.timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          };
          const formattedTime = new Intl.DateTimeFormat("en-US", options).format(now);
          setTime(formattedTime);
        } catch (error) {
          console.error("Error updating time:", error);
        }
      };

      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, [country?.timezone]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }

  const flagUrl = `https://flagcdn.com/w320/${country.countryCode.toLowerCase()}.png`;

  return (
    <div className="bg-background">
      <Banner image={country.bannerImage} />

      <main className="mx-auto px-4 py-8 -mt-32 relative z-10">
        <div className="bg-background rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <CountryInfo
              name={country.name}
              flagUrl={flagUrl}
              timezone={country.timezone} // Pass the timezone
              time={time} // Pass the current time
            />

          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold">
              Prayer Times For Cities in <span className="capitalize">{country.name}</span>
            </h2>
            <PrayerTimesTable country={country.name}  />
            </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-zinc-100 pt-8 pb-1">Discover the {country.name}</h2>
          <p className="mt-1 text-muted-foreground text-lg pb-3">
            Welcome to the {country.name} — a dazzling archipelago of over 700 islands, cays, and islets, each a slice of paradise in the Atlantic. Home to 88% of the archipelago's population, the {country.name} blends the serene charm of colonial history with modern sophistication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 max-w-6xl mx-auto">
            {/* First Column */}
            <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">Culture & Charm</h3>
              <p className="mt-4 text-muted-foreground">
                Nassau, the vibrant capital on New Providence Island, offers a harmonious fusion of colonial elegance and metropolitan charm. The {country.name} celebrates its roots through Junkanoo, an annual festival of color, rhythm, and dance, reflecting a proud blend of African and British heritage.
              </p>
            </div>
            {/* Second Column */}
            <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">Nature & Biodiversity</h3>
              <p className="mt-4 text-muted-foreground">
                Known for its crystal-clear turquoise waters, the {country.name} is a sanctuary for unique marine life and diverse ecosystems. Explore breathtaking national parks, home to rare species, and relax on iconic white sand beaches recognized globally as nature’s finest masterpieces.
              </p>
            </div>
            {/* Third Column */}
            <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">Economic Powerhouse</h3>
              <p className="mt-4 text-muted-foreground">
                Tourism fuels 30% of the nation's GDP, while the Bahamian Dollar keeps its economy stable. Whether it’s boutique resorts or local markets, the {country.name} creates unforgettable experiences with its warm, welcoming people and rich traditions.
              </p>
            </div>
            {/* Fourth Column */}
            <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">A Laid-Back Lifestyle</h3>
              <p className="mt-4 text-muted-foreground">
                Life in the {country.name} is a unique blend of relaxation and vibrancy. With a seamless mix of African, American, and European influences, the islands promise a slow-paced lifestyle perfect for those looking to unwind in style.
              </p>
            </div>

          </div>



        </div>
      </main>
    </div>
  );
}