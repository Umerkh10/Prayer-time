import React from 'react'
import RamadanCalender from './RamadanCalender'


export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Ramadan Calendar 2025 – Sehri & Iftar Timings`,
    description: `Stay updated with the Ramadan 2025 calendar, featuring daily Sehri and Iftar timings. Plan your fasting schedule with accurate prayer times for a blessed month.`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/ramadan-calender`,
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
        <RamadanCalender/>
    </div>
  )
}

export default page