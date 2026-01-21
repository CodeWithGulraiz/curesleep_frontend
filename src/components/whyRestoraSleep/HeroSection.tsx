"use client"

import womanSleeping from "../../assets/images/troubleSleeping.jpg"

export default function HeroSection() {
  return (
    <div 
      className="relative overflow-hidden pt-0 pb-20 md:pb-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${womanSleeping})`
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Why RestoraSleep
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-white max-w-3xl mx-auto drop-shadow-md">
            Because Better Sleep Changes Everything
          </p>
        </div>
      </div>
    </div>
  )
}
