import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-dark to-medium fixed w-full z-10 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-text tracking-wide hover:text-light transition">
          Salon Fryzur
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {/* Each list item */}
          {['Home', 'Services', 'Feedback'].map((item, idx) => (
            <li key={idx} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-light font-semibold tracking-wide transition-all duration-300 hover:text-text hover:scale-110"
              >
                {item}
              </a>
              {/* Sliding underline effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-text transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
