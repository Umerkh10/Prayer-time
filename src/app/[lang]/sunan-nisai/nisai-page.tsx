"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SunanNisaiBanner } from "./nisai-banner"
import { NisaiBookCard } from "./nisai-bookcard"
import { useEffect, useState } from "react"
import { useTranslation } from "@/hooks/useTranslation"


const englishBooks = [
  {
    title: "Sunan-an-Nasa-i in English",
    description: "Sunan-an-Nasa-i in English Volume 1",
    filePath: "/hadees/sunan-nisai-english/Sunan-an-Nasa-i-Vol-1-English.pdf", 
    fileSize: "12 MB",
  },
  {
    title: "Sunan-an-Nasa-i in English",
    description: "Sunan-an-Nasa-i in English Volume 2",
    filePath: "/hadees/sunan-nisai-english/Sunan-an-Nasa-i-Vol-2-English.pdf", 
    fileSize: "11 MB",
  },
  {
    title: "Sunan-an-Nasa-i in English",
    description: "Sunan-an-Nasa-i in English Volume 3",
    filePath: "/hadees/sunan-nisai-english/Sunan-an-Nasa-i-Vol-3-English.pdf", 
    fileSize: "10 MB",
  },
  {
    title: "Sunan-an-Nasa-i in English",
    description: "Sunan-an-Nasa-i in English Volume 4",
    filePath: "/hadees/sunan-nisai-english/Sunan-an-Nasa-i-Vol-4-English.pdf", 
    fileSize: "9 MB",
  },
  {
    title: "Sunan-an-Nasa-i in English",
    description: "Sunan-an-Nasa-i in English Volume 5",
    filePath: "/hadees/sunan-nisai-english/Sunan-an-Nasa-i-Vol-5-English.pdf", 
    fileSize: "10 MB",
  },
]

const urduBooks = [
    {
        title: "سنن نسائی جلد اول",
        description: "سنن نسائی اردو ترجمہ جلد اول",
        filePath: "/hadees/sunan-nisai-urdu/Mutarjam-Sunan-Nasai-1.pdf", 
        fileSize: "17 MB",
    },
    {
        title: "سنن نسائی جلد دوم",
        description: "سنن نسائی اردو ترجمہ جلد دوم",
        filePath: "/hadees/sunan-nisai-urdu/Mutarjam-Sunan-Nasai-2.pdf", 
        fileSize: "17 MB",
    },
    {
        title: "سنن نسائی جلد سوم",
        description: "سنن نسائی اردو ترجمہ جلد سوم",
        filePath: "/hadees/sunan-nisai-urdu/Mutarjam-Sunan-Nasai-3.pdf", 
        fileSize: "20 MB",
    },
    {
        title: "سنن نسائی جلد چہارم",
        description: "سنن نسائی اردو ترجمہ جلد چہارم",
        filePath: "/hadees/sunan-nisai-urdu/Mutarjam-Sunan-Nasai-4.pdf", 
        fileSize: "24 MB",
    },
    {
        title: "سنن نسائی جلد پنجم",
        description: "سنن نسائی اردو ترجمہ جلد پنجم",
        filePath: "/hadees/sunan-nisai-urdu/Mutarjam-Sunan-Nasai-5.pdf", 
        fileSize: "22 MB",
    },
    {
        title: "سنن نسائی جلد ششم",
        description: "سنن نسائی اردو ترجمہ جلد ششم",
        filePath: "/hadees/sunan-nisai-urdu/Mutarjam-Sunan-Nasai-6.pdf", 
        fileSize: "21 MB",
    },
    {
        title: "سنن نسائی جلد ہفتم",
        description: "سنن نسائی اردو ترجمہ جلد ہفتم",
        filePath: "/hadees/sunan-nisai-urdu/Mutarjam-Sunan-Nasai-7.pdf", 
        fileSize: "20 MB",
    },
]

export default function SunanNisaiPage() {
        const [isLoading, setIsLoading] = useState(true);
        const { t } = useTranslation("nisaipage");
    
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
      <SunanNisaiBanner />

      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 capitalize"> {t("nisaipage.heading-2")}</h2>

        <Tabs defaultValue="english" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="english">English</TabsTrigger>
            <TabsTrigger value="urdu">Urdu</TabsTrigger>
          </TabsList>

          <TabsContent value="english" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {englishBooks.map((book, index) => (
                <NisaiBookCard
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
                <NisaiBookCard
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
