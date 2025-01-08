import { Moon, MoonIcon } from 'lucide-react'
import React from 'react'

function HijirDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
    <div className="relative overflow-hidden bg-blue-600 rounded-2xl p-8 md:p-12">
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight animate-fade-in">
          Know your Hijri dates!
        </h1>
        <p className="text-blue-100/80 text-lg md:text-xl animate-fade-in-delay">
          Hijri date 6th Rajab, 1446
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
        {/* Mosque Silhouette */}
        <div className="absolute right-8 bottom-0 w-64 h-64 opacity-10 animate-fade-in-up">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full fill-current text-white transform translate-y-1/4"
          >
            <path d="M50 0L60 10L70 10L80 20L90 20L100 30V100H0V30L10 20L20 20L30 10L40 10L50 0Z" />
            <path d="M35 30L45 40V100H25V40L35 30Z" />
            <path d="M65 30L75 40V100H55V40L65 30Z" />
          </svg>
        </div>

        {/* Animated Stars/Crescents */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <Moon
              key={i}
              className="absolute text-white/10 animate-float"
              style={{
                top: `${15 + i * 15}%`,
                right: `${10 + i * 10}%`,
                animationDelay: `${i * 0.2}s`,
              }}
              size={24}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-600/0 animate-fade-in" />
    </div>
  </div>
  )
}

export default HijirDivider