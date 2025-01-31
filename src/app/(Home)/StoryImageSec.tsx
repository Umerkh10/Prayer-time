"use client"
import React, { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import SwiperCore from "swiper"
import "swiper/css"
import "swiper/css/free-mode"

const images = [
  { src: "/hadees-images/hadees-img-1.png", alt: "Desert with hot air balloons" },
  { src: "/hadees-images/hadees-img-2.png", alt: "Masjid al-Nabawi at night" },
  { src: "/hadees-images/hadees-img-3.png", alt: "Worshippers in white ihram" },
  { src: "/hadees-images/hadees-img-4.png", alt: "Lighthouse at night" },
  { src: "/hadees-images/hadees-img-5.png", alt: "Masjid al-Nabawi golden hour" },
  { src: "/hadees-images/hadees-img-6.png", alt: "Minaret silhouettes at sunset" },
  { src: "/hadees-images/hadees-img-7.png", alt: "Minaret silhouettes at sunset" },
  { src: "/hadees-images/hadees-img-8.png", alt: "Minaret silhouettes at sunset" },
  { src: "/hadees-images/hadees-img-9.png", alt: "Minaret silhouettes at sunset" },
  { src: "/hadees-images/hadees-img-10.png", alt: "Minaret silhouettes at sunset" },
  { src: "/hadees-images/hadees-img-11.png", alt: "Minaret silhouettes at sunset" },
  { src: "/hadees-images/hadees-img-12.png", alt: "Minaret silhouettes at sunset" },
]

function StoryImageSec() {
  const [mounted, setMounted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const swiperRef = useRef<SwiperCore | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (showModal) {
      startTimer()
    } else {
      clearTimer()
    }
    return () => clearTimer()
  }, [showModal, currentIndex])

  const startTimer = () => {
    clearTimer();
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          moveToNextSlide();
          return 0;
        }
        return prev + 2;
      });
    }, 100);
  };

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    // Start the timer when component mounts or when it needs to
    startTimer();

    return () => {
      // Cleanup timer when the component unmounts
      clearTimer();
    };
  }, [])

  const handleMouseEnter = () => {
    clearTimer(); // Stop the progress when mouse enters
  };

  const handleMouseLeave = () => {
    startTimer(); // Restart the progress when mouse leaves
  };

  const moveToNextSlide = () => {
    if (swiperRef.current) {
      const nextIndex = (currentIndex + 1) % images.length
      swiperRef.current.slideTo(nextIndex) // Programmatically move to the next slide
      setCurrentIndex(nextIndex)
    }
  }

  const openModal = (index: number) => {
    console.log("fcftcftcftc");

    setCurrentIndex(index)
    setShowModal(true)
    setProgress(0) // Reset progress when modal is opened
  }

  const closeModal = () => {
    setShowModal(false)
    setProgress(0) // Reset progress when modal is closed
    clearTimer()
  }

  if (!mounted) {
    return null
  }
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!w-auto mx-auto">
            <div
              className="rounded-xl p-1 bg-blue-500 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="eager"
                className="w-20 h-20 object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showModal && (
        <div onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-full max-w-2xl">
            {/* Progress Bar */}
            <div className="absolute -top-10 left-0 w-full h-1 bg-gray-700">
              <div
                className="h-full bg-blue-500 transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={1}
              loop={true}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.activeIndex)
                setProgress(0)
              }}
              className="w-full h-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className="flex justify-center items-center h-[75vh]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Close Button */}
            <button
              className="absolute z-[999] top-4 right-4 bg-black hover:bg-red-500 transition ease-in duration-200 text-white p-2 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StoryImageSec
