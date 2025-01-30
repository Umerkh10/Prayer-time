"use client"

import { motion } from "framer-motion"

const ContactHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 text-center bg-blue-600 text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
      <p className="text-xl max-w-2xl mx-auto">
        Get in touch with Global Salaah. We're here to answer your questions and listen to your feedback.
      </p>
    </motion.section>
  )
}

export default ContactHero

