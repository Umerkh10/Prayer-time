import { NextResponse } from "next/server";
import { PrayerTimes, CalculationMethod, Coordinates, Madhab } from "adhan";

// API endpoint
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const school = searchParams.get("school") || "hanafi"; // Default to Hanafi

  // Use external service to fetch location by IP
  try {
    const locationResponse = await fetch(
      `https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN&fields=lat,lon,timezone`
    );
    const locationData = await locationResponse.json();

    if (!locationData.lat || !locationData.lon) {
      return NextResponse.json(
        { error: "Unable to fetch location data" },
        { status: 400 }
      );
    }

    const { lat: latitude, lon: longitude, timezone } = locationData;

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-indexed

    const numDays = new Date(year, month + 1, 0).getDate(); // Current month's total days

    const timingsForMonth = [];

    // Adhan Configuration
    const coordinates = new Coordinates(latitude, longitude);
    const params = CalculationMethod.Karachi();
    params.madhab = school === "hanafi" ? Madhab.Hanafi : Madhab.Shafi;

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

    return NextResponse.json({
      location: { latitude, longitude, timezone },
      timings: timingsForMonth,
    });
  } catch (error) {
    console.error("Error fetching location or prayer timings:", error);
    return NextResponse.json(
      { error: "Something went wrong while fetching data" },
      { status: 500 }
    );
  }
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