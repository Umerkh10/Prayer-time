import React from 'react'
import JamiaTirmaziPage from './jamia-tirmazi-page'

export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Jami' Tirmizi – Recueil Authentique de Hadiths | Global Salah`;
      description = `Accédez aux hadiths authentiques de Jami' Tirmizi sur Global Salah. Un recueil essentiel de hadiths qui vous aide à mieux comprendre les enseignements prophétiques.`;
      break;
    case 'ar':
      title = `جامع الترمذي – مجموعة الأحاديث الصحيحة | جلوبال صلاح`;
      description = `استعرض الأحاديث النبوية الصحيحة من جامع الترمذي على جلوبال صلاح. مصدر موثوق لفهم تعاليم النبي ﷺ من خلال كتاب حديثي مهم في الإسلام.`;
      break;
    default:
      title = `Jami' Tirmizi – Authentic Hadith Collection | Global Salah`;
      description = `Access authentic hadiths from Jami' Tirmizi on Global Salah. A crucial hadith collection to help you understand the Prophet’s teachings.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/jamia-tirmizi`,
      en: `https://www.globalsalah.com/en/jamia-tirmizi`,
      fr: `https://www.globalsalah.com/fr/jamia-tirmizi`,
      ar: `https://www.globalsalah.com/ar/jamia-tirmizi`,
      'x-default': `https://www.globalsalah.com/en/jamia-tirmizi`,
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
      <JamiaTirmaziPage/>
    </div>
  )
}

export default page