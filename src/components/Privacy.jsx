import { useTranslation } from "react-i18next";

function Privacy() {
  const { t } = useTranslation();
  const privacyList = t("privacyList", { returnObjects: true })
  return (
  <div className="lg:bg-[#F1F1F1] bg:white lg:flex lg:justify-center">
      <div className="p-6 md:p-12 lg:p-28 lg:bg-white lg:align-top lg:m-24 lg:mb-48 lg:pb-16 lg:inline-block lg:shadow-[5px_10px_20px_rgba(0,0,0,0.1)] lg:rounded-[50px] lg:container">
        <h2 className="font-bold">{t("privacyTitle")}</h2>
        <div className="text-justify">
          <ol className="list-decimal p-6 space-y-4" style={{listStyleType: "upper-roman"}}>
          {privacyList.map((e, i)=>{
            return <li key={i} className="font-bold">{e.header}
            <ol className="normal-case space-y-2">
              {e.desc.map((j, i)=> {
              return <li key={i} className="font-medium">{j.d}
               <ol className="list-decimal">
                {j.d1.map((k, i) => <li className="ml-4" key={i}>{k.d2}
                  <ol className="ml-4" style={{listStyleType: "lower-alpha"}}>
                    {k.d3.map((m,i) => <li key={i}>{m}</li>)}
                  </ol>
                </li>)}
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

export default Privacy;
