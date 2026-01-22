import { useState, isValidElement } from "react";
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
import Icon from "../assets/svg";
import FeatureHighlights from "./FeatureHighlights";

export default function IntroductionFacebook() {
  const { t } = useTranslation();
  const [checkList, setCheckList] = useState(false);
  const fbCardList = t("fb_card", { returnObjects: true });
    const highlight = t("highlight", { returnObjects: true });

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
          {t("facebookIntroTitle")}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[18px] text-[#707082] font-pro font-normal text-center mb-8 sm:mb-12"
        >
          {t("facebookIntroSubtitle")}
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
              // const cardIcon = renderIcon(item?.icon);
              const Icon = item?.icon;
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
                      <div className="bg-gradient-to-br from-[#B6CCFE] to-[#EDF2FB] rounded-full w-14 h-14 flex items-center justify-center mb-3 text-[#A3AED0] hover:text-[#0166FF]" >
                        <Icon />
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

        <FeatureHighlights
          items={highlight}
        />
        <HowItWorks />
        <ChatbotSteps />
      </section>
    </>
  );
}
