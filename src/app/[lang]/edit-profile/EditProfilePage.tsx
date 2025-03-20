"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { redirect, usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Loader2, User, Mail, Lock, Save } from "lucide-react"
import Link from "next/link"
import { urlSplitter } from "@/lib"

export default function EditProfilePage() {
  const router = useRouter()
  const pathname = usePathname();
  const lang = urlSplitter(pathname)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    if (!userLoggedIn) {
      router.push(`/${lang}/forum`)
    } else {
      setIsLoggedIn(true)
    }
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Mock API call to update profile
    setTimeout(() => {
      setIsLoading(false)
      alert("Profile updated successfully!")
      router.push(`/${lang}/forum`)
    }, 1500)
  }

  if (!isLoggedIn) {
    return <div className="flex items-center justify-center min-h-screen">Redirecting...</div>
  }

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <Link href={`/${lang}/forum`}>
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Forum
        </Button>
      </Link>

      <Card className="border-primary/20 shadow-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Edit Profile</CardTitle>
            <Avatar className="h-12 w-12 border border-primary/20">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
              <AvatarFallback className="bg-primary/10 text-primary">JD</AvatarFallback>
            </Avatar>
          </div>
          <CardDescription>Update your personal information and password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-primary/20 focus-visible:ring-primary/30"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-primary/20 focus-visible:ring-primary/30"
                  required
                />
              </div>
            </div>


            <div className="space-y-2">
              <Label htmlFor="currentPassword" className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-muted-foreground" />
                Current Password
              </Label>
              <Input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={formData.currentPassword}
                onChange={handleChange}
                className="border-primary/20 focus-visible:ring-primary/30"
              />



            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between border-t p-6">
          <Button variant="outline" onClick={() => router.push(`/${lang}/forum`)} className="border-primary/20">
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading} className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Update Profile
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

