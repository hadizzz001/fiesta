"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MyCarousel = () => {
  const swiperRef = useRef(null);
  const videoRef = useRef(null);
  const imageTimerRef = useRef(null);

  const clearImageTimer = () => {
    if (imageTimerRef.current) {
      clearTimeout(imageTimerRef.current);
      imageTimerRef.current = null;
    }
  };

  const startImageTimer = () => {
    clearImageTimer();
    imageTimerRef.current = setTimeout(() => {
      swiperRef.current?.slideNext();
    }, 10000); // 10s
  };

  const handleVideoEnd = () => {
    swiperRef.current?.slideNext();
  };

  useEffect(() => () => clearImageTimer(), []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          // realIndex avoids clone confusion
          if (swiper.realIndex === 0) {
            // Video slide became active
            clearImageTimer();
            if (videoRef.current) {
              try {
                videoRef.current.currentTime = 0;
                const p = videoRef.current.play();
                if (p && typeof p.then === "function") p.catch(() => {});
              } catch {}
            }
          } else if (swiper.realIndex === 1) {
            // Image slide became active
            startImageTimer();
          }
        }}
        slidesPerView={1}
        allowTouchMove={true}
        loop={false}
        rewind={true}      // acts like loop but without cloning slides
        className="w-full h-full"
      >
        {/* Video Slide */}
        <SwiperSlide className="w-full h-full">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dx6kwjzog/video/upload/v1755350690/Life_is_sweeter_with_every_sip_of_Fiesta_For_distributors_suppliers_contact-_96171353262_swe_xs2jms.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
          />
        </SwiperSlide>

        {/* Image Slide */}
        <SwiperSlide className="w-full h-full">
          <img
            src="https://res.cloudinary.com/dx6kwjzog/image/upload/v1755350689/449690394_17960880167782078_2480636519899191385_n_coz64g.jpg"
            alt="Carousel Slide"
            className="w-full h-full object-cover"
            onLoad={() => {
              // ensure 10s starts even after a refresh into this slide
              if (swiperRef.current?.realIndex === 1) startImageTimer();
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyCarousel;
