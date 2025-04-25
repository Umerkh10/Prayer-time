import { MetadataRoute } from 'next';
import { countriesData } from '@/lib/CountriesAndcities'; // Make sure this path is correct

const BASE_URL = 'https://globalsalah.com';
const languages = ['en', 'fr', 'ar'];

const staticPages = [
  'about-us',
  'forum',
  'blogs',
  'contact-us',
  'duas',
  'qaza-namaz-calculator',
  'zakat-calculator',
  'inheritance-calculator',
  'qibla-finder',
  'islamic-calender',
  'ramadan-calender',
  'makkah-tv',
  'madina-tv',
  'sahih-bukhari',
  'sahih-muslim',
  'jamia-tirmazi',
  'sunan-abu-dawood',
  'sunan-nisai',
  '99-names-of-allah',
  'terms-and-conditions',
  'privacy-policy',
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s_]+/g, '-') // Replace spaces/underscores with hyphen
    .replace(/[^\w-]+/g, ''); // Remove all non-word chars except hyphen
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    urls.push({
      url: `${BASE_URL}/${lang}`,
      lastModified: new Date(),
    });

    staticPages.forEach((page) => {
      urls.push({
        url: `${BASE_URL}/${lang}/${page}`,
        lastModified: new Date(),
      });
    });

    Object.entries(countriesData).forEach(([country, data]) => {
      const countrySlug = slugify(country);

      urls.push({
        url: `${BASE_URL}/${lang}/countries/${countrySlug}`,
        lastModified: new Date(),
      });

      data.cities.forEach((city) => {
        const citySlug = slugify(city.name);
        urls.push({
          url: `${BASE_URL}/${lang}/countries/${countrySlug}/${citySlug}`,
          lastModified: new Date(),
        });
      });
    });
  }

  return urls;
}
