import { Metadata } from 'next';
import AboutUs from './AboutUs'



export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `About Us – Global Salah`,
    description: `Learn about Global Salah’s mission to provide accurate prayer times, monthly schedules, Islamic calendars, and essential duas. Dedicated to helping Muslims stay connected to their faith.`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/about-us`,
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
  <AboutUs/>
  )
}

export default page