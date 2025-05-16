"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { checkIsPathnameIsEqualToLang, urlSplitter } from "@/lib"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function SearchButton() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)
  const pathname = usePathname()
  const currentLang = urlSplitter(pathname)
  const { t } = useTranslation("navigation")
  const isLang = checkIsPathnameIsEqualToLang(currentLang)

  const createPath = (path: string) => (isLang ? `/${currentLang}${path}` : path)
  const getText = (key: string) => (isLang ? t(`navigation.${key}`) : key)

  // Define all website links
  const links = [
    { path: "/duas", label: "duas" },
    { path: "/qaza-namaz-calculator", label: "qaza-namaz-calculator" },
    { path: "/zakat-calculator", label: "zakatcalculator" },
    { path: "/inheritance-calculator", label: "inheritance" },
    { path: "/qibla-finder", label: "qiblafinder" },
    { path: "/99-names-of-allah", label: "namesallah" },
    { path: "/islamic-calender", label: "islamicCalender" },
    { path: "/ramadan-calender", label: "ramadan" },
    { path: "/makkah-tv", label: "makkahTv" },
    { path: "/madina-tv", label: "madinaTv" },
    { path: "/sahih-bukhari", label: "sahihbukhari" },
    { path: "/sahih-muslim", label: "sahihmuslim" },
    { path: "/jamia-tirmazi", label: "jamiatirmazi" },
    { path: "/sunan-abu-dawood", label: "sunanabudawood" },
    { path: "/sunan-nisai", label: "sunannisai" },
    { path: "/terms-and-conditions", label: "termslink" },
    { path: "/privacy-policy", label: "privacylink" },
  ]

  // Filter links based on search query
  const filteredLinks = links.filter((link) => {
    const searchLower = searchQuery.toLowerCase()
    const labelText = getText(link.label).toLowerCase()
    return labelText.includes(searchLower) || link.path.toLowerCase().includes(searchLower)
  })

  // Focus input when search modal is opened
  React.useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the modal is fully rendered
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Handle keyboard shortcut to open search (optional)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search with '/' key if not in an input field
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Reset search query when dialog closes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setSearchQuery("")
    }
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full text-white hover:bg-emerald-700"
        onClick={() => setIsOpen(true)}
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </Button>

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md z-[9999999999]">
          <DialogHeader>
            <DialogTitle className="text-center">{isLang ? t("navigation.searchtitle") : "Search Feature Links"}</DialogTitle>
          </DialogHeader>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isLang ? t("navigation.search") || "Search..." : "Search..."}
              className="pl-10 pr-4"
            />
          </div>

          <div className="mt-4 max-h-[60vh] overflow-y-auto">
            {searchQuery.length > 0 ? (
              filteredLinks.length > 0 ? (
                <div className="space-y-1">
                  {filteredLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={createPath(link.path)}
                      className={cn(
                        "flex items-center rounded-md px-4 py-3 text-sm transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
                        pathname === createPath(link.path) && "bg-emerald-50 dark:bg-emerald-900/10",
                      )}
                      onClick={() => {
                        setIsOpen(false)
                      }}
                    >
                      <span
                        className={cn(
                          "font-medium",
                          pathname === createPath(link.path) && "text-emerald-600 dark:text-emerald-400",
                        )}
                      >
                        {getText(link.label)}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center py-6 text-center text-sm text-muted-foreground">
                  {isLang ? t("navigation.noresult") : "No results found"}
                </div>
              )
            ) : (
              <div className="py-6 text-center text-sm text-muted-foreground">
                {isLang ? t("navigation.starttyping") : "Start typing to search..."}
              </div>
            )}
          </div>

          <div className="mt-4 text-xs text-muted-foreground text-center">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">/</span>
            </kbd>
            <span className="ml-2">{isLang ? t("navigation.presstosearch")  : "to search"}</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
