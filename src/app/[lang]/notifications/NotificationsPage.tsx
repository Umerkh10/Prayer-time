"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { format, formatDistanceToNow, parseISO } from "date-fns"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Bell,
  MessageSquare,
  AtSign,
  ThumbsUp,
  UserPlus,
  AlertCircle,
  CheckCircle,
  Check,
  Trash2,
  Filter,
  BellOff,
} from "lucide-react"
import { mockNotifications, type Notification, type NotificationType } from "@/lib/mock-notification"
import { urlSplitter } from "@/lib"

export default function NotificationsPage() {
  const router = useRouter()
  const pathname = usePathname();
  const lang = urlSplitter(pathname)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [activeTab, setActiveTab] = useState<"all" | "unread" | "read">("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    if (!userLoggedIn) {
      router.push("/")
    } else {
      setIsLoggedIn(true)
      setIsLoading(false)
    }
  }, [router])

  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "unread") return !notification.read
    if (activeTab === "read") return notification.read
    return true
  })

  const unreadCount = notifications.filter((notification) => !notification.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "answer":
        return <MessageSquare className="h-4 w-4 text-blue-500" />
      case "mention":
        return <AtSign className="h-4 w-4 text-purple-500" />
      case "like":
        return <ThumbsUp className="h-4 w-4 text-red-500" />
      case "follow":
        return <UserPlus className="h-4 w-4 text-green-500" />
      case "system":
        return <AlertCircle className="h-4 w-4 text-orange-500" />
      case "question_approved":
        return <CheckCircle className="h-4 w-4 text-emerald-500" />
      default:
        return <Bell className="h-4 w-4 text-primary" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString)
    const now = new Date()
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    if (diffInDays < 1) {
      return formatDistanceToNow(date, { addSuffix: true })
    } else if (diffInDays < 7) {
      return format(date, "EEEE") + " at " + format(date, "h:mm a")
    } else {
      return format(date, "MMM d, yyyy") + " at " + format(date, "h:mm a")
    }
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <Link href={`/${lang}/forum`}>
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Forum
          </Button>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/20"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            <Check className="mr-2 h-4 w-4" />
            Mark all as read
          </Button>
        </div>
      </div>

      <Card className="border-emerald-400/20 bg-zinc-100 dark:bg-zinc-900 shadow-md">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-emerald-600/10 rounded-full flex items-center justify-center">
                <Bell className="h-5 w-5 " />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">Notifications</CardTitle>
                <CardDescription>Stay updated with your activity</CardDescription>
              </div>
            </div>
            {unreadCount > 0 && (
              <Badge  className="text-sm bg-emerald-500 text-zinc-100">
                {unreadCount} unread
              </Badge>
            )}
          </div>
        </CardHeader>

        <Tabs defaultValue="all" value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
          <div className="px-6">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="unread"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                Unread
              </TabsTrigger>
              <TabsTrigger
                value="read"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                Read
              </TabsTrigger>
            </TabsList>
          </div>

          <Separator />

          <TabsContent value="all" className="m-0">
            <NotificationList
              notifications={filteredNotifications}
              markAsRead={markAsRead}
              deleteNotification={deleteNotification}
              getNotificationIcon={getNotificationIcon}
              formatDate={formatDate}
            />
          </TabsContent>

          <TabsContent value="unread" className="m-0">
            <NotificationList
              notifications={filteredNotifications}
              markAsRead={markAsRead}
              deleteNotification={deleteNotification}
              getNotificationIcon={getNotificationIcon}
              formatDate={formatDate}
            />
          </TabsContent>

          <TabsContent value="read" className="m-0">
            <NotificationList
              notifications={filteredNotifications}
              markAsRead={markAsRead}
              deleteNotification={deleteNotification}
              getNotificationIcon={getNotificationIcon}
              formatDate={formatDate}
            />
          </TabsContent>
        </Tabs>

        {filteredNotifications.length === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <BellOff className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No notifications</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {activeTab === "unread"
                ? "You've read all your notifications. Check back later for updates!"
                : activeTab === "read"
                  ? "You don't have any read notifications yet."
                  : "You don't have any notifications yet. Check back later!"}
            </p>
            {activeTab !== "all" && (
              <Button variant="outline" onClick={() => setActiveTab("all")}>
                View all notifications
              </Button>
            )}
          </div>
        )}

        {filteredNotifications.length > 0 && (
          <CardFooter className="flex justify-between border-t p-6">
            <Button variant="outline" size="sm" className="gap-1 border-primary/20">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <p className="text-sm text-muted-foreground">
              Showing {filteredNotifications.length} of {notifications.length} notifications
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}

interface NotificationListProps {
  notifications: Notification[]
  markAsRead: (id: string) => void
  deleteNotification: (id: string) => void
  getNotificationIcon: (type: NotificationType) => React.ReactNode
  formatDate: (dateString: string) => string
}

function NotificationList({
  notifications,
  markAsRead,
  deleteNotification,
  getNotificationIcon,
  formatDate,
}: NotificationListProps) {
  return (
    <div className="divide-y divide-border">
      <AnimatePresence initial={false}>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <div className={`p-6 hover:bg-muted/30 transition-colors ${!notification.read ? "bg-emerald-600/5" : ""}`}>
              <div className="flex gap-4">
                {notification.sender ? (
                  <Avatar className="h-10 w-10 border border-primary/20">
                    <AvatarImage src={notification.sender.avatar} alt={notification.sender.name} />
                    <AvatarFallback className="bg-emerald-600/10 ">
                      {notification.sender.initials}
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="h-10 w-10 bg-muted/50 rounded-full flex items-center justify-center">
                    {getNotificationIcon(notification.type)}
                  </div>
                )}

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm flex items-center gap-2">
                      {getNotificationIcon(notification.type)}
                      {notification.title}
                      {!notification.read && <span className="h-2 w-2 rounded-full bg-emerald-600 inline-block"></span>}
                    </p>
                    <span className="text-xs text-muted-foreground">{formatDate(notification.createdAt)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>

                  <div className="flex items-center justify-between mt-2 pt-1">
                    {notification.link ? (
                      <Link href={notification.link}>
                        <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                          View details
                        </Button>
                      </Link>
                    ) : (
                      <div></div>
                    )}

                    <div className="flex items-center gap-2">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                          className="h-8 px-2"
                        >
                          <Check className="h-4 w-4" />
                          <span className="sr-only">Mark as read</span>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteNotification(notification.id)}
                        className="h-8 px-2 text-red-500 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

