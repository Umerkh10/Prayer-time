import React from 'react'
import ThankYouContact from './ThankYouContact'




export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Merci de nous avoir contacté – Global Salah`;
      description = `Merci d'avoir contacté Global Salah ! Nous avons bien reçu votre message et nous reviendrons vers vous bientôt. Restez connecté pour obtenir des horaires de prière précis et des ressources islamiques.`;
      break;
    case 'ar':
      title = `شكرًا لتواصلك معنا – جلوبال صلاح`;
      description = `شكرًا لتواصلك مع جلوبال صلاح! لقد تلقينا رسالتك وسنعود إليك قريبًا. ابقَ على اتصال للحصول على أوقات صلاة دقيقة وموارد إسلامية.`;
      break;
    default:
      title = `Thank You for Contacting Us – Global Salah`;
      description = `Thank you for reaching out to Global Salah! We’ve received your message and will get back to you soon. Stay connected for accurate prayer times and Islamic resources.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/thank-you-for-contact`,
      en: `https://www.globalsalah.com/en/thank-you-for-contact`,
      fr: `https://www.globalsalah.com/fr/thank-you-for-contact`,
      ar: `https://www.globalsalah.com/ar/thank-you-for-contact`,
      'x-default': `https://www.globalsalah.com/en/thank-you-for-contact`,
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
        <ThankYouContact/>
    </div>
  )
}

export default page