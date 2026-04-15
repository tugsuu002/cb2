import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TimelineBow } from "../assets/svg";
import worlds from "../assets/about/world.png";
// import cbicon from "../assets/stastic/BotIcon.svg";
// import about1 from "../assets/about/about1.png";
// import { divIcon, storeIcon, devlopIcon } from "../assets/svg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const dotColors = [
  "#D2A8FF",
  "#D2A8FF",
  "#A371F7",
  "#56D364",
  "#2EA043",
  // "#FF8A5B",
  "#FF8A5B",
  "#EC6547",
  "#0D1117",
];
const lineGradients = [
  "from-[#D2A8FF]/70 to-[#D2A8FF]/40",
  "from-[#D2A8FF]/70 to-[#A371F7]/50",
  "from-[#A371F7]/70 to-[#56D364]/90",
  "from-[#56D364]/70 to-[#2EA043]/50",
  "from-[#2EA043]/70 to-[#939AFF]/90",
  "from-[#FF8A5B]/70 to-[#FF8A5B]/40",
  "from-[#FF8A5B]/70 to-[#EC6547]/50",
];

function TimelineDot({ color, Icon }) {
  return (
    <div className="relative flex items-center justify-center flex-shrink-0">
      {Icon && (
        <>
          <div
            className="absolute w-10 h-10 rounded-full blur-xl opacity-90"
            style={{ background: color, filter: "blur(12px)" }}
          />
          <Icon className="w-4 h-4 md:w-6 md:h-6 relative z-10" />
        </>
      )}
    </div>
  );
}

function TimelineLine({ gradient }) {
  return (
    <div className={`w-[2px] min-h-[40px] flex-1 bg-gradient-to-b ${gradient}`} />
  );
}




