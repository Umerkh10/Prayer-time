"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/hooks/useTranslation";
import { urlSplitter } from "@/lib";
import { Calendar, Clock, Info } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function MakkahPage() {
  const pathname = usePathname();
  const lang = urlSplitter(pathname);
  const isArabic = pathname.split("/")[1];
  const { t } = useTranslation("makkahtv");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false); // This will now execute AFTER 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="px-8 mt-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="mt-3 h-screen rounded-lg w-full" />
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 py-8">
            <header className="mb-12 text-center relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800">
                {t("makkahtv.mainheading")}
              </h1>

              <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
                {t("makkahtv.mainparagraph")}
              </p>
              <Separator className="max-w-md mx-auto mt-6 bg-emerald-200/50" />
            </header>

            <main className="max-w-5xl mx-auto">
              <Card className="overflow-hidden border-0 shadow-xl bg-card/95 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white p-4">
                  <CardTitle className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    {t("makkahtv.videotitle")}
                  </CardTitle>
                </CardHeader>
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/tko4c06NJeA?si=y2uqr5Q6_1M836ju"
                    title="Makkah TV Live Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </Card>

              <div className="grid md:grid-cols-1 gap-6 mt-8">
                <Card className="border-0 shadow-lg bg-card/95 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Info className="h-5 w-5 text-emerald-600" />
                      {t("makkahtv.subheading")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t("makkahtv.subparagraph")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center text-sm text-muted-foreground">
                <p className="mt-1">{t("makkahtv.footertext")}</p>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default MakkahPage;
