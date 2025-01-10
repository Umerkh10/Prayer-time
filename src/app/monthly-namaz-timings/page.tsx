"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
              `/api/namaz-timings?latitude=${latitude}&longitude=${longitude}&school=hanafi`
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
      <div className="hidden md:grid md:grid-cols-7 gap-4 p-4 font-semibold text-center">
        <div>Date</div>
        <div>Fajr</div>
        <div>Sunrise</div>
        <div>Dhuhr</div>
        <div>Asr</div>
        <div>Maghrib</div>
        <div>Isha</div>
      </div>
      <div className="md:hidden">
        <Accordion type="single" collapsible className="w-full">
          {timings.map((day, index) => (
            <AccordionItem key={day.date} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {day.date}
              </AccordionTrigger>
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
      <div className="hidden md:block">
        {timings.map((day) => (
          <div key={day.date} className="grid grid-cols-7 gap-4 p-4 even:bg-muted">
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
    </CardContent>
  </Card>
  );
};

export default MonthlyNamazTimings;