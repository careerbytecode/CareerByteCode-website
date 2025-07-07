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
import Community from './communityComponent/Community';
import NavbarCommunity from './communityComponent/NavbarCommunity'; 
import CommunitySection2 from './communityComponent/communitySection2';
import CommunitySection3 from './communityComponent/CommunitySection3';
import CommunitySection4 from './communityComponent/CommunitySection4';
import ChapterNavbar from './ChapterComponents/chapterNavbar';
const App = () => {
    return (
        <Router>
         
            <div className="pt-20"> {/* space for fixed navbar */}
                <Routes>
                    <Route path="/" element={
                        <>
                            <Navbar />
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
                            <Navbar />
                            <Enterprise />
                            <Home />
                           <EnterpriseSection2/>
                           <EnterpriseSection3/>
                           <EnterpriseSection4/>
                            <Footer />
                        </>
                    } />

                    <Route path="/community" element={
                        <>
                            <NavbarCommunity />
                           <Community/>
                           <CommunitySection2/>
                           <CommunitySection3/>
                           <CommunitySection4/>
                            <Footer />
                        </>
                    } />
                    <Route path="/chapter" element={
                        <>
                          <ChapterNavbar />
                        </>
                    } />
                    
                </Routes>
            </div>
        </Router>
    );
};

export default App;
