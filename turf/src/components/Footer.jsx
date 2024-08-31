
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16 max-w-full">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-bold">BookMyTurf</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Home</a>
          <a href="/turf" className="text-gray-400 hover:text-white">Turfs</a>
          <a href="#" className="text-gray-400 hover:text-white">Courts</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
        </div>
        <div className="mt-6 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>
        <p className="mt-6 text-gray-500 text-sm">&copy; 2024 BookMyTurf. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
