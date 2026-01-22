import { useState } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import fetchWithTimeout from "../utils/fetchApi";
import SwiperCustom from "./SwiperCustom";
import { useTranslation } from "react-i18next";
import mail from "../assets/log-mail.svg";
import key from "../assets/key.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "../assets/logo.png";

export default function LoginPage() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [alert, setAlert] = useState({
    state: false,
    message: "",
    bg: "",
    text: "",
  });

  const api = import.meta.env.VITE_API_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    try {
      console.log("🚀 ~ login ~ formData:", formData)
      const result = await fetchWithTimeout("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("🚀 ~ login ~ result:", result)
      if (result.result.code === 1000) {
        setAlert((prev) => ({
          ...prev,
          state: true,
          message: "Амжилттай нэвтэрлээ!",
          bg: "bg-green-100 ",
          text: "text-green-700",
        }));

        const {
          client_id = "",
          redirect_uri = "",
          response_type = "",
          scope = "",
          state = "",
        } = queryString.parse(window.location.search) ?? {};

        console.log(
          "params:",
          client_id,
          redirect_uri,
          response_type,
          scope,
          state
        );
        if (redirect_uri) {
          window.location.erplace(
            `/api/auth/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&state=${state}`
          );
        } else {
          window.location.href = "/dashboard/";
          window.location.href = "/dashboard/";
        }

        localStorage.removeItem("newUser");
      } else
        setAlert((prev) => ({
          ...prev,
          state: true,
          message: result.result.message,
          bg: "bg-red-100",
          text: "text-red-700",
        }));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full bg-white flex items-center justify-center">
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left side */}
        <div className="flex justify-center items-center p-6 md:p-10">
          <div className="w-full max-w-[480px]">
            {/* Logo */}
            <div className="flex items-center justify-center mb-10">
              <a href="/">
                <img
                  src={logo}
                  className="w-[150px] md:w-[180px] xl:w-[200px]"
                  alt="logo"
                />
              </a>
            </div>

            {/* Title + error */}
            <div className="flex items-start justify-between w-full">
              <h2 className="text-xl md:text-2xl font-semibold">
                {t("button.signin")} 👋
              </h2>

             {alert?.state && <div className="hidden md:flex w-[220px] h-[60px] items-center gap-3 rounded-[6px] bg-[#000000] p-4 shadow-md text-[10px]">
                <span className=" rounded-full p-1.5">
                  <svg width="25" height="25" viewBox="0 0 35 35" fill="none">
                    <path
                      d="M17.5 17.5V10.9375M17.5 22.3642V22.4219M30.625 17.5C30.625 24.7487 24.7487 30.625 17.5 30.625C10.2513 30.625 4.375 24.7487 4.375 17.5C4.375 10.2513 10.2513 4.375 17.5 4.375C24.7487 4.375 30.625 10.2513 30.625 17.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-white text-xs">{alert?.message}</p>
              </div>}
            </div>
            

            {/* Form */}
            <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="text-sm text-[#a3aed0] block mb-1">
                  {t("input.email")}
                </label>
                 <div className="border rounded-xl flex items-center px-3 focus-within:ring-2 focus-within:ring-[#E91E63]">
                  <img src={mail} alt="logo" className="h-5 w-5 flex-shrink-0" />
                  
                <input
                  type="email"
                  value={formData?.email}
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder={t("input.email")}
                  required
                    // className="w-full px-4 py-3  outline-none border-none focus:ring-0"
                    className="w-full px-3 py-3 text-base outline-none border-none focus:ring-0"
                  />
                  </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-[#a3aed0] block mb-1">
                  {t("input.pwd")}
                </label>


                <div className="border relative rounded-xl flex items-center px-3 focus-within:ring-2 focus-within:ring-[#E91E63]">
                  <img src={key} alt="logo" className="h-5 w-5 flex-shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData?.password}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    placeholder={t("input.pwd")}
                    required
                    minLength={8}
                    // className="w-full  px-4 py-3 pr-12 outline-none border-none focus:ring-0"
                    className="flex-1 px-3 py-3 pr-10 text-base outline-none border-none focus:ring-0"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    // className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 flex-shrink-0"
                    aria-label={showPassword ? "Нууц үг нуух" : "Нууц үг харах"}
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

                <p className="mt-1 text-xs text-[#FF0004]">
                  {t("input.label9")}
                </p>
              </div>

              {/* Remember + Forgot */}
              <div className="flex justify-between items-center text-sm text-[#a3aed0]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  {t("input.remember")}
                </label>

                <Link to="/restore" className="font-semibold hover:underline">
                  {t("input.forgot")}
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#E91E63] text-white py-3 rounded-xl hover:bg-pink-700 transition"
              >
                {t("button.signin")}
              </button>

              {/* Signup */}
              <div className="text-center text-sm text-[#a3aed0] mt-2 space-x-2">
                {t("input.signupif")}
                <Link
                  to="/signup"
                  className="text-[#E91E63] hover:text-customBlue ml-2"
                >
                  {t("input.signupifLink")}
                </Link>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 justify-center mt-4">
                <div className="h-px bg-gray-300 w-20" />
                <span className="text-[#a3aed0] text-sm">{t("input.or")}</span>
                <div className="h-px bg-gray-300 w-20" />
              </div>

              {/* Social login */}
              <div className="flex justify-center gap-6 mt-4 text-2xl">
                <a href={`${api}/facebook/connect`} aria-label="Facebook login">
                  <i className="fa fa-facebook text-blue-600 cursor-pointer" />
                </a>
                <a href={`${api}/google/connect`} aria-label="Google login">
                  <i className="fa fa-google text-red-500 cursor-pointer" />
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Right side */}
        <SwiperCustom />
      </div>
    </div>
  );
}
