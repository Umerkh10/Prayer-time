"use client"
import React, { useEffect, useState } from 'react'

function page() {
    const [city, setCity] = useState<any>({})

    useEffect(()=>{
        const city = localStorage.getItem('cityDetails')
        if (city) {
            setCity(JSON.parse(city))
        }
    },[])

    console.log(city)

  return (
    <>
    <div>Salam Alaikum this is chahat fateh {city?.city?.name} </div>
    <div>Salam Alaikum this is chahat fateh {city?.city?.latitude} </div>
    <div>Salam Alaikum this is chahat fateh {city?.city?.longitude} </div>
    <div>{city?.timezones}</div>



    </>
  )
}

export default page