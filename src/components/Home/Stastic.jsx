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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full">
      {stasticList.map((item, i) => (
        <div key={i} className="w-full flex justify-center">
          <div className="relative w-full h-[208px] bg-white border border-gray-200 overflow-hidden" >
            {/* Icon */}
            <img
              src={item.icon}
              alt=""
              className=" w-6 h-6 mb-4 sm:absolute sm:top-6 sm:left-6 mx-auto sm:mx-0"
            />
            {/* Content */}
            <div className=" flex flex-col justify-center h-full px-6 sm:px-8 text-center sm:text-left"
            >
               <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {counter && (
                  <CountUp
                    end={stats?.info.total_sender || 6676417}
                    redraw={true}
                    duration={0.8}
                    separator=','
                    className="text-[32px] lg:text-[50px] font-pro font-medium text-black leading-none"
                  />
                )}

                {item?.plus && (
                  <img
                    src={item.plus}
                    alt="plus"
                    className="w-[28px] h-[50px]"
                    style={{ objectFit: 'contain' }}
                  />
                )}
              </div>
            </ScrollTrigger>
              <div className="mt-3 text-[10px] md:text-[16px] font-pro font-normal text-[#A3AED0]">
                {item.type}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
