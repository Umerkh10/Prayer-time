"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { MoonIcon } from "lucide-react";
import moment from "moment-hijri";
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
  if (path.includes("/ar")) {
    moment.locale("ar-SA");
    setCurrentHijriDate(moment().format("iD iMMMM, iYYYY"));
  } else {
    moment.locale("en");
    setCurrentHijriDate(moment().format("iD iMMMM, iYYYY"));
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
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="relative overflow-hidden bg-[#1e8e67] bg-[url('/main-page-frame.svg')] bg-no-repeat rounded-2xl lg:h-72 p-8 md:p-12">
        <div className="relative z-10 space-y-2">
          <h1 className="text-white text-3xl md:text-4xl text-center font-bold tracking-tight animate-fade-in">
            {t("HijriDivider.dividertitle")}
          </h1>

          {location.city && location.country && (
            <h2 className="text-white text-lg md:text-xl text-center font-medium animate-fade-in">
              {location.city}, {location.country}
            </h2>
          )}

          <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto pt-5 gap-4">
            <div className="flex justify-center items-center group">
              <div className="border border-muted rounded-lg bg-transparent w-52 p-4 text-zinc-100 group-hover:bg-zinc-100 group-hover:text-zinc-800 transition ease-in duration-150 delay-150">
                <h3 className="text-lg md:text-xl animate-fade-in-delay text-center">
                {t("HijriDivider.currenttime")}
                </h3>
                <div className="text-lg text-center">{formattedTime}</div>
              </div>
            </div>

            <div className="flex justify-center items-center group">
              <div className="border border-muted rounded-lg bg-transparent w-52 p-4 text-zinc-100 group-hover:bg-zinc-100 group-hover:text-zinc-800 transition ease-in duration-150 delay-150">
                <h3 className="text-lg md:text-xl animate-fade-in-delay text-center">
                {t("HijriDivider.hijrititle")}
                </h3>
                <div className="text-lg text-center">{currentHijriDate}</div>
              </div>
            </div>

            <div className="flex justify-center items-center group">
              <div className="border border-muted rounded-lg bg-transparent w-52 p-4 text-zinc-100 group-hover:bg-zinc-100 group-hover:text-zinc-800 transition ease-in duration-150 delay-150">
                <h3 className="text-lg md:text-xl animate-fade-in-delay text-center">
                  {t("HijriDivider.currentdate")}
                </h3>
                <div className="text-lg text-center">{formattedDate}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/50 to-green-600/0 animate-fade-in" />
      </div>
    </div>
  );
}

export default HijirDivider;
