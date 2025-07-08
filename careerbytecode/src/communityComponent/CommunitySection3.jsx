import React, { useEffect, useRef, useState } from 'react';
import amazon from '../img/communityImg/amazon.png';
import microsoft from '../img/communityImg/microsoft.png';
import google from '../img/communityImg/google.png';
import docker from '../img/communityImg/docker.png';
import redhat from '../img/communityImg/redhat.png';
import redhat from '../img/communityImg/redHat.png'
import ibm from '../img/communityImg/ibm.png';

const CommunitySection3 = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    useEffect(() => {
        const createObserver = (ref, setShow) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setShow(true);
                        }else{
                            setShow(false)
                        }
                    });
                },
                { threshold: 0.1 }
            );

            if (ref.current) observer.observe(ref.current);

            return () => {
                if (ref.current) observer.unobserve(ref.current);
            };
        };

        const cleanups = [
            createObserver(ref1, setShow1),
            createObserver(ref2, setShow2),
            createObserver(ref3, setShow3),
            createObserver(ref4, setShow4),
            createObserver(ref5, setShow5),
            createObserver(ref6, setShow6),
        ];

        return () => {
            cleanups.forEach((cleanup) => cleanup && cleanup());
        };
    }, []);

    const getStyle = (show) => ({
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
    });

    return (
        <section id="partners-grid" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Microsoft */}
                    <div ref={ref1} style={getStyle(show1)} id="partner-microsoft" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                        <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <img className="w-20 h-20 object-contain" src={microsoft} alt="Microsoft logo" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2">Microsoft</h3>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-3 inline-block">Cloud Provider</span>
                            <p className="text-gray-600 mb-4 text-sm">
                                Official Microsoft Learning Partner providing Azure certifications and cloud training programs.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Since 2019</span>
                                <span className="text-sm font-medium text-blue-600">Global</span>
                            </div>
                        </div>
                    </div>

                    {/* Amazon */}
                    <div ref={ref2} style={getStyle(show2)} id="partner-aws" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                        <div className="h-32 bg-orange-500 flex items-center justify-center">
                            <img className="w-20 h-20 object-contain" src={amazon} alt="Amazon logo" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2">Amazon Web Services</h3>
                            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full mb-3 inline-block">Cloud Provider</span>
                            <p className="text-gray-600 mb-4 text-sm">
                                AWS Training Partner delivering comprehensive cloud computing education and certification preparation.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Since 2020</span>
                                <span className="text-sm font-medium text-orange-600">Global</span>
                            </div>
                        </div>
                    </div>

                    {/* Google */}
                    <div ref={ref3} style={getStyle(show3)} id="partner-gcp" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                        <div className="h-32 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                            <img className="w-20 h-20 object-contain" src={google} alt="Google logo" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2">Google Cloud</h3>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full mb-3 inline-block">Cloud Provider</span>
                            <p className="text-gray-600 mb-4 text-sm">
                                Google Cloud Training Partner offering hands-on labs and professional cloud architect certifications.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Since 2021</span>
                                <span className="text-sm font-medium text-green-600">Global</span>
                            </div>
                        </div>
                    </div>

                    {/* Docker */}
                    <div ref={ref4} style={getStyle(show4)} id="partner-docker" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                        <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                            <img className="w-20 h-20 object-contain" src={docker} alt="Docker logo" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2">Docker</h3>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-3 inline-block">Tech Company</span>
                            <p className="text-gray-600 mb-4 text-sm">
                                Official Docker Education Partner providing containerization training and DevOps best practices.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Since 2020</span>
                                <span className="text-sm font-medium text-blue-600">Global</span>
                            </div>
                        </div>
                    </div>

                    {/* Red Hat */}
                    <div ref={ref5} style={getStyle(show5)} id="partner-redhat" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                        <div className="h-32 bg-red-600 flex items-center justify-center">
                            <img className="w-20 h-20 object-contain" src={redhat} alt="Red Hat logo" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2">Red Hat</h3>
                            <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full mb-3 inline-block">Tech Company</span>
                            <p className="text-gray-600 mb-4 text-sm">
                                Red Hat Training Partner delivering enterprise Linux, OpenShift, and cloud-native technologies.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Since 2019</span>
                                <span className="text-sm font-medium text-red-600">Global</span>
                            </div>
                        </div>
                    </div>

                    {/* IBM */}
                    <div ref={ref6} style={getStyle(show6)} id="partner-ibm" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                        <div className="h-32 bg-blue-800 flex items-center justify-center">
                            <img className="w-20 h-20 object-contain" src={ibm} alt="IBM logo" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2">IBM</h3>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-3 inline-block">Tech Company</span>
                            <p className="text-gray-600 mb-4 text-sm">
                                IBM SkillsBuild Partner providing AI, data science, and enterprise technology training programs.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Since 2021</span>
                                <span className="text-sm font-medium text-blue-600">Global</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection3;
