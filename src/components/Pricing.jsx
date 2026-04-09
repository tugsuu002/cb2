import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Faq from "./Home/Faq.jsx";
import HeroSection from "./HeroSection.jsx";
import { useEffect, useState, useRef } from "react";


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

// const truncateText = (text = "", max = 140) =>
//   text.length > max ? `${text.slice(0, max)}...` : text;

export default function PricingTable() {
  const { t } = useTranslation();
  // const priceCommentList = t("priceCommentList", { returnObjects: true })
  const features = t("features", { returnObjects: true })
  const plans = t("price", { returnObjects: true })
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);
  // const swiperRef = useRef(null);
  // const [expandedId, setExpandedId] = useState(null);

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
    <div className="w-full max-w-[1320px] mx-auto py-12 mt-28">
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
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-[80%] ml-auto text-[#031555 transition-all duration-1000 delay-200 ${
            visibleSections.has('plans') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[10px] px-6 py-6 text-left h-full flex flex-col ${
              plan.highlight ? "bg-[#D4E0FF]" : "bg-[#F4F7FE]"
            }`}
            style={
              plan.highlight
                ? {  background: "linear-gradient(135deg, #D4E0FF 5%, #608DFF 35%)" }
                : undefined
            }
          >
            <div>
              <h3 className={`text-[23px] md:text-[30px] font-pro font-semibold ${plan?.name == 'Enterprise' ? "text-white" : " text-black"}`}>{plan.name}</h3>
              <div className={`text-[13px]  font-pro font-normal opacity-80 mt-1 ${plan?.name == 'Enterprise' ? "text-white" : "text-[#A3AED0]"}`}>{plan.description}</div>
            </div>
            <div className={`flex justify-start items-baseline mt-6 space-x-2 ${plan?.name == 'Enterprise'&& "text-white" }`}>
              <div className="text-[23px] md:text-[26px] font-pro font-medium">{plan.price}</div>
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
          <div className="h-14 border-b px-4 py-4 font-medium text-black bg-[#F4F7FE]">
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
            <div className="px-4 py-3 border-b text-sm font-pro font-normal text-black bg-[#FFFFFF] flex items-center gap-2">
              <div>{f.label}</div>
              {f.sub && <div className="text-xs font-pro font-normal text-gray-500">{f.sub}</div>}
            </div>

            {plans.map((plan, colIndex) => (
              <div
                key={`${plan.name}-${rowIndex}`}
                className={`px-4 py-3 font-pro font-normal border-b border-[#A3AED066] flex justify-center items-center gap-2 text-sm ${plan.highlight ? "bg-[#608DFF] text-white" : "bg-[#FFFFFF] text-[#A3AED0]"} flex`}
              >
                {f.values[colIndex] === true && <Check select={plan.highlight}/>}
                {f.values[colIndex] === false && (
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#A3AED0] text-white text-[10px]">
                      ✕
                  </span>
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
      <div id="faq" >
        <Faq />
      </div>
      <HeroSection />
    </div>
  );
}
