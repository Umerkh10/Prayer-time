"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { motion } from "framer-motion"

const ContactHero = () => {
    const { t } = useTranslation("contact")
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 text-center bg-blue-600 text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("contact.title")}</h1>
      <p className="text-xl max-w-2xl mx-auto">{t("contact.desc")}</p>
    </motion.section>
  )
}

export default ContactHero

