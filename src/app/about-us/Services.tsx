"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { motion } from "framer-motion"
import { FaClock, FaCalendar, FaBook, FaUsers } from "react-icons/fa"

const Services = () => {
const {t} = useTranslation("aboutus")
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">{t("aboutus.servicetitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6 text-center"
            >
              <FaClock className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("aboutus.prayertimestitle")}</h3>
              <p className="text-muted-foreground">{t("aboutus.prayertimesdesc")}</p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6 text-center"
            >
              <FaCalendar className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("aboutus.islamiccalendertitle")}</h3>
              <p className="text-muted-foreground">{t("aboutus.islamiccalenderdesc")}</p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6 text-center"
            >
              <FaBook className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("aboutus.quranrecitationtitle")}</h3>
              <p className="text-muted-foreground">{t("aboutus.quranrecitationdesc")}</p>
            </motion.div>
        
        </div>
      </div>
    </section>
  )
}

export default Services

