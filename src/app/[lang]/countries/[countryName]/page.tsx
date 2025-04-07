import React from 'react'
import CountryPage from './CountryPage'
import { Metadata } from 'next';

export async function generateMetadata({ params }: any) {
  const lang = params.lang;
  const country = await params.countryName;
  const countryName = country.charAt(0).toUpperCase() + country.slice(1);

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Heures de prière à ${countryName} – Global Salah`;
      description = `Obtenez les heures de prière précises à ${countryName} avec Global Salah. Accédez aux horaires quotidiens et mensuels pour rester régulier dans vos prières où que vous soyez.`;
      break;
    case 'ar':
      title = `مواقيت الصلاة في ${countryName} – جلوبال صلاح`;
      description = `احصل على مواقيت الصلاة الدقيقة في ${countryName} مع جلوبال صلاح. تصفح الجداول اليومية والشهرية للصلاة لتبقى مواظبًا على عباداتك في أي مكان.`;
      break;
    default:
      title = `Prayer Times in ${countryName} – Global Salah`;
      description = `Get accurate prayer times in ${countryName} with Global Salah. Access daily and monthly Salah schedules to stay consistent with your prayers anywhere in the country.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/countries/${params.countryName}`,
    },
  };
}

function page({ params }: any) {


  return (
    <div>
      <CountryPage />
    </div>
  )
}

export default page