"use client"

type Language = {
  code: string;
  label: string;
  name: string;
  flag: string;
};

import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const languages: Language[] = [
  {
    code: "en",
    label: "EN",
    name: "English",
    flag: "/flag-dropdown/icons8-great-britain-48.png", // Replace with actual English flag URL
  },
  {
    code: "ar",
    label: "عربي",
    name: "Arabic",
    flag: "/flag-dropdown/icons8-sudan-circular-48.png", // Replace with actual Arabic flag URL
  },
  {
    code: "fr",
    label: "Français",
    name: "French",
    flag: "/flag-dropdown/icons8-french-flag-48.png", // Replace with actual French flag URL
  },
]

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<Language>(languages[0])
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateLanguage = () => {
      localStorage.setItem("loading", "true")
      const pathLang = languages.find(lang => lang.code === pathname.split("/")[1]) ? pathname.split("/")[1] : null

      if (pathLang) {


        setCurrentLang(languages.find(lang => lang.code === pathLang)!)

        setTimeout(() => {
          localStorage.setItem("loading", "false")

        }, 2000);

      } else {
        const browserLang = navigator.language.split("-")[0]
        const defaultLang = languages.find(lang => lang.code === browserLang) ? browserLang : "en"
        setCurrentLang(languages.find(lang => lang.code === defaultLang)!)
        router.replace(`/${defaultLang}${pathname}`)
        // setLoading(false);

      }
    }

    updateLanguage()

    window.addEventListener("languagechange", updateLanguage)
    return () => {
      window.removeEventListener("languagechange", updateLanguage)
    }
  }, [pathname, router])

  const changeLanguage = (lang: Language) => {
    localStorage.setItem("language",lang.name)

    const newPathname = "/" + pathname.split("/").slice(2).join("/")
    router.push(`/${lang.code}${newPathname}`)
    setIsOpen(false)
  }
  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger
          className={cn(
            "flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded-full  shadow-sm hover:bg-gray-50 transition-colors outline-none",
            isOpen && "bg-gray-50",
          )}
        >
          <Image
            src={currentLang.flag || "/placeholder.svg"}
            alt={`${currentLang.label} flag`}
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-sm font-medium text-black dark:text-zinc-100">{currentLang.label}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[180px] p-2 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg   mt-2">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer outline-none group",
                currentLang.code === lang.code ? "bg-gray-100 dark:bg-gray-700 " : "hover:bg-gray-50 dark:hover:bg-gray-950 ",
              )}
            >
              <Image
                src={lang.flag || "/placeholder.svg"}
                alt={`${lang.label} flag`}
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="text-sm font-medium text-black dark:text-zinc-100  ">{lang.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
