import React from 'react'
import VerifyCodePage from './VerifyCodePage'


export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Verify Your Code – Global Salah Secure Access`,
    description: `Enter your verification code to securely access your Global Salah account. Protect your information and continue your journey with seamless authentication.`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/verify-code`,
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