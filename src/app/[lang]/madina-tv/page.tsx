import React from 'react'
import MadinaPage from './MadinaPage'


export async function generateMetadata({ params }: any) {
    const lang = params.lang
    return {
      title: `Watch Madina TV Live – Global Salah`,
      description: ` Stream Madina TV live for 24/7 coverage of Masjid an-Nabawi. Experience the serenity of the Prophet’s Mosque with live prayers and sermons.`,
  alternates: {
    canonical: `https://www.globalsalah.com/${lang}/madina-tv`,
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
        <MadinaPage/>
    </div>
  )
}

export default page