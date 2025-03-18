"use client"

import LanguageSwitcher from "@/components/ui/LanguageSwitcher"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from '@/hooks/useTranslation'
import { checkIsPathnameIsEqualToLang, urlSplitter } from "@/lib"



export function MainNav() {
  const pathname = usePathname()
  const currentLang = urlSplitter(pathname)

  
  const { t } = useTranslation("navigation")
  const isLang = checkIsPathnameIsEqualToLang(currentLang)

  const links = [
    { href: isLang ? `/${currentLang}` : "/", key: "home" },
    { href: isLang ? `/${currentLang}/countries` : "/countries", key: "countries" },
    { href: isLang ? `/${currentLang}/islamic-calender` : "/islamic-calender", key: "islamicCalender" },
    { href: isLang ? `/${currentLang}/duas` : "/duas", key: "duas" },
    { href: isLang ? `/${currentLang}/makkah-tv` : "/makkah-tv", key: "makkahTv" },
    { href: isLang ? `/${currentLang}/madina-tv` : "/madina-tv", key: "madinaTv" },
  ]

  return (
    <nav className="hidden space-x-6 md:flex items-center">
      {links.map(({ href, key }) => {
        const isActive = pathname === href
        return (
            <Link
            key={href}
            href={href}
            className="relative px-1 py-2 text-xs font-medium text-white transition-colors hover:text-gray-200 capitalize"
            >
            {isLang ? t(`navigation.${key}`) : key}
            {isActive && (
              <motion.div
              layoutId="activeNav"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            </Link>
        )
      })}
    </nav>
  )
}
