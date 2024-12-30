import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-background fixed w-full z-20 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-text tracking-wide hover:text-hover transition duration-300">
          Salon Fryzur
        </h1>

        {/* Hamburger Menu Icon */}
        <button
          className="block lg:hidden text-text focus:outline-none z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } lg:hidden`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <ul
          className={`lg:flex lg:space-x-6 flex-col lg:flex-row fixed lg:static left-0 top-0 lg:top-0 lg:bg-transparent bg-background w-full lg:w-auto space-y-4 lg:space-y-0 px-6 lg:px-0 py-20 lg:py-0 z-30 transition-transform transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } lg:translate-y-0`}
        >
          {["Home", "Services", "Feedback"].map((item, idx) => (
            <li key={idx} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-text font-semibold tracking-wide transition-all duration-300 hover:text-hover hover:scale-110"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item}
              </a>
              {/* Sliding underline effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-hover transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
