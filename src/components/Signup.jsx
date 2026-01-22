import { useState } from "react";
import SwiperCustom from "./SwiperCustom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";
import user from "../assets/human.svg";
import key from "../assets/key.svg";
import call from "../assets/call.svg";
import logEmail from "../assets/log-mail.svg";

export default function Signup() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexCheck = (email) => {
    if (!email) return false;
    else return emailRegex.test(email);
  };

  const [warning, setWarning] = useState({
    email: {
      isActive: false,
    },
    password: {
      isActive: false,
    },
    passwordConfirm: {
      isActive: false,
    },
    lastname: {
      isActive: false,
    },
    firstname: {
      isActive: false,
    },
    phone: {
      isActive: false,
    },
  });

  const WarningComment = ({ name }) => {
    const labels = {
      firstname: t("input.label4"),
      lastname: t("input.label3"),
      email: t("input.label1"),
      phone: t("input.label5"),
      password: t("input.label2"),
      passwordConfirm: t("input.label6"),
      terms: t("input.term"),
      privacy: t("input.checkPrivacy"),
    };

    const isActive = warning[name]?.isActive;

    return isActive ? (
      <label className="text-[#EE1D52]">{labels[name]}</label>
    ) : null;
  };

  const handleChange = (e) => {
    const { name, type, value, checked} = e.target;
    console.info("name" ,name, 'value',value );
    setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
    setWarning((prev) => ({
      ...prev,
      [name]: { isActive: value === "" },
    }));
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    privacy: false,
    terms: false,
  });

  const register = async () => {
    try {
      console.info("sssssssssssssssssssssss", formData);
      // const result = await fetchWithTimeout("/auth/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (result.result.code === 1000) {
      //   switch (localStorage.getItem("newUser")) {
      //     case "1":
      //       //Ecommerce
      //       window.location.href =
      //         "https://www.messenger.com/t/105586168752112";
      //       break;
      //     case "2":
      //       //Health
      //       window.location.href =
      //         "https://www.messenger.com/t/104653705897272";
      //       break;
      //     case "3":
      //       //Restaurant
      //       window.location.href =
      //         "https://www.messenger.com/t/115249621509971";
      //       break;
      //     case "4":
      //       //Real state
      //       window.location.href =
      //         "https://www.messenger.com/t/103318735627287";
      //       break;
      //     case "5":
      //       //Education
      //       window.location.href =
      //         "https://www.messenger.com/t/104721671801417";
      //       break;
      //     default:
      //       navigate("/signin");
      //       break;
      //   }
      // } else
      //   setAlert((prev) => ({
      //     ...prev,
      //     state: true,
      //     message: result.result.message,
      //     bg: "bg-red-100",
      //     text: "text-red-700",
      //   }));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWarning = {
      email: { isActive: false },
      firstname: { isActive: false },
      lastname: { isActive: false },
      phone: { isActive: false },
      password: { isActive: false },
      passwordConfirm: { isActive: false },
      privacy: { isActive: false },
      terms: { isActive: false },
    };
console.info("formData==>", formData);
    if (!regexCheck(formData.email)) newWarning.email.isActive = true;
    if (!formData.firstname) newWarning.firstname.isActive = true;
    if (!formData.lastname) newWarning.lastname.isActive = true;
    if (!formData.phone) newWarning.phone.isActive = true;
    if (!formData.password) newWarning.password.isActive = true;
    if (formData.passwordConfirm !== formData.password)
      newWarning.passwordConfirm.isActive = true;

    if (!formData.privacy) newWarning.privacy.isActive = true;
    if (!formData.terms) newWarning.terms.isActive = true;

    setWarning(newWarning);

    // Хэрвээ ямар нэг алдаа байвал register() дуудахгүй
    const hasError = Object.values(newWarning).some((w) => w.isActive);
    if (hasError) return;

    // Бүх шалгалт амжилттай бол register дуудах
    register();
  };

  return (
    <div className="w-full bg-white flex items-center justify-center">
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left side */}
        <div className="flex justify-center items-center p-6 md:p-10">
          <div className="w-full max-w-[480px]">
            <div className="flex items-center justify-start mb-10">
              <a href="/">
                <img src={logo} alt="logo" className="w-[160px]" />
              </a>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold mb-8">
              {t("button.signup")}
            </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-gray-600">
                    {t("input.fName")}
                  </label>
                  <div className="border rounded-xl flex items-center px-3 focus-within:ring-2 focus-within:ring-[#E91E63]">
                    <img
                      src={user}
                      alt="logo"
                      className="h-5 w-5 flex-shrink-0"
                    />
                    <input
                      className="w-full px-3 py-3 text-base outline-none border-none focus:ring-0"
                      placeholder={t("input.fName")}
                      name="firstname"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                  <WarningComment name="firstname" />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    {t("input.lName")}
                  </label>
                  <div className="border rounded-xl flex items-center px-3 focus-within:ring-2 focus-within:ring-[#E91E63]">
                    <img
                      src={user}
                      alt="logo"
                      className="h-5 w-5 flex-shrink-0"
                    />
                    <input
                      className="w-full px-3 py-3 text-base outline-none border-none focus:ring-0"
                      placeholder={t("input.lName")}
                      name="lastname"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                  <WarningComment name="lastname" />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    {t("input.email")}
                  </label>
                  <div className="border rounded-xl flex items-center px-3 focus-within:ring-2 focus-within:ring-[#E91E63]">
                    <img
                      src={logEmail}
                      alt="logo"
                      className="h-5 w-5 flex-shrink-0"
                    />
                    <input
                      name="email"
                      className=" w-full px-3 py-3 text-base outline-none border-none focus:ring-0"
                      placeholder={t("input.email")}
                      onChange={handleChange}
                    />
                  </div>
                  <WarningComment name="email" />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    {t("input.phone")}
                  </label>
                  <div className="border rounded-xl flex items-center px-3 focus-within:ring-2 focus-within:ring-[#E91E63]">
                    <img
                      src={call}
                      alt="logo"
                      className="h-5 w-5 flex-shrink-0"
                    />
                    <input
                      name="phone"
                      className="w-full px-3 py-3 text-base outline-none border-none focus:ring-0"
                      placeholder={t("input.phone")}
                      type="tel"
                      inputMode="numeric"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, "");
                      }}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      maxLength={8}
                    />
                  </div>
                  <WarningComment name="phone" />
                </div>
              </div>

              {/* Password */}
              <div className="mt-5">
                <label className="text-sm text-gray-600">
                  {t("input.pwd")}
                </label>
                <div className="relative mt-1 border rounded-xl flex items-center px-4 focus-within:ring-2 focus-within:ring-[#E91E63]">
                  <img src={key} alt="logo" className="h-5 w-5" />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 pr-12  outline-none border-none focus:ring-0"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                      >
                        <path
                          d="M18.6992 17.875L4.94922 4.125M9.34922 9.57144C9.00692 9.94882 8.79922 10.4445 8.79922 10.9874C8.79922 12.1697 9.78419 13.1282 10.9992 13.1282C11.5594 13.1282 12.0707 12.9244 12.4591 12.5889M18.7348 13.1282C19.4922 11.9944 19.7992 11.0698 19.7992 11.0698C19.7992 11.0698 17.7967 4.675 10.9992 4.675C10.6176 4.675 10.2511 4.69516 9.89922 4.7332M15.9492 15.9037C14.6866 16.7091 13.0611 17.2787 10.9992 17.245C4.2864 17.1352 2.19922 11.0698 2.19922 11.0698C2.19922 11.0698 3.16892 7.97324 6.04922 6.08971"
                          stroke="#9794AA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <WarningComment name="password" />
              </div>

              {/* Confirm Password */}
              <div className="mt-4">
                <label className="text-sm text-gray-600">
                  {t("input.pwdCheck")}
                </label>
                <div className="relative mt-1 border rounded-xl flex items-center px-4 focus-within:ring-2 focus-within:ring-[#E91E63]">
                  <img src={key} alt="logo" className="h-5 w-5" />
                  <input
                    name="passwordConfirm"
                    type={showPassword2 ? "text" : "password"}
                    className="w-full px-4 py-3 pr-12   outline-none border-none focus:ring-0"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword2((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword2 ? (
                      // Eye icon open
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      // Eye icon closed
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                      >
                        <path
                          d="M18.6992 17.875L4.94922 4.125M9.34922 9.57144C9.00692 9.94882 8.79922 10.4445 8.79922 10.9874C8.79922 12.1697 9.78419 13.1282 10.9992 13.1282C11.5594 13.1282 12.0707 12.9244 12.4591 12.5889M18.7348 13.1282C19.4922 11.9944 19.7992 11.0698 19.7992 11.0698C19.7992 11.0698 17.7967 4.675 10.9992 4.675C10.6176 4.675 10.2511 4.69516 9.89922 4.7332M15.9492 15.9037C14.6866 16.7091 13.0611 17.2787 10.9992 17.245C4.2864 17.1352 2.19922 11.0698 2.19922 11.0698C2.19922 11.0698 3.16892 7.97324 6.04922 6.08971"
                          stroke="#9794AA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <WarningComment name="passwordConfirm" />
              </div>

              {/* Checkboxes */}
              <div className="mt-5 flex flex-col gap-2 text-sm text-gray-600">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <HashLink smooth to="/terms" className="underline">
                    {t("input.label8")}
                  </HashLink>
                </label>
                <WarningComment name="terms" />
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <HashLink smooth to="/privacy" className="underline">
                    {t("input.privacy")}
                  </HashLink>
                </label>
                <WarningComment name="privacy" />
              </div>

              {/* Register Button */}
              <button className="mt-6 w-full bg-[#e91e63] text-white py-3 rounded-xl">
                {t("button.signup")}
              </button>
            </form>
            {/* Login redirect */}
            <div className="text-center mt-4 text-sm text-gray-600">
              {t("input.signinif")}
              <Link
                to="/signin"
                className="text-[12px] font-bold text-center text-[#e91e63] cursor-pointer ml-2"
              >
                {t("button.signin")}
              </Link>
            </div>
          </div>
        </div>
        {/* Right side */}
        <SwiperCustom />
      </div>
    </div>
  );
}
