import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faPaperPlane,
    faComment
} from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faLinkedin,
    faGithub,
    faDiscord
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                <FontAwesomeIcon icon={faCode} className="text-white text-sm" />
                            </div>
                            <span className="text-xl font-bold">CareerByteCode</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Empowering IT professionals worldwide with cutting-edge skills and career guidance.
                        </p>
                        <div className="flex space-x-4">
                            <span className="text-gray-400 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                            <span className="text-gray-400 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                            <span className="text-gray-400 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                            <span className="text-gray-400 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faDiscord} />
                            </span>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Learning</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><span className="hover:text-white cursor-pointer">Courses</span></li>
                            <li><span className="hover:text-white cursor-pointer">Learning Tracks</span></li>
                            <li><span className="hover:text-white cursor-pointer">Hands-on Labs</span></li>
                            <li><span className="hover:text-white cursor-pointer">Certifications</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Community</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><span className="hover:text-white cursor-pointer">Forums</span></li>
                            <li><span className="hover:text-white cursor-pointer">Mentorship</span></li>
                            <li><span className="hover:text-white cursor-pointer">Events</span></li>
                            <li><span className="hover:text-white cursor-pointer">Blog</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Stay updated with latest courses and tech trends</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary"
                            />
                            <button className="px-4 py-2 bg-primary rounded-r-lg hover:bg-primary/90 text-white">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">© 2024 CareerByteCode. All rights reserved.</p>
                    <div className="flex space-x-6 text-gray-400">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer">Contact</span>
                    </div>
                </div>
            </div>

            <div id="chat-support" className="fixed bottom-6 right-6 z-50 cursor-pointer">
                <button className="w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-500 transition-all cursor-pointer">
                    <FontAwesomeIcon icon={faComment} className="text-xl" />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
