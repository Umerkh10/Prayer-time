"use client"
import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from "framer-motion"


function page() {
  const { t } = useTranslation("contact")
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formState)
    // Reset form after submission
    setFormState({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 text-center bg-blue-600 text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("contact.title")}</h1>
        <p className="text-xl max-w-2xl mx-auto">{t("contact.desc")}</p>
      </motion.section>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">

      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-bold mb-6 text-blue-600">{t("contact.formtitle")}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 pl-2">
          {t("contact.formname")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("contact.nameplaceholder")}
            value={formState.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg py-2 px-3  shadow-lg "
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium  mb-2 pl-2">
          {t("contact.formemail")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder={t("contact.emailplaceholder")}
            required
            className="mt-1 block w-full rounded-lg py-2 px-3 shadow-lg "
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium  mb-2 pl-2">
          {t("contact.formmessage")}
          </label>
          <textarea
          placeholder={t("contact.messageplaceholder")}
            id="message"
            name="message"
            rows={4}
            value={formState.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg py-2 px-3 shadow-lg  "
          ></textarea>
        </div>
        <div>
          <button type="submit"className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          {t("contact.formbutton")}
          </button>
        </div>
      </form>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-blue-600">{t("contact.infotitle")}</h2>
 
      <div className="flex items-start space-x-3">
        <FaPhone className="text-blue-600 text-xl mt-1" />
        <div>
          <h3 className="font-semibold">{t("contact.infophone")}</h3>
          <p className="">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <FaEnvelope className="text-blue-600 text-xl mt-1" />
        <div>
          <h3 className="font-semibold">{t("contact.formemail")}</h3>
          <p className="">contact@globalsalah.com</p>
        </div>
      </div>

    </motion.div>
      </div>


    </div>
  )
}

export default page