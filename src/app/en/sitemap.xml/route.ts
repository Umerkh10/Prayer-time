export async function GET(): Promise<Response> {
  const baseUrl = 'https://globalsalah.com/en';
  const pages = ['', 'about-us', 'forum', 'blogs', 'contact-us', 'duas',
    'qaza-namaz-calculator', 'zakat-calculator', 'inheritance-calculator',
    'qibla-finder', 'islamic-calender', 'ramadan-calender',
    'makkah-tv', 'madina-tv', 'sahih-bukhari', 'sahih-muslim',
    'jamia-tirmazi', 'sunan-abu-dawood', 'sunan-nisai',
    '99-names-of-allah', 'terms-and-conditions', 'privacy-policy',]; // Shortened for example

  const urls = pages
    .map(
      (page) => `<url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
