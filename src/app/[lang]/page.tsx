import React from 'react';
import DateTimingDisplay from '../(Home)/DateTimingDisplay';
import StoryImageSec from '../(Home)/StoryImageSec';
import CountrySection from '../(Home)/CountrySection';
import HijirDivider from '../(Home)/HijirDivider';
import Banner from '../(Home)/Banner';
import DuaSection from '../(Home)/dua-section';
import IslamicCalculators from '../(Home)/islamic-calculators';
import HadithSection from '../(Home)/hadith-section';
import NamesOfAllahSection from '../(Home)/names-of-Allah-section';



export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Suivez Global Salah pour accomplir vos intentions religieuses à temps`;
      description = `Bienvenue chez Global Salah, découvrez nos services et notre expertise conçus pour vous tenir informé afin de pratiquer vos rituels religieux à l'heure partout dans le monde.`;
      break;
    case 'ar':
      title = `تابع جلوبال صلاح لتحقيق نواياك الدينية في الوقت المناسب`;
      description = `مرحبًا بك في جلوبال صلاح، استكشف خدماتنا وخبراتنا المصممة لمساعدتك على أداء الممارسات الدينية في الوقت المحدد حول العالم.`;
      break;
    default:
      title = `Follow Global Salah to accomplish your religious intentions timely`;
      description = `Welcome at Global Salah, investigate our services and expertise that is design to deliver you an update to perform religious practices on time across the world.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}`,
      languages: {
        en: 'https://www.globalsalah.com/en',
        fr: 'https://www.globalsalah.com/fr',
        ar: 'https://www.globalsalah.com/ar',
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
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
    <DuaSection/>
    <IslamicCalculators/>
    <HadithSection/>
    <NamesOfAllahSection/>
    <HijirDivider/>
    </>   
  );
}