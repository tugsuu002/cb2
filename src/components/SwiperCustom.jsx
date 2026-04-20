import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";

export default function SwiperCustom() {
  const bannerArray = [banner1, banner2];
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl hidden md:flex flex-col m-3">
      <Swiper
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {bannerArray.map((banner, index) => (
          <SwiperSlide key={banner}>
            <img
              loading="lazy"
              src={banner}
              alt={`slide${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};