"use client"

import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

const languages = ["en", "fr","ar"]

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  // Extract the language from the pathname
  const currentLang = languages.includes(pathname.split("/")[1]) ? pathname.split("/")[1] : "en"

  const changeLanguage = (lang: string) => {
    const newPathname = "/" + pathname.split("/").slice(2).join("/")
    router.push(`/${lang}${newPathname}`)
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center justify-between w-10 h-10 text-base font-bold bg-gradient-to-br from-teal-400 to-blue-500 text-white rounded-full hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl",
          isOpen && "rotate-180",
        )}
      >
        <div className="flex items-center justify-center w-full">{currentLang.toUpperCase()}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-2 bg-white rounded-2xl shadow-xl border-2 border-teal-200 p-1 min-w-[5rem] animate-fadeIn"
        sideOffset={5}
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={cn(
              "flex items-center justify-center w-10 h-10 m-1 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer",
              currentLang === lang
                ? "bg-gradient-to-br from-teal-400 to-blue-500 text-white animate-pulse"
                : "text-gray-700 hover:bg-gray-100",
            )}
          >
            {lang.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

