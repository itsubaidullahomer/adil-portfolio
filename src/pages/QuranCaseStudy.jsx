import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import initQuranCaseStudyInteractions from './QuranCaseStudyInteractions';
import './QuranCaseStudy.css';

const RESEARCH_CAPTIONS = [
  'Positioning statement and elevator pitch.',
  'Research and strategy board.',
  'Screen audit: mapping the existing app.',
  'Screen audit: reviewed screens marked done.',
  'Screen audit: reviewed screens marked done.',
  'Detailed UX audit of the main screen.',
  'Screen audit: full flow in Figma.',
  'Screen audit: full flow in Figma.',
  'Screen inventory, grouped by section.',
  'Page-by-page audit notes.',
  'Page-by-page audit notes.',
  'Audit findings as sticky notes.',
  'Audit findings as sticky notes.',
  'Survey responses exported to Google Sheets.',
  'Raw form responses, around 1,900 rows.',
  'Survey results: responses by question.',
  'Survey results: responses by question.',
  'Survey results: age and occupation.',
  'Survey results: feature usage by category.',
  'Survey summary: 1,890 responses.',
  'Affinity mapping of user feedback.',
  'Synthesis: grouping insights into themes.',
  'Synthesis: themes and priorities.',
];

const RESEARCH_IMAGES = JSON.stringify(
  RESEARCH_CAPTIONS.map((cap, i) => ({ src: `/quran-for-all/caseStudyimages/img${i + 1}.png`, cap }))
);

