import { Link, useNavigate } from "react-router-dom";
// import { FaFacebookF } from "react-icons/fa";
// import { BsInstagram } from "react-icons/bs";
// import logo from "../assets/mobile-logo.png";
import nsplogo from "../../assets/nsp-logo.png";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

function FooterWithImg() {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     behavior: "smooth",
  //     top: 0,
  //   });
  // };
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="border-b-2 border-slate-300 xl:bg-[#F1F1F1]">
        <div className="flex relative">
          <div className="flex-1 flex flex-col justify-center font-bold lg:pl-20 xl:pl-28 2xl:pl-60">
            <div className="flex flex-col px-6 py-10 lg:py-24 justify-center items-center text-customBlue text-center space-y-6">
              <p className="text-[20px] lg:text-[24px] font-black">
                {t("footer.title")}
              </p>
              <p className="text-[12px]">{t("footer.subtitle")}</p>
              <button
                className="bg-customPink text-white text-[13px]"
                onClick={() => navigate("/signup")}
              >
                {t("button.free")}
              </button>
            </div>
          </div>
          <div className="hidden xl:flex flex-1 xl:-mt-2 xl:mb-6">
            <div className="w-[217px] h-[416px] relative z-20 scale-90 2xl:scale-100">
              {/* <img
                src={footer1}
                alt=""
                className="rounded-[50px] shadow-2xl"
                loading="lazy"
              /> */}
            </div>
            {/* <img
              src={footer2}
              alt=""
              className="w-[517px] h-[362px] absolute top-[-7%] right-[7%] z-10 rounded-[20px] shadow-2xl scale-90 2xl:scale-100"
              loading="lazy"
            /> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 text-[14px] gap-3 p-6 md:grid-cols-3 md:px-6 lg:px-20 lg:py-24 lg:container md:place-items-center">
        {/* <div className="hidden md:flex md:justify-center" onClick={scrollToTop}>
          <Link to="/">
            <img src={logo} className="w-14 h-14" alt="" />
          </Link>
        </div> */}
        <div>
          <div className="font-bold">{t("footer.col1")}</div>
          <div className="footer-row">
            <Link to="/about">{t("footer.row1")}</Link>
            <HashLink smooth to="/pricing#faq">
              {t("footer.row2")}
            </HashLink>
            <a
              href="https://www.facebook.com/groups/chatbot.mn"
              target="_blank"
              rel="noreferrer"
            >
              {t("footer.row3")}
            </a>
            <Link to="/contact">{t("footer.row4")}</Link>
          </div>
        </div>
        <div>
          <div className="font-bold">{t("footer.col2")}</div>
          <div className="footer-row">
            <HashLink smooth to="/product#top">
              {t("footer.row5")}
            </HashLink>
            <HashLink smooth to="/product#t">
              {t("footer.row6")}
            </HashLink>
            <HashLink smooth to="/pricing#top">
              {t("footer.row7")}
            </HashLink>
            <HashLink smooth to="/product#top">
              {t("footer.row8")}
            </HashLink>
          </div>
        </div>
        <div>
          <div className="font-bold">{t("footer.col3")}</div>
          <div className="footer-row">
            <a
              href="https://www.messenger.com/t/308105179819485"
              target="_blank"
              rel="noreferrer"
            >
              {t("footer.row9")}
            </a>
            <a href="mailto:info@chatbot.mn" target="_blank" rel="noreferrer">
              {t("footer.row10")}
            </a>
            <a href="https://help.chatbot.mn" target="_blank" rel="noreferrer">
              {t("footer.row11")}
            </a>
            <a
              href="https://www.messenger.com/t/308105179819485"
              target="_blank"
              rel="noreferrer"
            >
              {t("footer.row12")}
            </a>
          </div>
        </div>
        {/* <div>
        <div className="font-bold">SOCIALS</div>
          <div className="flex flex-col text-[10px] lg:text-[12px] space-y-2 ml-4">
            <a href="https://www.facebook.com/Chatbot.mn" target="_blank" rel='noreferrer'>
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel='noreferrer'>
              <BsInstagram size={20} />
            </a>
          </div>
        </div> */}
      </div>
      <div className="border-t-2 border-slate-300">
        <div className="font-semibold text-[10px] lg:text-[12px] grid grid-cols-1 gap-3 lg:gap-20 place-items-center md:grid-cols-3 lg:container px-6 pt-6 md:pt-0 lg:px-20">
          <div className="text-center">
            {t("footer.copyright")} {new Date().getFullYear()}{" "}
            {t("footer.year")}
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center space-y-3 lg:space-y-0 lg:space-x-8 lg:font-extrabold">
            <Link to="/terms">{t("termTitle")}</Link>
            <Link to="/privacy">{t("privacyTitle")}</Link>
          </div>
          <div>
            <a href="https://nextsocial.mn" target="_blank" rel="noreferrer">
              <img src={nsplogo} className="h-10 md:h-20" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterWithImg;
