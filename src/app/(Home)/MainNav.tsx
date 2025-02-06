"use client"

import LanguageSwitcher from "@/components/ui/LanguageSwitcher"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from '@/lib/useTranslation'

const links = [
  { href: "/", key: "home" },
  { href: "./#namaz-time", key: "namazTime" },
  { href: "/countries", key: "countries" },
  { href: "/islamic-calender", key: "islamicCalender" },
  { href: "/duas", key: "duas" },
  { href: "/about-us", key: "aboutUs" },
  { href: "/contact-us", key: "contactUs" },
]

export function MainNav() {
  const pathname = usePathname()
  const { t } = useTranslation("navigation")

  return (
    <nav className="hidden space-x-6 md:flex items-center">
      {links.map(({ href, key }) => {
        const isActive = pathname === href
        return (
            <Link
            key={href}
            href={href}
            className="relative px-1 py-2 text-sm font-medium text-white transition-colors hover:text-gray-200"
            >
            {t(`navigation.${key}`)} {/* Call the t function from the object */}
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
      <LanguageSwitcher />
    </nav>
  )
}
