import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Section from "./Section";

// "beat" lines break the story's rhythm; "turn" is the moment the questions arrive.
const story = [
  {
    text: "It was a Thursday night in winter, the kind of cold that settles into your bones. It was my brother's discharge day.",
  },
  {
    text: "I stood at the hospital entrance beside my father, our breath fogging under the yellow glow of the streetlights. The glass doors slid open, and they wheeled my brother out on a hospital stretcher. His arm was bound, his hip fractured, and every small bump of the wheels pulled a low groan out of him.",
  },
  {
    text: "An ambulance waited at the curb. The rescue team stepped out, swung open its back doors, and pulled out their own stretcher. This was the moment he had to be moved from one to the other.",
  },
  {
    text: "Then I watched them ask him to bend, to fold his broken body into a near-squat, just to get inside.",
  },
  { text: "What?", kind: "beat" },
  {
    text: "I stood frozen as questions flooded my mind. Why does it have to be this way? Why isn't there a seat that can turn, swivel, and lift, a seat that becomes a stretcher, so no patient ever has to be forced into a position their body cannot bear?",
    kind: "turn",
  },
];

const styles = {
  beat: "font-display text-[clamp(28px,3vw,40px)] font-bold leading-[1.1] tracking-[-0.03em] text-[#1C2124]",
  turn: "font-display text-[clamp(20px,2vw,26px)] font-medium leading-[1.4] tracking-[-0.01em] text-[#1C2124]",
  body: "text-[17px] leading-[1.65] text-[#7C7C7A]",
};

const Origin = () => {
  return (
    <Section index="02" label="Origin">
      <div className="flex flex-col gap-10 max-w-[760px]">
        <Reveal>
          <h2 className="font-display text-[clamp(34px,4.6vw,55px)] font-bold leading-[1.08] tracking-[-0.03em] text-[#1C2124] text-balance">
            Groan knocked my mind
          </h2>
        </Reveal>
        <Reveal delay={80} className="flex flex-col gap-5 max-w-[640px]">
          {story.map((p) => (
            <p key={p.text} className={styles[p.kind ?? "body"]}>
              {p.text}
            </p>
          ))}
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
            href="https://www.linkedin.com/in/itsadilyounas/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1C2124] underline decoration-[#C9C9C3] underline-offset-[6px] transition-colors hover:decoration-[#1C2124]"
          >
            LinkedIn →
          </a>
        </Reveal>
      </div>
    </Section>
  );
};

export default Origin;
