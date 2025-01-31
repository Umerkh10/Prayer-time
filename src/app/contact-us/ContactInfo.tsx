"use client"

import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Contact Information</h2>
      <div className="flex items-start space-x-3">
        <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
        <div>
          <h3 className="font-semibold">Address</h3>
          <p className="">123 Prayer Street, Faith City, FC 12345</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <FaPhone className="text-blue-600 text-xl mt-1" />
        <div>
          <h3 className="font-semibold">Phone</h3>
          <p className="">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <FaEnvelope className="text-blue-600 text-xl mt-1" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="">contact@globalsalah.com</p>
        </div>
      </div>

    </motion.div>
  )
}

export default ContactInfo

