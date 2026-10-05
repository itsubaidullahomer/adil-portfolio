import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../about/Reveal'
import RotatingLine from '../about/RotatingLine'

// Grey tail of the headline; cycles like the About hero's line.
const taglines = ['through science + storytelling.', 'through research + empathy.', 'through data + craft.']

// Same editorial system as the About hero (meta line, big headline, captioned figure, details row),
// but Home leads with the positioning line instead of the greeting.
const details = [
  { term: 'Building', value: "Product Designer @ Qur'an for All" },
  { term: 'Collaborating with', value: 'FinTech & Enterprise teams (incl. Amex, indirect)' },
  { term: 'By trade', value: 'UI/UX Designer · 4 years' },
  { term: 'By heart', value: 'Data-driven, always learning' },
]

// Same destinations as the footer; outline icons drawn in currentColor so they sit dark on the light hero.
const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/itsadilyounas/',
    icon: (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="4" />
        <path d="M7.5 10.5V17" strokeLinecap="round" />
        <path d="M7.5 7.25V7.35" strokeLinecap="round" strokeWidth="2.2" />
        <path d="M11 17V10.5M11 13.75C11 11.9 12.1 10.5 13.75 10.5C15.4 10.5 16.5 11.6 16.5 13.5V17" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

const Hero = () => {
  return (
    // Fills one screen (viewport minus the 70px navbar); the details row sits at the bottom.
    <section className="w-full box-border min-h-[calc(100svh-70px)] px-[clamp(20px,6vw,82px)] pt-[clamp(24px,4vh,56px)] pb-[clamp(28px,5vh,56px)] flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-between gap-[clamp(40px,6vh,72px)]">
        <Reveal className="flex flex-wrap justify-between gap-4 text-sm text-[#7C7C7A]">
          <span>Adil Younas — UI/UX Designer</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
            Open to new opportunities
          </span>
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-[clamp(32px,5vw,72px)]">
          <div className="flex-[1_1_520px] min-w-0 flex flex-col gap-[clamp(24px,4vh,40px)]">
            <Reveal delay={80}>
              <h1 className="font-display font-bold text-[length:clamp(40px,min(6vw,10vh),92px)] leading-[1.02] tracking-[-0.04em] text-[#1C2124] text-balance">
                Designing to shape behavior
                <RotatingLine lines={taglines} />
              </h1>
            </Reveal>
            <Reveal delay={160} className="flex flex-wrap items-center gap-6">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1C2124] text-[#FFF9F3] font-medium"
              >
                See featured work
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
              <Link
                to="/about"
                className="font-medium text-[#1C2124] underline decoration-[#C9C9C3] underline-offset-[6px] transition-colors hover:decoration-[#1C2124]"
              >
                More about me →
              </Link>
            </Reveal>
          </div>

          <Reveal as="figure" delay={120} className="w-[clamp(220px,min(26vw,42vh),360px)] flex flex-col gap-3 max-[640px]:w-full max-[640px]:max-w-[260px]">
            <div className="aspect-square rounded-[20px] overflow-hidden bg-[#E6DFD5]">
              <img
                src="/images/adil.png"
                className="w-full h-full block object-cover select-none"
                draggable={false}
                alt="Portrait of Adil Younas"
              />
            </div>
            <figcaption className="flex flex-col gap-3">
              <span className="text-[13px] text-[#7C7C7A]">Hey, that's me. Say hi.</span>
              <span className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="w-10 h-10 rounded-full border border-[#D5D5CF] text-[#1C2124] flex items-center justify-center transition-colors duration-300 hover:bg-[#1C2124] hover:border-[#1C2124] hover:text-[#FFF9F3]"
                  >
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </span>
            </figcaption>
          </Reveal>
        </div>

        <Reveal as="dl" delay={220} className="grid grid-cols-4 gap-x-8 gap-y-6 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          {details.map((d) => (
            <div key={d.term} className="pt-4 border-t border-[#DADAD4] flex flex-col gap-1.5">
              <dt className="text-[13px] text-[#A8A7A3]">{d.term}</dt>
              <dd className="text-[16px] leading-snug text-[#1C2124]">{d.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
