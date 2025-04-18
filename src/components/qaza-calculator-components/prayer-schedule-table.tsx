import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"
import { Sun, Sunrise, Sunset, Moon, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export const prayerSchedule = {


  FAJR: { farz: 2, sunnatMouaqda: 2, sunnatGherMouaqda: 0, wittar: 0, nafal: 0, total: 4 },
  DHUHR: { farz: 4, sunnatMouaqda: 6, sunnatGherMouaqda: 0, wittar: 0, nafal: 2, total: 12 },
  ASR: { farz: 4, sunnatMouaqda: 0, sunnatGherMouaqda: 4, wittar: 0, nafal: 0, total: 8 },
  MAGHRIB: { farz: 3, sunnatMouaqda: 2, sunnatGherMouaqda: 0, wittar: 0, nafal: 2, total: 7 },
  ISHA: { farz: 4, sunnatMouaqda: 2, sunnatGherMouaqda: 4, wittar: 3, nafal: 4, total: 17 },
  TOTAL: { farz: 17, sunnatMouaqda: 12, sunnatGherMouaqda: 8, wittar: 3, nafal: 8, total: 48 },
}

const prayerTimeConfig = {
  FAJR: {
    icon: Sunrise,
    color: "bg-emerald-600",
    lightBg: "bg-muted",
    border: "border-amber-200",
  },
  DHUHR: {
    icon: Sun,
    color: "bg-emerald-600",
    lightBg: "bg-muted",
    border: "border-orange-200",
  },
  ASR: {
    icon: Sun,
    color: "bg-emerald-600",
    lightBg: "bg-muted",
    border: "border-yellow-200",
  },
  MAGHRIB: {
    icon: Sunset,
    color: "bg-emerald-600",
    lightBg: "bg-muted",
    border: "border-red-200",
  },
  ISHA: {
    icon: Moon,
    color: "bg-emerald-600",
    lightBg: "bg-muted",
    border: "border-indigo-200",
  },
}

export default function PrayerSchedule() {
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
  return (
    <Card className="border-green-200 shadow-lg overflow-hidden">
      <CardHeader className="bg-green-600 text-white">
        <CardTitle className="text-xl flex items-center">
          <Clock className="mr-2 h-5 w-5" />
          {t("qazanamaz.title")}
          
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-6">
          {/* Prayer Time Cards */}
          {Object.entries(prayerSchedule)
            .filter(([key]) => key !== "TOTAL")
            .map(([prayerName, counts]) => {
              const config = prayerTimeConfig[prayerName as keyof typeof prayerTimeConfig]
              const Icon = config?.icon || Clock

              return (
                <Card key={prayerName} className={`${config?.lightBg} ${config?.border} overflow-hidden`}>
                  <div className={`${config?.color} py-3 px-4 flex items-center justify-between`}>
                    <div className="flex items-center">
                      <Icon className="h-5 w-5 text-white mr-2" />
                      <h3 className="font-bold text-white">{prayerName}</h3>
                    </div>
                    <Badge className="bg-white hover:bg-zinc-50 text-gray-800">{counts.total} {t("qazanamaz.rakat")} </Badge>
                  </div>

                  <CardContent className="pt-4">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {/* Prayer Type Counts */}
                      {[
                        { name: "Farz", value: counts.farz, color: "bg-green-100 text-green-800" },
                        { name: "Sunnat Mouaqda", value: counts.sunnatMouaqda, color: "bg-green-100 text-green-800" },
                        {
                          name: "Sunnat Gher-Mouaqda",
                          value: counts.sunnatGherMouaqda,
                          color: "bg-green-100 text-green-800",
                        },
                        { name: "Wittar", value: counts.wittar, color: "bg-green-100 text-green-800" },
                        { name: "Nafal", value: counts.nafal, color: "bg-green-100 text-green-800" },
                      ].map((type) => (
                        <div key={`${prayerName}-${type.name}`} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{type.name}</span>
                          {type.value > 0 ? (
                            <Badge variant="outline" className={`${type.color} font-medium`}>
                              {type.value}
                            </Badge>
                          ) : (
                            <span className="text-gray-400 text-sm">-</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
        </div>

        <Card className="bg-gray-50 dark:bg-gray-950 border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              {t("qazanamaz.dailytotal")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Total by Prayer Type */}
              {[
                {
                  name: "Farz",
                  value: prayerSchedule.TOTAL.farz,
                  color: "bg-green-100 text-green-800 border-green-200",
                },
                {
                  name: "Sunnat Mouaqda",
                  value: prayerSchedule.TOTAL.sunnatMouaqda,
                  color: "bg-green-100 text-green-800 border-blue-200",
                },
                {
                  name: "Sunnat Gher-Mouaqda",
                  value: prayerSchedule.TOTAL.sunnatGherMouaqda,
                  color: "bg-green-100 text-green-800 border-purple-200",
                },
                {
                  name: "Wittar",
                  value: prayerSchedule.TOTAL.wittar,
                  color: "bg-green-100 text-green-800 border-pink-200",
                },
                {
                  name: "Nafal",
                  value: prayerSchedule.TOTAL.nafal,
                  color: "bg-green-100 text-green-800 border-yellow-200",
                },
                {
                  name: "Total Rakats",
                  value: prayerSchedule.TOTAL.total,
                  color: "bg-green-100 text-green-800 border-gray-300",
                },
              ].map((type) => (
                <Card key={type.name} className={`${type.color} border`}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-bold">{type.value}</span>
                    <span className="text-xs font-medium mt-1">{type.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Visual Rakat Distribution */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">{t("qazanamaz.rakatdistribute")}</h3>
          <div className="h-6 w-full rounded-full overflow-hidden flex">
            <div
              className="bg-green-500 h-full"
              style={{ width: `${(prayerSchedule.TOTAL.farz / prayerSchedule.TOTAL.total) * 100}%` }}
              title={`Farz: ${prayerSchedule.TOTAL.farz} rakats`}
            />
            <div
              className="bg-blue-500 h-full"
              style={{ width: `${(prayerSchedule.TOTAL.sunnatMouaqda / prayerSchedule.TOTAL.total) * 100}%` }}
              title={`Sunnat Mouaqda: ${prayerSchedule.TOTAL.sunnatMouaqda} rakats`}
            />
            <div
              className="bg-purple-500 h-full"
              style={{ width: `${(prayerSchedule.TOTAL.sunnatGherMouaqda / prayerSchedule.TOTAL.total) * 100}%` }}
              title={`Sunnat Gher-Mouaqda: ${prayerSchedule.TOTAL.sunnatGherMouaqda} rakats`}
            />
            <div
              className="bg-pink-500 h-full"
              style={{ width: `${(prayerSchedule.TOTAL.wittar / prayerSchedule.TOTAL.total) * 100}%` }}
              title={`Wittar: ${prayerSchedule.TOTAL.wittar} rakats`}
            />
            <div
              className="bg-yellow-500 h-full"
              style={{ width: `${(prayerSchedule.TOTAL.nafal / prayerSchedule.TOTAL.total) * 100}%` }}
              title={`Nafal: ${prayerSchedule.TOTAL.nafal} rakats`}
            />
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-sm mr-1"></div>
              <span>Farz</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-sm mr-1"></div>
              <span>Sunnat Mouaqda</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-sm mr-1"></div>
              <span>Sunnat Gher-Mouaqda</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-500 rounded-sm mr-1"></div>
              <span>Wittar</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-sm mr-1"></div>
              <span>Nafal</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
