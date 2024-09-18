// src/components/Header.js
import React from 'react';
import '../App.css'

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MedicalFunc</h1>
      <nav className="flex space-x-4">
        <a href="#" className="text-gray-600">Home</a>
        <a href="#" className="text-gray-600">Product</a>
        <a href="#" className="text-gray-600">Pricing</a>
        <a href="#" className="text-gray-600">Contact</a>
      </nav>
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Join Us</button>
      </div>
    </header>
  );
}

export default Header;
