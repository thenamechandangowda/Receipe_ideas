import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">Created by Chandan Gowda</p>
        <a 
          href="https://github.com/chandangowda" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-orange-400 hover:text-orange-300 transition-colors"
        >
          GitHub Profile
        </a>
      </div>
    </footer>
  );
};

export default Footer;