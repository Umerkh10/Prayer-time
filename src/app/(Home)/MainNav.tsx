"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/countries", label: "Countries" },
  { href: "/monthly-namaz-timings", label: "Monthly Namaz Timings" },
  { href: "/duas", label: "Duas" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden space-x-6 md:flex">
      {links.map(({ href, label }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className="relative px-1 py-2 text-sm font-medium text-white transition-colors hover:text-gray-200"
          >
            {label}
            {isActive && (
              <motion.div
                layoutId="activeNav"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}