// src/components/SpecializationSection.js
import React from 'react';

const doctors = [
  { name: 'Dr. John Doe', specialization: 'Surgery', image: 'https://media.gettyimages.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=ofnikeDwvLhhEvLpSuQME5kWclGchqUKSHQFdQ4mcWo=' },
  { name: 'Dr. Jane Smith', specialization: 'Cardiology', image: 'https://media.gettyimages.com/id/476613132/photo/you-are-in-capable-hands.jpg?s=612x612&w=0&k=20&c=8VVS0qSjcuykGtZtbYcJvcRoPs0xVr9fSk0ir01FcdA=' },
  { name: 'Dr. Albert Brooks', specialization: 'Neurology', image: 'https://media.gettyimages.com/id/1147479249/photo/technology-cuts-my-work-in-half.jpg?s=612x612&w=0&k=20&c=2GN_MCr-DRNdJi39tw7ZcXBVmHZIrWpYeKl8vNjwdYI=' },
];

const SpecializationSection = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Doctors Specialize in You</h2>
      <div className="flex justify-around">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center">
            <img src={doctor.image} alt={doctor.name} className="rounded-full mx-auto mb-4" width={250} />
            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecializationSection;
