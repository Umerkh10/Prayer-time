import { countriesData } from '@/lib/CountriesAndcities';

function slugify(text: string) {
  return text.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^\w-]+/g, '');
}

export async function GET(): Promise<Response> {
  const baseUrl = 'https://globalsalah.com/fr';
  const urls: string[] = [];

  for (const [country, data] of Object.entries(countriesData)) {
    const countrySlug = slugify(country);
    urls.push(`${baseUrl}/countries/${countrySlug}`);

    data.cities.forEach((city) => {
      const citySlug = slugify(city.name);
      urls.push(`${baseUrl}/countries/${countrySlug}/${citySlug}`);
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `<url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
