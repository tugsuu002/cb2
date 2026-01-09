import Faq from "./Home/Faq.jsx";

const plans = [
  {
    name: "Pro",
    price: "300,000₮",
    period:
      "Өөрийн бизнесийн онцлогт тохируулан хүссэн цэсээ нэмэлтээр сонгон ав",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "900,000₮",
    period: "Чатботын бүх боломж чадварыг хязгааргүйгээр ашигла",
    highlight: true,
  },
  {
    name: "VIP",
    price: "Let's talk",
    period:
      "Үйл ажиллагаандаа ашигладаг системүүдтэй холболт хийлгэж хөгжүүлэх боломжтой",
    highlight: false,
  },
];

const features = [
  { label: "Мэдээлэл боловсруулах", values: [true, true, true] },
  { label: "Харицагч ядра", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "Хэрэглэгчийн сегмент", values: [true, true, true] },
  { label: "Hubspot холболт", values: [true, true, true] },
  { label: "Харицагч менежер", values: [true, true, true] },
  { label: "Аналитик харах", values: [true, true, true] },
  { label: "Мониторинг хийх", values: [true, true, true] },
  { label: "Төлбөрийн холболт", values: [false, true, false] },
  { label: "Масс мессеж", values: [true, true, true] },
  { label: "Web форм", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "Асуулгын форм", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "HTML тайбар", values: [false, true, false] },
  { label: "Захиалга удирдах", values: [false, true, false] },
  { label: "Онлайн дэмжлэг", values: [false, true, false] },
  { label: "Коммент тохиргоо", values: [false, true, false] },
  { label: "Live agent", values: [false, true, false] },
  { label: "Онлайн гэрээ", values: [false, true, false] },
  { label: "Тооцооллууд", values: [false, true, false] },
  { label: "ДАН систем", values: [false, true, false] },
  { label: "Систем холболт", values: [false, true, false] },
];

const Check = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#A3AED0] text-white text-xs">
    ✓
  </span>
);

export default function PricingTable() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 mt-28">
      <p className="font-pro font-semibold text-[55px] text-[#000000] flex justify-center justify-items-center mb-20 ">Үйлчилгээний багц</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-[90%] ml-auto text-[#031555">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[10px] border p-6  justify-start text-left ${
              plan.highlight
                ? "bg-gradient-to-tr from-[#F4F7FE] via-[#F4F7FE] to-[#608DFF]"
                : "bg-[#F4F7FE]"
            }`}
          >
            <h3 className="text-xl font-pro font-semibold">{plan.name}</h3>
            <div className="text-[13px] font-pro font-normal opacity-80 mt-1">{plan.period}</div>
            <div className="flex justify-start items-baseline mt-4 space-x-2">
              <div className="text-[30px] font-pro font-medium">{plan.price}</div>
             {plan?.name !=='VIP' && <p>/1 сар</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 border rounded-2xl overflow-hidden" >
        {/* Feature names */}
        <div className="bg-gray-50">
          <div className="h-14 border-b px-4 py-4 font-medium text-[#031555] bg-[#F4F7FE]">
            Суурь боломж
          </div>

          {features.map((f, i) => (
            <div
              key={i}
              className="px-4 py-3 border-b text-sm text-[#031555] bg-[#FFFFFF]"
            >
              {f.label}
            </div>
          ))}
        </div>

        {/* Feature values */}
        {plans.map((plan, colIndex) => (
          <div
            key={plan.name}
            className={plan.highlight ? "bg-blue-50" : "bg-[#FFFFFF]"}
          >
            <div className="h-14 border-b bg-[#F4F7FE]" />

            {features.map((f, rowIndex) => (
              <div
                key={rowIndex}
                className="px-4 py-3 font-pro font-medium border-b flex justify-center text-[18px] text-[#A3AED0]"
              >
                {f.values[colIndex] === true && <Check />}
                {f.values[colIndex] === false && (
                  <span className="opacity-40">—</span>
                )}
                {typeof f.values[colIndex] === "string" && (
                  <span className="text-xs">{f.values[colIndex]}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div id="faq">
      <Faq />
      </div>
    </div>
  );
}
