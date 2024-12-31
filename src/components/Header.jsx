import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-20 transition-colors duration-300 ${
        isScrolled ? "bg-background shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-text tracking-wide hover:text-hover transition duration-300">
          Salon Fryzur
        </h1>

        {/* Hamburger Menu Icon */}
        <button
          className="block lg:hidden text-text focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {/* Overlay for closing the menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-6 flex-col lg:flex-row fixed lg:static left-0 top-0 lg:top-0 lg:bg-transparent bg-background w-full lg:w-auto space-y-4 lg:space-y-0 px-6 lg:px-0 py-20 lg:py-0 z-20 transition-transform transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } lg:translate-y-0`}
        >
          {/* Close Button */}
          {isMenuOpen && (
            <li className="self-end lg:hidden">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-text text-xl font-bold px-4 py-2 rounded-lg hover:text-hover transition duration-300"
              >
                Close ✖
              </button>
            </li>
          )}
          {/* Navigation Links */}
          {["Home", "Services", "Feedback"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-text font-semibold tracking-wide hover:text-hover transition duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
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
