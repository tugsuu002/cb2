import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Stastic() {
  const { t } = useTranslation();
  const stasticList = t("stastic", { returnObjects: true });
  const [stats, setStats] = useState();
  const [counter, setCounter] = useState(false);
  const fetchStats = async () => {
    await fetch("https://chatbot.mn/api/stats")
    .then((res) => res.json())
    .then((data) => setStats(data));
  };
  
  // useEffect(() => {
  //   // fetchStats();
  // }, []);
  
  console.log("🚀 ~ Stastic ~ stats:", stats)


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full px-4 sm:px-6 lg:px-0">
      {stasticList.map((item, i) => (
        <div key={i} className="w-full flex justify-center">
          <div className="relative w-full min-h-[180px] sm:min-h-[200px] rounded-2xl bg-gradient-to-br from-white via-[#f6f8ff] to-white border border-gray-100 shadow-[0_10px_40px_rgba(15,23,42,0.08)] overflow-hidden">
            {/* Icon */}
            <div className="flex items-center justify-center sm:justify-start p-4">
              <img
                src={item.icon}
                alt=""
                className="w-7 h-7 sm:w-8 sm:h-8"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center h-full px-6 sm:px-8 pb-20 text-center sm:text-left">
              <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                  {counter && (
                    <CountUp
                      end={stats?.info.total_sender || 6676417}
                      redraw={true}
                      duration={1}
                      separator=','
                      className="text-[28px] sm:text-[32px] lg:text-[48px] font-pro font-medium text-black leading-none"
                    />
                  )}

                  {item?.plus && (
                    <img
                      src={item.plus}
                      alt="plus"
                      className="w-[22px] sm:w-[28px] h-[40px] sm:h-[50px] object-contain"
                    />
                  )}
                </div>
              </ScrollTrigger>
              <div className="mt-3 text-[12px] sm:text-[14px] md:text-[16px] font-pro font-normal text-[#6B7280]">
                {item.type}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
