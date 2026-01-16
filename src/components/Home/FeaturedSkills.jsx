import React from "react";
import { useTranslation } from "react-i18next";

export default function FeaturedSkills() {
  const { t } = useTranslation();
  const stasticList = t("features", { returnObjects: true });
  const bars = Array.from({ length: 10 });
  console.log("🚀 ~ FeaturedSkills ~ stasticList:", stasticList);
  return (
    <section className="max-w-[1320px] mx-auto px-4 py-10 sm:py-16">
      <h2 className="text-[40px] md:text-[55px] font-pro font-semibold text-center mb-8 sm:mb-12">
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
      </div>
    </section>
  );
}
