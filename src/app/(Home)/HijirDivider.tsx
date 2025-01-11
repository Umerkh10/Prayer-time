import { Moon, MoonIcon } from 'lucide-react'
import moment from 'moment-hijri';
import React from 'react'

function HijirDivider() {
  const currentHijriDate = moment().locale("en").format("iD iMMMM, iYYYY");

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
    <div className="relative overflow-hidden bg-blue-600 bg-[url('/main-page-frame.svg')] bg-no-repeat b rounded-2xl h-72 p-8 md:p-12">
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight animate-fade-in ">
          Know your Hijri dates!
        </h1>
        <p className="text-blue-100/80 text-lg md:text-xl animate-fade-in-delay ">
          Hijri date {currentHijriDate}
        </p>
      </div>

      {/* Decorative Elements */}
    

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-600/0 animate-fade-in" />
    </div>
  </div>
  )
}

export default HijirDivider