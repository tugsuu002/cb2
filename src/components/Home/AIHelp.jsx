import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Vector from "../../assets/Vector.webp";
import heart from "../../assets/heart.svg";
import paper from "../../assets/paper.svg";
import world from "../../assets/world.svg";
import Search from "../../assets/Search.webp";
import Orb from "../GradientBlinds";
import { Star } from "../../assets/svg";
import { useTranslation } from "react-i18next";
export default function AIHelp() {
  const { t } = useTranslation();
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  console.log("🚀 ~ AIHelp ~ message:", message);
  const inputRef = useRef(null);

  // useEffect(() => {
  //   aiChat()
  //  }, [question])
  const handleSuggestion = (text) => {
    inputRef.current?.focus();
    setQuestion("");

    [...text].forEach((char, index) => {
      setTimeout(() => {
        setQuestion((prev) => prev + char);
      }, index * 15);
    });
  };

  const aiChat = async () => {
    if (!question.trim()) return;
    // console.info("question===>", question);
    setLoading(true);
    setMessage("");
    try {
      const params = new URLSearchParams({
        psid: "1232131313",
        bot_id: "19338",
        message: question,
        channel: "web",
      });
      setQuestion("");
      const response = await fetch(
        `https://dev.aichatbot.mn/api/v1/stream?${params.toString()}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer ch@tb0t!",
          },
        },
      );
      
      if (!response.ok || !response.body) {
        throw new Error("API error");
      }
      const reader = response.body.getReader();
      let result = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += new TextDecoder().decode(value);
        setMessage(result);
      }
      setLoading(false);
      setQuestion("");
    } catch (err) {
      setMessage("Алдаа гарлаа. Дахин оролдоно уу.");
      setLoading(false);
    }
  };

  return (
    <section className="bg-black relative h-auto lg:h-[878px] mt-10 lg:mt-16">
      <div className="relative max-w-[1320px] mx-auto px-0 py-20 -top-10 overflow-hidden rounded-[30px] h-[610px] lg:h-[878px] mx-41">
        <Orb
          className="absolute left-0 top-0 right-0 bottom-0 w-full h-full object-cover object-center border-[0.5px] border-white/30 overflow-hidden rounded-[30px] shadow-[0_10px_40px_rgba(15,23,42,0.05)] bg-black"
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />

        {/* Content */}
        <div className="relative z-10 text-center justify-items-center px-1 mt-1 lg:mt-10">
          <div className="text-center font-pro font-semibold text-xl sm:text-[30px] leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-600 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mb-5 flex items-center justify-center">
            <Star className="mr-2" /> ChatAI in Action
          </div>
          <div></div>
          <h2 className="text-[25px] lg:text-[55px] font-pro font-semibold mb-8 text-[#FFFFFF]">
            {t("AiChatHelp")}
          </h2>
          <div className="w-full max-w-[720px] mx-auto  rounded-xl">
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-4 max-h-[500px] flex flex-col justify-between">
              <div className="custom-scroll text-left font-pro font-normal overflow-y-auto max-h-[500px] min-h-[80px] h-auto">
                {loading ? (
                  <div className="flex justify-start mt-3">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                ) : (
                  <span className="font-pro font-normal text-[14px] text-[#e1dada] whitespace-pre-line break-words h-auto leading-6">
                    {!message && "Hi there, Goodmorning"}

                    {message.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.03 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                )}
              </div>
              <div className="relative flex items-center gap-3 bg-[#1D1D1D]/80 rounded-full px-3 py-2 border border-[#423f3f80] w-full mt-3">
                <img
                  loading="lazy"
                  src={Search}
                  alt="search"
                  className="w-5 h-5 opacity-80"
                />

                <input
                  ref={inputRef}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !loading) {
                      e.preventDefault();
                      aiChat();
                    }
                  }}
                  placeholder={t("AiQuasion")}
                  className="flex-1 bg-transparent outline-none text-sm text-white"
                />

                <button
                  type="button"
                  aria-label="Send"
                  className={`inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-3 py-2 rounded-full ml-2 transition ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
                  onClick={aiChat}
                  disabled={loading}
                >
                  <img
                    loading="lazy"
                    src={Vector}
                    alt="send icon"
                    className="w-4 h-4 object-contain"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="flex justify-center gap-6 flex-wrap mt-10">
            <motion.button
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSuggestion(`${t("AiSuggestions1")}`)}
              className="inline-flex items-center gap-2 px-4 py-4 text-xs rounded-full font-pro font-normal bg-black hover:bg-white/20 transition whitespace-nowrap border-[#423f3f80] border"
            >
              <img loading="lazy" src={paper} alt="paper" className="w-4 h-4" />
              <span className="text-white">{t("AiSuggestions1")}</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSuggestion(`${t("AiSuggestions2")}`)}
              className="inline-flex items-center gap-2 px-4 py-4 text-xs rounded-full font-pro font-normal bg-black hover:bg-white/20 transition whitespace-nowrap border-[#423f3f80] border"
            >
              <img loading="lazy" src={world} alt="world" className="w-4 h-4" />
              <span className="text-white">{t("AiSuggestions2")}</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSuggestion(`${t("AiSuggestions3")}`)}
              className="inline-flex items-center gap-2 px-4 py-4 text-xs font-pro font-normal rounded-full bg-black hover:bg-white/20 transition whitespace-nowrap border-[#423f3f80] border"
            >
              <img loading="lazy" src={heart} alt="heart" className="w-4 h-4" />
              <span className="text-white">{t("AiSuggestions3")}</span>
            </motion.button>
          </div>
        </div>
        {/* <p className="text-white">Энэхүү чатбот A.I нь туршилтын шатандаа байгаа тул зарим мэдээлэл бүрэн үнэн зөв биш байх магадлалтай.</p> */}
      </div>
    </section>
  );
}
