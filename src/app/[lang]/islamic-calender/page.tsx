import { Metadata } from "next";
import IslamicCalendar from "./IslamicCalender"



export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Islamic Calendar – Global Salah`,
    description: `Stay organized with the Global Salah Islamic Calendar. Find important Islamic dates, monthly prayer schedules, and key events to keep track of your spiritual journey.`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/islamic-calender`,
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


export default function page() {


  return (

    <IslamicCalendar />
  )
}
