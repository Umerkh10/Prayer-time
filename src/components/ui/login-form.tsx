"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { urlSplitter } from "@/lib";
import { login } from "@/services/authentication";
import Link from "next/link";
import { toast } from "sonner";
import CustomCaptcha from "./common/CustomCaptcha";

interface LoginFormProps {
  onSignUpClick: () => void;
  // onLogin: () => void
  setShowAuthModal: (value: boolean) => void;
  setIsLoggedIn: (value: boolean) => void;
}

export default function LoginForm({
  onSignUpClick,
  setShowAuthModal,
  setIsLoggedIn,
}: LoginFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const lang = urlSplitter(pathname);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [userDetailsInLS, setUserDetailsInLS] = useState<any>(null);

  useEffect(() => {
    const user: any = localStorage.getItem("userData");
    const parsedUser = JSON.parse(user);
    setUserDetailsInLS(parsedUser);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      toast.error("Please Verify the Captcha");
      return;
    }

    setIsLoading(true);

    const userDetails = { email, password };

    try {
      const response = await login(userDetails);

      if (response.status === 200) {

        localStorage.setItem("userData", JSON.stringify(response.data.user));
        setShowAuthModal(false);
        setIsLoggedIn(true);
        router.push(`/${lang}/forum`);
      }
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-0 shadow-none">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-primary/20 focus-visible:ring-primary/30"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  Password
                </Label>
                <Link
                  href={`/${lang}/verify-email`}
                  className="text-sm text-green-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-primary/20 focus-visible:ring-primary/30"
                required
              />
            </div>
             <CustomCaptcha  setIsVerified={setIsVerified} />
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-800 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account yet?{" "}
            <button
              onClick={onSignUpClick}
              className="text-green-600 hover:underline font-medium"
            >
              Sign up
            </button>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
