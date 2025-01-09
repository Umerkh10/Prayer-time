import { NextResponse } from "next/server";
import { PrayerTimes, CalculationMethod, Coordinates, Madhab } from "adhan";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const latitude = parseFloat(searchParams.get("latitude") || "0");
  const longitude = parseFloat(searchParams.get("longitude") || "0");
  const school = searchParams.get("school") || "shafi"; // Default to Hanafi

  if (!latitude || !longitude) {
    return NextResponse.json(
      { error: "Latitude and longitude are required" },
      { status: 400 }
    );
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed

  const numDays = new Date(year, month + 1, 0).getDate(); // Current month's total days

  const timingsForMonth = [];

  // Adhan Configuration
  const coordinates = new Coordinates(latitude, longitude);
  const params = CalculationMethod.Karachi(); // You can change this method
  params.madhab = school === "shafi" ? Madhab.Hanafi : Madhab.Shafi;

  for (let day = 1; day <= numDays; day++) {
    const date = new Date(year, month, day);

    // Get daily prayer timings
    const prayerTimes = new PrayerTimes(coordinates, date, params);

    timingsForMonth.push({
      date: date.toISOString().split("T")[0], // Format: YYYY-MM-DD
      timings: {
        Fajr: formatTime(prayerTimes.fajr),
        Sunrise: formatTime(prayerTimes.sunrise),
        Dhuhr: formatTime(prayerTimes.dhuhr),
        Asr: formatTime(prayerTimes.asr),
        Maghrib: formatTime(prayerTimes.maghrib),
        Isha: formatTime(prayerTimes.isha),
      },
    });
  }

  return NextResponse.json({ timings: timingsForMonth });
}

/**
 * Formats a Date object to HH:mm format.
 * @param date - Date object
 * @returns Time in HH:mm format
 */
function formatTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}