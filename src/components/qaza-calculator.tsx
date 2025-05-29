"use client"

import { useEffect, useState, useRef } from "react"
import { Label } from "@/components/ui/label"
import { AlertCircleIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { CalculationResult } from "@/lib/calculator-types"
import PrayerScheduleTable from "./qaza-calculator-components/prayer-schedule-table"
import CalculatorForm from "./qaza-calculator-components/calculator-form"
import CalculationResults from "./qaza-calculator-components/calculation-result"

// Custom date picker component
function CustomDatePicker({
  value,
  onChange,
  label,
  errorMessage = null,
  minYear = 1950,
  maxYear = 2050,
  isDateOfBirth = false,
}: {
  value: Date
  onChange: (date: Date) => void
  label: string
  errorMessage?: string | null
  minYear?: number
  maxYear?: number
  isDateOfBirth?: boolean
}) {
  const today = new Date()

  // Get days, months, years arrays for dropdowns
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const [selectedDay, setSelectedDay] = useState(value.getDate())
  const [selectedMonth, setSelectedMonth] = useState(value.getMonth())
  const [selectedYear, setSelectedYear] = useState(value.getFullYear())
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(selectedYear, selectedMonth))

  // Update days in month when month or year changes
  useEffect(() => {
    setDaysInMonth(getDaysInMonth(selectedYear, selectedMonth))

    // If the selected day is greater than the days in the new month, adjust it
    if (selectedDay > getDaysInMonth(selectedYear, selectedMonth)) {
      setSelectedDay(getDaysInMonth(selectedYear, selectedMonth))
    }
  }, [selectedMonth, selectedYear])

  // Update the date when any selection changes
  useEffect(() => {
    const newDate = new Date(selectedYear, selectedMonth, selectedDay)
    onChange(newDate)
  }, [selectedDay, selectedMonth, selectedYear, onChange])

  // Generate arrays for dropdowns
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
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
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i).reverse() // Reverse to show newest years first for better UX

  // Check if date is in the future (for date of birth validation)
  const isDateInFuture = () => {
    const selectedDate = new Date(selectedYear, selectedMonth, selectedDay)
    return isDateOfBirth && selectedDate > today
  }

  return (
    <div className="space-y-2">
      <Label className="text-green-800 font-medium">{label}</Label>
      <div className="grid grid-cols-3 gap-2">
        {/* Day selection first */}
        <div>
          <Select value={selectedDay.toString()} onValueChange={(value) => setSelectedDay(Number.parseInt(value))}>
            <SelectTrigger className={cn("border-green-200", isDateInFuture() && "border-red-300 bg-red-50")}>
              <SelectValue placeholder="Day" />
            </SelectTrigger>
            <SelectContent>
              {days.map((day) => (
                <SelectItem key={day} value={day.toString()}>
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-green-600 mt-1 text-center">Day</p>
        </div>

        {/* Month selection second */}
        <div>
          <Select value={selectedMonth.toString()} onValueChange={(value) => setSelectedMonth(Number.parseInt(value))}>
            <SelectTrigger className={cn("border-green-200", isDateInFuture() && "border-red-300 bg-red-50")}>
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month, index) => (
                <SelectItem key={index} value={index.toString()}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-green-600 mt-1 text-center">Month</p>
        </div>

        {/* Year selection last */}
        <div>
          <Select value={selectedYear.toString()} onValueChange={(value) => setSelectedYear(Number.parseInt(value))}>
            <SelectTrigger className={cn("border-green-200", isDateInFuture() && "border-red-300 bg-red-50")}>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-green-600 mt-1 text-center">Year</p>
        </div>
      </div>

      {isDateInFuture() && (
        <p className="text-red-500 text-sm mt-1 flex items-center">
          <AlertCircleIcon className="h-3 w-3 mr-1" />
          Future dates cannot be selected. Please choose a date in the past.
        </p>
      )}

      {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  )
}

export default function QazaCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date(1990, 0, 1))
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null)
  const calculatorFormRef = useRef<HTMLDivElement>(null)
  const [formKey, setFormKey] = useState<number>(0)

  const handleCalculate = (result: CalculationResult) => {
    setCalculationResult(result)
  }

  const handleRecalculate = () => {
    // Reset the calculation result
    setCalculationResult(null)

    // Increment the form key to force a remount of the CalculatorForm component
    setFormKey((prevKey) => prevKey + 1)

    // Scroll to the calculator form
    setTimeout(() => {
      if (calculatorFormRef.current) {
        calculatorFormRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100)
  }

  return (
    <div className="space-y-8">

      <div ref={calculatorFormRef}>
        {/* Use the key prop to force remount when formKey changes */}
        <CalculatorForm key={formKey} onCalculate={handleCalculate} />
      </div>

      {calculationResult && (
        <CalculationResults result={calculationResult} dateOfBirth={dateOfBirth} onRecalculate={handleRecalculate} />
      )}
      <PrayerScheduleTable />
    </div>
  )
}
