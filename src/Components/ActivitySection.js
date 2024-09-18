// src/components/ActivitySection.js
import React from 'react';

const ActivitySection = () => {
  const activities = [
    { title: 'Emergency Case', description: 'The process of medical...', icon: '🚑' },
    { title: 'Health Queries', description: 'The process of medical...', icon: '💬' },
    { title: 'Painless Procedures', description: 'The process of medical...', icon: '🔧' },
  ];

  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Activity</h2>
      <div className="flex justify-around">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">{activity.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
            <p className="text-gray-600">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivitySection;
