import React from 'react';
import DateTimingDisplay from '../(Home)/DateTimingDisplay';
import StoryImageSec from '../(Home)/StoryImageSec';
import CountrySection from '../(Home)/CountrySection';
import HijirDivider from '../(Home)/HijirDivider';
import Banner from '../(Home)/Banner';
import { Metadata } from 'next';



export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Follow Global Salah to accomplish your religious intentions timely `,
    description: `Welcome at Global Salah, investigate our services and expertise that is design to deliver you an update to perform religious practices on time across the world.`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}`,
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


export default function Home() {



  return (
    <>
    <Banner/>
    <DateTimingDisplay/>
    <StoryImageSec/>
    <CountrySection/>
    <HijirDivider/>
    </>   
  );
}