import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function SwiperCustom (){
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
        <SwiperSlide>
          <img
            src="https://picsum.photos/900/1200?1"
            alt="slide1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/900/1200?2"
            alt="slide2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/900/1200?3"
            alt="slide3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

// export default SwiperCustom;
