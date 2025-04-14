"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/hooks/useTranslation";
import React, { useEffect, useState } from "react";

function BlogsBanner() {
  const { t } = useTranslation("blog");
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
    {isLoading ? <div className='px-8 mt-4'>
        <Skeleton className="h-96 w-full" />
        <Skeleton className="mt-3 h-32 rounded-lg w-full" />
        <div className='flex items-center justify-center gap-2 mt-4'>
            <Skeleton className="h-screen w-full" />
        </div>
    </div> : (<div className="blogs-banner">
      <div className="mx-auto max-w-screen-xl">
        <div className="py-12 px-5 md:py-44">
          <div className="text-center font-extrabold text-2xl md:text-5xl text-white">
            {t("blog.title")}
          </div>
          <div className="text-center pt-4 font-medium text-sm max-w-screen-sm mx-auto text-white">
            {" "}
            {t("blog.desc")}
          </div>
        </div>
      </div>
      </div>)}
        </>
    )
}

export default BlogsBanner;
