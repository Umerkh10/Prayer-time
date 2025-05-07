"use client"
import { useTranslation } from '@/hooks/useTranslation';
import { checkIsPathnameIsEqualToLang, urlSplitter } from '@/lib';
import { CoinsIcon, MoveIcon, ScaleIcon } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function IslamicCalculators() {
  const pathname = usePathname();
  const { t } = useTranslation("calculatiorsection")
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
    <main className=" lg:py-10 px-4 lg:scale-100 scale-90">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto lg:mb-12 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold  mb-4"> {t('calculatiorsection.title')} </h2>
          <p className="text-sm md:text-base "> {t('calculatiorsection.desc')} </p>
          <div className="flex items-center justify-center mt-4">
            <div className="h-1 w-20 bg-emerald-700 rounded-full"></div>
          </div>
        </div>

        <div className="lg:space-y-5 space-y-3 ">
          {/* Qaza Namaz Calculator */}
          <div className="bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-emerald-100 dark:border-emerald-900/40">
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-700 dark:to-emerald-800 p-6">
              <h3 className="text-xl font-semibold"> {t('calculatiorsection.heading2')} </h3>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900/40 p-4 rounded-full">
                  <MoveIcon className="w-10 h-10 text-emerald-700 dark:text-emerald-300" />
                </div>
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed lg:text-base text-sm">
                    {t('calculatiorsection.para2')}
                  </p>
                  <div className="pt-2">
                    <h4 className="font-semibold text-lg text-green-600 dark:text-green-500 mb-2">{t('calculatiorsection.pointheading1')}</h4>
                    <ul className="space-y-2 list-disc list-inside text-foreground lg:text-base text-sm">
                      <li> {t('calculatiorsection.point1')} </li>
                      <li>{t('calculatiorsection.point2')} </li>
                      <li> {t('calculatiorsection.point3')} </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='flex justify-center mt-6 items-center '>
                <Link className='rounded-lg border-2 border-emerald-600 py-2 px-7 hover:bg-emerald-700 hover:text-white transition-all' href={isLang ? `/${currentLang}/qaza-namaz-calculator` : '/qaza-namaz-calculator'}> {t("calculatiorsection.button1")}</Link>
              </div>
            </div>

          </div>

          {/* Zakat Calculator */}
          <div className="bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-emerald-100 dark:border-emerald-900/40">
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-700 dark:to-emerald-800 p-6">
              <h3 className="text-xl font-semibold "> {t('calculatiorsection.heading3')} </h3>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-900/30 p-4 rounded-full">
                  <CoinsIcon className="w-10 h-10 text-amber-600 dark:text-amber-300" />
                </div>
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed lg:text-base text-sm">
                    {t('calculatiorsection.para3')}
                  </p>
                  <div className="pt-2">
                    <h4 className="font-semibold text-lg text-green-600 dark:text-green-500 mb-2">{t('calculatiorsection.pointheading2')}</h4>
                    <ul className="space-y-2 list-disc list-inside text-foreground lg:text-base text-sm">
                      <li>{t('calculatiorsection.point4')}</li>
                      <li>{t('calculatiorsection.point5')}</li>
                      <li>{t('calculatiorsection.point6')}</li>
                      <li>{t('calculatiorsection.point7')}</li>
                      <li>{t('calculatiorsection.point8')}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='flex justify-center mt-6 items-center '>
                <Link className='rounded-lg border-2 border-emerald-600 py-2 px-7 hover:bg-emerald-700 hover:text-white transition-all' href={isLang ? `/${currentLang}/zakat-calculator` : '/zakat-calculator'}> {t("calculatiorsection.button2")}</Link>
              </div>
            </div>
          </div>

          {/* Inheritance Calculator */}
          <div className="bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-emerald-100 dark:border-emerald-900/40">
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-700 dark:to-emerald-800 p-6">
              <h3 className="text-xl font-semibold ">{t('calculatiorsection.heading4')}</h3>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/40 p-4 rounded-full">
                  <ScaleIcon className="w-10 h-10 text-blue-700 dark:text-blue-300" />
                </div>
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed lg:text-base text-sm">
                    {t('calculatiorsection.para4')}
                  </p>
                  <div className="pt-2">
                    <h4 className="font-semibold text-lg text-green-600 dark:text-green-500 mb-2">{t('calculatiorsection.pointheading3')}</h4>
                    <ul className="space-y-2 list-disc list-inside text-foreground lg:text-base text-sm">
                      <li> {t('calculatiorsection.point9')} </li>
                      <li>{t('calculatiorsection.point10')}</li>
                      <li>{t('calculatiorsection.point11')}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='flex justify-center mt-6 items-center '>
              <Link className='rounded-lg border-2 border-emerald-600 py-2 px-7 hover:bg-emerald-700 hover:text-white transition-all' href={isLang ? `/${currentLang}/inheritance-calculator` : '/inheritance-calculator'}> {t("calculatiorsection.button3")}</Link>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </main>
  )
}

export default IslamicCalculators