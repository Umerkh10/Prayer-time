"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { FaGlobe, FaHeart, FaPrayingHands, FaBrain, FaBalanceScale, FaClock, FaUsers, FaCalendar, FaBook } from "react-icons/fa"
import { useTranslation } from '@/hooks/useTranslation'
import { usePathname } from 'next/navigation'
import { Book, BookOpen, Calendar, FileText, Globe, Heart, Loader2, MessageSquare, Tv } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

function AboutUs() {
  const pathname = usePathname();
  const { t } = useTranslation("aboutus")
  const isArabic = pathname.split("/")[1]
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (

    <>
      {isLoading ? <div className='px-8 mt-4'>
        <Skeleton className="h-80 w-full" />
        <Skeleton className="mt-3 h-72 rounded-lg w-full" />
        <div className='flex items-center justify-center gap-2 mt-4'>
          <Skeleton className="h-screen w-full" />
        </div>
      </div> :
        (<div className="min-h-screen bg-background">
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('aboutus.title')}
                </h1>
                <div className="w-24 h-1 bg-[#f5d792] mx-auto mb-6"></div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className=" max-w-3xl mx-auto text-center leading-relaxed"
              >
     {t('aboutus.desc')}
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
              <h2 className="text-3xl font-bold mb-4">{t('aboutus.whowetitle')}</h2>
              <div className="w-16 h-1 bg-[#2e855e] mb-6"></div>
              <p className="text-sm leading-relaxed">
              {t('aboutus.whoweparagraph')}
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
                <h2 className="text-3xl font-bold mb-4">{t('aboutus.visiontitle')}</h2>
                <div className="w-16 h-1 bg-[#2e855e] mb-6"></div>
                <p className="text-sm leading-relaxed">
                {t('aboutus.visionparagraph')}

                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <h2 className="text-3xl font-bold mb-4"> {t('aboutus.mission')}</h2>
                <div className="w-16 h-1 bg-[#2e855e] mb-6"></div>
                <p className="text-sm leading-relaxed">
                {t('aboutus.missionparagraph')}
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
              <h2 className="text-3xl font-bold mb-4"> {t('aboutus.storytitle')} </h2>
              <div className="w-16 h-1 bg-[#2e855e] mb-6"></div>
              <p className="text-sm leading-relaxed">
              {t('aboutus.storyparagraph')}

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
              <h2 className="text-3xl font-bold text-center mb-12"> {t('aboutus.whatwetitle')} </h2>

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
                    <h3 className="text-xl font-medium">{t('aboutus.feature1title')} </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                  {t('aboutus.feature1desc')}
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
                    <h3 className="text-xl font-medium">{t('aboutus.feature2title')} </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                  {t('aboutus.feature2desc')}
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
                    <h3 className="text-xl font-medium">{t('aboutus.feature3title')} </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                  {t('aboutus.feature3desc')}
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
                    <h3 className="text-xl font-medium">{t('aboutus.feature4title')} </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                  {t('aboutus.feature4desc')}
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
                    <h3 className="text-xl font-medium">{t('aboutus.feature5title')} </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                  {t('aboutus.feature5desc')}
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
                    <h3 className="text-xl font-medium">{t('aboutus.feature6title')} </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                  {t('aboutus.feature6desc')}
                  </p>
                </motion.div>


            
              </div>
            </motion.div>

            <h3 className="text-3xl font-bold text-center mb-12">{t('aboutus.stayupdatedtitle')}</h3>

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
                  <h4 className="text-xl font-medium"> {t('aboutus.feat1title')} </h4>
                </div>
                <p className="text-muted-foreground text-sm">
                {t('aboutus.feat1desc')}
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
                  <h3 className="text-xl font-medium"> {t('aboutus.feat2title')} </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                {t('aboutus.feat2desc')}
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
                  <h3 className="text-xl font-medium"> {t('aboutus.feat3title')} </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                {t('aboutus.feat3desc')}
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
                  <h3 className="text-xl font-medium"> {t('aboutus.feat4title')} </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                {t('aboutus.feat4desc')}
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
                  <h3 className="text-xl font-medium"> {t('aboutus.feat5title')} </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                {t('aboutus.feat5desc')}
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
                  <h3 className="text-xl font-medium"> {t('aboutus.feat6title')} </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                {t('aboutus.feat6desc')}
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
                  <h3 className="text-xl font-medium"> {t('aboutus.feat7title')} </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                {t('aboutus.feat7desc')}
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
                  <h3 className="text-xl font-medium"> {t('aboutus.feat8title')} </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                {t('aboutus.feat8desc')}
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
              <h2 className="text-3xl font-bold text-center mb-12"> {t('aboutus.whychooseus')} </h2>

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
                  <h3 className="text-xl font-medium mb-2"> {t('aboutus.trust')} </h3>
                  <p className="text-muted-foreground text-sm">
                  {t('aboutus.trustdesc')}
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
                  <h3 className="text-xl font-medium mb-2"> {t('aboutus.available')} </h3>
                  <p className="text-muted-foreground text-sm">
                  {t('aboutus.availabledesc')}
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
                  <h3 className="text-xl font-medium mb-2"> {t('aboutus.relevant')} </h3>
                  <p className="text-muted-foreground text-sm">
                  {t('aboutus.relevantdesc')}
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
              <h2 className="text-3xl font-bold mb-4"> {t('aboutus.community')} </h2>
              <p className="text-sm mb-6 max-w-3xl mx-auto">
              {t('aboutus.communitydesc')}
              </p>

            </motion.div>
          </div>
        </div>
        )}
    </>
  )
}

export default AboutUs