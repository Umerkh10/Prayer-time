"use client"

import { useEffect, useState } from "react"
import { ChevronRight, Share2, Copy, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { urlSplitter } from "@/lib"
import englishLang from "../../../../public/locales/en.json"
import frenchLang from "../../../../public/locales/fr.json"
import arabicLang from "../../../../public/locales/ar.json"
import { useTranslation } from "@/hooks/useTranslation"
import { Skeleton } from "@/components/ui/skeleton"




export default function DuasPage() {
  const pathname = usePathname();
  const lang = urlSplitter(pathname)

  const duas = [
    {
      id: "before-ablution",
      title: "Dhikr Before Ablution",
      arabic: "بِسْمِ اللَّهِ",
      transliteration: "Bismillaahi",
      translation: "In The Name Of Allah",
      category: "before",
    },
    {
      id: "after-ablution",
      title: "Dhikr After The Completion Of Ablution",
      arabic: "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ",
      transliteration:
        "Ash-hadu 'an laa 'ilaaha 'illallaahu wahdahu laa shareeka lahu wa 'ash-hadu 'anna Muhammadan 'abduhu wa Rasooluhu.",
      translation:
        "I Bear Witness That None Has The Right To Be Worshipped Except Allah, Alone Without Partner, And I Bear Witness That Muhammad Is His Slave And Messenger.",
      category: "after",
    },
    {
      id: "before-eating",
      title: "Dhikr Before Eating",
      arabic: "بِسْمِ اللَّهِ",
      transliteration: "Bismillaahi",
      translation: "In The Name Of Allah",
      category: "before",
    },
    {
      id: "after-eating",
      title: "Dhikr After Eating",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
      transliteration: "Alhamdu lillaahil-lathee at'amanaa wa saqaanaa wa ja'alanaa Muslimeen.",
      translation: "All praise is due to Allah Who has fed us, given us drink, and made us Muslims.",
      category: "after",
    },
    {
      id: "before-sleeping",
      title: "Dhikr Before Sleeping",
      arabic: "بِسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
      transliteration: "Bismika Allahumma amootu wa ahyaa.",
      translation: "In Your Name, O Allah, I die and I live.",
      category: "before",
    },
    {
      id: "after-waking-up",
      title: "Dhikr After Waking Up",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      transliteration: "Alhamdu lillaahil-lathee ahyaanaa ba'da maa amaatanaa wa ilayhin-nushoor.",
      translation:
        "All praise is due to Allah, Who has given us life after He has caused us to die, and to Him is the return.",
      category: "after",
    },
    {
      id: "morning-azkar",
      title: "Morning Azkar",
      arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
      transliteration: "Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namootu wa ilaykan-nushoor.",
      translation:
        "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.",
      category: "azkar",
    },
    {
      id: "evening-azkar",
      title: "Evening Azkar",
      arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
      transliteration: "Allahumma bika amsayna wa bika asbahna wa bika nahya wa bika namootu wa ilaykal-maseer.",
      translation:
        "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is our return.",
      category: "azkar",
    },
    {
      id: "before-entering-bathroom",
      title: "Dhikr Before Entering The Bathroom",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ",
      transliteration: "Allahumma inni a'udhu bika minal khubthi wal khabaa'ith.",
      translation: "O Allah, I seek refuge with You from the male and female devils.",
      category: "before",
    },
    {
      id: "after-exiting-bathroom",
      title: "Dhikr After Exiting The Bathroom",
      arabic: "غُفْرَانَكَ",
      transliteration: "Ghufraanaka.",
      translation: "I seek Your forgiveness.",
      category: "after",
    },
    {
      id: "before-journey",
      title: "Dhikr Before Starting A Journey",
      arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
      transliteration:
        "Subhaanal-lathee sakhkhara lanaa haathaa wamaa kunnaa lahu muqrineen wa inna ilaa rabbinaa lamunqaliboon.",
      translation:
        "Glory is to Him Who has subjected this to us, and we could not have otherwise subdued it. And indeed, to our Lord we will return.",
      category: "before",
    },
    {
      id: "during-journey",
      title: "Dhikr During A Journey",
      arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَىٰ وَمِنَ الْعَمَلِ مَا تَرْضَىٰ",
      transliteration: "Allahumma innaa nas’aluka fi safarina haatha al-birra wat-taqwa wa minal ‘amali ma tardhaa.",
      translation: "O Allah, we ask You during this journey for righteousness and piety and for actions that please You.",
      category: "during",
    },
    {
      id: "after-returning-home",
      title: "Dhikr After Returning Home From A Journey",
      arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
      transliteration: "Aayiboona taa’iboona ‘aabidoona lirabbinaa haamidoon.",
      translation: "We return repenting, worshiping, and praising our Lord.",
      category: "after",
    },
  ]

  const categories = [
    { id: "all", label: "All" },
    { id: "azkar", label: "Azkar" },
    { id: "before", label: "Before" },
    { id: "during", label: "During" },
    { id: "after", label: "After" },
  ]

  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [duasContent, setDuasContent] = useState<any>(null)
  const [buttonLabel, setButtonLabel] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true);


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


  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false); // This will now execute AFTER 2 seconds
    }, 800);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  useEffect(() => {

    if (lang === "fr") {
      setDuasContent(frenchLang.duas.duasTranslation);
      setButtonLabel(frenchLang.duas.categories);
    } else if (lang === "en" || pathname === "/") {
      setDuasContent(englishLang.duas.duasTranslation);
      setButtonLabel(englishLang.duas.categories);
    } else if (lang === "ar" || pathname === "/") {
      setDuasContent(arabicLang.duas.duasTranslation);
      setButtonLabel(arabicLang.duas.categories);
    }
  }, [lang]);

  const { t } = useTranslation("duas");
  const isArabic = pathname.split("/")[1]



  return (
    <>
      {isLoading ? <div className='px-8 mt-4'>
        <Skeleton className="h-36 w-full" />
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
          <div className="col-span-3">
          <Skeleton className="h-80 rounded-lg w-full" />
          </div>
          <div>
          <Skeleton className="h-64 w-full" />

          </div>
        </div>
      </div> :
        (<div className="container mx-auto p-4 md:p-8">
          <div className={`mb-6 flex items-center text-sm text-muted-foreground ${isArabic === "ar" ? "justify-end text-right" : "justify-start text-left"}`}>
            <Link href="/" className="hover:text-primary">
              {t("calender.homelink")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">{t("duas.title")}</span>
          </div>

          <div className={`mb-8 text-center  ${isArabic === "ar" ? "justify-end text-right" : "justify-start md:text-left"}`}>
            <h1 className="md:text-3xl text-xl font-bold mb-2">{t("duas.title")}</h1>
            <p className="text-muted-foreground md:text-base text-sm">{t("duas.desc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="order-2 md:order-1 md:col-span-9 space-y-6 ">
              {duasContent
                ?.filter((dua: any) =>
                  activeCategory === "all"
                    ? true
                    : ["azkar", "before", "after", "during"].includes(activeCategory) ? dua.category === activeCategory || dua.category === "azkar" : dua.category === activeCategory
                )
                .map((dua: any) => (
                  <Card key={dua.id} className="group scale-90 md:scale-100">
                    <CardHeader className="flex flex-row items-center justify-between ">
                      <CardTitle className="md:text-xl text-lg">{dua.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            copyToClipboard(
                              `${dua.arabic}\n\n${dua.transliteration}\n\n${dua.translation}`,
                              dua.id
                            )
                          }
                        >
                          {copiedId === dua.id ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                          <span className="sr-only">{t("duas.copydua")}</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => shareDua(dua)}>
                          <Share2 className="h-4 w-4" />
                          <span className="sr-only">{t("duas.sharedua")}</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-muted/50 p-6 rounded-lg">
                        <p className="text-2xl text-right font-arabic leading-loose mb-6">
                          {dua.arabic}
                        </p>
                        <Separator className="my-4" />
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-2">
                              {t("duas.translitration")}
                            </p>
                            <p className="italic leading-relaxed">
                              {dua.transliteration}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-2">
                              {t("duas.translationword")}
                            </p>
                            <p className="leading-relaxed text-sm md:text-base">{t(dua.translation)}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>


            <div className="order-1 md:order-2 md:col-span-3">
              <Card className="sticky top-4 scale-90 md:scale-100">
                <CardHeader>
                  <CardTitle>{t("duas.categorytitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="">
                    <div className="space-y-1">
                      {buttonLabel.map((category: any) => (
                        <Button
                          key={category.id}
                          variant={activeCategory === category.id ? "secondary" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setActiveCategory(category.id)}
                        >
                          {t(category.label)}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>)}
    </>
  )
}

