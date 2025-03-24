import React from 'react'
import PrivacyContent from './PrivacyContent'


export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Global Salah provide you update while maintaining confidentiality `,
    description: `Global Salah collect personal information of their users with maintaining strict privacy and policy. we do not share your data with anyone without your permission.`,
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