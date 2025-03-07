"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { motion } from "framer-motion"

export default function TermsPage() {
    const { t } = useTranslation("terms")
  return (
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">{t("terms.title")}</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-background shadow-md rounded-lg p-8"
        >

          <h2 className="text-2xl font-semibold mb-4">{t("terms.subheading_1")}</h2>
          <p className="mb-4">{t("terms.subparagraph_1")}</p>

          <h2 className="text-2xl font-semibold mb-4">{t("terms.subheading_2")}</h2>
          <p className="mb-4">{t("terms.subparagraph_2")}</p>

          <h2 className="text-2xl font-semibold mb-4">{t("terms.subheading_3")}</h2>
          <p className="mb-4">
            {t("terms.subparagraph_3")}
          </p>

          <h2 className="text-2xl font-semibold mb-4">{t("terms.subheading_4")}</h2>
          <p className="mb-4">
            {t("terms.subparagraph_4")}
          </p>

          <h2 className="text-2xl font-semibold mb-4">{t("terms.subheading_5")}</h2>
          <p className="mb-4">
            {t("terms.subparagraph_5")}
          </p>

          <h2 className="text-2xl font-semibold mb-4">{t("terms.subheading_6")}</h2>
          <p className="mb-4">
            {t("terms.subparagraph_6")}
          </p>

          <h2 className="text-2xl font-semibold mb-4">{t("terms.subheading_7")}</h2>
          <p className="mb-4">
            {t("terms.subparagraph_7")}
          </p>

          <h2 className="text-2xl font-semibold mb-4">{t("terms.subheading_8")}</h2>
          <p>{t("terms.subparagraph_8")}</p>
        </motion.div>
      </main>
    </div>


  )
}

