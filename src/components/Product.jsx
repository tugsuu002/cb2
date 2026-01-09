import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, EffectFade, Autoplay, Grid } from "swiper";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

function Product() {
  const { t, i18n } = useTranslation();

  const productRef = useRef(null);
  const productSlideRef = useRef(null);

  useEffect(() => {
    productRef.current.swiper.pagination.render();
    productRef.current.swiper.pagination.bullets[
      productRef.current.swiper.activeIndex
    ].className = "swiper-pagination-bullet swiper-pagination-bullet-active";
    productSlideRef.current.swiper.pagination.render();
    productSlideRef.current.swiper.pagination.bullets[
      productSlideRef.current.swiper.activeIndex
    ].className = "swiper-pagination-bullet swiper-pagination-bullet-active";
  }, [i18n.language]);

  // console.log("productRef", productRef.current.swiper);

  return (
    <>
      <div className="lg:container" id="top">
        <div className="p-6 md:mt-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[60%]">
              <div className="relative">
                <h2 className="font-black text-center md:block py-2">
                  {t("mainFeature.type")}
                </h2>
                <img
                  src={star}
                  className="w-[18px] h-[25px] xl:absolute xl:top-0 xl:left-[30%] hidden xl:block"
                  alt="img"
                />
                <img
                  src={star}
                  className="w-[18px] h-[25px] xl:absolute xl:top-[30%] xl:right-[30%] hidden xl:block"
                  alt="img"
                />
                <img
                  src={circle}
                  className="w-[12px] h-[12px] xl:absolute xl:top-[80%] xl:right-[35%] hidden xl:block"
                  alt="img"
                />
              </div>
              <p className="xl:py-20 xl:px-48 xl:text-justify normal-case text-black font-medium tracking-tighter">
                {t("mainFeature.description")}
              </p>
            </div>
            <div className="mt-6 md:mt-0 p-6">
              <h3 className="font-bold">{t("subFeature")}</h3>
              <div>
                <ul>
                  {t("subDesc", { returnObjects: true }).map((e, i) => (
                    <li
                      className="list-disc normal-case text-black font-medium tracking-tight"
                      key={i}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex lg:mt-20" id="t">
          <div className="w-full md:w-[60%] p-6">
            <h2 className="font-black py-6">{t("productHeader")}</h2>
            {/* <Swiper
              spaceBetween={5}
              modules={[Pagination, EffectFade, Autoplay]}
              pagination={{
                el: ".elements",
                clickable: true,
                renderBullet: function (index, className) {
                  return (
                    '<span class="' +
                    className +
                    '">' +
                    t("products", { returnObjects: true })[index].type +
                    "</span>"
                  );
                },
              }}
              initialSlide={0}
              ref={productRef}
            >
              <div className="elements hidden lg:flex"></div>
              {t("products", { returnObjects: true }).map((e) => {
                return (
                  <SwiperSlide key={e.id}>
                    <div className="p-6 lg:px-16 xl:px-24 rounded-lg space-y-2 h-full lg:mt-20">
                      <h3 className="md:text-[18px] font-bold">{e.type}</h3>
                      <div className="flex flex-col space-y-2">
                        <p className="text-[14px] normal-case text-black font-medium">
                          {e.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper> */}
          </div>
          <motion.div
            className="w-1/2 hidden md:flex md:justify-center xl:justify-start relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src={bluebg}
              className="w-full h-16 bg-customBlue absolute bottom-[55%] -right-[15%] rotate-[-30deg] -z-20 hidden xl:block"
              alt=""
              loading="lazy"
            />
            <img
              src={shop}
              className="absolute -z-10 rounded-2xl -top-[10%] left-[5%] scale-[0.85] hidden xl:block"
              alt=""
              loading="lazy"
            />
            <img
              src={phoneshop}
              className="w-[200px] h-[400px] mt-16 hidden md:block"
              alt=""
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
      <div className="bg-[#08315f] hidden md:block lg:mt-10">
        <div className="lg:container text-white flex items-center p-6 text-[12px]">
          <div className="px-18">
            <h2 className="xl:text-[20px] font-black text-[#88e6e6] xl:px-24 xl:py-6">
              {t("featureCTA")}
            </h2>
          </div>
          <div className="flex">
            {t("featureCTA2", { returnObjects: true }).map((e, i) => {
              return (
                <div className="px-6 space-y-4" key={i}>
                  <h3 className="text-center font-bold text-[#88e6e6] text-[14px]">
                    {e.title}
                  </h3>
                  <p className="text-center xl:px-12 normal-case">
                    <Trans>{e.description}</Trans>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:container p-6 xl:px-32">
        <h2 className="p-6 font-black lg:p-20 text-[rgba(3,21,85,0.9)]">
          {t("productHeader2")}
        </h2>
        <div className="rounded-[20px] shadow-[0px_4px_16px_rgba(17,17,26,0.05),_0px_8px_24px_rgba(17,17,26,0.05),_0px_16px_56px_rgba(17,17,26,0.05)] bg-white xl:p-10">
        </div>
      </div>
      <div className="lg:container xl:px-32">
        <h2 className="p-6 font-black lg:p-20 text-[rgba(3,21,85,0.9)]">
          {t("productHeader3")}
        </h2>
        <div className="lg:container p-6 lg:p-0 bg-white rounded-[20px] shadow-none lg:shadow-[0px_4px_16px_rgba(17,17,26,0.05),_0px_8px_24px_rgba(17,17,26,0.05),_0px_16px_56px_rgba(17,17,26,0.05)] lg:flex">
          <div className="md:w-full md:h-full md:flex md:scale-75 md:items-center md:justify-center lg:scale-100">
            <img
              src={slide1}
              className="rounded-[20px] lg:rounded-l-[20px] md:rounded-none"
              alt=""
              loading="lazy"
            />
          </div>
          {/* <Swiper
            spaceBetween={5}
            modules={[Pagination, EffectFade, Autoplay]}
            initialSlide={0}
            pagination={{
              el: ".bot-elements",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '">' +
                  t("productSlide", { returnObjects: true })[index].type +
                  "</span>"
                );
              },
            }}
            ref={productSlideRef}
          >
            <div className="bot-elements hidden lg:flex"></div>
            {t("productSlide", { returnObjects: true }).map((e) => {
              return (
                <SwiperSlide key={e.id} className="">
                  <div className="p-6 lg:p-0 rounded-2xl flex flex-col md:flex-row">
                    <div className="md:my-auto pt-6 md:pl-6 md:pt-0 lg:pt-10 xl:pt-40">
                      <div className="space-y-4">
                        <h3 className="text-center xl:text-left lg:pl-20 lg:pr-48 2xl:pr-96 font-bold">
                          {e.title}
                        </h3>
                        <ol className="p-4 xl:pl-24">
                          {e.description.map((k, i) => (
                            <li
                              key={i}
                              className="text-[14px] normal-case list-disc"
                            >
                              {k}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper> */}
        </div>
      </div>
    </>
  );
}

export default Product;
