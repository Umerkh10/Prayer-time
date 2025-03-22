"use client"
import { ResponsiveAdminDashboard } from "@/components/responsive-admin-dashboard"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { UsersTable } from "@/components/user-table"
import { usePathname } from "next/navigation";
import { urlSplitter } from "@/lib";

export default function UsersPage() {
    const pathname = usePathname();
    const lang = urlSplitter(pathname)
  return (
    <ResponsiveAdminDashboard title="Users">
      <div className="space-y-4 md:space-y-6">
        <Breadcrumbs
          items={[
            { label: "Admin", href: `/${lang}/admin` },
            { label: "Users", href: `/${lang}/admin/users` },
          ]}
        />
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">All Users</h1>
        </div>
        <UsersTable />
      </div>
    </ResponsiveAdminDashboard>
  )
}

