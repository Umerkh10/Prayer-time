"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { useTranslation } from "@/hooks/useTranslation"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

const PrivacyContent = () => {
  const { t } = useTranslation("privacy")
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
      (<div className="min-h-screen ">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-500 mb-8 text-center">{t("privacy.title")}</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-background shadow-md rounded-lg p-8"
        >

          <h2 className="text-2xl font-semibold mb-4">{t("privacy.subheading_1")}</h2>
          <p className="mb-4">{t("privacy.subparagraph_1")}</p>

          <h2 className="text-2xl font-semibold mb-4">{t("privacy.subheading_2")}</h2>
          <p className="mb-4">{t("privacy.subparagraph_2")}</p>

          <h2 className="text-2xl font-semibold mb-4">{t("privacy.subheading_3")}</h2>
          <p className="mb-4">{t("privacy.subparagraph_3")}</p>

          <h2 className="text-2xl font-semibold mb-4">{t("privacy.subheading_4")}</h2>
          <p className="mb-4"> {t("privacy.subparagraph_4")}</p>

          <h2 className="text-2xl font-semibold mb-4">{t("privacy.subheading_5")}</h2>
          <p className="mb-4">{t("privacy.subparagraph_5")}</p>

          <h2 className="text-2xl font-semibold mb-4">{t("privacy.subheading_6")}</h2>
          <p className="mb-4">{t("privacy.subparagraph_6")} </p>

          <h2 className="text-2xl font-semibold mb-4">{t("privacy.subheading_7")}</h2>
          <p>{t("privacy.subparagraph_7")}</p>
        </motion.div>
      </main>
    </div>)}
      </>

  )
}

export default PrivacyContent

