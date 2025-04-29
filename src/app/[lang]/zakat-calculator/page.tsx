import React from 'react'
import ZakatPage from './ZakatPage'


export async function generateMetadata({ params }: any) {
  const lang = params.lang;
  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Calculateur de Zakat – Global Salah`;
      description = `Calculez votre Zakat rapidement et facilement selon la loi islamique. Entrez vos actifs et obtenez le montant exact à donner.`;
      break;
    case 'ar':
      title = `حاسبة الزكاة – جلوبال صلاح`;
      description = `احسب زكاتك بسهولة وفق الشريعة الإسلامية. أدخل أصولك واحصل على المبلغ الواجب دفعه بدقة.`;
      break;
    default:
      title = `Zakat Calculator – Global Salah`;
      description = `Easily calculate your Zakat based on Islamic rules. Enter your assets and instantly get the accurate amount to give.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/zakat-calculator`,
      languages: {
        en: `https://www.globalsalah.com/en/zakat-calculator`,
        fr: `https://www.globalsalah.com/fr/zakat-calculator`,
        ar: `https://www.globalsalah.com/ar/zakat-calculator`,
        'x-default': `https://www.globalsalah.com/en/zakat-calculator`,
      },
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
      <ZakatPage/>
    </div>
  )
}

export default page