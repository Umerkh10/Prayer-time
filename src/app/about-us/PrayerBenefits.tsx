"use client"

import { motion } from "framer-motion"
import { FaHeart, FaBrain, FaBalanceScale, FaClock, FaUsers } from "react-icons/fa"

const PrayerBenefits = () => {
  const benefits = [
    { icon: FaHeart, title: "Spiritual Connection", description: "Strengthens your relationship with Allah" },
    { icon: FaBrain, title: "Mental Clarity", description: "Helps in reducing stress and anxiety" },
    { icon: FaBalanceScale, title: "Discipline", description: "Builds self-control and time management skills" },
    { icon: FaClock, title: "Daily Structure", description: "Provides a beneficial routine to your day" },
    { icon: FaUsers, title: "Community Bonding", description: "Encourages unity among Muslims" },
  ]

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Benefits of Prayer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <benefit.icon className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">{benefit.title}</h3>
              <p className="text-muted-foreground md:text-left text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrayerBenefits

