import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ChatbotSteps = () => {
  const { t } = useTranslation();
  const steps = t("steps", { returnObjects: true });
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="px-4 md:px-16 py-8 md:py-16"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[30px] font-pro font-semibold text-center w-full mb-12"
      >
        {t("howChatbot")}
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-center w-full mx-auto">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -6 }}
          whileTap={{ scale: 0.995 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 160, damping: 16 }}
          className={`relative w-full flex-shrink-0 cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center border border-[#F4F7FE] rounded-[20px]`}
          style={{ zIndex: steps.length - index }}
        >
          {/* Bottom white card */}
           <div className="h-44 sm:h-48 lg:h-[180px] bg-[#F4F7FE] rounded-[20px] mt-2 mx-2 p-2">
              <img loading="lazy"
                src={step.img}
                alt="slide2"
                className="w-full h-full object-cover rounded-[14px]"
              />
          </div>
          {/* Top blue block */}
         <div
            className="w-full pt-2 px-3 md:px-4 flex flex-col gap-1 min-h-[100px] justify-center items-center mt-2"
            style={{ zIndex: steps.length - index }}
          >
            <p className="font-pro font-semibold text-[20px] md:text-[25px] rounded-full px-3 py-2">{step.title}</p>
            <div className="flex items-center justify-between pb-4">
              <p className="text-sm md:text-base text-center text-gray-600 leading-snug rounded-lg px-3 py-2">
                {step.description}
              </p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 flex sm:hidden items-center justify-center w-10 h-10 rounded-[30%] bg-[#E91E63]/20 z-50">
              <div className="flex items-center justify-center w-6 h-6 rounded-[30%] bg-[#E91E63]">
                <FaArrowRight className="text-white rotate-90" size={13}/>
              </div>
            </div>
          )}
          {index < steps.length - 1 && (
            <div className="absolute -right-9 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-14 h-14 rounded-[30%] bg-[#E91E63]/20 z-50">
              <div className="flex items-center justify-center w-10 h-10 rounded-[30%] bg-[#E91E63]">
                <FaArrowRight className="text-white" size={15}/>
              </div>
            </div>
          )}
        </motion.div>
      ))}
      </div>
    </motion.div>
  );
};

export default ChatbotSteps;
