import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { InfoIcon, Calendar, Clock, AlertCircle, RefreshCw } from "lucide-react"
import type { CalculationResult } from "@/lib/calculator-types"
import { TbPointFilled } from "react-icons/tb";
import { Button } from "../ui/button"
import { useTranslation } from "@/hooks/useTranslation"
import { useEffect, useState } from "react"


interface CalculationResultsProps {
  result: CalculationResult
  dateOfBirth: Date
  onRecalculate: () => void
}

export default function CalculationResults({ result, onRecalculate}: CalculationResultsProps) {
  const { t } = useTranslation("qazanamaz")
  const [isLoading, setIsLoading] = useState(true);
  const { ageDetails, calculationDetails, prayerCounts } = result

  const totalRakats = {
    fajar:
      prayerCounts.farz.fajar +
      prayerCounts.sunnatMouaqda.fajar +
      prayerCounts.sunnatGherMouaqda.fajar +
      prayerCounts.wittar.fajar +
      prayerCounts.nafal.fajar,
    zohar:
      prayerCounts.farz.zohar +
      prayerCounts.sunnatMouaqda.zohar +
      prayerCounts.sunnatGherMouaqda.zohar +
      prayerCounts.wittar.zohar +
      prayerCounts.nafal.zohar,
    asar:
      prayerCounts.farz.asar +
      prayerCounts.sunnatMouaqda.asar +
      prayerCounts.sunnatGherMouaqda.asar +
      prayerCounts.wittar.asar +
      prayerCounts.nafal.asar,
    maghrib:
      prayerCounts.farz.maghrib +
      prayerCounts.sunnatMouaqda.maghrib +
      prayerCounts.sunnatGherMouaqda.maghrib +
      prayerCounts.wittar.maghrib +
      prayerCounts.nafal.maghrib,
    isha:
      prayerCounts.farz.isha +
      prayerCounts.sunnatMouaqda.isha +
      prayerCounts.sunnatGherMouaqda.isha +
      prayerCounts.wittar.isha +
      prayerCounts.nafal.isha,
    total:
      prayerCounts.farz.total +
      prayerCounts.sunnatMouaqda.total +
      prayerCounts.sunnatGherMouaqda.total +
      prayerCounts.wittar.total +
      prayerCounts.nafal.total,
  }

  
  
    useEffect(() => {
      localStorage.setItem("loading", "true");
      setIsLoading(true);
  
      const timer = setTimeout(() => {
        localStorage.setItem("loading", "false");
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className="space-y-6">
      <Card className="border-green-200 shadow-lg overflow-hidden">
        <CardHeader className="bg-green-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl"> {t("qazanamaz.title4")} </CardTitle>

            </div>
            <Badge className="bg-white text-green-700 hover:bg-zinc-50 text-sm px-3 py-1">
              {ageDetails.years}  {t("qazanamaz.years")}, {ageDetails.months} {t("qazanamaz.months")}, {ageDetails.days} {t("qazanamaz.days")}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          {/* Age and Days Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="border-green-100">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-green-800 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {t("qazanamaz.todayage")}
                  </h3>
                  <span className="text-xl font-bold text-green-700">{ageDetails.totalDays.toLocaleString()} days</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {ageDetails.years} {t("qazanamaz.years")}, {ageDetails.months} {t("qazanamaz.months")}, {ageDetails.days} {t("qazanamaz.days")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-red-800 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2" />
                      {t("qazanamaz.misseddays")}
                  </h3>
                  <span className="text-xl font-bold text-red-700">
                    {calculationDetails.remainingDays.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground"> {t("qazanamaz.misseddaysdesc")}</p>
              </CardContent>
            </Card>
          </div>

          {/* Calculation Details */}
          <div className="bg-gray-50 dark:bg-gray-950 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-muted-foreground mb-3"> {t("qazanamaz.calculationdetail")}</h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm"> {t("qazanamaz.lessdays")}</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-medium text-base">
                    {calculationDetails.firstTenYearsDays.toLocaleString()}
                  </Badge>
                  <span className="text-xs text-gray-500"> {t("qazanamaz.fixeddays")}</span>
                </div>
              </div>

              <Separator className="my-2" />

              <div className=" bg-muted p-3 rounded-md">
                <p className="text-sm italic  mb-3">
                {t("qazanamaz.pointstitle")}
                </p>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm"> {t("qazanamaz.pointsi")}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-medium text-base">
                      {calculationDetails.ramadanDays.toLocaleString()}
                    </Badge>
                    <span className="text-xs text-gray-500"> {t("qazanamaz.pointsidesc")}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">{t("qazanamaz.pointsii")} </span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-medium text-base">
                      {calculationDetails.otherPrayedDays.toLocaleString()}
                    </Badge>
                    <span className="text-xs text-gray-500">{t("qazanamaz.tentatively")}</span>
                  </div>
                </div>
              </div>

              {calculationDetails.periodDaysTotal > 0 && (
                <div className="flex justify-between items-center bg-pink-50 p-3 rounded-md">
                  <span className="text-sm"> {t("qazanamaz.pointsiii")}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-medium text-base">
                      {calculationDetails.periodDaysTotal.toLocaleString()}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {calculationDetails.periodDaysPerMonth} {t("qazanamaz.pointsiiidesc1")} {calculationDetails.periodMonths} {t("qazanamaz.pointsiiidesc2")}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Prayer Counts */}
          <div className="mb-6">
            <h3 className="font-semibold text-muted-foreground mb-3">{t("qazanamaz.pending")}</h3>

            <div className="grid grid-cols-1  gap-4">
              {/* Prayer Time Cards */}
              {[
                {
                  name: "FAJAR",
                  icon: "🌅",
                  color: "bg-muted",
                  border: "border-amber-200",
                  total: totalRakats.fajar,
                },
                {
                  name: "ZOHAR",
                  icon: "☀️",
                  color: "bg-muted",
                  border: "border-orange-200",
                  total: totalRakats.zohar,
                },
                {
                  name: "ASAR",
                  icon: "🌤️",
                  color: "bg-muted",
                  border: "border-yellow-200",
                  total: totalRakats.asar,
                },
                {
                  name: "MAGHRIB",
                  icon: "🌇",
                  color: "bg-muted",
                  border: "border-red-200",
                  total: totalRakats.maghrib,
                },
                {
                  name: "ISHA",
                  icon: "🌙",
                  color: "bg-muted",
                  border: "border-indigo-200",
                  total: totalRakats.isha,
                },
                {
                  name: "TOTAL",
                  icon: "📊",
                  color: "bg-muted",
                  border: "border-green-200",
                  total: totalRakats.total,
                },
              ].map((prayer) => (
                <Card key={prayer.name} className={`${prayer.color} ${prayer.border}`}>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold flex items-center">
                        <span className="mr-2">{prayer.icon}</span>
                        {prayer.name}
                      </h4>
                      <Badge className="bg-white text-gray-700 border hover:bg-zinc-50 border-gray-300">
                        {prayer.total.toLocaleString()} {t("qazanamaz.rakat")}
                      </Badge>
                    </div>

                    {prayer.name !== "TOTAL" && (
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex justify-between">
                          <span>Farz:</span>
                          <span className="font-medium">
                            {prayerCounts.farz[prayer.name.toLowerCase() as keyof typeof prayerCounts.farz].toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunnat-Mouaqda:</span>
                          <span className="font-medium">
                            {prayerCounts.sunnatMouaqda[prayer.name.toLowerCase() as keyof typeof prayerCounts.sunnatMouaqda ].toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunnat-Gher-Mouqda:</span>
                          <span className="font-medium">
                            {prayerCounts.sunnatGherMouaqda[prayer.name.toLowerCase() as keyof typeof prayerCounts.sunnatGherMouaqda].toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Wittar:</span>
                          <span className="font-medium">
                            {prayerCounts.wittar[prayer.name.toLowerCase() as keyof typeof prayerCounts.wittar].toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Nafal:</span>
                          <span className="font-medium">
                            {prayerCounts.nafal[prayer.name.toLowerCase() as keyof typeof prayerCounts.nafal].toLocaleString()}
                          </span>
                        </div>
                      </div>
                    )}

                    {prayer.name === "TOTAL" && (
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex justify-between">
                          <span>Farz:</span>
                          <span className="font-medium">{prayerCounts.farz.total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>S. Mouaqda:</span>
                          <span className="font-medium">{prayerCounts.sunnatMouaqda.total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>S. Gher-M:</span>
                          <span className="font-medium">{prayerCounts.sunnatGherMouaqda.total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Wittar:</span>
                          <span className="font-medium">{prayerCounts.wittar.total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Nafal:</span>
                          <span className="font-medium">{prayerCounts.nafal.total.toLocaleString()}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-800 flex items-center">
              <InfoIcon className="h-4 w-4 mr-1" />
               {t("qazanamaz.note")}
            </h3>
            <p className="text-sm text-amber-700 mt-1">
            {t("qazanamaz.notedesc")}
              
            </p>
            <p className="text-sm text-amber-700 mt-2 text-right italic">  {t("qazanamaz.notedesc2")}</p>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={onRecalculate}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-6 py-2"
            >
              <RefreshCw className="h-4 w-4" />
               {t("qazanamaz.recalculate")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
