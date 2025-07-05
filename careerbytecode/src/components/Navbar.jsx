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
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-50 mx-auto top-0 start-0 border-b border-gray-200 dark:border-gray-600 flex ">

      <div className="w-full flex flex-wrap justify-between items-baseline mx-auto p-4">

        <a href="#" className=" items-center space-x-3 ">
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center me-2 mb-2 cursor-pointer"> <FontAwesomeIcon className='font-icon-width' icon={faCode} /></button>

          <span className="text-gray-900 font-bold career-byte-text dark:text-white">CareerByteCode</span>
        </a>

        <div className="flex lg:order-2 space-x-3 lg:space-x-3 rtl:space-x-reverse">

          <button class="text-gray-600 hover:text-blue-400 cursor-pointer text-[20px]
          " onClick={handleMode}
      
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>

          <button class="relative  items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg w-30 h-10.5 hidden lg:block border hover:bg-blue-600 hover:text-white border-blue-600 cursor-pointer">
            <span class="relative px-5 py-4 transition-all ease-in duration-75  rounded-md signin-width">
              Sign in
            </span>
          </button>

          <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm h-[43px] py-2 text-center dark:bg-blue-600 hidden lg:block dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer px-4">Start Learning</button>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-[100%] lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-4 xl:space-x-8 lg:text-[16px] xl:text-[20px] rtl:space-x-reverse lg:flex-row lg:mt-0 lg:bg-transparent lg:border-0  ">
            <li>
              <a href="#" class="block w-[100%] py-2 px-3 text-white bg-blue-700 rounded-sm lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500" aria-current="page">Courses</a>
            </li>
            <li>
              <a href="#" class="block w-[100%] py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Learning</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Mentorship</a>
            </li>
            <li>
              <a href="#" class="block w-[100%] py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Enterprise</a>
            </li>
            <li>
              <a href="#" class="block w-[100%] py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Community</a>
            </li>
          </ul>


          <div className="flex mt-5 items-baseline space-x-3">
            <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 cursor-pointer focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm h-[43px] lg:hidden py-2 mt-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4">Start Learning</button>


            <button class="relative  items-center cursor-pointer justify-center p-0.5 mb-2  mt-4 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group border border-blue-700 duration-500 transition-all lg:hidden hover:bg-blue-600  hover:text-white h-[43px] ">
              <span className="relative px-[40px] py-[60px] transition-all mt-0 ease-in duration-75 bg-white signin-width dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Sign in
              </span>
            </button>
          </div>
        </div>

      </div>
    </nav>

  );
};

export default Navbar;
