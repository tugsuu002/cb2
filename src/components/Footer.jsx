import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/chatbot-logo_white.png";
import turshih from "../assets/turshih.png";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import computer from "../assets/com.png";
import Youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import cbicon from "../assets/BotIcon.svg";
import arrow from "../assets/arrow.png";

function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className=" text-white flex flex-col justify-between bg-black ">
        <div className="mx-auto w-full max-w-[1320px] px-4  sm:px-2 lg:px-1  py-8 lg:py-16">
          <div
            className="relative w-full h-auto lg:h-[352px] rounded-[20px] flex flex-col  justify-items-center lg:flex-row items-center justify-between
text-center text-white
[background:radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1)_25%,_rgba(255,255,255,0)_50%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1)_16%,_rgba(255,255,255,0)_75%),radial-gradient(ellipse_at_center,_rgba(0,0,0,0.45)_100%,_rgba(0,0,0,0.75)_100%)]"
          >
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4 lg:px-0 pt-12 lg:pl-20 z-10  justify-start text-center lg:text-left">
              <p className=" text-[40px] md:text-[64px] font-pro font-semibold mb-4 text-[#FFFFFF]">
                {t("chatbotTest")}
              </p>

              <p className="text-sm sm:text-base md:text-[17px] font-pro font-normal mb-6 text-[#FFFFFF]">
                {t("chatbotText")}
              </p>

              <button
                className="flex border-[#484848] w-[185px] h-[48px] gap-2 justify-center justify-items-center text-sm md:text-[17px] font-medium rounded-[40px] bg-gray transition bg-[#FFFFFF] items-center space-x-2 shadow-sm hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#E9F3FF] hover:border-[#5B8DEF] hover:text-[#0B1F44] duration-300 ease-out"
                onClick={() => navigate("/signup")}
              >
                <img src={cbicon} alt="chatbot icon" className="w-6 h-6" />
                <span className="text-black text-[13px]">
                  {t("button.free")}
                </span>
              </button>
            </div>

            {/* image */}
            <div className="w-full lg:w-1/2 flex items-stretch justify-center mt-8 lg:mt-0 z-10">
              <img
                src={computer}
                alt="computer illustration"
                className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-full object-contain "
              />
            </div>
            <img
              src={turshih}
              className="w-full h-full absolute top-0 left-0 rounded-[30px]"
            />
          </div>
        </div>

        <footer className="mx-auto w-full max-w-[1320px] text-gray-300 px-2 lg:px-1 mt-[26px] pb-4">
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} className="w-40 h-auto -mt-4"/>
              </div>
              <p className="text-sm text-gray-400 max-w-sm mb-6 mt-[29px]">
                Орчин үеийн бизнесийг AI-аар бүтээх, түгээх хамгийн ухаалаг арга.
              </p>
              <div className="flex gap-4 mt-6 lg:mt-0 lg:justify-start">
                <a
                  href="https://www.facebook.com/Chatbot.mn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chatbot Facebook"
                >
                  <img
                    src={facebook}
                    alt="facebook"
                    className="cursor-pointer transition duration-400 ease-out hover:[transform:rotateY(180deg)]"
                  />
                </a>
                <a
                  href="https://www.instagram.com/chatbot.mn_official/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chatbot Instagram"
                >
                  <img
                    src={instagram}
                    alt="instagram"
                    className="cursor-pointer transition duration-400 ease-out hover:[transform:rotateY(180deg)]"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@chatbotmn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chatbot YouTube"
                >
                  <img
                    src={Youtube}
                    alt="youtube"
                    className="cursor-pointer transition duration-400 ease-out hover:[transform:rotateY(180deg)]"
                  />
                </a>
              </div>
            </div>

            <div className="w-96 justify-end flex">
              <div>
              <h4 className="text-white font-pro font-semibold">
                {t("footer.col1")}
              </h4>
              <ul className="mt-[29px] space-y-3 text-transparent bg-clip-text bg-gradient-to-r from-[#D8ECF8] to-[#98C0EF] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                <li className="hover:text-white cursor-pointer font-pro font-normal text-[16px] hover:underline ">
                  {t("footer.row1")}
                </li>
                <li className="hover:text-white cursor-pointer font-pro font-normal text-[16px] hover:underline">
                  <HashLink smooth to="/pricing#faq">
                    {t("footer.row2")}
                  </HashLink>
                </li>
                <li className="hover:text-white cursor-pointer font-pro font-normal text-[16px] hover:underline">
                  <HashLink smooth to="/pricing#top">
                    {t("footer.row7")}
                  </HashLink>
                </li>
                </ul>
                </div>
            </div>

            <div className="h-auto">
              <h4 className="text-white font-pro font-semibold mb-4">
                {t("footer.row4")}
              </h4>
              <div className="max-w-[330px] mt-[29px]">
                <p className="font-variable font-normal text-[16px] leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-[#D8ECF8] to-[#98C0EF] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mb-[30px]">
                  {t("footer.address")}
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="tel:77441616"
                    className="flex items-center bg-[#171C1F] rounded-[20px] p-2 text-[#FFFFFF] text-[16px] font-pro font-medium w-full md:w-[129px] hover:bg-[#1f262a] transition shadow-none hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                  >
                    <img src={phone} alt="phone" className="w-4 h-4 ml-[14px] mt-1" />
                    <span className="truncate ml-[8px]">7744-1616</span>
                  </a>
                  <a
                    href="mailto:info@example.com?subject=%D0%A1%D0%B0%D0%BD%D0%B0%D0%BB%20%D1%85%D2%AF%D1%81%D1%8D%D0%BB%D1%82&body=%D0%A2%D0%B0%D0%BD%D1%8B%20%D0%BD%D1%8D%D1%80:%0A%D0%A5%D0%BE%D0%BB%D0%B1%D0%BE%D0%B3%D0%B4%D0%BE%D1%85%20%D1%83%D1%82%D0%B0%D1%81:%0A%D0%90%D1%81%D1%83%D1%83%D0%B4%D0%B0%D0%BB:%20"
                    className="flex items-center bg-[#171C1F] p-[8px] rounded-[20px] text-[#FFFFFF] text-[16px] font-pro font-medium w-full md:w-[200px] hover:bg-[#1f262a] transition shadow-none hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                  >
                    <img src={mail} alt="mail" className="w-4 h-4 ml-[14px] mt-1.5" />
                    <span className="truncate ml-[8px]">info@example.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div>
                <Link
                  to="/terms"
                  className="hover:text-gray-200 text-[#FFFFFF] cursor-pointer font-pro font-semibold text-[12px] border border-[#171C1F] h-[42px] px-3 py-2 flex items-center justify-between w-[70%] md:w-[259px] rounded-[7px] transition shadow-none hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                >
                  <span>{t("termTitle")}</span>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 md:w-[7px] md:h-[15px] ml-2"
                  />
                </Link>
              </div>
              <div className="mt-3">
                <Link
                  to="/privacy"
                  className="hover:text-gray-200 text-[#FFFFFF] cursor-pointer font-pro font-semibold text-[12px] border border-[#171C1F] h-[42px] px-3 py-2 flex items-center justify-between w-[70%] md:w-[259px] rounded-[7px] transition shadow-none hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                >
                  <span>{t("privacyTitle")}</span>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 md:w-[7px] md:h-[15px] ml-2"
                  />
                </Link>
              </div>
              <div className="mt-3">
                <Link
                  to="/privacy"
                  className="hover:text-gray-200 text-[#FFFFFF] cursor-pointer font-pro font-semibold text-[12px] border border-[#171C1F] h-[42px] px-3 py-2 flex items-center justify-between w-[70%] md:w-[259px] rounded-[7px] transition shadow-none hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                >
                  <span>{t("Feedback")}</span>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 md:w-[7px] md:h-[15px] ml-2"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full">
            <div
              className="w-full border-t border-gray-800/40"
              aria-hidden="true"
            />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-[32px] mb-8">
              <div className="flex-1">
                <p className="cursor-pointer font-pro font-normal text-[16px] text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#D8ECF8] to-[#98C0EF] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {t("footer.copyright")} {new Date().getFullYear()} он
                </p>
              </div>

              <div className="flex-1 text-center sm:text-right">
                <p className="cursor-pointer font-pro font-normal text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-[#D8ECF8] to-[#98C0EF] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  © Chatbot XXK {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
