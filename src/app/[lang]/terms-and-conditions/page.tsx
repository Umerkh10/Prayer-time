import React from 'react'
import TermsContent from './TermsContent'

export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Terms & Conditions – Global Salah`,
    description: `Read the Terms & Conditions of Global Salah. Learn about our guidelines, usage policies, and legal information to ensure a smooth experience on our platform.`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/terms-and-conditions`,
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
      <TermsContent/>
    </div>
  )
}

export default page