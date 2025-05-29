"use client"
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useTranslation } from '@/hooks/useTranslation'
import { checkIsPathnameIsEqualToLang } from '@/lib'
import { CheckCheck, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function ThankYouContact() {
  const pathname = usePathname()
  const contactEmail = "support@globalsalah.com"
  const { t } = useTranslation("thankyou")
  const isLang = checkIsPathnameIsEqualToLang(pathname)
  const isArabic = pathname.split("/")[1]
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false); // This will now execute AFTER 2 seconds
    }, 800);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);


  return (
    <>
      {isLoading ? <div className='px-8 mt-4'>
        <Skeleton className="h-screen w-full" /></div> :
        (<div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FAFAFF] to-[#F0F0FF] dark:from-[#0A0A0F] dark:to-[#000000]  px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl w-full text-center">
            <div className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 font-semibold text-white mb-6">
              <CheckCheck className="mr-2 h-5 w-5" />
              <span>{t("thankyou.badge-text")}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
              {t("thankyou.heading")}
            </h1>

            <p className="mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {t("thankyou.paragraph")}
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">

              {isArabic === "ar" ? (<div className="flex items-center justify-center mb-4 gap-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{t("thankyou.sub-heading")}</h2>
                <Mail className="h-6 w-6 text-emerald-600 mr-2" />
              </div>):
              (<div className="flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-emerald-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{t("thankyou.sub-heading")}</h2>
              </div>)}

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t("thankyou.sub-paragraph")}
              </p>

              {isArabic === "ar" ? (
              <a href={`mailto:${contactEmail}?subject=Inquiry from Global Salah Website`}>
                <Button className="flex items-center justify-center gap-2 mx-auto bg-emerald-500 hover:bg-emerald-600">
                  <span className='text-white'> {contactEmail} {t("thankyou.buttontext")}</span>
                  <Mail className="h-4 w-4 text-white" />
                </Button>
              </a>):
              (<a href={`mailto:${contactEmail}?subject=Inquiry from Global Salah Website`}>
                <Button className="flex items-center justify-center gap-2 mx-auto bg-emerald-500 hover:bg-emerald-600">
                  <Mail className="h-4 w-4 text-white" />
                  <span className='text-white'>{t("thankyou.buttontext")} {contactEmail}</span>
                </Button>
              </a>)}


            </div>
          </div>
        </div>)}
    </>
  )
}


export default ThankYouContact