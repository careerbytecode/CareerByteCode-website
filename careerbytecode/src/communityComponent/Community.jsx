import React from 'react';
import TechCommunity from '../img/communityImg/TechCommunity.jpeg';
import '../CSS/communityCSS/communitySection1.css';

// Import Font Awesome React components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faDownload } from '@fortawesome/free-solid-svg-icons';

const Community = () => {

    // State to control section visibility
    const [sectionVisible, setSectionVisible] = React.useState(false);
    const sectionRef = React.useRef(null);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setSectionVisible(true);
        }, 1000); // Show section after 1 second

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            id="partners-hero"
            className="relative h-screen flex items-center"
            style={{
                backgroundImage: `url(${TechCommunity})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh',
            }}
        >
            <div className="absolute inset-0 bg-black/55"></div>
            <div
            style={{ opacity: sectionVisible ? 1 : 0, transform: sectionVisible ? 'translateY(0)' : 'translateY(50px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
            ref={sectionRef}
             className="relative max-w-7xl mx-auto px-5 text-center">
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partners</span>
                </h1>

                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                    Collaborating with industry leaders to deliver world-class IT education and career opportunities across the globe.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-bold hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faHandshake} /> Join as Partner
                    </button>
                    <button className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faDownload} /> Partnership Brochure
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Community;
