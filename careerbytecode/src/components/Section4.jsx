import React, { useEffect, useRef, useState } from 'react';
import '../CSS/section4.css';
const Section4 = () => {
    const [section4, setSection4] = React.useState(false);
    const section4Ref = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setSection4(entry.isIntersecting);
            },
            {
                threshold: 0.3,
                root: null,
            }
        );

        const section4Element = document.getElementById('cta');
        if (section4Element) {
            observer.observe(section4Element);
        }

        return () => {
            if (section4Element) {
                observer.unobserve(section4Element);
            }
        };
    }, []);

    return (
        <section id="cta" className="py-20 bg-gradient-to-r from-primary to-secondary section4-primary">
            <div ref={section4Ref} style={{
                opacity: section4 ? 1 : 0,
                transition: 'all 1s ease-in-out',
                transform: section4 ? 'translateY(0px)' : 'translateY(100px)',
            }} className="max-w-4xl mx-auto text-center px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
                <p className="text-xl text-blue-100 mb-8">Join thousands of professionals who've accelerated their tech careers with CareerByteCode</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                      Start Free Trial
                  </button>
                  <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                      Partner With Us
                  </button>
              </div>
          </div>
      </section>

  )
}

export default Section4