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
import { updateUserDetails } from "@/services/authentication";
import { toast } from "sonner";
import CustomCaptcha from "@/components/ui/common/CustomCaptcha";

export default function ResetPassword() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = urlSplitter(pathname);

  const [newPassword, setNewPassword] = useState("");
  const [userId, setUserId] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
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
    e.preventDefault();
    if (!isVerified) {
      toast.error("Please Verify the Captcha");
      return;
    }
    setIsLoading(true);

    try {
      const response = await updateUserDetails(userId, newPassword);

      if (response.success) {
        if (userDetailsInLS.email === "hammadurrehman1954@gmail.com") {
          const updatedDetails = {
            ...userDetailsInLS,
            role: "admin",
            token: "sdasdasd",
            isSignedUp: true,
          };
          localStorage.setItem("userData", JSON.stringify(updatedDetails));
        } else {
          const updatedUserDetails = {
            ...userDetailsInLS,
            token: "sdasdasd",
          };
          localStorage.setItem("userData", JSON.stringify(updatedUserDetails));
        }

        toast.success(response.message);
        router.push(`/${lang}/forum`);
      }
    } catch (error: any) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

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
              New Password
            </CardTitle>
            <CardDescription className="text-center">
              Enter your new password below to reset your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Confirm New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border-primary/20 focus-visible:ring-primary/30"
                  required
                />
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
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Confirm Password
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
  );
}
