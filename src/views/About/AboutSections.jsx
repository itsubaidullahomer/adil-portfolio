import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Section from "./Section";
import RotatingLine from "./RotatingLine";

// Echoes the Home hero's "{by trade} / {by heart}" line.
const lines = ["Designer by trade.", "Researcher by habit.", "Curious by heart."];

const details = [
  { term: "Role", value: "Product Designer" },
  { term: "Experience", value: "6+ years" },
  { term: "Focus", value: "EdTech · FinTech · Enterprise" },
  { term: "Currently", value: "Product Designer @ Qur'an for All" },
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
                I'm Abdullah.
                <RotatingLine lines={lines} />
              </h1>
            </Reveal>

            {/* Editorial figure with caption */}
            <Reveal as="figure" delay={120} className="w-[clamp(220px,26vw,340px)] flex flex-col gap-3 max-[640px]:w-full max-[640px]:max-w-[320px]">
              {/* Tight crop of img1.jpeg (source region x 180–611, y 190–729) that trims the empty wall
                  and frames him from the chest up with the laptop; a slight warm tone matches the page. */}
              <div className="group relative aspect-[4/5] rounded-[24px] overflow-hidden bg-[#8E8D89] ring-1 ring-black/5 shadow-[0_24px_48px_-24px_rgba(28,33,36,.35)]">
                <img
                  src="/images/img1.jpeg"
                  alt="Abdullah Omer at his laptop"
                  className="absolute max-w-none w-[141.8%] h-auto left-[-41.8%] top-[-35.25%] select-none sepia-[.12] saturate-[1.08] contrast-[1.04] origin-[60%_35%] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.04]"
                  draggable={false}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" aria-hidden="true" />
              </div>
              <figcaption className="text-[13px] text-[#7C7C7A]">
                Abdullah, probably mid-rabbit-hole.
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
              I get lost in design rabbit holes at 2 a.m., question everything I make, and won't stop explaining something until it clicks.
            </p>
          </Reveal>
          <Reveal delay={80} className="grid grid-cols-2 gap-x-10 gap-y-5 max-[640px]:grid-cols-1">
            <p className="text-[17px] leading-[1.65] text-[#7C7C7A]">
              I've designed apps, dashboards, and platforms for EdTech, FinTech, and enterprise. Sometimes I'm interviewing users and mapping their pain points. Other times I'm building design systems and prototypes that actually feel alive. Either way, I'm connecting what people need with what makes business sense.
            </p>
            <div className="flex flex-col gap-5">
              <p className="text-[17px] leading-[1.65] text-[#7C7C7A]">
                I don't do surface-level work. If it won't solve real problems or teach me something new, I'm out.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#7C7C7A]">
                When I'm not working, my curiosity just shifts into random research, idea debates, or breaking down complex topics. It's not about hobbies; it's about chasing whatever keeps my brain switched on.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140} className="flex flex-wrap items-center gap-6">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1C2124] text-[#FFF9F3] font-medium"
            >
              See my work
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="/Abdullah - _no1productdesigner_ Product Designer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#1C2124] underline decoration-[#C9C9C3] underline-offset-[6px] transition-colors hover:decoration-[#1C2124]"
            >
              Resume ↗
            </a>
          </Reveal>
        </div>
      </Section>
    </>
  );
};

export default AboutSections;
