"use client"

import { SlideSettings } from "@/components/SlideSettings";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

const settings: SwiperProps = {
  navigation: true,
  slidesPerView: 1,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    waitForTransition: false
  },
  pagination: {
    clickable: true,
  }
}

export function SlideBanners(){
  return(
    <div className="h-[30vh] bg-secondary rounded">
      <SlideSettings settings={settings}>
        <SwiperSlide><div className="cursor-pointer w-full h-full bg-red-500 block"/></SwiperSlide>
        <SwiperSlide><div className="cursor-pointer w-full h-full bg-green-500 block"/></SwiperSlide>
        <SwiperSlide><div className="cursor-pointer w-full h-full bg-blue-500 block"/></SwiperSlide>
      </SlideSettings>
    </div>
  );
}