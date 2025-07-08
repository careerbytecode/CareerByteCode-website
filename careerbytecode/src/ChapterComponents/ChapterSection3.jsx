import React, { useEffect } from 'react';
import chapterImg1 from '../img/chapterImg/chapterimg1.jpg';
import chapterImg2 from '../img/chapterImg/chapterimg2.jpg';
import chapterImg3 from '../img/chapterImg/chapterimg3.jpg';
import chapterImg4 from '../img/chapterImg/chapterimg4.jpg';
import chapterImg5 from '../img/chapterImg/chapterimg5.jpg';
import chapterImg6 from '../img/chapterImg/chapterimg6.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ChapterSection3 = () => {
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    const [show4, setShow4] = React.useState(false);
    const [show5, setShow5] = React.useState(false);
    const [show6, setShow6] = React.useState(false);

    const showRef1 = React.useRef(null);
    const showRef2 = React.useRef(null);
    const showRef3 = React.useRef(null);
    const showRef4 = React.useRef(null);
    const showRef5 = React.useRef(null);
    const showRef6 = React.useRef(null);

    useEffect(() => {
        const createObserver = (ref, setShow) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setShow(true);
                        } else {
                            setShow(false);
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.1,
                }
            );
            if (ref.current) observer.observe(ref.current);
            return () => {
                if (ref.current) observer.unobserve(ref.current);
            };
        };

        const cleanup1 = [
            createObserver(showRef1, setShow1),
            createObserver(showRef2, setShow2),
            createObserver(showRef3, setShow3),
            createObserver(showRef4, setShow4),
            createObserver(showRef5, setShow5),
            createObserver(showRef6, setShow6),
        ];

        return () => {
            cleanup1.forEach((cleanup) => cleanup());
        };
    }, []);

    const theStyle = (show) => ({
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
    });

    const renderChapterCard = (ref, show, img, name, role, city, country, members, nextEvent, lastMeetup, tags, bgColor, btnColor) => (
        <div ref={ref} style={theStyle(show)} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
            <div className={`h-48 ${bgColor} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{city}</h3>
                    <p className="text-sm opacity-90">{country}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">{members} Members</span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center mb-4">
                    <img className="w-12 h-12 rounded-full object-cover mr-4" src={img} alt="Chapter organizer" />
                    <div>
                        <h4 className="font-semibold text-gray-900">{name}</h4>
                        <p className="text-sm text-gray-600">{role}</p>
                        <span className="text-primary text-sm hover:underline cursor-pointer">
                            <FontAwesomeIcon icon={faLinkedin} className="mr-1" />Connect
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                        Next Event: {nextEvent}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <FontAwesomeIcon icon={faUsers} className="mr-2" />
                        Last meetup: {lastMeetup}
                    </div>
                </div>
                <div className="flex gap-2 mb-4">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-primary text-xs rounded-full bg-gray-100">
                            {tag}
                        </span>
                    ))}
                </div>
                <button className={`w-full py-3 ${btnColor} text-white rounded-lg font-semibold hover:opacity-90 transition-all`}>
                    <FontAwesomeIcon icon={faCalendarPlus} className="mr-2" />Join Chapter
                </button>
            </div>
        </div>
    );

    return (
        <section id="chapters-grid" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Local Chapters</h2>
                    <p className="text-lg text-gray-600">Find and join tech communities in your area</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderChapterCard(showRef1, show1, chapterImg1, 'Priya Sharma', 'Senior DevOps Engineer', 'Chennai', 'Tamil Nadu, India', '450+', 'Jan 28, 2024', '85 attendees', ['Cloud', 'DevOps', 'AI/ML'], 'section4-primary', 'bg-blue-600')}
                    {renderChapterCard(showRef2, show2, chapterImg2, 'Rajesh Kumar', 'Cloud Solutions Architect', 'Bengaluru', 'Karnataka, India', '720+', 'Feb 3, 2024', '120 attendees', ['Kubernetes', 'Microservices'], 'bg-purple-600', 'bg-purple-500')}
                    {renderChapterCard(showRef3, show3, chapterImg3, 'Sarah Johnson', 'Principal Engineer', 'London', 'United Kingdom', '380+', 'Mar 15, 2024', '150 attendees', ['DevOps', 'Cloud', 'AI/ML'], 'bg-blue-600', 'bg-blue-400')}
                    {renderChapterCard(showRef4, show4, chapterImg4, 'John Doe', 'Software Engineer', 'New York', 'New York, USA', '500+', 'Apr 10, 2024', '100 attendees', ['DevOps', 'Cloud', 'AI/ML'], 'from-green-500 to-green-600 bg-gradient-to-br', 'bg-green-500')}
                    {renderChapterCard(showRef5, show5, chapterImg5, 'Jane Smith', 'Data Scientist', 'San Francisco', 'San Francisco, USA', '600+', 'May 5, 2024', '120 attendees', ['DevOps', 'Cloud', 'AI/ML'], 'bg-orange-500', 'bg-orange-500')}
                    {renderChapterCard(showRef6, show6, chapterImg6, 'Emily Johnson', 'UX Designer', 'Tokyo', 'Tokyo, Japan', '700+', 'Jun 1, 2024', '130 attendees', ['DevOps', 'Cloud', 'AI/ML'], 'from-purple-500 to-purple-600 bg-gradient-to-br', 'bg-purple-500')}
                </div>
            </div>
        </section>
    );
};

export default ChapterSection3;
