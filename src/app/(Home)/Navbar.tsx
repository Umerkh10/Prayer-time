"use client"
import { motion } from "framer-motion"
import { ModeToggle } from '@/components/ui/mode-toggle'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'
import { useTranslation } from "@/lib/useTranslation"

function Navbar() {
    const { t } = useTranslation("navigation")
  

    return (
        <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 border-b border-white/10 bg-blue-950 backdrop-blur supports-[backdrop-filter]:bg-blue-900/80"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded">
                <Image
                  src="/logo.webp"
                  alt="Athan Pro Logo"
                  width={200}
                  height={200}
                  priority
                />
              </div>
              <span className="text-xl font-semibold text-white">{t("navigation.title")}</span>
            </Link>
          </div>
  
          <MainNav />
  
          <div className="flex items-center gap-2">
            <ModeToggle />
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </motion.header>
    )
}

export default Navbar