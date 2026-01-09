import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Autoplay, Pagination } from "swiper";

function Tutorial() {
  const { t } = useTranslation();
  const location = useLocation();
  const [alert, setAlert] = useState({
    isActive: false,
    message: "",
  });

  const [warning, setWarning] = useState({
    email: {
      isActive: false,
      message: "",
    },
    org: {
      isActive: false,
      message: "",
    },
    date: {
      isActive: false,
      message: "",
    },
    name: {
      isActive: false,
      message: "",
    },
    phone: {
      isActive: false,
      message: "",
    },
  });

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    org: "",
    date: "",
    phone: "",
  });

  const param = location.pathname.split("/").at(-1);

  let cards = t("tutorial.cards", { returnObjects: true });
  const calendarId =
    "554814a5756e115af3cb9f2846d1fd53f1a36a96a9e6d7e4bf85e68a8980157d@group.calendar.google.com";

  const found = cards.find((card) => card.id === +param);

  const handleForm = async (e) => {
    e.preventDefault();

    if (formData.email === "") {
      setWarning((prev) => ({
        ...prev,
        email: { isActive: true, message: "Имэйл бөглөнө үү" },
      }));
    }
    if (formData.name === "") {
      setWarning((prev) => ({
        ...prev,
        name: { isActive: true, message: "Нэр бөглөнө үү" },
      }));
    }
    if (formData.org === "") {
      setWarning((prev) => ({
        ...prev,
        org: { isActive: true, message: "Байгууллагын нэр бөглөнө үү" },
      }));
    }
    if (formData.phone === "") {
      setWarning((prev) => ({
        ...prev,
        phone: { isActive: true, message: "Утасны дугаар бөглөнө үү" },
      }));
    }
    if (formData.date === "") {
      setWarning((prev) => ({
        ...prev,
        date: {
          isActive: true,
          message: "Өдөр сонгоно уу",
        },
      }));
    }
    if (
      new Date(formData.date).getDay() === 0 ||
      new Date(formData.date).getDay() === 6
    ) {
      setWarning((prev) => ({
        ...prev,
        date: { isActive: true, message: "Ажлын өдөр сонгоно уу" },
      }));
    }

    const isValid = Object.values(warning).every((value) => !value.isActive);

    if (isValid) {
      let result = await fetch(
        `https://chatbot.mn/api/cuticul/calendar/${calendarId}/event`,
        {
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            summary: "Cургалт",
            description: `${formData.name}, ${formData.org}, ${formData.email}, ${formData.phone}`,
            start: {
              dateTime: formData.date + "T10:00:00+08:00",
            },
            end: {
              dateTime: formData.date + "T11:00:00+08:00",
            },
          }),
          method: "POST",
        }
      );

      const data = await result.json();

      if (result.status === 200)
        setAlert({
          isActive: true,
          message:
            data.data === "Уучлаарай таны захиалсан цаг захиалгатай байна."
              ? "Уучлаарай таны захиалсан цаг захиалгатай байна."
              : "Амжилттай цаг захиалагдлаа.",
        });
    }
  };

  const handleChange = (e) => {
    e.target.value === "" ||
    new Date(e.target.value).getDay() === 0 ||
    new Date(e.target.value).getDay() === 6
      ? setWarning((prev) => ({ ...prev, [e.target.name]: { isActive: true } }))
      : setWarning((prev) => ({
          ...prev,
          [e.target.name]: { isActive: false },
        }));
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {found ? (
        <div className="lg:container tracking-tight">
          <div className="md:flex md:justify-center lg:mt-12 xl:px-48">
            <div className="flex flex-col px-6 normal-case md:w-1/2 ">
              <div className="flex flex-col items-center font-bold my-6 text-[16px]">
                <h4>
                  {t("tutorial.h4")}
                  {found.id}
                </h4>
                <h4>{found.title}</h4>
              </div>
              <p className="whitespace-pre-line text-black">
                {found.description}
              </p>
            </div>
            <iframe
              // width="1280"
              // height="720"
              src={found.url}
              title={found.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full px-6 mt-6 md:w-1/2 lg:h-[300px] self-center"
            ></iframe>
          </div>

          <h2 className="text-center mt-12 normal-case font-bold">
            {t("tutorial.templateTitle")}
          </h2>
          <div className="px-6 xl:px-52">
            {/* <Swiper
              spaceBetween={5}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[EffectFade, Autoplay, Pagination]}
              pagination={{ clickable: true }}
              className="tuts"
            >
              {templates.map((template) => (
                <SwiperSlide key={template.id} className="px-2">
                  <div
                    key={template.id}
                    className="border rounded-lg cursor-pointer mt-12 flex"
                    onClick={() => {
                      navigate("/signup");
                      localStorage.setItem("newUser", template.id);
                    }}
                  >
                    <div className="w-full xl:w-1/2 relative">
                      <div className="overflow-hidden">
                        <img
                          src={template.img}
                          alt="img"
                          className="-translate-x-3"
                        />
                      </div>
                      <h4 className="absolute xs:top-6 top-8 bg-customBlue text-white -left-[1px] rounded-r-full w-fit xs:py-0.5 py-2 px-6 xs:text-[14px]">
                        {template.title}
                      </h4>
                      <button className="absolute bottom-5 p-0 border rounded-full bg-customBlue text-white xs:px-3 xl:hidden py-1 px-5 left-[50%] -translate-x-1/2">
                        {template.button}
                      </button>
                    </div>
                    <div className="hidden xl:flex flex-col justify-center w-1/2 relative">
                      <p className="normal-case font-bold text-[14px] pr-4">
                        {template.desc}
                      </p>
                      <ul className="mt-4 space-y-0.5">
                        {template.list.map((l, i) => (
                          <li
                            key={i}
                            className="normal-case pr-4 text-black tracking-tight list-disc"
                          >
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>
          {localStorage.getItem("i18nextLng") === "mn" && (
            <>
              <h2 className="text-center mt-3 normal-case font-bold px-6">
                {t("tutorial.request")}
              </h2>
              <div className="flex flex-col md:flex-row justify-center xl:px-48">
                <div className="md:w-1/2  px-6">
                  {/* <img src={tutorial} alt="img" className="rounded-lg mt-4" /> */}
                  <p className="normal-case py-2 text-black">
                    {t("tutorial.paragraph")}
                  </p>
                </div>
                <form
                  className="w-full md:w-1/2  py-2 px-6 normal-case space-y-1"
                  onSubmit={(e) => handleForm(e)}
                >
                  <div>{t("tutorial.formName")}</div>
                  <input
                    className="request"
                    name="name"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  {warning.name.isActive && (
                    <label>{warning.name.message}</label>
                  )}
                  <div>{t("tutorial.formOrg")}</div>
                  <input
                    className="request"
                    name="org"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  {warning.org.isActive && <label>{warning.org.message}</label>}
                  <div>{t("tutorial.formDate")}</div>
                  <input
                    className="request"
                    type="date"
                    name="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    onChange={(e) => handleChange(e)}
                  ></input>
                  {warning.date.isActive && (
                    <label>{warning.date.message}</label>
                  )}
                  <div>{t("tutorial.formEmail")}</div>
                  <input
                    className="request"
                    name="phone"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  {warning.phone.isActive && (
                    <label>{warning.phone.message}</label>
                  )}
                  <div>{t("tutorial.formPhone")}</div>
                  <input
                    className="request"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  {warning.email.isActive && (
                    <label>{warning.email.message}</label>
                  )}
                  {alert.isActive && (
                    <div
                      className={`mt-4 ${
                        alert.message ===
                        "Уучлаарай таны захиалсан цаг захиалгатай байна."
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {alert.message}
                    </div>
                  )}
                  <div className="flex justify-center">
                    <button className="border rounded-lg py-2 px-6 w-fit mt-4 text-white bg-customBlue">
                      {t("tutorial.formSubmit")}
                    </button>
                  </div>
                </form>
              </div>
              <div className="normal-case flex justify-center mt-4 xl:px-48">
                <div className="w-full px-6">
                  <div className="text-black">
                    <span className="font-bold text-customBlue">
                      {t("tutorial.phoneLabel")}
                    </span>
                    {t("tutorial.phone")}
                  </div>
                  <br></br>
                  <p className="text-black">
                    <span className="font-bold text-customBlue">
                      {t("tutorial.addressLabel")}
                    </span>
                    {t("tutorial.address")}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="text-[20px] lg:text-[24px] font-black text-center mt-20 py-10">
          {t("notFound")}
        </div>
      )}
    </>
  );
}

export default Tutorial;
