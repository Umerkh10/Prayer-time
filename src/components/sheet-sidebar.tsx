"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, HelpCircle, UserCircle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { urlSplitter } from "@/lib"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
}

interface NavSection {
  title: string
  items: NavItem[]
}



interface SheetSidebarProps {
  className?: string
}

export function SheetSidebar({ className }: SheetSidebarProps) {
  const pathname = usePathname();
  const lang = urlSplitter(pathname)
  const [open, setOpen] = useState(false)
  const navSections: NavSection[] = [
    {
      title: "Management",
      items: [
        {
          title: "Questions",
          href: `/${lang}/admin/questions`,
          icon: HelpCircle,
        },
        {
          title: "All Users",
          href: `/${lang}/admin/users`,
          icon: Users,
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          title: "Update Profile",
          href: `/${lang}/admin/profile`,
          icon: UserCircle,
        },
      ],
    },
  ]


  const isActive = (lang: string) => {
    return pathname === lang || pathname.startsWith(`/${lang}/`)
  }

  return (
    <>
      {/* Mobile trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[280px]">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="text-left">Admin Panel</SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-60px)]">
            <div className="p-2">
              {navSections.map((section) => (
                <div key={section.title} className="mb-4">
                  <h3 className="px-4 py-2 text-sm font-medium text-muted-foreground">{section.title}</h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Button
                        key={item.href}
                        variant={isActive(item.href) ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setOpen(false)}
                        asChild
                      >
                        <Link href={item.href}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>



      


    </>
  )
}

