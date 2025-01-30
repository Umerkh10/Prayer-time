"use client"

import { useState } from "react"
import { ChevronRight, Share2, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Static data for duas
const duas = [
  {
    id: "before-ablution",
    title: "Dhikr Before Ablution",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillaahi",
    translation: "In The Name Of Allah",
  },
  {
    id: "after-ablution",
    title: "Dhikr After The Completion Of Ablution",
    arabic: "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ",
    transliteration:
      "Ash-hadu 'an laa 'ilaaha 'illallaahu wahdahu laa shareeka lahu wa 'ash-hadu 'anna Muhammadan 'abduhu wa Rasooluhu.",
    translation:
      "I Bear Witness That None Has The Right To Be Worshipped Except Allah, Alone Without Partner, And I Bear Witness That Muhammad Is His Slave And Messenger.",
  },
]

const categories = [
  { id: "azkar", label: "Azkar" },
  { id: "before", label: "Before" },
  { id: "during", label: "During" },
  { id: "after", label: "After" },
]

export default function DuasPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("before")

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const shareDua = async (dua: (typeof duas)[0]) => {
    try {
      await navigator.share({
        title: dua.title,
        text: `${dua.arabic}\n\n${dua.transliteration}\n\n${dua.translation}`,
      })
    } catch (err) {
      console.error("Failed to share: ", err)
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-6 flex items-center text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground">Duas</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Duas</h1>
        <p className="text-muted-foreground">Quranic Duas in Arabic with Translation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-9 space-y-6">
          {duas.map((dua) => (
            <Card key={dua.id} className="group">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">{dua.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      copyToClipboard(`${dua.arabic}\n\n${dua.transliteration}\n\n${dua.translation}`, dua.id)
                    }
                  >
                    {copiedId === dua.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">Copy dua</span>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => shareDua(dua)}>
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share dua</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="text-2xl text-right font-arabic leading-loose mb-6">{dua.arabic}</p>
                  <Separator className="my-4" />
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Transliteration</p>
                      <p className=" italic leading-relaxed">{dua.transliteration}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Translation</p>
                      <p className="leading-relaxed">{dua.translation}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="md:col-span-3">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-20rem)]">
                <div className="space-y-1">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

