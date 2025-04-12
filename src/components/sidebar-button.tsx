"use client"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavSidebar } from "./nav-sidebar"

export function SidebarButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="bg-white hover:bg-zinc-200 dark:bg-[#000610] border border-muted">
        <Menu className="h-7 w-7" />
        <span className="sr-only">Open navigation menu</span>
      </Button>

      <NavSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
