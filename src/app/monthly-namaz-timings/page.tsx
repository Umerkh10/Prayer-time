"use client";

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

  useEffect(() => {
    const fetchTimings = async () => {
      try {
        const response = await fetch(
          `/api/namaz-timings?latitude=24.8607&longitude=67.0011&school=hanafi`
        );
        const data = await response.json();
        setTimings(data.timings);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch namaz timings:", error);
        setLoading(false);
      }
    };

    fetchTimings();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 mx-auto max-w-screen-xl my-5">
      <h1 className="text-xl font-bold mb-4">Monthly Namaz Timings</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Fajr</th>
            <th className="border border-gray-300 p-2">Sunrise</th>
            <th className="border border-gray-300 p-2">Dhuhr</th>
            <th className="border border-gray-300 p-2">Asr</th>
            <th className="border border-gray-300 p-2">Maghrib</th>
            <th className="border border-gray-300 p-2">Isha</th>
          </tr>
        </thead>
        <tbody>
          {timings.map((day) => (
            <tr className="text-center" key={day.date}>
              <td className="border border-gray-300 p-2">{day.date}</td>
              <td className="border border-gray-300 p-2">{day.timings.Fajr}</td>
              <td className="border border-gray-300 p-2">{day.timings.Sunrise}</td>
              <td className="border border-gray-300 p-2">{day.timings.Dhuhr}</td>
              <td className="border border-gray-300 p-2">{day.timings.Asr}</td>
              <td className="border border-gray-300 p-2">{day.timings.Maghrib}</td>
              <td className="border border-gray-300 p-2">{day.timings.Isha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyNamazTimings;