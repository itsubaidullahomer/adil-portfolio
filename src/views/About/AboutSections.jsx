import React from "react";

const AboutSections = () => {
  return (
    <>
      <div className="w-full py-7 flex items-center justify-center">
        <div className="w-full py-7 max-w-[1340px] flex justify-between items-center">
          <img
            src="/images/img1.jpeg"
            alt=""
            className="w-[460px] object-cover max-w-[460px] max-h-[623px] rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-[100px] font-bold text-[1C2124]">
              Hey you,
              <br />
              I'm Abdullah
            </h1>
            <p className="text-4xl text-[#7C7C7A]">/uh · lake · yeah/</p>
            <div className="max-w-[627px] text-lg flex flex-col gap-4">
              <p className="text-[#7C7C7A]">
                I’m a product designer, but honestly, my real job title should
                just be “professional curious person.” Curiosity is the fuel for
                everything I do — it’s why I’ll happily disappear into a new
                design method at 2 a.m., spend way too long poking holes in my
                own ideas, or explain a concept to someone until the lightbulb
                turns on.
              </p>
              <p className="text-[#7C7C7A]">
                I’ve designed mobile apps, dashboards, and multi-platform
                products for industries like EdTech, FinTech, and enterprise
                tech. Sometimes I’m in UX mode — running interviews, spotting
                friction points, mapping journeys. Other times I’m in UI mode —
                crafting design systems, polishing interactions, building
                prototypes that feel alive. Either way, I’m always connecting
                the dots between what users need and what actually makes
                business sense.
              </p>
              <p className="text-[#7C7C7A]">
                One thing I don’t do? Work that’s all surface and no substance.
                If a project won’t solve a real problem, challenge me to grow,
                or leave an impact, I’m not sticking around. Life’s too short
                for meaningless pixels. When I’m not working, my curiosity just
                changes shape. I’ll wander into research rabbit holes, debate
                ideas for the fun of it, or try to explain something complex in
                the simplest way possible. It’s not about having “hobbies” —
                it’s about following the sparks that keep my brain switched on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSections;
