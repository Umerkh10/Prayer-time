"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useState } from "react";

export function SunanDawoodBanner() {
   const [isLoading, setIsLoading] = useState(true);
      const { t } = useTranslation("sunanpage");
    
      useEffect(() => {
        localStorage.setItem("loading", "true");
        setIsLoading(true);
    
        const timer = setTimeout(() => {
          localStorage.setItem("loading", "false");
          setIsLoading(false);
        }, 800);
    
        return () => clearTimeout(timer);
      }, []);
    return (
      <>
      {isLoading ? <div className='px-8 mt-4'>
        <Skeleton className="h-80 w-full" />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4'>
          <Skeleton className="h-screen w-full" />
          <Skeleton className="h-screen w-full" />
        </div>
      </div> : (<div className="relative w-full h-[300px] md:h-[400px] overflow-hidden blogs-banner">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-950/70 z-10" />
     
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg capitalize">
            {t("sunanpage.title")}</h1>
        <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
        {t("sunanpage.desc")}
        </p>
        </div>
        </div>)}
    </>
  )
}
  