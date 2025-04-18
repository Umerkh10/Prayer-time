"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { PowerIcon as PrayIcon, InfoIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CalculationResult } from "@/lib/calculator-types"
import { calculateQazaDetails } from "@/lib/calculator-utils"
import CustomDatePicker, { formatDate } from "./custom-date-picker"
import { useTranslation } from "@/hooks/useTranslation"

interface CalculatorFormProps {
  onCalculate: (result: CalculationResult) => void
}

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const today = new Date()
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date(1990, 0, 1))
  const [currentDate, setCurrentDate] = useState<Date>(today)
  const [gender, setGender] = useState<"male" | "female">("male")
  const [periodDays, setPeriodDays] = useState<number>(7)
  const [balighAge, setBalighAge] = useState<number>(gender === "male" ? 15 : 12)
  const [ramadanDays, setRamadanDays] = useState<number>(0)
  const [otherPrayedDays, setOtherPrayedDays] = useState<number>(0)
  const [dateError, setDateError] = useState<string | null>(null)
  const { t } = useTranslation("qazanamaz")
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Update baligh age when gender changes
  const handleGenderChange = (value: "male" | "female") => {
    setGender(value)
    setBalighAge(value === "male" ? 15 : 12)
  }

  const handleCalculate = () => {
    // Check if date is in the future
    if (dateOfBirth > today) {
      setDateError("Please select a date in the past. Future dates are not valid for this calculation.")
      return
    } else {
      setDateError(null)
    }

    // Calculate current age
    const birthYear = dateOfBirth.getFullYear()
    const currentYear = currentDate.getFullYear()
    const currentAge = currentYear - birthYear

    // Check if person has reached maturity
    if (currentAge < balighAge) {
      alert("You have not reached the age of religious maturity yet.")
      return
    }

    const result = calculateQazaDetails({
      dateOfBirth,
      currentDate,
      gender,
      periodDays,
      balighAge,
      ramadanDays,
      otherPrayedDays,
    })

    onCalculate(result)
  }

  return (
    <Card className="border-green-200 shadow-lg overflow-hidden ">
      <CardHeader className="bg-green-600 text-white">
        <CardTitle className="flex items-center text-2xl">
          <PrayIcon className="mr-2 h-6 w-6" />
          {t("qazanamaz.title2")}
        </CardTitle>
        <CardDescription className="text-green-100">{t("qazanamaz.desc2")}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="grid grid-cols-1  gap-6">
          {/* Date Inputs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold "> {t("qazanamaz.todaydate")}</h3>
              <span className="font-medium">{formatDate(currentDate)}</span>
            </div>
            <CustomDatePicker
              value={currentDate}
              onChange={setCurrentDate}
              label="Current Date"
              minYear={1950}
              maxYear={2050}
            />

            <div className="flex items-center justify-between mt-4">
              <h3 className="font-semibold ">{t("qazanamaz.dob")}</h3>
              <span className="font-medium">{formatDate(dateOfBirth)}</span>
            </div>
            <CustomDatePicker
              value={dateOfBirth}
              onChange={setDateOfBirth}
              label="Date of Birth"
              errorMessage={dateError}
              minYear={1950}
              maxYear={2050}
              isDateOfBirth={true}
            />
          </div>

          {/* Gender and Other Inputs */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className=" font-medium">{t("qazanamaz.gender")}</Label>
              <RadioGroup
                value={gender}
                onValueChange={(value) => handleGenderChange(value as "male" | "female")}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2 bg-muted px-4 py-2 rounded-md border border-green-200">
                  <RadioGroupItem value="male" id="male" className="" />
                  <Label htmlFor="male" className="cursor-pointer">
                     {t("qazanamaz.male")}
                  </Label>
                </div>
                <div className="flex items-center space-x-2 bg-muted px-4 py-2 rounded-md border border-green-200">
                  <RadioGroupItem value="female" id="female" className="" />
                  <Label htmlFor="female" className="cursor-pointer">
                     {t("qazanamaz.female")}
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="balighAge" className=" font-medium">
               {t("qazanamaz.maturity")} 
              </Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="balighAge"
                  type="number"
                  value={balighAge}
                  onChange={(e) => setBalighAge(Number.parseInt(e.target.value) || 0)}
                  className="border-green-200"
                  min={7}
                  max={18}
                />
                <span className="text-sm ">  {t("qazanamaz.years")} </span>
              </div>
              <p className="text-xs  mt-1">
              {t("qazanamaz.default")}: {gender === "male" ? "15" : "12"}  {t("qazanamaz.yearsfor")} {gender === "male" ? "males" : "females"}
              </p>
            </div>

            {gender === "female" && (
              <div className="space-y-4 bg-muted p-4 rounded-lg border border-green-200">
                <div className="space-y-2">
                  <Label className=" font-medium">{t("qazanamaz.periodtitle")}</Label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium ">{t("qazanamaz.fromdays")}</span>
                    <Slider
                      value={[periodDays]}
                      min={3}
                      max={10}
                      step={1}
                      onValueChange={(value) => setPeriodDays(value[0])}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium "> {t("qazanamaz.enddays")}</span>
                  </div>
                  <p className="text-sm  font-medium mt-1">{t("qazanamaz.selected")} {periodDays} {t("qazanamaz.days")} </p>
                </div>
                <p className="text-sm  italic flex items-start">
                  <InfoIcon className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span>
                     {t("qazanamaz.perioddesc")}
                  </span>
                </p>
              </div>
            )}

            {/* Ramadan and Other Prayed Days Inputs */}
            <div className="space-y-4 mt-4">
              <h3 className="font-semibold  italic text-sm">
              {t("qazanamaz.title3")}
              </h3>

              <div className="space-y-2">
                <Label htmlFor="ramadanDays" className=" font-medium">
                {t("qazanamaz.point1")}
                </Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="ramadanDays"
                    type="number"
                    value={ramadanDays}
                    onChange={(e) => setRamadanDays(Number.parseInt(e.target.value) || 0)}
                    className="border-green-200 "
                  />
                  <span className="text-sm ">{t("qazanamaz.days")}</span>
                </div>
                <p className="text-xs  mt-1">{t("qazanamaz.formula")} </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="otherPrayedDays" className=" font-medium">
                {t("qazanamaz.point2")}
                </Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="otherPrayedDays"
                    type="number"
                    value={otherPrayedDays}
                    onChange={(e) => setOtherPrayedDays(Number.parseInt(e.target.value) || 0)}
                    className="border-green-200 "
                  />
                  <span className="text-sm ">{t("qazanamaz.days")}</span>
                </div>
                <p className="text-xs  mt-1"> {t("qazanamaz.tentatively")}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted border-t border-green-200 flex justify-center p-4">
        <Button
          onClick={handleCalculate}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          disabled={dateOfBirth > today}
          size="lg"
        >
           {t("qazanamaz.calculate")}
        </Button>
      </CardFooter>
    </Card>
  )
}
