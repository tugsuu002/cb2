import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Faq from "./Home/Faq.jsx";
import HeroSection from "./HeroSection.jsx";
import { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// const plans = [
//   {
//     name: "Pro",
//     price: "300,000₮",
//     period:
//       "Өөрийн бизнесийн онцлогт тохируулан хүссэн цэсээ нэмэлтээр сонгон ав",
//     highlight: false,
//   },
//   {
//     name: "Enterprise",
//     price: "900,000₮",
//     period: "Чатботын бүх боломж чадварыг хязгааргүйгээр ашигла",
//     highlight: true,
//   },
//   {
//     name: "VIP",
//     price: "Дотно ярья",
//     period:
//       "Үйл ажиллагаандаа ашигладаг системүүдтэй холболт хийлгэж хөгжүүлэх боломжтой",
//     highlight: false,
//   },
// ];

// const features = [
//   { label: "Мэдээлэл боловсруулах", sub: null , values: [true, true, true] },
//   { label: "Харицагч ядра", sub: null , values: ["Хязгааргүй", "Хязгааргүй", "Хязгааргүй"] },
//   { label: "Хэрэглэгчийн сегмент", sub: null , values: [true, true, true] },
//   { label: "Hubspot холболт", sub: null , values: [true, true, true] },
//   { label: "Харицагч менежер", sub: null , values: [true, true, true] },
//   { label: "Аналитик харах", sub: null , values: [true, true, true] },
//   { label: "Мониторинг хийх", sub: null , values: [true, true, true] },
//   { label: "Төлбөрийн холболт", sub: "Qpay SocialPay Monpay" , values: [false, true, false] },
//   { label: "Масс мессеж", sub: null , values: [true, true, true] },
//   { label: "Web форм", sub: null , values: ["Хязгааргүй", "Хязгааргүй", "Хязгааргүй"] },
//   { label: "Асуулгын форм", sub: null , values: ["Unlimited", "Unlimited", "Unlimited"] },
//   { label: "HTML тайбар", sub: null , values: [true, true, true] },
//   { label: "Захиалга удирдах", sub: null , values: [false, true, false] },
//   { label: "Онлайн дэмжлэг", sub: null , values: [false, true, true] },
//   { label: "Коммент тохиргоо", sub: null , values: [true, true, true] },
//   { label: "Live agent", sub: null , values: [true, true, true] },
//   { label: "Онлайн гэрээ", sub: null , values: [true, true, true] },
//   { label: "Тооцооллууд",  sub: null ,values: [true, true, true] },
//   { label: "ДАН систем", sub: null , values: [true, true, true] },
//   { label: "Систем холболт", sub: null , values: [true, true, true] },
// ];

const Check = ({select}) => {
  return select ? 
  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#608DFF] text-[10px]">
    ✓
    </span>
    :
    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#A3AED0] text-white text-[10px]">
    ✓
    </span>;
};

const truncateText = (text = "", max = 140) =>
  text.length > max ? `${text.slice(0, max)}...` : text;

export default function PricingTable() {
  const { t } = useTranslation();
  const priceCommentList = t("priceCommentList", { returnObjects: true })
  const features = t("features", { returnObjects: true })
  const plans = t("price", { returnObjects: true })
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);

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


  return (
    <div className="w-full max-w-[1320px] mx-auto  py-12 mt-28">
      <p 
        ref={(el) => (sectionRefs.current[0] = el)}
        data-section="title"
        className={`font-pro font-semibold text-[55px] text-[#000000] flex justify-center justify-items-center mb-20 transition-all duration-1000 ${
          visibleSections.has('title') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        {t("footer.row7")}
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
            className={`rounded-[10px] px-3 py-6 text-left h-full flex flex-col ${
              plan.highlight ? "bg-[#D4E0FF]" : "bg-[#F4F7FE]"
            }`}
            style={
              plan.highlight
                ? {  background: "linear-gradient(135deg, #D4E0FF 5%, #608DFF 35%)" }
                : undefined
            }
          >
            <div>
              <h3 className={`text-xl font-pro font-semibold ${plan?.name == 'Enterprise' ? "text-white" : " text-black"}`}>{plan.name}</h3>
              <div className={`text-[13px]  font-pro font-normal opacity-80 mt-1 ${plan?.name == 'Enterprise' ? "text-white" : "text-[#A3AED0]"}`}>{plan.description}</div>
            </div>
            <div className={`flex justify-start items-baseline mt-6 space-x-2 ${plan?.name == 'Enterprise'&& "text-white" }`}>
              <div className="text-[23px] font-pro font-medium">{plan.price}</div>
              {plan?.name === 'Pro' && (
                <div className="flex items-center gap-2">
                  <p className="text-[#A3AED0]">/{t("priceMonth")}</p>
                  <span className="text-[10px] bg-[#608DFF] rounded-full text-white px-2 py-0.5 whitespace-nowrap">
                    *{t("PriceAdd")}
                  </span>
                </div>
              )}
              {plan?.name == 'Enterprise' && <p>/{t("priceMonth")}</p>}
            </div>
          </div>
        ))}
      </div>

      <div 
        ref={(el) => (sectionRefs.current[2] = el)}
        data-section="table"
        className={`border rounded-2xl overflow-hidden transition-all duration-1000 delay-400 ${
          visibleSections.has('table') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        {/* Header row */}
        <div className="grid grid-cols-4">
          <div className="h-14 border-b px-4 py-4 font-medium text-[#031555] bg-[#F4F7FE]">
            {t("priceTitle2")}
          </div>
          {plans.map((plan) => (
            <div
              key={`${plan.name}-header`}
              className="h-14 border-b bg-[#F4F7FE] border-[#A3AED066]"
            />
          ))}
        </div>

        {/* Feature rows */}
        {features.map((f, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4">
            <div className="px-4 py-3 border-b text-sm font-pro font-medium text-[#031555] bg-[#FFFFFF] flex items-center gap-2">
              <div>{f.label}</div>
              {f.sub && <div className="text-xs font-pro font-normal text-gray-500">{f.sub}</div>}
            </div>

            {plans.map((plan, colIndex) => (
              <div
                key={`${plan.name}-${rowIndex}`}
                className={`px-4 py-3 font-pro font-medium border-b border-[#A3AED066] flex justify-center items-center gap-2 text-sm ${plan.highlight ? "bg-[#608DFF] text-white" : "bg-[#FFFFFF] text-[#A3AED0]"}`}
              >
                {f.values[colIndex] === true && <Check select={plan.highlight}/>}
                {f.values[colIndex] === false && (
                  <span className="opacity-40">—</span>
                )}
                {typeof f.values[colIndex] === "string" && (
                  <span className={plan.highlight ? "text-white" : "text-[#A3AED0]"}>
                    {f.values[colIndex]}
                  </span>
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
        className={`lg:container transition-all duration-1000 delay-600 mt-28 ${
          visibleSections.has('industry') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <h2 className="text-center mt-6 font-pro font-semibold text-[55px]">
          {t("priceComment")}
        </h2>
        <div id="faq" className="relative mt-28 bg-[#F4F7FE]">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            <button
              ref={prevRef}
              className="h-10 w-10 rounded-full bg-[#F4F7FE] text-[28px] hover:text-[#608DFF] hover:bg-[#635BFF1A] text-[#727F96] shadow-sm transition flex items-center justify-center"
              aria-label="Previous"
            >
             <FaArrowLeft  size={14}/>
            </button>
            <button
              ref={nextRef}
              className="h-10 w-10 rounded-full bg-[#F4F7FE] text-[28px] hover:text-[#608DFF] hover:bg-[#635BFF1A] text-[#727F96] transition flex items-center justify-center"
              aria-label="Next"
            >
            <FaArrowRight size={14}/>
            </button>
          </div>
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
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // Re-init navigation after refs are attached
              setTimeout(() => {
                if (!swiperRef.current?.params?.navigation) return;
                swiperRef.current.params.navigation.prevEl = prevRef.current;
                swiperRef.current.params.navigation.nextEl = nextRef.current;
                swiperRef.current.navigation.destroy();
                swiperRef.current.navigation.init();
                swiperRef.current.navigation.update();
              }, 0);
            }}
            autoplay={{delay:5000, disableOnInteraction: true, pauseOnMouseEnter: true}}
            modules={[ Autoplay, Navigation ]}
          >
            {priceCommentList.map((e) => {
              const isExpanded = expandedId === e.id;
              const text = isExpanded ? e.description : truncateText(e.description, 140);
              return (
                <SwiperSlide key={e.id} className="py-10 mt-28 pl-2">
                  <div className="p-6 border-t-4 bot border-t-[#608DFF] h-[315px] rounded-[8px] bg-white lg:hover:-translate-y-1 shadow-xl flex flex-col">
                    <div className="space-y-3 pt-10">
                      <div>
                        <h3 className="text-lg font-semibold text-[#0A2540]">{e.name}</h3>
                      </div>  
                      <div className="flex flex-col space-y-2">
                        <p className="text-[12px] font-semibold text-black normal-case text-justify tracking-tight">
                          {text}
                        </p>
                        {e?.description?.length > 140 && (
                          <button
                            className="text-[12px] font-semibold text-[#608DFF] hover:text-[#031555] transition self-start inline-flex items-center gap-1"
                            onClick={() => setExpandedId(isExpanded ? null : e.id)}
                          >
                            {isExpanded ? "Show less" : "Learn more"}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M5.47 2.97a.75.75 0 0 0 0 1.06L9.44 8l-3.97 3.97a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0Z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="mt-auto pt-4 space-y-3">
                      <div className="w-[90%] mx-auto"></div>
                      <div className="flex gap-3 items-center justify-center">
                        <img
                          src={e?.img1}
                          className="h-12 w-auto object-contain"
                          alt={`logo`}
                        />
                        <img
                          src={e?.img2}
                          className="h-12 w-auto object-contain"
                          alt={`logo`}
                        />
                        <img
                          src={e?.img3}
                          className="h-12 w-auto object-contain"
                          alt={`logo`}
                        />
                      </div>
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
