"use client"
import { useTranslation } from '@/hooks/useTranslation';
import { checkIsPathnameIsEqualToLang, urlSplitter } from '@/lib';
import { BookOpen, Award, Archive } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HadithSection() {
  const pathname = usePathname();
  const { t } = useTranslation("hadithsection")
  const currentLang = urlSplitter(pathname)
  const isLang = checkIsPathnameIsEqualToLang(currentLang)
  const isArabic = pathname.split("/")[1]
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="lg:py-10 px-4 md:px-8 lg:px-12 relative overflow-hidden lg:scale-100 scale-90">
      <div className="max-w-5xl mx-auto relative">
        {/* Heading with decorative elements */}
        <div className="text-center mb-12 relative">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 relative inline-block">
            <span className="relative z-10"> {t("hadithsection.title")} </span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-emerald-200 dark:bg-emerald-700/50 opacity-50 -rotate-1 z-0"></span>
          </h2>
          <p className="text-emerald-700 dark:text-emerald-400 lg:text-base text-sm max-w-xl mx-auto">
            {t("hadithsection.desc")}
          </p>
          <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Content sections with rich styling */}
        <div className="grid gap-8 grid-cols-1 ">
          {/* Types of Hadith */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-emerald-100 dark:border-emerald-900/50">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-500 dark:to-emerald-700 h-3"></div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 dark:bg-emerald-900/70 p-3 rounded-full">
                  <Award className="h-7 w-7 text-emerald-700 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-100"> {t("hadithsection.subheading1")} </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-lg p-4 border-l-4 border-emerald-600 dark:border-emerald-500">
                  <p className="text-gray-700 dark:text-gray-300 lg:text-base text-sm">
                    {t("hadithsection.subpara1")}
                  </p>
                </div>



              </div>
            </div>
          </div>

          {/* Preservation and Compilation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-emerald-100 dark:border-emerald-900/50">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-500 dark:to-emerald-700 h-3"></div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 dark:bg-emerald-900/70 p-3 rounded-full">
                  <Archive className="h-7 w-7 text-emerald-700 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-100"> {t("hadithsection.subheading2")} </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 lg:text-base text-sm">
                {t("hadithsection.subpara2")}

              </p>


            </div>
          </div>

          {/* Importance of Hadith */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-emerald-100 dark:border-emerald-900/50">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-500 dark:to-emerald-700 h-3"></div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 dark:bg-emerald-900/70 p-3 rounded-full">
                  <BookOpen className="h-7 w-7 text-emerald-700 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-100">{t("hadithsection.subheading3")}</h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 lg:text-base text-sm">
                {t("hadithsection.subpara3")}
              </p>


            </div>
          </div>
        </div>


        {/* Decorative bottom element */}
        <div className="flex justify-center mt-5">
          <div className="max-w-2xl w-2/3 h-1 bg-emerald-300 dark:bg-emerald-700 mx-auto rounded-full"></div>
        </div>

        
        <div className='flex justify-center mt-6 items-center '>
          <Link className='rounded-lg border-2 border-emerald-600 py-2 px-7 hover:bg-emerald-700 hover:text-white transition-all' href={isLang ? `/${currentLang}/sahih-bukhari` : '/sahih-bukhari'}> {t("hadithsection.button")} </Link>
        </div>
      </div>
    </section>
  )
}
