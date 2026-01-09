import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true });

  return (
    <div className="flex-none md:flex mx-6 md:mx-1 justify-center items-center">
      <div className="p-6 md:mt-12">
        <iframe
          title="Chatbot LLC Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.284784635269!2d106.92861968626582!3d47.915607683119944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693a4efed3c83%3A0x43d5e484e85cd9b7!2sChatbot%20LLC!5e1!3m2!1sen!2smn!4v1754470985162!5m2!1sen!2smn"
          className="md:w-[500px] md:h-[500px] w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="md:w-2/6 w-full mx-6 px-1 h-auto">
        {contact.map((e, i) => (
          <div key={i} className="flex items-start mb-3">
            <img
              src={e.image}
              alt="icon"
              className="w-[20px] h-[20px] mr-2 mt-[2px]"
            />
            <div className="leading-5 mt-1">
              <span className="font-medium">{e.name}:</span>{" "}
              <span>{e.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
