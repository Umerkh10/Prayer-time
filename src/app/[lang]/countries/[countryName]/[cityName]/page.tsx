import React from 'react'
import CityData from './CityData'

export async function generateMetadata({ params }: any) {
  const lang = params.lang;
  const country = await params.countryName;
  const city = await params.cityName;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Heures de prière à ${cityName} – Global Salah`;
      description = `Trouvez les heures de prière précises pour ${cityName} avec Global Salah. Accédez aux horaires quotidiens et mensuels pour rester régulier dans vos prières.`;
      break;
    case 'ar':
      title = `مواقيت الصلاة في ${cityName} – جلوبال صلاح`;
      description = `اكتشف مواقيت الصلاة الدقيقة في ${cityName} مع جلوبال صلاح. تصفح الجداول اليومية والشهرية للحفاظ على التزامك بالصلاة.`;
      break;
    default:
      title = `${cityName} Prayer Timings – Global Salah`;
      description = `Find precise prayer timings for ${cityName} with Global Salah. Access daily and monthly schedules to stay consistent with your prayers.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/countries/${country}/${city}`,
    },
  };
}


function page() {
  return (
    <div><CityData/></div>
  )
}

export default page