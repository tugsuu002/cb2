import React from "react";
import logo from "../assets/logo.png";
const TopNav = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 
  w-[90%] max-w-7xl h-[72px]
  rounded-[40px] bg-black/70 backdrop-blur-xl
  flex items-center justify-between px-10 text-white">
      <img
        className="absolute top-[24px] left-[40px] w-[162.3px] h-6 object-cover shrink-0"
         src={logo} alt="logo"
      />
<div className="flex items-center gap-8 text-sm">
  <div className="flex items-center gap-1 cursor-pointer">
    Танилцуулга
  </div>
  <div className="flex items-center gap-1 cursor-pointer">
    Үйлчилгээний багц
  </div>
  <div className="cursor-pointer">Тусламж</div>
</div>
      <div className="absolute top-[12px] left-[692.5px] flex items-center gap-[7px] shrink-0 text-base text-gray-200">
        <div className="w-[130px] rounded-3xl bg-white flex items-center justify-center py-2 px-6 box-border">
          <div className="relative leading-8">Нэвтрэх</div>
        </div>
        <div className="w-[130px] rounded-3xl bg-white flex items-center justify-center py-2 px-6 box-border">
          <div className="relative leading-8">Бүртгүүлэх</div>
        </div>
        <div className="w-[93.5px] rounded-3xl bg-white flex items-center justify-center py-2 px-6 box-border gap-2">
          <div className="h-[21px] w-[21px] relative shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="relative leading-8 font-medium shrink-0">Мон</div>
        </div>
      </div>
<div className="flex items-center gap-3">
  <button className="px-6 py-2 rounded-3xl bg-white text-black">
    Нэвтрэх
  </button>
  <button className="px-6 py-2 rounded-3xl bg-white text-black">
    Бүртгүүлэх
  </button>
</div>
    </div>
  );
};

export default TopNav;
