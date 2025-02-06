"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'
import { useTranslation } from '@/lib/useTranslation'



const destinations = [
    {
      id: 1,
      name: 'Turkey',
      image: '/country-slider-1.webp',
      alt: 'Scenic view of a mosque in Turkey during sunset'
    },
    {
      id: 2,
      name: 'Pakistan',
      image: '/country-slider-2.webp',
      alt: 'Historic street in Pakistan with traditional architecture'
    },
    {
      id: 3,
      name: 'India',
      image: '/country-slider-3.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 4,
      name: 'Libya',
      image: '/country-slider-4.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 5,
      name: 'Lebanon',
      image: '/country-slider-5.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 6,
      name: 'Jordan',
      image: '/country-slider-6.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 7,
      name: 'Palestine',
      image: '/country-slider-7.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 8,
      name: 'Iraq',
      image: '/country-slider-8.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 9,
      name: 'Bangladesh',
      image: '/country-slider-9.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 10,
      name: 'Afghanistan',
      image: '/country-slider-10.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 11,
      name: 'Germany',
      image: '/country-slider-11.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 12,
      name: 'Spain',
      image: '/country-slider-12.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 13,
      name: 'Indonesia',
      image: '/country-slider-13.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 14,
      name: 'Philippines',
      image: '/country-slider-14.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    },
    {
      id: 15,
      name: 'Switzerland',
      image: '/country-slider-15.webp',
      alt: 'Indian cityscape with historic temples and architecture'
    }
  ]

function CountrySection() {
  const {t} = useTranslation("CountrySection")
  return (
    <div className='mx-auto max-w-screen-xl my-8 p-4'>
    <h2 className='text-3xl font-bold text-center'>{t("CountrySection.country")} </h2>
    <p className='text-lg text-center font-semibold text-muted-foreground pt-1'>{t("CountrySection.countryline")}</p>

    <Swiper
        modules={[Pagination ]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32
          }
        }}
        className="!py-12"
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id}>
            <Link href={`/countries/${destination.name.toLowerCase()}`} passHref>
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold ">
                {destination.name} 
              </h3>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='flex justify-center items-center mt-3 bg-blue-500 text-white p-2 rounded-md lg:w-1/6 w-1/2  mx-auto hover:bg-zinc-900 hover:text-blue-50 transition ease-in duration-150 delay-150 dark:hover:bg-white dark:hover:text-black font-medium'>
       <Link href={'/countries'}> {t("CountrySection.countrylink")} </Link>
      </div>

    </div>
  )
}

export default CountrySection