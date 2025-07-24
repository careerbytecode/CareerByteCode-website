import React, { useEffect, useState } from 'react';
import carousel1 from '../img/Carousel1.jpeg';
import carousel2 from '../img/Carousel2.jpeg';
import carousel3 from '../img/Carousel3.png';
import '../CSS/carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPlay } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
    const [sectionVisible, setSectionVisible] = useState(false);
    const [carouselSlide, setCarouselSlide] = useState(0);

    const slides = [
        {
            id: 1,
            img: carousel1,
            texth1: "Empower Your",
            texth1span: "Tech Career",
            textp: "Join 241,000+ IT professionals across 95+ countries mastering cutting-edge skills through hands-on labs, certification prep, and expert mentorship.",
            button1: "Start Learning Free",
            button2: "Join Community",
            button2Icon: <FontAwesomeIcon icon={faUsers} className="mr-2" />,
            button1Icon: <FontAwesomeIcon icon={faPlay} className="mr-2" />
        },
        {
            id: 2,
            img: carousel2,
            texth1: "Learn Real",
            texth1span: "Tech Skills",
            textp: "Build your tech career with easy lessons, real projects, and friendly support from pros around the world.",
            button1: "Start Learning Free",
            button1Icon: <FontAwesomeIcon icon={faPlay} className="mr-2" />,
            button2: "Join Our Community",
            button2Icon: <FontAwesomeIcon icon={faUsers} className="mr-2" />
        },
        {
            id: 3,
            img: carousel3,
            texth1: "Grow With",
            texth1span: "Tech Experts",
            textp: "No matter your level, we help you grow. Join thousands learning coding, cloud computing, web development, DevOps, and more with easy guidance.",
            button1: "Start Learning Free",
            button1Icon: <FontAwesomeIcon icon={faPlay} className="mr-2" />,
            button2: "Join Our Community",
            button2Icon: <FontAwesomeIcon icon={faUsers} className="mr-2" />
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselSlide((prevIndex) => (prevIndex + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSectionVisible(true);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const currentSlide = slides[carouselSlide];

    return (
        <section
            id="hero"
            className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
        >
            {/* Background image with fade transition */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === carouselSlide ? "opacity-100 z-0" : "opacity-0 z-[-1]"
                        }`}
                    style={{ backgroundImage: `url(${slide.img})` }}
                />
            ))}

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

            {/* Content */}
            <div
                className={`max-w-7xl mx-auto px-6 lg:px-8 text-center z-20 transition-all duration-700 ease-in-out ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 transition-all duration-500 ease-in-out">
                    {currentSlide.texth1}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        {currentSlide.texth1span}
                    </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-500 ease-in-out">
                    {currentSlide.textp}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center"
                        aria-label="Start Learning Free"
                    >
                        {currentSlide.button1Icon}
                        {currentSlide.button1}
                    </button>
                    <button
                        className="px-8 cursor-pointer py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-500 flex items-center"
                        aria-label="Join Community"
                    >
                        {currentSlide.button2Icon}
                        {currentSlide.button2}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
