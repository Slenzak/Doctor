// src/components/MedicineSection.js
import React from 'react';

const MedicineSection = () => {
  return (
    <section className="bg-red-50 py-16 px-8 text-center">
      <h2 className="text-3xl font-bold mb-8">Leading Medicine</h2>
      <div className="flex justify-center items-center">
        <img src="https://media.gettyimages.com/id/1213748565/photo/gloved-hand-holding-a-syringe.jpg?s=1024x1024&w=gi&k=20&c=HZeOoVHaRiyDD4rElyaA2FAf8iurGo7fov-UheB2sIU=" alt="Syringe" className="rounded-lg" width="400px"/>
      </div>
      <p className="text-gray-600 mt-4">
        Doctors apply a detailed research method to enhance medicine.
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4">Learn More</button>
    </section>
  );
}

export default MedicineSection;
