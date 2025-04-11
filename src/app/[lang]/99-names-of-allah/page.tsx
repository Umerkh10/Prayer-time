import React from 'react'
import NamesOfAllah from './NamesAllah'


export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `99 Noms d’Allah – Noms magnifiques et significations`;
      description = `Découvrez les 99 Noms d’Allah (Asma’ul Husna) et leurs significations. Explorez les attributs divins d’Allah qui reflètent Sa miséricorde, Sa sagesse et Sa puissance.`;
      break;
    case 'ar':
      title = `أسماء الله الحسنى – 99 اسمًا ومعانيها`;
      description = `اكتشف أسماء الله الحسنى ومعانيها. استكشف الصفات الإلهية التي تعكس رحمة الله وحكمته وقدرته.`;
      break;
    default:
      title = `99 Names of Allah – Beautiful Names and Meanings`;
      description = `Discover the 99 Names of Allah (Asma'ul Husna) and their meanings. Explore the divine attributes of Allah that reflect His mercy, wisdom, and power.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/99-names-of-allah`,
      languages: {
        en: 'https://www.globalsalah.com/en/99-names-of-allah',
        fr: 'https://www.globalsalah.com/fr/99-names-of-allah',
        ar: 'https://www.globalsalah.com/ar/99-names-of-allah',
        'x-default': 'https://www.globalsalah.com/en/99-names-of-allah',
      },
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}


function page() {
  return (
    <div>
        <NamesOfAllah/>
    </div>
  )
}

export default page