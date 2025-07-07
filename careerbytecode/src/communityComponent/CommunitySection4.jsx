import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUserTie, faCogs } from '@fortawesome/free-solid-svg-icons';

const CommunitySection4 = () => {
    return (
        <section id="partnership-benefits" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with CareerByteCode?</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join our ecosystem of industry leaders and help shape the future of IT education worldwide.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Global Reach */}
                    <div id="benefit-reach" className="text-center p-8">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faGlobe} className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
                        <p className="text-gray-600">
                            Access to 241,000+ IT professionals across 95+ countries for maximum brand exposure.
                        </p>
                    </div>

                    {/* Expert Experience */}
                    <div id="benefit-experience" className="text-center p-8">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faUserTie} className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Experience</h3>
                        <p className="text-gray-600">
                            Collaborate with industry experts and gain hands-on training from top IT professionals.
                        </p>
                    </div>

                    {/* Customization */}
                    <div id="benefit-customization" className="text-center p-8">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faCogs} className="text-yellow-600 text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Customization</h3>
                        <p className="text-gray-600">
                            Tailor your training programs to meet the specific needs of your organization and employees.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection4;
