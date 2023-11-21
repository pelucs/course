"use client"

import { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, Autoplay, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideProps{
  settings: SwiperProps;
  children: ReactNode;
}

export function SlideSettings({ children, settings }: SlideProps){
  return(
    <Swiper modules={[ Navigation, Autoplay, Pagination, A11y ]} {...settings}>
      {children}
    </Swiper>
  );
}