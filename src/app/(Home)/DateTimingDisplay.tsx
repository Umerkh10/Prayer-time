"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { addDays, isSameDay, isToday, isTomorrow, isYesterday, subDays } from "date-fns";
import { PrayerTimes, Coordinates, CalculationMethod, Madhab, CalculationParameters } from "adhan";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeftCircleIcon, ArrowLeftFromLine, ArrowRightCircleIcon, CloudSun, LucideSunset, MoonStarIcon, SunDim, SunDimIcon, SunMediumIcon, SunriseIcon, } from "lucide-react";
import moment from "moment-hijri";
import MonthlyNamazTimings from "./MonthlyNamaz";
import { useTranslation } from "@/hooks/useTranslation";

import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function DateTimingDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [location, setLocation] = useState<any>(null);
  const [city, setCity] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [nextPrayerCountdown, setNextPrayerCountdown] = useState<string | null>(null);
  const [timeZone, setTimeZone] = useState<string>("UTC");
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [selectedMadhab, setSelectedMadhab] = useState("Shafi");




  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN&fields=lat,lon,city,country,timezone`, { cache: "reload" }
        );
        const { lat, lon, city, country, timezone } = await response.json();

        setLocation(new Coordinates(lat, lon));
        setCity(city);
        setCountry(country);
        setTimeZone(timezone); // Update the current timezone
      } catch (error: any) {
        console.error("Error fetching location data:", error.message);
      }
    };

    fetchLocation();
  }, []);



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(new Coordinates(latitude, longitude));
      },
      (error) => console.error("Error fetching location", error)
    );
  }, []);

  const getCalculationMethod = (country: string) => {
    if (country === "Pakistan") {
      return CalculationMethod.Karachi();
    } else if (country === "United States") {
      return CalculationMethod.NorthAmerica();
    } else if (country === "Germany") {
      return CalculationMethod.NorthAmerica();
    } else if (country === "United Kingdom") {
      return CalculationMethod.MuslimWorldLeague();
    } else if (country === "Saudi Arabia") {
      return CalculationMethod.UmmAlQura();
    } else if (country === "Egypt") {
      return CalculationMethod.Egyptian();
    } else if (country === "Singapore") {
      return CalculationMethod.Singapore();
    } else if (country === "Kuwait") {
      return CalculationMethod.Kuwait();
    } else if (country === "Iran") {
      return CalculationMethod.Tehran();
    } else if (country === "Turkey") {
      return CalculationMethod.Turkey();
    } else if (country === "Dubai") {
      return CalculationMethod.Dubai();
    } else {
      return CalculationMethod.MuslimWorldLeague();
    }
  };

  const params = getCalculationMethod(country as any);



  useEffect(() => {
    const fetchPrayerTimes = (date: Date) => {
      if (!location) return null;

      // Dynamically determine the calculation method
      const calculationMethod = getCalculationMethod(location.country); // Based on user's country

      // Ensure madhab is selected correctly and pass it
      const madhab = selectedMadhab === "Shafi" ? Madhab.Shafi : Madhab.Hanafi;
      const nightPortions = () => {
        return {
          fajr: 1.0,  // Adjust this value based on your logic
          isha: 1.0,  // Adjust this value based on your logic
        };
      };

      // Ensure that nightPortions is included in the params
      const params: CalculationParameters = {
        ...calculationMethod,
        madhab,
        nightPortions,  // Pass the function
      };

      const prayerTimeObj = new PrayerTimes(location, date, params);

      // Function to format time
      const formatTime = (time: Date, timeZone: string) =>
        time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: timeZone,
        });

      const isArabic = window.location.pathname.includes("/ar");
      // Define prayer times and icons
      const prayers = [
        {
          name: isArabic ? "الفجر" : "Fajr",
          time: formatTime(prayerTimeObj.fajr, timeZone || "UTC"), // Fallback to UTC
          isActive: false,
          icon: <CloudSun className="w-5 h-5 " />,
        },
        {
          name: isArabic ? "الشروق" : "Sunrise",
          time: formatTime(prayerTimeObj.sunrise, timeZone || "UTC"),
          isActive: false,
          icon: <SunriseIcon className="w-5 h-5 " />,
        },
        {
          name: isArabic ? "الظهر" : "Dhuhr",
          time: formatTime(prayerTimeObj.dhuhr, timeZone || "UTC"),
          isActive: false,
          icon: <SunDimIcon className="w-5 h-5 " />,
        },
        {
          name: isArabic ? "العصر" : "Asr",
          time: formatTime(prayerTimeObj.asr, timeZone || "UTC"),
          isActive: false,
          icon: <SunMediumIcon className="w-5 h-5 " />,
        },
        {
          name: isArabic ? "المغرب" : "Maghrib",
          time: formatTime(prayerTimeObj.maghrib, timeZone || "UTC"),
          isActive: false,
          icon: <LucideSunset className="w-5 h-5 " />,
        },
        {
          name: isArabic ? "العشاء" : "Isha",
          time: formatTime(prayerTimeObj.isha, timeZone || "UTC"),
          isActive: false,
          icon: <MoonStarIcon className="w-5 h-5 " />,
        },
      ];

      // Determine the next prayer
      const now = new Date();
      const nextPrayer = prayers.find((prayer) => {
        const prayerTime = new Date(`${date.toDateString()} ${prayer.time}`);
        return prayerTime > now;
      });


      return {
        date: {
          gregorian: isArabic
            ? date.toLocaleDateString("ar-EG", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            : date.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          hijri: isArabic
            ? moment(date).locale("ar-SA").format("iD iMMMM, iYYYY")
            : moment(date).locale("en").format("iD iMMMM, iYYYY"),
        },
        prayers,
        location: `Lat: ${location.latitude.toFixed(2)}, Lon: ${location.longitude.toFixed(2)}`,
        nextPrayer: nextPrayer
          ? {
            name: nextPrayer.name,
            time: nextPrayer.time,
            countdown: () =>
              differenceInSeconds(
                new Date(`${date.toDateString()} ${nextPrayer.time}`),
                new Date()
              ),
          }
          : null,
      };
    };

    const loadPrayerTimes = async () => {
      if (location) {
        // Fetch prayer times for yesterday, today, and tomorrow
        const yesterday = fetchPrayerTimes(subDays(currentDate, 1));
        const today = fetchPrayerTimes(currentDate);
        const tomorrow = fetchPrayerTimes(addDays(currentDate, 1));
        setPrayerTimes([yesterday, today, tomorrow]);
      }
    };
    loadPrayerTimes();
  }, [currentDate, location, selectedMadhab]);


  useEffect(() => {
    const interval = setInterval(() => {
      const nextPrayer = prayerTimes[activeIndex]?.nextPrayer;
      if (nextPrayer) {
        const countdownInSeconds = nextPrayer.countdown();
        if (countdownInSeconds > 0) {
          const hours = Math.floor(countdownInSeconds / 3600);
          const minutes = Math.floor((countdownInSeconds % 3600) / 60);
          const seconds = countdownInSeconds % 60;
          setNextPrayerCountdown(`${hours}h ${minutes}m ${seconds}s`);
        } else {
          setNextPrayerCountdown(null);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [prayerTimes, activeIndex]);

  // Handle Swiper slide changes
  const handleSlideChange = (swiper: any) => {
    const { activeIndex } = swiper;

    if (activeIndex === 0) {
      setCurrentDate(subDays(currentDate, 1));
      setTimeout(() => {
        swiper.slideTo(1, 0);
      }, 300);
    } else if (activeIndex === 2) {
      setCurrentDate(addDays(currentDate, 1));
      setTimeout(() => {
        swiper.slideTo(1, 0);
      }, 300);
    }

    setActiveIndex(activeIndex);

    const prevBtn = document.getElementById("prevBtn");
    const todayBtn = document.getElementById("todayBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (prevBtn && todayBtn && nextBtn) {
      prevBtn.classList.remove("bg-blue-400", "text-white");
      todayBtn.classList.remove("bg-blue-400", "text-white");
      nextBtn.classList.remove("bg-blue-400", "text-white");

      if (isSameDay(currentDate, subDays(new Date(), 1))) {
        prevBtn.classList.add("bg-blue-400", "text-white");
      } else if (isSameDay(currentDate, new Date())) {
        todayBtn.classList.add("bg-blue-400", "text-white");
      } else if (isSameDay(currentDate, addDays(new Date(), 1))) {
        nextBtn.classList.add("bg-blue-400", "text-white");
      }
    }
  };
  
  const { t } = useTranslation("CurrentNamazTime")

  const gregorian = prayerTimes[activeIndex]?.date.gregorian;
  if (gregorian) {
    const [, month, day, year] = gregorian.split(" "); // Extract month, day, year
    const translatedMonth = t(`CurrentNamazTime.months.${month}`); // Translate month

    const formattedDate = `${day} ${translatedMonth} ${year}`;

  }
  const formattedDate = gregorian
    ? (() => {
      const [, month, day, year] = gregorian.split(" ");
      return `${day} ${t(`CurrentNamazTime.months.${month}`)} ${year}`;
    })()
    : "";

  return (
    <div id="namaz-time" className="relative max-w-screen-xl mx-auto z-10 -mt-16">
      <div className="mx-auto w-[90%] lg:w-[95%] py-3 bg-slate-50 dark:bg-background rounded-xl shadow-lg px-2 border border-muted">
        {/* Header with date tabs */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center p-4 border-b-2 border-muted">
          <div className="flex md:flex-row flex-col md:space-y-0 space-y-2 space-x-4">

            <select className=" mx-auto lg:w-[205px] w-[90%] px-4 py-2 rounded-lg dark:bg-zinc-200 dark:text-zinc-800 bg-zinc-800 outline-none text-white"
              value={selectedMadhab} onChange={(e) => setSelectedMadhab(e.target.value)}>
              <option className="rounded-lg dark:bg-zinc-200 dark:text-zinc-800 bg-zinc-800 outline-none"
                value="Hanafi">{t("city.hanafi")}</option>
              <option className="rounded-lg dark:bg-zinc-200 px-4 dark:text-zinc-800 bg-zinc-800 outline-none"
                value="Shafi">{t("city.shafi")}</option>
            </select>


            <div className="grid grid-cols-2 lg:gap-0 gap-3 ">
              {/* Group 1: Yesterday and Today */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  id="prevBtn"
                  className={`w-full sm:w-auto px-4 py-2 rounded-lg ${isSameDay(currentDate, subDays(new Date(), 1))
                    ? "bg-blue-400 text-white"
                    : "dark:bg-zinc-200 dark:text-zinc-800 bg-zinc-800 text-zinc-50"
                    }`}
                  onClick={() => {
                    setCurrentDate(subDays(currentDate, 1));
                  }}
                >
                  {t("CurrentNamazTime.yesterday")}
                </button>

                <button
                  id="todayBtn"
                  className={`w-full sm:w-auto px-4 py-2 rounded-lg ${isSameDay(currentDate, new Date())
                    ? "bg-blue-400 text-white"
                    : "dark:bg-zinc-200 dark:text-zinc-800 bg-zinc-800 text-zinc-50"
                    }`}
                  onClick={() => {
                    setCurrentDate(new Date());
                  }}
                >
                  {t("CurrentNamazTime.today")}
                </button>

              </div>

              {/* Group 2: Tomorrow and Monthly */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  id="nextBtn"
                  className={`w-full sm:w-auto px-4 py-2 rounded-lg ${isSameDay(currentDate, addDays(new Date(), 1))
                      ? "bg-blue-400 text-white"
                      : "dark:bg-zinc-200 dark:text-zinc-800 bg-zinc-800 text-zinc-50"
                    }`}
                  onClick={() => {
                    setCurrentDate(addDays(currentDate, 1));
                  }}
                >
                  {t("CurrentNamazTime.tomorrow")}
                </button>

                <button
                  className={`w-full sm:w-auto px-4 py-2 rounded-lg ${activeIndex === 3
                    ? "bg-blue-400 text-white"
                    : "dark:bg-zinc-200 dark:text-zinc-800 bg-zinc-800 text-zinc-50"
                    }`}
                  onClick={() => {
                    setActiveIndex(3);
                  }}
                >
                  {t("CurrentNamazTime.monthly")}
                </button>
              </div>
            </div>

          </div>

          <div className="lg:text-right text-center lg:pt-0 pt-3">
            <h2 className="text-xl font-semibold ">
              {country ? `${city}, ${country}` : "Loading..."}
            </h2>
            <p className="font-medium ">
              {prayerTimes[activeIndex]?.date.hijri || ""}
            </p>
            <p className="font-semibold text-lg">
              {prayerTimes[activeIndex]?.date.gregorian
                ? (() => {
                  const gregorian = prayerTimes[activeIndex]?.date.gregorian;
                  const [, month, day, year] = gregorian.split(" ");
                  return `${day} ${month} ${year}`;
                })()
                : ""}
            </p>
          </div>
        </div>

        {/* Swiper for Prayer Times */}



        {activeIndex !== 3 ? (
          <div className="relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              initialSlide={1}
              className="w-full"
              navigation={{
                prevEl: "#prevBtn",
                nextEl: "#nextBtn",
              }}
              modules={[Navigation]}>
              {prayerTimes.map((day, index) => (
                <SwiperSlide key={index}>
                  <div className="grid lg:grid-cols-6 grid-cols-2 gap-4 p-4">
                    {day?.prayers.map((prayer: { name: string; time: string; icon: any }, prayerIndex: number) => (
                      <div key={prayerIndex} className={`flex flex-col items-center justify-center py-4 rounded-lg 
                    ${prayer.name === day?.nextPrayer?.name ? "bg-blue-400 text-white" : "bg-background border border-muted text-zinc-900 dark:text-zinc-100"}`}>

                        <div className="flex justify-between items-center mx-auto font-medium">
                          <div className="lg:pr-16 pr-8 text-lg">{prayer.name}</div>{prayer.icon}
                        </div>
                        <p className="text-lg font-semibold pt-2">{prayer.time}</p>
                        {prayer.name === day?.nextPrayer?.name && nextPrayerCountdown && (
                          <p className="text-sm ">{nextPrayerCountdown}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex justify-center items-center gap-2">
                {/* Custom Navigation Arrows */}
                <button className="z-10 p-2 bg-blue-500 text-zinc-100 rounded-full shadow-lg transition"
                  id="prevBtn"> <FaArrowLeft size={24} /></button>

                <button className="z-10 p-2 bg-blue-500 text-zinc-100 rounded-full shadow-lg transition"
                  id="nextBtn"><FaArrowRight size={24} /></button>
              </div>
            </Swiper>

          </div>
        ) : (
          <MonthlyNamazTimings />
        )}



      </div>
    </div>
  );
}

export default DateTimingDisplay;

function differenceInSeconds(date1: Date, date2: Date): number {
  return Math.floor((date1.getTime() - date2.getTime()) / 1000);
}
