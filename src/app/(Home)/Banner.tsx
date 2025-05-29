"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { urlSplitter } from "@/lib"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatePresence, motion } from "framer-motion"

function Banner() {
  const [isLoading, setIsLoading] = useState(true)
  const [isHadith, setIsHadith] = useState(true)
  const [hadithIndex, setHadithIndex] = useState(0)
  const [ayatIndex, setAyatIndex] = useState(0)
  const [hadithContent, setHadithContent] = useState<any>(null)
  const [ayatContent, setAyatContent] = useState<any>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<any>(null)
  const [languageData, setLanguageData] = useState<any>(null)

  const pathname = usePathname()
  const lang = urlSplitter(pathname)
  const { t } = useTranslation("banner")

  // Load selected language from localStorage
  useEffect(() => {
    const language = localStorage.getItem("language")
    setSelectedLanguage(language)
  }, [])

  // Handle content rotation
  useEffect(() => {
    const today = new Date().toDateString()
    const storedDate = localStorage.getItem("lastContentChange")
    if (storedDate !== today) {
      setIsHadith((prev) => !prev)
      setHadithIndex(0)
      setAyatIndex(0)
      localStorage.setItem("lastContentChange", today)
    } else {
      const storedHadithIndex = localStorage.getItem("hadithIndex")
      const storedAyatIndex = localStorage.getItem("ayatIndex")
      if (storedHadithIndex) setHadithIndex(Number.parseInt(storedHadithIndex))
      if (storedAyatIndex) setAyatIndex(Number.parseInt(storedAyatIndex))
    }
  }, [])

  // 🔄 Dynamically load language file
  useEffect(() => {
    const loadLanguageData = async () => {
      try {
        const langToLoad = lang || "en"
        const data = await import(`../../../public/locales/${langToLoad}.json`)
        setLanguageData(data.default)
        // Set loading to false after language data is loaded
        setIsLoading(false)
      } catch (error) {
        console.error("Error loading language file:", error)
        setIsLoading(false)
      }
    }

    loadLanguageData()
  }, [lang])

  // Set content based on loaded data
  useEffect(() => {
    if (!languageData) return

    if (isHadith) {
      setHadithContent(languageData.banner.hadiths[hadithIndex] || {})
    } else {
      setAyatContent(languageData.banner.ayats[ayatIndex] || {})
    }
  }, [languageData, isHadith, hadithIndex, ayatIndex])

  const handleContentChange = (value: string) => {
    setIsHadith(value === "hadith")
  }

  const handleNext = () => {
    if (!languageData) return

    if (isHadith) {
      const nextIndex = (hadithIndex + 1) % languageData.banner.hadiths.length
      setHadithIndex(nextIndex)
      localStorage.setItem("hadithIndex", nextIndex.toString())
    } else {
      const nextIndex = (ayatIndex + 1) % languageData.banner.ayats.length
      setAyatIndex(nextIndex)
      localStorage.setItem("ayatIndex", nextIndex.toString())
    }
  }

  const bannerHeight = "lg:h-screen h-[500px]"

  return (
    <div className={`relative ${bannerHeight} bg-[#FAFAFF] dark:bg-[#0a1f0b] text-zinc-100 overflow-hidden`}>
      {/* Background Image for LCP - Always render this */}
      <Image
        src="/banner-img-salah.webp"
        alt="Banner background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#101110] via-emerald-950 to-[#000000]/60 backdrop-blur-sm" />

      {/* Content Area - Use a placeholder with same dimensions while loading */}
      <div className="container relative z-20 lg:mx-auto px-4 lg:pt-20 pt-6 h-full">
      {isLoading ? (
        <div className="max-w-3xl lg:mt-12 py-2 lg:mx-auto">
        <Skeleton className="h-12 w-3/4 bg-gray-700/30" /> </div> ) :(
        <h1 className="text-2xl text-center lg:text-5xl font-bold my-5">
          {lang && t("banner.title") ? t("banner.title") : "Welcome to Global Salah"}
        </h1>
        )}

        <div className="max-w-3xl lg:mt-12 py-2 lg:mx-auto">
          {isLoading ? (
            <div className="space-y-4">
              <div className="flex md:flex-row flex-col lg:justify-between justify-start lg:items-center space-y-2 mb-4">
                <Skeleton className="h-8 w-48 bg-gray-700/30" />
                <div className="flex gap-4">
                  <Skeleton className="h-10 w-32 bg-gray-700/30" />
                  <Skeleton className="h-10 w-32 bg-gray-700/30" />
                </div>
              </div>
              <Skeleton className="h-24 w-full bg-gray-700/30" />
              <Skeleton className="h-16 w-full bg-gray-700/30" />
              <Skeleton className="h-6 w-40 bg-gray-700/30" />
            </div>
          ) : (
            <>
              <div className="flex md:flex-row flex-col lg:justify-between justify-start lg:items-center space-y-2 mb-4">
                <h2 className="lg:text-2xl text-lg font-semibold lg:text-left text-center">
                  {isHadith && lang
                    ? t("banner.hadithofday")
                    : !isHadith && lang
                      ? t("banner.ayatofday")
                      : isHadith && !lang
                        ? "Hadith of the Day"
                        : "Ayat of the Day"}
                </h2>

                <div className="grid grid-cols-2 lg:gap-4 gap-8 lg:mx-0 mx-auto pl-10 pt-2 scale-90 lg:scale-100">
                  <div>
                    <label htmlFor="content-select" className="sr-only">
                      Select content
                    </label>
                    <Select value={isHadith ? "hadith" : "ayat"} onValueChange={handleContentChange}>
                      <SelectTrigger id="content-select" className="lg:w-[180px] w-[130px]">
                        <SelectValue placeholder="Select content" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hadith">{lang ? t("banner.titlehadith") : "Hadith"}</SelectItem>
                        <SelectItem value="ayat">{lang ? t("banner.titleayat") : "Ayat"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <button
                      aria-label="Next Content"
                      onClick={handleNext}
                      className="bg-white text-blue-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
                    >
                      {lang
                        ? `${t("banner.next")} ${isHadith ? t("banner.titlehadith") : t("banner.titleayat")}`
                        : `Next ${isHadith ? "Hadith" : "Ayat"}`}
                    </button>
                  </div>
                </div>
              </div>

              {/* Animated Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${isHadith ? "hadith" : "ayat"}-${isHadith ? hadithIndex : ayatIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[200px]" // Fixed minimum height to prevent layout shifts
                >
                  <p className="lg:text-lg text-sm text-center pt-6 px-2 leading-relaxed">
                    {!isHadith ? ayatContent?.text : hadithContent?.arabic}
                  </p>
                  <p className="text-sm text-center pt-3 px-2 leading-relaxed">
                    {!isHadith ? t(ayatContent?.translation) : t(hadithContent?.translation)}
                  </p>
                  <p className="mt-4 text-sm opacity-75 lg:text-left text-center">
                    {!isHadith ? ayatContent?.refrence : hadithContent?.refrence}
                  </p>
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner
