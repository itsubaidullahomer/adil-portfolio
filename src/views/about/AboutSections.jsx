import React from "react";
import Reveal from "./Reveal";
import Section from "./Section";
import RotatingLine from "./RotatingLine";

// Echoes the Home hero's "{by trade} / {by heart}" line.
const lines = ["Designer by trade.", "Researcher by habit.", "Curious by heart."];

const details = [
  { term: "Role", value: "UI/UX Designer" },
  { term: "Experience", value: "4 years" },
  { term: "Focus", value: "SaaS · Healthcare · Business apps" },
  { term: "Currently", value: "Open to new opportunities" },
];

const AboutSections = () => {
  return (
    <>
      <section className="w-full box-border px-[clamp(20px,6vw,82px)] pt-[clamp(32px,6vw,88px)] pb-[clamp(8px,2vw,24px)] flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col gap-[clamp(40px,6vw,80px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(32px,5vw,72px)]">
            <Reveal className="flex-[1_1_520px] min-w-0">
              <h1 className="font-display font-bold text-[clamp(46px,7.2vw,112px)] leading-[1] tracking-[-0.045em] text-[#1C2124]">
                Hey you,
                <br />
                I'm Adil.
                <RotatingLine lines={lines} />
              </h1>
            </Reveal>

            {/* Editorial figure with caption */}
            <Reveal as="figure" delay={120} className="w-[clamp(220px,26vw,340px)] flex flex-col gap-3 max-[640px]:w-full max-[640px]:max-w-[320px]">
              <div className="group relative aspect-[4/5] rounded-[24px] overflow-hidden bg-[#E6DFD5] ring-1 ring-black/5 shadow-[0_24px_48px_-24px_rgba(28,33,36,.35)]">
                <img
                  src="/images/adil.png"
                  alt="Portrait of Adil Younas"
                  className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.04]"
                  draggable={false}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" aria-hidden="true" />
              </div>
              <figcaption className="text-[13px] text-[#7C7C7A]">
                Adil, probably mid-rabbit-hole.
              </figcaption>
            </Reveal>
          </div>

          <Reveal as="dl" delay={200} className="grid grid-cols-4 gap-x-8 gap-y-6 max-[900px]:grid-cols-2">
            {details.map((d) => (
              <div key={d.term} className="pt-4 border-t border-[#DADAD4] flex flex-col gap-1.5">
                <dt className="text-[13px] text-[#A8A7A3]">{d.term}</dt>
                <dd className="text-[16px] text-[#1C2124]">{d.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Section index="01" label="Story">
        <div className="flex flex-col gap-10 max-w-[760px]">
          <Reveal>
            <p className="font-display text-[clamp(24px,2.6vw,34px)] font-medium leading-[1.3] tracking-[-0.02em] text-[#1C2124]">
              Good design starts with understanding people: their needs, their struggles, and the small details that shape how they experience a product.
            </p>
          </Reveal>
          <Reveal delay={80} className="grid grid-cols-2 gap-x-10 gap-y-5 max-[640px]:grid-cols-1">
            <p className="text-[17px] leading-[1.65] text-[#7C7C7A]">
              I'm Adil, a UI/UX designer with 4 years of experience designing SaaS, healthcare and business web applications. I started out sketching and telling stories visually, and I still work the same way: understand the person first, then shape the idea into user flows, wireframes, prototypes and polished interfaces in Figma. I'm always asking why a user hesitated, what confused them, and how it could be simpler.
            </p>
            <div className="flex flex-col gap-5">
              <p className="text-[17px] leading-[1.65] text-[#7C7C7A]">
                What excites me most is the psychology behind design: how one small interaction can make someone feel understood, and how clarity can remove frustration.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#7C7C7A]">
                Some of my ideas get built. Some stay locked in a notebook. But every one starts the same way: by noticing someone struggle.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#7C7C7A]">
                Open to UI/UX and product design roles, remote or hybrid.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
};

export default AboutSections;
