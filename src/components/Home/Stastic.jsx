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
  


  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 w-[80%] px-4 sm:px-6 lg:px-0 z-10 ">
      {stasticList.map((item, i) => (
        <div key={i} className="w-full flex justify-center">
          <div className="relative w-full min-h-[100px] sm:min-h-[200px] rounded-2xl bg-gradient-to-br  overflow-hidden">
            {/* Icon */}
            <div className="p-2 sm:p-4 justify-center items-center flex">
              <img loading="lazy"
                src={item.icon}
                alt="stat icon"
                className="w-7 h-7 sm:w-8 sm:h-8"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center h-auto px-1 sm:px-6 py-1 sm:py-6 text-center">
              <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <div className="flex items-center justify-center ">
                  {counter && (
                    <CountUp
                      end={item?.count || 6676417}
                      redraw={true}
                      duration={1}
                      separator=','
                      className="text-[20px] sm:text-[32px] lg:text-[48px] font-pro font-medium text-black leading-none"
                    />
                  )}

                  {item?.plus && (
                    <img loading="lazy"
                      src={item.plus}
                      alt="plus"
                      className="w-[22px] sm:w-[28px] h-[40px] sm:h-[50px] object-contain"
                    />
                  )}
                </div>
              </ScrollTrigger>
              <div className="mt-3 text-[12px] sm:text-[14px] md:text-[16px] font-pro font-normal text-[#A3AED0]">
                {item.type}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
