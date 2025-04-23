"use client"
import { Skeleton } from '@/components/ui/skeleton'
import ZakatCalculator from '@/components/zakat-calculator/zakat-calculator'
import { CurrencyProvider } from '@/context/CurrencyContext'
import { useTranslation } from '@/hooks/useTranslation'
import { GemIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function ZakatPage() {
 const { t } = useTranslation("zakat")
  const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        localStorage.setItem("loading", "true");
        setIsLoading(true);
    
        const timer = setTimeout(() => {
          localStorage.setItem("loading", "false");
          setIsLoading(false);
        }, 2000);
    
        return () => clearTimeout(timer);
      }, []);

  return (
       <>
    {isLoading ? <div className='px-8 mt-4'>
      <Skeleton className="h-48 w-full mx-auto max-w-xl" />
      <Skeleton className="mt-3 h-screen rounded-lg w-full mx-auto max-w-xl" />
    </div> :
      (<CurrencyProvider>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center">
        <header className="w-full bg-emerald-600 text-white py-4 px-6 shadow-md">
          <div className="container mx-auto flex items-center justify-center">
            <GemIcon className="w-8 h-8 mr-3" />
            <h1 className="text-2xl md:text-3xl font-bold">{t("zakat.title")}</h1>
          </div>
        </header>
        
        <main className="flex-1 w-full max-w-4xl mx-auto py-8 px-4">
          <div className="flex flex-col items-center">
            <div className="w-full mb-8 text-center">
              <h2 className="text-xl md:text-2xl font-semibold  mb-3">
              {t("zakat.heading1")}
              </h2>
              <p className="text-muted-foreground max-w-2xl max-sm:text-sm mx-auto">
              {t("zakat.desc")}
              </p>
            </div>
            
            <ZakatCalculator />
          </div>
        </main>
        
 
      </div>
    </CurrencyProvider>)}
</>
)}

export default ZakatPage