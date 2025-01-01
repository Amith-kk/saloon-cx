import React from "react";
import missionImage from "../assets/blonde-female-getting-new-hairstyle-hair-salon.webp";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-full h-auto max-h-screen object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 text-left pl-8">
            <div className="mb-8 lg:m-20">
              <h3 className="text-2xl text-text font-bold mb-4 text-primary text-center">
                About Us
              </h3>
              <p className="text-base text-hover font-semibold mb-6">
                At Salon Fryzur, we are committed to providing a welcoming environment where every client feels comfortable and stylish. Our team of expert stylists ensures personalized attention and the best services to make you feel rejuvenated.
              </p>
            </div>
            <div className="mt-8 lg:m-20">
              <h3 className="text-2xl text-text font-bold mb-4 text-primary text-center">
                Our Mission
              </h3>
              <p className="text-base font-semibold text-hover">
                Our mission is to bring out your unique beauty through expert styling and unparalleled customer service. We aim to create an environment where you can unwind and leave feeling confident and rejuvenated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
