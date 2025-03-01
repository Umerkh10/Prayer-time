"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { usePathname, useSearchParams } from 'next/navigation'
import englishLang from "../../../public/locales/en.json"
import frenchLang from "../../../public/locales/fr.json"
import arabicLang from "../../../public/locales/ar.json"
import { urlSplitter } from '@/lib'
import { FaTruckLoading } from 'react-icons/fa'
import { Loader2, LoaderCircle } from 'lucide-react'

function Banner({ isLoading, setIsLoading }: any) {
    const pathname = usePathname();
    const lang = urlSplitter(pathname)

    const [isHadith, setIsHadith] = useState(true)
    const [hadithIndex, setHadithIndex] = useState(0)
    const [ayatIndex, setAyatIndex] = useState(0)
    const [hadithContent, setHadithContent] = useState<any>(null)
    const [ayatContent, setAyatContent] = useState<any>(null)
    const [selectedLanguage, setSelectedLanguage] = useState<any>(null)


    // useEffect(() => {
    //     const language = localStorage.getItem("language");
    //     setSelectedLanguage(language);

    //     const updateLoadingState = () => {
    //         const loading = localStorage.getItem("loading");
    //         setIsLoading(loading === "true");

    //     };

    //     updateLoadingState(); // Run once on mount
    //     window.addEventListener("storage", updateLoadingState); // Listen for storage changes

    //     return () => {
    //         window.removeEventListener("storage", updateLoadingState); // Cleanup listener
    //     };
    // }, []);

    // setTimeout(() => {
    //     localStorage.setItem("loading", "false");
    //     setIsLoading(false);
    // }, 700);


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
        if (isHadith) {
            if (lang === "fr") {
                setHadithContent(frenchLang.banner.hadiths[hadithIndex] || {});
            } else if (lang === "en" || pathname === "/") {
                setHadithContent(englishLang.banner.hadiths[hadithIndex] || {});
            }
            else if (lang === "ar" || pathname === "/") {
                setHadithContent(arabicLang.banner.hadiths[hadithIndex] || {});
            }
        } else {
            if (lang === "fr") {
                setAyatContent(frenchLang.banner.ayats[ayatIndex] || {});
            } else if (lang === "en" || pathname === "/") {
                setAyatContent(englishLang.banner.ayats[ayatIndex] || {});
            }
            else if (lang === "ar" || pathname === "/") {
                setAyatContent(arabicLang.banner.ayats[ayatIndex] || {});
            }
        }
    }, [isHadith, hadithIndex, ayatIndex, lang]);


    const handleContentChange = (value: string) => {
        if (value === 'hadith') {
            setIsHadith(true)
        } else if (value === 'ayat') {
            setIsHadith(false)
        }
    }



    const handleNext = () => {
        if (isHadith) {
            const nextIndex = (hadithIndex + 1) % frenchLang.banner.hadiths.length
            setHadithIndex(nextIndex)
            localStorage.setItem('hadithIndex', nextIndex.toString())
        } else {
            const nextIndex = (ayatIndex + 1) % frenchLang.banner.ayats.length
            setAyatIndex(nextIndex)
            localStorage.setItem('ayatIndex', nextIndex.toString())
        }
    }
    const { t } = useTranslation("banner");

    // if (isLoading) return <div>Loading...</div>

    return (
        // <>
        //     {isLoading ? <div className='h-screen flex justify-center items-center md:text-5xl text-xl font-semibold z-[99999999] gap-2'><Loader2 className='md:w-11 md:h-11 w-6 h-6 animate-spin'/> Switching Language to {selectedLanguage}  </div> : <div className="relative lg:h-screen h-[700px] bg-blue-950 bg-[url('/main-page-frame.svg')] bg-center bg-cover bg-no-repeat text-zinc-100">
        //         <div className="absolute inset-0 bg-[#0046E5]/10" />
        //         <div className="container relative lg:mx-auto px-4 lg:pt-20  pt-3">
        //             <h1 className="text-3xl text-center lg:text-5xl font-bold my-5">{lang ? t("banner.title") : "Welcome to Global Salah"}</h1>

        //             <div className="max-w-3xl lg:mt-12 py-2 lg:mx-auto ">
        //                 <div className="flex md:flex-row flex-col lg:justify-between justify-start lg:items-center space-y-2 mb-4">
        //                     <h2 className="lg:text-2xl text-xl font-semibold lg:text-left text-center">
        //                         {isHadith && lang ? t("banner.hadithofday") : !isHadith && lang ? t("banner.ayatofday") : isHadith && !lang ? "Hadith of the Day" : "Ayat of the Day"}
        //                     </h2>
        //                     <div className="grid grid-cols-2 lg:gap-4 gap-8 lg:mx-0 mx-auto pl-10 pt-2">
        //                         <div className=''>
        //                             <Select
        //                                 value={isHadith ? 'hadith' : 'ayat'}
        //                                 onValueChange={handleContentChange}
        //                             >
        //                                 <SelectTrigger className="lg:w-[180px] w-[130px]">
        //                                     <SelectValue placeholder="Select content" />
        //                                 </SelectTrigger>
        //                                 <SelectContent>
        //                                     <SelectItem value="hadith">{lang ? t("banner.titlehadith") : "Hadith"}</SelectItem>
        //                                     <SelectItem value="ayat">{lang ? t("banner.titleayat") : "Ayat"} </SelectItem>
        //                                 </SelectContent>
        //                             </Select>
        //                         </div>
        //                         <div>
        //                             <button
        //                                 onClick={handleNext}
        //                                 className="bg-white text-blue-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
        //                             >
        //                                 {lang ? `${t("banner.next")} ${isHadith ? t("banner.titlehadith") : t("banner.titleayat")}` : `Next ${isHadith ? "Hadith" : "Ayat"}`}
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <AnimatePresence mode="wait">
        //                     <motion.div
        //                         key={`${isHadith ? 'hadith' : 'ayat'}-${isHadith ? hadithIndex : ayatIndex}`}
        //                         initial={{ opacity: 0, y: 20 }}
        //                         animate={{ opacity: 1, y: 0 }}
        //                         exit={{ opacity: 0, y: -20 }}
        //                         transition={{ duration: 0.5 }}
        //                     >
        //                         <p className="lg:text-lg text-sm text-center pt-6 leading-relaxed">
        //                             {!isHadith ? ayatContent?.text : hadithContent?.arabic}
        //                         </p>
        //                         <p className=" text-sm text-center pt-3 leading-relaxed">
        //                             {!isHadith ? t(ayatContent?.translation) : t(hadithContent?.translation)}
        //                         </p>
        //                         <p className="mt-4 text-sm opacity-75 lg:text-left text-center">{!isHadith ? ayatContent?.refrence : hadithContent?.refrence} </p>
        //                     </motion.div>
        //                 </AnimatePresence>
        //             </div>
        //         </div>
        //     </div>}
        // </>
        <>
          <div className="relative lg:h-screen h-[700px] bg-blue-950 bg-[url('/main-page-frame.svg')] bg-center bg-cover bg-no-repeat text-zinc-100">
                <div className="absolute inset-0 bg-[#0046E5]/10" />
                <div className="container relative lg:mx-auto px-4 lg:pt-20  pt-3">
                    <h1 className="text-3xl text-center lg:text-5xl font-bold my-5">{lang ? t("banner.title") : "Welcome to Global Salah"}</h1>

                    <div className="max-w-3xl lg:mt-12 py-2 lg:mx-auto ">
                        <div className="flex md:flex-row flex-col lg:justify-between justify-start lg:items-center space-y-2 mb-4">
                            <h2 className="lg:text-2xl text-xl font-semibold lg:text-left text-center">
                                {isHadith && lang ? t("banner.hadithofday") : !isHadith && lang ? t("banner.ayatofday") : isHadith && !lang ? "Hadith of the Day" : "Ayat of the Day"}
                            </h2>
                            <div className="grid grid-cols-2 lg:gap-4 gap-8 lg:mx-0 mx-auto pl-10 pt-2">
                                <div className=''>
                                    <Select
                                        value={isHadith ? 'hadith' : 'ayat'}
                                        onValueChange={handleContentChange}
                                    >
                                        <SelectTrigger className="lg:w-[180px] w-[130px]">
                                            <SelectValue placeholder="Select content" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="hadith">{lang ? t("banner.titlehadith") : "Hadith"}</SelectItem>
                                            <SelectItem value="ayat">{lang ? t("banner.titleayat") : "Ayat"} </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <button
                                        onClick={handleNext}
                                        className="bg-white text-blue-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
                                    >
                                        {lang ? `${t("banner.next")} ${isHadith ? t("banner.titlehadith") : t("banner.titleayat")}` : `Next ${isHadith ? "Hadith" : "Ayat"}`}
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
                                <p className="lg:text-lg text-sm text-center pt-6 leading-relaxed">
                                    {!isHadith ? ayatContent?.text : hadithContent?.arabic}
                                </p>
                                <p className=" text-sm text-center pt-3 leading-relaxed">
                                    {!isHadith ? t(ayatContent?.translation) : t(hadithContent?.translation)}
                                </p>
                                <p className="mt-4 text-sm opacity-75 lg:text-left text-center">{!isHadith ? ayatContent?.refrence : hadithContent?.refrence} </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner

