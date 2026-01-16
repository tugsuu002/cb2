import { useState } from "react";
import { motion } from "framer-motion";
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
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-[40px] md:text-[70px] text-[#0D0D0D] font-pro font-normal text-center"
        >
          Үндсэн үйлчилгээ
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[18px] text-[#707082] font-pro font-normal text-center mb-8 sm:mb-12"
        >
          Бидний системийн боломжууд
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-[#EDF2FB]/80 p-6 sm:p-[50px] lg:p-[75px] rounded-[40px] mb-20 shadow-inner"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[41px]">
            {fbCardList.map((item, index) => {
              if (!checkList && index > 7) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SpotlightCard
                    className="rounded-[20px] bg-white h-full gradient-border-bottom duration-300 hover:-translate-y-1 hover:shadow-xl"
                    spotlightColor="rgba(0, 102, 255, 0.4)"
                  >
                  <div className="py-5 px-4 transition-all duration-300 h-full w-full">
                    <div className="bg-gradient-to-br from-[#B6CCFE] to-[#EDF2FB] rounded-full w-10 h-10 flex items-center justify-center mb-3">
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
                </motion.div>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <img src={oper} className="w-[32px] h-[29px]" />
            <p className="text-sm">24/7 автоматжуулалт</p>
          </motion.div>

          {/* Desktop separator */}
          <div className="hidden md:block h-10 w-px bg-gray-200" />

          {/* Item 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <img src={mess} className="w-[32px] h-[29px]" />
            <p className="text-sm">Чадавхжуулах сургалт</p>
          </motion.div>

          <div className="hidden md:block h-10 w-px bg-gray-200" />

          {/* Item 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <img src={cus} className="w-[32px] h-[29px]" />
            <p className="text-sm">Хариуцсан менежер</p>
          </motion.div>

          <div className="hidden md:block h-10 w-px bg-gray-200" />

          {/* Item 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <img src={like} className="w-[32px] h-[29px]" />
            <p className="text-sm">Хялбар үйлчилгээ</p>
          </motion.div>
        </motion.div>
        <HowItWorks />
        <ChatbotSteps />
      </section>
    </>
  );
}
