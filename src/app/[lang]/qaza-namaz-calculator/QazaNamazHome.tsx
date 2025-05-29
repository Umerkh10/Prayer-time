"use client"
import QazaCalculator from "@/components/qaza-calculator"
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useState } from "react";

export default function QazaNamazHome() {
      const { t } = useTranslation("qazanamaz")
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
      <Skeleton className="h-48 w-full mx-auto max-w-3xl" />
      <Skeleton className="mt-3 h-screen rounded-lg w-full mx-auto max-w-3xl" />
    </div> :
      (<main className="min-h-screen  py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-2">{t("qazanamaz.heading")}</h1>
        <p className="text-center text-green-00 mb-8">{t("qazanamaz.paragraph")}</p>
        <QazaCalculator />
      </div>
    </main>)}
</>
)}