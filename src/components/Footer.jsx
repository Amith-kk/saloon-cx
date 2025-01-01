import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-hover text-background py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center text-background md:text-left">
            <p className="text-sm ">
              &copy; 2024 Salon Fryzur. All rights reserved.
            </p>
            <p className="text-sm mt-2 text-background">
              Designed with care by our creative team.
            </p>
          </div>

          {/* Contact Details */}
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <h4 className="text-lg font-semibold text-gold mb-2">Contact Us</h4>
            <p className="text-sm">Phone: +48 123 456 789</p>
            <p className="text-sm">Email: info@salonfryzur.pl</p>
            <p className="text-sm">Address: 123 Main St, Warsaw, Poland</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-background hover:text-gold transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-background hover:text-gold transition">
                Terms of Service
              </a>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-text hover:text-gold transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-text hover:text-gold transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-text hover:text-gold transition">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
