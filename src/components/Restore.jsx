import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import Alert from "./Alert";
import fetchWithTimeout from "../utils/fetchApi";

function Restore() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ email: "" });
  const [alert, setAlert] = useState({
    state: false,
    message: "",
    bg: "",
    text: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    restore();
  };
  const restore = async () => {
    try {
      const result = await fetchWithTimeout("/auth/restore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'X-REQUESTED-WITH': (window['__INITIAL_STATE__'] || {})._csrf || ''
        },
        body: JSON.stringify(formData),
      });

      if (result.result.code === 1000)
        setAlert((prev) => ({
          ...prev,
          state: true,
          message: result.result.message,
          bg: "bg-green-100 ",
          text: "text-green-700",
        }));
      else
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
    <div className="md:container mx-auto px-2">
      <div className="2xl:pl-[40px] 2xl:mt-3">
        <Link to="/">
          <img
            src={logo}
            className="w-[180px] md:w-[200px] xl:w-[230px]"
            alt=""
          />
        </Link>
      </div>
      <div className="w-full h-[calc(100vh-64.5px)] md:h-[calc(100vh-103.1px)] lg:h-[calc(70vh-103.1px)] flex flex-col justify-center items-center">
        <Alert
          message={alert.message}
          state={alert.state}
          bg={alert.bg}
          text={alert.text}
        />
        <h1 className="text-[32px] font-pro font-semibold text-[#031555] text-center p-4 ">
          {t("input.forgotTitle")}
        </h1>
        <form
          className="sign space-y-4 w-full md:w-[80%] lg:w-[33%] flex flex-col"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            placeholder={t("input.email")}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <button
            className="bg-[#E91E63] h-[56px] md:w-[60%] lg:w-full text-white rounded-[20px] text-[15px] font-pro font-medium hover:bg-[#d81b60] transition"
            type="submit"
          >
            {t("input.forgotButton")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Restore;
