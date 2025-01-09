"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

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

  const [timings, setTimings] = useState<NamazTiming[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimings = async () => {
      setLoading(true);
      setError(null);

      try {
        // Get user's location dynamically
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            // Fetch namaz timings from the API
            const response = await fetch(
              `/api/namaz-timings?latitude=${latitude}&longitude=${longitude}&school=shafi`
            );

            if (!response.ok) {
              throw new Error("Failed to fetch namaz timings");
            }

            const data = await response.json();
            setTimings(data.timings);
            setLoading(false);
          },
          (error) => {
            console.error("Error fetching location:", error);
            setError("Failed to get your location. Please enable location access.");
            setLoading(false);
          }
        );
      } catch (error) {
        console.error("Failed to fetch namaz timings:", error);
        setError("Something went wrong while fetching namaz timings.");
        setLoading(false);
      }
    };

    fetchTimings();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-center">Monthly Namaz Timings</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 p-4">
        <div className="font-semibold text-center">Date</div>
        <div className="font-semibold text-center hidden lg:block">Fajr</div>
        <div className="font-semibold text-center hidden md:block">Sunrise</div>
        <div className="font-semibold text-center hidden sm:block">Dhuhr</div>
        <div className="font-semibold text-center hidden lg:block">Asr</div>
        <div className="font-semibold text-center hidden lg:block">Maghrib</div>
        <div className="font-semibold text-center hidden lg:block">Isha</div>
        
        {timings.map((day) => (
          <>
            <div key={day.date} className="text-center bg-muted p-2 rounded">{day.date}</div>
            <div className="text-center p-2 hidden lg:block">{day.timings.Fajr}</div>
            <div className="text-center p-2 hidden md:block">{day.timings.Sunrise}</div>
            <div className="text-center p-2 hidden sm:block">{day.timings.Dhuhr}</div>
            <div className="text-center p-2 hidden lg:block">{day.timings.Asr}</div>
            <div className="text-center p-2 hidden lg:block">{day.timings.Maghrib}</div>
            <div className="text-center p-2 hidden lg:block">{day.timings.Isha}</div>
          </>
        ))}
      </div>
    </CardContent>
  </Card>
  );
};

export default MonthlyNamazTimings;