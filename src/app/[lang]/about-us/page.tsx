import { Metadata } from 'next';
import AboutUs from './AboutUs'



export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Ultimate trusted prayer time portal by Muslims across the world`,
    description: `Global Salah exist to guide Muslims globally to perform their religious practices on time. we offer accurate updates and send you reminders at exact prayer time`,
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