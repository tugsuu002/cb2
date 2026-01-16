import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

export default function HeroSection() {
  const [active, setActive] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setActive(true)}
      onExit={() => setActive(false)}
    >
      <section className="w-full min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Left */}
          <div className="flex flex-col justify-center">
<div className="overflow-hidden">
  {["БИЗНЕС БҮРИЙН", "УХААЛАГ ХАМТРАГЧ"].map((line, i) => (
    <h1
      key={i}
      className={`text-4xl md:text-5xl font-extrabold leading-tight
        transition-all duration-700 ease-out
        ${active ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${i * 120}ms` }}
    >
      {line}
    </h1>
  ))}
</div>
            <p
              className={`mt-6 text-gray-500 max-w-lg transition-all duration-700
    ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "300ms" }}
            >
              Whether you're a solo designer or part of a team...
            </p>

            <p
              className={`mt-4 text-gray-400 max-w-lg transition-all duration-700
    ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "420ms" }}
            >
              It's not about number of components...
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
                  className={`absolute flex items-center justify-center rounded-full shadow-lg ${a.bg}`}
                  style={{
                    width: a.size,
                    height: a.size,
                    top: a.top,
                    left: a.left,
                    transform: active ? "scale(1)" : "scale(0.6)",
                    transition: `all 600ms ease ${i * 80}ms`,
                  }}
                >
                  <span className="text-3xl">{a.icon}</span>
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
  { icon: "👩🏻‍🦰", size: 92, top: 1, left: 80, bg: "bg-pink-100" },
  { icon: "👨🏽‍🦳", size: 84, top: 40, left: 210, bg: "bg-purple-100" },
  { icon: "👩🏼", size: 88, top: 110, left: 2, bg: "bg-teal-100" },
  { icon: "🧔🏻‍♂️", size: 100, top: 110, left: 110, bg: "bg-gray-100" },
  { icon: "😎", size: 84, top: 160, left: 225, bg: "bg-sky-100" },
  { icon: "👨🏿", size: 92, top: 220, left: 100, bg: "bg-yellow-100" },
];
