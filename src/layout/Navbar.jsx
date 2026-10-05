import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("/");

  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Update active link based on current route
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const getLinkClasses = (path) => {
    return `cursor-pointer transition-all duration-300 ${
      activeLink === path
        ? "text-[#24292C]"
        : "text-[#818180] hover:text-[#24292C]"
    }`;
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-[70px] px-7 flex items-center bg-[#EFEFEC] z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Monogram mark: Adil Younas initials in the site's ink/cream palette */}
        <Link
          to="/"
          onClick={() => handleLinkClick("/")}
          aria-label="Adil Younas, UI/UX Designer — home"
          className="shrink-0 w-11 h-11 rounded-full bg-[#1C2124] text-[#FFF9F3] flex items-center justify-center font-display font-bold text-[15px] tracking-[-0.04em] transition-transform duration-300 hover:scale-105"
        >
          AY
        </Link>
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex items-center gap-[50px]">
            <Link
              to="/"
              className={getLinkClasses("/")}
              onClick={() => handleLinkClick("/")}
            >
              Work
            </Link>
            <Link
              to="/about"
              className={getLinkClasses("/about")}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
            <a className={getLinkClasses("/linkedin")} href="https://www.linkedin.com/in/itsadilyounas/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="h-[70px]"></div>
    </>
  );
};

export default Navbar;
