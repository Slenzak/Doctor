// src/App.js
import React from 'react';
import Header from './Components/Header.js';
import HeroSection from './Components/HeroSection.js';
import ActivitySection from './Components/ActivitySection.js';
import MedicineSection from './Components/MedicineSection.js';
import SpecializationSection from './Components/SpecializationSection.js';
import PricingSection from './Components/PricingSection.js';
import TestimonialsSection from './Components/TestimonialsSection.js';
import NewsletterSection from './Components/NewsletterSection.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ActivitySection />
      <MedicineSection />
      <SpecializationSection />
      <PricingSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
