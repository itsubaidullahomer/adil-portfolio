import React from "react";
import Reveal from "./Reveal";
import Section from "./Section";

const items = [
  {
    logo: "https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/670ea4566d129f4eea09af40_Netflix%20logo%20icon.svg",
    source: "Watching",
    title: "Money Heist (Season 1)",
    image: "/images/netflix.jpg",
    ratio: "aspect-[718/1024]",
  },
  {
    logo: "https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/670eb46404a80372af4c3c27_Spotify%20logo.svg",
    source: "Playlist",
    title: "Work Vibes",
    image: "https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/670eb6114047e968ae897ddf_Spotify%20Playlist.png",
    ratio: "aspect-square",
  },
];

const Currentlys = () => {
  return (
    <Section index="03" label="Currently" dark>
      <Reveal>
        <h2 className="mb-10 font-display text-[clamp(34px,5vw,55px)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
          Currentlys
        </h2>
      </Reveal>

      {/* Column widths follow each image's aspect ratio, so every image shows uncropped at the same height */}
      <div className="grid grid-cols-[701fr_1000fr] gap-5 max-[640px]:grid-cols-1">
        {items.map((item, i) => {
          // Cards with an href become external links
          const Card = item.href ? "a" : "div";
          const linkProps = item.href
            ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Reveal key={item.title} delay={i * 100}>
              <Card {...linkProps} className="group flex flex-col gap-4">
                <div className={`${item.ratio} rounded-[18px] overflow-hidden bg-[#22282B]`}>
                  <img
                    src={item.image}
                    className={`w-full h-full object-cover select-none ${
                      item.href ? "transition-opacity duration-300 group-hover:opacity-85" : ""
                    }`}
                    draggable={false}
                    alt={item.title}
                  />
                </div>
                <div className="flex items-center gap-3">
                  {item.logo && <img src={item.logo} className="h-7 w-7 object-contain" alt="" />}
                  <div className="flex flex-col">
                    <p className="text-[13px] text-[#7C7C7A]">{item.source}</p>
                    <p className="text-[17px] text-[#FFF9F3]">
                      {item.title}
                      {item.href && (
                        <span
                          aria-hidden="true"
                          className="inline-block ml-1.5 text-[#7C7C7A] transition-all duration-300 group-hover:text-[#FFF9F3] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Currentlys;
