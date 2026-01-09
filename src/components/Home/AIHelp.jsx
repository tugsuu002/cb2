import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vector from "../../assets/Vector.png";
import heart from "../../assets/heart.svg";
import paper from "../../assets/paper.svg";
import world from "../../assets/world.svg";
import Search from "../../assets/Search.png";
import GradientBlinds from "../GradientBlinds";
import bs from "../../assets/BS.svg";
export default function AIHelp() {
  const [question, setQuestion] = useState("");
  const inputRef = useRef(null);

  const handleSuggestion = (text) => {
    inputRef.current?.focus();
    setQuestion("");

    [...text].forEach((char, index) => {
      setTimeout(() => {
        setQuestion((prev) => prev + char);
      }, index * 15);
    });
  };

  return (
    <section className="bg-black relative h-auto lg:h-[878px] mt-10 lg:mt-5">
      <div className="relative max-w-[1320px] mx-auto px-0 py-20 -top-10 overflow-hidden rounded-[30px] h-[610px] lg:h-[878px] mx-41">
        {/* ai back image */}

        {/* <img
          className="absolute left-0 top-0 right-0 bottom-0 w-full h-full object-cover object-center"
          src={bs}
          alt="ai background"
        /> */}

        <GradientBlinds
          className="absolute left-0 top-0 right-0 bottom-0 w-full h-full object-cover object-center"
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={0}
          noise={0.3}
          blindCount={29}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
        {/* Content */}
        <div className="relative z-10 text-center justify-items-center px-1 mt-1 lg:mt-10">
          <div className=" inline-block text-center font-pro font-semibold text-xl sm:text-[30px] font-tt-hoves-pro-trial leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-600 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mb-5">
            ✨ ChatAI in Action
          </div>
          <h2 className="text-[25px] lg:text-[55px] font-pro font-semibold mb-8 text-[#FFFFFF]">
            БИ ТАНД ЯАЖ ТУСЛАХ ВЭ?
          </h2>
          <div className="w-full max-w-[720px] mx-auto  rounded-xl">
            <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-4 h-[151px] flex flex-col justify-between">
              <p className="text-[#A3AED080] text-left text-[16px] font-pro font-normal">
                Hi there, Goodmorning
              </p>
              <div className="relative flex items-center gap-3 bg-[#1D1D1D]/80 rounded-full px-3 py-2 border border-white/6 w-full">
                <img src={Search} alt="search" className="w-5 h-5 opacity-80" />

                <input
                  ref={inputRef}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask a question"
                  className="flex-1 bg-transparent outline-none text-sm text-white"
                />

                <button
                  type="button"
                  aria-label="Send"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-3 py-2 rounded-full ml-2 transition"
                >
                  <img
                    src={Vector}
                    alt="send icon"
                    className="w-4 h-4 object-contain"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="flex justify-center gap-3 flex-wrap mt-10">
            <motion.button
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSuggestion("Онлайн гэрээ яаж хийх вэ?")}
              className="inline-flex items-center gap-2 px-4 py-4 text-xs rounded-[10px] font-pro font-normal bg-black hover:bg-white/20 transition whitespace-nowrap"
            >
              <img src={paper} alt="paper" className="w-4 h-4" />
              <span className="text-white">Онлайн гэрээ яаж хийх вэ?</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSuggestion("Chatbot ашиглах заавар")}
              className="inline-flex items-center gap-2 px-4 py-4 text-xs rounded-[10px] font-pro font-normal bg-black hover:bg-white/20 transition whitespace-nowrap"
            >
              <img src={world} alt="world" className="w-4 h-4" />
              <span className="text-white">Chatbot ашиглах заавар</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSuggestion("Үнийн санал авах")}
              className="inline-flex items-center gap-2 px-4 py-4 text-xs font-pro font-normal rounded-[10px] bg-black hover:bg-white/20 transition whitespace-nowrap"
            >
              <img src={heart} alt="heart" className="w-4 h-4" />
              <span className="text-white">Үнийн санал авах</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
