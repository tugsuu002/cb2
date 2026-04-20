import { useEffect, useRef, useState } from "react";
import { Globe } from "./Globe.jsx";
import Stastic from "./Stastic.jsx";

// import { Swiper, SwiperSlide } from "swiper/react";
// Navigation arrows removed — keep autoplay only
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// SwiperCore.use([Autoplay, Navigation, Pagination]);

const Customers = () => {
  const offsetYRef = useRef(0);
  const imgRef = useRef(null);
  const angleRef = useRef(0);
  const rafIdRef = useRef(null);
  const pausedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section ref={sectionRef} className="relative">
      <div className="h-[50vh] md:h-screen flex flex-col-reverse md:flex-col items-center justify-center px-4 mt-1 md:mt-16">
        <Globe />
        <Stastic />
      </div>
    </section>
  );
};

export default Customers;
