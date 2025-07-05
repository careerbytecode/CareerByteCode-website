import React, { useEffect, useRef, useState } from 'react';
import '../CSS/section1.css';

const Section1 = () => {
    const [rate1, setRate1] = useState(0);
    const [rate2, setRate2] = useState(0);
    const [rate3, setRate3] = useState(0);
    const [rate4, setRate4] = useState(0);
    const [scrollY, setScrollY] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const scrollRef = useRef(null);
    const sectionRef = useRef(null);

    // ✅ Observe opacity change
    useEffect(() => {
        const fadeObserver = new IntersectionObserver(
            ([entry]) => {
                setScrollY(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (scrollRef.current) {
            fadeObserver.observe(scrollRef.current);
        }

        return () => {
            if (scrollRef.current) fadeObserver.unobserve(scrollRef.current);
        };
    }, []);

    // ✅ Observe when to trigger counter
    useEffect(() => {
        const counterObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    let i = 0;
                    const interval1 = setInterval(() => {
                        i++;
                        setRate1(i);
                        if (i >= 241) clearInterval(interval1);
                    }, 5);

                    let j = 0;
                    const interval2 = setInterval(() => {
                        j++;
                        setRate2(j);
                        if (j >= 95) clearInterval(interval2);
                    }, 10);

                    let k = 0;
                    const interval3 = setInterval(() => {
                        k++;
                        setRate3(k);
                        if (k >= 500) clearInterval(interval3);
                    }, 2);

                    let l = 0;
                    const interval4 = setInterval(() => {
                        l++;
                        setRate4(l);
                        if (l >= 98) clearInterval(interval4);
                    }, 10);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            counterObserver.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) counterObserver.unobserve(sectionRef.current);
        };
    }, [hasAnimated]);

    return (
        <section
            id="impact-stats"
            ref={sectionRef}
            className="py-16 bg-white my-16"
        >
            <div
                ref={scrollRef}
                style={{
                    opacity: scrollY ? 1 : 0,
                    transform: scrollY ? 'translateY(0)' : 'translateY(100px)',
                    transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
                }}
                className="max-w-7xl mx-auto px-6 lg:px-8"
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="stat-card">
                        <div className="text-4xl font-bold section1-primary mb-2">{rate1}K+</div>
                        <div className="text-gray-600">Active Learners</div>
                    </div>
                    <div className="stat-card">
                        <div className="text-4xl font-bold section1-secondary mb-2">{rate2}+</div>
                        <div className="text-gray-600">Countries</div>
                    </div>
                    <div className="stat-card">
                        <div className="text-4xl font-bold section1-accent mb-2">{rate3}+</div>
                        <div className="text-gray-600">Hands-on Labs</div>
                    </div>
                    <div className="stat-card">
                        <div className="text-4xl font-bold text-primary mb-2 section1-primary">{rate4}%</div>
                        <div className="text-gray-600">Success Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
