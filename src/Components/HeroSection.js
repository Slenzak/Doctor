// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Online Appointment</h1>
      <p className="text-gray-600 mb-8 text-center max-w-lg">
        Medical Functional is most focused in helping you discover your most beautiful smile.
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Get Consultation</button>
        <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded">Learn More</button>
      </div>
      <img src="https://media.gettyimages.com/id/1425798958/photo/photo-of-confident-female-doctor-in-hospital-looking-at-camera-with-smile.jpg?s=2048x2048&w=gi&k=20&c=H5wr8Dt_Au2NJyJY9zHTSoQ4_PbEHSjr7Uy4DyqAXmw=" alt="Doctor" className="mt-8 rounded-full" width="250px"/>
    </section>
  );
}

export default HeroSection;
