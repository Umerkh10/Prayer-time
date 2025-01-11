
import { NextResponse } from "next/server";
import { PrayerTimes, CalculationMethod, Coordinates, Madhab } from "adhan";
import moment from "moment-hijri";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const school = searchParams.get("school") || "hanafi"; // Default to Hanafi

  try {
    // Fetch location data (city, country, lat, lon, timezone)
    const locationResponse = await fetch(
      `https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN&fields=lat,lon,city,country,timezone`
    );
    const locationData = await locationResponse.json();

    if (!locationData.lat || !locationData.lon) {
      return NextResponse.json(
        { error: "Unable to fetch location data" },
        { status: 400 }
      );
    }

    const { lat: latitude, lon: longitude, city, country, timezone } = locationData;

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-indexed
    const numDays = new Date(year, month + 1, 0).getDate(); // Total days in the current month

    const timingsForMonth = [];

    // Determine Calculation Method based on Country
    let params;
    if (country === "United States") {
      params = CalculationMethod.NorthAmerica();
    } else if (country === "Pakistan") {
      params = CalculationMethod.Karachi();
    } else if (country === "Germany") {
      params = CalculationMethod.NorthAmerica();
    } else if (country === "Egypt") {
      params = CalculationMethod.Egyptian();
    } else if (country === "Kuwait") {
      params = CalculationMethod.Kuwait();
    } else if (country === "Saudi Arabia") {
      params = CalculationMethod.UmmAlQura();
    } else if (country === "Singapore") {
      params = CalculationMethod.Singapore();
    } else if (country === "Iran") {
      params = CalculationMethod.Tehran();
    } else if (country === "Turkey") {
      params = CalculationMethod.Turkey();
    } else if (country === "Dubai") {
      params = CalculationMethod.Dubai();
    } else if (country === "United Kingdom") {
      params = CalculationMethod.MuslimWorldLeague();
    } else {
      params = CalculationMethod.MuslimWorldLeague(); // Default to Muslim World League
    }

    // Set the madhab (Hanafi or Shafi)
    params.madhab = school === "hanafi" ? Madhab.Hanafi : Madhab.Shafi;

    // Calculate prayer timings for the month
    const coordinates = new Coordinates(latitude, longitude);

    for (let day = 1; day <= numDays; day++) {
      const date = new Date(year, month, day);
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

    // Hijri Date using moment-hijri
    const hijriDate = moment(currentDate).locale("en").format("iD iMMMM iYYYY"); // e.g., 15 Rajab 1445

    return NextResponse.json({
      location: { city, country, latitude, longitude, timezone },
      hijriDate,
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
 * Formats a Date object to 12-hour format with AM/PM.
 */
function formatTime(date: Date): string {
  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12; // Convert 24-hour to 12-hour
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours24 >= 12 ? "PM" : "AM";
  return `${hours12}:${minutes} ${period}`;
}
