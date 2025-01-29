"use client"

import { useState, useEffect } from "react"
import {addMonths,subMonths,format,startOfMonth,endOfMonth,eachDayOfInterval,isSameMonth,isSameDay,isToday,getDay,} from "date-fns"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const years = Array.from({ length: 200 }, (_, i) => 1900 + i)
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function IslamicCalendar() {
  const [date, setSelectedDate] = useState<Date>(new Date())
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null)

  const nextMonth = () => {
    setSlideDirection("left")
    setSelectedDate((prev) => addMonths(prev, 1))
  }

  const previousMonth = () => {
    setSlideDirection("right")
    setSelectedDate((prev) => subMonths(prev, 1))
  }

  const goToToday = () => setSelectedDate(new Date())

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideDirection(null)
    }, 500)
    return () => clearTimeout(timer)
  }, [slideDirection]) // Updated dependency

  // Hijri calendar data
  const hijriMonths = [
    "Muharram",
    "Safar",
    "Rabi' al-Awwal",
    "Rabi' al-Thani",
    "Jumada al-Ula",
    "Jumada al-Thani",
    "Rajab",
    "Sha'ban",
    "Ramadan",
    "Shawwal",
    "Dhu al-Qi'dah",
    "Dhu al-Hijjah",
  ]

  // Function to convert Gregorian to Hijri (simplified)
  const getHijriDate = (date: Date) => {
    const gregorianYear = date.getFullYear()
    const gregorianMonth = date.getMonth()
    const gregorianDay = date.getDate()

    // This is a simplified conversion - for production use a proper Hijri calendar library
    const hijriYear = Math.floor((gregorianYear - 622) * 1.0307)
    const hijriMonth = ((gregorianMonth + 2) % 12) + 1 // Simplified
    const hijriDay = gregorianDay // Simplified

    return {
      day: hijriDay,
      month: hijriMonths[hijriMonth - 1],
      year: hijriYear,
    }
  }

  const hijriDate = getHijriDate(date)

  const renderCalendar = () => {
    const monthStart = startOfMonth(date)
    const monthEnd = endOfMonth(date)
    const startDate = monthStart
    const endDate = monthEnd

    const dateFormat = "d"
    const rows = []

    let days = []
    let day = startDate
    let formattedDate = ""

    // Add empty cells for days before the start of the month
    const startDay = getDay(monthStart)
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 md:h-10" />)
    }

    while (day <= endDate) {
      formattedDate = format(day, dateFormat)
      const cloneDay = day
      days.push(
        <div
          className={cn(
            "h-8 md:h-10 w-8 md:w-10 flex items-center justify-center rounded-full cursor-pointer transition-colors text-sm md:text-base",
            !isSameMonth(day, monthStart) && "",
            isSameDay(day, date) && "bg-primary text-white",
            isToday(day) && !isSameDay(day, date) && "border border-primary ",
            "hover:bg-primary/70 hover:text-white",
          )}
          key={day.toString()}
          onClick={() => setSelectedDate(cloneDay)}
        >
          {formattedDate}
        </div>,
      )
      if (days.length === 7) {
        rows.push(
          <div className="grid grid-cols-7 gap-1 mb-1" key={day.toString()}>
            {days}
          </div>,
        )
        days = []
      }
      day = addMonths(day, 0)
      day = new Date(day.setDate(day.getDate() + 1))
    }

    if (days.length > 0) {
      rows.push(
        <div className="grid grid-cols-7 gap-1 mb-1" key={day.toString()}>
          {days}
        </div>,
      )
    }

    return (
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          slideDirection === "left" && "animate-slide-left",
          slideDirection === "right" && "animate-slide-right",
        )}
      >
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day) => (
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
    <div className="container mx-auto py-4 px-4 md:py-8 md:px-0">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Islamic Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" size="icon" onClick={previousMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex-1 md:flex-none">
                <Select
                  value={date.getFullYear().toString()}
                  onValueChange={(value) => setSelectedDate(new Date(Number.parseInt(value), date.getMonth(), 1))}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1 md:flex-none">
                <Select
                  value={date.getMonth().toString()}
                  onValueChange={(value) => setSelectedDate(new Date(date.getFullYear(), Number.parseInt(value), 1))}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, index) => (
                      <SelectItem key={month} value={index.toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" onClick={goToToday} className="w-full md:w-auto">
              Today
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
            <div className="md:col-span-5 order-2 md:order-1">
              <Card>
                <CardContent className="p-4">{renderCalendar()}</CardContent>
              </Card>
            </div>
            <div className="md:col-span-4 order-1 md:order-2">
              <Card className="bg-primary/5">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-primary">Islamic Date</h2>
                    <div className="text-4xl font-bold text-primary">{hijriDate.day}</div>
                    <div className="text-2xl font-medium text-primary/90">{hijriDate.month}</div>
                    <div className="text-xl text-primary/80">{hijriDate.year} H</div>
                  </div>
                  <div className="pt-4 border-t border-primary/10">
                    <p className="text-sm text-muted-foreground">Gregorian Date</p>
                    <p className="text-lg font-medium">{format(date, "MMMM d, yyyy")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

