"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { MoonIcon } from "lucide-react";
import moment from "moment-hijri";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HijirDivider() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState({ city: "", country: "" });
  const [currentHijriDate, setCurrentHijriDate] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    setPath(pathname)
  }, []);

useEffect(() => {
  const hijriDate = moment().subtract(1, 'days');
  if (path.includes("/ar")) {
    moment.locale("ar-SA");
    setCurrentHijriDate(hijriDate.format("iD iMMMM, iYYYY"));
  } else {
    moment.locale("en");
    setCurrentHijriDate(hijriDate.format("iD iMMMM, iYYYY"));
  }
}, [path]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Fetch user's location
    fetch("https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN")
      .then((response) => response.json())
      .then((data) => {
        setLocation({ city: data.city, country: data.country });
      })
      .catch((error) => {
        console.error("Error fetching location:", error);
      });
  }, []);

  const formattedDate = currentTime.toLocaleDateString(path.includes("/ar") ? "ar-EG" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const {t} = useTranslation("HijriDivider")

  return (
    <div className="w-full max-w-7xl mx-auto p-6 scale-90 lg:scale-100">
  <div className="relative rounded-2xl lg:h-72  overflow-hidden">

    <Image
      src="/banner-img-salah-compressed.webp"
      alt="Hijri Divider Background"
      fill
      loading="eager"
      className="object-cover object-center"
      sizes="(min-width: 1024px) 1024px, 100vw"
    />

    <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm" />

    <div className="relative z-10 p-6 md:p-10 text-white text-center space-y-4">
      <h1 className="text-2xl md:text-4xl font-bold animate-fade-in">
        {t("HijriDivider.dividertitle")}
      </h1>

      {location.city && location.country && (
        <h2 className="text-lg md:text-xl font-medium animate-fade-in">
          {location.city}, {location.country}
        </h2>
      )}

      <div className="grid lg:grid-cols-3 gap-4 pt-4">
        {[
          {
            label: t("HijriDivider.currenttime"),
            value: formattedTime,
          },
          {
            label: t("HijriDivider.hijrititle"),
            value: currentHijriDate,
          },
          {
            label: t("HijriDivider.currentdate"),
            value: formattedDate,
          },
        ].map((item, i) => (
          <div key={i} className="bg-transparent hover:bg-emerald-100 text-white hover:text-emerald-900 border-2 border-white transition-all rounded-lg p-4 w-full max-w-[200px] mx-auto shadow-md">
            <h3 className="text-lg font-semibold">{item.label}</h3>
            <div className="text-base mt-1">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
}

export default HijirDivider;
