"use client"

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-28 text-center bg-blue-600 text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">About Global Salaah</h1>
      <p className="text-xl max-w-2xl mx-auto">Connecting hearts through prayer, transcending borders with faith.</p>
    </motion.section>
  )
}

export default Hero

