// src/components/NewsletterSection.js
import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Join Us</h2>
      <p className="text-gray-600 mb-8">
        Subscribe to our newsletter to receive the latest updates and offers.
      </p>
      <form className="flex justify-center items-center">
        <input type="email" placeholder="Your Email" className="border p-2 rounded-l-lg" />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-r-lg">Subscribe</button>
      </form>
    </section>
  );
}

export default NewsletterSection;
