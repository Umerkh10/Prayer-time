import React from 'react'
import RamadanCalender from './RamadanCalender'


export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Calendrier du Ramadan 2025 – Horaires de Sehri et Iftar`;
      description = `Restez informé grâce au calendrier du Ramadan 2025 avec les horaires quotidiens de Sehri et d'Iftar. Planifiez votre jeûne avec des heures de prière précises pour un mois béni.`;
      break;
    case 'ar':
      title = `تقويم رمضان 2025 – مواعيد السحور والإفطار`;
      description = `ابقَ على اطلاع بتقويم رمضان 2025 الذي يحتوي على مواعيد السحور والإفطار اليومية. نظّم جدول صيامك بمواقيت الصلاة الدقيقة لشهر مبارك.`;
      break;
    default:
      title = `Ramadan Calendar 2025 – Sehri & Iftar Timings`;
      description = `Stay updated with the Ramadan 2025 calendar, featuring daily Sehri and Iftar timings. Plan your fasting schedule with accurate prayer times for a blessed month.`;
  }

  return {
    title,
    description,
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