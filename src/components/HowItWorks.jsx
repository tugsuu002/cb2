import utas from "../assets/Utas.png";
import Frame3 from "../assets/Frame3.png";
export default function HowItWorks() {
  return (
    <section className="relative bg-[#EDF2FB] py-24 overflow-hidden rounded-[20px]" >
      {/* Title */}
      <h2 className="text-center text-[30px] lg:text-[70px] font-pro font-medium mb-16">
        ЯАЖ АЖИЛЛАДАГ ВЭ?
      </h2>

      {/* Content */}
      <div className="relative flex justify-center items-center z-10">
        <div className="absolute">
          <img src={Frame3}/>
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
