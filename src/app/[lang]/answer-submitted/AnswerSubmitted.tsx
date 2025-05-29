"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Home, Info } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { urlSplitter } from "@/lib"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useTranslation } from "@/hooks/useTranslation"
import { Skeleton } from "@/components/ui/skeleton"

function AnswerSubmitted() {
  const router = useRouter()
  const pathname = usePathname();
  const lang = urlSplitter(pathname)
  const { t } = useTranslation("forum")
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <div className='px-8 mt-4'>
        <div className='flex items-center justify-center gap-2 mt-4'>
          <Skeleton className="h-[400px] rounded-xl w-2/5" />
        </div>
      </div> : (
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
                <CardTitle className="text-2xl font-bold"> {t("forum.submitanswer")} </CardTitle>
                <CardDescription className="capitalize">{t("forum.submitanswerdesc")}</CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-muted-foreground text-sm mb-4 capitalize">
                  {t("forum.submitanswerdesc2")}
                </p>
                <Alert className="bg-muted/50 border-primary/20">
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-sm text-left">
                    {t("forum.notifyanswer")}
                  </AlertDescription>
                </Alert>

              </CardContent>
              <CardFooter className="flex flex-col gap-2 border-t p-6">
                <Link href={`/${lang}/forum`} className="w-full">
                  <Button className="w-full gap-2 bg-emerald-500 hover:bg-emerald-700 capitalize text-white">
                    <Home className="h-4 w-4 " />
                    {t("forum.returnforum")}
                  </Button>
                </Link>

              </CardFooter>
            </Card>
          </motion.div>
        </div>)}
    </>
  )
}

export default AnswerSubmitted