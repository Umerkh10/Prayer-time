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
      <SheetContent side="left" className="w-72 bg-[#003422] p-0 z-[99999]">
        <ScrollArea className="h-full px-6">
          <div className="mt-6 space-y-5">
            <Link
              href={isLang ? `/${currentLang}` : "/"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize"
            >
           {isLang ? t("navigation.home") : "Home"}
            </Link>

            <Link
              href={isLang ? `/${currentLang}/countries` : "/countries"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize"
            >
             {isLang ? t("navigation.countries") : "countries"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/islamic-calender` : "/islamic-calender"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize"
            >
              {isLang ? t("navigation.islamicCalender") : "islamicCalender"}  
            </Link>
            <Link
              href={isLang ? `/${currentLang}/duas` : "/duas"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize"
            >
              {isLang ? t("navigation.duas") : "duas"}  
            </Link>

            <Link
              href={ isLang ? `/${currentLang}/makkah-tv` : "/makkah-tv"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.makkahTv") : "makkahTv"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/madina-tv` : "/madina-tv"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.madinaTv") : "madinaTv"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/ramadan-calender` : "/ramadan-calender"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.ramadan") : "ramadan"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/forum` : "/forum"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.forum") : "Forum"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/blogs` : "/blogs"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.blogs") : "Blogs"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/sahih-bukhari` : "/sahih-bukhari"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.sahihbukhari") : "sahihbukhari"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/sahih-muslim` : "/sahih-muslim"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.sahihmuslim") : "sahihmuslim"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/jamia-tirmazi` : "/jamia-tirmazi"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.jamiatirmazi") : "jamiatirmazi"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/sunan-abu-dawood` : "/sunan-abu-dawood"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.sunanabudawood") : "sunanabudawood"} 
            </Link>
            <Link
              href={ isLang ? `/${currentLang}/sunan-nisai` : "/sunan-nisai"}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-white hover:text-gray-200 capitalize "
            >
              {isLang ? t("navigation.sunannisai") : "sunannisai"} 
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

