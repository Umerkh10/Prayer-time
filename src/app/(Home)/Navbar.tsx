"use client"
import { motion } from "framer-motion"
import { ModeToggle } from '@/components/ui/mode-toggle'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'
import { useTranslation } from "@/hooks/useTranslation"
import { usePathname } from "next/navigation"
import { checkIsPathnameIsEqualToLang, urlSplitter } from "@/lib"
import LanguageSwitcher from "@/components/ui/LanguageSwitcher"
import { SidebarButton } from "@/components/sidebar-button"
import { Skeleton } from "@/components/ui/skeleton"
import { SearchButton } from "@/components/ui/search-button"

function Navbar() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation("navigation")
  const pathname = usePathname()
  const currentLang = urlSplitter(pathname)

  const isLang = checkIsPathnameIsEqualToLang(currentLang)


  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [])

  return (


    <>
      {isLoading ? <div className='px-8 mt-4'>
        <Skeleton className="h-20 w-full" />
      </div> :
        (<motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="sticky top-0 z-[9999999999] border-b border-white/10 bg-[#003422] backdrop-blur dark:supports-[backdrop-filter]:bg-[#000717]"
        >
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Link href={isLang ? `/${currentLang}` : "/"} className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                  <img
                    src="/global-salah-logo.png"
                    alt="global"
                    width={260}
                    height={230}
                  />
                </div>
                <span className="text-lg font-semibold text-white"> {isLang ? t("navigation.title") : "Global Salah"} </span>
              </Link>
            </div>

            <MainNav />

            <div className="flex items-center md:gap-5 gap-2 ">
              {/* <SearchButton /> */}
              <div className="lg:flex gap-2 hidden">
                <SidebarButton />
              </div>
              <LanguageSwitcher />
              <ModeToggle />

              <div className="md:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </motion.header>)}
    </>
  )
}

export default Navbar