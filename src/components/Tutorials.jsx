import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
;

function Tutorials() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  let cards = t("tutorial.cards", { returnObjects: true });

  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(cards);
  }, [i18n.language]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    filterData(value);
  };

  const filterData = (searchQuery) => {
    const filteredResults = cards.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <div className="lg:container tracking-tight">
        <h2 className="p-10 lg:p-20 font-extrabold lg:text-[24px] relative">
          {t("tutorial.h2")}
          {/* <img
            src={star}
            className="w-[31px] h-[38px] xl:absolute xl:top-[20%] xl:left-[30%] hidden xl:block"
            alt="img"
          />
          <img
            src={circle}
            className="xl:absolute xl:top-[60%] xl:right-[64%] hidden xl:block"
            alt="img"
          />
          <img
            src={star}
            className="w-[18px] h-[25px] xl:absolute xl:top-[36%] xl:right-[32%] hidden xl:block"
            alt="img"
          />
          <img
            src={plus}
            className="xl:absolute xl:top-[67%] xl:left-[62%] hidden xl:block"
            alt="img"
          /> */}
        </h2>
        <h3 className="font-extrabold lg:text-[24px] text-center px-2">
          {t("tutorial.h3")}
        </h3>
        <div className="flex justify-center">
          <input
            className="border rounded-lg m-6 p-2 border-slate-400 focus:outline-none w-[calc(85%-16px)] lg:w-[50%]"
            value={searchInput}
            onChange={(e) => handleChange(e)}
            placeholder={t("tutorial.input")}
          ></input>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-y-6 md:gap-x-6 md:grid-cols-3 lg:grid-cols-4 p-2 text-justify font-medium text-black normal-case w-[85%] md:w-[90%] lg:w-[70%]">
            {filteredData.map((card) => (
              <div
                className="border rounded-lg hover:-translate-y-1 transition ease-in-out duration-200 cursor-pointer text-customBlue shadow-md flex flex-col justify-between"
                key={card.id}
                onClick={() => navigate(`/tutorials/${card.id}`)}
              >
                <h3 className="text-[18px] font-bold text-center py-16 px-2 border-b border-t-[6px] border-t-customBlue rounded-t-md relative">
                  {card.title}
                  <i className="absolute bg-customBlue w-12 h-12 flex justify-center items-center rounded-b-md right-2 -top-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      className="icon"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="#fff"
                        d="M841 438.9v402.2H182.7V182.9H585v-73.2H109.6v804.6h804.6V438.9z"
                      />
                      <path
                        fill="#fff"
                        d="m522.604 449.558 329.155-329.155 51.689 51.69-329.155 329.154zM255.9 548.6h219.4v73.1H255.9zm0 146.3h512V768h-512z"
                      />
                    </svg>
                  </i>
                </h3>
                <p className="text-[12px] px-5 my-2 line-clamp-3 text-start text-black">
                  {card.description}
                </p>
                <button className="border rounded-lg mx-4 mb-4 bg-customBlue text-white hover:scale-100">
                  {t("tutorial.button")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorials;
