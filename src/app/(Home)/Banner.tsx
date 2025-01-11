"use client"

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Content, hadiths, ayats } from './content'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function Banner() {
  const [isHadith, setIsHadith] = useState(true)
  const [hadithIndex, setHadithIndex] = useState(0)
  const [ayatIndex, setAyatIndex] = useState(0)
  const [content, setContent] = useState<Content>(hadiths[0])

  useEffect(() => {
    // Change content and reset indices daily
    const today = new Date().toDateString()
    const storedDate = localStorage.getItem('lastContentChange')

    if (storedDate !== today) {
      setIsHadith(prev => !prev)
      setHadithIndex(0)
      setAyatIndex(0)
      localStorage.setItem('lastContentChange', today)
    } else {
      // Retrieve stored indices
      const storedHadithIndex = localStorage.getItem('hadithIndex')
      const storedAyatIndex = localStorage.getItem('ayatIndex')
      if (storedHadithIndex) setHadithIndex(parseInt(storedHadithIndex))
      if (storedAyatIndex) setAyatIndex(parseInt(storedAyatIndex))
    }
  }, [])

  useEffect(() => {
    setContent(isHadith ? hadiths[hadithIndex] : ayats[ayatIndex])
  }, [isHadith, hadithIndex, ayatIndex])

  const handleContentChange = (value: string) => {
    if (value === 'hadith') {
      setIsHadith(true)
    } else if (value === 'ayat') {
      setIsHadith(false)
    }
  }

  const handleNext = () => {
    if (isHadith) {
      const nextIndex = (hadithIndex + 1) % hadiths.length
      setHadithIndex(nextIndex)
      localStorage.setItem('hadithIndex', nextIndex.toString())
    } else {
      const nextIndex = (ayatIndex + 1) % ayats.length
      setAyatIndex(nextIndex)
      localStorage.setItem('ayatIndex', nextIndex.toString())
    }
  }

  return (
    <div className="relative h-screen bg-blue-900 bg-[url('/main-page-frame.svg')] bg-center bg-cover bg-no-repeat text-white">
      <div className="absolute inset-0 bg-[#0046E5]/10" />
      <div className="container relative lg:mx-auto px-4 lg:pt-24 pt-3">
        <h1 className="text-3xl text-center lg:text-5xl font-bold my-5">Welcome to Global Salaah</h1>
        
        <div className="max-w-3xl mt-12 py-2 lg:mx-auto ">
          <div className="flex md:flex-row flex-col lg:justify-between justify-start lg:items-center space-y-2 mb-4">
            <h2 className="lg:text-2xl text-xl font-semibold text-left">
              {isHadith ? "Hadith of the Day" : "Ayat of the Day"}
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3  space-x-2">
              <div>
              <Select
                value={isHadith ? 'hadith' : 'ayat'}
                onValueChange={handleContentChange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select content" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hadith">Hadith</SelectItem>
                  <SelectItem value="ayat">Ayat</SelectItem>
                </SelectContent>
              </Select>
              </div>
              <div>
              <button
                onClick={handleNext}
                className="bg-white text-blue-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
              >
                Next {isHadith ? "Hadith" : "Ayat"}
              </button>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${isHadith ? 'hadith' : 'ayat'}-${isHadith ? hadithIndex : ayatIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="lg:text-lg text-sm text-center py-4 leading-relaxed">
                {content.text}
              </p>
              <p className="mt-4 text-sm opacity-75 lg:text-left text-center">{content.source}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Banner

