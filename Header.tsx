import React from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      {/* Upper Navbar */}
      <div className="flex justify-between items-center h-[30px] bg-gray-200 px-8">
        <div className="font-bold text-lg">
          <Image
            src="/logo.png"
            alt="logo"
            width={23} // Add width for proper resizing
            height={40} // Add height for proper resizing
          />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <span>Find a Store</span>
          <span>Help</span>
          <span>Join Us</span>
          <span>Login</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center h-[90px] border-b border-dotted border-gray-400 px-4">
        {/* Left Section */}
        <div className="flex items-center">
          <Image
            src="/Vector.png"
            alt="Logo"
            width={40} // Add width for proper resizing
            height={40} // Add height for proper resizing
            className="h-10"
          />
        </div>

        {/* Center Section */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-black">News & Features</a>
          <a href="#" className="text-gray-800 hover:text-black">Men</a>
          <a href="#" className="text-gray-800 hover:text-black">Women</a>
          <a href="#" className="text-gray-800 hover:text-black">Kids</a>
          <a href="#" className="text-gray-800 hover:text-black">Sale</a>
          <a href="#" className="text-gray-800 hover:text-black">SNKRS</a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full px-4 py-2 w-64"
            />
            <button className="absolute right-3 top-2 text-gray-500">
              <FaSearch size={20} className="stroke-current text-gray-800" />
            </button>
          </div>

          {/* Wishlist Icon (Outlined and Thin) */}
          <button>
            <FaHeart size={24} className="stroke-current text-white-800 border-2 border-gray-800" />
          </button>

          {/* Cart Icon (Outlined and Thin) */}
          <button>
            <FaShoppingCart size={24} className="stroke-current text-gray-800 border-2 border-gray-800" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-800">Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;