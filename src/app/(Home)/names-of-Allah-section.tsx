"use client"
import { useTranslation } from "@/hooks/useTranslation";
import { checkIsPathnameIsEqualToLang, urlSplitter } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NamesOfAllahSection() {
  const pathname = usePathname();
  const { t } = useTranslation("namesection")
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
    <section className="lg:py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden lg:scale-100 scale-90">
      {/* Decorative elements */}


      <div className="max-w-5xl mx-auto relative">
        {/* Main content container with decorative border */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-emerald-100 dark:border-emerald-900/50 relative">
          {/* Top decorative pattern */}


          {/* Content area with padding */}
          <div className="p-8 md:p-12">
            {/* Heading with decorative elements */}
            <div className="text-center mb-10 relative">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 relative inline-block">
                <span className="relative z-10">{t("namesection.title")}</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-emerald-200 dark:bg-emerald-700/50 opacity-50 -rotate-1 z-0"></span>
              </h2>
            </div>

            {/* Main content with decorative elements */}
            <div className="relative">
              {/* Decorative number 99 in background */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-[180px] font-bold text-emerald-50 dark:text-emerald-900/30 opacity-70 select-none hidden lg:block">
                99
              </div>

              {/* Content with points */}
              <div className="relative z-10 max-w-4xl mx-auto">

                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <div className="md:flex-row flex-col flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-900/40 dark:to-gray-800 rounded-lg border-l-4 border-emerald-500 dark:border-emerald-600">
                    <div className="bg-emerald-100 dark:bg-emerald-900/70 p-2 rounded-full flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-emerald-700 dark:text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="">
                      {t("namesection.desc")}
                    </p>
                  </div>


                </div>
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="flex justify-center mt-10">
              <div className="w-24 h-1 bg-emerald-300 dark:bg-emerald-700 mx-auto rounded-full"></div>
            </div>

            <div className='flex justify-center mt-6 items-center '>
              <Link className='rounded-lg border-2 border-emerald-600 py-2 px-7 hover:bg-emerald-700 hover:text-white transition-all' href={isLang ? `/${currentLang}/99-names-of-allah` : '/99-names-of-allah'}>{t("namesection.button")}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
