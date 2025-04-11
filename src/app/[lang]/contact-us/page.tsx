import React from 'react'
import ContactPage from './ContactPage'


export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Contactez-nous – Global Salah`;
      description = `Vous avez des questions ou besoin d’aide ? Contactez Global Salah pour toute demande concernant les horaires de prière, les calendriers islamiques et plus encore. Nous sommes là pour vous aider !`;
      break;
    case 'ar':
      title = `اتصل بنا – جلوبال صلاح`;
      description = `هل لديك أسئلة أو تحتاج إلى مساعدة؟ تواصل مع جلوبال صلاح للاستفسارات حول أوقات الصلاة والتقويمات الإسلامية والمزيد. نحن هنا لمساعدتك!`;
      break;
    default:
      title = `Contact Us – Global Salah`;
      description = `Have questions or need assistance? Get in touch with Global Salah for inquiries about prayer times, Islamic calendars, and more. We’re here to help!`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/contact-us`,
      languages: {
        en: 'https://www.globalsalah.com/en/contact-us',
        fr: 'https://www.globalsalah.com/fr/contact-us',
        ar: 'https://www.globalsalah.com/ar/contact-us',
        'x-default': 'https://www.globalsalah.com/en/contact-us',
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
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}



function Page({ params }: { params: { lang: string } }) {
  const { lang } = params;
  
  return (
    <div>
      <ContactPage lang={lang} />
    </div>
  );
}

export default Page;