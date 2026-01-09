import React from "react";
import rit from "../assets/rit.png";

const steps = [
  {
    title: "Алхам 1.",
    description:
      "Манай үйлчилгээтэй танилцаж, өөрийн бизнес тохирох багцаа сонгоно",
  },
  {
    title: "Алхам 2.",
    description:
      "Харилцааны менежертэй холбогдож, үйлчилгээний гэрээ байгуулна",
  },
  {
    title: "Алхам 3.",
    description:
      "Тестийн орчинд чатботоо хийж дууссаны дараа фэйсбүүк хуудастай холбоод ажиллуулж оруулна",
  },
];

const ChatbotSteps = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 md:gap-10 justify-center px-4 md:px-16 py-16 relative">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative w-full md:w-[380px] flex-shrink-0 mt-16 md:mt-0"
        >
          {/* Top blue block */}
          <div className="h-40 md:h-[250px] bg-[#0066FF] relative rounded-[20px]">
            {index === 0 && (
              <p className="text-[70px] md:text-[170px] text-blue-400 font-bold opacity-20 absolute top-0 left-0">
                01.
              </p>
            )}
          </div>

          {/* Bottom white card */}
          <div
            className={`absolute bottom-[-60px] left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-0
                        w-11/12 md:w-[350px] h-[160px] bg-white p-6 shadow-lg text-left rounded-l-[20px]  rounded-br-[20px]`}
            style={{ zIndex: steps.length - index }}
          >
            <p className="font-pro font-semibold text-[25px] mb-3">{step.title}</p>
            <div className="flex items-center justify-between">
              <p className="md:text-base text-gray-600 w-[70%]">
                {step.description}
              </p>
              <div className="border border-[#4B5162] rounded-[10px] p-4 flex items-center justify-center">
                <img
                  src={rit}
                  alt="arrow icon"
                  className="w-5 h-5 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatbotSteps;
