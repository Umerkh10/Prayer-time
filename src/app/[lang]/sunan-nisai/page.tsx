import React from 'react'
import SunanNisaiPage from './nisai-page'

export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Sunan Nisai – Recueil Authentique de Hadiths | Global Salah`;
      description = `Accédez aux hadiths authentiques de Sunan Nisai sur Global Salah. Un recueil précieux des enseignements prophétiques à travers des hadiths validés.`;
      break;
    case 'ar':
      title = `سنن النسائي – مجموعة الأحاديث الصحيحة | جلوبال صلاح`;
      description = `استعرض الأحاديث النبوية الصحيحة من سنن النسائي على جلوبال صلاح. مصدر موثوق لفهم تعاليم النبي ﷺ من خلال هذا الكتاب الحديثي الهام.`;
      break;
    default:
      title = `Sunan Nisai – Authentic Hadith Collection | Global Salah`;
      description = `Access authentic hadiths from Sunan Nisai on Global Salah. A valuable collection of prophetic teachings through verified hadiths.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/sunan-nisai`,
      en: `https://www.globalsalah.com/en/sunan-nisai`,
      fr: `https://www.globalsalah.com/fr/sunan-nisai`,
      ar: `https://www.globalsalah.com/ar/sunan-nisai`,
      'x-default': `https://www.globalsalah.com/en/sunan-nisai`,
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
      <SunanNisaiPage />
    </div>
  )
}

export default page