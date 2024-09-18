// src/components/PricingSection.js
import React from 'react';

const plans = [
  { name: 'Free', price: '0', features: ['Unlimited product updates', 'Unlimited consultations'] },
  { name: 'Basic', price: '19', features: ['All Free features', 'Priority support'] },
  { name: 'Pro', price: '49', features: ['All Basic features', 'Dedicated support'] },
];

const PricingSection = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
      <div className="flex justify-around">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white shadow-md p-8 rounded-lg text-center relative right-7">
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-2xl font-bold mb-4">${plan.price}/mo</p>
            <ul className="mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
