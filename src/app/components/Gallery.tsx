"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Gallery({ post } : { post: any}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const allSlides = Object.values(post.slide || {}).map((slideItem, i) => {
    const slideDetails = Object.values(slideItem || {})
    let slideSrc = slideDetails[0]
    return (
      <SwiperSlide key={i} id={'mainSlide'+i}>
        <Image 
          className="mx-auto my-auto max-h-[40vh] md:max-h-unset object-contain" 
          src={slideSrc} alt={post.title.rendered} 
          width="640"
          height="100"
          loading="lazy"
        />
      </SwiperSlide>
    )
  })
  const allThumbs = Object.values(post.slide || {}).map((slideItem, i) => {
    const slideDetails = Object.values(slideItem || {})
    return (
      <SwiperSlide key={i} id={'thumbSlide'+i}>
        <Image 
          className="rounded-xl size-14 md:size-20" 
          src={slideDetails[0]} 
          alt={post.title.rendered}
          width="100"
          height="100"
        />
      </SwiperSlide>
    )
  })
  return (
    <>
      <Swiper
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties} 
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          wrapperClass="flex items-center"
          breakpoints={{
            320: {
              autoHeight: true
            },
            640: {
              autoHeight: false
            }
          }}
        >
          {allSlides}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          slidesPerView={8}
          breakpoints={{
            320: {
              slidesPerView: 5
            },
            640: {
              slidesPerView: 8
            }
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-5"
        >
          {allThumbs}
        </Swiper>
    </>
  )
}