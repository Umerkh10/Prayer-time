"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { motion } from "framer-motion"
import { FaHeart, FaBrain, FaBalanceScale, FaClock, FaUsers } from "react-icons/fa"

const PrayerBenefits = () => {
    const {t} = useTranslation("aboutus")
  


  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">{t("aboutus.benefittitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <FaHeart className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
                {t("aboutus.spiritualconnectiontitle")}</h3>
              <p className="text-muted-foreground md:text-left text-center">
                {t("aboutus.spiritualconnectiondesc")}</p>

            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <FaBrain className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
                {t("aboutus.mentalclaritytitle")}</h3>
              <p className="text-muted-foreground md:text-left text-center">
                {t("aboutus.mentalclaritydesc")}</p>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <FaBalanceScale className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
                {t("aboutus.disciplinetitle")}</h3>
              <p className="text-muted-foreground md:text-left text-center">
              {t("aboutus.disciplinedesc")}</p>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <FaClock className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
                {t("aboutus.dailystructuretitle")}</h3>
              <p className="text-muted-foreground md:text-left text-center">
              {t("aboutus.dailystructuredesc")}</p>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <FaUsers className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
                {t("aboutus.communitybondingtitle")}</h3>
              <p className="text-muted-foreground md:text-left text-center">
              {t("aboutus.communitybondingdesc")}</p>
            </motion.div>

        </div>
      </div>
    </section>
  )
}

export default PrayerBenefits

