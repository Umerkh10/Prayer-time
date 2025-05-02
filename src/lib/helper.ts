// /lib/helpers.ts
import { citiesData } from "../app/data/cities";

export function getCityData(countryParam?: string, cityParam?: string) {
  if (!countryParam || !cityParam) {
    console.warn("Missing country or city param");
    return null;
  }

  const country = citiesData.find(
    (c: { country: string; }) => c.country.toLowerCase().replace(/\s+/g, "-") === countryParam.toLowerCase()
  );

  if (!country) {
    console.warn(`Country not found: ${countryParam}`);
    return null;
  }

  const city = country.cities.find(
    (c: { name: string; }) => c.name.toLowerCase().replace(/\s+/g, "-") === cityParam.toLowerCase()
  );

  if (!city) {
    console.warn(`City not found: ${cityParam}`);
    return null;
  }

  return {
    country,
    city,
  };
}
