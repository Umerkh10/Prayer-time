import React from 'react'
import TermsContent from './TermsContent'

export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Visiteurs, veuillez lire attentivement les conditions générales avant d'utiliser nos services`;
      description = `En utilisant nos services de prière mondiale, vous acceptez nos conditions générales. Veuillez lire notre politique de confidentialité pour préserver un environnement respectueux.`;
      break;
    case 'ar':
      title = `يرجى من الزوار قراءة الشروط والأحكام بعناية قبل استخدام الخدمات`;
      description = `باستخدامك لخدمات مواعيد الصلاة العالمية، فإنك توافق على الشروط والأحكام الخاصة بنا. نرجو قراءة سياسة الخصوصية للحفاظ على بيئة محترمة.`;
      break;
    default:
      title = `Visitors read carefully terms and conditions before using services`;
      description = `By using our global prayer time services, you have to agree on our terms and conditions. Kindly read our privacy and policy to maintain respected environment.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/terms-and-conditions`,
      en: `https://www.globalsalah.com/en/terms-and-conditions`,
      fr: `https://www.globalsalah.com/fr/terms-and-conditions`,
      ar: `https://www.globalsalah.com/ar/terms-and-conditions`,
      'x-default': `https://www.globalsalah.com/en/terms-and-conditions`,
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
      <TermsContent/>
    </div>
  )
}

export default page