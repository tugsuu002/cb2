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
import SpotlightCard from "./SpotlightCard";
import FeatureHighlights from "./FeatureHighlights";

export default function IntroductionInstagram() {
  const { t } = useTranslation();
  const instaCardList = t("insta_card", { returnObjects: true });
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
          transition={{ duration: 0.6, delay: 0.15 }}
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
            {instaCardList.map((item, index) => {
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
                    className="rounded-[20px] bg-white h-full gradient-border-instagram transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    spotlightColor="rgba(255, 214, 0, 0.3) | rgba(233, 0, 151, 0.3) | rgba(118, 56, 250, 0.3)"
                  >
                    <div key={index} className="rounded-[20px] px-4 py-5">
                      <div
                        className="bg-gradient-to-br from-[#B6CCFE] to-[#EDF2FB] rounded-full w-14 h-14 flex items-center justify-center mb-3 text-[#A3AED0] hover:text-[#0166FF] transition-colors duration-200 "
                      >
                         <Icon />
                      </div>
                      {/* Title */}
                      <h3 className="font-pro font-medium text-sm sm:text-[18px] text-black mb-1">
                        {item.title}
                      </h3>
                      {/* Description */}
                      <p className="text-xs sm:text-[13px] font-pro font-normal text-[#7E8BB6] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
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
