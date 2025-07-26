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
import EnterpriseSection2 from './enterpriseComponent/EnterpriseSection2';
import EnterpriseSection3 from './enterpriseComponent/EnterpriseSection3';
import EnterpriseSection4 from './enterpriseComponent/EnterpriseSection4';
import Community from './communityComponent/Community';
import NavbarCommunity from './communityComponent/NavbarCommunity';
import CommunitySection2 from './communityComponent/CommunitySection2';
import CommunitySection3 from './communityComponent/CommunitySection3';
import CommunitySection4 from './communityComponent/CommunitySection4';
import Login from './components/Login';
import ChapterSection1 from './ChapterComponents/ChapterSection1';
import ChapterSection2 from './ChapterComponents/ChapterSection2';
import ChapterSection3 from './ChapterComponents/ChapterSection3';
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
                            <EnterpriseSection2 />
                            <EnterpriseSection3 />
                            <EnterpriseSection4 />
                            <Footer />
                        </>
                    } />

                    <Route path="/community" element={
                        <>
                            <NavbarCommunity />
                            <Community />
                            <CommunitySection2 />
                            <CommunitySection3 />
                            <CommunitySection4 />
                            <Footer />
                        </>
                    } />
                    <Route path="/chapter" element={
                        <>
                            <NavbarCommunity />
                            <ChapterSection1 />
                            <ChapterSection2 />
                            <ChapterSection3/>
                            <EnterpriseSection3 />                                              
                            <EnterpriseSection2 />
                            <Home />
                            <Footer/>
                        </>
                    } />
                    <Route
                    path="/login"
                    element={
                        <>
                            <Navbar />
                            <Login />
                            <Footer />
                        </>
                    }
                    />

                </Routes>
            </div>
        </Router>
    );
};

export default App;
