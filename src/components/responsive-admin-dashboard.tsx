"use client"

import type { ReactNode } from "react"
import { SheetSidebar } from "./sheet-sidebar"

interface ResponsiveAdminDashboardProps {
  children: ReactNode
  title?: string
}

export function ResponsiveAdminDashboard({ children, title = "Admin Dashboard" }: ResponsiveAdminDashboardProps) {
  return (
    <div className="flex min-h-screen bg-background">


      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
          <SheetSidebar className="md:hidden" />
          <h2 className="text-lg font-medium">{title}</h2>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

