import { useTranslation } from "react-i18next";
import utas from "../assets/Utas.png";
import Frame3 from "../assets/Frame3.png";
export default function HowItWorks() {

  const { t } = useTranslation();

  return (
    <section className="relative bg-[#EDF2FB] py-24 overflow-hidden rounded-[20px]" >
      {/* Title */}
      <h2 className="text-center text-[30px] lg:text-[55px] font-pro font-medium mb-16 text-[#242424] tracking-[-0.02em]">
        {t("phoneScreen")}
      </h2>

      {/* Content */}
      <div className="relative flex justify-center items-center z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={Frame3} alt="decorative frame" className="max-w-full"/>
        </div>
        {/* Phone */}
          <div className="relative z-30">
            <div className="flex items-center justify-center">
              <img
                src={utas}
                alt="App preview"
                className="w-[260px] sm:w-[300px] md:w-[460px] lg:w-[600px] object-contain"
              />
            </div>
          </div>
      </div>
    </section>
  );
}
