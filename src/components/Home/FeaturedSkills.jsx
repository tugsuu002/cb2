import React from "react";
import { useTranslation } from "react-i18next";

export default function FeaturedSkills() {
  const { t } = useTranslation();
  const stasticList = t("features", { returnObjects: true });
  const bars = Array.from({ length: 10 });
  console.log("🚀 ~ FeaturedSkills ~ stasticList:", stasticList);
  return (
    <section className="max-w-[1320px] mx-auto px-4 py-10 sm:py-16">
      <h2 className="text-[55px] font-pro font-semibold text-center mb-8 sm:mb-12">
        ОНЦЛОХ ЧАДВАР
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[41px]">
        {stasticList.map((item, index) => (
          <div
            key={index}
            className="rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-lg transition"
          >
            <div className="h-20 sm:h-36 rounded-t-lg sm:rounded-t-xl bg-indigo-300/70 p-2 sm:p-3 mb-3 sm:mb-5">
              <img src={item?.img} />
            </div>
            <h3 className="font-pro font-medium text-sm sm:text-[20px] mb-1 sm:mb-2 px-4 text-black">
              {item.title}
            </h3>
            <p className="text-xs sm:text-[13px] font-pro font-normal text-[#A3AED0] leading-relaxed px-4 py-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl mt-8">

        <div className="sound-bars-container absolute left-1/2 transform -translate-x-1/2 top-6 px-4 z-30">
          <div className="sound-bars mx-auto max-w-md h-36 flex items-end justify-center">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bar"
                style={{
                  animationDelay: `${(i % 6) * 0.12}s`,
                  width: `${12 + (i % 6) * 6}px`,
                }}
              />
            ))}
          </div>
        </div>



        {/* Togloom */}
        {/* <div className="relative w-full h-screen bg-black overflow-hidden">
        <div className="moving-light" aria-hidden="true">
          <div className="light-core" />
          <div className="light-bands" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div
                key={idx}
                className="light-slice"
                style={{
                  left: `${(idx / 12) * 100}%`,
                  width: `${100 / 12}%`,
                  animationDelay: `${(idx % 6) * 0.18}s`,
                  animationDuration: `${2.4 + (idx % 5) * 0.6}s`,
                }}
              />
            ))}
          </div>
        </div>
        {bars.map((_, i) => (
        <div
          key={i}
          className="wave-bar"
          style={{
            left: `${i * 10}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Meet! Recognito
        </h1>
        <p className="mt-4 text-center max-w-xl">
          Built for a secure Web3 future. Empowering blockchain networks with top-tier validation, RPC, and IBC relayers.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-full shadow-lg hover:scale-105 transition">
            Apply for Beta
          </button>
          <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:scale-105 transition">
            Learn more
          </button>
        </div>
      </div>
    </div> */}
      </div>
    </section>
  );
}
