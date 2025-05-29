"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SunanDawoodBanner } from "./sunan-banner"
import { SunanBookCard } from "./sunan-bookcard"
import { useEffect, useState } from "react"
import { useTranslation } from "@/hooks/useTranslation"


const englishBooks = [
  {
    title: "Sunan Abu Dawud in English",
    description: "Sunan Abu Dawud in English Volume 1",
    filePath: "/hadees/sunan-abu-dawood-english/Sunan-Abu-Dawud-Vol-1-1-1160.pdf", 
    fileSize: "12 MB",
  },
  {
    title: "Sunan Abu Dawud in English",
    description: "Sunan Abu Dawud in English Volume 2",
    filePath: "/hadees/sunan-abu-dawood-english/Sunan-Abu-Dawud-Vol-2-1161-2174.pdf", 
    fileSize: "11 MB",
  },
  {
    title: "Sunan Abu Dawud in English",
    description: "Sunan Abu Dawud in English Volume 3",
    filePath: "/hadees/sunan-abu-dawood-english/Sunan-Abu-Dawud-Vol-3-2175-3241.pdf", 
    fileSize: "10 MB",
  },
  {
    title: "Sunan Abu Dawud in English",
    description: "Sunan Abu Dawud in English Volume 4",
    filePath: "/hadees/sunan-abu-dawood-english/Sunan-Abu-Dawud-Vol-4-3242-4350.pdf", 
    fileSize: "9 MB",
  },
  {
    title: "Sunan Abu Dawud in English",
    description: "Sunan Abu Dawud in English Volume 5",
    filePath: "/hadees/sunan-abu-dawood-english/Sunan-Abu-Dawud-Vol-5-4351-5274.pdf", 
    fileSize: "10 MB",
  },
]

const urduBooks = [
    {
        title: "سنن ابو داود جلد اول",
        description: "سنن ابو داود اردو ترجمہ جلد اول",
        filePath: "/hadees/sunan-abu-dawood-urdu/Sunan-Abo-Dawood-(Jild-1).pdf", 
        fileSize: "17 MB",
    },
    {
        title: "سنن ابو داود جلد دوم",
        description: "سنن ابو داود اردو ترجمہ جلد دوم",
        filePath: "/hadees/sunan-abu-dawood-urdu/Sunan-Abo-Dawood-(Jild-2).pdf", 
        fileSize: "17 MB",
    },
    {
        title: "سنن ابو داود جلد سوم",
        description: "سنن ابو داود اردو ترجمہ جلد سوم",
        filePath: "/hadees/sunan-abu-dawood-urdu/Sunan-Abo-Dawood-(Jild-3).pdf", 
        fileSize: "20 MB",
    },
    {
        title: "سنن ابو داود جلد چہارم",
        description: "سنن ابو داود اردو ترجمہ جلد چہارم",
        filePath: "/hadees/sunan-abu-dawood-urdu/Sunan-Abo-Dawood-(Jild-4).pdf", 
        fileSize: "24 MB",
    },
]

export default function SunanPage() {
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
    <main className="">
      <SunanDawoodBanner />

      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 capitalize"> {t("sunanpage.heading-2")}</h2>

        <Tabs defaultValue="english" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="english">English</TabsTrigger>
            <TabsTrigger value="urdu">Urdu</TabsTrigger>
          </TabsList>

          <TabsContent value="english" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {englishBooks.map((book, index) => (
                <SunanBookCard
                  key={index}
                  title={book.title}
                  description={book.description}
                  filePath={book.filePath}
                  fileSize={book.fileSize}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="urdu" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {urduBooks.map((book, index) => (
                <SunanBookCard
                  key={index}
                  title={book.title}
                  description={book.description}
                  filePath={book.filePath}
                  fileSize={book.fileSize}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
