"use client"
import { ResponsiveAdminDashboard } from "@/components/responsive-admin-dashboard"
import { QuestionsTable } from "@/components/questions-table"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { usePathname } from "next/navigation";
import { urlSplitter } from "@/lib";

export default function AdminResponsivePage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const pathname = usePathname();
  const lang = urlSplitter(pathname)
  const currentPage = Number(searchParams.page) || 1

  return (
    <ResponsiveAdminDashboard title="Questions">
      <div className="space-y-4 md:space-y-6">
        <Breadcrumbs
          items={[
            { label: "Admin", href: `/${lang}/admin` },
            { label: "Questions", href: `/${lang}/admin/questions` },
          ]}
        />
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">Questions</h1>
        </div>
        <QuestionsTable currentPage={currentPage} />
      </div>
    </ResponsiveAdminDashboard>
  )
}

