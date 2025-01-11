"use client"
import { AnimatePresence,motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'


interface Content {
  text: string
  source: string
}

const hadith: Content = {
  text: "Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) said, \"Whoever removes a worldly grief from a believer, Allah will remove one of the griefs of the Day of Resurrection from him. Whoever alleviates the need of a needy person, Allah will alleviate his needs in this world and the Hereafter. Whoever shields (or hides the misdeeds of) a Muslim, Allah will shield him in this world and the Hereafter. Allah will aid a servant (of His) so long as the servant aids his brother.\"",
  source: "[Sahih Muslim 2699]"
}

const ayat: Content = {
  text: "And when My servants ask you, [O Muhammad], concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me [by obedience] and believe in Me that they may be [rightly] guided.",
  source: "[Quran 2:186]"
}


function Banner() {
  const [isHadith, setIsHadith] = useState(true)
  const [content, setContent] = useState<Content>(hadith)

  useEffect(() => {
    // Change content daily
    const today = new Date().toDateString()
    const storedDate = localStorage.getItem('lastContentChange')

    if (storedDate !== today) {
      setIsHadith(prev => !prev)
      localStorage.setItem('lastContentChange', today)
    }
  }, [])

  useEffect(() => {
    setContent(isHadith ? hadith : ayat)
  }, [isHadith])
  return (
    <div className="relative h-screen bg-blue-900 bg-[url('/main-page-frame.svg')] bg-center bg-cover bg-no-repeat text-white">
    <div className="absolute inset-0 bg-[#0046E5]/10" />
    <div className="container relative mx-auto px-4 pt-24">
      <h1 className="text-3xl text-center  lg:text-5xl font-bold my-5">Welcome to Global Salaah</h1>
      
      <div className="max-w-3xl py-2 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="lg:text-2xl text-xl font-semibold">
            {isHadith ? "Hadith of the Day" : "Ayat of the Day"}
          </h2>
          <button
            onClick={() => setIsHadith(prev => !prev)}
            className="bg-white text-blue-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            Switch to {isHadith ? "Ayat" : "Hadith"}
          </button>
        </div>
        <AnimatePresence mode="wait" >
          <motion.div
          className=''
            key={isHadith ? 'hadith' : 'ayat'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="lg:text-lg text-sm  text-center leading-relaxed">
              {content.text}
            </p>
            <p className="mt-4 text-sm opacity-75">{content.source}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </div>
  )
}

export default Banner