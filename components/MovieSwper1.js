"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MovieSwper1 = () => {
  return (
    <Swiper
      modules={[Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="/img/230829_blancery.jpg" alt="slide"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/230829_640x480.jpg" alt="slide"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/230829_rottbring.jpg" alt="slide"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/230829_rottbring.jpg" alt="slide"></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default MovieSwper1;
