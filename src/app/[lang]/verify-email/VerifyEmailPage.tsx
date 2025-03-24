"use client"

import type React from "react"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Loader2, Mail, Send } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { urlSplitter } from "@/lib"
import { verifyEmail } from "@/services/authentication"
import { toast } from "sonner"
import CustomCaptcha from "@/components/ui/common/CustomCaptcha"

export default function VerifyEmailPage() {
  const router = useRouter()
  const pathname = usePathname();
  const lang = urlSplitter(pathname)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      toast.error("Please Verify the Captcha");
      return;
    }
    setIsLoading(true);

    try {
      const response = await verifyEmail(email)
      console.log("Response ====>", response);

      if (response.status === 200) {
        toast.success(response.data.message);
        router.push(`/${lang}/verify-code`);
      }
    } catch (error: any) {
      toast.error(error?.message)
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div className="container max-w-md mx-auto py-16 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Card className="border-emerald-400/20 bg-zinc-100 dark:bg-zinc-900 shadow-md ">
          <CardHeader className="space-y-1">
            <div className="mx-auto w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-zinc-50" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Verify Your Email</CardTitle>
            <CardDescription className="text-center">
              Enter your email address to receive a verification code
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-primary/20 focus-visible:ring-primary/30"
                  required
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>

              <div className="flex justify-center items-center">
              <CustomCaptcha setIsVerified={setIsVerified} />
              </div>

              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-50" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Verification Code
                  </>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <Link href={`/${lang}/forum`}>
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Login
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

