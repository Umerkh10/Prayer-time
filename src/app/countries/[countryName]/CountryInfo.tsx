"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Clock } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface CountryInfoProps {
  name: string
  flagUrl: string
  timezone: string
}

export function CountryInfo({ name, flagUrl, timezone }: CountryInfoProps) {
  const [time, setTime] = useState<string>("")
  
  useEffect(() => {
    const updateTime = () => {
      const date = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }
      setTime(date.toLocaleTimeString("en-US", options))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [timezone])

  return (
    <Card className="w-full">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex items-center gap-4">
          <img
            src={flagUrl || "/placeholder.svg"}
            alt={`${name} flag`}
            width={60}
            height={40}
            className="rounded shadow-sm"
          />
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
              <span className="text-sm">({timezone})</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

