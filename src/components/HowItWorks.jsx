import { useTranslation } from "react-i18next";
import utas from "../assets/Utas.webp";
import Frame3 from "../assets/Frame3.webp";
import Frame from "../assets/facebook/Phone.png";
import video from "../assets/facebook/123.mp4";

export default function HowItWorks({ type }) {

  const { t } = useTranslation();

  return (
    <section className="relative bg-[#F4F7FE] py-24 overflow-hidden rounded-[20px]" >
      {/* Title */}
      <h2 className="text-center text-[30px] lg:text-[55px] font-pro font-semibold mb-16 text-[#000000] tracking-[-0.02em]">
        {t("phoneScreen")}
      </h2>

      {/* Content */}
      <div className="relative flex justify-center items-center z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <img loading="lazy" src={Frame3} alt="decorative frame" className="max-w-full"/>
        </div>
        {/* Phone */}
          <div className="relative z-30 flex items-center justify-center">
            <img
              loading="lazy"
              src={Frame}
              alt="App preview"
              className="w-[300px] md:w-[460px] lg:w-[600px] object-contain z-20"
            />
            {/* Video overlay inside phone */}
            <video
              src={type === "facebook" ? video : video}
              title="App preview video"
              autoPlay
              muted
              loop
              playsInline
              className="absolute  w-[74%] h-[90%] rounded-[16px] shadow-lg object-cover z-10"
              style={{background: '#000'}}
            ></video>
          </div>
      </div>
    </section>
  );
}
