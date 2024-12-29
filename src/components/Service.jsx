import React from 'react';

// Services data with placeholder images
const services = [
  { title: "Braids", image: "path/to/braids.jpg", description: "Intricate and stylish braiding styles." },
  { title: "Natural Hair", image: "path/to/natural_hair.jpg", description: "Care and styling for natural textures." },
  { title: "Haircut", image: "path/to/haircut.jpg", description: "Precision cuts tailored to you." },
  { title: "Locs", image: "path/to/locs.jpg", description: "Loc maintenance and styling." },
  { title: "Silk Press", image: "path/to/silk_press.jpg", description: "Smooth, sleek, and shiny results." },
  { title: "Weaves", image: "path/to/weaves.jpg", description: "Professional installations for flawless looks." },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-dark text-text">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold tracking-wide mb-8 text-light">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-semibold text-light group-hover:text-text transition duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="mt-4 text-light group-hover:text-text transition duration-300">
                {service.description}
              </p>

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-30 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
