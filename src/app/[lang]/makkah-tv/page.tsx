import React from 'react'
import MakkahPage from './MakkahPage'


export async function generateMetadata({ params }: any) {
    const lang = params.lang
    return {
      title: `Watch Makkah TV Live – Global Salah`,
      description: `Stream Makkah TV live for continuous coverage of Masjid al-Haram. Watch prayers, sermons, and the spiritual atmosphere of the Holy Kaaba anytime.`,
  alternates: {
    canonical: `https://www.globalsalah.com/${lang}/makkah-tv`,
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
        <MakkahPage/>
    </div>
  )
}

export default page