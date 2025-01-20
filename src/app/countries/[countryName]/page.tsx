// "use client";
// import { notFound, usePathname } from "next/navigation";
// import { Banner } from "./Banner";
// import { PrayerTimesTable } from "./PrayerTimeTable";
// import { CountryInfo } from "./CountryInfo";


// // interface CountryPageProps {
// //     params: {
// //       countryName: string;
// //     };
// //   }

// type CountryData = {
//   name: string;
//   code: string; // Added ISO country code
//   timezone: string;
//   bannerImage: string;
//   cities: {
//     name: string;
//     times: {
//       fajr: string;
//       sunrise: string;
//       dhuhr: string;
//       asr: string;
//       maghrib: string;
//       isha: string;
//     };
//   }[];
// };

// const COUNTRY_DATA: CountryData[] = [
//   {
//     name: "Bahamas",
//     code: "BS",
//     timezone: "America/Nassau",
//     bannerImage: "/bahamas-bg.jpg",
//     cities: [
//       { name: "Cooper's Town", times: { fajr: "05:39", sunrise: "07:00", dhuhr: "12:20", asr: "15:19", maghrib: "17:39", isha: "18:56" } },
//       { name: "Freeport", times: { fajr: "05:40", sunrise: "07:01", dhuhr: "12:21", asr: "15:20", maghrib: "17:40", isha: "18:57" } },
//       { name: "Marsh Harbour", times: { fajr: "05:37", sunrise: "06:58", dhuhr: "12:18", asr: "15:18", maghrib: "17:38", isha: "18:54" } },
//       { name: "Nassau", times: { fajr: "05:36", sunrise: "06:56", dhuhr: "12:19", asr: "15:21", maghrib: "17:42", isha: "18:57" } },
//       { name: "West End", times: { fajr: "05:45", sunrise: "07:06", dhuhr: "12:25", asr: "15:25", maghrib: "17:45", isha: "19:02" } },
//     ],
//   },
// ];

// export default function CountryPage() {




//   const pathname = usePathname();
//   const extracted = pathname.split("/")[2];

//   const country = COUNTRY_DATA.find(
//     (country) => country.name.toLowerCase() === extracted.toLowerCase()
//   );

//   if (!country) {
//     notFound();
//     return null;
//   }

//   const generateFlagUrl = (countryCode: string) => {
//     return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
//   };

//   const flagUrl = generateFlagUrl(country.code);

//   return (
//     <div className=" bg-background">
//       <Banner image={country.bannerImage} />

//       <main className=" mx-auto px-4 py-8 -mt-32 relative z-10">
//         <div className="bg-background rounded-lg shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//             <CountryInfo
//               name={country.name}
//               flagUrl={flagUrl}
//               timezone={country.timezone}
//             />
//           </div>

//           <div className="space-y-8">
//             <h2 className="text-2xl font-bold">Prayer Times For Cities in {country.name}</h2>
//             <PrayerTimesTable cities={country.cities} />
//           </div>

//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-zinc-100 pt-8 pb-1">Discover the {country.name}</h2>
//         <p className="mt-1 text-muted-foreground text-lg pb-3">
//           Welcome to the {country.name} — a dazzling archipelago of over 700 islands, cays, and islets, each a slice of paradise in the Atlantic. Home to 88% of the archipelago's population, the {country.name} blends the serene charm of colonial history with modern sophistication. 
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">
//         {/* First Column */}
//         <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
//           <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">Culture & Charm</h3>
//           <p className="mt-4 text-muted-foreground">
//             Nassau, the vibrant capital on New Providence Island, offers a harmonious fusion of colonial elegance and metropolitan charm. The {country.name} celebrates its roots through Junkanoo, an annual festival of color, rhythm, and dance, reflecting a proud blend of African and British heritage.
//           </p>
//         </div>
//         {/* Second Column */}
//         <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
//           <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">Nature & Biodiversity</h3>
//           <p className="mt-4 text-muted-foreground">
//             Known for its crystal-clear turquoise waters, the {country.name} is a sanctuary for unique marine life and diverse ecosystems. Explore breathtaking national parks, home to rare species, and relax on iconic white sand beaches recognized globally as nature’s finest masterpieces.
//           </p>
//         </div>
//         {/* Third Column */}
//         <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
//           <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">Economic Powerhouse</h3>
//           <p className="mt-4 text-muted-foreground">
//             Tourism fuels 30% of the nation's GDP, while the Bahamian Dollar keeps its economy stable. Whether it’s boutique resorts or local markets, the {country.name} creates unforgettable experiences with its warm, welcoming people and rich traditions.
//           </p>
//         </div>
//         {/* Fourth Column */}
//         <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
//           <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">A Laid-Back Lifestyle</h3>
//           <p className="mt-4 text-muted-foreground">
//             Life in the {country.name} is a unique blend of relaxation and vibrancy. With a seamless mix of African, American, and European influences, the islands promise a slow-paced lifestyle perfect for those looking to unwind in style.
//           </p>
//         </div>

//         </div>
//       </main>
//     </div>
//   );
// }



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

type CountryData = {
  cities: CityPrayerTimes[];
  name: string;
  code: string;
  timezone: string;
  bannerImage: string;
};

export default function CountryPage() {
  const pathname = usePathname();
  const extracted = pathname.split("/")[2]; // Extract the country name from URL

  const [country, setCountry] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        // Make the API request with the dynamic country name
        const response = await fetch(
          `https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN&country=${encodeURIComponent(extracted)}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Country not found");
        }

        const data: CountryData = await response.json();
        setCountry(data); // Update the country state
      } catch (error) {
        console.error("Error fetching country data:", error);
        notFound(); // Redirect to 404 page
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [extracted]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!country) {
    return null;
  }

  // Generate the flag URL dynamically based on the country code
  const generateFlagUrl = (countryCode: string | undefined) => {
    return countryCode
      ? `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`
      : "https://flagcdn.com/w320/un.png"; // Default flag for unknown
  };

  const flagUrl = generateFlagUrl(country.code);

  return (
    <div className="bg-background">
      <Banner image={country.bannerImage} />

      <main className="mx-auto px-4 py-8 -mt-32 relative z-10">
        <div className="bg-background rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <CountryInfo name={extracted} flagUrl={flagUrl} timezone={country.timezone} />
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Prayer Times For Cities in <span className="capitalize">{extracted}</span></h2>
            <PrayerTimesTable city={country.cities} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-zinc-100 pt-8 pb-1">
            Discover <span className="capitalize">{extracted}</span>
          </h2>
          <p className="mt-1 text-muted-foreground text-lg pb-3">
            Welcome to <span className="capitalize">{extracted}</span> — a dazzling destination with rich history, culture, and natural beauty.
          </p>
        </div>
      </main>
    </div>
  );
}
