import React, { useState, useEffect, useRef } from 'react';
import avatar1 from '../img/avatar-2.jpg';
import avatar2 from '../img/avatar-3.jpg';
import avatar3 from '../img/avatar-5.jpg';

// ✅ Testimonial data array
const testimonials = [
    {
        name: "Sarah Chen",
        role: "DevOps Engineer at Microsoft",
        text: "The hands-on labs were game-changing. I went from junior developer to DevOps engineer in 8 months!",
        img: avatar1,
    },
    {
        name: "Marcus Rodriguez",
        role: "Cloud Architect at AWS",
        text: "The certification roadmap made my AWS journey clear and achievable. Now I'm leading cloud migrations!",
        img: avatar2,
    },
    {
        name: "Priya Patel",
        role: "Full Stack Developer at Google",
        text: "The mentorship program connected me with amazing professionals who guided my career transition.",
        img: avatar3,
    },
];

const Section3 = () => {
    const [section3, setSection3] = useState(false);
    const section3Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setSection3(entry.isIntersecting);
            },
            {
                threshold: 0.3,
                root: null,
            }
        );

        if (section3Ref.current) {
            observer.observe(section3Ref.current);
        }

        return () => {
            if (section3Ref.current) {
                observer.unobserve(section3Ref.current);
            }
        };
    }, []);

    return (
        <section
            id="testimonials"
            ref={section3Ref}
            style={{
                opacity: section3 ? 1 : 0,
                transition: 'all 1.5s ease-in-out',
                transform: section3 ? 'scale(1)' : 'scale(0.9)',
            }}
            className="py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
                    <p className="text-xl text-gray-600">Hear from professionals who transformed their careers</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((person, index) => (
                        <div
                            key={index}
                            className={`bg-gray-50 p-8 rounded-xl ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className="flex items-center mb-6">
                                <img src={person.img} alt={person.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{person.name}</h4>
                                    <p className="text-gray-600 text-sm">{person.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{person.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section3;
