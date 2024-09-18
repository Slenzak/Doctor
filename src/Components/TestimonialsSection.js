// src/components/TestimonialsSection.js
import React from 'react';

const testimonials = [
  { name: 'John Doe', text: 'Amazing service!', image: 'https://media.gettyimages.com/id/1278139568/photo/studio-portrait-of-20-year-old-woman.jpg?s=612x612&w=0&k=20&c=FSEdX6EGKrjbCvOJk9idiYZJoSErA9bwizHEkW86A3c=' },
  { name: 'Jane Smith', text: 'Highly recommend!', image: 'https://media.gettyimages.com/id/1092658864/photo/confident-young-man-wearing-purple-t-shirt.jpg?s=612x612&w=0&k=20&c=kccGmwoCpNUm40472x2v4sC8U1Rm_TRr8pXaTkkwKW0=' },
  { name: 'Albert Brooks', text: 'Will come back again.', image: 'https://media.gettyimages.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E=' },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Each and Every Client is Important</h2>
      <div className="flex justify-around">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center max-w-xs relative left-4">
            <img src={testimonial.image} alt={testimonial.name} className="rounded-full mx-auto mb-4" width={100} />
            <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
