import React from 'react'
import QazaNamazHome from './QazaNamazHome'


export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Calculateur de Qaza Namaz – Suivez Vos Prières Manquées | Global Salah`;
      description = `Utilisez notre calculateur de Qaza Namaz pour suivre et rattraper facilement vos prières manquées. Planifiez vos rattrapages de manière simple et efficace.`;
      break;
    case 'ar':
      title = `حاسبة قضاء الصلوات – تتبع صلواتك الفائتة | جلوبال صلاح`;
      description = `استخدم حاسبة قضاء الصلوات لتتبع صلواتك الفائتة بسهولة. خطط لقضائها بطريقة منظمة ومريحة عبر جلوبال صلاح.`;
      break;
    default:
      title = `Qaza Namaz Calculator – Track Missed Prayers | Global Salah`;
      description = `Use our Qaza Namaz Calculator to easily track and make up missed prayers. Plan your qaza namaz efficiently with Global Salah.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/qaza-namaz-calculator`,
      en: `https://www.globalsalah.com/en/qaza-namaz-calculator`,
      fr: `https://www.globalsalah.com/fr/qaza-namaz-calculator`,
      ar: `https://www.globalsalah.com/ar/qaza-namaz-calculator`,
      'x-default': `https://www.globalsalah.com/en/qaza-namaz-calculator`,
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
      <QazaNamazHome/>
    </div>
  )
}

export default page