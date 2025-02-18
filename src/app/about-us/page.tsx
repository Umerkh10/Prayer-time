"use client"
import React from 'react'
import { motion } from "framer-motion"
import { FaGlobe, FaHeart, FaPrayingHands, FaBrain, FaBalanceScale, FaClock, FaUsers, FaCalendar, FaBook } from "react-icons/fa"
import { useTranslation } from '@/hooks/useTranslation'

function page() {
    const {t} = useTranslation("aboutus")
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-28 text-center bg-blue-600 text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Global Salah</h1>
        <p className="text-xl max-w-2xl mx-auto">Connecting hearts through prayer, transcending borders with faith.</p>
      </motion.section>

 <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <FaGlobe className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Connecting Muslims worldwide</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="text-center"
            >
              <FaHeart className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">Fostering a sense of belonging</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="text-center"
            >
              <FaPrayingHands className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Spiritual Growth</h3>
              <p className="text-muted-foreground">Encouraging regular prayer</p>
            </motion.div>
        
        </div>
      </div>
    </section>




   <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Benefits of Prayer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <FaHeart className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
              Spiritual Connection</h3>
              <p className="text-muted-foreground md:text-left text-center">
              Strengthens your relationship with Allah</p>

            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <FaBrain className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
              Mental Clarity</h3>
              <p className="text-muted-foreground md:text-left text-center">
              Helps in reducing stress and anxiety</p>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <FaBalanceScale className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
              Discipline</h3>
              <p className="text-muted-foreground md:text-left text-center">
              Builds self-control and time management skills</p>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <FaClock className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
              Daily Structure</h3>
              <p className="text-muted-foreground md:text-left text-center">
              Provides a beneficial routine to your day</p>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,}}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6"
            >
              <FaUsers className="text-4xl text-blue-600 mb-4 md:mx-0 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 md:text-left text-center">
              Community Bonding</h3>
              <p className="text-muted-foreground md:text-left text-center">
              Encourages unity among Muslims</p>
            </motion.div>

        </div>
      </div>
    </section>



 <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6 text-center"
            >
              <FaClock className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prayer Times</h3>
              <p className="text-muted-foreground">Accurate prayer times for your location</p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6 text-center"
            >
              <FaCalendar className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Islamic Calender</h3>
              <p className="text-muted-foreground">Know your hijri date according to the gregorian date</p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md p-6 text-center"
            >
              <FaBook className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quran Recitation</h3>
              <p className="text-muted-foreground">Listen to beautiful Quran recitations</p>
            </motion.div>
        
        </div>
      </div>
    </section>



    </div>
  )
}

export default page