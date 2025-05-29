import React from 'react'
import DuasPage from './DuasPage'

export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Invocations pour Chaque Occasion – Global Salah`;
      description = `Découvrez une collection puissante de duas islamiques pour chaque occasion avec Global Salah. Renforcez votre foi avec des invocations et des prières quotidiennes.`;
      break;
    case 'ar':
      title = `أدعية لكل مناسبة – جلوبال صلاح`;
      description = `اكتشف مجموعة قوية من الأدعية الإسلامية لكل مناسبة مع جلوبال صلاح. قوّ إيمانك بالأدعية والصلوات اليومية.`;
      break;
    default:
      title = `Duas for Every Occasion – Global Salah`;
      description = `Discover a collection of powerful Islamic duas for every occasion with Global Salah. Strengthen your faith with daily supplications and prayers.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/duas`,
      en: `https://www.globalsalah.com/en/duas`,
      fr: `https://www.globalsalah.com/fr/duas`,
      ar: `https://www.globalsalah.com/ar/duas`,
      'x-default': `https://www.globalsalah.com/en/duas`,
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
    <div><DuasPage/></div>
  )
}

export default page