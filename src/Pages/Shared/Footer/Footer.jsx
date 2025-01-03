import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className='divider'></div>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl font-semibold text-orange-500">Bistro Boss</h1>
            <p className="text-sm text-gray-400">Satisfy your cravings, anytime, anywhere.</p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Home
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Menu
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              About Us
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-500 mt-6">
          <p>&copy; 2025 Food Cart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
