import React from "react";
import braids from "../assets/young-person-portrait-photorealistic-style-with-braids.webp";
import naturalHair from "../assets/portrait-smiling-pretty-woman-with-curly-hair-looking-away.webp";
import haircut from "../assets/hairstylist-woman-doing-haircut.webp";
import locs from "../assets/pretty-black-woman-with-flowers-jacket-pocket.webp";
import silkPress from "../assets/crop-hairdresser-styling-customer.webp";
import weaves from "../assets/styled-hair-extensions-beauty-salon.webp";

const services = [
  { title: "Braids", image: braids, description: "Intricate and stylish braiding styles." },
  { title: "Natural Hair", image: naturalHair, description: "Care and styling for natural textures." },
  { title: "Haircut", image: haircut, description: "Precision cuts tailored to you." },
  { title: "Locs", image: locs, description: "Loc maintenance and styling." },
  { title: "Silk Press", image: silkPress, description: "Smooth, sleek, and shiny results." },
  { title: "Weaves", image: weaves, description: "Professional installations for flawless looks." },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-background text-text">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold tracking-wide mb-8 text-text">
          Our Services
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-text rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-hover group-hover:text-gold transition duration-300">
                {service.title}
              </h3>
              <p className="mt-4 text-hover group-hover:text-gold transition duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
