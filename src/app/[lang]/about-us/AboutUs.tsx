"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { FaGlobe, FaHeart, FaPrayingHands, FaBrain, FaBalanceScale, FaClock, FaUsers, FaCalendar, FaBook } from "react-icons/fa"
import { useTranslation } from '@/hooks/useTranslation'
import { usePathname } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

function AboutUs() {
  const pathname = usePathname();
  const { t } = useTranslation("aboutus")
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
        <Skeleton className="h-80 w-full" />
        <Skeleton className="mt-3 h-72 rounded-lg w-full" />
        <div className='flex items-center justify-center gap-2 mt-4'>
          <Skeleton className="h-screen w-full" />
        </div>
      </div> :
        (<div>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="py-28 text-center bg-[#FAFAFF] dark:bg-[#000000] supports-[backdrop-filter]:bg-[#003524]  text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("aboutus.title")}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t("aboutus.desc")}</p>
          </motion.section>

          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-green-600">{t("aboutus.mission")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <FaGlobe className="text-5xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("aboutus.globaltitle")}</h3>
                  <p className="text-muted-foreground">{t("aboutus.globaldesc")}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, }}
                  className="text-center"
                >
                  <FaHeart className="text-5xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("aboutus.communitytitle")}</h3>
                  <p className="text-muted-foreground">{t("aboutus.communitydesc")}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, }}
                  className="text-center"
                >
                  <FaPrayingHands className="text-5xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("aboutus.spiritualtitle")}</h3>
                  <p className="text-muted-foreground">{t("aboutus.spiritualdesc")}</p>
                </motion.div>

              </div>
            </div>
          </section>


          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-green-600">{t("aboutus.benefittitle")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {isArabic === "ar" ? (<motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6 text-right"
                >
                  <FaHeart className="text-4xl text-green-600 mb-4 inline-block md:mx-0 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 md:text-right text-center">
                    {t("aboutus.spiritualconnectiontitle")}
                  </h3>
                  <p className="text-muted-foreground md:text-right text-center">
                    {t("aboutus.spiritualconnectiondesc")}
                  </p>
                </motion.div>) : (<motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, }}
                  className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6"
                >
                  <FaHeart className="text-4xl text-green-600 mb-4 md:mx-0 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
                    {t("aboutus.spiritualconnectiontitle")}</h3>
                  <p className="text-muted-foreground md:text-left text-center">
                    {t("aboutus.spiritualconnectiondesc")}</p>

                </motion.div>)}

                {isArabic === "ar" ? (<motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, }}
                  className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6 text-right"
                >
                  <FaBrain className="text-4xl text-green-600 mb-4 inline-block md:mx-0 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 md:text-right text-center">
                    {t("aboutus.mentalclaritytitle")}</h3>
                  <p className="text-muted-foreground md:text-right text-center">
                    {t("aboutus.mentalclaritydesc")}</p>
                </motion.div>) : (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, }}
                    className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6"
                  >
                    <FaBrain className="text-4xl text-green-600 mb-4 md:mx-0 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
                      {t("aboutus.mentalclaritytitle")}</h3>
                    <p className="text-muted-foreground md:text-left text-center">
                      {t("aboutus.mentalclaritydesc")}</p>
                  </motion.div>)
                }

                {isArabic === "ar" ? (<motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, }}
                  className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6 text-right"
                >
                  <FaBalanceScale className="text-4xl text-green-600 mb-4 inline-block md:mx-0 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 md:text-right text-center">
                    {t("aboutus.disciplinetitle")}</h3>
                  <p className="text-muted-foreground md:text-right text-center">
                    {t("aboutus.disciplinedesc")}</p>
                </motion.div>) :
                  (<motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, }}
                    className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6"
                  >
                    <FaBalanceScale className="text-4xl text-green-600 mb-4 md:mx-0 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
                      {t("aboutus.disciplinetitle")}</h3>
                    <p className="text-muted-foreground md:text-left text-center">
                      {t("aboutus.disciplinedesc")}</p>
                  </motion.div>)}



                {isArabic === "ar" ? (<motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, }}
                  className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6 text-right"
                >
                  <FaClock className="text-4xl text-green-600 mb-4 inline-block md:mx-0 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 md:text-right text-center">
                    {t("aboutus.dailystructuretitle")}</h3>
                  <p className="text-muted-foreground md:text-right text-center">
                    {t("aboutus.dailystructuredesc")}</p>
                </motion.div>) :
                  (<motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, }}
                    className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6"
                  >
                    <FaClock className="text-4xl text-green-600 mb-4 md:mx-0 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
                      {t("aboutus.dailystructuretitle")}</h3>
                    <p className="text-muted-foreground md:text-left text-center">
                      {t("aboutus.dailystructuredesc")}</p>
                  </motion.div>)}



                {isArabic === "ar" ? (<motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, }}
                  className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6 text-right"
                >
                  <FaUsers className="text-4xl text-green-600 mb-4 inline-block md:mx-0 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 md:text-right text-center">
                    {t("aboutus.communitybondingtitle")}</h3>
                  <p className="text-muted-foreground md:text-right text-center">
                    {t("aboutus.communitybondingdesc")}</p>
                </motion.div>) :
                  (<motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, }}
                    className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6"
                  >
                    <FaUsers className="text-4xl text-green-600 mb-4 md:mx-0 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
                      {t("aboutus.communitybondingtitle")}</h3>
                    <p className="text-muted-foreground md:text-left text-center">
                      {t("aboutus.communitybondingdesc")}</p>
                  </motion.div>)}

              </div>
            </div>
          </section>

          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-green-600">{t("aboutus.servicetitle")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6 text-center"
                >
                  <FaClock className="text-4xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("aboutus.prayertimestitle")}</h3>
                  <p className="text-muted-foreground">{t("aboutus.prayertimesdesc")}</p>
                </motion.div>


                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6 text-center"
                >
                  <FaCalendar className="text-4xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("aboutus.islamiccalendertitle")}</h3>
                  <p className="text-muted-foreground">{t("aboutus.islamiccalenderdesc")}</p>
                </motion.div>


                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-50 dark:bg-gray-900  rounded-lg shadow-md p-6 text-center"
                >
                  <FaBook className="text-4xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("aboutus.quranrecitationtitle")}</h3>
                  <p className="text-muted-foreground">{t("aboutus.quranrecitationdesc")}</p>
                </motion.div>

              </div>
            </div>
          </section>

        </div>)}
    </>
  )
}

export default AboutUs