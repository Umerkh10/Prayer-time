"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import moment from "moment-hijri"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { checkIsPathnameIsEqualToLang } from "@/lib"
import { usePathname } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"

const years = Array.from({ length: 200 }, (_, i) => 1938 + i)
const months = {
  en: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  ar: [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ],
  fr: [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ]
}

const weekDays = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  ar: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  fr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
}

export default function IslamicCalendar() {
  const pathname = usePathname()
  const [date, setDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation("calender")
  const isLang = checkIsPathnameIsEqualToLang(pathname)
  const isArabic = pathname.split("/")[1]
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null)

  const hijriDate = moment(date).subtract(1, "day").locale(pathname.includes("/ar") ? "ar" : "en").format("iD iMMMM iYYYY")
  
  const [hijriDay, hijriMonth, hijriYear] = hijriDate.split(" ")

  const nextMonth = () => {
    setSlideDirection("left")
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }

  const previousMonth = () => {
    setSlideDirection("right")
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
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

  const goToToday = () => setDate(new Date())

  const selectMonth = (month: string) => {
    let monthIndex;
    if (pathname.includes("/ar")) {
      monthIndex = months.ar.indexOf(month);
    } else if (pathname.includes("/fr")) {
      monthIndex = months.fr.indexOf(month);
    } else {
      monthIndex = months.en.indexOf(month);
    }
    setDate(new Date(date.getFullYear(), monthIndex, 1));
  }

  const selectYear = (year: number) => {
    setDate(new Date(year, date.getMonth(), 1))
  }

  const renderCalendar = () => {
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    const rows = []
    let days = []

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 md:h-10" />)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={cn(
            "h-8 md:h-10 w-8 md:w-10 flex items-center justify-center rounded-full cursor-pointer transition-colors text-sm md:text-base",
            day === date.getDate() && "bg-green-600 text-white",
            "hover:bg-green-600/80 hover:text-white",
          )}
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth(), day))}
        >
          {day}
        </div>,
      )

      if (days.length === 7) {
        rows.push(<div key={day} className="grid grid-cols-7 gap-1 mb-1">{days}</div>)
        days = []
      }
    }

    if (days.length > 0) {
      rows.push(<div key="last-row" className="grid grid-cols-7 gap-1 mb-1">{days}</div>)
    }


    return (
      <div className={cn(
        "transition-all duration-300 ease-in-out",
        slideDirection === "left" && "animate-slide-left",
        slideDirection === "right" && "animate-slide-right",
      )}>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays[pathname.includes("/ar") ? "ar" : pathname.includes("/fr") ? "fr" : "en"].map((day) => (
            <div key={day} className="h-8 md:h-10 flex items-center justify-center">
              <span className="text-xs md:text-sm font-medium text-muted-foreground">{day}</span>
            </div>
          ))}
        </div>
        {rows}
      </div>
    )
  }




  return (

    <>
      {isLoading ? <div className='px-8 mt-4'>
        <Skeleton className="h-48 w-full" />
        <Skeleton className="mt-3 h-screen rounded-lg w-full" />
       
      </div> :
        (<div className="container mx-auto py-4 px-4 md:py-8 md:px-0">
          <div className={`mt-5 mb-6 flex items-center text-sm text-muted-foreground ${isArabic === "ar" ? "justify-end text-right" : "justify-start text-left"}`}>
            <Link href={isLang ? pathname : "/"} className="hover:text-green-500">
              {t("calender.homelink")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground"> {t("calender.title")}</span>
          </div>

          <div className={`mb-8 ${isArabic === "ar" ? "justify-end text-right" : "justify-start text-left"}`}>
            <h1 className="text-3xl font-bold mb-2">{t("calender.title")}</h1>
            <p className="text-muted-foreground">{t("calender.desc")}</p>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center"> {t("calender.calendertitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <Button variant="outline" size="icon" onClick={previousMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <Select onValueChange={selectMonth}>
                  <SelectTrigger>
                    <SelectValue placeholder={months[pathname.includes("/ar") ? "ar" : pathname.includes("/fr") ? "fr" : "en"][date.getMonth()]} />
                  </SelectTrigger>
                  <SelectContent>
                    {months[pathname.includes("/ar") ? "ar" : pathname.includes("/fr") ? "fr" : "en"].map((month) => (
                      <SelectItem key={month} value={month}>{month}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select onValueChange={(value) => selectYear(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder={date.getFullYear().toString()} />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={goToToday} className="w-full md:w-auto">
                  {t("calender.buttontoday")}</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                <div className="md:col-span-5 order-2 md:order-1">
                  <Card>
                    <CardContent className="p-4">{renderCalendar()}</CardContent>
                  </Card>
                </div>
                <div className="md:col-span-2 order-1 md:order-2">
                  <Card className="bg-green-500/5">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-green-500">Islamic Date</h2>
                        <div className="text-4xl font-bold text-green-500">{hijriDay}</div>
                        <div className="text-2xl font-medium text-green-500/90">{hijriMonth}</div>
                        <div className="text-xl text-green-500/80">{hijriYear} H</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>)}
    </>
  )
}
