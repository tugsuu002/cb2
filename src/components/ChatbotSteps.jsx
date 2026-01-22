import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// const steps = [
//   {
//     title: "Алхам 1.",
//     description:
//       "Манай үйлчилгээтэй танилцаж, өөрийн бизнес тохирох багцаа сонгоно",
//   },
//   {
//     title: "Алхам 2.",
//     description:
//       "Харилцааны менежертэй холбогдож, үйлчилгээний гэрээ байгуулна",
//   },
//   {
//     title: "Алхам 3.",
//     description:
//       "Тестийн орчинд чатботоо хийж дууссаны дараа фэйсбүүк хуудастай холбоод ажиллуулж оруулна",
//   },
// ];

const ChatbotSteps = () => {
  const { t } = useTranslation();
  const steps = t("steps", { returnObjects: true });
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="px-4 md:px-16 py-16"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center max-w-[600px] sm:max-w-none mx-auto">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -6 }}
          whileTap={{ scale: 0.995 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 160, damping: 16 }}
          className="relative w-full md:w-[380px] flex-shrink-0 cursor-pointer drop-shadow-sm hover:drop-shadow-xl transition-shadow duration-300 flex flex-col h-full"
        >
          {/* Top blue block */}
          <div className="h-40 md:h-[250px] rounded-t-[20px] rounded-b-none mb-0">
              <img
                src="https://picsum.photos/2560/1440"
                alt="slide2"
                className="w-full h-full object-cover rounded-t-[20px] rounded-b-none"
              />
          </div>
          {/* Bottom white card */}
          <div
            className="w-full md:w-[380px] pt-6 px-6 bg-[#F4F7FE] rounded-b-[20px] rounded-t-none flex flex-col gap-2 min-h-[150px]"
            style={{ zIndex: steps.length - index }}
          >
            <p className="font-pro font-semibold text-[20px] md:text-[25px]">{step.title}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-base text-gray-600 leading-snug">
                {step.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
      </div>
    </motion.div>
  );
};

export default ChatbotSteps;
