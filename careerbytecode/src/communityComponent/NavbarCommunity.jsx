import React, { useState, useEffect } from 'react';
import { faCode, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css';
import TechCommunity from '../img/communityImg/TechCommunity.jpeg';          
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenMode, setScreenMode] = useState(false);

  const handleMode = () => setScreenMode(prev => !prev);

  useEffect(() => {
    document.body.style.backgroundColor = screenMode ? 'black' : 'white';
    document.body.style.color = screenMode ? 'white' : 'black';
  }, [screenMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div className="w-[98%]  flex flex-wrap justify-between items-baseline mx-auto p-4">

        {/* Logo + Icon */}
        <Link to="/" className="flex items-center space-x-3">
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center me-2 mb-2 cursor-pointer">
            <FontAwesomeIcon className='py-2 w-8' icon={faCode} />
          </button>
          <span className="text-gray-900 font-bold dark:text-white">CareerByteCode</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center xl:text-[18px] space-x-6 font-medium text-gray-700 dark:text-white">
          <Link to="/courses" className="hover:text-blue-600">Courses</Link>
          <Link to="/learning" className="hover:text-blue-600">Learning</Link>
          <Link to="/chapter" className="hover:text-blue-600">Chapters</Link>
          <Link to="/mentorship" className="hover:text-blue-600">Use-Cases</Link>
          <Link to="/enterprise" className="hover:text-blue-600">Partners</Link>
          <Link to="/community" className="hover:text-blue-600">Mentorship</Link>
        </div>

        {/* Right Side Buttons */}
        <div className="flex lg:order-2 space-x-3 items-center">
          <button className="text-gray-600 hover:text-blue-400 text-[20px]" onClick={handleMode}>
            <FontAwesomeIcon icon={faMoon} />
          </button>

          <button className="hidden cursor-pointer lg:flex items-center border border-blue-600 text-sm font-medium text-gray-900 rounded-lg h-10 hover:bg-blue-600 hover:text-white px-5">
       <Link to="/login">Sign in</Link>
          </button>

          <button className="hidden cursor-pointer lg:block bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-800">
            Start Learning
          </button>

          {/* Hamburger */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 w-10 h-10 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="w-full mt-4 lg:hidden animate-fadeInDown">
            <ul className="flex flex-col gap-4 text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <li><Link to="/courses" className="hover:text-blue-600">Courses</Link></li>
              <li><Link to="/learning" className="hover:text-blue-600">Learning Tracking</Link></li>
              <li><Link to="/chapter" className="hover:text-blue-600">Chapters</Link></li>
              <li><Link to="/mentorship" className="hover:text-blue-600">Use-Cases</Link></li>
              <li><Link to="/enterprise" className="hover:text-blue-600">Partners</Link></li>
              <li><Link to="/community" className="hover:text-blue-600">Mentorship</Link></li>
              <li><button className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Start Learning</button></li>
              <li><button className="w-full cursor-pointer border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white"><Link to="/login">Sign in</Link></button></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
