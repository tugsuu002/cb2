import { useState } from "react";
import Hero from "./Home/Hero";
import { useTranslation } from "react-i18next";
import HowItWorks from "./HowItWorks";
import ChatbotSteps from "./ChatbotSteps";
import oper from "../assets/t.png";
import mess from "../assets/p.png";
import cus from "../assets/supplier.png";
import like from "../assets/lik.png";
import topArrow from "../assets/topArrow.png";
import SpotlightCard from "./SpotlightCard";

export default function IntroductionFacebook() {
  const { t } = useTranslation();
  const [checkList, setCheckList] = useState(false);
  const fbCardList = t("fb_card", { returnObjects: true });
  return (
    <>
      <Hero />
      <section className="max-w-[1320px] mx-auto px-4 py-10 sm:py-16">
        <p className="text-[70px] text-[#0D0D0D] font-pro font-normal text-center">
          Үндсэн үйлчилгээ
        </p>
        <p className="text-[18px] text-[#707082] font-pro font-normal text-center mb-8 sm:mb-12">
          Бидний системийн боломжууд
        </p>
        <div className="bg-[#EDF2FB]/80 p-6 sm:p-[50px] lg:p-[75px] rounded-[40px] mb-20 shadow-inner">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[41px]">
            {fbCardList.map((item, index) => {
              if (!checkList && index > 7) return null;

              return (
                <SpotlightCard
                  // className="custom-spotlight-card"
                  spotlightColor="rgba(55, 155, 255, 0.5)"
                > 
                  <div
                    key={index}
                    className="rounded-[20px] py-5 px-4 transition-all duration-300"
                  >
                    <div
                      className="bg-gradient-to-br from-[#B6CCFE] to-[#EDF2FB] rounded-full w-10 h-10 flex items-center justify-center mb-3"
                    >
                      <img src={item?.icon} alt="" className="w-5 h-5" />
                    </div>

                    <h3 className="font-pro font-medium text-sm sm:text-[18px] text-black mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] font-pro font-normal text-[#7E8BB6] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Toggle Button */}
          <div className="w-full flex justify-center items-center mt-12">
            <button
              onClick={() => setCheckList(!checkList)}
              className="
        w-[140px] h-[44px]
        bg-[#B6CCFE]
        rounded-[12px]
        text-white
        font-pro font-medium text-[14px]
        flex items-center justify-center
        transition-all duration-300
        hover:shadow-lg
        hover:scale-105
      "
            >
              {checkList ? "Хаах" : "Дэлгэрэнгүй"}
              <img
                src={topArrow}
                alt="arrow icon"
                className={`ml-2 transition-transform duration-300 ${
                  !checkList ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className="
    relative
    grid grid-cols-2
    justify-items-center
    text-center
    md:flex
    md:items-center
    md:justify-center
    md:text-left
    gap-6 md:gap-10
    mt-8 my-20 w-full
  "
        >
          {/* Mobile middle line */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-gray-200 md:hidden" />

          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <img src={oper} className="w-[32px] h-[29px]" />
            <p className="text-sm">24/7 автоматжуулалт</p>
          </div>

          {/* Desktop separator */}
          <div className="hidden md:block h-10 w-px bg-gray-200" />

          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <img src={mess} className="w-[32px] h-[29px]" />
            <p className="text-sm">Чадавхжуулах сургалт</p>
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200" />

          {/* Item 3 */}
          <div className="flex items-center gap-4">
            <img src={cus} className="w-[32px] h-[29px]" />
            <p className="text-sm">Хариуцсан менежер</p>
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200" />

          {/* Item 4 */}
          <div className="flex items-center gap-4">
            <img src={like} className="w-[32px] h-[29px]" />
            <p className="text-sm">Хялбар үйлчилгээ</p>
          </div>
        </div>
        <HowItWorks />
        <ChatbotSteps />
      </section>
    </>
  );
}
