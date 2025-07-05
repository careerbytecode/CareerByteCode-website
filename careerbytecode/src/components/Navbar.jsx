import React, { useState, useEffect } from 'react';
import { faCode, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenMode, setScreenMode] = useState(false);

  const handleMode = () => {
    setScreenMode(prev => !prev);
  };

  useEffect(() => {
    document.body.style.backgroundColor = screenMode ? 'black' : 'white';
    document.body.style.color = screenMode ? 'white' : 'black';
  }, [screenMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="w-full flex flex-wrap justify-between items-baseline mx-auto p-4">

        {/* Logo + Icon */}
        <a href="#" className="flex items-center space-x-3">
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center me-2 mb-2 cursor-pointer">
            <FontAwesomeIcon className="font-icon-width" icon={faCode} />
          </button>
          <span className="text-gray-900 font-bold career-byte-text dark:text-white">CareerByteCode</span>
        </a>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex items-center xl:text-[18px] space-x-6 font-medium text-gray-700 dark:text-white">
          <a href="#" className="hover:text-blue-600">Courses</a>
          <a href="#" className="hover:text-blue-600">Learning</a>
          <a href="#" className="hover:text-blue-600">Mentorship</a>
          <a href="#" className="hover:text-blue-600">Enterprise</a>
          <a href="#" className="hover:text-blue-600">Community</a>
        </div>

        {/* Right buttons */}
        <div className="flex lg:order-2 space-x-3 rtl:space-x-reverse items-center">
          <button className="text-gray-600 hover:text-blue-400 cursor-pointer text-[20px]" onClick={handleMode}>
            <FontAwesomeIcon icon={faMoon} />
          </button>

         
          <button className="hidden lg:flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg w-30 h-10.5 border border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer">
  <span className="px-5 py-2 transition-all ease-in duration-75 rounded-md">
    Sign in
  </span>
</button>

{/* Start Learning - visible only on large screen */}
<button
  type="button"
  className="hidden lg:block text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm h-[43px] px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
>
  Start Learning
</button>
          {/* Hamburger button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none cursor-pointer focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Toggle menu (mobile) */}
        {isMenuOpen && (
          <div className="w-full mt-4 lg:hidden animate-fadeInDown">
            <ul className="flex flex-col gap-4 font-medium text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <li><a href="#" className="hover:text-blue-600">Courses</a></li>
              <li><a href="#" className="hover:text-blue-600">Learning</a></li>
              <li><a href="#" className="hover:text-blue-600">Mentorship</a></li>
              <li><a href="#" className="hover:text-blue-600">Enterprise</a></li>
              <li><a href="#" className="hover:text-blue-600">Community</a></li>
              <li>
                <button className="w-full text-white bg-blue-600 rounded-lg py-2 hover:bg-blue-700">Start Learning</button>
              </li>
              <li>
                <button className="w-full border border-blue-600 text-blue-600 rounded-lg py-2 hover:bg-blue-600 hover:text-white">Sign in</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
