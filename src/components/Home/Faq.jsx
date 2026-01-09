import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useTranslation } from "react-i18next";
import asuult from "../../assets/asuult.png";
import FAQS from "../../assets/FAQS.png";

function Faq() {
  const { t } = useTranslation();
  let faq = t("faq", { returnObjects: true });
  const [checkedState, setCheckedState] = useState(
    new Array(faq.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="relative p-20 lg:container bg-black rounded-[10px] mt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <img src={FAQS} alt="FAQS background" className="w-full h-full object-cover" />
      </div>

      {/* Content on top */}
      <div className="relative z-10">
        <div className="flex justify-center mb-2"><img src={asuult} className="h-5 w-5" /> <p className="text-white">FAQS</p></div>
        <h2 className="font-pro font-semibold text-[30px] px-6 text-white justify-center flex">{t("faqHeader")}</h2>
      </div>

      <div className="relative z-10">
      {faq.map((e) => {
        return (
          <ul
            key={e.id}
            onClick={() => handleOnChange(e.id)}
            className="rounded-[14px] w-full lg:w-[70%] my-4 pt-1 drop-shadow-md bg-[#171C1F] text-white md:mx-auto md:w-4/5 hover:-translate-y-1 hover:shadow-xl transition ease-in-out delay-150 borderduration-300"
            >
            <li className="flex p-6 justify-between">
              <h2 className=" text-[14px] lg:text-[16px] font-pro font-medium text-left">
                {e.title}
              </h2>
              <input
                type="checkbox"
                checked={checkedState[e.id]}
                onChange={handleOnChange}
                className="hidden"
              />
              {checkedState[e.id] ? (
                <MdKeyboardArrowUp size={20} />
              ) : (
                <MdKeyboardArrowDown size={20} />
              )}
            </li>
            {checkedState[e.id] && (
              <div className="">
                <hr className="mb-2 w-full border-t-1 border-gray-400" />
                <p className="px-6 pb-6 whitespace-pre-line font-pro font-normal normal-case tracking-tight">{e.description}</p>
              </div>
            )}
          </ul>
        );
      })}
      </div>
    </div>
  );
}

export default Faq;