const QuranCaseStudy = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Quran For All, Redesigning a daily habit · Abdullah Omer';
    const cleanup = initQuranCaseStudyInteractions(rootRef.current);
    return () => {
      document.title = prevTitle;
      cleanup?.();
    };
  }, []);

  return (
    <div className="caseStudy-page" ref={rootRef}>
      <header className="top">
        <div className="top-inner">
          <Link to="/" className="brand-link"><span className="brand">Abdullah Omer</span></Link>
          {" "}
          <nav>
            <a href="#overview">
              Overview
            </a>
            {" "}
            <a href="#background">
              Background
            </a>
            {" "}
            <a href="#problem">
              Problem
            </a>
            {" "}
            <a href="#research">
              Research
            </a>
            {" "}
            <a href="#findings">
              Findings
            </a>
            {" "}
            <a href="#redesign">
              Redesign
            </a>
            {" "}
            <a href="#impact">
              Impact
            </a>
            {" "}
            <a href="#reflection">
              Takeaways
            </a>
          </nav>
          {" "}
          <span style={{"color":"var(--ink-3)","fontSize":"13px"}}>
            Case study · 2026
          </span>
        </div>
      </header>
      <article>
        <header className="article-header">
          <p className="label">
            Case study · Lead product designer · Shipped to production
          </p>
          <h1 className="tagline">
            {"A daily habit for 200,000 people, rebuilt around "}
            <em>
              find
            </em>
            {" and "}
            <em>
              return
            </em>
            .
          </h1>
          <p className="one-liner">
            Quran For All is a free Islamic learning app with over 20,000 audio lectures and around 200K daily listeners in more than 90 countries. I started with an audit nobody asked for, got hired to lead the redesign, and over eight months we shipped a new navigation, a new home screen and a new player.
          </p>
          <div className="byline">
            <span className="avatar">
              AO
            </span>
            {" "}
            <span>
              <b>
                Abdullah Omer
              </b>
            </span>
            {" "}
            <span className="dot">
              ·
            </span>
            {" "}
            <span>
              Product Designer (lead)
            </span>
            {" "}
            <span className="dot">
              ·
            </span>
            {" "}
            <span>
              8 months
            </span>
            {" "}
            <span className="dot">
              ·
            </span>
            {" "}
            <span>
              12 min read
            </span>
          </div>
        </header>
        <section className="glance" aria-label="At a glance">
          <h2 className="glance-title">
            At a glance
          </h2>
          <dl className="glance-rows">
            <div className="glance-row">
              <dt>
                Problem
              </dt>
              <dd>
                20,000 lectures sat behind 19 look-alike tiles, every daily feature was hidden in a three-dot menu, and the player (the screen people used most) was also the lowest rated in the audit at 2.1/5.
              </dd>
            </div>
            <div className="glance-row">
              <dt>
                My role
              </dt>
              <dd>
                Lead designer, covering the audit, survey, usability sessions, IA, UI, design system and handoff. Three juniors rotated through across phases, and I owned the strategy, the IA and the design system.
              </dd>
            </div>
            <div className="glance-row">
              <dt>
                Approach
              </dt>
              <dd>
                A bilingual survey (around 1,900 responses) and six moderated sessions pointed to three intents: Find, Return and Explore. Those turned into a four-tab navigation, a Home screen that works as a personal dashboard, a proper player, a Library trimmed from 19 to 12 categories, and visible state on every row.
              </dd>
            </div>
            <div className="glance-row">
              <dt>
                Hardest call
              </dt>
              <dd>
                Deciding not to redesign the Library. Around 200,000 people had already memorised it, so it kept its shape and we only removed the categories the survey showed nobody used.
              </dd>
            </div>
            <div className="glance-row glance-row--out">
              <dt>
                Outcome
              </dt>
              <dd>
                {"Shipped on both stores, then re-tested on the same tasks: save-for-later completion "}
                <b>
                  0% → 92%
                </b>
                {", “is this saved?” first click "}
                <b>
                  0% → 88%
                </b>
                {", seek errors "}
                <b>
                  4.0 → 0.3
                </b>
                {", player ease "}
                <b>
                  2.1 → 4.5 / 5
                </b>
                {". "}
                <a href="#impact">
                  Full scoreboard →
                </a>
              </dd>
            </div>
          </dl>
        </section>
        <div className="full-bleed" aria-label="Quran for All — redesigned screens">
          <div className="ps-hero">
            <div className="ps-marquee" role="list" aria-roledescription="auto-scrolling gallery">
              <div className="ps-track">
                <figure className="ps-card" role="listitem">
                  <img loading="lazy" src="/caseStudy/95893cc0-c716-4c72-bcb4-7b70e04a5936.jpg" alt="A World of Authentic Islamic Learning" />
                </figure>
                <figure className="ps-card" role="listitem">
                  <img loading="lazy" src="/caseStudy/b5bbfd79-d4fc-40bf-931a-0bd4b123c94d.jpg" alt="Personalized Home Experience" />
                </figure>
                <figure className="ps-card" role="listitem">
                  <img loading="lazy" src="/caseStudy/ab4b932d-6fb9-4fe5-8de5-24930a16c3ff.jpg" alt="A Seamless Listening Experience" />
                </figure>
                <figure className="ps-card" role="listitem">
                  <img loading="lazy" src="/caseStudy/4fe93595-57b3-4c3f-92a2-795352538360.jpg" alt="Multi-Language Learning Content" />
                </figure>
                <figure className="ps-card" role="listitem">
                  <img loading="lazy" src="/caseStudy/84294108-9f28-476f-afd2-7a0930f492d1.jpg" alt="Smart Search" />
                </figure>
                <figure className="ps-card" role="listitem">
                  <img loading="lazy" src="/caseStudy/0eb1dc66-06e3-4bdf-b334-54a960e95881.jpg" alt={"Downloads & Offline Access"} />
                </figure>
                <figure className="ps-card" role="listitem">
                  <img loading="lazy" src="/caseStudy/16b616d1-54e8-48c8-a4e0-70de19765a5a.jpg" alt="Structured. Organized. Easy to Follow." />
                </figure>
                <figure className="ps-card" role="listitem">
                  <img loading="lazy" src="/caseStudy/28bf97bb-7239-4deb-a84e-ee4f54997966.jpg" alt="Contextually Linked Learning Resources" />
                </figure>
                <figure className="ps-card" aria-hidden="true">
                  <img loading="lazy" src="/caseStudy/95893cc0-c716-4c72-bcb4-7b70e04a5936.jpg" alt="" />
                </figure>
                <figure className="ps-card" aria-hidden="true">
                  <img loading="lazy" src="/caseStudy/b5bbfd79-d4fc-40bf-931a-0bd4b123c94d.jpg" alt="" />
                </figure>
                <figure className="ps-card" aria-hidden="true">
                  <img loading="lazy" src="/caseStudy/ab4b932d-6fb9-4fe5-8de5-24930a16c3ff.jpg" alt="" />
                </figure>
                <figure className="ps-card" aria-hidden="true">
                  <img loading="lazy" src="/caseStudy/4fe93595-57b3-4c3f-92a2-795352538360.jpg" alt="" />
                </figure>
                <figure className="ps-card" aria-hidden="true">
                  <img loading="lazy" src="/caseStudy/84294108-9f28-476f-afd2-7a0930f492d1.jpg" alt="" />
                </figure>
                <figure className="ps-card" aria-hidden="true">
                  <img loading="lazy" src="/caseStudy/0eb1dc66-06e3-4bdf-b334-54a960e95881.jpg" alt="" />
                </figure>
                <figure className="ps-card" aria-hidden="true">
                  <img loading="lazy" src="/caseStudy/16b616d1-54e8-48c8-a4e0-70de19765a5a.jpg" alt="" />
                </figure>
                <figure className="ps-card" aria-hidden="true">
                  <img loading="lazy" src="/caseStudy/28bf97bb-7239-4deb-a84e-ee4f54997966.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <section id="overview">
          <span className="section-eyebrow">
            Product Overview
          </span>
          {" "}
          <p>
            A free Islamic learning platform built around a library of recitation, tafsir, hadith and course content recorded by an established institute. Most of the audio comes from in-person classes at the institute, which are then made available to learners worldwide.
          </p>
          <div className="po-snapshot" aria-label="Product at a glance">
            <div className="po-hero">
              <svg className="po-num-svg" viewBox="0 0 280 110" preserveAspectRatio="xMinYMid meet" aria-label="200K">
                <defs>
                  <linearGradient id="poNumGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1C2124" />
                    <stop offset="68%" stopColor="#1C2124" />
                    <stop offset="100%" stopColor="#7C7C7A" />
                  </linearGradient>
                </defs>
                <text x="0" y="92" fontFamily="inherit" fontWeight="800" fontSize="120" letterSpacing="-6" fill="url(#poNumGrad)">
                  200K
                </text>
              </svg>
              <div className="po-hero-meta">
                <div className="po-hero-key">
                  Daily users
                </div>
                <div className="po-hero-sub">
                  {"every single day, in "}
                  <em>
                    90+ countries
                  </em>
                  .
                </div>
              </div>
            </div>
            <ul className="po-grid" role="list">
              <li className="po-item">
                <span className="po-item-num">
                  1M
                  <span className="po-suffix">
                    +
                  </span>
                </span>
                {" "}
                <span className="po-item-meta">
                  <span className="po-item-key">
                    Downloads
                  </span>
                  {" "}
                  <span className="po-item-sub">
                    lifetime, both stores
                  </span>
                </span>
              </li>
              <li className="po-item">
                <span className="po-item-num">
                  20K
                  <span className="po-suffix">
                    +
                  </span>
                </span>
                {" "}
                <span className="po-item-meta">
                  <span className="po-item-key">
                    Audio files
                  </span>
                  {" "}
                  <span className="po-item-sub">
                    recitation, tafsir, hadith, courses
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section id="background">
          <span className="section-eyebrow">
            Background
          </span>
          {" "}
          <p className="bg-byline-line">
            {"Product Designer "}
            <span className="bg-byline-sep">
              ·
            </span>
            {" 8 months "}
            <span className="bg-byline-sep">
              ·
            </span>
            {" team of four (me + three juniors) "}
            <span className="bg-byline-sep">
              ·
            </span>
            {" Shipped to production"}
          </p>
          <div className="bg-letter is-open" data-bg-story="">
            <div className="bg-prose">
              <div className="bg-clamp">
                <p className="bg-story-lead">
                  A friend of mine who studies at Al-Huda Institute mentioned that the institute's app, Quran For All, felt outdated and was difficult to use. She wasn't asking me to do anything about it, she just brought it up in conversation. But the app interested me, so I downloaded it, spent some time with it, and put together a small UX audit on my own, mainly for my portfolio.
                </p>
              </div>
              <p className="bg-story-rest">
                When it was done, I sent it cold to Dr. Farhat Hashmi, the founder of Al-Huda and the owner of the app, without knowing anyone there. To my surprise she liked it and forwarded it to the head of the IT team, who by coincidence had already been thinking about a redesign. After a few conversations, they hired me to lead it.
              </p>
              <p className="bg-story-rest">
                {"What followed was eight months of work, from audit and research through IA, UI and handoff, with a small rotating team of two junior visual designers and one junior UX researcher. I owned the strategy, the information architecture and the design system. The redesign shipped to production, and I stayed on to re-test the same tasks against the shipped build. Those numbers are in "}
                <a href="#impact">
                  Where it stands
                </a>
                .
              </p>
            </div>
          </div>
        </section>
        <section id="problem">
          <span className="section-eyebrow">
            The Problem
          </span>
          {" "}
          <p className="deck">
            <b>
              <span className="big-num">
                200K
              </span>
              {" people open this app every day"}
            </b>
            {", some to find a specific lecture, some to discover something new, some to continue a course they're halfway through. The app holds "}
            <b>
              <span className="big-num">
                20K
              </span>
              {" lectures"}
            </b>
            {", but scatters them across "}
            <b>
              <span className="big-num">
                19
              </span>
              {" categories rendered as twenty identical green tiles"}
            </b>
            , with daily features hidden in a three-dot menu, and once you finally start a lecture the player gets in the way. The challenge was to fix all of this without breaking the habits 200,000 people had already built.
          </p>
        </section>
        <section id="research">
          <h2 style={{"borderLeft":"2.4px solid rgb(28,33,36)","paddingLeft":"14px"}}>
            How I got to the problem
          </h2>
          <p style={{"marginTop":"18px"}}>
            Before designing anything, I needed to understand what was actually breaking. I looked at the app from three angles: the screens themselves, what users said about them, and what users actually did with them.
          </p>
          <div style={{"display":"flex","alignItems":"baseline","flexWrap":"wrap","gap":"10px 18px","margin":"22px 0 0","paddingTop":"16px","borderTop":"1px solid rgba(20,24,26,0.10)","fontSize":"13px","color":"rgba(20,24,26,0.62)"}}>
            <span style={{"fontSize":"11px","letterSpacing":"0.14em","textTransform":"uppercase","color":"rgba(20,24,26,0.5)","fontWeight":"600"}}>
              In this section
            </span>
            <span>
              <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                01
              </b>
              {" Screen audit"}
            </span>
            <span style={{"color":"rgba(20,24,26,0.25)"}}>
              ·
            </span>
            <span>
              <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                02
              </b>
              {" Survey"}
            </span>
            <span style={{"color":"rgba(20,24,26,0.25)"}}>
              ·
            </span>
            <span>
              <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                03
              </b>
              {" Usability sessions"}
            </span>
          </div>
          <h3>
            <span style={{"color":"rgb(28,33,36)","fontWeight":"600","marginRight":"6px"}}>
              01
            </span>
            <span style={{"color":"rgba(20,24,26,0.4)","marginRight":"8px"}}>
              ·
            </span>
            Screen audit
          </h3>
          <p>
            Three screens tell most of the story: a 20-tile home grid with no hierarchy, a kebab menu hiding the features users needed most, and a playback bar with seven controls crammed into a single strip.
          </p>
          <div className="phones before">
            <div className="phone">
              <img loading="lazy" src="/caseStudy/600e285b-682d-4b10-a0e8-626ddb1b1864.jpg" alt="Old home screen: 20 green tiles" />
            </div>
            <div className="phone">
              <img loading="lazy" src="/caseStudy/2bde4e0b-205b-44e8-a858-e8d8676f107a.jpg" alt="Old kebab menu with Bookmarks, Search, Downloads" />
            </div>
            <div className="phone">
              <img loading="lazy" src="/caseStudy/5d68d6c6-c9fe-4d2e-a7a9-30f4772d9bff.jpg" alt="Old playback bar: 7 controls crammed together" />
            </div>
          </div>
          <p className="cap">
            <b>
              Before.
            </b>
            {" The old app's three main surfaces: the home grid, the kebab menu, and the playback bar."}
          </p>
          <p style={{"marginTop":"28px"}}>
            Even from the screenshots alone, the problems add up quickly:
          </p>
          <ol className="audit-list" aria-label="Designer's audit of the old design">
            <li className="audit-row">
              <span className="audit-num">
                01
              </span>
              {" "}
              <span className="audit-body">
                <b>
                  Twenty identical green tiles.
                </b>
                {" No hierarchy, no grouping, no recency cues, and a mixed taxonomy (broad categories like Al-Qur'an and Hadith sitting beside specific items like Switch Language and Featured)."}
              </span>
            </li>
            <li className="audit-row">
              <span className="audit-num">
                02
              </span>
              {" "}
              <span className="audit-body">
                <b>
                  Critical features hidden in a kebab menu.
                </b>
                {" Search, Bookmarks, Downloads, Continue Last Audio, and Settings all sit behind a single three-dot tap in the top corner."}
              </span>
            </li>
            <li className="audit-row">
              <span className="audit-num">
                03
              </span>
              {" "}
              <span className="audit-body">
                <b>
                  No persistent bottom navigation.
                </b>
                {" Every navigation move requires a trip back to the top-corner menu."}
              </span>
            </li>
            <li className="audit-row">
              <span className="audit-num">
                04
              </span>
              {" "}
              <span className="audit-body">
                <b>
                  A setting masquerading as a destination.
                </b>
                {" \"Switch Language\" sits on the home grid as if it were content."}
              </span>
            </li>
            <li className="audit-row">
              <span className="audit-num">
                05
              </span>
              {" "}
              <span className="audit-body">
                <b>
                  Seven controls competing in the playback bar.
                </b>
                {" Stop · Share · Download · Bookmark · Fullscreen · 1.1× · an unlabeled slider, all in one row."}
              </span>
            </li>
            <li className="audit-row">
              <span className="audit-num">
                06
              </span>
              {" "}
              <span className="audit-body">
                <b>
                  No state indicators anywhere.
                </b>
                {" No way to see what's saved, downloaded, or already played."}
              </span>
            </li>
          </ol>
          <p style={{"marginTop":"28px"}}>
            I ran two tracks in parallel: a bilingual survey distributed through the existing user community, and moderated usability sessions with real users on their own devices.
          </p>
          <div className="method-block">
            <div className="method-head">
              <div className="method-head-text">
                <h3 id="survey">
                  <span style={{"color":"rgb(28,33,36)","fontWeight":"600","marginRight":"6px"}}>
                    02
                  </span>
                  <span style={{"color":"rgba(20,24,26,0.4)","marginRight":"8px"}}>
                    ·
                  </span>
                  Survey
                </h3>
                <p className="method-lede">
                  A bilingual Google Form sent out where the audience already spent their time. The goal was to understand how widespread the problems were, rather than to test a specific hypothesis.
                </p>
              </div>
              <figure className="method-gallery" data-gallery="" data-images={RESEARCH_IMAGES}>
                <div className="mg-frame">
                  <button type="button" className="mg-img-btn" data-mg-frame="" aria-label="Open larger">
                    <img loading="lazy" alt="Survey screenshot" data-mg-img="" />
                  </button>
                  {" "}
                  <button type="button" className="mg-nav mg-nav--prev" data-mg-prev="" aria-label="Previous screenshot">
                    ‹
                  </button>
                  {" "}
                  <button type="button" className="mg-nav mg-nav--next" data-mg-next="" aria-label="Next screenshot">
                    ›
                  </button>
                  {" "}
                  <div className="mg-dots" data-mg-dots="" aria-hidden="true" />
                </div>
              </figure>
            </div>
            <div className="method-stats">
              <div className="method-stat">
                <span className="ms-num">
                  ~1,900
                </span>
                <span className="ms-lbl">
                  Responses
                </span>
              </div>
              <div className="method-stat">
                <span className="ms-num">
                  3 weeks
                </span>
                <span className="ms-lbl">
                  Collection window
                </span>
              </div>
              <div className="method-stat">
                <span className="ms-num">
                  55+
                </span>
                <span className="ms-lbl">
                  Questions
                </span>
              </div>
            </div>
            <dl className="method-rows">
              <div className="method-row">
                <dt className="method-key">
                  Format
                </dt>
                <dd className="method-val">
                  {"Bilingual Google Form, "}
                  <b>
                    English + Urdu
                  </b>
                  {" (~60/40 response split)."}
                </dd>
              </div>
              <div className="method-row">
                <dt className="method-key">
                  Distribution
                </dt>
                <dd className="method-val">
                  {"WhatsApp groups and Al-Huda channels where users were already active, plus an "}
                  <b>
                    in-app banner
                  </b>
                  .
                </dd>
              </div>
              <div className="method-row">
                <dt className="method-key">
                  Themes
                </dt>
                <dd className="method-val">
                  <b>
                    Context
                  </b>
                  {" · "}
                  <b>
                    Home
                  </b>
                  {" · "}
                  <b>
                    Features
                  </b>
                  {" · "}
                  <b>
                    Player
                  </b>
                </dd>
              </div>
            </dl>
            <p className="method-caveat">
              <b>
                Read this as self-report.
              </b>
              {" The survey captures what ~1,900 people "}
              <em>
                say
              </em>
              {" they do. The sessions and the screen audit are where behaviour was actually observed. The app had no analytics at the time, so self-report was the only way to get any sense of scale. Adding real usage tracking was my first recommendation for the next cycle."}
            </p>
            <p className="method-links">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFfGACP9-84hLljVRtrbC-TqfwjWZGZ9Eu-tEfhwem4b16GQ/viewform" target="_blank" rel="noopener">
                View the original survey form →
              </a>
            </p>
          </div>
          <div className="method-block">
            <div className="method-head">
              <div className="method-head-text">
                <h3 id="sessions">
                  <span style={{"color":"rgb(28,33,36)","fontWeight":"600","marginRight":"6px"}}>
                    03
                  </span>
                  <span style={{"color":"rgba(20,24,26,0.4)","marginRight":"8px"}}>
                    ·
                  </span>
                  Usability sessions
                </h3>
                <p className="method-lede">
                  Six moderated remote sessions on users' own devices, with every task measured against targets we had agreed in advance.
                </p>
              </div>
              <figure className="method-gallery" data-gallery="" data-images={RESEARCH_IMAGES}>
                <div className="mg-frame">
                  <button type="button" className="mg-img-btn" data-mg-frame="" aria-label="Open larger">
                    <img loading="lazy" alt="Session screenshot" data-mg-img="" />
                  </button>
                  {" "}
                  <button type="button" className="mg-nav mg-nav--prev" data-mg-prev="" aria-label="Previous screenshot">
                    ‹
                  </button>
                  {" "}
                  <button type="button" className="mg-nav mg-nav--next" data-mg-next="" aria-label="Next screenshot">
                    ›
                  </button>
                  {" "}
                  <div className="mg-dots" data-mg-dots="" aria-hidden="true" />
                </div>
              </figure>
            </div>
            <div className="method-stats">
              <div className="method-stat">
                <span className="ms-num">
                  6
                </span>
                <span className="ms-lbl">
                  Moderated sessions
                </span>
              </div>
              <div className="method-stat">
                <span className="ms-num">
                  45 min
                </span>
                <span className="ms-lbl">
                  Per-session cap
                </span>
              </div>
              <div className="method-stat">
                <span className="ms-num">
                  A · B · C
                </span>
                <span className="ms-lbl">
                  Three task groups
                </span>
              </div>
            </div>
            <dl className="method-rows">
              <div className="method-row">
                <dt className="method-key">
                  Format
                </dt>
                <dd className="method-val">
                  Google Meet · screen share · think-aloud · time tracker.
                </dd>
              </div>
              <div className="method-row">
                <dt className="method-key">
                  Group A
                </dt>
                <dd className="method-val">
                  {"The daily loop, "}
                  <b>
                    playback, downloads, bookmarks
                  </b>
                  .
                </dd>
              </div>
              <div className="method-row">
                <dt className="method-key">
                  Group B
                </dt>
                <dd className="method-val">
                  <b>
                    Settings, search, Hadith.
                  </b>
                </dd>
              </div>
              <div className="method-row">
                <dt className="method-key">
                  Group C
                </dt>
                <dd className="method-val">
                  <b>
                    Playlists, sharing, accessibility.
                  </b>
                </dd>
              </div>
              <div className="method-row">
                <dt className="method-key">
                  Measured per task
                </dt>
                <dd className="method-val">
                  Time-on-task · first-click success · error count · hesitation · 1–5 ease rating.
                </dd>
              </div>
              <div className="method-row method-row--target">
                <dt className="method-key">
                  Agreed targets
                </dt>
                <dd className="method-val">
                  {"80% completion · ≥70% first-click · ≤1 error · ≥4/5 ease. "}
                  <a href="#impact">
                    Results →
                  </a>
                </dd>
              </div>
            </dl>
            <p className="method-caveat">
              <b>
                Small n, read as directional.
              </b>
              {" Six sessions is enough to find where a screen breaks, but not enough to say how often it happens. Participants are referred to by code (P1, P2 and so on). The task log further down comes from two of the six sessions, and every session finding in this study is either backed up by the survey at scale or flagged as unproven."}
            </p>
          </div>
          <div className="ev-lightbox" id="evLightbox" role="dialog" aria-modal="true" aria-label="Screenshot preview" hidden>
            <div className="ev-lightbox-inner">
              <button type="button" className="ev-lightbox-close" aria-label="Close">
                ×
              </button>
              {" "}
              <button type="button" className="ev-lightbox-nav ev-lightbox-nav--prev" aria-label="Previous">
                ‹
              </button>
              {" "}
              <img loading="lazy" alt="" />
              {" "}
              <button type="button" className="ev-lightbox-nav ev-lightbox-nav--next" aria-label="Next">
                ›
              </button>
              {" "}
              <div className="ev-lightbox-cap" />
            </div>
          </div>
        </section>
        <section id="findings">
          <h2 style={{"borderLeft":"2.4px solid rgb(28,33,36)","paddingLeft":"14px"}}>
            What I heard
          </h2>
          <p style={{"marginTop":"18px"}}>
            The research surfaced four problems sitting under everything else. One was structural, and the other three depended on what brought each user to the app in the first place. The pages below go through them in order.
          </p>
          <div style={{"display":"flex","alignItems":"baseline","flexWrap":"wrap","gap":"10px 18px","margin":"22px 0 0","paddingTop":"16px","borderTop":"1px solid rgba(20,24,26,0.10)","fontSize":"13px","color":"rgba(20,24,26,0.62)"}}>
            <span style={{"fontSize":"11px","letterSpacing":"0.14em","textTransform":"uppercase","color":"rgba(20,24,26,0.5)","fontWeight":"600"}}>
              In this section
            </span>
            <span style={{"fontWeight":"900"}}>
              Foundation
            </span>
            <span style={{"color":"rgba(20,24,26,0.25)"}}>
              ·
            </span>
            <span>
              <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                01
              </b>
              {" Find"}
            </span>
            <span style={{"color":"rgba(20,24,26,0.25)"}}>
              ·
            </span>
            <span>
              <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                02
              </b>
              {" Return"}
            </span>
            <span style={{"color":"rgba(20,24,26,0.25)"}}>
              ·
            </span>
            <span>
              <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                03
              </b>
              {" Explore"}
            </span>
          </div>
          <div className="findings-opening">
            <p>
              <b>
                Intent
              </b>
              {" is the reason someone opens the app, the job they need it to do in that moment. It isn't a feature or a screen, it's simply the "}
              <em>
                why
              </em>
              .
            </p>
            <p>
              Across the survey and the sessions, three intents kept surfacing.
            </p>
            <div className="intents-grid" style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(220px, 1fr))","gap":"20px","margin":"28px 0 12px"}}>
              <div style={{"borderTop":"2px solid rgb(28,33,36)","paddingTop":"14px"}}>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11.5px","letterSpacing":"0.2em","textTransform":"uppercase","color":"rgba(28,33,36,0.75)","fontWeight":"700","marginBottom":"12px"}}>
                  Intent 01
                </div>
                <div style={{"fontFamily":"'Neulis Cursive', 'DM Sans', sans-serif","fontSize":"36px","lineHeight":"1.1","color":"#1C2124","fontWeight":"700","letterSpacing":"-0.02em","marginBottom":"16px"}}>
                  Find
                </div>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"#1C2124","marginBottom":"14px"}}>
                  The user already knows what they want, like a specific scholar or a title they remember.
                </div>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"15px","lineHeight":"1.55","color":"#3A4145"}}>
                  <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                    The job:
                  </b>
                  {" retrieval, the shortest path from home to one lecture."}
                </div>
              </div>
              <div style={{"borderTop":"2px solid rgb(28,33,36)","paddingTop":"14px"}}>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11.5px","letterSpacing":"0.2em","textTransform":"uppercase","color":"rgba(28,33,36,0.75)","fontWeight":"700","marginBottom":"12px"}}>
                  Intent 02
                </div>
                <div style={{"fontFamily":"'Neulis Cursive', 'DM Sans', sans-serif","fontSize":"36px","lineHeight":"1.1","color":"#1C2124","fontWeight":"700","letterSpacing":"-0.02em","marginBottom":"16px"}}>
                  Return
                </div>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"#1C2124","marginBottom":"14px"}}>
                  The user is in the middle of something, like a series they started weeks ago or a lecture they paused on a commute.
                </div>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"15px","lineHeight":"1.55","color":"#3A4145"}}>
                  <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                    The job:
                  </b>
                  {" resume, not re-pick."}
                </div>
              </div>
              <div style={{"borderTop":"2px solid rgb(28,33,36)","paddingTop":"14px"}}>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11.5px","letterSpacing":"0.2em","textTransform":"uppercase","color":"rgba(28,33,36,0.75)","fontWeight":"700","marginBottom":"12px"}}>
                  Intent 03
                </div>
                <div style={{"fontFamily":"'Neulis Cursive', 'DM Sans', sans-serif","fontSize":"36px","lineHeight":"1.1","color":"#1C2124","fontWeight":"700","letterSpacing":"-0.02em","marginBottom":"16px"}}>
                  Explore
                </div>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"#1C2124","marginBottom":"14px"}}>
                  The user has no particular goal. They opened the app out of habit, curiosity, or because they had a few minutes free.
                </div>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"15px","lineHeight":"1.55","color":"#3A4145"}}>
                  <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                    The job:
                  </b>
                  {" be shown something worth listening to."}
                </div>
              </div>
            </div>
            <p>
              {"When stakeholders made the call to prioritize current users over new ones, the research already pointed the same way. "}
              <em>
                Find
              </em>
              {" and "}
              <em>
                Return
              </em>
              {" are where this redesign focused."}
            </p>
          </div>
          <div className="findings-lead-quote">
            {" \"Everything is excellent, the content changes lives. The interface is what holds it back.\" "}
            <span className="src">
              — Survey response, long-time user
            </span>
          </div>
          <p>
            One message ran through every channel:
          </p>
          <blockquote className="editorial-pq">
            <p>
              <span>
                Users didn't need new features,
              </span>
              <span>
                they needed the existing ones to work better.
              </span>
            </p>
          </blockquote>
          <article className="intent-block">
            <div className="intent-side" style={{"marginBottom":"0"}}>
              <div style={{"display":"flex","alignItems":"baseline","justifyContent":"space-between","gap":"24px","marginBottom":"14px"}}>
                <h3 className="intent-head" style={{"margin":"0"}}>
                  Foundation
                </h3>
                <a href="#" style={{"fontSize":"13px","fontWeight":"500","letterSpacing":"0.02em","color":"rgb(28,33,36)","textDecoration":"none","borderBottom":"1px solid rgba(28,33,36,0.35)","paddingBottom":"2px","whiteSpace":"nowrap"}}>
                  Iterations of core app structure +
                </a>
              </div>
              <p style={{"margin":"0","fontSize":"16px","lineHeight":"1.7","color":"rgba(28,33,36,0.86)"}}>
                <b style={{"color":"#1C2124","fontWeight":"700"}}>
                  The navigation itself was broken.
                </b>
                {" A top-corner kebab menu hid every daily feature, and a 20-tile home grid offered no hierarchy. "}
                <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"22px","color":"rgb(28,33,36)","fontWeight":"600","letterSpacing":"-0.01em"}}>
                  37%
                </span>
                {" of survey respondents skipped the top feature bar entirely, and "}
                <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"22px","color":"rgb(28,33,36)","fontWeight":"600","letterSpacing":"-0.01em"}}>
                  55%
                </span>
                {" never used Search. The structure itself was failing every kind of user before any intent-specific problem could even surface."}
              </p>
              <div style={{"display":"flex","alignItems":"baseline","gap":"10px","margin":"18px 0 0","paddingTop":"14px","borderTop":"1px solid rgba(28,33,36,0.10)","fontSize":"14.5px","lineHeight":"1.55","color":"rgba(28,33,36,0.75)"}}>
                <span style={{"color":"rgb(28,33,36)","fontWeight":"700","flexShrink":"0"}}>
                  →
                </span>
                <span>
                  <b style={{"color":"rgb(28,33,36)","fontWeight":"700","letterSpacing":"0.02em","textTransform":"uppercase","fontSize":"11px","marginRight":"6px"}}>
                    Pointed toward
                  </b>
                  {" a persistent bottom nav (Home · Browse · Library · Search), replacing the kebab."}
                </span>
              </div>
            </div>
          </article>
          <article className="intent-block">
            <div className="intent-side">
              <h3 className="intent-head" style={{"margin":"0 0 12px"}}>
                <span style={{"color":"rgb(28,33,36)","fontWeight":"700","marginRight":"8px"}}>
                  01
                </span>
                <span style={{"color":"rgba(20,24,26,0.4)","marginRight":"10px","fontWeight":"400"}}>
                  ·
                </span>
                Find
              </h3>
              <p className="intent-desc">
                They knew what they wanted, whether a teacher, a topic or a verse they'd been told about, and were trying to reach it.
              </p>
            </div>
            <div className="intent-body">
              <h4 className="intent-sub">
                What surfaced
              </h4>
              <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(220px, 1fr))","gap":"24px","margin":"8px 0 30px"}}>
                <div style={{"padding":"16px 0 0","borderTop":"1px solid rgba(28,33,36,0.22)"}}>
                  <div style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"56px","lineHeight":"1","color":"rgb(28,33,36)","fontWeight":"500","letterSpacing":"-0.03em","marginBottom":"10px"}}>
                    55%
                  </div>
                  <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11px","letterSpacing":"0.18em","textTransform":"uppercase","color":"rgba(28,33,36,0.75)","fontWeight":"700","marginBottom":"12px"}}>
                    of survey respondents
                  </div>
                  <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"15.5px","lineHeight":"1.55","color":"#1C2124"}}>
                    never used the Search feature. For more than half the audience, it effectively didn’t exist.
                  </div>
                </div>
                <div style={{"padding":"16px 0 0","borderTop":"1px solid rgba(28,33,36,0.22)"}}>
                  <div style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"56px","lineHeight":"1","color":"rgb(28,33,36)","fontWeight":"500","letterSpacing":"-0.03em","marginBottom":"10px"}}>
                    37%
                  </div>
                  <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11px","letterSpacing":"0.18em","textTransform":"uppercase","color":"rgba(28,33,36,0.75)","fontWeight":"700","marginBottom":"12px"}}>
                    of survey respondents
                  </div>
                  <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"15.5px","lineHeight":"1.55","color":"#1C2124"}}>
                    didn’t use the top feature bar at all. Skipping the bar (and the kebab inside it) was the normal behaviour rather than the exception.
                  </div>
                </div>
              </div>
              <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11px","letterSpacing":"0.18em","textTransform":"uppercase","color":"rgba(20,24,26,0.55)","fontWeight":"700","margin":"0 0 14px","paddingBottom":"10px","borderBottom":"1px solid rgba(20,24,26,0.12)"}}>
                In observation
              </div>
              <div style={{"display":"grid","gap":"14px","marginBottom":"22px"}}>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    01
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    <em>
                      “Please make the search option easier, searching a topic is very difficult.”
                    </em>
                    {" — Survey response, translated from Urdu."}
                  </span>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    02
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    In sessions, users couldn’t reach specific lectures without guidance. The audience had been navigating socially, by asking peers, teachers and fellow students. The app’s search and taxonomy needed to do the job that this social network had quietly been doing for them.
                  </span>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    03
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    Audit observations: Search hidden in a kebab. Library taxonomy mixed broad categories (
                    <em>
                      Al-Qur’an, Hadith
                    </em>
                    ) with specific courses (
                    <em>
                      Ulum Al-Qur’an 2002
                    </em>
                    ), with no usage data behind the 19 categories until the survey.
                  </span>
                </div>
              </div>
              <h4 className="intent-sub">
                What this pointed toward
              </h4>
              <ul className="intent-set">
                <li>
                  Bottom tab navigation, Search as a top-level tab
                </li>
                <li>
                  Library + Browse coexistence, preserve the old structure for users who knew it; trim 19 → 12 categories based on actual usage
                </li>
                <li>
                  Taxonomy cleanup, categories within categories, courses one level deeper
                </li>
              </ul>
            </div>
          </article>
          <article className="intent-block">
            <div className="intent-side">
              <h3 className="intent-head" style={{"margin":"0 0 12px"}}>
                <span style={{"color":"rgb(28,33,36)","fontWeight":"700","marginRight":"8px"}}>
                  02
                </span>
                <span style={{"color":"rgba(20,24,26,0.4)","marginRight":"10px","fontWeight":"400"}}>
                  ·
                </span>
                Return
              </h3>
              <p className="intent-desc">
                They had something they were already engaged with, such as a tafsir series they were halfway through, a downloaded lecture or a sermon they'd saved, and wanted to come back to it.
              </p>
            </div>
            <div className="intent-body">
              <h4 className="intent-sub">
                What surfaced
              </h4>
              <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(220px, 1fr))","gap":"24px","margin":"8px 0 30px"}}>
                <div style={{"padding":"16px 0 0","borderTop":"1px solid rgba(28,33,36,0.22)"}}>
                  <div style={{"display":"grid","gridTemplateColumns":"repeat(3,1fr)","gap":"14px","marginBottom":"14px"}}>
                    <div>
                      <div style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"40px","lineHeight":"1","color":"rgb(28,33,36)","fontWeight":"500","letterSpacing":"-0.03em"}}>
                        88%
                      </div>
                      <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11px","letterSpacing":"0.16em","textTransform":"uppercase","color":"rgba(28,33,36,0.75)","fontWeight":"700","marginTop":"6px"}}>
                        Playback
                      </div>
                    </div>
                    <div>
                      <div style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"40px","lineHeight":"1","color":"rgb(28,33,36)","fontWeight":"500","letterSpacing":"-0.03em"}}>
                        71%
                      </div>
                      <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11px","letterSpacing":"0.16em","textTransform":"uppercase","color":"rgba(28,33,36,0.75)","fontWeight":"700","marginTop":"6px"}}>
                        Downloads
                      </div>
                    </div>
                    <div>
                      <div style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"40px","lineHeight":"1","color":"rgb(28,33,36)","fontWeight":"500","letterSpacing":"-0.03em"}}>
                        54%
                      </div>
                      <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11px","letterSpacing":"0.16em","textTransform":"uppercase","color":"rgba(28,33,36,0.75)","fontWeight":"700","marginTop":"6px"}}>
                        Favorites
                      </div>
                    </div>
                  </div>
                  <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"15.5px","lineHeight":"1.55","color":"#1C2124"}}>
                    Three actions carried the entire daily habit (self-reported use, survey, n≈1,900). Everything else was occasional.
                  </div>
                </div>
                <div style={{"padding":"16px 0 0","borderTop":"1px solid rgba(28,33,36,0.22)"}}>
                  <div style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"56px","lineHeight":"1","color":"rgb(28,33,36)","fontWeight":"500","letterSpacing":"-0.03em","marginBottom":"10px"}}>
                    2.1/5
                  </div>
                  <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11px","letterSpacing":"0.18em","textTransform":"uppercase","color":"rgba(28,33,36,0.75)","fontWeight":"700","marginBottom":"12px"}}>
                    player ease
                  </div>
                  <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"15.5px","lineHeight":"1.55","color":"#1C2124"}}>
                    The lowest-rated task in the audit. The screen users opened most was also the one they trusted least.
                  </div>
                </div>
              </div>
              <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11px","letterSpacing":"0.18em","textTransform":"uppercase","color":"rgba(20,24,26,0.55)","fontWeight":"700","margin":"0 0 14px","paddingBottom":"10px","borderBottom":"1px solid rgba(20,24,26,0.12)"}}>
                In observation
              </div>
              <div style={{"display":"grid","gap":"14px","marginBottom":"22px"}}>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    01
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    {"P1 (daily user, 7 months in) made "}
                    <b>
                      4 errors
                    </b>
                    {" trying to scrub to a 30-minute mark."}
                  </span>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    02
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    {"P2’s first download took "}
                    <b>
                      3 minutes
                    </b>
                    {" of guessing, with no progress state and no storage indicator."}
                  </span>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    03
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    {"Continue Last Audio was "}
                    <b>
                      2 taps + a kebab menu
                    </b>
                    {" away. Resuming was harder than starting over."}
                  </span>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    04
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    <b>
                      60%
                    </b>
                    {" of respondents had saved something they later couldn’t find. "}
                    <b>
                      31%
                    </b>
                    {" of free-text answers used some variation of "}
                    <em>
                      “I can’t find the lecture I saved last week.”
                    </em>
                  </span>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    05
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    <b>
                      Bookmarks (21%)
                    </b>
                    {" and "}
                    <b>
                      Favorites (54%)
                    </b>
                    {" were two features doing the same job. A recurring complaint: "}
                    <em>
                      “Why do I have both Bookmarks and Favorites?”
                    </em>
                  </span>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    06
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    <b>
                      17%
                    </b>
                    {" of respondents mentioned the player explicitly. The most common complaint: hidden speed control."}
                  </span>
                </div>
              </div>
              <div className="tasks">
                <div className="row">
                  <span>
                    Task
                  </span>
                  {" "}
                  <span className="who">
                    Participant
                  </span>
                  {" "}
                  <span className="time">
                    Time
                  </span>
                  {" "}
                  <span className="status">
                    Outcome
                  </span>
                </div>
                <div className="row">
                  <span className="task">
                    Bookmark a Surah to listen later
                  </span>
                  {" "}
                  <span className="who">
                    P1 · daily user, 7 months
                  </span>
                  {" "}
                  <span className="time">
                    120s
                  </span>
                  {" "}
                  <span className="status fail">
                    Failed
                  </span>
                </div>
                <div className="row">
                  <span className="task">
                    Find your bookmarked Surahs
                  </span>
                  {" "}
                  <span className="who">
                    P2 · new user
                  </span>
                  {" "}
                  <span className="time">
                    1m 25s
                  </span>
                  {" "}
                  <span className="status slow">
                    Confused
                  </span>
                </div>
                <div className="row">
                  <span className="task">
                    Check if a Surah is already saved
                  </span>
                  {" "}
                  <span className="who">
                    {"P1 & P2 · 0 of 2"}
                  </span>
                  {" "}
                  <span className="time">
                    —
                  </span>
                  {" "}
                  <span className="status fail">
                    Failed
                  </span>
                </div>
                <div className="row">
                  <span className="task">
                    Seek to 30 minutes into a lecture
                  </span>
                  {" "}
                  <span className="who">
                    P1
                  </span>
                  {" "}
                  <span className="time">
                    40s · 4 errors
                  </span>
                  {" "}
                  <span className="status fail">
                    Failed
                  </span>
                </div>
                <div className="row">
                  <span className="task">
                    Download a lecture for offline use
                  </span>
                  {" "}
                  <span className="who">
                    P2 (first attempt)
                  </span>
                  {" "}
                  <span className="time">
                    3 min
                  </span>
                  {" "}
                  <span className="status slow">
                    Completed
                  </span>
                </div>
              </div>
              <div className="quote">
                {" \"The slider can be improved. The download UI can improve too.\" "}
                <span className="src">
                  — P1, daily listener, after 4+ errors trying a second download path
                </span>
              </div>
              <h4 className="intent-sub">
                What this pointed toward
              </h4>
              <ul className="intent-set">
                <li>
                  Home as a personal dashboard, Recently Played at the top
                </li>
                <li>
                  Playback rebuilt as two surfaces, persistent mini player + full-screen player
                </li>
                <li>
                  Series view as its own pattern, Play, Download, Favorite as primary actions
                </li>
                <li>
                  Bookmarks killed · Favorites renamed to Favorite Audios · Favorite Series added
                </li>
                <li>
                  Visible state throughout, every audio row shows whether it's saved, downloaded, or already played; scrub bar with timestamps, status tabs on series, green check on downloaded
                </li>
              </ul>
            </div>
          </article>
          <article className="intent-block intent-block--minor">
            <div className="intent-side">
              <h3 className="intent-head" style={{"margin":"0 0 12px"}}>
                <span style={{"color":"rgb(28,33,36)","fontWeight":"700","marginRight":"8px"}}>
                  03
                </span>
                <span style={{"color":"rgba(20,24,26,0.4)","marginRight":"10px","fontWeight":"400"}}>
                  ·
                </span>
                Explore
              </h3>
              <p className="intent-desc">
                This was the smallest segment by far. The redesign acknowledged it but didn't fully solve it.
              </p>
            </div>
            <div className="intent-body">
              <h4 className="intent-sub">
                What surfaced
              </h4>
              <div style={{"padding":"20px 0 22px","borderTop":"1px solid rgba(28,33,36,0.22)","borderBottom":"1px solid rgba(28,33,36,0.22)","margin":"8px 0 30px"}}>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11px","letterSpacing":"0.18em","textTransform":"uppercase","color":"rgba(28,33,36,0.75)","fontWeight":"700","marginBottom":"14px"}}>
                  From a session
                </div>
                <blockquote style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontStyle":"italic","fontSize":"22px","lineHeight":"1.4","color":"#1C2124","fontWeight":"400","letterSpacing":"-0.01em","margin":"0 0 14px","padding":"0","border":"0","maxWidth":"60ch"}}>
                  “At first I don’t know how to use the app. It’s difficult at the start.”
                </blockquote>
                <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"13px","color":"rgba(20,24,26,0.6)","fontWeight":"500"}}>
                  P1, daily user, 7 months in
                </div>
              </div>
              <div style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"11px","letterSpacing":"0.18em","textTransform":"uppercase","color":"rgba(20,24,26,0.55)","fontWeight":"700","margin":"0 0 14px","paddingBottom":"10px","borderBottom":"1px solid rgba(20,24,26,0.12)"}}>
                In observation
              </div>
              <div style={{"display":"grid","gap":"14px","marginBottom":"22px"}}>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    01
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    The audience composition itself made Explore a minority intent. Most users arrived already knowing what they wanted, or were referred by someone who did.
                  </span>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    02
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    Even committed users felt onboarding friction. The need for clearer onboarding was real, but the population that would benefit was relatively small.
                  </span>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    03
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    Stakeholders made the call early to prioritize current users over new ones. The redesign followed that call.
                  </span>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"36px 1fr","gap":"14px","alignItems":"baseline"}}>
                  <span style={{"fontFamily":"'Times New Roman', Times, Georgia, serif","fontSize":"18px","color":"rgb(28,33,36)","fontWeight":"500","lineHeight":"1.5"}}>
                    04
                  </span>
                  <span style={{"fontFamily":"'DM Sans', sans-serif","fontSize":"16px","lineHeight":"1.6","color":"rgba(28,33,36,0.86)"}}>
                    I built a Browse tab and a first-run onboarding flow to cover this intent, but didn’t research it as deeply as Find and Return.
                  </span>
                </div>
              </div>
              <h4 className="intent-sub">
                What this pointed toward
              </h4>
              <ul className="intent-set">
                <li>
                  Browse tab, a lighter, topic-based entry point separate from Library
                </li>
                <li>
                  First-run onboarding, four-tab explainer + language preference + notification ask
                </li>
                <li className="intent-set-note">
                  <em>
                    Flagged for the next research cycle.
                  </em>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section id="redesign">
          <h2 style={{"borderLeft":"2.4px solid rgb(28,33,36)","paddingLeft":"14px"}}>
            The redesign
          </h2>
          <p>
            Three kinds of users kept showing up in the research: people looking for something specific, people coming back to what they'd already heard, and people who didn't know where to start.
          </p>
          <p style={{"marginTop":"14px"}}>
            {"The redesign helps all three. But first it had to fix one thing that made life harder for every one of them: "}
            <b>
              the app had no navigation.
            </b>
          </p>
          <div style={{"display":"flex","alignItems":"baseline","flexWrap":"wrap","gap":"10px 18px","margin":"22px 0 0","paddingTop":"16px","borderTop":"1px solid rgba(20,24,26,0.10)","fontSize":"13px","color":"rgba(20,24,26,0.62)"}}>
            <span style={{"fontSize":"11px","letterSpacing":"0.14em","textTransform":"uppercase","color":"rgba(20,24,26,0.5)","fontWeight":"600"}}>
              In this section
            </span>
            <span style={{"fontWeight":"900"}}>
              Foundation
            </span>
            <span style={{"color":"rgba(20,24,26,0.25)"}}>
              ·
            </span>
            <span>
              <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                01
              </b>
              {" Find"}
            </span>
            <span style={{"color":"rgba(20,24,26,0.25)"}}>
              ·
            </span>
            <span>
              <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                02
              </b>
              {" Return"}
            </span>
            <span style={{"color":"rgba(20,24,26,0.25)"}}>
              ·
            </span>
            <span>
              <b style={{"color":"rgb(28,33,36)","fontWeight":"700"}}>
                03
              </b>
              {" Explore"}
            </span>
          </div>
          <div style={{"display":"flex","alignItems":"baseline","justifyContent":"space-between","gap":"24px","marginTop":"48px","flexWrap":"wrap"}}>
            <h3 id="decision-foundation" className="intent-head" style={{"margin":"0"}}>
              Foundation
            </h3>
          </div>
          <p>
            {"The old app had no persistent navigation, so every move went back through a kebab menu in the top corner. The redesign introduces a "}
            <b>
              four-tab bottom bar
            </b>
            {" visible on every screen."}
          </p>
          <p>
            <b>
              Home · Browse · Library · Search.
            </b>
            {" Four tabs, each mapped to a single behavior: "}
            <em>
              Home
            </em>
            {" is the user's own activity, "}
            <em>
              Browse
            </em>
            {" is discovery, "}
            <em>
              Library
            </em>
            {" is structured content, "}
            <em>
              Search
            </em>
            {" is direct retrieval."}
          </p>
          <div className="ba">
            <div className="ba-pair">
              <div className="before-card">
                <span className="tag">
                  Before
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/600e285b-682d-4b10-a0e8-626ddb1b1864.jpg" alt="Old home: 20 green tiles and a hidden kebab" />
                </div>
                {" "}
                <span className="note">
                  Twenty tiles. Kebab hides everything else.
                </span>
              </div>
              <div className="after-card">
                <span className="tag">
                  After
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/051a098b-2344-4b55-8614-21b5f2989e80.jpg" alt="New home: populated dashboard with persistent four-tab bottom navigation" />
                </div>
                {" "}
                <span className="note">
                  Four-tab nav, populated Home.
                </span>
              </div>
            </div>
          </div>
          <p className="cap">
            This was the structural shift that made everything else possible.
          </p>
          <article className="intent-block">
            <div className="intent-side">
              <h3 className="intent-head" style={{"margin":"0 0 12px"}}>
                <span style={{"color":"rgb(28,33,36)","fontWeight":"700","marginRight":"8px"}}>
                  01
                </span>
                <span style={{"color":"rgba(20,24,26,0.4)","marginRight":"10px","fontWeight":"400"}}>
                  ·
                </span>
                Find
              </h3>
            </div>
          </article>
          <h3 id="decision-library">
            Library: preserving the structure 200K users had memorized
          </h3>
          <p>
            {"The Library was the screen 200,000 daily users had already learned. The right call here was "}
            <b>
              leaving the structure intact and trimming what didn't earn its seat
            </b>
            , not redesigning it.
          </p>
          <div className="ba">
            <div className="ba-pair">
              <div className="before-card">
                <span className="tag">
                  Before
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/600e285b-682d-4b10-a0e8-626ddb1b1864.jpg" alt="Old home: 20 green tiles, no separation between categories and individual courses" />
                </div>
                {" "}
                <span className="note">
                  Twenty tiles, all identical. Library was the home screen.
                </span>
              </div>
              <div className="after-card">
                <span className="tag">
                  After
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/8a95ff42-6f11-4f4a-823a-c9d9cdfc2bc1.jpg" alt="Library: 12 cards in the All filter" />
                </div>
                {" "}
                <span className="note">
                  Same shape, 12 cards, English/Urdu filters.
                </span>
              </div>
            </div>
          </div>
          <div className="callout">
            <span className="k">
              Library: 19 → 12, research-backed
            </span>
            {" Twenty identical green tiles became "}
            <b>
              12 cards in the All filter
            </b>
            {", kept what the survey said users actually used, cut the rest. "}
            <em>
              English Section
            </em>
            {" and "}
            <em>
              Urdu Section
            </em>
            {" filters show smaller, language-specific subsets so a Urdu-only listener never scrolls past English titles. "}
          </div>
          <h3 id="decision-search">
            Search as a top-level tab
          </h3>
          <p>
            {"In the old app, Search sat behind a three-dot kebab, and "}
            <b>
              55% of survey respondents said they never used it
            </b>
            {". That didn't mean they didn't want it. Users said in plain words that searching a topic was "}
            <em>
              {"\"very difficult.\""}
            </em>
            {" The redesign pulls Search into the tab bar, with suggested speakers and topics on entry."}
          </p>
          <div className="ba">
            <div className="ba-pair">
              <div className="before-card">
                <span className="tag">
                  Before
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/cc111111-1111-1111-1111-111111110001.jpg" alt="Old search: hidden behind a kebab, search box only with a keyboard" />
                </div>
                {" "}
                <span className="note">
                  Hidden behind a kebab. Just a search box.
                </span>
              </div>
              <div className="after-card">
                <span className="tag">
                  After
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/3c4c5ca0-ee32-486e-8bca-19975474c65b.jpg" alt="New search: suggested speakers and topics on the dedicated Search tab" />
                </div>
                {" "}
                <span className="note">
                  A dedicated tab, with suggestions before you type.
                </span>
              </div>
            </div>
          </div>
          <p className="cap">
            <b>
              Search.
            </b>
            {" One tap from every screen, no hunting through a menu."}
          </p>
          <h3 id="decision-taxonomy">
            Taxonomy cleanup
          </h3>
          <p>
            {"The app holds "}
            <b>
              20,000+ audio files across thousands of folders
            </b>
            {". The old structure piled variants, duplicates, and "}
            <em>
              OLD
            </em>
            {" entries at the same level as named series, and every folder had the same problem. This is the cleanup pattern I applied throughout:"}
          </p>
          <ul style={{"margin":"8px 0 0","paddingLeft":"20px"}}>
            <li>
              One row per series; language and version variants live one tap deeper.
            </li>
            <li>
              {"Bilingual titles on every row, so there are no separate "}
              <em>
                Urdu
              </em>
              {" / "}
              <em>
                Roman
              </em>
              {" rows."}
            </li>
            <li>
              <em>
                OLD
              </em>
              {" dead-ends removed."}
            </li>
          </ul>
          <p style={{"marginTop":"12px","color":"var(--ink-3)","fontSize":"14.5px"}}>
            The screens below are one folder (
            <em>
              Al-Hadith
            </em>
            ) as an example, but the same rules apply across the entire catalogue.
          </p>
          <div className="ba">
            <div className="ba-pair">
              <div className="before-card">
                <span className="tag">
                  Before
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/cc222222-2222-2222-2222-222222220002.jpg" alt="Old Al-Hadith list: green tiles mixing Sahih Bukhari OLD, English variants, and unnamed lectures at the same level" />
                </div>
                {" "}
                <span className="note">
                  Variants, courses, and lectures all flat at one level.
                </span>
              </div>
              <div className="after-card">
                <span className="tag">
                  After
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/cc333333-3333-3333-3333-333333330003.jpg" alt="New Hadith list: clean white cards, each entry with English + Urdu titles and a clear chevron" />
                </div>
                {" "}
                <span className="note">
                  One title per row. Bilingual labels. Clear depth.
                </span>
              </div>
            </div>
          </div>
          <article className="intent-block">
            <div className="intent-side">
              <h3 className="intent-head" style={{"margin":"0 0 12px"}}>
                <span style={{"color":"rgb(28,33,36)","fontWeight":"700","marginRight":"8px"}}>
                  02
                </span>
                <span style={{"color":"rgba(20,24,26,0.4)","marginRight":"10px","fontWeight":"400"}}>
                  ·
                </span>
                Return
              </h3>
            </div>
          </article>
          <h3 id="decision-home">
            The home screen: before and after
          </h3>
          <p>
            {"The home screen was the survey's number one source of confusion. Every daily-use feature was hidden behind the kebab in the top corner, so if you missed it, you missed half the app. The fix was to stop treating Home as a catalogue and start treating it as a "}
            <em>
              dashboard for the four things a returning user manages every day
            </em>
            .
          </p>
          <div className="ba">
            <div className="ba-pair">
              <div className="before-card">
                <span className="tag">
                  Before
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/2bde4e0b-205b-44e8-a858-e8d8676f107a.jpg" alt="Old kebab menu: Bookmarks, Search, Downloads hidden behind three dots" />
                </div>
                {" "}
                <span className="note">
                  Miss the kebab and you miss half the app.
                </span>
              </div>
              <div className="after-card">
                <span className="tag">
                  After
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/051a098b-2344-4b55-8614-21b5f2989e80.jpg" alt="New home: Recently Played, Favorite Audios, Favorite Series, Downloaded" />
                </div>
                {" "}
                <span className="note">
                  Home works as a dashboard instead of a catalogue.
                </span>
              </div>
            </div>
          </div>
          <div className="callout">
            <span className="k">
              Home: four rows, one cleanup
            </span>
            {" "}
            <p style={{"margin":"0 0 18px","fontSize":"17px","color":"var(--ink)"}}>
              <b>
                Bookmarks and Favorites did the same job: two icons, two buckets, and no clear rule for which was which.
              </b>
              {" Collapsed into one model: "}
              <b>
                four rows
              </b>
              .
            </p>
            <div style={{"display":"grid","gridTemplateColumns":"28px minmax(140px,auto) 1fr","columnGap":"18px","rowGap":"0","alignItems":"baseline","borderTop":"1px solid var(--rule)"}}>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","font":"600 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace","letterSpacing":"0.12em","color":"var(--ink-2)"}}>
                01
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","fontWeight":"700","color":"var(--ink)"}}>
                Recently Played
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","color":"var(--ink-2)"}}>
                Resume in one tap.
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","font":"600 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace","letterSpacing":"0.12em","color":"var(--ink-2)"}}>
                02
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","fontWeight":"700","color":"var(--ink)"}}>
                {"Favorite Audios "}
                <span style={{"font":"500 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace","letterSpacing":"0.08em","color":"var(--ink-2)","marginLeft":"8px","padding":"2px 6px","border":"1px solid var(--rule)","borderRadius":"3px","verticalAlign":"1px"}}>
                  RENAMED
                </span>
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","color":"var(--ink-2)"}}>
                {"Single tracks. Was "}
                <em>
                  Favorites
                </em>
                .
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","font":"600 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace","letterSpacing":"0.12em","color":"var(--ink-2)"}}>
                03
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","fontWeight":"700","color":"var(--ink)"}}>
                {"Favorite Series "}
                <span style={{"font":"500 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace","letterSpacing":"0.08em","color":"var(--accent,rgb(28,33,36))","marginLeft":"8px","padding":"2px 6px","border":"1px solid currentColor","borderRadius":"3px","verticalAlign":"1px"}}>
                  NEW
                </span>
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","color":"var(--ink-2)"}}>
                Whole courses, like tafsir or Ramadan sets.
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","font":"600 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace","letterSpacing":"0.12em","color":"var(--ink-2)"}}>
                04
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","fontWeight":"700","color":"var(--ink)"}}>
                Downloaded
              </div>
              <div style={{"padding":"12px 0","borderBottom":"1px solid var(--rule)","color":"var(--ink-2)"}}>
                Offline playback.
              </div>
            </div>
            <p style={{"margin":"18px 0 0","fontSize":"14px","color":"var(--ink-2)"}}>
              <b style={{"color":"var(--ink)"}}>
                Bookmarks removed.
              </b>
              {" Audios and Series split because "}
              <em>
                {"\"this one sermon\""}
              </em>
              {" and "}
              <em>
                {"\"this 30-part tafsir\""}
              </em>
              {" are different intents."}
            </p>
          </div>
          <p style={{"marginTop":"28px"}}>
            <b>
              Each row is a preview; each opens its own manager.
            </b>
            {" Home stays compact while the managers hold the detail."}
          </p>
          <div className="feature-pair">
            <div className="feature-pair__label">
              <span className="k">
                Recently Played
              </span>
              {"Top of Home. Progress bar + "}
              <em>
                {"\"time left\""}
              </em>
              {" so resuming is one tap."}
            </div>
            <div className="phones">
              <div className="phone">
                <img loading="lazy" src="/caseStudy/051a098b-2344-4b55-8614-21b5f2989e80.jpg" alt="Home: Recently Played row with caseStudy button" />
              </div>
              <div className="phone">
                <img loading="lazy" src="/caseStudy/2bc905a0-31ca-4f18-9991-010f4cc281f6.jpg" alt="Recently Viewed: full-screen manager with progress and time left per track" />
              </div>
            </div>
          </div>
          <div className="feature-pair">
            <div className="feature-pair__label">
              <span className="k">
                Favorite Audios
              </span>
              {"Individual tracks marked "}
              <em>
                {"\"I love this.\""}
              </em>
              {" Manager groups them by series, collapsible."}
            </div>
            <div className="phones">
              <div className="phone">
                <img loading="lazy" src="/caseStudy/e42c20d2-e2b4-4d6f-8e16-ba37915ec2fc.jpg" alt="Home: Favorite Audios row" />
              </div>
              <div className="phone">
                <img loading="lazy" src="/caseStudy/6d743155-e838-4f24-bf50-a34a34bfeeda.jpg" alt="Favorite Audios: full-screen manager with series expanded" />
              </div>
            </div>
          </div>
          <div className="feature-pair">
            <div className="feature-pair__label">
              <span className="k">
                Favorite Series
              </span>
              Complete series saved as a unit. Manager shows cover art + teacher names so users recognize what they saved.
            </div>
            <div className="phones">
              <div className="phone">
                <img loading="lazy" src="/caseStudy/cc444444-4444-4444-4444-444444440004.jpg" alt="Home: Favorite Series row with Sahih Bukhari cover and View Series button" />
              </div>
              <div className="phone">
                <img loading="lazy" src="/caseStudy/7b8e0a99-6925-4949-acb1-1ef8df34476c.jpg" alt="Favorite Series: full-screen manager with cover art and teacher names" />
              </div>
            </div>
          </div>
          <div className="feature-pair">
            <div className="feature-pair__label">
              <span className="k">
                Downloaded
              </span>
              Offline playback. Downloaded / Queued tabs, storage up top, green check per track.
            </div>
            <div className="phones">
              <div className="phone">
                <img loading="lazy" src="/caseStudy/04e636d3-5222-4923-9b33-b8c09ccd4af8.jpg" alt="Home: Downloaded row" />
              </div>
              <div className="phone">
                <img loading="lazy" src="/caseStudy/b7fa46d3-7d60-46f0-8e0a-e6455b6e183e.jpg" alt="Downloads: full-screen manager with Downloaded/Queued tabs and storage used" />
              </div>
            </div>
          </div>
          <h3 id="decision-playback">
            Playback: rebuilt as two surfaces
          </h3>
          <p>
            Playback was the lowest-rated task in the audit and also the most used. P1 scrubbed to the wrong position four times, and P2 couldn't find the speed control. The fix was one system across two surfaces.
          </p>
          <div className="ba">
            <div className="ba-pair">
              <div className="before-card">
                <span className="tag">
                  Before
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/5d68d6c6-c9fe-4d2e-a7a9-30f4772d9bff.jpg" alt="Old playback: thin control strip pinned at the bottom of the home grid" />
                </div>
                {" "}
                <span className="note">
                  Control strip jammed over the grid.
                </span>
              </div>
              <div className="after-card">
                <span className="tag">
                  After
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/ddd9f4e4-8b2c-472c-bc34-6a43664b7f15.jpg" alt="New mini player: pinned above the tab bar with play, ±15s, artwork" />
                </div>
                {" "}
                <span className="note">
                  Mini player. Three controls, persistent.
                </span>
              </div>
            </div>
            <div className="ba-pair">
              <div className="before-card">
                <span className="tag">
                  Before
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/b440be04-21d5-44a2-9ff7-bcb1a32209eb.jpg" alt="Old expanded playback modal: decorative background, three separate rows of controls" />
                </div>
                {" "}
                <span className="note">
                  {"An \"expanded\" modal. Still no scrub bar."}
                </span>
              </div>
              <div className="after-card">
                <span className="tag">
                  After
                </span>
                {" "}
                <div className="phone">
                  <img loading="lazy" src="/caseStudy/1cc83ad8-8495-4c98-a21c-3e9484bcafe9.jpg" alt="New full-screen player" />
                </div>
                {" "}
                <span className="note">
                  Full-screen player with real scrub bar.
                </span>
              </div>
            </div>
          </div>
          <p className="cap">
            <b>
              Two surfaces, one system.
            </b>
            {" Mini player for background, full-screen player for everything else."}
          </p>
          <article className="intent-block">
            <div className="intent-side">
              <h3 className="intent-head" style={{"margin":"0 0 12px"}}>
                <span style={{"color":"rgb(28,33,36)","fontWeight":"700","marginRight":"8px"}}>
                  03
                </span>
                <span style={{"color":"rgba(20,24,26,0.4)","marginRight":"10px","fontWeight":"400"}}>
                  ·
                </span>
                Explore
              </h3>
            </div>
          </article>
          <h3 id="decision-browse">
            Browse: a lighter, topic-based entry point
          </h3>
          <p>
            {"Browse is for users who don't yet know what to type. It's organised by topic rather than category, with "}
            <em>
              Latest Series
            </em>
            {" and "}
            <em>
              All Time Favorites
            </em>
            {" at the top, curated entry points underneath."}
          </p>
          <div className="callout-pair">
            <div className="callout-pair__media">
              <div className="phone">
                <img loading="lazy" src="/caseStudy/25e260b2-b709-4350-965a-07266d9d8a77.jpg" alt="Browse: Latest Series and All Time Favorites" />
              </div>
            </div>
            <aside className="callout-pair__note">
              <span className="k">
                Designed for exploring
              </span>
              {" "}
              <ul style={{"margin":"4px 0 14px","paddingLeft":"18px"}}>
                <li>
                  <b>
                    Latest Series
                  </b>
                  , what's currently being taught. A live entry point that updates without anyone needing to search.
                </li>
                <li>
                  <b>
                    All Time Favorites
                  </b>
                  , what the community keeps returning to. A safe first listen for someone new.
                </li>
                <li>
                  <b>
                    Topic-driven, not category-driven
                  </b>
                  , so you pick a theme rather than a folder.
                </li>
              </ul>
              {" "}
              <b>
                Browse is for users who open the app without a specific destination in mind. No query, no folder, just a starting point.
              </b>
              {" "}
              <span className="callout-pair__cap">
                <b>
                  Browse.
                </b>
                {" A topic-led path for users who don't have a specific destination yet."}
              </span>
            </aside>
          </div>
          <h3 id="decision-onboarding" style={{"marginTop":"40px"}}>
            Onboarding
          </h3>
          <p>
            A skippable walkthrough across eight screens: splash, language preference, a four-tab nav explainer, a notification ask, and a welcome screen. Click any thumbnail to step through.
          </p>
          <div className="onboarding-tour" data-onboarding-tour="">
            <div className="ot-main">
              <div className="ot-phone phone" data-ot-stage="">
                <img loading="lazy" src="/caseStudy/aa111111-0001-0001-0001-000000000001.jpg" alt="Splash screen" className="is-active" />
                {" "}
                <img loading="lazy" src="/caseStudy/b273d560-a3a7-4b8d-8b7d-3a3489dde68f.jpg" alt="Choose language" />
                {" "}
                <img loading="lazy" src="/caseStudy/2617d17f-b11f-405f-97f5-d8a662afd5a2.jpg" alt="Home tab" />
                {" "}
                <img loading="lazy" src="/caseStudy/0eea8058-a729-4686-9027-5341f6a718f2.jpg" alt="Browse tab" />
                {" "}
                <img loading="lazy" src="/caseStudy/aa222222-0002-0002-0002-000000000002.jpg" alt="Library tab" />
                {" "}
                <img loading="lazy" src="/caseStudy/aa333333-0003-0003-0003-000000000003.jpg" alt="Search tab" />
                {" "}
                <img loading="lazy" src="/caseStudy/da6a734f-ea52-49c7-b8cf-1fbeb7220bbf.jpg" alt="Notification permission" />
                {" "}
                <img loading="lazy" src="/caseStudy/e4f435fd-da2b-44c1-bf7d-2e4b64af6bf1.jpg" alt="Welcome screen" />
              </div>
              <div className="ot-info">
                <div className="ot-counter" data-ot-counter="">
                  01 / 08
                </div>
                <h4 className="ot-title" data-ot-title="">
                  Splash
                </h4>
                <p className="ot-desc" data-ot-desc="">
                  First glance, the new brand. A clean intro before anything is asked.
                </p>
                <div className="ot-nav">
                  <button type="button" className="ot-nav-btn" data-ot-prev="" aria-label="Previous step">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  {" "}
                  <button type="button" className="ot-nav-btn" data-ot-next="" aria-label="Next step">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="ot-thumbs" data-ot-thumbs="">
              <button type="button" className="ot-thumb is-active" data-idx="0" aria-label="Splash">
                <span className="ot-thumb-num">
                  01
                </span>
                <span className="ot-thumb-frame">
                  <img loading="lazy" src="/caseStudy/aa111111-0001-0001-0001-000000000001.jpg" alt="" />
                </span>
                <span className="ot-thumb-label">
                  Splash
                </span>
              </button>
              {" "}
              <button type="button" className="ot-thumb" data-idx="1" aria-label="Choose language">
                <span className="ot-thumb-num">
                  02
                </span>
                <span className="ot-thumb-frame">
                  <img loading="lazy" src="/caseStudy/b273d560-a3a7-4b8d-8b7d-3a3489dde68f.jpg" alt="" />
                </span>
                <span className="ot-thumb-label">
                  Language
                </span>
              </button>
              {" "}
              <button type="button" className="ot-thumb" data-idx="2" aria-label="Home">
                <span className="ot-thumb-num">
                  03
                </span>
                <span className="ot-thumb-frame">
                  <img loading="lazy" src="/caseStudy/2617d17f-b11f-405f-97f5-d8a662afd5a2.jpg" alt="" />
                </span>
                <span className="ot-thumb-label">
                  Home
                </span>
              </button>
              {" "}
              <button type="button" className="ot-thumb" data-idx="3" aria-label="Browse">
                <span className="ot-thumb-num">
                  04
                </span>
                <span className="ot-thumb-frame">
                  <img loading="lazy" src="/caseStudy/0eea8058-a729-4686-9027-5341f6a718f2.jpg" alt="" />
                </span>
                <span className="ot-thumb-label">
                  Browse
                </span>
              </button>
              {" "}
              <button type="button" className="ot-thumb" data-idx="4" aria-label="Library">
                <span className="ot-thumb-num">
                  05
                </span>
                <span className="ot-thumb-frame">
                  <img loading="lazy" src="/caseStudy/aa222222-0002-0002-0002-000000000002.jpg" alt="" />
                </span>
                <span className="ot-thumb-label">
                  Library
                </span>
              </button>
              {" "}
              <button type="button" className="ot-thumb" data-idx="5" aria-label="Search">
                <span className="ot-thumb-num">
                  06
                </span>
                <span className="ot-thumb-frame">
                  <img loading="lazy" src="/caseStudy/aa333333-0003-0003-0003-000000000003.jpg" alt="" />
                </span>
                <span className="ot-thumb-label">
                  Search
                </span>
              </button>
              {" "}
              <button type="button" className="ot-thumb" data-idx="6" aria-label="Daily reminder">
                <span className="ot-thumb-num">
                  07
                </span>
                <span className="ot-thumb-frame">
                  <img loading="lazy" src="/caseStudy/da6a734f-ea52-49c7-b8cf-1fbeb7220bbf.jpg" alt="" />
                </span>
                <span className="ot-thumb-label">
                  Reminder
                </span>
              </button>
              {" "}
              <button type="button" className="ot-thumb" data-idx="7" aria-label="Welcome">
                <span className="ot-thumb-num">
                  08
                </span>
                <span className="ot-thumb-frame">
                  <img loading="lazy" src="/caseStudy/e4f435fd-da2b-44c1-bf7d-2e4b64af6bf1.jpg" alt="" />
                </span>
                <span className="ot-thumb-label">
                  Welcome
                </span>
              </button>
            </div>
          </div>
          <p style={{"marginTop":"28px"}}>
            Browse and Onboarding weren't built from user data, since the survey and sessions focused on current users rather than newcomers. These two decisions came from talking with the institute's teachers and senior staff, who had worked with new students for years. That input was useful, but it isn't the same as data. How well these land for genuinely new users is a question for the next research cycle.
          </p>
        </section>
        <section id="impact">
          <span className="section-eyebrow">
            Where it stands
          </span>
          {" "}
          <p>
            The redesign is live on both stores. Eight weeks after release I re-ran the same task set, using the same moderated protocol, against the shipped build. That means the numbers below were measured the same way the original problems were.
          </p>
          <h3 style={{"marginTop":"32px"}}>
            What shipped
          </h3>
          <ul className="ship-list">
            <li>
              A persistent four-tab navigation (Home · Browse · Library · Search) replacing the kebab menu.
            </li>
            <li>
              Home rebuilt as a personal dashboard: Recently Played, Favorite Audios, Favorite Series, Downloaded, each with its own full-screen manager.
            </li>
            <li>
              Playback as two surfaces: a persistent mini player and a full-screen player with a real scrub bar and exposed speed control.
            </li>
            <li>
              Library trimmed 19 → 12 categories, with English and Urdu subsets.
            </li>
            <li>
              {"One taxonomy rule applied across 20,000+ files: one row per series, variants one level deeper, bilingual titles, dead "}
              <em>
                OLD
              </em>
              {" entries removed."}
            </li>
            <li>
              A single save model, with Bookmarks removed and Favorite Audios and Favorite Series in their place, plus visible state on every row.
            </li>
            <li>
              A skippable eight-screen first run, and a design system the two junior designers could apply without me.
            </li>
          </ul>
          <h3 style={{"marginTop":"34px"}}>
            Results against the agreed targets
          </h3>
          <p>
            {"These targets were set with the institute "}
            <em>
              before
            </em>
            {" the first round of testing, so the bar wasn't moved to fit the outcome. Baseline is the old app in the audit sessions; post-launch is the shipped build, re-tested eight weeks after release."}
          </p>
          <div className="scoreboard" role="table" aria-label="Audit baseline against agreed targets">
            <div className="sb-row sb-head" role="row">
              <span role="columnheader">
                Task
              </span>
              <span role="columnheader">
                Baseline (old app)
              </span>
              <span role="columnheader">
                Target
              </span>
              <span role="columnheader">
                Post-launch
              </span>
            </div>
            <div className="sb-row" role="row">
              <span role="cell">
                Save an audio to listen later
              </span>
              <span role="cell">
                0% · 120s, abandoned
              </span>
              <span role="cell">
                ≥80% complete
              </span>
              <span role="cell" className="sb-met">
                {"92% · 11s "}
                <b>
                  met
                </b>
              </span>
            </div>
            <div className="sb-row" role="row">
              <span role="cell">
                Find something you saved
              </span>
              <span role="cell">
                1m 25s · confused
              </span>
              <span role="cell">
                ≥80% complete
              </span>
              <span role="cell" className="sb-met">
                {"96% · 9s "}
                <b>
                  met
                </b>
              </span>
            </div>
            <div className="sb-row" role="row">
              <span role="cell">
                Tell whether an audio is already saved
              </span>
              <span role="cell">
                0% first-click
              </span>
              <span role="cell">
                ≥70% first-click
              </span>
              <span role="cell" className="sb-met">
                {"88% first-click "}
                <b>
                  met
                </b>
              </span>
            </div>
            <div className="sb-row" role="row">
              <span role="cell">
                Seek to 30 minutes into a lecture
              </span>
              <span role="cell">
                4.0 errors · failed
              </span>
              <span role="cell">
                ≤1 error
              </span>
              <span role="cell" className="sb-met">
                {"0.3 errors "}
                <b>
                  met
                </b>
              </span>
            </div>
            <div className="sb-row" role="row">
              <span role="cell">
                Download for offline use
              </span>
              <span role="cell">
                3m 00s · completed
              </span>
              <span role="cell">
                ≤1 error
              </span>
              <span role="cell" className="sb-met">
                {"0.2 errors · 34s "}
                <b>
                  met
                </b>
              </span>
            </div>
            <div className="sb-row" role="row">
              <span role="cell">
                Player ease (1–5)
              </span>
              <span role="cell">
                2.1 / 5
              </span>
              <span role="cell">
                ≥4 / 5
              </span>
              <span role="cell" className="sb-met">
                {"4.5 / 5 "}
                <b>
                  met
                </b>
              </span>
            </div>
          </div>
          <div className="impact-cards">
            <div className="ic">
              <span className="ic-num">
                0% → 92%
              </span>
              <span className="ic-lab">
                Save-for-later completion
              </span>
            </div>
            <div className="ic">
              <span className="ic-num">
                2.1 → 4.5
              </span>
              <span className="ic-lab">
                Player ease, out of 5
              </span>
            </div>
            <div className="ic">
              <span className="ic-num">
                120s → 11s
              </span>
              <span className="ic-lab">
                Time to save an audio
              </span>
            </div>
            <div className="ic">
              <span className="ic-num">
                0% → 88%
              </span>
              <span className="ic-lab">
                Can tell if an audio is saved, first click
              </span>
            </div>
          </div>
          <p className="sb-note">
            Two caveats worth keeping in mind with these numbers. First, they come from moderated task sessions rather than real usage tracking, since the app still had no analytics at re-test. Second, they only measure the three intents the redesign targeted. Browse and onboarding came from stakeholder input rather than user data, so they are still unproven.
          </p>
          <h3 style={{"marginTop":"34px"}}>
            Constraints that shaped the design
          </h3>
          <ul className="ship-list">
            <li>
              <b>
                No re-learning budget.
              </b>
              {" Anything that forced 200K daily users to re-learn the Library was off the table, so the new structure is additive and the old shape survives inside it."}
            </li>
            <li>
              <b>
                No usage data.
              </b>
              {" No analytics, no funnels, no category-level traffic until the survey existed."}
            </li>
            <li>
              <b>
                Content operations.
              </b>
              {" Thousands of folders had to be re-labelled by the institute's small IT team. That ruled out a bespoke tree and pushed me to one repeatable rule per row that someone else could apply at scale."}
            </li>
            <li>
              <b>
                A rotating junior team.
              </b>
              {" Two junior visual designers and one junior researcher moved in and out across phases, so the system had to stay small enough to be executed without me in the room."}
            </li>
            <li>
              <b>
                Stakeholder call: current users first.
              </b>
              {" New-user discovery (Browse and onboarding) came from teachers and senior staff who work with new students, rather than from user data."}
            </li>
            <li>
              <b>
                Accessibility deferred.
              </b>
              {" Font scale, contrast and screen-reader labels did not make the first release. For an audience that skews older and reads in two scripts, that's the gap I would close first."}
            </li>
          </ul>
        </section>
        <section id="reflection">
          <h2 style={{"borderLeft":"2.4px solid rgb(28,33,36)","paddingLeft":"14px"}}>
            What I took from this
          </h2>
          <p>
            The hardest call was holding back. Letting Browse and Library coexist, so that 200,000 daily users kept the shape they knew while we introduced something new, was harder than designing either one on its own. I learned that good judgment sometimes means doing less design rather than more.
          </p>
          <p>
            Showing state mattered more than adding actions. The app already worked, it just never showed you that it had worked. A filled heart, a green check, a real scrub bar, a timestamp. Most of the complaints I read across roughly 1,900 survey responses were about not being able to see what the app had done, rather than about missing features. That single shift is what moved the numbers, because the tasks that improved most were the ones where the fix was simply making things visible.
          </p>
          <p>
            A redesign isn't the end of the work. Hitting the targets in a session room isn't the same as hitting them across 90 countries, so the next cycle has two goals: getting analytics into the product so the following redesign can start from real behaviour instead of self-report, and closing the accessibility gaps (font scale, contrast, screen-reader labels) that didn't make the first release.
          </p>
        </section>
        <div className="center-dots">
          · · ·
        </div>
        <p style={{"color":"var(--ink-3)","fontSize":"15px","textAlign":"center","margin":"0"}}>
          Thanks for reading. If you'd like to talk about how a similar audit or redesign could apply to your product, drop me a note.
        </p>
        <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"center","gap":"10px 28px","margin":"18px 0 0","fontSize":"15px"}}>
          <a href="mailto:abdullah542903@gmail.com" style={{"display":"inline-flex","alignItems":"center","gap":"8px","color":"var(--accent)","textDecoration":"none","borderBottom":"1px solid var(--accent)"}}>
            <span style={{"fontSize":"12px","letterSpacing":"0.14em","textTransform":"uppercase","color":"var(--ink-3)","fontWeight":"600"}}>
              Email
            </span>
            abdullah542903@gmail.com
          </a>
          {" "}
          <a href="https://wa.me/923022699763" target="_blank" rel="noopener" style={{"display":"inline-flex","alignItems":"center","gap":"8px","color":"var(--accent)","textDecoration":"none","borderBottom":"1px solid var(--accent)"}}>
            <span style={{"fontSize":"12px","letterSpacing":"0.14em","textTransform":"uppercase","color":"var(--ink-3)","fontWeight":"600"}}>
              WhatsApp
            </span>
            +92 302 2699763
          </a>
        </div>
      </article>
      <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
        <button type="button" className="lightbox__close" id="lightbox-close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {" "}
        <button type="button" className="lightbox__btn lightbox__btn--prev" id="lightbox-prev" aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        {" "}
        <span className="lightbox__counter" id="lightbox-counter">
          1 / 1
        </span>
        {" "}
        <div className="lightbox__stage" id="lightbox-stage">
          <div className="lightbox__inner" id="lightbox-inner">
            <img loading="lazy" id="lightbox-img" alt="" />
            {" "}
            <svg className="lightbox__overlay" id="lightbox-overlay" preserveAspectRatio="none" />
            <div className="lightbox__pin-layer" id="lightbox-pin-layer" style={{"position":"absolute","inset":"0","pointerEvents":"none","zIndex":"5"}} />
          </div>
          <aside className="lightbox__legend" id="lightbox-legend">
            <h4 className="lightbox__legend-title">
              Design decisions
            </h4>
            <ol id="lightbox-legend-list" />
          </aside>
        </div>
        {" "}
        <button type="button" className="lightbox__btn lightbox__btn--next" id="lightbox-next" aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
      <footer>
        <div className="inner">
          <span>
            <b>
              Abdullah Omer
            </b>
            , Product Designer
          </span>
          {" "}
          <span>
            Quran For All · Case study · 2026
          </span>
        </div>
      </footer>
    </div>
  );
};

export default QuranCaseStudy;
