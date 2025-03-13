import React from 'react'
import ContactPage from './ContactPage'


export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Contact Us – Global Salah`,
    description: `Have questions or need assistance? Get in touch with Global Salah for inquiries about prayer times, Islamic calendars, and more. We’re here to help!`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/contact-us`,
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
      <ContactPage/>
    </div>
  )
}

export default page