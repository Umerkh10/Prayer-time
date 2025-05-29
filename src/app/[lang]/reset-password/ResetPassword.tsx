"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Loader2, Mail, Send, User2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlSplitter } from "@/lib";
import { resetPassword, updateUserDetails } from "@/services/authentication";
import { toast } from "sonner";
import CustomCaptcha from "@/components/ui/common/CustomCaptcha";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useTranslation } from "@/hooks/useTranslation";

export default function ResetPassword() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = urlSplitter(pathname);
  const { t } = useTranslation("forum")
  const [newPassword, setNewPassword] = useState("");
  const [userId, setUserId] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [viewPassword, setViewPassword] = useState(false)
  const [error, setError] = useState("");
  const [userDetailsInLS, setUserDetailsInLS] = useState<any>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserId(parsedUserData.id);
      setUserDetailsInLS(parsedUserData);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isVerified) {
      toast.error("Please Verify the Captcha")
      return
    }
    setIsLoading(true)

    try {
      // Add debugging logs
      console.log("Submitting password reset for userId:", userId)

      const response = await resetPassword(userId, newPassword)
      console.log("Full response:", response)

      // Check if response exists and has the success property
      if (response && response.success) {
        // Get user details from localStorage
        const userDataString = localStorage.getItem("userData")
        if (!userDataString) {
          toast.error("User data not found in localStorage")
          return
        }

        const userDetailsInLS = JSON.parse(userDataString)

        // Update localStorage based on user email
        if (userDetailsInLS.email === "hammadurrehman1954@gmail.com") {
          const updatedDetails = {
            ...userDetailsInLS,
            role: "admin",
            token: "sdasdasd",
            isSignedUp: true,
          }
          localStorage.setItem("userData", JSON.stringify(updatedDetails))
        } else {
          const updatedUserDetails = {
            ...userDetailsInLS,
            token: "sdasdasd",
          }
          localStorage.setItem("userData", JSON.stringify(updatedUserDetails))
        }

        // Show success message and redirect
        toast.success(response.message || "Password reset successfully")

        // Add a small delay before redirecting to ensure toast is visible
        setTimeout(() => {
          router.push(`/${lang}/forum`)
        }, 1500)
      } else {
        // Handle case where response exists but success is false
        toast.error(response?.message || "Password reset failed")
      }
    } catch (error: any) {
      console.error("Error in handleSubmit:", error)
      toast.error(error.message || "An error occurred during password reset")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container max-w-md mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-emerald-400/20 bg-zinc-100 dark:bg-zinc-900 shadow-md ">
          <CardHeader className="space-y-1">
            <div className="mx-auto w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
              <User2 className="h-8 w-8 text-zinc-50" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">
              {t('forum.newpw')}
            </CardTitle>
            <CardDescription className="text-center">
              {t('forum.resetlabel')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email"> {t('forum.confirmpw')} </Label>
                <div className="flex items-center border border-primary/20 focus-visible:ring-primary/30 px-2 rounded-lg">
                  <Input
                    id="password"
                    type={!viewPassword ? "password" : "text"}
                    placeholder="Enter your password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border-none"
                    required
                  />
                  {viewPassword ? <FaEye onClick={() => setViewPassword(false)} /> : <FaEyeSlash onClick={() => setViewPassword(true)} />}
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>
              <div className="flex justify-center items-center">
                <CustomCaptcha setIsVerified={setIsVerified} />
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-50"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('forum.sending')}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                   {t('forum.confirmedpw')}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <Link href={`/${lang}/forum`}>
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
               {t('forum.backtologin')}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
