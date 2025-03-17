import React from 'react'
import ThankYouContact from './ThankYouContact'




export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Thank You for Contacting Us – Global Salah`,
    description: `Thank you for reaching out to Global Salah! We’ve received your message and will get back to you soon. Stay connected for accurate prayer times and Islamic resources.`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/thank-you-for-contact`,
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