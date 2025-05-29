"use client"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronDown, Calendar, Tv, Book, Calculator, CompassIcon, Menu, Home, Globe2 } from "lucide-react"
import { MdOutlineForum } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useTranslation } from "@/hooks/useTranslation"
import { checkIsPathnameIsEqualToLang, urlSplitter } from "@/lib"
import { Button } from "@/components/ui/button"
import { FaLaptopHouse } from "react-icons/fa"

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const currentLang = urlSplitter(pathname)
  const { t } = useTranslation("navigation")
  const isLang = checkIsPathnameIsEqualToLang(currentLang)

  const createPath = (path: string) => (isLang ? `/${currentLang}${path}` : path)
  const isActive = (path: string) => pathname === path
  const getText = (key: string) => (isLang ? t(`navigation.${key}`) : key)
  
  // Function to close the navigation
  const closeNav = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="px-2 text-white hover:bg-white/10 hover:text-zinc-50">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-80 z-[9999999999999] bg-gradient-to-b from-slate-100 to-slate-200 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border-l border-slate-700 overflow-y-auto"
      >
        <SheetHeader className="border-b border-slate-700 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className=" font-bold">{getText("title")}</SheetTitle>
            <button onClick={closeNav} className="rounded-full p-1 hover:bg-emerald-700 transitio text-whiten-colors">
            </button>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-2">
          {/* Duas Link */}
          <Link
            href={createPath("/")}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${isActive(createPath("/")) ? "bg-emerald-700 text-white" : ""
              }`}
            onClick={closeNav}
          >
            <Home className="h-4 w-4" />
            <span>{getText("home")}</span>
            {isActive(createPath("/")) && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
          </Link>

          <Link
            href={createPath("/countries")}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${isActive(createPath("/countries")) ? "bg-emerald-700 text-white" : ""
              }`}
            onClick={closeNav}
          >
            <Globe2 className="h-4 w-4" />
            <span>{getText("countries")}</span>
            {isActive(createPath("/countries")) && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
          </Link>

          <Link
            href={createPath("/duas")}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${isActive(createPath("/duas")) ? "bg-emerald-700 text-white" : ""
              }`}
            onClick={closeNav}
          >
            <Book className="h-4 w-4" />
            <span>{getText("duas")}</span>
            {isActive(createPath("/duas")) && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
          </Link>


          <Link
            href={createPath("/forum")}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${isActive(createPath("/forum")) ? "bg-emerald-700 text-white" : ""
              }`}
            onClick={closeNav}
          >
            <MdOutlineForum  className="h-4 w-4" />
            <span>{getText("forum")}</span>
            {isActive(createPath("/forum")) && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
          </Link>

          <Link
            href={createPath("/blogs")}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${isActive(createPath("/blogs")) ? "bg-emerald-700 text-white" : ""
              }`}
            onClick={closeNav}
          >
            <IoNewspaperSharp  className="h-4 w-4" />
            <span>{getText("blogs")}</span>
            {isActive(createPath("/blogs")) && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
          </Link>

          <Link
            href={createPath("/qaza-namaz-calculator")}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${isActive(createPath("/qaza-namaz-calculator")) ? "bg-emerald-700 text-white" : ""
              }`}
            onClick={closeNav}
          >
            <Calculator className="h-4 w-4" />
            <span>{getText("qaza-namaz-calculator")}</span>
            {isActive(createPath("/qaza-namaz-calculator")) && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
          </Link>

          <Link
            href={createPath("/zakat-calculator")}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${isActive(createPath("/zakat-calculator")) ? "bg-emerald-700 text-white" : ""
              }`}
            onClick={closeNav}
          >
            <Calculator className="h-4 w-4" />
            <span>{getText("zakatcalculator")}</span>
            {isActive(createPath("/zakat-calculator")) && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
          </Link>

          <Link
            href={createPath("/inheritance-calculator")}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${isActive(createPath("/inheritance-calculator")) ? "bg-emerald-700 text-white" : ""
              }`}
            onClick={closeNav}
          >
            <FaLaptopHouse className="h-4 w-4" />
            <span>{getText("inheritance")}</span>
            {isActive(createPath("/inheritance-calculator")) && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
          </Link>

          <Link
            href={createPath("/qibla-finder")}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${isActive(createPath("/qibla-finder")) ? "bg-emerald-700 text-white" : ""
              }`}
            onClick={closeNav}
          >
            <CompassIcon className="h-4 w-4" />
            <span>{getText("qiblafinder")}</span>
            {isActive(createPath("/qibla-finder")) && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
          </Link>

          {/* Calendar Dropdown */}
          <SidebarDropdown
            icon={<Calendar className="h-4 w-4" />}
            title={getText("calender")}
            isActive={isActive(createPath("/islamic-calender")) || isActive(createPath("/ramadan-calender"))}
            closeNav={closeNav}
          >
            <SidebarLink
              href={createPath("/islamic-calender")}
              isActive={isActive(createPath("/islamic-calender"))}
              text={getText("islamicCalender")}
              onClick={closeNav}
            />
            <SidebarLink
              href={createPath("/ramadan-calender")}
              isActive={isActive(createPath("/ramadan-calender"))}
              text={getText("ramadan")}
              onClick={closeNav}
            />
          </SidebarDropdown>

          {/* Live TV Dropdown */}
          <SidebarDropdown
            icon={<Tv className="h-4 w-4" />}
            title={getText("livetv")}
            isActive={isActive(createPath("/makkah-tv")) || isActive(createPath("/madina-tv"))}
            closeNav={closeNav}
          >
            <SidebarLink
              href={createPath("/makkah-tv")}
              isActive={isActive(createPath("/makkah-tv"))}
              text={getText("makkahTv")}
              onClick={closeNav}
            />
            <SidebarLink
              href={createPath("/madina-tv")}
              isActive={isActive(createPath("/madina-tv"))}
              text={getText("madinaTv")}
              onClick={closeNav}
            />
          </SidebarDropdown>

          {/* Hadees Dropdown */}
          <SidebarDropdown
            icon={<Book className="h-4 w-4" />}
            title={getText("hadees")}
            isActive={
              isActive(createPath("/sahih-bukhari")) ||
              isActive(createPath("/sahih-muslim")) ||
              isActive(createPath("/jamia-tirmazi")) ||
              isActive(createPath("/sunan-abu-dawood")) ||
              isActive(createPath("/sunan-nisai"))
            }
            closeNav={closeNav}
          >
            <SidebarLink
              href={createPath("/sahih-bukhari")}
              isActive={isActive(createPath("/sahih-bukhari"))}
              text={getText("sahihbukhari")}
              onClick={closeNav}
            />
            <SidebarLink
              href={createPath("/sahih-muslim")}
              isActive={isActive(createPath("/sahih-muslim"))}
              text={getText("sahihmuslim")}
              onClick={closeNav}
            />
            <SidebarLink
              href={createPath("/jamia-tirmazi")}
              isActive={isActive(createPath("/jamia-tirmazi"))}
              text={getText("jamiatirmazi")}
              onClick={closeNav}
            />
            <SidebarLink
              href={createPath("/sunan-abu-dawood")}
              isActive={isActive(createPath("/sunan-abu-dawood"))}
              text={getText("sunanabudawood")}
              onClick={closeNav}
            />
            <SidebarLink
              href={createPath("/sunan-nisai")}
              isActive={isActive(createPath("/sunan-nisai"))}
              text={getText("sunannisai")}
              onClick={closeNav}
            />
          </SidebarDropdown>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function SidebarDropdown({
  icon,
  title,
  isActive,
  children,
  closeNav,
}: {
  icon: React.ReactNode
  title: string
  isActive: boolean
  children: React.ReactNode
  closeNav: () => void
}) {
  const [isOpen, setIsOpen] = useState(isActive)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="relative">
      <CollapsibleTrigger
        className={`flex items-center justify-between w-full px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${isActive ? "bg-emerald-700 text-white" : ""
          }`}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        {isActive && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-10 pr-2 py-1 space-y-1">{children}</CollapsibleContent>
    </Collapsible>
  )
}

function SidebarLink({
  href,
  isActive,
  text,
  onClick,
}: {
  href: string
  isActive: boolean
  text: string
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      className={`block px-4 py-2 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors relative ${isActive ? "bg-emerald-700 text-white  " : ""
        }`}
      onClick={onClick}
    >
      {text}
      {isActive && (
        <motion.div
          layoutId="activeSidebarLink"
          className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  )
}