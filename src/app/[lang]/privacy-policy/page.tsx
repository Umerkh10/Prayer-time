import React from 'react'
import PrivacyContent from './PrivacyContent'


export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Global Salah vous informe tout en préservant la confidentialité`;
      description = `Global Salah collecte les informations personnelles de ses utilisateurs tout en respectant une politique de confidentialité stricte. Nous ne partageons vos données avec personne sans votre autorisation.`;
      break;
    case 'ar':
      title = `جلوبال صلاح توفر لك التحديثات مع الحفاظ على السرية`;
      description = `جلوبال صلاح تجمع المعلومات الشخصية لمستخدميها مع الحفاظ على سياسة خصوصية صارمة. لا نشارك بياناتك مع أي طرف دون إذنك.`;
      break;
    default:
      title = `Global Salah provide you update while maintaining confidentiality`;
      description = `Global Salah collect personal information of their users with maintaining strict privacy and policy. we do not share your data with anyone without your permission.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/privacy-policy`,
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
      <PrivacyContent />
    </div>
  )
}

export default page