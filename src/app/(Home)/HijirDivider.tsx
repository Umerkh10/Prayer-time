"use client"
import { Moon, MoonIcon } from 'lucide-react'
import moment from 'moment-hijri';
import React, { useEffect, useState } from 'react'

function HijirDivider() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const currentHijriDate = moment().locale("en").format("iD iMMMM, iYYYY");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
    <div className="relative overflow-hidden bg-blue-600 bg-[url('/main-page-frame.svg')] bg-no-repeat  rounded-2xl lg:h-72 p-8 md:p-12">
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h1 className="text-white text-3xl md:text-4xl text-center font-bold tracking-tight animate-fade-in ">
          Know your Current Date & Time!
        </h1>

        <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto pt-5 gap-4'>

          <div className='flex justify-center items-center group'>
            <div className='border border-muted rounded-lg bg-transparent w-52 p-4 text-zinc-100 group-hover:bg-zinc-100 group-hover:text-zinc-800 transition ease-in duration-150 delay-150'>
        <h3 className="  text-lg md:text-xl animate-fade-in-delay text-center ">
          Current Time
        </h3>
        <div className="text-lg text-center">{formattedTime}</div>
        </div>
        </div>

       <div className='flex justify-center items-center group'>
            <div className='border border-muted rounded-lg bg-transparent w-52 p-4 text-zinc-100 group-hover:bg-zinc-100 group-hover:text-zinc-800 transition ease-in duration-150 delay-150'>
        <h3 className="  text-lg md:text-xl animate-fade-in-delay text-center ">
          Hijri date 
        </h3>
        <div className=' text-lg  text-center'>{currentHijriDate}</div>
        </div>
        </div>

        <div className="flex justify-center items-center group">
        <div className="border border-muted rounded-lg bg-transparent w-52 p-4 text-zinc-100 group-hover:bg-zinc-100 group-hover:text-zinc-800 transition ease-in duration-150 delay-150">
          <h3 className="text-lg md:text-xl animate-fade-in-delay text-center">
            Current Date 
          </h3>
          <div className="text-lg text-center">{formattedDate}</div>
        </div>
      </div>

      </div>


      </div>

      {/* Decorative Elements */}
    

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-600/0 animate-fade-in" />
    </div>
  </div>
  )
}

export default HijirDivider