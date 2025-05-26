import React from 'react';
import { Bell, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex justify-between fixed ml-[17vw] z-10 w-[82vw] items-center bg-white shadow px-6 py-3">

        {/* Left side */}
        <div>
           Admin Dashboard
        </div>


      {/* Search Bar */}
      <div className="flex items-center space-x-2 w-64 bg-[#cac3c32b] h-8 pl-2 rounded-md">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-6">
        {/* Notification icon */}
        <button className="relative text-gray-600 hover:text-gray-800">
          <Bell className="w-5 h-5" />
          {/* Optional notification badge */}
          {/* <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span> */}
        </button>

        {/* User circle with initials */}
        <div className="bg-blue-100 text-blue-700 font-semibold rounded-full w-8 h-8 flex items-center justify-center">
          SA
        </div>
      </div>
    </div>
  );
};

export default Navbar;
