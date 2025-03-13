import React from 'react'
import CountryPage from './CountryPage'
import { Metadata } from 'next';

export async function generateMetadata({ params }: any) {
  const lang = params.lang
  const country = await params.countryName;
  const countryName = country.charAt(0).toUpperCase() + country.slice(1)

  return {
    title: ` Prayer Times in ${countryName} – Global Salah`,
    description: `Get accurate prayer times in ${countryName} with Global Salah. Access daily and monthly Salah schedules to stay consistent with your prayers anywhere in the country.
`,
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