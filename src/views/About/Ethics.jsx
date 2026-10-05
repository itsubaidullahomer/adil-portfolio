import React from "react";
import Reveal from "./Reveal";
import Section from "./Section";

const principles = [
  {
    title: "Design for the Edges",
    description: "Not the center. Start with those who struggle most. Their success is everyone's success.",
  },
  {
    title: "Question the Pattern",
    description: "\"Always done\" isn't always right. Challenge the defaults. Better patterns await.",
  },
  {
    title: "Share the Stumbles",
    description: "Mistakes are data. Talk openly about what didn't work so everyone learns faster.",
  },
  {
    title: "Skin in the Game",
    description: "There's no opting out. Your designs will speak for you. Design responsibly.",
  },
];

const Ethics = () => {
  return (
    <Section index="03" label="Principles">
      <Reveal>
        <h2 className="mb-12 max-w-[680px] font-display text-[clamp(34px,4.6vw,55px)] font-bold leading-[1.08] tracking-[-0.03em] text-[#1C2124] text-balance">
          My code of ethics as a designer in this world.
        </h2>
      </Reveal>

      {/* Fixed numeral column keeps every title aligned */}
      <ol className="flex flex-col">
        {principles.map((p, i) => (
          <Reveal
            as="li"
            key={p.title}
            delay={i * 60}
            className="py-8 border-t border-[#DADAD4] grid grid-cols-[clamp(40px,6vw,88px)_1fr] items-start gap-x-[clamp(16px,3vw,40px)]"
          >
            <span className="font-display text-[clamp(44px,6vw,80px)] font-bold leading-[0.85] tracking-[-0.05em] text-[#DADAD4]">
              {i + 1}
            </span>
            <div className="flex flex-col gap-2 pt-1">
              <h3 className="font-display text-[clamp(22px,2.4vw,28px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#1C2124]">
                {p.title}
              </h3>
              <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#7C7C7A]">{p.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
};

export default Ethics;
