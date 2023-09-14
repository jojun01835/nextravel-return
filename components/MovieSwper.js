"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MovieSwper = () => {
  return (
    <Swiper
      modules={[Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide>
        <img src="/img/slide01.jpg" alt="slide" className="Slide"></img>
        <div className="dis">
          <p>일본 후쿠오카</p>
          <p>가이드 박지영님과 함께 떠나는 후쿠오카 여행!</p>
          <p>400,000원</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/slide02.jpg" alt="slide" className="Slide"></img>
        <div className="dis">
          <p>미국 뉴욕</p>
          <p>뉴욕 요트 여행</p>
          <p>1,200,000원</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/slide03.jpg" alt="slide" className="Slide"></img>
        <div className="dis">
          <p>태국 방콕</p>
          <p>현지인 윤태욱과 함께 떠나는 방콕 밤문화 여행 </p>
          <p>1,000,000원</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/slide04.jpg" alt="slide" className="Slide"></img>
        <div className="dis">
          <p>인도 아그라</p>
          <p>타지마할 도굴 투어 </p>
          <p>10,000,000원</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/slide05.jpg" alt="slide" className="Slide"></img>
        <div className="dis">
          <p>하와이 킬라우에아 화산</p>
          <p>하와이 킬라우에아 화산 빵굽기 투어 </p>
          <p>3,000,000원</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/slide06.jpg" alt="slide" className="Slide"></img>
        <div className="dis">
          <p>이집트 낙타 투어</p>
          <p>이집트의 유적지를 낙타를 타고 투어함</p>
          <p>2,700,000원</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MovieSwper;
