"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { urlSplitter } from "@/lib"
import { Settings, LogOut, Bell } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface UserDropdownProps {
  userName: string
  userInitials: string
  userAvatar?: string
  unreadNotifications: number
  onLogout: () => void
}

export default function UserDropdown({ userName, userInitials,unreadNotifications, userAvatar, onLogout, }: UserDropdownProps) {
       const pathname = usePathname();
        const lang = urlSplitter(pathname)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 border border-primary/20 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback className="bg-primary/10 text-primary">{userInitials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 border-primary/20">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userName}</p>
            <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/${lang}/edit-profile`}>
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
          </DropdownMenuItem>
        </Link>
        <Link href={`/${lang}/notifications`}>
          <DropdownMenuItem className="cursor-pointer">
            <Bell className="mr-2 h-4 w-4" />
            <span>Notifications</span>
            {unreadNotifications > 0 && (
              <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
                {unreadNotifications}
              </span>
            )}
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={onLogout} className="cursor-pointer text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

