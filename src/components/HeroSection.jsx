import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";
import member1 from "../assets/members/member1.webp";
import member2 from "../assets/members/member2.webp";
import member3 from "../assets/members/member3.webp";
import member4 from "../assets/members/member4.webp";
import member5 from "../assets/members/member5.webp";
import member6 from "../assets/members/member6.webp";

export default function HeroSection() {
  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  return (
    <ScrollTrigger
      onEnter={() => setActive(true)}
      onExit={() => setActive(false)}
    >
      <section className="w-full md:h-[500px] flex items-center justify-center bg-white">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Left */}
          <div className="flex flex-col justify-center ">
            <div className="overflow-hidden space-y-2">
              {[t("business"), t("business1")].map((line, i) => (
                <h1
                  key={i}
                  className={`text-4xl md:text-5xl font-pro font-semibold text-black leading-tight
                  transition-all duration-700 ease-out 
                  ${active ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {line}
                </h1>
              ))}
            </div>
            <p
              className={`mt-4 text-[#A3AED0] transition-all duration-700 font-pro font-normal leading-[21px] tracking-[-0.02em]  text-left text-[15px]
                ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "420ms" }}
            >
              {t("businessDesc1")} <b className="text-black">{t("businessDescBold")}</b> {t("businessDesc2")}
            </p>
          </div>

          {/* Right avatars */}
          <div className="flex items-center justify-center">
            <div
              className={`relative w-[320px] h-[320px] transition-transform duration-[1200ms] ease-out rounded-full
                ${active ? "rotate-[360deg]" : "rotate-0"}`}
            >
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className="absolute flex items-center justify-center rounded-full"
                  style={{
                    width: a.size,
                    height: a.size,
                    top: a.top,
                    left: a.left,
                    transform: active ? "scale(1)" : "scale(0.6)",
                    transition: `all 600ms ease ${i * 80}ms`,
                  }}
                >
                  <img
                    loading="lazy"
                    src={a.img}
                    alt="member"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}

const avatars = [
  { img: member1, size: 100, top: 1, left: 80 },
  { img: member2, size: 100, top: 40, left: 210 },
  { img: member4, size: 100, top: 110, left: 2 },
  { img: member3, size: 100, top: 110, left: 120 },
  { img: member5, size: 100,top: 165, left: 225, },
  { img: member6, size: 100, top: 220, left: 90,},
];

// const avatars = [
//   { icon: "👩🏻‍🦰", size: 92, top: 1, left: 80, bg: "bg-pink-100" },
//   { icon: "👨🏽‍🦳", size: 84, top: 40, left: 210, bg: "bg-purple-100" },
//   { icon: "👩🏼", size: 88, top: 110, left: 2, bg: "bg-teal-100" },
//   { icon: "🧔🏻‍♂️", size: 100, top: 110, left: 110, bg: "bg-gray-100" },
//   { icon: "😎", size: 84, top: 160, left: 225, bg: "bg-sky-100" },
//   { icon: "👨🏿", size: 92, top: 220, left: 100, bg: "bg-yellow-100" },
// ];