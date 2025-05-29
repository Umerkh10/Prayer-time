export async function GET(): Promise<Response> {
  const baseUrl = 'https://globalsalah.com';
  const languages = ['en', 'fr', 'ar'];

  const sitemapIndexes = languages.flatMap((lang) => [
    `${baseUrl}/${lang}/sitemap.xml`,
    `${baseUrl}/${lang}/countries-with-cities/sitemap.xml`,
  ]);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapIndexes.map((url) => `<sitemap>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
