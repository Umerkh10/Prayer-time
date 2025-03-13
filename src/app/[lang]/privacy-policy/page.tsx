import React from 'react'
import PrivacyContent from './PrivacyContent'


export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Privacy Policy – Global Salah`,
    description: `Read Global Salah’s Privacy Policy to understand how we collect, use, and protect your data. Your privacy and security are our top priorities.`,
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