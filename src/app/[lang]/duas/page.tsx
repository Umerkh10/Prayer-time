import React from 'react'
import DuasPage from './DuasPage'

export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Duas for Every Occasion – Global Salah`,
    description: `Discover a collection of powerful Islamic duas for every occasion with Global Salah. Strengthen your faith with daily supplications and prayers.`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/duas`,
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
    <div><DuasPage/></div>
  )
}

export default page