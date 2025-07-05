import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/section2.css';
import {
    faFlask,
    faCertificate,
    faUserTie,
    faCodeBranch,
    faUsers,
    faChartLine
} from '@fortawesome/free-solid-svg-icons';

const Section2 = () => {
    const [section2, setSection2] = React.useState(false);
    const section2Ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSection2(true);
                } else {
                    setSection2(false);
                }
            },
            { threshold: 0.1 }
        );

        if (section2Ref.current) {
            observer.observe(section2Ref.current);
        }

        return () => {
            if (section2Ref.current) observer.unobserve(section2Ref.current);
        };
    }, []);

    return (
        <section id="features" className="py-20 bg-gray-50">
            <div
                ref={section2Ref}
                style={{
                    opacity: section2 ? 1 : 0,
                    transform: section2 ? 'translateY(0)' : 'translateY(100px)',
                    transition: 'transform 1s ease-in-out, opacity 1s ease-in-out'
                }}
                className="max-w-7xl mx-auto px-6 lg:px-8"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose CareerByteCode?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience developer-first learning with real-world projects and industry-recognized certifications
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div id="feature-labs" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 section2-primary rounded-lg flex items-center justify-center mb-6 cursor-pointer">
                            <FontAwesomeIcon icon={faFlask} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Hands-on Labs</h3>
                        <p className="text-gray-600">Practice in real cloud environments with guided labs and instant feedback</p>
                    </div>

                    <div id="feature-certification" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 section2-secondary rounded-lg flex items-center justify-center mb-6 cursor-pointer">
                            <FontAwesomeIcon icon={faCertificate} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Certification Roadmaps</h3>
                        <p className="text-gray-600">Structured learning paths for AWS, Azure, GCP, and DevOps certifications</p>
                    </div>

                    <div id="feature-mentorship" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 section2-accent rounded-lg flex items-center justify-center cursor-pointer mb-6">
                            <FontAwesomeIcon icon={faUserTie} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Mentorship</h3>
                        <p className="text-gray-600">1-on-1 guidance from industry professionals and career coaches</p>
                    </div>

                    <div id="feature-projects" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 section2-primary rounded-lg flex items-center justify-center mb-6 cursor-pointer">
                            <FontAwesomeIcon icon={faCodeBranch} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-world Projects</h3>
                        <p className="text-gray-600">Build portfolio-worthy projects that employers actually want to see</p>
                    </div>

                    <div id="feature-community" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 section2-secondary rounded-lg flex items-center cursor-pointer justify-center mb-6">
                            <FontAwesomeIcon icon={faUsers} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Community</h3>
                        <p className="text-gray-600">Connect with peers, share knowledge, and grow together</p>
                    </div>

                    <div id="feature-tracking" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 section2-accent rounded-lg flex items-center justify-center cursor-pointer mb-6">
                            <FontAwesomeIcon icon={faChartLine} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Progress Tracking</h3>
                        <p className="text-gray-600">Monitor your learning journey with detailed analytics and insights</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
