import React from "react";
import Reveal from "./Reveal";

// Editorial two-column shell: a small numbered label on the left, content on the right.
const Section = ({ index, label, dark = false, className = "", children }) => {
  const muted = dark ? "text-[#7C7C7A]" : "text-[#A8A7A3]";
  const text = dark ? "text-[#EFEFEC]" : "text-[#1C2124]";
  const rule = dark ? "border-[#2E3538]" : "border-[#DADAD4]";

  return (
    <section
      className={`w-full box-border px-[clamp(20px,6vw,82px)] py-[clamp(48px,6vw,88px)] flex justify-center ${
        dark ? "bg-[#1C2124]" : ""
      } ${className}`}
    >
      <div className={`w-full max-w-[1200px] pt-6 border-t ${rule} grid grid-cols-[minmax(160px,1fr)_3fr] gap-x-10 gap-y-8 max-[860px]:grid-cols-1`}>
        <Reveal className="min-[860px]:sticky min-[860px]:top-28 self-start flex gap-2 text-sm">
          <span className={muted}>({index})</span>
          <span className={text}>{label}</span>
        </Reveal>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
};

export default Section;
