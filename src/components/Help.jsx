
import { useState } from "react";
import { useTranslation } from "react-i18next";
import bg from "../assets/about/Back.png";
import bg1 from "../assets/about/BGroup.png"

function getYouTubeId(url) {
  // Extract YouTube video ID from various URL formats
  const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
}

function Help() {
  const { t } = useTranslation();
  const helpCard = t("helpCard", { returnObjects: true });
  const [modalOpen, setModalOpen] = useState(false);
  const [youtubeId, setYoutubeId] = useState(null);

  const handleCardClick = (e, link) => {
    const id = getYouTubeId(link);
    if (id) {
      e.preventDefault();
      setYoutubeId(id);
      setModalOpen(true);
    }
    // else, let it open in new tab
  };

  const closeModal = () => {
    setModalOpen(false);
    setYoutubeId(null);
  };

  return (
    <section className="max-w-[1320px] mx-auto px-4 py-10 sm:py-16  mt-20">
      <div className="h-auto my-6 rounded-lg mt-20 mb-16">
        <div className="w-full flex justify-center items-center">
          <p className="font-pro font-normal text-[#000000] text-[16px] md:text-[22px]  text-center">
            {t("descHelp")}
          </p>
          {/* Explore our chatbot menu and learn how to use it by watching the video guide. */}
        </div>
        <div className="w-full flex justify-center items-center text-center">
          <p className="font-pro font-semibold text-[#000000] text-[40px] md:text-[65px] ">
            {t("titleHelp")}
          </p>
        </div>
      </div>
      <div className="w-full bg-[#000000] flex justify-center items-center h-[400px] rounded-b-[25.04px] relative">
        <div className="absolute inset-0 w-auto max-h-[400px] top-0 left-0">
          <svg
            width="1305"
            height="401"
            viewBox="0 0 1305 401"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-object-cover"
          >
            <g filter="url(#filter0_f_3349_10142)">
              <ellipse
                cx="643.5"
                cy="504.5"
                rx="474.5"
                ry="246.5"
                fill="url(#paint0_linear_3349_10142)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_3349_10142"
                x="-131"
                y="-42"
                width="1549"
                height="1093"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="150"
                  result="effect1_foregroundBlur_3349_10142"
                />
              </filter>
              <linearGradient
                id="paint0_linear_3349_10142"
                x1="169"
                y1="503.923"
                x2="1027.68"
                y2="503.923"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#6000FF" />
                <stop offset="0.764423" stop-color="#1900FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <a
          href="https://www.youtube.com/@chatbotmn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ChatbotMN YouTube"
        >
          <img
            src={bg1}
            alt="help"
            className="object-cover rounded-t-[10px] w-full h-full md:w-[60%] md:h-[90%] bottom-0 absolute left-0 md:left-1/2 md:translate-x-[-50%]"
            style={{
              objectPosition: 'center',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[28px] mt-20">
        {helpCard.map((e, i) => {
          const isYoutube = getYouTubeId(e.link);
          return (
            <a
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="rounded-xl sm:rounded-[10px] border border-[#F4F7FE] hover:shadow-lg transition"
              onClick={
                isYoutube ? (evt) => handleCardClick(evt, e.link) : undefined
              }
              style={{ cursor: isYoutube ? "pointer" : undefined }}
            >
              <div className=" relative h-30 sm:h-36 rounded-t-lg sm:rounded-t-xl bg-indigo-300/70 mb-3 sm:mb-1 overflow-hidden">
                <img
                  loading="lazy"
                  src={bg}
                  alt={e?.title || "feature"}
                  className="w-full h-full object-object-cover"
                />
                <p className="absolute inset-0 flex justify-center items-center text-center leading-[30px] text-white font-pro font-semibold text-[25px] uppercase px-2 py-1">
                  {e.title}
                </p>
                <svg
                  width="109"
                  height="109"
                  viewBox="0 0 109 109"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 m-auto w-12 h-12 opacity-100"
                >
                  <circle
                    cx="54.4982"
                    cy="54.5001"
                    r="54.5"
                    transform="rotate(0.500767 54.4982 54.5001)"
                    fill="white"
                    fillOpacity="0.65"
                  />
                  <path
                    d="M77.0266 51.2329C79.6797 52.7958 79.6461 56.6447 76.966 58.1609L44.5545 76.4979C41.8745 78.0141 38.5581 76.0605 38.585 72.9815L38.9105 35.7438C38.9374 32.6647 42.2874 30.7694 44.9405 32.3323L77.0266 51.2329Z"
                    fill="#E91E63"
                  />
                </svg>
              </div>
              <p className="text-xs md:text-[10px] font-pro font-normal text-[#000000] leading-relaxed px-4 py-2">
                {e.desc} #{i + 1}
              </p>
              <p className="font-pro font-semibold text-sm md:text-[20px] mb-1 sm:mb-2 px-4 pb-2 text-[#000000]">
                {e.title}
              </p>
            </a>
          );
        })}
      </div>

      {/* Modal for YouTube video */}
      {modalOpen && youtubeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-2 sm:p-6 relative max-w-[90vw] max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black text-[25px] border rounded-full bg-gray-50 font-bold px-2 hover:text-red-500"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-[80vw] h-[45vw] max-w-[800px] max-h-[450px]"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default Help;
