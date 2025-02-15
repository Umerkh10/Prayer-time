"use client"

import { motion } from "framer-motion"
import { FaGlobe, FaHeart, FaPrayingHands } from "react-icons/fa"
import { useTranslation } from "../../hooks/useTranslation"

const Mission = () => {
  const {t} = useTranslation("aboutus")

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">{t("aboutus.mission")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <FaGlobe className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("aboutus.globaltitle")}</h3>
              <p className="text-muted-foreground">{t("aboutus.globaldesc")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="text-center"
            >
              <FaHeart className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("aboutus.communitytitle")}</h3>
              <p className="text-muted-foreground">{t("aboutus.communitydesc")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="text-center"
            >
              <FaPrayingHands className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("aboutus.spiritualtitle")}</h3>
              <p className="text-muted-foreground">{t("aboutus.spiritualdesc")}</p>
            </motion.div>
        
        </div>
      </div>
    </section>
  )
}

export default Mission

