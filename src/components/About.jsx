import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="lg:container">
        <h2 className="p-10 lg:p-20 font-extrabold lg:text-[24px]">
          {t("about.title")}
        </h2>
        <div className="space-y-6 px-6 lg:px-96 text-justify font-medium text-black">
          <p className="normal-case">{t("about.p1")}</p>
          <p className="normal-case">{t("about.p2")}</p>
        </div>
      </div>
      <div className="bg-[#08315f] mt-10">
        <div className="lg:container hidden md:flex justify-evenly text-white p-10 lg:px-72">
          <div className="flex-1">
            <h2 className="text-[#88e6e6] font-bold pb-6">
              {t("about.row1Title")}
            </h2>
            <p className="pl-6 normal-case">{t("about.row1")}</p>
          </div>
          <div className="flex-1">
            <h2 className="text-[#88e6e6] font-bold pb-6">
              {t("about.row2Title")}
            </h2>
            <ol className="list-disc pl-10 lg:pl-28 normal-case">
              {t("about.row2", { returnObjects: true }).map((e, i) => <li key={i}>{e}</li>)}
            </ol>
          </div>
          <div className="flex-1">
            <h2 className="text-[#88e6e6] font-bold pb-6 ">
              {t("about.row3Title")}
            </h2>
            <p className="px-4 text-[12px] normal-case">{t("about.row3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
