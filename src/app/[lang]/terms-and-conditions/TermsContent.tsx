"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/hooks/useTranslation"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function TermsContent() {
  const { t } = useTranslation("terms")
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false); // This will now execute AFTER 2 seconds
    }, 800);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);
  return (
     <>
        {isLoading ? <div className='px-8 mt-4'>
          <Skeleton className="h-screen w-full" /></div> :
          (    <div className="container mx-auto py-10 px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight">{t("terms.title")}</h1>
              <p className="text-muted-foreground mt-2">{t("terms.lastupdated")}</p>
            </div>
      
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{t("terms.subheading_1")}</CardTitle>
                <CardDescription>{t("terms.subtext_1")}</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                {t("terms.subparagraph_1")}
                </p>
                <p>
                {t("terms.subparagraph_2")}
                </p>
              </CardContent>
            </Card>
      
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{t("terms.subheading_3")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                {t("terms.subparagraph_3")}
                </p>
              </CardContent>
            </Card>
      
            <Card className="mb-8">
              <CardHeader>
                <CardTitle> {t("terms.subheading_4")}  </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                {t("terms.subparagraph_4")}
                </p>
              </CardContent>
            </Card>
      
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{t("terms.subheading_5")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                {t("terms.subparagraph_5")}
                </p>
              </CardContent>
            </Card>
      
            <div className="text-center text-sm text-muted-foreground mt-12">
              <p>{t("terms.footertext")}</p>
              <Separator className="my-4" />

            </div>
          </div>)}
    </>


  )
}

