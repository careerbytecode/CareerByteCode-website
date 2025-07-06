import React from 'react'
import Backgroundimg from '../img/enterpriseImg/background.jpeg'
import '../CSS/enterpriseCSS/enterprisesection2.css'
import amazon from '../img/enterpriseImg/amazon.png'
import cloud from '../img/enterpriseImg/cloud.png'
import microsoft from '../img/enterpriseImg/microsoft.png'
import ibm from '../img/enterpriseImg/ibm.png'
import salesforce from '../img/enterpriseImg/sales.png'
import oracle from '../img/enterpriseImg/oracle.png'
const EnterpriseSection2 = () => {

    const [section, setSection] = React.useState(false);
const sectionRef = React.useRef(null);

React.useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry])=>{
            if(entry.isIntersecting) {
                setSection(true);
            }else{
                setSection(false);
            }
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 
        }
    );

    if(sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => {
        if(sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
    }
}, []);

    return (
        <section
        
            id="partner-logos"
            className="py-16 relative"
            style={{
                backgroundImage: `url(${Backgroundimg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '300px',
            }}
        >
          
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            <div
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
                ref={sectionRef}
                style={{
                    opacity: section ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                    transform: section ? 'translateY(0)' : 'translateY(100px)'
                }}
            >

                <div className="text-center text-white mb-12">
                    <h2 className="text-3xl lg:text-6xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            Trusted by Industry Leaders
                        </span>
                    </h2>
                    <p className="text-lg">
                        Join hundreds of organizations already partnering with CareerByteCode
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    <div id="partner-1" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <img className="w-full h-12 object-contain" src={microsoft} alt="microsoft logo clean minimal" />
                    </div>
                    <div id="partner-2" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <img className="w-full h-12 object-contain" src={amazon} alt="amazon aws logo clean minimal" />
                    </div>
                    <div id="partner-3" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ">
                        <img className="w-full h-12 object-contain" src={cloud} alt="google cloud logo clean minimal" />
                    </div>
                    <div id="partner-4" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ">
                        <img className="w-full h-12 object-contain" src={ibm} alt="ibm logo clean minimal" />
                    </div>
                    <div id="partner-5" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ">
                        <img className="w-full h-12 object-contain" src={oracle} alt="oracle logo clean minimal" />
                    </div>
                    <div id="partner-6" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ">
                        <img className="w-full h-12 object-contain" src={salesforce} alt="salesforce logo clean minimal" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EnterpriseSection2
