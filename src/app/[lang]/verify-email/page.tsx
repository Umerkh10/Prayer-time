import React from 'react'
import VerifyEmailPage from './VerifyEmailPage'


export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Verify Your Email – Global Salah`,
    description: `Confirm your email to complete your registration on Global Salah. Stay connected with the community and access all features seamlessly. Verify now!`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/verify-email`,
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
      <VerifyEmailPage/>
    </div>
  )
}

export default page