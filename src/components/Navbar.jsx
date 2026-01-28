import { Link, Outlet, useLocation } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import { useRef, useEffect, useState } from "react";
import fetchWithTimeout from "../utils/fetchApi";
import logo from "../assets/chatbot-logo_white.png";
import english from "../assets/english.png";
import mongolia from "../assets/mongolia.png";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [openLang, setOpenLang] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
  const dropdownRef = useRef(null);
  const langs = [
    { code: "mn", label: "MN", flag: mongolia },
    { code: "en", label: "EN", flag: english },
  ];
  const introList = t("navIntroduction", { returnObjects: true });


    const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

    useEffect(() => {
    const checkAuth = async () => {
      const res = await fetchWithTimeout("/auth/validate", {
        method: "POST",
        body: {},
      });

      console.log('checkAuth', res);

      if (res?.result?.code === 1000) {
        setIsAuthorized(true);
      }
    };

      checkAuth();
    }, []);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenLang(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const normalizeLangCode = (value) => value?.split("-")[0] || value;

  const current =
    langs.find((l) => normalizeLangCode(i18n.language) === l.code) || langs[0];

  const changeLanguage = (code) => {
    const normalized = normalizeLangCode(code);
    localStorage.setItem("i18nextLng", normalized);
    i18n.changeLanguage(normalized);
    setOpenLang(false);
  };

  useEffect(() => {
    const saved = normalizeLangCode(localStorage.getItem("i18nextLng"));
    if (saved && saved !== normalizeLangCode(i18n.language)) {
      i18n.changeLanguage(saved);
    }

    const handleLanguageChange = (lng) => {
      localStorage.setItem("i18nextLng", normalizeLangCode(lng));
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <>
      {/* <Hero /> */}
      {/* ===== NAVBAR ===== */}
      <nav
        className="fixed top-[47px] left-1/2 -translate-x-1/2 z-50
        w-[92%] max-w-7xl h-[72px]
        rounded-[40px] bg-black/70 backdrop-blur-xl
        px-6 md:px-10
        flex items-center justify-between text-white"
      >
        {/* Logo */}
        <Link
          to="/"
              onClick={() => {
              setOpen(false);
              scrollToTop();
            }}
          className="flex items-center"
        >
          <img src={logo} alt="logo" className="h-10 md:h-16" />
        </Link>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden lg:flex items-center gap-10 font-medium">
          {/* Intro */}
          <li
            className="relative flex items-center gap-1 cursor-pointer text-[14px] text-[#FFFFFF] font-pro font-normal"
            onMouseEnter={() => setShowIntro(true)}
            onMouseLeave={() => setShowIntro(false)}
          >
            {t("nav.li1")}
            {showIntro ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

            <AnimatePresence>
              {showIntro && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-8 w-56
                    bg-black/70 text-white rounded-xl shadow-lg p-4"
                >
                  {introList.map((e) => (
                    <Link
                      key={e.id}
                      to={e.route}
                      onClick={scrollToTop}
                      className="block p-2 hover:bg-[rgba(255,255,255,0.08)] rounded-lg"
                    >
                      {e.type}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <Link to="/pricing" onClick={scrollToTop} className="flex items-center">
            {t("nav.li2")}
          </Link>

          <li className="cursor-pointer">{t("nav.li3")}</li>
        </ul>

        {/* ===== Right Side ===== */}
        <div className="hidden lg:flex items-center gap-4 ml-10">
          {!isAuthorized ? (
            <>
              <div className="relative rounded-full p-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#E91E63,#8B5CF6,#E91E63)] animate-[spin_6s_linear_infinite]" aria-hidden="true" />
                <Link
                  to="/signin"
                  className="relative block px-6 py-2 rounded-full bg-white text-black text-[16px] font-pro font-normal"
                >
                  {t("button.signin")}
                </Link>
              </div>
              <div className="relative rounded-full p-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#E91E63,#8B5CF6,#E91E63)] animate-[spin_6s_linear_infinite]" aria-hidden="true" />
                <Link
                  to="/signup"
                  className="relative block px-6 py-2 rounded-full bg-white text-black text-[16px] font-pro font-normal"
                >
                  {t("button.signup")}
                </Link>
              </div>
            </>
          ) : (
            <Link
              to="/dashboard"
              className="px-6 py-2 rounded-full border border-white text-[16px] font-pro font-normal"
            >
              {t("button.dashboard")}
            </Link>
          )}
          {/* lang select */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black"
            >
              <img
                src={current.flag}
                className="w-full h-[21px] rounded-full"
              />
              {current.label}
            </button>

            {openLang && (
              <div className="absolute top-full mt-2 bg-white text-[#000] rounded-xl shadow-lg w-full">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLanguage(l.code)}
                    className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100"
                  >
                    <img
                      src={l.flag}
                      className="w-full h-[21px] rounded-full"
                    />
                    {l.label.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ===== Mobile ===== */}
        <div className="flex lg:hidden items-center gap-2">
          <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
        </div>
      </nav>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={(e) => {
              // Close only when tapping the backdrop, not when interacting with menu items
              if (e.target === e.currentTarget) setOpen(false);
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 mt-20"
          >
            <ul className="space-y-6 text-lg font-medium">
              <li
                className="flex justify-between"
                onClick={() => setShowIntro(!showIntro)}
              >
                {t("nav.li1")}
                {showIntro ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </li>
              {showIntro && (
                <ul className="pl-4 space-y-3">
                  {introList.map((e) => (
                    <li key={e.id}>
                      <Link to={e.route} onClick={() => { setOpen(false); scrollToTop(); }}>{e.type}</Link>
                    </li>
                  ))}
                </ul>
              )}
              <li className="flex justify-between">
                <Link to="/pricing" onClick={() => { setOpen(false); scrollToTop(); }}>{t("nav.li2")}</Link>
              </li>
              <li className="flex justify-between">
                <Link to="/">{t("nav.li3")}</Link>
              </li>
            </ul>

            <div className="mt-8 space-y-3">
              {!isAuthorized ? (
                <>
                  <Link
                    to="/signin"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center px-4 py-3 rounded-full bg-black text-white text-[16px] font-pro font-normal"
                  >
                    {t("button.signin")}
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center px-4 py-3 rounded-full bg-[#0B1F44] text-white text-[16px] font-pro font-normal"
                  >
                    {t("button.signup")}
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-4 py-3 rounded-full border border-black text-[16px] font-pro font-normal text-black"
                >
                  {t("button.dashboard")}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Outlet />
    {(() => {
        switch (location.pathname) {
          case "/":
            return <Footer />;
          case "/terms":
          case "/privacy":
            return null;
          default:
            return <Footer />;
        }
      })()}
      {/* ===== Footer ===== */}
      {/* {location.pathname === "/" ? <FooterWithImg /> : <Footer />} */}
      {/* <Footer /> */}
    </>
  );
}

export default Navbar;
