import React, { useState, useEffect } from "react";

const Header = ({ onMenuStateChange, isMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Notify parent when menu is toggled
  useEffect(() => {
    onMenuStateChange(isMenuOpen);
  }, [isMenuOpen, onMenuStateChange]);

  return (
    <header
      className={`fixed w-full z-30 transition-colors duration-300 ${
        isScrolled || isMenuOpen ? "bg-background shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Brand Name */}
        <h1
          className={`text-xl font-bold tracking-wide hover:text-hover transition duration-300 ${
            isScrolled || isMenuOpen ? "text-text" : "text-background"
          }`}
        >
          Salon Fryzur
        </h1>

        {/* Hamburger Menu Icon */}
        <button
          className={`block lg:hidden focus:outline-none ${
            isScrolled || isMenuOpen ? "text-text" : "text-background"
          }`}
          onClick={() => onMenuStateChange(!isMenuOpen)} // Toggle menu state
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-6 flex-col lg:flex-row fixed lg:static left-0 top-0 lg:top-0 lg:bg-transparent bg-background w-full lg:w-auto space-y-4 lg:space-y-0 px-6 lg:px-0 py-20 lg:py-0 z-20 transition-transform transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } lg:translate-y-0`}
        >
          {/* Close Button */}
          {isMenuOpen && (
            <button
              onClick={() => onMenuStateChange(false)} // Close menu on button click
              className="absolute top-4 right-6 text-text text-2xl font-bold z-30 focus:outline-none"
              aria-label="Close Menu"
            >
              ✖
            </button>
          )}
          {/* Navigation Links */}
          {["Home", "Services", "Feedback", "About"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`font-semibold tracking-wide hover:text-hover transition duration-300 ${
                  isScrolled || isMenuOpen ? "text-text" : "text-background"
                }`}
                onClick={() => onMenuStateChange(false)} // Close menu on click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
