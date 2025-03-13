import React from 'react'
import CityData from './CityData'

export async function generateMetadata({ params }: any) {
  const lang = params.lang
  const country = await params.countryName;
  const city = await params.cityName;
  const cityName = params.cityName.charAt(0).toUpperCase() + params.cityName.slice(1)

  return {
    title: `${cityName} Prayer Timings – Global Salah`,
    description: `Find precise prayer timings for ${cityName} with Global Salah. Access daily and monthly schedules to stay consistent with your prayers.
`,
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