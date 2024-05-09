import React from 'react';
import { FaUserCircle } from "react-icons/fa"; 

export default function Header() {
    return (
        <div className="flex justify-between items-center bg-neutral-900 text-white mx-1 py-4 px-7 ">
            {/* User Profile/Avatar */}
            <div className="flex items-center">
                <FaUserCircle className="w-8 h-8 rounded-full mr-2" />
                <span>Username</span>
            </div>
            
            {/* Notification Bell/Icon */}
            <div className="flex items-center">
                <svg className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </div>
            
            {/* Language Selection Dropdown */}
            <div className="relative">
                <select className="bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none">
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                </select>
                {/* Language selection icon */}
                <svg className="h-6 w-6 absolute right-3 top-3 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                    {/* You can add the arrow-down icon here */}
                </svg>
            </div>
            
            {/* Theme Switcher (Light/Dark Mode) */}
            <div>
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md focus:outline-none">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
