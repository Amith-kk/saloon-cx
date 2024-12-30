import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background fixed w-full z-10 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-text tracking-wide hover:text-hover transition duration-300">
          Salon Fryzur
        </h1>

        {/* Hamburger Menu Icon */}
        <button
          className="block lg:hidden text-text focus:outline-none"
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
        <ul
          className={`lg:flex lg:space-x-6 flex-col lg:flex-row fixed lg:static left-0 top-16 lg:top-0 lg:bg-transparent bg-background w-full lg:w-auto space-y-4 lg:space-y-0 px-6 lg:px-0 py-4 lg:py-0 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          {["Home", "Services", "Feedback"].map((item, idx) => (
            <li key={idx} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-text font-semibold tracking-wide transition-all duration-300 hover:text-hover hover:scale-110"
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
