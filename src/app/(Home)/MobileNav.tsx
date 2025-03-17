"use client"

import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTranslation } from '@/hooks/useTranslation'
import { usePathname } from 'next/navigation'
import { checkIsPathnameIsEqualToLang, urlSplitter } from '@/lib'

export function MobileNav() {
  const [open, setOpen] = useState(false)
const pathname = usePathname()
  const currentLang = urlSplitter(pathname)

  
  const { t } = useTranslation("navigation")
  const isLang = checkIsPathnameIsEqualToLang(currentLang)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="px-2 text-white hover:bg-white/10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 bg-[#003422] p-0">
        <ScrollArea className="h-full px-6">
          <div className="mt-6 space-y-6">
            <Link
              href={isLang ? `/${currentLang}` : "/"}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200 capitalize"
            >
           {isLang ? t("navigation.home") : "Home"}
            </Link>

            <Link
              href={isLang ? `/${currentLang}/countries` : "/countries"}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200 capitalize"
            >
             {isLang ? t("navigation.countries") : "countries"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/islamic-calender` : "/islamic-calender"}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200 capitalize"
            >
              {isLang ? t("navigation.islamicCalender") : "islamicCalender"}  
            </Link>
            <Link
              href={isLang ? `/${currentLang}/duas` : "/duas"}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200 capitalize"
            >
              {isLang ? t("navigation.duas") : "duas"}  
            </Link>
            <Link
              href={isLang ? `/${currentLang}/about-us` : "/about-us"}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200 capitalize"
            >
            {isLang ? t("navigation.aboutUs") : "aboutUs"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/contact-us` : "/contact-us"}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.contactUs") : "contactUs"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/makkah-tv` : "/makkah-tv"}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.makkahTv") : "makkahTv"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/madina-tv` : "/madina-tv"}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.madinaTv") : "madinaTv"} 
            </Link>
          </div>
        </ScrollArea>
        <Button
          variant="ghost"
          className=" absolute right-4 top-4 text-white hover:bg-white/10"
          onClick={() => setOpen(false)}
        >
        </Button>
      </SheetContent>
    </Sheet>
  )
}

