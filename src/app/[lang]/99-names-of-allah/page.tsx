import React from 'react'
import NamesOfAllah from './NamesAllah'


export async function generateMetadata({ params }: any) {
    const lang = params.lang
    return {
      title: `99 Names of Allah – Beautiful Names and Meanings`,
      description: `Discover the 99 Names of Allah (Asma'ul Husna) and their meanings. Explore the divine attributes of Allah that reflect His mercy, wisdom, and power.`,
  alternates: {
    canonical: `https://www.globalsalah.com/${lang}/99-names-of-allah`,
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
        <NamesOfAllah/>
    </div>
  )
}

export default page