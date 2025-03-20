"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Home, Info } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { urlSplitter } from "@/lib"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function QuestionSubmit() {
  const router = useRouter()
  const pathname = usePathname();
  const lang = urlSplitter(pathname)

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    if (!userLoggedIn) {
      router.push(`/${lang}/forum`)
    }
  }, [router])

  return (
    <div className="container max-w-md mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-primary/20 shadow-md text-center">
          <CardHeader className="pb-2">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Question Submitted!</CardTitle>
            <CardDescription className="capitalize">Thank you for contributing to our community</CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <p className="text-muted-foreground text-sm mb-4 capitalize">
              Your question has been submitted and is awaiting approval from our moderators. This process usually takes
              24-48 hours.
            </p>
            <Alert className="bg-muted/50 border-primary/20">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-sm text-left">
              You'll receive a notification on you email once your question is published.
              </AlertDescription>
            </Alert>
   
          </CardContent>
          <CardFooter className="flex flex-col gap-2 border-t p-6">
            <Link href={`/${lang}/forum`} className="w-full">
              <Button className="w-full gap-2 bg-emerald-500 hover:bg-emerald-700 capitalize text-white">
                <Home className="h-4 w-4 " />
                Return to Forum
              </Button>
            </Link>
            <Link href={`/${lang}/add-question`} className="w-full">
              <Button variant="outline" className="w-full gap-2 border-primary/20 capitalize">
                <ArrowLeft className="h-4 w-4" />
                Ask Another Question
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

