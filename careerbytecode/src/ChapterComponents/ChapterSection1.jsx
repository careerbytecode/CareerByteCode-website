import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../img/enterpriseImg/background.jpeg';

const ChapterNavbar = () => {
  return (
    <section
      id="chapters-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '100vh',
        top: '0',
        width: '100%',
      }}
      className="h-[500px] top-0 flex items-center"
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          CareerByteCode{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Chapters
          </span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Connect with local tech communities worldwide. Join meetups, workshops, and networking events in your city.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all cursor-pointer">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Find Local Chapter
          </button>
          <button className="px-8 cursor-pointer py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Start New Chapter
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChapterNavbar;
