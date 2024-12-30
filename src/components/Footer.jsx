import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-text py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-bold text-gold">Contact Us</h2>
          <p className="mt-4 text-lightGold">
            We'd love to hear from you! Feel free to reach out using the form or the contact information below.
          </p>
          <ul className="mt-6 space-y-2">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@salonfryzur.pl"
                className="text-yellow hover:text-gold transition"
              >
                info@salonfryzur.pl
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+48123456789"
                className="text-yellow hover:text-gold transition"
              >
                +48 123 456 789
              </a>
            </li>
            <li>
              <strong>Address:</strong> 123 Main Street, Warsaw, Poland
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gold">Get in Touch</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-lightGold text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-dark text-text p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-lightGold text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-dark text-text p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-lightGold text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-dark text-text p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-dark py-3 rounded-lg hover:bg-yellow hover:text-dark transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-lightGold pt-6 text-center text-lightGold">
        © 2024 Salon Fryzur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
