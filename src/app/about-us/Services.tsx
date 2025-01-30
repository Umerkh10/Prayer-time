"use client"

import { motion } from "framer-motion"
import { FaClock, FaCalendar, FaBook, FaUsers } from "react-icons/fa"

const Services = () => {
  const services = [
    { icon: FaClock, title: "Prayer Times", description: "Accurate prayer times for your location" },
    { icon: FaCalendar, title: "Islamic Calender", description: "Know your hijri date according to the gregorian date" },
    { icon: FaBook, title: "Quran Recitation", description: "Listen to beautiful Quran recitations" },

  ]

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6 text-center"
            >
              <service.icon className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

