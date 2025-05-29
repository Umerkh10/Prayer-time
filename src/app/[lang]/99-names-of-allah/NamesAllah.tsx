"use client"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation"
import { useTranslation } from "@/hooks/useTranslation"
import { Skeleton } from "@/components/ui/skeleton"

export default function NamesOfAllah() {
    const [query, setQuery] = useState("");

    const pathname = usePathname();
    const { t } = useTranslation("namesofallah")
    const isArabic = pathname.split("/")[1]
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        localStorage.setItem("loading", "true");
        setIsLoading(true);

        const timer = setTimeout(() => {
            localStorage.setItem("loading", "false");
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    const filteredNames = useMemo(() => {
        return namesOfAllah.filter((namesOfAllah) =>
            namesOfAllah.transliteration.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    return (
        <>
        {isLoading ? <div className='px-8 mt-4'>
          <Skeleton className="h-80 w-full" />
          <Skeleton className="mt-3 h-72 rounded-lg w-full" />
          <div className='flex items-center justify-center gap-2 mt-4'>
            <Skeleton className="h-screen w-full" />
          </div>
        </div> :
          (<div className="min-h-screen ">
            <header className="bg-[#1a3a3a] text-white py-8 px-4 md:py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4"> {t("namesofallah.heading")} </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
                    {t("namesofallah.paragraph")}
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section className="mb-12">
                    <div className="max-w-xl mx-auto text-center mb-8">
                        <p className="text-base text-gray-700 dark:text-gray-400">
                        {t("namesofallah.subparagraph")}
                        </p>
                    </div>
                    {/* 
                    <div className="relative max-w-md mx-auto mb-12">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                            type="text"
                            placeholder="Search names..."
                            className="pl-10 bg-background border-[#1a3a3a]/20 focus:border-[#1a3a3a]"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        {query && filteredNames.length > 0 && (
                            <div className="absolute z-10 mt-1 w-full bg-background border border-gray-300 rounded-md shadow-lg ">
                                {filteredNames.map((name, index) => (
                                    <div
                                        key={index}
                                        className="p-2 hover:bg-background cursor-pointer"
                                        onClick={() => setQuery(name.transliteration)}
                                    >
                                        {name.transliteration}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div> */}

                    <div className="flex justify-center mb-12">
                        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-xl">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/GkfyjxmCgBY?si=jaTkLAgbUW5QuzEH"
                                title="99 Names of Allah"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {namesOfAllah.map((name, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a3a3a] text-white text-sm font-medium">
                                            {index + 1}
                                        </span>
                                        <div className="text-2xl font-arabic text-[#1a3a3a] dark:text-zinc-100">{name.arabic}</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1a3a3a] dark:text-zinc-100 mb-1">{name.transliteration}</h3>
                                    <p className="text-sm text-muted-foreground mb-2">Pronunciation: {name.pronunciation}</p>
                                    <p className="text-gray-700 dark:text-foreground">{name.meaning}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>


        </div>)}
        </>
    )
}

const namesOfAllah = [
    {
        arabic: "الرَّحْمَنُ",
        transliteration: "Ar-Rahman",
        pronunciation: "ar-rah-maan",
        meaning:
            "The Most Compassionate, The Beneficent, The One who has plenty of mercy for the believers and the blasphemers in this world and especially for the believers in the hereafter.",
    },
    {
        arabic: "الرَّحِيمُ",
        transliteration: "Ar-Raheem",
        pronunciation: "ar-ra-heem",
        meaning: "The Most Merciful, The One who has plenty of mercy for the believers.",
    },
    {
        arabic: "الْمَلِكُ",
        transliteration: "Al-Malik",
        pronunciation: "al-ma-lik",
        meaning: "The King, The Sovereign, The One who has the complete dominion.",
    },
    {
        arabic: "الْقُدُّوسُ",
        transliteration: "Al-Quddus",
        pronunciation: "al-qud-doos",
        meaning: "The Most Holy, The Pure One, The One who is free from any imperfection.",
    },
    {
        arabic: "السَّلاَمُ",
        transliteration: "As-Salam",
        pronunciation: "as-sa-laam",
        meaning: "The Source of Peace, The One who is free from every imperfection.",
    },
    {
        arabic: "الْمُؤْمِنُ",
        transliteration: "Al-Mu'min",
        pronunciation: "al-mu'-min",
        meaning: "The Guardian of Faith, The One who gives tranquility to the hearts of the believers.",
    },
    {
        arabic: "الْمُهَيْمِنُ",
        transliteration: "Al-Muhaymin",
        pronunciation: "al-mu-hay-min",
        meaning: "The Protector, The One who witnesses the saying and deeds of His creatures.",
    },
    {
        arabic: "الْعَزِيزُ",
        transliteration: "Al-Aziz",
        pronunciation: "al-a-zeez",
        meaning: "The Mighty, The Strong, The Defeater who is not defeated.",
    },
    {
        arabic: "الْجَبَّارُ",
        transliteration: "Al-Jabbar",
        pronunciation: "al-jab-baar",
        meaning: "The Compeller, The One that nothing happens in His dominion except that which He willed.",
    },
    {
        arabic: "الْمُتَكَبِّرُ",
        transliteration: "Al-Mutakabbir",
        pronunciation: "al-mu-ta-kab-bir",
        meaning: "The Greatest, The One who is clear from the attributes of the creatures and from resembling them.",
    },
    {
        arabic: "الْخَالِقُ",
        transliteration: "Al-Khaliq",
        pronunciation: "al-khaa-liq",
        meaning: "The Creator, The One who brings everything from non-existence to existence.",
    },
    {
        arabic: "الْبَارِئُ",
        transliteration: "Al-Bari'",
        pronunciation: "al-baa-ri'",
        meaning: "The Maker, The Creator who has the Power to turn the entities.",
    },
    {
        arabic: "الْمُصَوِّرُ",
        transliteration: "Al-Musawwir",
        pronunciation: "al-mu-saw-wir",
        meaning: "The Fashioner, The One who forms His creatures in different pictures.",
    },
    {
        arabic: "الْغَفَّارُ",
        transliteration: "Al-Ghaffar",
        pronunciation: "al-ghaf-faar",
        meaning: "The All-Forgiving, The One who forgives the sins of His slaves time and time again.",
    },
    {
        arabic: "الْقَهَّارُ",
        transliteration: "Al-Qahhar",
        pronunciation: "al-qah-haar",
        meaning: "The Subduer, The One who has the perfect Power and is not unable over anything.",
    },
    {
        arabic: "الْوَهَّابُ",
        transliteration: "Al-Wahhab",
        pronunciation: "al-wah-haab",
        meaning: "The Bestower, The One who is Generous in giving plenty without any return.",
    },
    {
        arabic: "الرَّزَّاقُ",
        transliteration: "Ar-Razzaq",
        pronunciation: "ar-raz-zaaq",
        meaning: "The Provider, The One who creates all means of nourishment and sustenance.",
    },
    {
        arabic: "الْفَتَّاحُ",
        transliteration: "Al-Fattah",
        pronunciation: "al-fat-taah",
        meaning: "The Opener, The One who opens for His slaves the closed worldly and religious matters.",
    },
    {
        arabic: "اَلْعَلِيْمُ",
        transliteration: "Al-Alim",
        pronunciation: "al-'a-leem",
        meaning: "The All-Knowing, The One who knows all things that have passed and will come to pass.",
    },
    {
        arabic: "الْقَابِضُ",
        transliteration: "Al-Qabid",
        pronunciation: "al-qaa-bid",
        meaning:
            "The Constrictor, The One who constricts the sustenance by His wisdom and expands and widens it with His Generosity and Mercy.",
    },
    {
        arabic: "الْبَاسِطُ",
        transliteration: "Al-Basit",
        pronunciation: "al-baa-sit",
        meaning:
            "The Expander, The One who constricts the sustenance by His wisdom and expands and widens it with His Generosity and Mercy.",
    },
    {
        arabic: "الْخَافِضُ",
        transliteration: "Al-Khafid",
        pronunciation: "al-khaa-fid",
        meaning:
            "The Abaser, The One who lowers whoever He willed by His Destruction and raises whoever He willed by His Endowment.",
    },
    {
        arabic: "الرَّافِعُ",
        transliteration: "Ar-Rafi",
        pronunciation: "ar-raa-fi'",
        meaning:
            "The Exalter, The One who lowers whoever He willed by His Destruction and raises whoever He willed by His Endowment.",
    },
    {
        arabic: "الْمُعِزُّ",
        transliteration: "Al-Mu'izz",
        pronunciation: "al-mu-'izz",
        meaning:
            "The Bestower of Honors, The One who gives esteem to whoever He willed, hence there is no one to degrade Him.",
    },
    {
        arabic: "المُذِلُّ",
        transliteration: "Al-Muzill",
        pronunciation: "al-mu-zill",
        meaning: "The Humiliator, The One who degrades whoever He willed, hence there is no one to give him esteem.",
    },
    {
        arabic: "السَّمِيعُ",
        transliteration: "As-Sami",
        pronunciation: "as-sa-mee'",
        meaning:
            "The All-Hearing, The One who hears all things that are heard by His Eternal Hearing without an ear, instrument or organ.",
    },
    {
        arabic: "الْبَصِيرُ",
        transliteration: "Al-Basir",
        pronunciation: "al-ba-seer",
        meaning:
            "The All-Seeing, The One who sees all things that are seen by His Eternal Seeing without a pupil or any other instrument.",
    },
    {
        arabic: "الْحَكَمُ",
        transliteration: "Al-Hakam",
        pronunciation: "al-ha-kam",
        meaning: "The Judge, The One who judges between His creatures.",
    },
    {
        arabic: "الْعَدْلُ",
        transliteration: "Al-Adl",
        pronunciation: "al-'adl",
        meaning: "The Just, The One who is entitled to do what He does.",
    },
    {
        arabic: "اللَّطِيفُ",
        transliteration: "Al-Latif",
        pronunciation: "al-la-teef",
        meaning: "The Subtle One, The One who is kind to His slaves and endows upon them.",
    },
    {
        arabic: "الْخَبِيرُ",
        transliteration: "Al-Khabir",
        pronunciation: "al-kha-beer",
        meaning: "The All-Aware, The One who knows the truth of things.",
    },
    {
        arabic: "الْحَلِيمُ",
        transliteration: "Al-Halim",
        pronunciation: "al-ha-leem",
        meaning:
            "The Forbearing, The One who delays the punishment for those who deserve it and then He might forgive them.",
    },
    {
        arabic: "الْعَظِيمُ",
        transliteration: "Al-Azim",
        pronunciation: "al-'a-zeem",
        meaning: "The Magnificent, The One who has all the attributes of Greatness.",
    },
    {
        arabic: "الْغَفُورُ",
        transliteration: "Al-Ghafur",
        pronunciation: "al-gha-foor",
        meaning: "The All-Forgiving, The One who forgives a lot.",
    },
    {
        arabic: "الشَّكُورُ",
        transliteration: "Ash-Shakur",
        pronunciation: "ash-sha-koor",
        meaning: "The Appreciative, The One who gives a lot of reward for a little obedience.",
    },
    {
        arabic: "الْعَلِيُّ",
        transliteration: "Al-Ali",
        pronunciation: "al-'a-lee",
        meaning: "The Most High, The One who is clear from the attributes of the creatures.",
    },
    {
        arabic: "الْكَبِيرُ",
        transliteration: "Al-Kabir",
        pronunciation: "al-ka-beer",
        meaning: "The Most Great, The One who is greater than everything in status.",
    },
    {
        arabic: "الْحَفِيظُ",
        transliteration: "Al-Hafiz",
        pronunciation: "al-ha-feez",
        meaning: "The Preserver, The One who protects whatever and whoever He willed to protect.",
    },
    {
        arabic: "المُقيِت",
        transliteration: "Al-Muqit",
        pronunciation: "al-mu-qeet",
        meaning: "The Maintainer, The One who has the Power.",
    },
    {
        arabic: "الْحسِيبُ",
        transliteration: "Al-Hasib",
        pronunciation: "al-ha-seeb",
        meaning: "The Reckoner, The One who gives the satisfaction.",
    },
    {
        arabic: "الْجَلِيلُ",
        transliteration: "Al-Jalil",
        pronunciation: "al-ja-leel",
        meaning: "The Majestic, The One who is attributed with greatness of Power and Glory.",
    },
    {
        arabic: "الْكَرِيمُ",
        transliteration: "Al-Karim",
        pronunciation: "al-ka-reem",
        meaning: "The Generous, The One who is clear from abjectness.",
    },
    {
        arabic: "الرَّقِيبُ",
        transliteration: "Ar-Raqib",
        pronunciation: "ar-ra-qeeb",
        meaning: "The Watchful, The One that nothing is absent from Him.",
    },
    {
        arabic: "الْمُجِيبُ",
        transliteration: "Al-Mujib",
        pronunciation: "al-mu-jeeb",
        meaning:
            "The Responsive, The One who answers the one in need if he asks Him and rescues the yearner if he calls upon Him.",
    },
    {
        arabic: "الْوَاسِعُ",
        transliteration: "Al-Wasi",
        pronunciation: "al-waa-si'",
        meaning: "The All-Encompassing, The Knowledgeable.",
    },
    {
        arabic: "الْحَكِيمُ",
        transliteration: "Al-Hakim",
        pronunciation: "al-ha-keem",
        meaning: "The Wise, The One who is correct in His doings.",
    },
    {
        arabic: "الْوَدُودُ",
        transliteration: "Al-Wadud",
        pronunciation: "al-wa-dood",
        meaning: "The Loving, The One who loves His believing slaves and His believing slaves love Him.",
    },
    {
        arabic: "الْمَجِيدُ",
        transliteration: "Al-Majid",
        pronunciation: "al-ma-jeed",
        meaning: "The Most Glorious, The One who is with perfect Power, High Status, Compassion, Generosity and Kindness.",
    },
    {
        arabic: "الْبَاعِثُ",
        transliteration: "Al-Ba'ith",
        pronunciation: "al-baa-'ith",
        meaning: "The Resurrector, The One who resurrects His slaves after death for reward and/or punishment.",
    },
    {
        arabic: "الشَّهِيدُ",
        transliteration: "Ash-Shahid",
        pronunciation: "ash-sha-heed",
        meaning: "The Witness, The One who nothing is absent from Him.",
    },
    {
        arabic: "الْحَقُّ",
        transliteration: "Al-Haqq",
        pronunciation: "al-haqq",
        meaning: "The Truth, The One who truly exists.",
    },
    {
        arabic: "الْوَكِيلُ",
        transliteration: "Al-Wakil",
        pronunciation: "al-wa-keel",
        meaning: "The Trustee, The One who gives the satisfaction and is relied upon.",
    },
    {
        arabic: "الْقَوِيُّ",
        transliteration: "Al-Qawiyy",
        pronunciation: "al-qa-wee",
        meaning: "The Most Strong, The One with the complete Power.",
    },
    {
        arabic: "الْمَتِينُ",
        transliteration: "Al-Matin",
        pronunciation: "al-ma-teen",
        meaning: "The Firm, The One with extreme Power which is un-interrupted and He does not get tired.",
    },
    {
        arabic: "الْوَلِيُّ",
        transliteration: "Al-Waliyy",
        pronunciation: "al-wa-lee",
        meaning: "The Protector, The Supporter.",
    },
    {
        arabic: "الْحَمِيدُ",
        transliteration: "Al-Hamid",
        pronunciation: "al-ha-meed",
        meaning: "The Praiseworthy, The One who deserves to be praised.",
    },
    {
        arabic: "الْمُحْصِي",
        transliteration: "Al-Muhsi",
        pronunciation: "al-muh-see",
        meaning: "The Counter, The One who the count of things are known to him.",
    },
    {
        arabic: "الْمُبْدِئُ",
        transliteration: "Al-Mubdi",
        pronunciation: "al-mub-di'",
        meaning: "The Originator, The One who started the human being.",
    },
    {
        arabic: "الْمُعِيدُ",
        transliteration: "Al-Mu'id",
        pronunciation: "al-mu-'eed",
        meaning: "The Restorer, The One who brings back the creatures after death.",
    },
    {
        arabic: "الْمُحْيِي",
        transliteration: "Al-Muhyi",
        pronunciation: "al-muh-yee",
        meaning: "The Giver of Life, The One who took out a living human from semen that does not have a soul.",
    },
    {
        arabic: "اَلْمُمِيتُ",
        transliteration: "Al-Mumit",
        pronunciation: "al-mu-meet",
        meaning: "The Bringer of Death, The One who renders the living dead.",
    },
    {
        arabic: "الْحَيُّ",
        transliteration: "Al-Hayy",
        pronunciation: "al-hayy",
        meaning:
            "The Ever Living, The One attributed with a life that is unlike our life and is not that of a combination of soul, flesh or blood.",
    },
    {
        arabic: "الْقَيُّومُ",
        transliteration: "Al-Qayyum",
        pronunciation: "al-qay-yoom",
        meaning: "The Self-Subsisting, The One who remains and does not end.",
    },
    {
        arabic: "الْوَاجِدُ",
        transliteration: "Al-Wajid",
        pronunciation: "al-waa-jid",
        meaning: "The Perceiver, The Rich who is never poor. Al-Wajd is Richness.",
    },
    {
        arabic: "الْمَاجِدُ",
        transliteration: "Al-Majid",
        pronunciation: "al-maa-jid",
        meaning: "The Noble, The One who is Majid.",
    },
    {
        arabic: "الْواحِدُ",
        transliteration: "Al-Wahid",
        pronunciation: "al-waa-hid",
        meaning: "The One, The One without a partner.",
    },
    {
        arabic: "اَلاَحَدُ",
        transliteration: "Al-Ahad",
        pronunciation: "al-a-had",
        meaning: "The Unique, The One.",
    },
    {
        arabic: "الصَّمَدُ",
        transliteration: "As-Samad",
        pronunciation: "as-sa-mad",
        meaning: "The Eternal, The Master who is relied upon in matters and reverted to in ones needs.",
    },
    {
        arabic: "الْقَادِرُ",
        transliteration: "Al-Qadir",
        pronunciation: "al-qaa-dir",
        meaning: "The Capable, The One attributed with Power.",
    },
    {
        arabic: "الْمُقْتَدِرُ",
        transliteration: "Al-Muqtadir",
        pronunciation: "al-muq-ta-dir",
        meaning: "The Powerful, The One with the perfect Power that nothing is withheld from Him.",
    },
    {
        arabic: "الْمُقَدِّمُ",
        transliteration: "Al-Muqaddim",
        pronunciation: "al-mu-qad-dim",
        meaning: "The Expediter, The One who puts things in their right places.",
    },
    {
        arabic: "الْمُؤَخِّرُ",
        transliteration: "Al-Mu'akhkhir",
        pronunciation: "al-mu-akh-khir",
        meaning: "The Delayer, The One who puts things in their right places.",
    },
    {
        arabic: "الأوَّلُ",
        transliteration: "Al-Awwal",
        pronunciation: "al-aw-wal",
        meaning: "The First, The One whose Existence is without a beginning.",
    },
    {
        arabic: "الآخِرُ",
        transliteration: "Al-Akhir",
        pronunciation: "al-aa-khir",
        meaning: "The Last, The One whose Existence is without an end.",
    },
    {
        arabic: "الظَّاهِرُ",
        transliteration: "Az-Zahir",
        pronunciation: "az-zaa-hir",
        meaning: "The Manifest, The One that nothing is above Him and nothing is underneath Him.",
    },
    {
        arabic: "الْبَاطِنُ",
        transliteration: "Al-Batin",
        pronunciation: "al-baa-tin",
        meaning: "The Hidden, The One that nothing is above Him and nothing is underneath Him.",
    },
    {
        arabic: "الْوَالِي",
        transliteration: "Al-Wali",
        pronunciation: "al-waa-lee",
        meaning: "The Governor, The One who owns things and manages them.",
    },
    {
        arabic: "الْمُتَعَالِي",
        transliteration: "Al-Muta'ali",
        pronunciation: "al-mu-ta-'a-lee",
        meaning: "The Most Exalted, The One who is clear from the attributes of the creation.",
    },
    {
        arabic: "الْبَرُّ",
        transliteration: "Al-Barr",
        pronunciation: "al-barr",
        meaning:
            "The Source of All Goodness, The One who is kind to His creatures, who covered them with His sustenance and specified whoever He willed among them by His support, protection, and special mercy.",
    },
    {
        arabic: "التَّوَابُ",
        transliteration: "At-Tawwab",
        pronunciation: "at-taw-waab",
        meaning:
            "The Ever-Returning, The One who grants repentance to whoever He willed among His creatures and accepts their repentance.",
    },
    {
        arabic: "الْمُنْتَقِمُ",
        transliteration: "Al-Muntaqim",
        pronunciation: "al-mun-ta-qim",
        meaning: "The Avenger, The One who victoriously prevails over His enemies and punishes them for their sins.",
    },
    {
        arabic: "العَفُوُّ",
        transliteration: "Al-'Afuww",
        pronunciation: "al-'a-foow",
        meaning: "The Pardoner, The One with wide forgiveness.",
    },
    {
        arabic: "الرَّؤُوفُ",
        transliteration: "Ar-Ra'uf",
        pronunciation: "ar-ra-'oof",
        meaning: "The Compassionate, The One with extreme Mercy.",
    },
    {
        arabic: "مَالِكُ الْمُلْكِ",
        transliteration: "Malik-ul-Mulk",
        pronunciation: "maa-lik-ul-mulk",
        meaning: "The Owner of All Sovereignty, The One who controls the dominion and gives dominion to whoever He willed.",
    },
    {
        arabic: "ذُوالْجَلاَلِ وَالإكْرَامِ",
        transliteration: "Dhul-Jalali wal-Ikram",
        pronunciation: "zul-ja-laa-li wal-ik-raam",
        meaning: "The Lord of Majesty and Bounty, The One who deserves to be Exalted and not denied.",
    },
    {
        arabic: "الْمُقْسِطُ",
        transliteration: "Al-Muqsit",
        pronunciation: "al-muq-sit",
        meaning: "The Equitable, The One who is Just in His judgment.",
    },
    {
        arabic: "الْجَامِعُ",
        transliteration: "Al-Jami",
        pronunciation: "al-jaa-mi'",
        meaning:
            "The Gatherer, The One who gathers the creatures on a day that there is no doubt about, that is the Day of Judgment.",
    },
    {
        arabic: "الْغَنِيُّ",
        transliteration: "Al-Ghani",
        pronunciation: "al-gha-nee",
        meaning: "The Self-Sufficient, The One who does not need the creation.",
    },
    {
        arabic: "الْمُغْنِي",
        transliteration: "Al-Mughni",
        pronunciation: "al-mugh-nee",
        meaning: "The Enricher, The One who satisfies the necessities of the creatures.",
    },
    {
        arabic: "اَلْمَانِعُ",
        transliteration: "Al-Mani'",
        pronunciation: "al-maa-ni'",
        meaning: "The Preventer, The One who prevents or withholds whatever He wills from His servants.",
    },
    {
        arabic: "الضَّارَّ",
        transliteration: "Ad-Darr",
        pronunciation: "ad-daarr",
        meaning: "The Distresser, The One who makes harm reach to whoever He willed.",
    },
    {
        arabic: "النَّافِعُ",
        transliteration: "An-Nafi",
        pronunciation: "an-naa-fi'",
        meaning: "The Propitious, The One who gives benefits to whoever He wills.",
    },
    {
        arabic: "النُّورُ",
        transliteration: "An-Nur",
        pronunciation: "an-noor",
        meaning: "The Light, The One who guides.",
    },
    {
        arabic: "الْهَادِي",
        transliteration: "Al-Hadi",
        pronunciation: "al-haa-dee",
        meaning:
            "The Guide, The One whom with His Guidance His believers were guided, and with His Guidance the living beings have been guided to what is beneficial for them.",
    },
    {
        arabic: "الْبَدِيعُ",
        transliteration: "Al-Badi",
        pronunciation: "al-ba-dee'",
        meaning: "The Originator, The One who created the creation and formed it without any preceding example.",
    },
    {
        arabic: "اَلْبَاقِي",
        transliteration: "Al-Baqi",
        pronunciation: "al-baa-qee",
        meaning: "The Everlasting, The One that the state of non-existence is impossible for Him.",
    },
    {
        arabic: "الْوَارِثُ",
        transliteration: "Al-Warith",
        pronunciation: "al-waa-rith",
        meaning: "The Inheritor, The One whose Existence remains.",
    },
    {
        arabic: "الرَّشِيدُ",
        transliteration: "Ar-Rashid",
        pronunciation: "ar-ra-sheed",
        meaning: "The Guide to the Right Path, The One who guides.",
    },
    {
        arabic: "الصَّبُورُ",
        transliteration: "As-Sabur",
        pronunciation: "as-sa-boor",
        meaning: "The Patient, The One who does not quickly punish the sinners.",
    },
]

