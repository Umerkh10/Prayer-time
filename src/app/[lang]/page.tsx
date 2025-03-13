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
    title: `Global Salah – Prayer Times, Duas & Islamic Calendar`,
    description: `Get accurate daily and monthly prayer times with Global Salah. Access Islamic calendars, essential duas, and more to enhance your spiritual journey.`,
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