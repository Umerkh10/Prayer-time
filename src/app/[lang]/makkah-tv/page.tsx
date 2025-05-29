import React from 'react'
import MakkahPage from './MakkahPage'


export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Regardez Makkah TV en direct – Global Salah`;
      description = `Regardez Makkah TV en direct pour une couverture continue de la Mosquée al-Haram. Suivez les prières, les sermons et l’atmosphère spirituelle de la Kaaba à tout moment.`;
      break;
    case 'ar':
      title = `شاهد قناة مكة مباشر – جلوبال صلاح`;
      description = `شاهد قناة مكة مباشر لتغطية مستمرة من المسجد الحرام. تابع الصلوات والخطب والأجواء الروحانية حول الكعبة المشرفة في أي وقت.`;
      break;
    default:
      title = `Watch Makkah TV Live – Global Salah`;
      description = `Stream Makkah TV live for continuous coverage of Masjid al-Haram. Watch prayers, sermons, and the spiritual atmosphere of the Holy Kaaba anytime.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/makkah-tv`,
      en: `https://www.globalsalah.com/en/makkah-tv`,
      fr: `https://www.globalsalah.com/fr/makkah-tv`,
      ar: `https://www.globalsalah.com/ar/makkah-tv`,
      'x-default': `https://www.globalsalah.com/en/makkah-tv`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
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
        <MakkahPage/>
    </div>
  )
}

export default page