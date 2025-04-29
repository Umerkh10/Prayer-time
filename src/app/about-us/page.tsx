"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Book, BookOpen, Calendar, FileText, Globe, Heart, Loader2, MessageSquare, Tv } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

function page() {
    const {t} = useTranslation("aboutus")
  return (
    <div className="min-h-screen bg-background">
    {/* Hero Section */}
    <div className="relative bg-gradient-to-r from-[#104e36] to-[#1e7954] text-white">
      <div className="absolute inset-0 opacity-10">
        <div style={{backgroundImage:'url(/about-bg.webp)'}} className="w-full h-full bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unite Ummah Under One Platform
          </h1>
          <div className="w-24 h-1 bg-[#f5d792] mx-auto mb-6"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" max-w-3xl mx-auto text-center leading-relaxed"
        >
   Global Salah is your digital partner that aims to strengthen the Muslim community globally. Our main goal is to inspire, educate, and empower Muslim communities around the world. Moreover, from the bottom of our hearts, we need you to stay consistent with your Islamic obligations. We are rooted in the core value of Islam while also knowing how to build with modern-day needs. So, we are your spiritual companion in the world where your technology meets your basic needs. Basically, we are here to connect you with your creator, no matter whether you are at home or on the go.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>

    <div className="container px-4 py-12 mx-auto max-w-6xl">
      {/* Who We Are Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <div className="w-16 h-1 bg-[#2e855e] mb-6"></div>
        <p className="text-sm leading-relaxed">
        Our name says it all. We are Global, so we are there for different countries, their time zones, and their cultures. Also, we are Salah, so we mainly focus on the worship that unites every Muslim worldwide with their daily five-day prayer. Moreover, we also believe that prayer doesn’t bind you; it is the way for you to connect directly with your God. So, we are here to connect Muslims from everywhere across the world.
        </p>
      </motion.div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <div className="w-16 h-1 bg-[#2e855e] mb-6"></div>
          <p className="text-sm leading-relaxed">
            Our vision is to awaken the Ummah so that every Muslim, whether in the biggest cities or remote villages or belonging to non-Muslim society, can get access to all of Islam’s resources. This will make our site more accurate, help the students offer prayer five times a day, and inspire Muslims to strengthen their faith.
            In a world with more noise and distractions due to digital overloading, Global Salah aims to be the spiritual partner. We aim to become a place for all visitors to get their minds clear and calm and know their purpose in getting into this world. However, our main vision is to transform and bring all Muslims closer to Allah. We help different Muslims rebuild their prayer habit and inspire them through our consistent support to deliver the message of Islam.

          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <div className="w-16 h-1 bg-[#2e855e] mb-6"></div>
          <p className="text-sm leading-relaxed">
            Our mission is simple and powerful: to support the daily needs of every Muslim’s spiritual journey. Moreover, we understand the importance of Salah in Muslim lives and are committed to providing everything to keep you updated. Our main goal is to help individuals stay focused on their prayer and feel that they have a direct connection with God. So, no matter what the past was, we strengthen the present and future journey.
          </p>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <div className="w-16 h-1 bg-[#2e855e] mb-6"></div>
        <p className="text-sm leading-relaxed">
          Global Salah was founded to meet the unique needs of Muslims in the modern world. As technology rises daily, we know how important it is to merge the fait with innovation across Muslim communities globally. We started by providing namaz timings and calculators, but our vision is far beyond that.
          Now, we offer everything from Qibla finders to Zakat calculators to enhance individuals’ everyday practice. Moreover, our commitment to customer satisfaction has made us renowned worldwide. With our main focus on innovation, we are growing as a leading solution for Muslims who don’t want to lose their faith despite their busy schedules.

        </p>
      </motion.div>

      {/* What We Offer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Prayer Times */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-[#2e855e]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium">Accurate Global Prayer Times</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              At Global Salah, we ensure quick support to our companions to make their worship experience even better. So, we provide accurate prayer timings for different cities and regions throughout the world. We also make it according to different Fiqas so they can follow their own teachings. However, with Global Salah, you will never miss your prayer again, even when you are traveling.
            </p>
          </motion.div>

          {/* Qibla Finder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-[#2e855e]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium">Namaz Calculator</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Many individuals miss their prayers and don’t know how to pray them later and how many are left behind. So, to solve this, we provide an accurate Namaz calculator so you can use it in real time.
            </p>
          </motion.div>

          {/* Daily Hadiths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-[#2e855e]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium">Qibla Finders</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We solve the issue of finding the right direction during prayer. So, if you don’t know, don’t miss your prayer. Get the accurate Qibla finder to pray easily. This tool is helpful whether you are at home, at work, or traveling.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-[#2e855e]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium">Zakat Calculator</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We include a Zakat calculator to help the Islamic followers fulfill their responsibilities of Zakat, which rely on their assets and have to give a specific amount called Nisab. The main goal of this calculator is to make the calculation of Zakat easier and more accessible, especially with higher amounts.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-[#2e855e]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium">Ramzan Calculator</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Ramadan calculators are included to help Muslims get the precise timings of Ramadan. It depends on the Lunar calendar, so it is difficult to pinpoint the exact start and end dates. But, we use advanced technology to make the Ramadan calculator as appropriate as possible.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-[#2e855e]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium">Inheritance Calculator</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We include the Islamic inheritance calculator to simplify complex calculations for distributing wealth according to Islamic Shariah law. The main aim is to ensure a fair distribution of wealth as guided by the Quran and Sunnah.
            </p>
          </motion.div>


      
        </div>
      </motion.div>

      <h3 className="text-3xl font-bold text-center mb-12">Stay Updated</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Hijri Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
        >
          <div className="flex items-center mb-4">
            <div className="mr-4 text-[#2e855e]">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium">Hijri Date- Islamic Calendar</h4>
          </div>
          <p className="text-muted-foreground text-sm">
            We provide this calendar to help Muslims identify marked events and historical dates. Moreover, a lunar calendar helps them understand the moon cycles and important dates of Islamic holidays, including Ramadan, Eit-al-Fitr, Eid-al-Adha, and Hajj.
          </p>
        </motion.div>

        {/* Live TV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
        >
          <div className="flex items-center mb-4">
            <div className="mr-4 text-[#2e855e]">
              <Tv className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium">Live Tv Makkah and Madina Channels</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            Live Makkah and Madina channels are included because they remain close to the heart of every Muslim. We include this that it is even far from individuals who remain close to them and offer their prayers.
          </p>
        </motion.div>

        {/* Daily Hadiths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
        >
          <div className="flex items-center mb-4">
            <div className="mr-4 text-[#2e855e]">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium">Daily Hadiths</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            We add daily hadiths to help people read daily updates from our website. Moreover, they also get daily guidance and inspiration from hadiths. Our main aim is to encourage the daily lives of our followers and also let them remember it.
          </p>
        </motion.div>

        {/* Forum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
        >
          <div className="flex items-center mb-4">
            <div className="mr-4 text-[#2e855e]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium">Forum reply</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            We believe that Islam is for everyone, and everyone should have access to it. So, we become the digital platform to share your concerns and get advice from general people and their perspectives. Moreover, we also have educated moderators to check each and every answer that people post.
          </p>
        </motion.div>

        {/* Duas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
        >
          <div className="flex items-center mb-4">
            <div className="mr-4 text-[#2e855e]">
              <Book className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium">Duas </h4>
          </div>
          <p className="text-muted-foreground text-sm">
            Duas are included so that the believers worship and get their appropriate dua according to their current situation. The main aim is to communicate directly between Allah and the people. So, it is a powerful way to help and seek mercy from God.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
        >
          <div className="flex items-center mb-4">
            <div className="mr-4 text-[#2e855e]">
              <Book className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium">Blogs </h4>
          </div>
          <p className="text-muted-foreground text-sm">
            We believe that knowledge is the key to understanding your religion and enhancing your faith in God. So, we add blogs with different content to provide current insights and experiences on different topics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
        >
          <div className="flex items-center mb-4">
            <div className="mr-4 text-[#2e855e]">
              <Book className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium">99 Names Of Allah
            </h4>
          </div>
          <p className="text-muted-foreground text-sm">
            The 99 names of Allah, that is, Asma ul Husna, are included to enhance the connection with Allah. Believers can get access to video that makes them more attracted to God and make their hearts clearer than ever.
          </p>
        </motion.div>

        {/* E-Books */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border rounded-xl p-6 hover:shadow-md transition-shadow bg-card"
        >
          <div className="flex items-center mb-4">
            <div className="mr-4 text-[#2e855e]">
              <FileText className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium">E-Books</h4>
          </div>
          <p className="text-muted-foreground text-sm">
            We provide learning resources to help adults and children access Islam knowledge. Our E-books are designed to be informative and supportive of those who need in-depth knowledge. Moreover, we also publish Islamic content to educate people and help them uplift their faith in a way that reflects the true image of our deen. Besides this, we also bring traditional values along with modern lives by providing E-books for youth.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 mt-10"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Global Salah?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trustworthy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Heart className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-medium mb-2">Trustworthy</h3>
            <p className="text-muted-foreground text-sm">
              We prove to be trustworthy for our visitors because our website is backed by Islamic scholars, mentors, developers, and accurate calculators.
            </p>
          </motion.div>

          {/* Global Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Globe className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-medium mb-2">Global Availability</h3>
            <p className="text-muted-foreground text-sm">
              We are serving worldwide to provide solutions to every Muslim, no matter where they belong.
            </p>
          </motion.div>

          {/* Relevant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <BookOpen className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-medium mb-2">Relevant</h3>
            <p className="text-muted-foreground text-sm">
              We include the content that is authentic and also shows the real life struggles and questions that are facing by Muslims today. Also, you can get the answers if you have the same query.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-primary/5 rounded-2xl p-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Join the Global Salah Community Today!</h2>
        <p className="text-sm mb-6 max-w-3xl mx-auto">
          Everyday life brings a new opportunity for you to connect with your God. At Global Salah, we are dedicated to providing you with support and are honored to welcome you to be a part of this journey to connect with Muslims everywhere. So, whether you need help remembering your Islamic teachings or need motivation to stay firm with your faith, we are always there to help you.
        </p>

      </motion.div>
    </div>
  </div>
  )}

export default page