// "use client";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useEffect, useState } from "react";

// const MonthlyNamazTimings = () => {
//   interface NamazTiming {
//     date: string;
//     timings: {
//       Fajr: string;
//       Sunrise: string;
//       Dhuhr: string;
//       Asr: string;
//       Maghrib: string;
//       Isha: string;
//     };
//   }

//   const [timings, setTimings] = useState<NamazTiming[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchTimings = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         // Get user's location dynamically
//         navigator.geolocation.getCurrentPosition(
//           async (position) => {
//             const { latitude, longitude } = position.coords;

//             // Fetch namaz timings from the API
//             const response = await fetch(
//               `/api/namaz-timings?latitude=${latitude}&longitude=${longitude}&school=hanafi`
//             );

//             if (!response.ok) {
//               throw new Error("Failed to fetch namaz timings");
//             }

//             const data = await response.json();
//             setTimings(data.timings);
//             setLoading(false);
//           },
//           (error) => {
//             console.error("Error fetching location:", error);
//             setError("Failed to get your location. Please enable location access.");
//             setLoading(false);
//           }
//         );
//       } catch (error) {
//         console.error("Failed to fetch namaz timings:", error);
//         setError("Something went wrong while fetching namaz timings.");
//         setLoading(false);
//       }
//     };

//     fetchTimings();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <Card className="w-full max-w-4xl mx-auto my-8">
//     <CardHeader>
//       <CardTitle className="text-2xl font-bold text-center">Monthly Namaz Timings</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <div className="hidden md:grid md:grid-cols-7 gap-4 p-4 font-semibold text-center">
//         <div>Date</div>
//         <div>Fajr</div>
//         <div>Sunrise</div>
//         <div>Dhuhr</div>
//         <div>Asr</div>
//         <div>Maghrib</div>
//         <div>Isha</div>
//       </div>
//       <div className="md:hidden">
//         <Accordion type="single" collapsible className="w-full">
//           {timings.map((day, index) => (
//             <AccordionItem key={day.date} value={`item-${index}`}>
//               <AccordionTrigger className="text-left">
//                 {day.date}
//               </AccordionTrigger>
//               <AccordionContent>
//                 <div className="grid grid-cols-2 gap-2">
//                   <div className="font-semibold">Fajr:</div>
//                   <div>{day.timings.Fajr}</div>
//                   <div className="font-semibold">Sunrise:</div>
//                   <div>{day.timings.Sunrise}</div>
//                   <div className="font-semibold">Dhuhr:</div>
//                   <div>{day.timings.Dhuhr}</div>
//                   <div className="font-semibold">Asr:</div>
//                   <div>{day.timings.Asr}</div>
//                   <div className="font-semibold">Maghrib:</div>
//                   <div>{day.timings.Maghrib}</div>
//                   <div className="font-semibold">Isha:</div>
//                   <div>{day.timings.Isha}</div>
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//       <div className="hidden md:block">
//         {timings.map((day) => (
//           <div key={day.date} className="grid grid-cols-7 gap-4 p-4 even:bg-muted">
//             <div className="text-center">{day.date}</div>
//             <div className="text-center">{day.timings.Fajr}</div>
//             <div className="text-center">{day.timings.Sunrise}</div>
//             <div className="text-center">{day.timings.Dhuhr}</div>
//             <div className="text-center">{day.timings.Asr}</div>
//             <div className="text-center">{day.timings.Maghrib}</div>
//             <div className="text-center">{day.timings.Isha}</div>
//           </div>
//         ))}
//       </div>
//     </CardContent>
//   </Card>
//   );
// };

// export default MonthlyNamazTimings;







"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"; // Import your skeleton component
import { useEffect, useState } from "react";

interface LocationInfo {
  city: string;
  country: string;
  hijriDate: string;
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

  const fetchTimings = async () => {
    setLoading(true);
    setError(null);

    try {

      // const response = await fetch(`https://prayer-time-seven.vercel.app/api/namaz-timings?school=${school}`);
      const response = await fetch(`http://localhost:3000/api/namaz-timings?school=${school}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setLocation({
        city: data.location.city,
        country: data.location.country,
        hijriDate: data.hijriDate,
      });
      setTimings(data.timings);
    } catch (error: any) {
      console.error("Failed to fetch namaz timings:", error.message);
      setError("Something went wrong while fetching namaz timings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTimings();
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

  // Get current date in the same format as the timings array (assuming 'YYYY-MM-DD')
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Monthly Namaz Timings</CardTitle>
        {location && (
          <div className="text-center mt-2">
            <h2 className="font-bold text-2xl">{`${location.city}, ${location.country}`}</h2>
            <p className="py-2 font-medium ">{`Hijri Date: ${location.hijriDate}`}</p>
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
        <div className="hidden md:grid md:grid-cols-7 gap-4 p-4 font-semibold text-center">
          <div>Date</div>
          <div>Fajr</div>
          <div>Sunrise</div>
          <div>Dhuhr</div>
          <div>Asr</div>
          <div>Maghrib</div>
          <div>Isha</div>
        </div>
        <div className="hidden md:block">
          {loading
            ? Array.from({ length: 5 }).map((_, index) => <div key={index}>{renderSkeletonRow()}</div>)
            : timings.map((day) => (
                <div
                  key={day.date}
                  className={`grid grid-cols-7 gap-4 p-4 rounded-lg ${day.date === currentDate ? "bg-blue-500 text-zinc-100" : "even:bg-muted"}`}
                >
                  <div className="text-center">{day.date}</div>
                  <div className="text-center">{day.timings.Fajr}</div>
                  <div className="text-center">{day.timings.Sunrise}</div>
                  <div className="text-center">{day.timings.Dhuhr}</div>
                  <div className="text-center">{day.timings.Asr}</div>
                  <div className="text-center">{day.timings.Maghrib}</div>
                  <div className="text-center">{day.timings.Isha}</div>
                </div>
              ))}
        </div>
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <AccordionItem key={index} value={`skeleton-${index}`}>
                    <AccordionTrigger>
                      <Skeleton className="h-4 w-32" />
                    </AccordionTrigger>
                    <AccordionContent>
                      {Array.from({ length: 7 }).map((_, index) => (
                        <div key={index} className="grid grid-cols-2 gap-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))
              : timings.map((day, index) => (
                  <AccordionItem key={day.date} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{day.date}</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-semibold">Fajr:</div>
                        <div>{day.timings.Fajr}</div>
                        <div className="font-semibold">Sunrise:</div>
                        <div>{day.timings.Sunrise}</div>
                        <div className="font-semibold">Dhuhr:</div>
                        <div>{day.timings.Dhuhr}</div>
                        <div className="font-semibold">Asr:</div>
                        <div>{day.timings.Asr}</div>
                        <div className="font-semibold">Maghrib:</div>
                        <div>{day.timings.Maghrib}</div>
                        <div className="font-semibold">Isha:</div>
                        <div>{day.timings.Isha}</div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyNamazTimings;