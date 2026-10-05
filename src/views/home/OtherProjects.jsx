import React from "react";

const OtherProjects = () => {
  return (
    <>
      <div className="px-5 py-[100px] mx-5 my-[100px] flex flex-col gap-[110px]">
        <h1 className="text-[55px] text-[#1C2124] font-bold">Other Projects</h1>
        <div className="w-full grid grid-cols-3 p-5 py-14">
          <div className="w-full p-2.5 flex flex-col gap-3">
            <img
              src="/images/img1.jpg"
              className="w-full h-[612px] rounded-2xl"
              alt=""
            />
            <div className="flex flex-col gap-6 py-5 pb-4">
              <h1 className="text-2xl font-bold text-[#1C2124]">
                Skewed Views
              </h1>
              <p className="font-bold text-[#7C7C7A]">2023</p>
            </div>
            <p className="text-lg text-[#807E7A]">
              A personalized museum companion that uses behavioral science to
              transform how non-museum goers discover and experience cultural
              institutions.
            </p>
            <p className="text-[#1C2124]">Concept Design · Behavioral Design</p>
          </div>
          <div className="w-full p-2.5 flex flex-col gap-3">
            <img
              src="/images/img1.jpg"
              className="w-full h-[612px] rounded-2xl"
              alt=""
            />
            <div className="flex flex-col gap-6 py-5 pb-4">
              <h1 className="text-2xl font-bold text-[#1C2124]">
                Skewed Views
              </h1>
              <p className="font-bold text-[#7C7C7A]">2023</p>
            </div>
            <p className="text-lg text-[#807E7A]">
              A personalized museum companion that uses behavioral science to
              transform how non-museum goers discover and experience cultural
              institutions.
            </p>
            <p className="text-[#1C2124]">Concept Design · Behavioral Design</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherProjects;
