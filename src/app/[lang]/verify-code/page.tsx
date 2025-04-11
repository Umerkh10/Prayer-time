import React from 'react'
import VerifyCodePage from './VerifyCodePage'


export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Vérifiez votre code – Accès sécurisé Global Salah`;
      description = `Saisissez votre code de vérification pour accéder en toute sécurité à votre compte Global Salah. Protégez vos informations et poursuivez votre parcours en toute simplicité.`;
      break;
    case 'ar':
      title = `تحقق من الرمز – وصول آمن إلى جلوبال صلاح`;
      description = `أدخل رمز التحقق للوصول الآمن إلى حسابك على جلوبال صلاح. احمِ معلوماتك وتابع رحلتك بسهولة.`;
      break;
    default:
      title = `Verify Your Code – Global Salah Secure Access`;
      description = `Enter your verification code to securely access your Global Salah account. Protect your information and continue your journey with seamless authentication.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/verify-code`,
      en: `https://www.globalsalah.com/en/verify-code`,
      fr: `https://www.globalsalah.com/fr/verify-code`,
      ar: `https://www.globalsalah.com/ar/verify-code`,
      'x-default': `https://www.globalsalah.com/en/verify-code`,
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
      <VerifyCodePage/>
    </div>
  )
}

export default page