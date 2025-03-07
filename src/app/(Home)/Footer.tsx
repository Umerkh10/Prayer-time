"use client"
import { useTranslation } from '@/hooks/useTranslation'
import { checkIsPathnameIsEqualToLang, urlSplitter } from '@/lib'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Footer() {
    const pathname = usePathname()
    const currentLang = urlSplitter(pathname)
  
    
    const { t } = useTranslation("Footer")
    const isLang = checkIsPathnameIsEqualToLang(currentLang)
  
  return (
    <footer className="mt-5 border-t border-muted-foreground bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold"> {isLang ? t("Footer.footertitle") : "Global Salah"} </h2>
            <p className="mt-2 text-sm text-muted-foreground ">
            {isLang ? t("Footer.footerdesc") : "Global Salah is a website dedicated to providing accurate and convenient Islamic prayer time information to Muslims around the world."}  
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-blue-700 dark:text-blue-400"> 
              {isLang ? t("Footer.quicklinkstitle") : "Quick links"}  </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li > <Link href={isLang ? `/${currentLang}` : "/"} className=" hover:text-blue-700 dark:hover:text-blue-400 capitalize"> {isLang ? t("navigation.home") : "home"}  </Link></li>
              <li > <Link href="./#namaz-time" className=" hover:text-blue-700 dark:hover:text-blue-400 capitalize">
              {isLang ? t("navigation.namazTime") : "namaz Time"}  </Link></li>

              <li > <Link href={isLang ? `/${currentLang}/islamic-calender` : "/islamic-calender"} className=" hover:text-blue-700 dark:hover:text-blue-400 capitalize">
              {isLang ? t("navigation.islamicCalender") : "islamic Calender"}  </Link></li>

              <li > <Link href={isLang ? `/${currentLang}/duas` : "/duas"} className=" hover:text-blue-700 dark:hover:text-blue-400 capitalize">{isLang ? t("navigation.duas") : "duas"} </Link></li>
        
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-blue-700 dark:text-blue-400">
            {isLang ? t("Footer.companytitle") : "Company"} </h3>
            <ul className="mt-4 space-y-3 text-sm">
                <li ><Link href={isLang ? `/${currentLang}/countries` : "/countries"} className=" hover:text-blue-700 dark:hover:text-blue-400 capitalize">{isLang ? t("navigation.countries") : "countries"}</Link></li>

                <li><Link href={isLang ? `/${currentLang}/about-us` : "/about-us"} className=" hover:text-blue-700 dark:hover:text-blue-400 capitalize"> {isLang ? t("navigation.aboutUs") : "about Us"} </Link></li>

                <li><Link href={isLang ? `/${currentLang}/contact-us` : "/contact-us"} className=" hover:text-blue-700 dark:hover:text-blue-400">{isLang ? t("navigation.contactUs") : "contact Us"} </Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-blue-700 dark:text-blue-400">
            {isLang ? t("Footer.otherlinktitle") : "Other"} </h3>
            <ul className="mt-4 space-y-3 text-sm">
                <li ><Link href={isLang ? `/${currentLang}/terms-and-conditions` : "/terms-and-conditions"} className=" hover:text-blue-700 dark:hover:text-blue-400"> {isLang ? t("Footer.termslink") : "Terms and conditions"} 
                </Link>
                </li>
                <li ><Link href={isLang ? `/${currentLang}/privacy-policy` : "/privacy-policy"} className=" hover:text-blue-700 dark:hover:text-blue-400">{isLang ? t("Footer.privacylink") : "Privacy policy"} </Link>
                </li>
 
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
            {isLang ? t("Footer.rightsdesc") : "All Rights Reserved © 2025 Global Salah"}
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer