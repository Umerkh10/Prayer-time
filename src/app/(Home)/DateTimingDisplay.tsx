"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { addDays, subDays, formatDistanceToNow } from "date-fns";
import { PrayerTimes, Coordinates, CalculationMethod } from "adhan";
import "swiper/css";
import "swiper/css/navigation";
import { CloudSunRainIcon, LucideSunset, MoonStarIcon, SunDimIcon, SunMediumIcon, SunriseIcon } from "lucide-react";
import moment from "moment-hijri";

function DateTimingDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [nextPrayerCountdown, setNextPrayerCountdown] = useState<string | null>(null);


  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          "https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN&fields=lat,lon,city,country"
        );
        const data = await response.json();
        if (data) {
          const { lat, lon, city, country } = data;
          setLocation(new Coordinates(lat, lon));
          setCity(city);
          setCountry(country);
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };
    fetchLocation();
  }, []);

  // Fetch location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(new Coordinates(latitude, longitude));
      },
      (error) => console.error("Error fetching location", error)
    );
  }, []);

  // Fetch prayer times for yesterday, today, and tomorrow
  useEffect(() => {
    const fetchPrayerTimes = (date: Date) => {
      if (!location) return null;

      const params = CalculationMethod.MuslimWorldLeague();
      const prayerTimeObj = new PrayerTimes(location, date, params);

      const formatTime = (time: Date) =>
        time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });

      const prayers = [
        { name: "Fajr", time: formatTime(prayerTimeObj.fajr), isActive: false, icon: <SunriseIcon className="w-7 h-7 text-orange-400" /> },
        { name: "Sunrise", time: formatTime(prayerTimeObj.sunrise), isActive: false, icon: <SunriseIcon className="w-7 h-7 text-zinc-50" /> },
        { name: "Dhuhr", time: formatTime(prayerTimeObj.dhuhr), isActive: false, icon: <SunDimIcon className="w-7 h-7 text-zinc-50" /> },
        { name: "Asr", time: formatTime(prayerTimeObj.asr), isActive: false, icon: <SunMediumIcon className="w-7 h-7 text-zinc-50" /> },
        { name: "Maghrib", time: formatTime(prayerTimeObj.maghrib), isActive: false, icon: <LucideSunset className="w-7 h-7 text-zinc-50" /> },
        { name: "Isha", time: formatTime(prayerTimeObj.isha), isActive: false, icon: <MoonStarIcon className="w-7 h-7 text-zinc-50" /> },
      ];

      // Determine the next prayer
      const now = new Date();
      const nextPrayer = prayers.find((prayer) => {
        const prayerTime = new Date(`${date.toDateString()} ${prayer.time}`);
        return prayerTime > now;
      });

      return {
        date: {
          gregorian: date.toDateString(),
          hijri: moment(date).format("iYYYY/iM/iD") // Replace with Hijri date logic if needed
        },
        prayers,
        location: `Lat: ${location.latitude.toFixed(2)}, Lon: ${location.longitude.toFixed(2)}`,
        nextPrayer: nextPrayer
          ? {
              name: nextPrayer.name,
              time: nextPrayer.time,
              countdown: () => differenceInSeconds(new Date(`${date.toDateString()} ${nextPrayer.time}`), new Date()),
            }
          : null,
      };
    };

    const loadPrayerTimes = async () => {
      if (location) {
        const yesterday = fetchPrayerTimes(subDays(currentDate, 1));
        const today = fetchPrayerTimes(currentDate);
        const tomorrow = fetchPrayerTimes(addDays(currentDate, 1));
        setPrayerTimes([yesterday, today, tomorrow]);
      }
    };

    loadPrayerTimes();
  }, [currentDate, location]);

  // Update countdown timer
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
      swiper.slideTo(1, 0);
    } else if (activeIndex === 2) {
      setCurrentDate(addDays(currentDate, 1));
      swiper.slideTo(1, 0);
    }
    setActiveIndex(1); // Reset to center
  };

  return (
    <div className="relative max-w-screen-xl mx-auto z-10 -mt-16">
      <div className="mx-auto w-[90%] lg:w-[95%] bg-zinc-200 rounded-lg shadow-lg px-2">
        {/* Header with date tabs */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center p-4 border-b border-gray-200">
        <div className="flex space-x-4">
  <button
    className={`px-4 py-2 rounded-lg ${activeIndex === 0 ? "bg-blue-400 text-white" : "bg-zinc-800 text-zinc-50"}`}
    onClick={() => {
      setActiveIndex(0); // Set active index to 0 for Yesterday
      setCurrentDate(subDays(currentDate, 0)); // Change date to yesterday
    }}
  >
    Yesterday
  </button>
  <button
    className={`px-4 py-2 rounded-lg ${activeIndex === 1 ? "bg-blue-400 text-white" : "bg-zinc-800 text-zinc-50"}`}
    onClick={() => {
      setActiveIndex(1); // Set active index to 1 for Today
      // No date change needed, as it's already today's date
    }}
  >
    Today
  </button>
  <button
    className={`px-4 py-2 rounded-lg ${activeIndex === 2 ? "bg-blue-400 text-white" : "bg-zinc-800 text-zinc-50"}`}
    onClick={() => {
      setActiveIndex(2); // Set active index to 2 for Tomorrow
      setCurrentDate(addDays(currentDate, 0)); // Change date to tomorrow
    }}
  >
    Tomorrow
  </button>
</div>
          <div className="lg:text-right text-center">
            <h2 className="text-xl font-semibold text-zinc-900">
              {country ? `${city}, ${country}` : "Loading..."}
            </h2>
            <p className="font-medium text-zinc-900">
              {prayerTimes[activeIndex]?.date.hijri || ""}
            </p>
            <p className="font-semibold text-lg text-zinc-900">
              {prayerTimes[activeIndex]?.date.gregorian || ""}
            </p>
          </div>
        </div>

        {/* Swiper for Prayer Times */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          initialSlide={1}
          className="w-full"
        >
          {prayerTimes.map((day, index) => (
            <SwiperSlide key={index}>
              <div className="grid lg:grid-cols-6 grid-cols-2 gap-4 p-4">
                {day?.prayers.map((prayer: { name: string; time: string; icon: any }, prayerIndex: number) => (
                  <div key={prayerIndex} className={`flex flex-col items-center justify-center p-4 rounded-lg 
                  ${prayer.name === day?.nextPrayer?.name ? "bg-blue-400 text-white" : "bg-zinc-300 text-zinc-900"}`}>
                    {prayer.icon}
                    <h3 className=" font-semibold">{prayer.name}</h3>
                    <p className="text-lg font-semibold">{prayer.time}</p>
                    {prayer.name === day?.nextPrayer?.name && nextPrayerCountdown && (
                      <p className="text-sm mt-1">{nextPrayerCountdown}</p>
                    )}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default DateTimingDisplay;

function differenceInSeconds(date1: Date, date2: Date): number {
  return Math.floor((date1.getTime() - date2.getTime()) / 1000);
}