"use client"
import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronDown, Calendar, Tv, Book, X } from "lucide-react"
import { motion } from "framer-motion"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useTranslation } from "@/hooks/useTranslation"
import { checkIsPathnameIsEqualToLang, urlSplitter } from "@/lib"

interface NavSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function NavSidebar({ isOpen, onClose }: NavSidebarProps) {
  const pathname = usePathname()
  const currentLang = urlSplitter(pathname)
  const { t } = useTranslation("navigation")
  const isLang = checkIsPathnameIsEqualToLang(currentLang)

  const createPath = (path: string) => (isLang ? `/${currentLang}${path}` : path)
  const isActive = (path: string) => pathname === path
  const getText = (key: string) => (isLang ? t(`navigation.${key}`) : key)

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="w-80 z-[99999] bg-gradient-to-b from-slate-100 to-slate-200 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border-l border-slate-700 "
      >
        <SheetHeader className="border-b border-slate-700 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className=" font-bold">{getText("title")}</SheetTitle>
            <button onClick={onClose} className="rounded-full p-1 hover:bg-emerald-700 transitio text-whiten-colors">
            </button>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-2">
          {/* Duas Link */}
          <Link
            href={createPath("/duas")}
            className={`flex items-center gap-2 px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${
              isActive(createPath("/duas")) ? "bg-emerald-700 text-white" : ""
            }`}
            onClick={onClose}
          >
            <Book className="h-4 w-4" />
            <span>{getText("duas")}</span>
            {isActive(createPath("/duas")) && <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></span>}
          </Link>

          {/* Calendar Dropdown */}
          <SidebarDropdown
            icon={<Calendar className="h-4 w-4" />}
            title={getText("calender")}
            isActive={isActive(createPath("/islamic-calender")) || isActive(createPath("/ramadan-calender"))}
          >
            <SidebarLink
              href={createPath("/islamic-calender")}
              isActive={isActive(createPath("/islamic-calender"))}
              text={getText("islamicCalender")}
              onClick={onClose}
            />
            <SidebarLink
              href={createPath("/ramadan-calender")}
              isActive={isActive(createPath("/ramadan-calender"))}
              text={getText("ramadan")}
              onClick={onClose}
            />
          </SidebarDropdown>

          {/* Live TV Dropdown */}
          <SidebarDropdown
            icon={<Tv className="h-4 w-4" />}
            title={getText("livetv")}
            isActive={isActive(createPath("/makkah-tv")) || isActive(createPath("/madina-tv"))}
          >
            <SidebarLink
              href={createPath("/makkah-tv")}
              isActive={isActive(createPath("/makkah-tv"))}
              text={getText("makkahTv")}
              onClick={onClose}
            />
            <SidebarLink
              href={createPath("/madina-tv")}
              isActive={isActive(createPath("/madina-tv"))}
              text={getText("madinaTv")}
              onClick={onClose}
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
          >
            <SidebarLink
              href={createPath("/sahih-bukhari")}
              isActive={isActive(createPath("/sahih-bukhari"))}
              text={getText("sahihbukhari")}
              onClick={onClose}
            />
            <SidebarLink
              href={createPath("/sahih-muslim")}
              isActive={isActive(createPath("/sahih-muslim"))}
              text={getText("sahihmuslim")}
              onClick={onClose}
            />
            <SidebarLink
              href={createPath("/jamia-tirmazi")}
              isActive={isActive(createPath("/jamia-tirmazi"))}
              text={getText("jamiatirmazi")}
              onClick={onClose}
            />
            <SidebarLink
              href={createPath("/sunan-abu-dawood")}
              isActive={isActive(createPath("/sunan-abu-dawood"))}
              text={getText("sunanabudawood")}
              onClick={onClose}
            />
            <SidebarLink
              href={createPath("/sunan-nisai")}
              isActive={isActive(createPath("/sunan-nisai"))}
              text={getText("sunannisai")}
              onClick={onClose}
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
}: {
  icon: React.ReactNode
  title: string
  isActive: boolean
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = React.useState(isActive)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="relative">
      <CollapsibleTrigger
        className={`flex items-center justify-between w-full px-4 py-3 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors ${
          isActive ? "bg-emerald-700 text-white" : ""
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
      className={`block px-4 py-2 text-sm rounded-md hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white transition-colors relative ${
        isActive ? "bg-emerald-700 text-white  " : ""
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
