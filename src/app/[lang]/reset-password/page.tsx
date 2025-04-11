import React from 'react'
import ResetPassword from './ResetPassword'

export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Réinitialiser le mot de passe – Global Salah`;
      description = `Réinitialisez votre mot de passe Global Salah en toute sécurité. Suivez les étapes pour définir un nouveau mot de passe et sécuriser votre compte.`;
      break;
    case 'ar':
      title = `إعادة تعيين كلمة المرور – جلوبال صلاح`;
      description = `أعد تعيين كلمة مرور حسابك على جلوبال صلاح بأمان. اتبع الخطوات لإعداد كلمة مرور جديدة وتأمين حسابك.`;
      break;
    default:
      title = `Reset Password – Global Salah`;
      description = `Securely reset your Global Salah account password. Follow the steps to set a new password and protect your account.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/reset-password`,
      fr: `https://www.globalsalah.com/fr/reset-password`,
      ar: `https://www.globalsalah.com/ar/reset-password`,
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
        <ResetPassword/>
    </div>
  )
}

export default page