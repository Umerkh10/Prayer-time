"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SahihBanner } from "./SahihBanner"
import { BookCard } from "./book-card"
import { useEffect, useState } from "react"
import { useTranslation } from "@/hooks/useTranslation"


const englishBooks = [
    {
        title: "Sahih al-Bukhari in English",
        description: "Sahih al-Bukhari in English Volume 1",
        filePath: "/hadees/sahih-albukhari-english/_islam_booksinpdf_Saheh-Al-Bukhari-Vol-1.pdf", // Path to your PDF file
        fileSize: "25 MB",
    },
    {
        title: "Sahih al-Bukhari in English",
        description: "Sahih al-Bukhari in English Volume 2",
        filePath: "/hadees/sahih-albukhari-english/_islam_booksinpdf_Saheh-Al-Bukhari-Vol-2.pdf", // Path to your PDF file
        fileSize: "12 MB",
    },
    {
        title: "Sahih al-Bukhari in English",
        description: "Sahih al-Bukhari in English Volume 3",
        filePath: "/hadees/sahih-albukhari-english/_islam_booksinpdf_Saheh-Al-Bukhari-Vol-3.pdf", // Path to your PDF file
        fileSize: "18 MB",
    },
    {
        title: "Sahih al-Bukhari in English",
        description: "Sahih al-Bukhari in English Volume 4",
        filePath: "/hadees/sahih-albukhari-english/_islam_booksinpdf_Saheh-Al-Bukhari-Vol-4.pdf", // Path to your PDF file
        fileSize: "19 MB",
    },
    {
        title: "Sahih al-Bukhari in English",
        description: "Sahih al-Bukhari in English Volume 5",
        filePath: "/hadees/sahih-albukhari-english/_islam_booksinpdf_Saheh-Al-Bukhari-Vol-5.pdf", // Path to your PDF file
        fileSize: "23 MB",
    },
    {
        title: "Sahih al-Bukhari in English",
        description: "Sahih al-Bukhari in English Volume 6",
        filePath: "/hadees/sahih-albukhari-english/_islam_booksinpdf_Saheh-Al-Bukhari-Vol-6.pdf", // Path to your PDF file
        fileSize: "24 MB",
    },
    {
        title: "Sahih al-Bukhari in English",
        description: "Sahih al-Bukhari in English Volume 7",
        filePath: "/hadees/sahih-albukhari-english/_islam_booksinpdf_Saheh-Al-Bukhari-Vol-7.pdf", // Path to your PDF file
        fileSize: "26 MB",
    },
    {
        title: "Sahih al-Bukhari in English",
        description: "Sahih al-Bukhari in English Volume 8",
        filePath: "/hadees/sahih-albukhari-english/_islam_booksinpdf_Saheh-Al-Bukhari-Vol-8.pdf", // Path to your PDF file
        fileSize: "21 MB",
    },
    {
        title: "Sahih al-Bukhari in English",
        description: "Sahih al-Bukhari in English Volume 9",
        filePath: "/hadees/sahih-albukhari-english/_islam_booksinpdf_Saheh-Al-Bukhari-Vol-9.pdf", // Path to your PDF file
        fileSize: "22 MB",
    },
]

const urduBooks = [
    {
        title: "مکمل مجموعہ",
        description: "صحیح البخاری کا مکمل اردو ترجمہ",
        filePath: "/hadees/sahih-albukhari-urdu/_islam_booksinpdf_Sahi-Bukhari-Urdu-1.pdf", // Path to your PDF file
        fileSize: "13 MB",
    },
    {
        title: "مختصر نسخہ",
        description: "صحیح احادیث کا خلاصہ",
        filePath: "/hadees/sahih-albukhari-urdu/_islam_booksinpdf_Sahi-Bukhari-Urdu-2.pdf", // Path to your PDF file
        fileSize: "13 MB",
    },
    {
        title: "مختصر نسخہ",
        description: "صحیح احادیث کا خلاصہ",
        filePath: "/hadees/sahih-albukhari-urdu/_islam_booksinpdf_Sahi-Bukhari-Urdu-3.pdf", // Path to your PDF file
        fileSize: "12 MB",
    },
    {
        title: "مختصر نسخہ",
        description: "صحیح احادیث کا خلاصہ",
        filePath: "/hadees/sahih-albukhari-urdu/_islam_booksinpdf_Sahi-Bukhari-Urdu-4.pdf", // Path to your PDF file
        fileSize: "13 MB",
    },
    {
        title: "مختصر نسخہ",
        description: "صحیح احادیث کا خلاصہ",
        filePath: "/hadees/sahih-albukhari-urdu/_islam_booksinpdf_Sahi-Bukhari-Urdu-5.pdf", // Path to your PDF file
        fileSize: "13 MB",
    },
    {
        title: "مختصر نسخہ",
        description: "صحیح احادیث کا خلاصہ",
        filePath: "/hadees/sahih-albukhari-urdu/_islam_booksinpdf_Sahi-Bukhari-Urdu-6.pdf", // Path to your PDF file
        fileSize: "14 MB",
    },
]

export default function SahihBukhariPage() {
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useTranslation("bukharipage");

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
            <SahihBanner />

            <div className="mx-auto max-w-screen-xl px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-8 ">{t("bukharipage.heading-2")}</h2>

                <Tabs defaultValue="english" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="english">English</TabsTrigger>
                        <TabsTrigger value="urdu">Urdu</TabsTrigger>
                    </TabsList>

                    <TabsContent value="english" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {englishBooks.map((book, index) => (
                                <BookCard
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
                                <BookCard
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
