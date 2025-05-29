"use client"
import { ProfileForm } from "@/components/profile-form"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ResponsiveAdminDashboard } from "@/components/responsive-admin-dashboard"
import { usePathname } from "next/navigation";
import { urlSplitter } from "@/lib";

export default function ProfilePage() {
    const pathname = usePathname();
    const lang = urlSplitter(pathname)
  return (
    <ResponsiveAdminDashboard title="Profile">
      <div className="space-y-4 md:space-y-6">
        <Breadcrumbs
          items={[
            { label: "Admin", href: `/${lang}/admin` },
            { label: "Profile", href: `/${lang}/admin/profile` },
          ]}
        />
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">Update Profile</h1>
        </div>
        <ProfileForm />
      </div>
    </ResponsiveAdminDashboard>
  )
}

