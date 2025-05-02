// app/api/city-data/route.ts
import { NextRequest, NextResponse } from 'next/server';
import citiesAndTimezones from '@/lib/citiesAndTimezones';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const countryParam = searchParams.get('country');
  const cityParam = searchParams.get('city');

  if (!countryParam || !cityParam) {
    return NextResponse.json({ error: 'Country and city required' }, { status: 400 });
  }

  const countryKey = countryParam.toLowerCase();
  const cityKey = cityParam.toLowerCase();

  const countryData = (citiesAndTimezones as Record<string, typeof citiesAndTimezones[keyof typeof citiesAndTimezones]>)[countryKey];

  if (!countryData) {
    return NextResponse.json({ error: 'Country not found' }, { status: 404 });
  }

  const cityData = countryData.cities.find(
    (c) => c.name.toLowerCase() === cityKey
  );

  if (!cityData) {
    return NextResponse.json({ error: 'City not found in this country' }, { status: 404 });
  }

  return NextResponse.json({
    city: cityData.name,
    cityLat: cityData.latitude,
    cityLng: cityData.longitude,
    timezone: cityData.timezone,
    country: countryData.country,
    countryCode: countryData.countryCode,
    countryLat: countryData.latitude,
    countryLng: countryData.longitude,
    otherCities: countryData.cities
      .filter((c) => c.name.toLowerCase() !== cityKey)
      .map((c) => c.name),
  });
}
