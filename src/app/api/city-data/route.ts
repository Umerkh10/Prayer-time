// app/api/city-data/route.ts
import { countriesData } from '@/lib/cityDataWithTimezone';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');
  const city = searchParams.get('city');

  if (!country || !city) {
    return NextResponse.json(
      { error: 'Country and city parameters are required' },
      { status: 400 }
    );
  }

  const normalizedCountry = country.toLowerCase().replace(/-/g, ' ');
  const countryData = countriesData.find(c => 
    c.name.toLowerCase() === normalizedCountry ||
    c.code.toLowerCase() === normalizedCountry
  );

  if (!countryData) {
    return NextResponse.json(
      { error: 'Country not found' },
      { status: 404 }
    );
  }

  const normalizedCity = city.toLowerCase().replace(/-/g, ' ');
  const cityData = countryData.cities.find(c => 
    c.name.toLowerCase() === normalizedCity
  );

  if (!cityData) {
    return NextResponse.json(
      { error: 'City not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    country: countryData.name,
    countryCode: countryData.code,
    city: cityData,
    timezones: {
      zone: cityData.timezone
    },
    cities: countryData.cities
  });
}