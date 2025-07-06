import React from 'react';
import partner1 from '../img/enterpriseImg/partners1.jpeg';
import partner2 from '../img/enterpriseImg/partners2.jpeg';
import partner3 from '../img/enterpriseImg/partner3.jpeg';
import Carousel1 from '../img/Carousel1.jpeg';
import '../CSS/enterpriseCSS/enterprise.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faCalendar } from '@fortawesome/free-solid-svg-icons';

const Enterprise = () => {

    const [sectionVisible, setSectionVisible] = React.useState(false);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setSectionVisible(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const imgCSS = {
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        height: '100%',
        margin: '0 auto',
        width: '100%',
    };

    return (
        <section className="relative w-full min-h-[600px] flex items-center text-white overflow-hidden bg-center">
            {/* 🔴 BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Carousel1})`,
                    filter: 'brightness(45%)',
                }}
            ></div>

            {/* 🟢 CONTENT */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10">
                    {/* TEXT SECTION */}
                    <div style={{ opacity: sectionVisible ? 1 : 0, transform: sectionVisible ? 'translateX(0)' : 'translateX(-100px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Partner with{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                CareerByteCode
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 mb-8">
                            Join leading organizations worldwide in upskilling their teams
                            with cutting-edge IT training and certification programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                                <FontAwesomeIcon icon={faHandshake} className="mr-2" />
                                Become a Partner
                            </button>
                            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                                Schedule Demo
                            </button>
                        </div>
                    </div>


                    <div style={{ opacity: sectionVisible ? 1 : 0, transform: sectionVisible ? 'translateX(0)' : 'translateX(100px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
                        <div id="default-carousel" className="relative w-full" data-carousel="static">
                            <div className="relative h-[250px] sm:h-[300px] md:h-96 bordering overflow-hidden rounded-lg">
                                <div className="duration-700 ease-in-out" data-carousel-item>
                                    <img src={partner3} 
                                    style={{ ...imgCSS }}
                                    className="block w-full" alt="Slide 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enterprise;
