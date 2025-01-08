"use client"
import React from 'react';
import { PrayerTimesDisplay } from 'react-islamic-prayer-times';

function PrayerDisplay() {
    
  const ct = require("countries-and-timezones");

  const countries = ct.getAllCountries();

  const getCurrentTime = (timezone: string) => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(new Date());
  };
  return (
    <div>
    <h1 className="text-center font-bold text-4xl mt-32">Prayer Times WorldWide</h1>
    <div className='font-extrabold text-3xl text-center '>Prayer Times For Karachi Pakistan</div>
    <div>
  <PrayerTimesDisplay  latitude={24.8591} longitude={66.9983} layout='vertical' location={{
    city: "Karachi",
    country: "Pakistan",
    method: 1, // ISNA method
    school: 1, // Shafi school
  }} />
  </div>
    <div className='font-extrabold text-3xl text-center py-3'>Prayer Times For Lahore Pakistan</div>
    <div>
  <PrayerTimesDisplay  latitude={31.5204} longitude={74.3587} layout='vertical' location={{
    city: "Lahore",
    country: "Pakistan",
    method: 1, // ISNA method
    school: 1, // Shafi school
  }} />
  </div>
    <div className='font-extrabold text-3xl text-center py-3 '>Prayer Times For New York USA</div>
    <div>
  <PrayerTimesDisplay  latitude={40.7128} longitude={74.0060} layout='vertical' location={{
    city: "New York",
    country: "USA",
    method: 2, // ISNA method
    school: 1, // Shafi school
  }} />
  </div>
    <div className='font-extrabold text-3xl text-center py-3 '>Prayer Times For Chicago USA</div>
    <div>
  <PrayerTimesDisplay  latitude={41.8781} longitude={87.6298} layout='vertical' location={{
    city: "Chicago",
    country: "USA",
    method: 2, // ISNA method
    school: 1, // Shafi school
  }} />
  </div>
  <div className="font-extrabold text-3xl text-center py-3">
      Countries and Their Timezones
    </div>
    <div className="overflow-y-auto max-h-[400px] mx-auto w-[80%]">
      {Object.entries(countries).map(([countryCode, country]: [string, any]) => (
        <div
          key={countryCode}
          className="p-2 border-b border-gray-300 text-left"
        >
          <p className="font-semibold">Country: {country.name}</p>
          <p>Timezones:</p>
          <ul className="pl-4 list-disc">
            {country.timezones.map((timezone: string) => (
              <li key={timezone}>
                {timezone} - Current Time: {getCurrentTime(timezone)}
              </li>
            ))}
          </ul>
        </div>
      ))}
      
    </div>

  </div>
  )
}

export default PrayerDisplay