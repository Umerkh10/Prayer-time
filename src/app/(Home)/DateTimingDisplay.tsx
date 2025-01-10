"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { addDays, subDays, formatDistanceToNow } from "date-fns";
import { PrayerTimes, Coordinates, CalculationMethod, Madhab, CalculationParameters } from "adhan";
import "swiper/css";
import "swiper/css/navigation";
import { CloudSunRainIcon, LucideSunset, MoonStarIcon, SunDimIcon, SunMediumIcon, SunriseIcon } from "lucide-react";
import moment from "moment-hijri";
import Link from "next/link";

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
  const [selectedMadhab, setSelectedMadhab] = useState("hanafi");




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

  // useEffect(() => {
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
  // }, []);


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
    
      // Define prayer times and icons
      const prayers = [
        {
          name: "Fajr",
          time: formatTime(prayerTimeObj.fajr, timeZone || "UTC"), // Fallback to UTC
          isActive: false,
          icon: <SunriseIcon className="w-7 h-7 text-orange-300" />,
        },
        {
          name: "Sunrise",
          time: formatTime(prayerTimeObj.sunrise, timeZone || "UTC"),
          isActive: false,
          icon: <SunriseIcon className="w-7 h-7 text-orange-400" />,
        },
        {
          name: "Dhuhr",
          time: formatTime(prayerTimeObj.dhuhr, timeZone || "UTC"),
          isActive: false,
          icon: <SunDimIcon className="w-7 h-7 text-yellow-400" />,
        },
        {
          name: "Asr",
          time: formatTime(prayerTimeObj.asr, timeZone || "UTC"),
          isActive: false,
          icon: <SunMediumIcon className="w-7 h-7 text-yellow-500" />,
        },
        {
          name: "Maghrib",
          time: formatTime(prayerTimeObj.maghrib, timeZone || "UTC"),
          isActive: false,
          icon: <LucideSunset className="w-7 h-7 text-orange-600" />,
        },
        {
          name: "Isha",
          time: formatTime(prayerTimeObj.isha, timeZone || "UTC"),
          isActive: false,
          icon: <MoonStarIcon className="w-7 h-7 text-zinc-50" />,
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
          gregorian: date.toDateString(),
          hijri: moment(date).locale("en").format("iD iMMMM, iYYYY"), // Replace with Hijri date logic if needed
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
  }, [currentDate, location,selectedMadhab]);


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
          <select
          className="px-4 py-2 rounded-lg bg-zinc-800 outline-none "
        value={selectedMadhab}
        onChange={(e) => setSelectedMadhab(e.target.value)}
      >
        <option className="rounded-lg bg-zinc-800 outline-none" value="Hanafi">Hanafi</option>
        <option className="rounded-lg bg-zinc-800 outline-none" value="Shafi">Shafi</option>
      </select>
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
            <Link href={'/monthly-namaz-timings'}
              className={`px-4 py-2 rounded-lg bg-zinc-800 hover:bg-blue-400 text-white transition ease-in duration-200 delay-100`}
            >
              Monthly
            </Link>
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
