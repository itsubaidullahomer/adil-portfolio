import React from "react";
import { Link } from "react-router-dom";

// Each image box uses the image's own width/height ratio, so object-cover never crops it.
const featured = [
  {
    to: "/caseStudy",
    image: "/images/img1.jpg",
    imageAlt: "UX audit of QFA",
    ratio: "aspect-[943/1668]",
    maxWidth: "max-w-[480px]",
    badge: "★ Featured Case Study",
    icon: "/images/quran-for-all-logo.jpg",
    iconBox: "bg-white overflow-hidden",
    iconClass: "w-full h-full object-cover",
    tag: "UX Audit · Mobile",
    title: "Rethinking QFA for 1M+ Users",
    description:
      "Led the end-to-end redesign of Quran For All (1M+ downloads, 200K daily users), from UX audit and research (~1,900 survey responses, 6 usability sessions) to a shipped new navigation, home screen, and player. Post-launch testing: save-for-later completion 0% → 92%, player ease 2.1 → 4.5/5.",
    year: "2026",
    status: "Delivered · Al Huda",
    cta: "Read the case study",
    ctaIcon: "→",
  },
  {
    href: "https://search-companion.vercel.app/",
    image: "/images/img3.jpeg",
    imageAlt: "Talent AI",
    ratio: "aspect-[853/1280]",
    icon: "/images/whatsapp-stroke.svg",
    iconBox: "bg-[#25D366]",
    iconClass: "w-[19px] h-[19px]",
    tag: "Gen AI · Job Search · Chatbot",
    title: "Talent AI",
    description:
      "Enhancing job search experience through a WhatsApp chatbot that guides and assists users with personalized opportunities.",
    year: "2024",
    status: "Delivered · Talent AI",
    cta: "Read the case study",
    ctaIcon: "↗",
    reverse: true,
  },
  {
    href: "https://google-podcast-eta.vercel.app",
    image: "/images/img2.jpg",
    imageAlt: "Podcast cover art",
    ratio: "aspect-[853/1280]",
    reverse: false,
    icon: "/images/icon1.svg",
    iconBox: "bg-white",
    iconClass: "w-[19px] h-[19px]",
    tag: "Podcast · Audio Content",
    title: "Google Podcast Redesign",
    description:
      "Redesigned Google Podcasts through a usability audit and user research, creating a more intuitive and engaging listening experience.",
    year: "2023",
    status: "Redesign · Personal Project",
    cta: "Read the case study",
    ctaIcon: "↗",
  },
];

const FeaturedItem = ({ item }) => {
  const Tag = item.to ? Link : "a";
  // Every featured item opens in a new tab, including the in-site case study.
  const linkProps = item.to
    ? { to: item.to, target: "_blank", rel: "noopener noreferrer" }
    : { href: item.href, target: "_blank", rel: "noopener noreferrer" };

  const media = (
    <div
      className={`relative flex-[1_1_320px] min-w-0 ${item.ratio} ${
        item.maxWidth ?? ""
      } rounded-[32px] overflow-hidden bg-[#22282B] transition-transform duration-500 ease-[cubic-bezier(.2,.7,.3,1)] group-hover:-translate-y-1.5`}
    >
      <img
        src={item.image}
        className="w-full h-full object-cover block select-none"
        draggable={false}
        alt={item.imageAlt}
      />
      {item.badge && (
        <span className="absolute top-4 left-4 px-3.5 py-2 text-[13px] font-semibold tracking-[0.02em] text-[#1C2124] bg-[#F2C94C] rounded-full shadow-[0_6px_16px_rgba(0,0,0,.25)]">
          {item.badge}
        </span>
      )}
    </div>
  );

  const info = (
    <div className="flex-[1_1_340px] min-w-0 flex flex-col gap-[26px]">
      <div className="flex items-center gap-2.5">
        <div
          className={`w-[34px] h-[34px] rounded-lg shrink-0 flex items-center justify-center ${item.iconBox}`}
        >
          <img src={item.icon} className={item.iconClass} alt="" />
        </div>
        <p className="text-[13px] tracking-[0.1em] font-bold uppercase text-[#FFF9F3]">
          {item.tag}
        </p>
      </div>
      <h3 className="font-display text-[clamp(28px,3.2vw,40px)] font-bold tracking-[-0.02em] text-[#EFEFEC]">
        {item.title}
      </h3>
      <p className="text-lg leading-[1.6] text-[#9A9894] max-w-[46ch]">
        {item.description}
      </p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 text-[15px] text-[#EAEAE7]">
        <span className="px-3.5 py-[7px] border border-[#3A4145] rounded-full">
          {item.year}
        </span>
        <span className="px-3.5 py-[7px] border border-[#3A4145] rounded-full">
          {item.status}
        </span>
      </div>
      <div className="flex items-center gap-3 font-semibold text-[#FFF9F3] transition-[gap] duration-[350ms] group-hover:gap-[18px]">
        <span>{item.cta}</span>
        <span aria-hidden="true">{item.ctaIcon}</span>
      </div>
    </div>
  );

  return (
    <Tag
      {...linkProps}
      className={`group w-full max-w-[1150px] flex ${
        item.reverse ? "flex-wrap-reverse" : "flex-wrap"
      } items-center justify-between gap-[clamp(28px,4vw,64px)]`}
    >
      {item.reverse ? (
        <>
          {info}
          {media}
        </>
      ) : (
        <>
          {media}
          {info}
        </>
      )}
    </Tag>
  );
};

const FeaturedWork = () => {
  return (
    <div id="work" className="w-full box-border py-[clamp(56px,8vw,110px)] px-[clamp(20px,7vw,110px)] flex flex-col gap-[clamp(40px,5vw,72px)] bg-[#1C2124]">
      <div className="flex flex-col gap-3.5">
        <h2 className="font-display text-[clamp(34px,5vw,55px)] font-bold tracking-[-0.03em] text-white">
          Featured Work
        </h2>
        <p className="text-lg text-[#8E8C88]">The latest best work.</p>
      </div>
      <div className="w-full flex flex-col items-center gap-[clamp(56px,7vw,110px)]">
        {featured.map((item) => (
          <FeaturedItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;
