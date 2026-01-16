import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Faq from "./Home/Faq.jsx";
import HeroSection from "./HeroSection.jsx";
import { useEffect, useState, useRef } from "react";

const plans = [
  {
    name: "Pro",
    price: "300,000₮",
    period:
      "Өөрийн бизнесийн онцлогт тохируулан хүссэн цэсээ нэмэлтээр сонгон ав",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "900,000₮",
    period: "Чатботын бүх боломж чадварыг хязгааргүйгээр ашигла",
    highlight: true,
  },
  {
    name: "VIP",
    price: "Let's talk",
    period:
      "Үйл ажиллагаандаа ашигладаг системүүдтэй холболт хийлгэж хөгжүүлэх боломжтой",
    highlight: false,
  },
];

const features = [
  { label: "Мэдээлэл боловсруулах", sub: null , values: [true, true, true] },
  { label: "Харицагч ядра", sub: null , values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "Хэрэглэгчийн сегмент", sub: null , values: [true, true, true] },
  { label: "Hubspot холболт", sub: null , values: [true, true, true] },
  { label: "Харицагч менежер", sub: null , values: [true, true, true] },
  { label: "Аналитик харах", sub: null , values: [true, true, true] },
  { label: "Мониторинг хийх", sub: null , values: [true, true, true] },
  { label: "Төлбөрийн холболт", sub: "Qpay SocialPay Monpay" , values: [false, true, false] },
  { label: "Масс мессеж", sub: null , values: [true, true, true] },
  { label: "Web форм", sub: null , values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "Асуулгын форм", sub: null , values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "HTML тайбар", sub: null , values: [false, true, false] },
  { label: "Захиалга удирдах", sub: null , values: [false, true, false] },
  { label: "Онлайн дэмжлэг", sub: null , values: [false, true, false] },
  { label: "Коммент тохиргоо", sub: null , values: [false, true, false] },
  { label: "Live agent", sub: null , values: [false, true, false] },
  { label: "Онлайн гэрээ", sub: null , values: [false, true, false] },
  { label: "Тооцооллууд",  sub: null ,values: [false, true, false] },
  { label: "ДАН систем", sub: null , values: [false, true, false] },
  { label: "Систем холболт", sub: null , values: [false, true, false] },
];

const Check = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#A3AED0] text-white text-xs">
    ✓
  </span>
);

export default function PricingTable() {
  const { t } = useTranslation();
  const priceCommentList = t("priceCommentList", { returnObjects: true })
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  console.log("🚀 ~ PricingTable ~ priceCommentList:", priceCommentList)

  return (
    <div className="w-full max-w-[1320px] mx-auto  py-12 mt-28">
      <p 
        ref={(el) => (sectionRefs.current[0] = el)}
        data-section="title"
        className={`font-pro font-semibold text-[55px] text-[#000000] flex justify-center justify-items-center mb-20 transition-all duration-1000 ${
          visibleSections.has('title') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        Үйлчилгээний багц
      </p>
        <div 
          ref={(el) => (sectionRefs.current[1] = el)}
          data-section="plans"
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-[70%] ml-auto text-[#031555 transition-all duration-1000 delay-200 ${
            visibleSections.has('plans') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[10px] border p-6  justify-start text-left ${
              plan.highlight
                ? "bg-gradient-to-tr from-[#F4F7FE] via-[#F4F7FE] to-[#608DFF]"
                : "bg-[#F4F7FE]"
            }`}
          >
            <h3 className="text-xl font-pro font-semibold">{plan.name}</h3>
            <div className="text-[13px] font-pro font-normal opacity-80 mt-1">{plan.period}</div>
            <div className="flex justify-start items-baseline mt-4 space-x-2">
              <div className="text-[30px] font-pro font-medium">{plan.price}</div>
             {plan?.name !=='VIP' && <p>/1 сар</p>}
            </div>
          </div>
        ))}
      </div>

      <div 
        ref={(el) => (sectionRefs.current[2] = el)}
        data-section="table"
        className={`grid grid-cols-4 border rounded-2xl overflow-hidden transition-all duration-1000 delay-400 ${
          visibleSections.has('table') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        {/* Feature names */}
        <div className="bg-gray-50">
          <div className="h-14 border-b px-4 py-4 font-medium text-[#031555] bg-[#F4F7FE]">
            Суурь боломж
          </div>

          {features.map((f, i) => (
            <div
              key={i}
              className="px-4 flex py-3 border-b text-sm text-[#031555] bg-[#FFFFFF]"
            >
              <div>{f.label}</div>
              {f.sub && <div className="text-xs font-pro font-normal text-gray-500 ml-2">{f.sub}</div>}
            </div>
          ))}
        </div>

        {/* Feature values */}
        {plans.map((plan, colIndex) => (
          <div
            key={plan.name}
            className={plan.highlight ? "bg-blue-50" : "bg-[#FFFFFF]"}
          >
            <div className="h-14 border-b bg-[#F4F7FE]" />

            {features.map((f, rowIndex) => (
              <div
                key={rowIndex}
                className="px-4 py-3 font-pro font-medium border-b flex justify-center text-[18px] text-[#A3AED0]"
              >
                {f.values[colIndex] === true && <Check />}
                {f.values[colIndex] === false && (
                  <span className="opacity-40">—</span>
                )}
                {typeof f.values[colIndex] === "string" && (
                  <span className="text-xs">{f.values[colIndex]}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      

      {/* Салбарын ангилал  */}
      <div 
        ref={(el) => (sectionRefs.current[3] = el)}
        data-section="industry"
        className={`lg:container transition-all duration-1000 delay-600 ${
          visibleSections.has('industry') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <h2 className="text-center mt-6 lg:px-36 font-black">
          {t("priceComment")}
        </h2>
        <div id="faq">
          <Swiper
            spaceBetween={5}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop
            // autoplay={{delay:5000, disableOnInteraction: true, pauseOnMouseEnter: true}}
            modules={[ Autoplay]}
          >
            {priceCommentList.map((e) => {
              return (
                <SwiperSlide key={e.id} className="py-10">
                  <div className="p-6 border-t-4 bot border-t-[#0000FF] h-[315px] rounded-[8px] space-y-3 bg-white lg:hover:-translate-y-1 shadow-lg justify-center">
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A2540]">{e.name}</h3>
                    </div>  
                    <div className="flex flex-col space-y-2">
                      <p className="text-[12px] font-semibold text-black normal-case text-justify tracking-tight">
                        {e.description}
                      </p>
                    </div>
                    <div className="border border-b-1 w-[90%] mx-auto"></div>

                    <div className="flex gap-3 items-center justify-center">
                      {/* {e.logos && e.logos.map((logo, idx) => ( */}
                        <img
                          // key={idx}
                          src={e?.img}
                          className="h-12 w-auto object-contain"
                          alt={`logo`}
                      />
                      <img
                          // key={idx}
                          src={e?.img}
                          className="h-12 w-auto object-contain"
                          alt={`logo`}
                      />
                      <img
                          // key={idx}
                          src={e?.img}
                          className="h-12 w-auto object-contain"
                          alt={`logo`}
                        />
                      {/* ))} */}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      
      {/*  */}
      
      <div>
        <Faq />
      </div>
      <HeroSection />
    </div>
  );
}
