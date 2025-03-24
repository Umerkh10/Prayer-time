import React from 'react'
import TermsContent from './TermsContent'

export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Visitors read carefully terms and conditions before using services `,
    description: `By using our global prayer time services, you have to agree on our terms and conditions. kindly read our privacy and policy to maintain respected environment`,
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