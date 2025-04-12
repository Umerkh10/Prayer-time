"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SahihMuslimBanner } from "./sahih-muslim-banner"
import { SahihMuslimBookCard } from "./sahih-muslim-book-card"
import { useTranslation } from "@/hooks/useTranslation"


const englishBooks = [
  {
    title: "Sahih Muslim in English",
    description: "Sahih Muslim in English Volume 1",
    filePath: "/hadees/sahih-muslim-english/SahihMuslimVol.1-Ahadith1-1160.pdf", 
    fileSize: "12 MB",
  },
  {
    title: "Sahih Muslim in English",
    description: "Sahih Muslim in English Volume 2",
    filePath: "/hadees/sahih-muslim-english/SahihMuslimVol.2-Ahadith1161-2262.pdf", 
    fileSize: "10 MB",
  },
  {
    title: "Sahih Muslim in English",
    description: "Sahih Muslim in English Volume 3",
    filePath: "/hadees/sahih-muslim-english/Sahihmuslimvol.3-ahadith2263-33971.pdf", 
    fileSize: "10 MB",
  },
  {
    title: "Sahih Muslim in English",
    description: "Sahih Muslim in English Volume 4",
    filePath: "/hadees/sahih-muslim-english/SahihMuslimVol.4-Ahadith3398-4518.pdf", 
    fileSize: "10 MB",
  },
  {
    title: "Sahih Muslim in English",
    description: "Sahih Muslim in English Volume 5",
    filePath: "/hadees/sahih-muslim-english/SahihMuslimVol.5-Ahadith4519-5645.pdf", 
    fileSize: "11 MB",
  },
  {
    title: "Sahih Muslim in English",
    description: "Sahih Muslim in English Volume 6",
    filePath: "/hadees/sahih-muslim-english/SahihMuslimVol.6-Ahadith5646-6722.pdf", 
    fileSize: "10 MB",
  },
  {
    title: "Sahih Muslim in English",
    description: "Sahih Muslim in English Volume 7",
    filePath: "/hadees/sahih-muslim-english/SahihMuslimVol.7-Ahadith6723-7563.pdf", 
    fileSize: "11 MB",
  },

]

const urduBooks = [
    {
        title: "صحیح مسلم جلد اول",
        description: "صحیح مسلم اردو ترجمہ جلد اول",
        filePath: "/hadees/sahih-muslim-urdu/_islam_booksinpdf_Sahih-Muslim-Jild-1.pdf", 
        fileSize: "13 MB",
    },
    {
        title: "صحیح مسلم جلد دوم",
        description: "صحیح مسلم اردو ترجمہ جلد دوم",
        filePath: "/hadees/sahih-muslim-urdu/_islam_booksinpdf_Sahih-Muslim-Jild-2.pdf", 
        fileSize: "13 MB",
    },
    {
        title: "صحیح مسلم جلد سوم",
        description: "صحیح مسلم اردو ترجمہ جلد سوم",
        filePath: "/hadees/sahih-muslim-urdu/_islam_booksinpdf_Sahih-Muslim-Jild-3.pdf", 
        fileSize: "12 MB",
    },
    {
        title: "صحیح مسلم جلد چہارم",
        description: "صحیح مسلم اردو ترجمہ جلد چہارم",
        filePath: "/hadees/sahih-muslim-urdu/_islam_booksinpdf_Sahih-Muslim-Jild-4.pdf", 
        fileSize: "13 MB",
    },
    {
        title: "صحیح مسلم جلد پنجم",
        description: "صحیح مسلم اردو ترجمہ جلد پنجم",
        filePath: "/hadees/sahih-muslim-urdu/_islam_booksinpdf_Sahih-Muslim-Jild-5.pdf", 
        fileSize: "13 MB",
    },
]

export default function SahihMuslimPage() {
        const { t } = useTranslation("muslimpage");
    
  
  return (
    <main className="">
      <SahihMuslimBanner />

      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 ">{t("muslimpage.heading-2")} </h2>

        <Tabs defaultValue="english" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="english">English</TabsTrigger>
            <TabsTrigger value="urdu">Urdu</TabsTrigger>
          </TabsList>

          <TabsContent value="english" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {englishBooks.map((book, index) => (
                <SahihMuslimBookCard
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
                <SahihMuslimBookCard
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
