import React from 'react'
import MadinaPage from './MadinaPage'


export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Regardez Madina TV en direct – Global Salah`;
      description = `Regardez Madina TV en direct pour une couverture 24h/24 de la Mosquée du Prophète (Masjid an-Nabawi). Vivez la sérénité de la mosquée avec des prières et des sermons en direct.`;
      break;
    case 'ar':
      title = `شاهد قناة المدينة مباشر – جلوبال صلاح`;
      description = `شاهد قناة المدينة على الهواء مباشرة لتغطية مسجد النبي ﷺ على مدار الساعة. عِش روحانية المسجد النبوي الشريف مع الصلوات والخطب المباشرة.`;
      break;
    default:
      title = `Watch Madina TV Live – Global Salah`;
      description = `Stream Madina TV live for 24/7 coverage of Masjid an-Nabawi. Experience the serenity of the Prophet’s Mosque with live prayers and sermons.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/madina-tv`,
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}


function page() {
  return (
    <div>
        <MadinaPage/>
    </div>
  )
}

export default page