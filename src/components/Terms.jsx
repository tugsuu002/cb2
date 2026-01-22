import { useTranslation } from "react-i18next";

function Terms() {
  const { t } = useTranslation();
  const termList = t("termList", { returnObjects: true })
  return (
  <div className="lg:bg-[#F1F1F1] bg:white lg:flex lg:justify-center mt-28 lg:mt-16">
      <div className="p-6 md:p-12 lg:p-28 lg:bg-white lg:align-top lg:m-24 lg:mb-48 lg:pb-16 lg:inline-block lg:shadow-[5px_10px_20px_rgba(0,0,0,0.1)] lg:rounded-[50px] lg:container">
        <h2 className="font-bold">{t("termTitle")}</h2>
        <div className="text-justify">
          <ol className="list-decimal p-6 space-y-4" style={{listStyleType: "upper-roman"}}>
          {termList.map((e, i)=>{
            return <li key={i} className="font-bold">{e.header}
            <ol className="list-decimal normal-case space-y-2">
              {e.desc.map((j, i)=> {
              return <li key={i} className="font-medium ml-4">{j.d}
               <ol style={{listStyleType: "lower-alpha"}}>
                {j.d1.map((k, i) => <li className="ml-4" key={i}>{k}</li>)}
               </ol>
              </li>})}
            </ol>
            </li>
          })}
           </ol>
        </div>
      </div>
    </div>
  );
}

export default Terms;
