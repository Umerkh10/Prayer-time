"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


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
  return (
    <div className='mx-auto max-w-screen-xl my-8 p-4'>
    <h2 className='text-3xl font-bold text-center'>Country </h2>
    <p className='text-lg text-center font-semibold text-muted-foreground pt-1'>Choose a country to see prayer times and places</p>

    <Swiper
        modules={[Pagination ]}
        pagination={{ clickable: true }}
        breakpoints={{
          // When window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 24
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 32
          }
        }}
        className="!py-12"
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id}>
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
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default CountrySection