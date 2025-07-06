import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import Enterprise from './enterpriseComponent/Enterprise';
import Home from './enterpriseComponent/EnterpriseSection1';
import EnterpriseSection2 from './enterpriseComponent/enterpriseSection2';
import EnterpriseSection3 from './enterpriseComponent/EnterpriseSection3';
import EnterpriseSection4 from './enterpriseComponent/EnterpriseSection4';
const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="pt-20"> {/* space for fixed navbar */}
                <Routes>
                    <Route path="/" element={
                        <>
                            <Carousel />
                            <Section1 />
                            <Section2 />
                            <Section3 />
                            <Section4 />
                            <Footer />
                        </>
                    } />
                    <Route path="/enterprise" element={
                        <>
                            <Enterprise />
                            <Home />
                           <EnterpriseSection2/>
                           <EnterpriseSection3/>
                           <EnterpriseSection4/>
                            <Footer />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
