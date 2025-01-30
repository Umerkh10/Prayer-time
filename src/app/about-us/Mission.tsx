"use client"

import { motion } from "framer-motion"
import { FaGlobe, FaHeart, FaPrayingHands } from "react-icons/fa"

const Mission = () => {
  const items = [
    { icon: FaGlobe, title: "Global Reach", description: "Connecting Muslims worldwide" },
    { icon: FaHeart, title: "Community", description: "Fostering a sense of belonging" },
    { icon: FaPrayingHands, title: "Spiritual Growth", description: "Encouraging regular prayer" },
  ]

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <item.icon className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission

