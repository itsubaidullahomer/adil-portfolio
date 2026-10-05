import React, { useEffect, useState } from "react";

// Cycles the grey tail line of a hero headline (used on About and Home).
const RotatingLine = ({ lines }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % lines.length), 2600);
    return () => clearInterval(id);
  }, [lines.length]);

  return (
    <>
      <span className="sr-only">{lines.join(" ")}</span>
      {/* All lines share one grid cell, so the box is sized by the longest and never jumps */}
      <span aria-hidden="true" className="grid overflow-hidden pb-[0.08em]">
        {lines.map((line, i) => (
          <span
            key={i === index ? `on-${index}` : i}
            className={`[grid-area:1/1] text-[#A8A7A3] ${i === index ? "about-line-in" : "invisible"}`}
          >
            {line}
          </span>
        ))}
      </span>
    </>
  );
};

export default RotatingLine;
