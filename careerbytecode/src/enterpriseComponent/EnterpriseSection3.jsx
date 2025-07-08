import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStore,
    faChalkboardTeacher,
    faCogs,
    faCheck
} from '@fortawesome/free-solid-svg-icons';

import '../CSS/enterpriseCSS/enterprise.css';
const EnterpriseSection3 = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const animatedStyle = {
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        opacity: visible ? 1 : 1,
        transition: 'all 1s ease-in-out'
    };

    return (
        <section id="partnership-types" className="py-20 my-[50px] bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16" ref={sectionRef} style={animatedStyle}>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Programs</h2>
                    <p className="text-xl text-gray-600">
                        Choose the partnership model that best fits your organization
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8" style={animatedStyle}>
                    {/* Reseller Program */}
                    <div className="enterprimary p-8 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 enterprimary rounded-full flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon icon={faStore} className="enterprimary text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Reseller Program</h3>
                            <p className="text-gray-600">Sell our courses and training programs to your clients</p>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="enterprimary p-2 rounded-full mr-3" />
                                25–30% commission rates
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="enterprimary mr-3 p-2 rounded-full" />
                                White-label options available
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="enterprimary mr-3 p-2 rounded-full" />
                                Marketing support included
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="enterprimary p-2 rounded-full mr-3" />
                                Dedicated partner portal
                            </li>
                        </ul>
                        <button className="w-full py-3 cursor-pointer enterprimary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all">
                            Learn More
                        </button>
                    </div>

                    {/* Training Partner */}
                    <div className="secondary p-8 rounded-xl border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 secondary   rounded-full flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon icon={faChalkboardTeacher} className="secondary text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Training Partner</h3>
                            <p className="text-gray-600">Deliver our certified training programs to enterprises</p>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="p-2 rounded-full secondary mr-3" />
                                Instructor certification included
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="p-2 rounded-full secondary mr-3" />
                                Course materials provided
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="p-2 rounded-full secondary mr-3" />
                                Revenue sharing model
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="p-2 rounded-full secondary mr-3" />
                                Ongoing support & updates
                            </li>
                        </ul>
                        <button className="w-full py-3 secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all">
                            Learn More
                        </button>
                    </div>

                    {/* Technology Partner */}
                    <div className="accent p-8 rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-all">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 accent rounded-full flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon icon={faCogs} className="text-accent text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Technology Partner</h3>
                            <p className="text-gray-600">Integrate your platform with our learning ecosystem</p>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="p-2 rounded-full accent mr-3" />
                                API access & documentation
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="p-2 rounded-full accent mr-3" />
                                Co-development opportunities
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="p-2 rounded-full accent mr-3" />
                                Joint go-to-market strategy
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheck} className="p-2 rounded-full accent mr-3" />
                                Technical support team
                            </li>
                        </ul>
                        <button className="w-full py-3 accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseSection3;
