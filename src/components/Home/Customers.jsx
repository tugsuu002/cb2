import { useEffect, useRef } from "react";
import world from "../../assets/earth_sphere.png";
import tdb from "../../assets/tdb.png";
import tdb1 from "../../assets/tdb.png";
import tdb2 from "../../assets/tdb.png";
import tdb3 from "../../assets/tdb.png";
import tdb4 from "../../assets/tdb.png";
import tdb5 from "../../assets/tdb.png";
import tdb6 from "../../assets/tdb.png";
import tdb7 from "../../assets/tdb.png";
import khan from "../../assets/khan.png";
import mak from "../../assets/mak.png";
import tawanbogd from "../../assets/tawanbogd.png";
import nomin from "../../assets/nomin.png";
import apu from "../../assets/apu.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Navigation arrows removed — keep autoplay only
import { Autoplay } from "swiper/modules";
import "swiper/css";

// SwiperCore.use([Autoplay, Navigation, Pagination]);

const Customers = () => {
  const offsetYRef = useRef(0);
  const imgRef = useRef(null);
  const angleRef = useRef(0);
  const rafIdRef = useRef(null);
  const pausedRef = useRef(false);

  // Update ref directly on scroll (passive listener) to avoid frequent React renders
  useEffect(() => {
    const handleScroll = () => {
      offsetYRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Continuous spin using requestAnimationFrame + small scroll-parallax.
  useEffect(() => {
    const spinDegPerSec = 8; // degrees per second, tweak as needed
    let lastTime = null;

    function tick(t) {
      if (lastTime == null) lastTime = t;
      const dt = (t - lastTime) / 1000; // seconds
      lastTime = t;

      if (!pausedRef.current) {
        angleRef.current = (angleRef.current + spinDegPerSec * dt) % 360;
      }

      const offset = offsetYRef.current || 0;
      const offsetRotation = offset * 0.03; // small additive rotation from scroll
      const translateY = offset * 0.02;

      if (imgRef.current) {
        imgRef.current.style.transform = `rotate(${
          angleRef.current + offsetRotation
        }deg) translateY(${translateY}px)`;
      }

      rafIdRef.current = requestAnimationFrame(tick);
    }

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <section className="relative">
      <div className="h-[70vh] md:h-screen flex flex-col items-center justify-center px-4">
        <img
          // ref={imgRef}
          src={world}
          alt="Earth globe"
          className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[820px] h-auto max-h-[70vh] sm:max-h-[80vh] object-contain"
          // style={{ willChange: 'transform', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
          // onMouseEnter={() => (pausedRef.current = true)}
          // onMouseLeave={() => (pausedRef.current = false)}
          // onTouchStart={() => (pausedRef.current = true)}
          // onTouchEnd={() => (pausedRef.current = false)}
        />
      </div>

      <div
        className="absolute top-[220px] sm:top-[260px] md:top-[300px] left-1/2 -translate-x-1/2  w-[400px] md:w-full max-w-[1000px]"
      >
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          slidesPerView={3.2}
          spaceBetween={4}
          centeredSlides={false}
          breakpoints={{
            480: {
              slidesPerView: 10,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6.5,
              spaceBetween: 20,
            },
          }}
          className="py-2"
        >
          {[tdb, tdb1, tdb2, tdb3, tdb4, tdb5, tdb6, tdb7, khan, mak, tawanbogd, nomin, apu].map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div
                className="h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] rounded-full border border-whitesmoke flex items-center justify-center overflow-hidden transition-colors duration-300 hover:border-[#2a51e6]"
              >
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className=" max-w-[45px] max-h-[16px] sm:max-w-[65px] sm:max-h-[22px] md:max-w-[95px] md:max-h-[34px] object-contain transition duration-300 filter hover:invert hover:brightness-0"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Customers;
