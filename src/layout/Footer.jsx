import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full px-7 py-14 flex items-start justify-between gap-4 max-[550px]:flex-col bg-[#1C2124]">
        <div className="h-full flex flex-col gap-[86px] justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="text-[60px] font-bold text-white custom-font">
              Let's work together.
            </h1>
            <p className="text-lg text-[#7C7C7A]">
              Open to chats about design, mentoring, or new opportunities.
            </p>
          </div>
          <p className="text-white font-bold uppercase tracking-[3px]">
            © 2026 Adil Younas
          </p>
        </div>
        <div className="w-[20%] flex flex-col gap-[30px] pt-5 max-[550px]:w-[100%]">
          <h1 className="text-3xl font-bold text-[#EFEFEC]">Get in touch</h1>
          <div className="flex items-center gap-[30px]">
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=adiluxdesigner@gmail.com"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/6788a42d7628c8a8e26dae63_Mail%20Vector%20Icon.svg"
                className="w-[30px] h-[30px] select-none"
                draggable={false}
                alt="Email"
              />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/itsadilyounas/"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/663009ba881736d87cf70eea_linkedin.svg"
                className="w-[30px] h-[30px] select-none"
                draggable={false}
                alt="LinkedIn"
              />
            </a>

            <a
              target="_blank"
              href="https://wa.me/923244930698"
              rel="noopener noreferrer"
            >
              <img src="/images/whatsapp-stroke.svg" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
