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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const allSlides = Object.values(post.slide || {}).map((slideItem, i) => {
    const slideDetails = Object.values(slideItem || {})
    return (
      <SwiperSlide key={i}>
        <Image 
          className="mx-auto" 
          src={slideDetails[0]} alt={post.title.rendered} 
          width="736"
          height="100"
        />
      </SwiperSlide>
    )
  })
  const allThumbs = Object.values(post.slide || {}).map((slideItem, i) => {
    const slideDetails = Object.values(slideItem || {})
    return (
      <SwiperSlide key={i}>
        <Image 
          className="rounded-xl size-20" 
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
          }}
          loop={true}
          spaceBetween={10}
          autoHeight={true}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {allSlides}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          slidesPerView={8}
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