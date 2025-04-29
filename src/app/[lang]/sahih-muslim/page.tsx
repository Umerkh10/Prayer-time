import React from 'react'
import SahihMuslimPage from './sahih-muslim-page'

export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Sahih Muslim – Recueil Authentique de Hadiths | Global Salah`;
      description = `Accédez aux hadiths authentiques de Sahih Muslim sur Global Salah. Un pilier essentiel de la tradition islamique pour mieux comprendre les enseignements prophétiques.`;
      break;
    case 'ar':
      title = `صحيح مسلم – مجموعة الأحاديث الصحيحة | جلوبال صلاح`;
      description = `استعرض الأحاديث النبوية الصحيحة من صحيح مسلم على جلوبال صلاح. مصدر موثوق لفهم تعاليم النبي ﷺ من خلال ثاني أصح كتب الحديث في الإسلام.`;
      break;
    default:
      title = `Sahih Muslim – Authentic Hadith Collection | Global Salah`;
      description = `Access authentic hadiths from Sahih Muslim on Global Salah. A cornerstone of Islamic tradition to better understand the Prophet’s teachings.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/sahih-muslim`,
      en: `https://www.globalsalah.com/en/sahih-muslim`,
      fr: `https://www.globalsalah.com/fr/sahih-muslim`,
      ar: `https://www.globalsalah.com/ar/sahih-muslim`,
      'x-default': `https://www.globalsalah.com/en/sahih-muslim`,
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
      <SahihMuslimPage/>
    </div>
  )
}

export default page