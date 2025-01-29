"use client"

import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="px-2 text-white hover:bg-white/10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 bg-[#0046E5] p-0">
        <ScrollArea className="h-full px-6">
          <div className="mt-6 space-y-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200"
            >
              Home
            </Link>
            <Link
              href="/countries"
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200"
            >
              Countries
            </Link>
            <Link
              href="/islamic-calender"
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200"
            >
              Islamic Calendar
            </Link>
            <Link
              href="/duas"
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200"
            >
              Duas
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200"
            >
              About us
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-white hover:text-gray-200"
            >
              Contact us
            </Link>
          </div>
        </ScrollArea>
        <Button
          variant="ghost"
          className=" absolute right-4 top-4 text-white hover:bg-white/10"
          onClick={() => setOpen(false)}
        >
          <X className="h-6 w-6" />
        </Button>
      </SheetContent>
    </Sheet>
  )
}

