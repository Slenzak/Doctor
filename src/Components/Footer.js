// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-8 text-center">
      <p>Made with Love by MedicalFunc | &copy; 2024 All Rights Reserved</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-blue-400">Facebook</a>
        <a href="#" className="text-blue-400">Twitter</a>
        <a href="#" className="text-blue-400">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
