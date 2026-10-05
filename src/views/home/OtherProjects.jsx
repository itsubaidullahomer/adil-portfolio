import React, { useState, useEffect } from "react";

const OtherProjects = () => {
  const projectsData = [
    {
      id: 9,
      title: "LinkedUnion (Website & App)",
      year: "2024",
      description:
        "Unified digital platform for labor unions, combining websites, mobile apps, and communication tools to keep members engaged and informed.",
      category: "mobile-app",
      tags: "Unions · Mobile App · Communication",
      image: "/images/projects/img9-linkedunion.svg",
      href: "https://linkedunion.com/",
    },
    {
      id: 8,
      title: "American Express (Website)",
      year: "2024",
      description:
        "American Express Saudi Arabia, offering Sharia-compliant Platinum, Gold and Green cards, Membership Rewards points that never expire, travel privileges, and payment solutions for businesses and merchants.",
      category: "fintech",
      tags: "FinTech · Payments · Banking",
      image: "/images/projects/img8-amex.svg",
      href: "https://www.americanexpress.com.sa/",
    },
    {
      id: 7,
      title: "Avialdo Solutions (Website)",
      year: "2024",
      description:
        "Digital agency building AI systems and digital products, from bold designs and marketing strategies to cutting-edge technical solutions.",
      category: "consultancy",
      tags: "AI · Agency · Digital Products",
      image: "/images/projects/img7.svg",
      href: "https://avialdosolutions.com/",
    },
    {
      id: 1,
      title: "Alarm Clock (TV App)",
      year: "2024",
      description:
        "A visually appealing alarm clock app or screensaver (likely for Fire TV or tablets) that wakes you up with beautiful clock-face visuals and touch-based controls for alarms and snooze.",
      category: "ui-design",
      tags: "UI · Prototype · Alarm Clock",
      image: "/images/projects/img1-alarm.svg",
      href: "https://www.amazon.com/dp/B0CCRWTM9J",
    },

    // {
    //   id: 1,
    //   title: "E-Nomad Tax (Website)",
    //   year: "2024",
    //   description:
    //     "Offshore tax consultancy for US professionals focusing on tax optimization and wealth protection.",
    //   category: "finance-consultancy",
    //   tags: "Tax · Offshore · Consultancy",
    //   image: "/images/projects/img4-enomad.svg",
    //   href: "https://www.enomadtax.com/",
    // },
    // {
    //   id: 2,
    //   title: "Tututor AI (Website)",
    //   year: "2024",
    //   description:
    //     "AI-based educational platform for teachers and students to generate exams, mind maps, and lesson plans.",
    //   category: "education-tech",
    //   tags: "AI · Education · Learning Tools",
    //   image: "/images/projects/img2-tututor.svg",
    //   href: "https://www.tututor.ai/",
    // },
    // {
    //   id: 3,
    //   title: "UAPay (Website)",
    //   year: "2024",
    //   description:
    //     "FinTech payment service provider offering online payments, mass payouts, and P2P transfers, mainly in Ukraine.",
    //   category: "fintech",
    //   tags: "Payment · FinTech · P2P",
    //   image: "/images/projects/img3-uapay.svg",
    //   href: "https://uapay.vercel.app/",
    // },
    // {
    //   id: 4,
    //   title: "Octech Cloud (Website)",
    //   year: "2024",
    //   description:
    //     "Digital consultancy providing cloud migration, AI systems, UI/UX design, and full-cycle tech solutions.",
    //   category: "consultancy",
    //   tags: "Cloud · AI · Digital Solutions",
    //   image: "/images/projects/img5-octech.svg",
    //   href: "https://octech.cloud/",
    // },
    // {
    //   id: 5,
    //   title: "Aurix (Website)",
    //   year: "2024",
    //   description:
    //     "Landing page for a hands-free copy trading system that automatically copies smart gold trades for consistent, low-risk returns.",
    //   category: "fintech",
    //   tags: "FinTech · Trading · Gold",
    //   image: "/images/projects/img1-aurix.svg",
    //   href: "https://aurix-sigma.vercel.app/",
    // },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ui-design", label: "UI Design" },
    { id: "ux-design", label: "UX Design" },
    { id: "dashboard-design", label: "Dashboard Design" },
    { id: "mobile-app", label: "Mobile App" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const currentFilterLabel =
    categories.find((cat) => cat.id === activeFilter)?.label || "All Projects";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".relative")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="box-border py-[clamp(60px,9vw,130px)] px-[clamp(20px,6vw,82px)] flex flex-col gap-[clamp(36px,5vw,64px)]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-[clamp(34px,5vw,55px)] font-bold tracking-[-0.03em] text-[#1C2124]">
          Other Projects
        </h2>
        <p className="text-[17px] text-[#7C7C7A]">
          {projectsData.length} shipped products
        </p>

        {/* <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-8 px-8 py-4 bg-[#1C2124] text-white rounded-full font-semibold shadow-lg hover:bg-[#2a3034] transition-all duration-300 cursor-pointer"
          >
            <span>{currentFilterLabel}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-10 overflow-hidden">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveFilter(category.id);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left text-nowrap px-6 py-4 transition-colors duration-200 cursor-pointer ${
                    activeFilter === category.id
                      ? "bg-[#1C2124] text-white"
                      : "text-[#1C2124] hover:bg-gray-50"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div> */}
      </div>

      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-[clamp(20px,2.5vw,32px)]">
        {filteredProjects.map((project) => (
          <a
            href={project.href}
            key={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-[#FFFDFA] border border-[#EAE1D6] rounded-3xl p-3.5 shadow-[0_1px_2px_rgba(28,33,36,.04)] transition-[transform,box-shadow,border-color] duration-[450ms] ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(28,33,36,.45)] hover:border-[#D9CFC2]"
          >
            {/* project images are 1:1, so a square box shows them uncropped */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#101214]">
              <img
                src={project.image}
                className="w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.06]"
                draggable={false}
                alt={project.title}
              />
              <span className="absolute top-3 left-3 px-[11px] py-[5px] text-xs font-semibold tracking-[0.04em] text-[#EFEFEC] bg-[rgba(16,18,20,.72)] border border-white/14 rounded-full backdrop-blur-[6px]">
                {project.year}
              </span>
            </div>
            <div className="flex flex-col gap-2.5 pt-5 px-2 pb-2.5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-[22px] font-bold tracking-[-0.01em] text-[#1C2124]">
                  {project.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 w-8 h-8 rounded-full border border-[#E0D6C9] flex items-center justify-center text-sm text-[#1C2124] transition-all duration-[350ms] group-hover:bg-[#1C2124] group-hover:text-[#FFF9F3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </div>
              <p className="text-base leading-[1.55] text-[#807E7A]">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-3 px-2 pb-1.5 border-t border-[#F0E8DE] mt-auto">
              {project.tags.split(" · ").map((tag) => (
                <span
                  key={tag}
                  className="px-[11px] py-[5px] text-[13px] font-medium text-[#5D5A55] bg-[#F5EEE5] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl text-[#7C7C7A]">
            No projects found in this category
          </p>
        </div>
      )}
    </div>
  );
};

export default OtherProjects;
