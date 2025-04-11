import { Metadata } from "next";
import IslamicCalendar from "./IslamicCalender"



export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Calendrier Islamique – Global Salah`;
      description = `Restez organisé avec le calendrier islamique de Global Salah. Trouvez les dates importantes de l’Islam, les horaires mensuels de prière et les événements clés pour suivre votre parcours spirituel.`;
      break;
    case 'ar':
      title = `التقويم الإسلامي – جلوبال صلاح`;
      description = `ابق منظمًا مع التقويم الإسلامي من جلوبال صلاح. اكتشف التواريخ الإسلامية المهمة، وجدول الصلاة الشهري، والأحداث الرئيسية لمتابعة رحلتك الروحية.`;
      break;
    default:
      title = `Islamic Calendar – Global Salah`;
      description = `Stay organized with the Global Salah Islamic Calendar. Find important Islamic dates, monthly prayer schedules, and key events to keep track of your spiritual journey.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/islamic-calender`,
      en: `https://www.globalsalah.com/en/islamic-calender`,
      fr: `https://www.globalsalah.com/fr/islamic-calender`,
      ar: `https://www.globalsalah.com/ar/islamic-calender`,
      'x-default': `https://www.globalsalah.com/en/islamic-calender`,
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
