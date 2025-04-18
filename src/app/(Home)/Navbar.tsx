"use client"
import { motion } from "framer-motion"
import { ModeToggle } from '@/components/ui/mode-toggle'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'
import { useTranslation } from "@/hooks/useTranslation"
import { usePathname } from "next/navigation"
import { checkIsPathnameIsEqualToLang, urlSplitter } from "@/lib"
import LanguageSwitcher from "@/components/ui/LanguageSwitcher"
import { SidebarButton } from "@/components/sidebar-button"

function Navbar() {
  const { t } = useTranslation("navigation")
  const pathname = usePathname()
  const currentLang = urlSplitter(pathname)

  const isLang = checkIsPathnameIsEqualToLang(currentLang)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-[9999999999] border-b border-white/10 bg-[#003422] backdrop-blur dark:supports-[backdrop-filter]:bg-[#000717]"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href={isLang ? `/${currentLang}` : "/"} className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded">
              <Image
                src="/logo.webp"
                alt="Athan Pro Logo"
                width={160}
                height={160}
                priority
              />
            </div>
            <span className="text-lg font-semibold text-white"> {isLang ? t("navigation.title") : "Global Salah"} </span>
          </Link>
        </div>

        <MainNav />
   
        <div className="flex items-center md:gap-5 gap-2 ">
        <div className="lg:block hidden">
        <SidebarButton />
        </div>
          <LanguageSwitcher />
          <ModeToggle />

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar