"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JamiaTirmaziBanner } from "./jamia-tirmazi-banner"
import { JamiaTirmaziBookCard } from "./jamia-tirmazi-bookcard"
import { useEffect, useState } from "react"
import { useTranslation } from "@/hooks/useTranslation"


const englishBooks = [
    {
        title: "Jamia Tirmazi in English",
        description: "Jamia Tirmazi in English Volume 1",
        filePath: "/hadees/jamia-tirmazi-english/Jami-at-Tirmidhi-Vol-1-1-543.pdf",
        fileSize: "12 MB",
    },
    {
        title: "Jamia Tirmazi in English",
        description: "Jamia Tirmazi in English Volume 2",
        filePath: "/hadees/jamia-tirmazi-english/Jami-at-Tirmidhi-Vol-2-544-1204.pdf",
        fileSize: "10 MB",
    },
    {
        title: "Jamia Tirmazi in English",
        description: "Jamia Tirmazi in English Volume 3",
        filePath: "/hadees/jamia-tirmazi-english/Jami-at-Tirmidhi-Vol-3-1205-1896.pdf",
        fileSize: "10 MB",
    },
    {
        title: "Jamia Tirmazi in English",
        description: "Jamia Tirmazi in English Volume 4",
        filePath: "/hadees/jamia-tirmazi-english/Jami-at-Tirmidhi-Vol-4-1897-2605.pdf",
        fileSize: "10 MB",
    },
    {
        title: "Jamia Tirmazi in English",
        description: "Jamia Tirmazi in English Volume 5",
        filePath: "/hadees/jamia-tirmazi-english/Jami-at-Tirmidhi-Vol-5-2606-3290.pdf",
        fileSize: "11 MB",
    },
    {
        title: "Jamia Tirmazi in English",
        description: "Jamia Tirmazi in English Volume 6",
        filePath: "/hadees/jamia-tirmazi-english/Jami-at-Tirmidhi-Vol-6-3291-3956.pdf",
        fileSize: "10 MB",
    },
]

const urduBooks = [
    {
        title: "جامع ترمذی جلد اول",
        description: "جامع ترمذی اردو ترجمہ جلد اول",
        filePath: "/hadees/jamia-tirmazi-urdu/Jamia-Tirmazi-Mutarjam-(-Tehqiq-w-Takhreej-Shuda-Audition-)-1-URDU.pdf",
        fileSize: "13 MB",
    },
    {
        title: "جامع ترمذی جلد دوم",
        description: "جامع ترمذی اردو ترجمہ جلد دوم",
        filePath: "/hadees/jamia-tirmazi-urdu/Jamia-Tirmazi-Mutarjam-(-Tehqiq-w-Takhreej-Shuda-Audition-)-2-URDU.pdf",
        fileSize: "13 MB",
    },
]

export default function JamiaTirmaziPage() {
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useTranslation("jamiapage");

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
            <JamiaTirmaziBanner />

            <div className="mx-auto max-w-screen-xl px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-8 ">{t("jamiapage.heading-2")}</h2>

                <Tabs defaultValue="english" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="english">English</TabsTrigger>
                        <TabsTrigger value="urdu">Urdu</TabsTrigger>
                    </TabsList>

                    <TabsContent value="english" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {englishBooks.map((book, index) => (
                                <JamiaTirmaziBookCard
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
                                <JamiaTirmaziBookCard
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