export default function AboutUs() {
  const { t } = useTranslation();
  // const stastic = t("stastic", { returnObjects: true });
  const aboutSections = t("aboutSections", { returnObjects: true });

  return (
    <div className="min-h-screen bg-[#232323] px-3 pt-4 text-white md:px-6 md:pt-6 w-full bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.32)_0%,_rgba(11,17,40,0.94)_28%,_#040508_70%)]">
      <div className="relative mx-auto max-w-[1300px] overflow-hidden mt-10 ">
        {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_14%,transparent_100%)]" /> */}
        {/* <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.08)_0.6px,transparent_0.6px)] [background-size:8px_8px]" /> */}
        {/* <div className="absolute  left-0 top-0 h-[2px] w-full bg-[linear-gradient(90deg,transparent_0%,#7c88ff_15%,#2563eb_50%,#7c88ff_85%,transparent_100%)]" /> */}
        <div className="absolute left-[78px] top-[42px] h-[86px] w-[128px] rounded-br-[80px] border-b border-r border-[#8B5CF6]/60" />
        <div className="absolute left-[30px] top-[108px] h-[150px] w-[118px] rounded-tr-[72px] border-l border-t border-[#8B5CF6]/45" />

        <div className="relative mx-auto w-full  px-6 pb-20 pt-28 md:px-8 md:pt-36">
          <div className="flex flex-col">
            {aboutSections.map((item, idx) => {
              console.log("🚀 ~ AboutUs ~ item:", item)
              return (
                <div key={idx} className="flex gap-4 md:gap-6">
                  <div className="flex w-4 flex-col items-center flex-shrink-0">
                    <TimelineDot
                      color={dotColors[idx + 1] || "#608DFF"}
                      Icon={item.dotIcon}
                    />
                    {idx < aboutSections.length  && (
                      <TimelineLine
                        gradient={
                          lineGradients[idx] ||
                          "from-[#608DFF]/40 to-transparent"
                        }
                      />
                    )}
                  </div>

                  <div className="-mt-1 flex-1 pb-8 md:pb-12">
                    {item.type === "tag" && (
                      <div className=" space-y-5">
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          custom={1}
                          variants={fadeUp}
                        >
                          <span className="inline-flex items-center gap-2 rounded-full border border-[#2a2a3e] bg-[#120f22] px-3 py-1 text-[12px] font-pro font-normal text-[#A3AED0] shadow-[0_0_16px_rgba(139,92,246,0.12)] md:text-[16px] ml-8">
                            <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
                              <img
                                src={item.icon}
                                alt="icon"
                                className="h-full w-full object-cover rounded-full"
                              />
                            </span>
                            {item.title}
                          </span>
                        </motion.div>
                        <motion.h1
                          initial="hidden"
                          animate="visible"
                          custom={2}
                          variants={fadeUp}
                          className="text-[38px] font-pro font-medium leading-none tracking-[-0.03em] md:text-[96px] ml-8"
                        >
                          {t("footer.row1")}
                        </motion.h1>
                      </div>
                    )}
                      {item.type === "content" && (
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        custom={0}
                        variants={fadeUp}
                        className="max-w-[1100px] ml-8"
                      >
                        {item.tag && (
                          <span className="text-[16px] font-pro font-normal text-[#FFFFFF] md:text-[32px]">
                            {item.tag}
                          </span>
                        )}
                      </motion.div>
                    )}

                    {item.type === "stat" && (
                      <div className=" h-[300px] mb-24 relative">
                        <TimelineBow className="-mt-[50px] -ml-[25px]" color="#83F28F"/>
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3 }}
                          custom={0}
                          variants={fadeUp}
                          className="space-y-3 absolute top-1/2 -translate-y-1/2 ml-[60px] mt-4"
                        >
                          <span className="mb-3 inline-block rounded-full border border-[#8AEB93] px-3 py-1 text-[10px] font-pro font-normal text-[#83F28F] md:text-[11px] bg-gradient-to-b from-[#7EE787] to-[#AFF5B4] bg-clip-text text-transparent">
                            {item?.tag}
                          </span>
                          <div className="flex items-baseline gap-1">
                            <p className="text-[30px] font-pro font-medium leading-none text-[#83F28F] md:text-[60px]">
                              {item.title}
                              <span className="text-[#83F28F]" />
                            </p>
                          </div>
                          <p className="text-[13px] font-pro font-normal text-[#FFFFFF] md:text-[20px]">
                            {item?.desc}
                          </p>
                        </motion.div>
                      </div>
                    )}

                    {item.type === "connected" && (
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        custom={0}
                        variants={fadeUp}
                        className="ml-8"
                      >
                        {item.title && (
                          <span className="text-[18px] font-pro font-normal text-[#FFFFFF] md:text-[24px]">
                            {item.title}
                          </span>
                        )}
                        <p className="text-[16px] font-pro font-normal leading-relaxed text-[#FFFFFF] md:text-[29px] mt-10">
                          {item?.desc}
                        </p>
                      </motion.div>
                    )}

                    {item.type === "shop" && (
                        <div className=" h-[400px] mb-24 relative">
                        <TimelineBow className="-mt-[50px] -ml-[25px]" color="#7C88FF"/>
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3 }}
                          custom={0}
                          variants={fadeUp}
                          className="space-y-3 absolute top-1/2 -translate-y-1/2 ml-[60px] -mt-10" 
                        >
                          <span className="mb-3 inline-block rounded-full border px-3 py-1 text-[10px] font-pro font-normal md:text-[11px] border-[#939AFF] bg-gradient-to-b from-[#939AFF] to-[#B2B7FF] bg-clip-text text-transparent">
                            {item?.tag}
                          </span>
                          <div className="flex items-baseline gap-1">
                            <p className="text-[30px] font-pro font-medium leading-none text-[#7C88FF] md:text-[60px]">
                              {item.title}
                              <span className="text-[#7C88FF]" />
                            </p>
                          </div>
                          <p className="text-[13px] font-pro font-normal text-[#FFFFFF] md:text-[20px]">
                            {item?.desc}
                          </p>
                        </motion.div>
                      </div>
                    )}
                    {item.type === "Collaboration" && (
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        custom={0}
                        variants={fadeUp}
                        className="ml-8"
                      >
                        {item.title && (
                          <span className="text-[18px] font-pro font-normal text-[#FFFFFF] md:text-[24px]">
                            {item.title}
                          </span>
                        )}
                        <p className="text-[16px] font-pro font-normal leading-relaxed text-[#FFFFFF] md:text-[32px] mt-10">
                          {item?.desc}
                        </p>
                      </motion.div>
                    )}

                    {item.type === "message" && (
                        <div className=" h-[300px] mb-24 relative">
                        <TimelineBow className="-mt-[50px] -ml-[25px]" color="#FF8A5B" />
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3 }}
                          custom={0}
                          variants={fadeUp}
                          className="space-y-3 absolute top-1/2 -translate-y-1/2 ml-[60px] mt-4"
                        >
                          <span className="mb-3 inline-block rounded-full border px-3 py-1 text-[10px] font-pro font-normal md:text-[11px] border-[#FF8A5B] bg-gradient-to-b from-[#FFA28B] to-[#FFC2B2] bg-clip-text text-transparent">
                            {item?.tag}
                          </span>
                          <div className="flex items-baseline gap-1">
                            <p className="text-[30px] font-pro font-medium leading-none md:text-[60px] text-[#FF8A5B]">
                              {item.title}
                            </p>
                          </div>
                          <p className="text-[13px] font-pro font-normal text-[#D1D5DB] md:text-[20px]">
                            {item?.desc}
                          </p>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* powered by AI */}
        <div className="justify-center items-center flex flex-col text-center relative max-h-[520px]" >
          <h1 className="text-[24px] font-pro font-normal mb-6 md:text-[68px] bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF00] bg-clip-text text-transparent">
            {t("poweredByAI")}
          </h1>
          <p className="font-pro font-normal text-[12px] md:text-[20px] text-[#FFFFFF] max-w-[540px]">
            {t("poweredByAIDesc")}
          </p>

          <img src={worlds} alt="worlds" className="mt-10 w-[90%] md:w-[80%]" />
        </div>

      </div>
    </div>
  );
}
