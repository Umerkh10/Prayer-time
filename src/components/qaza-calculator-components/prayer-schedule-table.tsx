import React, { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import { Sun, Sunrise, Sunset, Moon, Clock } from "lucide-react";

export const prayerSchedule = {
  FAJR: { farz: 2, sunnatMouaqda: 2, sunnatGherMouaqda: 0, wittar: 0, nafal: 0, total: 4 },
  DHUHR: { farz: 4, sunnatMouaqda: 6, sunnatGherMouaqda: 0, wittar: 0, nafal: 2, total: 12 },
  ASR: { farz: 4, sunnatMouaqda: 0, sunnatGherMouaqda: 4, wittar: 0, nafal: 0, total: 8 },
  MAGHRIB: { farz: 3, sunnatMouaqda: 2, sunnatGherMouaqda: 0, wittar: 0, nafal: 2, total: 7 },
  ISHA: { farz: 4, sunnatMouaqda: 2, sunnatGherMouaqda: 4, wittar: 3, nafal: 4, total: 17 },
  TOTAL: { farz: 17, sunnatMouaqda: 12, sunnatGherMouaqda: 8, wittar: 3, nafal: 8, total: 48 },
};

const prayerTimeConfig = {
  FAJR: {
    icon: Sunrise,
    color: "bg-emerald-600",
    lightBg: "bg-muted",
    border: "border-amber-200",
    label: "Fajr",
    time: "Dawn"
  },
  DHUHR: {
    icon: Sun,
    color: "bg-emerald-600",
    lightBg: "bg-muted",
    border: "border-orange-200",
    label: "Dhuhr",
    time: "Noon"
  },
  ASR: {
    icon: Sun,
    color: "bg-emerald-600",
    lightBg: "bg-muted",
    border: "border-yellow-200",
    label: "Asr",
    time: "Afternoon"
  },
  MAGHRIB: {
    icon: Sunset,
    color: "bg-emerald-600",
    lightBg: "bg-muted",
    border: "border-red-200",
    label: "Maghrib",
    time: "Sunset"
  },
  ISHA: {
    icon: Moon,
    color: "bg-emerald-600",
    lightBg: "bg-muted",
    border: "border-indigo-200",
    label: "Isha",
    time: "Night"
  },
};

export default function PrayerSchedule() {
  const { t } = useTranslation("qazanamaz");
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

  const renderRakatCell = (value: number) => {
    if (value === 0) {
      return <span className="text-gray-300">—</span>;
    }
    return <Badge variant="outline" className=" text-emerald-700">{value}</Badge>;
  };

  return (
    <Card className="border-green-200 shadow-lg overflow-hidden">
      <CardHeader className="bg-green-600 text-white">
        <CardTitle className="text-xl flex items-center">
          <Clock className="mr-2 h-5 w-5" />
          {t("qazanamaz.title")}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-50 dark:bg-transparent">
                <th className="px-4 py-3 text-left font-semibold text-emerald-600">Prayer</th>
                <th className="px-4 py-3 text-center font-semibold text-emerald-600">Farz</th>
                <th className="px-4 py-3 text-center font-semibold text-emerald-600">Sunnat Mouaqda</th>
                <th className="px-4 py-3 text-center font-semibold text-emerald-600">Sunnat Gher-Mouaqda</th>
                <th className="px-4 py-3 text-center font-semibold text-emerald-600">Wittar</th>
                <th className="px-4 py-3 text-center font-semibold text-emerald-600">Nafal</th>
                <th className="px-4 py-3 text-center font-semibold text-emerald-600">Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(prayerSchedule)
                .filter(([key]) => key !== "TOTAL")
                .map(([prayerName, counts]) => {
                  const config = prayerTimeConfig[prayerName as keyof typeof prayerTimeConfig];
                  const Icon = config?.icon || Clock;

                  return (
                    <tr key={prayerName} className="border-b border-emerald-50 hover:bg-emerald-50/50 dark:hover:bg-muted transition-all">
                      <td className="px-4 py-3 flex items-center">
                        <Icon className="h-4 w-4 text-emerald-600 mr-2" />
                        <span className="font-medium">{config?.label}</span>
                        <span className="text-xs text-gray-500 ml-2">({config?.time})</span>
                      </td>
                      <td className="px-4 py-3 text-center">{renderRakatCell(counts.farz)}</td>
                      <td className="px-4 py-3 text-center">{renderRakatCell(counts.sunnatMouaqda)}</td>
                      <td className="px-4 py-3 text-center">{renderRakatCell(counts.sunnatGherMouaqda)}</td>
                      <td className="px-4 py-3 text-center">{renderRakatCell(counts.wittar)}</td>
                      <td className="px-4 py-3 text-center">{renderRakatCell(counts.nafal)}</td>
                      <td className="px-4 py-3 text-center font-medium bg-emerald-50 dark:bg-transparent">{counts.total}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {Object.entries(prayerSchedule)
            .filter(([key]) => key !== "TOTAL")
            .map(([prayerName, counts]) => {
              const config = prayerTimeConfig[prayerName as keyof typeof prayerTimeConfig];
              const Icon = config?.icon || Clock;

              return (
                <Card key={prayerName} className={`${config?.lightBg} ${config?.border} overflow-hidden`}>
                  <div className={`${config?.color} py-3 px-4 flex items-center justify-between`}>
                    <div className="flex items-center">
                      <Icon className="h-5 w-5 text-white mr-2" />
                      <h3 className="font-bold text-white">{config?.label}</h3>
                    </div>
                    <Badge className="bg-white hover:bg-zinc-50 text-gray-600">
                      {counts.total} {t("qazanamaz.rakat")}
                    </Badge>
                  </div>

                  <CardContent className="pt-4">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {[
                        { name: "Farz", value: counts.farz },
                        { name: "Sunnat Mouaqda", value: counts.sunnatMouaqda },
                        { name: "Sunnat Gher-Mouaqda", value: counts.sunnatGherMouaqda },
                        { name: "Wittar", value: counts.wittar },
                        { name: "Nafal", value: counts.nafal },
                      ].map((type) => (
                        <div key={`${prayerName}-${type.name}`} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{type.name}</span>
                          {type.value > 0 ? (
                            <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
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
              );
            })}
        </div>

        {/* Totals Section */}
        <Card className="mt-6 bg-gray-50 dark:bg-transparent border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              {t("qazanamaz.dailytotal")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Farz", value: prayerSchedule.TOTAL.farz, color: "border-green-200" },
                { name: "Sunnat Mouaqda", value: prayerSchedule.TOTAL.sunnatMouaqda, color: "border-blue-200" },
                { name: "Sunnat Gher-Mouaqda", value: prayerSchedule.TOTAL.sunnatGherMouaqda, color: "border-purple-200" },
                { name: "Wittar", value: prayerSchedule.TOTAL.wittar, color: "border-pink-200" },
                { name: "Nafal", value: prayerSchedule.TOTAL.nafal, color: "border-yellow-200" },
                { name: "Total Rakats", value: prayerSchedule.TOTAL.total, color: "border-gray-300" },
              ].map((type) => (
                <Card key={type.name} className={`bg-white dark:bg-zinc-100 ${type.color} border`}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-bold text-emerald-700">{type.value}</span>
                    <span className="text-xs font-medium mt-1 text-gray-600">{type.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Distribution Chart */}
        {/* <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">{t("qazanamaz.rakatdistribute")}</h3>
          <div className="h-6 w-full rounded-full overflow-hidden flex">
            {[
              { type: "farz", color: "bg-green-500", value: prayerSchedule.TOTAL.farz },
              { type: "sunnat", color: "bg-blue-500", value: prayerSchedule.TOTAL.sunnatMouaqda },
              { type: "gher-mouaqda", color: "bg-purple-500", value: prayerSchedule.TOTAL.sunnatGherMouaqda },
              { type: "wittar", color: "bg-pink-500", value: prayerSchedule.TOTAL.wittar },
              { type: "nafal", color: "bg-yellow-500", value: prayerSchedule.TOTAL.nafal },
            ].map((item) => (
              <div
                key={item.type}
                className={`${item.color} h-full transition-all duration-300 hover:brightness-110`}
                style={{ width: `${(item.value / prayerSchedule.TOTAL.total) * 100}%` }}
                title={`${item.type}: ${item.value} rakats`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-sm mr-1" />
              <span>Farz</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-sm mr-1" />
              <span>Sunnat Mouaqda</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-sm mr-1" />
              <span>Sunnat Gher-Mouaqda</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-500 rounded-sm mr-1" />
              <span>Wittar</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-sm mr-1" />
              <span>Nafal</span>
            </div>
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
}